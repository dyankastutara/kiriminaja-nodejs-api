'use strict';
require('dotenv').config();
const axios = require("axios")

module.exports = {
  set: async (req, res) => {
    try{
			const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/set_callback`, req.body, {
				headers:{
					Authorization : process.env.API_KEY_KIRIMINAJA
				}
			})
      const { data } = response;
      res.json(data);
    }catch(e){
      res.json(e.response?.data);
    }
  },
  webhook: async (req, res) => {
    try{
      if(req.token !== process.env.API_KEY_KIRIMINAJA){
        throw new Error("Callback Webhook Kiriminaja Not valid")
      }
      const response = await axios.patch(`${process.env.API_PLASGOS}/callback/kiriminaja`,req.body,{
        headers: {
          Authorization : req.headers.authorization
        }
      })
      res.json(response.data)
    }catch(e){
      res.json(e.response?.data)
    }
  }
}
