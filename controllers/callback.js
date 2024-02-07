'use strict';
require('dotenv').config();
const axios = require("axios")

const checkNumberOrderShipping = (arr) => arr.map(item => item.order_id.includes("PLG-OID"))
const checkNumberPackageShipping = (arr) => arr.map(item => item.order_id.includes("PLG-PID"))

const updateOrders = async (obj) => {
  try{
    const response = await axios.patch(`${process.env.API_PLASGOS}/callback/orders/update/status`,{
      data: obj.data,
      status: obj.status
    },{
      headers: {
        Authorization : req.headers.authorization
      }
    })
    const { data } = response;
    return data;
  }catch(e){
    return e.response?.data;
  }
}
const updatePackages = async (obj) => {
  try{
    const response = await axios.patch(`${process.env.API_PLASGOS}/callback/packages/update/status`,{
      data: obj.data,
      status: obj.status
    },{
      headers: {
        Authorization : req.headers.authorization
      }
    })
    const { data } = response;
    return data;
  }catch(e){
    return e.response?.data;
  }
}
module.exports = {
  set: async (req, res) => {
    let finalResult = {
      data:{},
      success: false,
      message: ''
    }
    try{
			const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/set_callback`, {
        url: req.body.url
      }, {
				headers:{
					Authorization : process.env.API_KEY_KIRIMINAJA
				}
			})
      finalResult.data = response.data;
      finalResult.success = true;
      finalResult.message = "Berhasil set callback kiriminaja";
      res.status(200).json(finalResult);
    }catch(e){
      finalResult.message = e.message;
      res.status(500).json(finalResult);
    }
  },
  webhook: async (req, res) => {
    let finalResult = {
      status: false,
      status_code: 0
    }
    try{
      const { method, data } = req.body;
      // express
      if(req.token !== process.env.API_KEY_KIRIMINAJA){
        throw new Error("Callback Webhook Kiriminaja Not valid")
      }
      let data_oids = checkNumberOrderShipping(data)
      let data_pids = checkNumberPackageShipping(data)
      if(method === 'validated_packages'){
        console.log("validated_packages express");
      }
      if(method === 'processed_packages'){
        console.log("processed_packages express");
        if(data_oids.length > 0){
          await updateOrders({
            data: data_oids
          })
        }
      }
      if(method === 'shipped_packages'){
        console.log("shipped_packages express");
        if(data_oids.length > 0){
          await updateOrders({
            data: data_oids,
            status : 6
          })
        }
        if(data_pids.length > 0){
          await updatePackages({
            data: data_pids,
            status : 5
          })
        }
      }
      if(method === 'finished_packages'){
        console.log("finished_packages express");
        if(data_oids.length > 0){
          await updateOrders({
            data: data_oids,
            status : 7
          })
        }
        if(data_pids.length > 0){
          await updatePackages({
            data: data_pids,
            status : 6
          })
        }

      }
      if(method === 'returned_packages'){
        console.log("returned_packages express");
        if(data_pids.length > 0){
          await updatePackages({
            data: data_pids,
            status : 10
          })
        }
      }
      if(method === 'return_finished_packages'){
        console.log("return_finished_packages express");
        if(data_pids.length > 0){
          await updatePackages({
            data: data_pids,
            status : 11
          })
        }
      }
      if(method === 'rejected_packages'){
        console.log("rejected_packages express");
      }
      // instant
      if(method === 'instant_payment_confirmed'){}
      if(method === 'instant_validated_packages'){}
      if(method === 'instant_finished_packages'){
        const UpdateInstantArrived = await updateOrders(data, 7)
      }
      if(method === 'instant_rejected_packages'){}
      if(method === 'instant_canceled_packages'){}
      if(method === 'instant_allocated_packages'){}

      finalResult.success = true;
      finalResult.status_code = 200;
      res.status(200).json(finalResult)
    }catch(e){
      finalResult.status_code = 500;
      res.status(500).send("Not valid")
    }
  }
}
