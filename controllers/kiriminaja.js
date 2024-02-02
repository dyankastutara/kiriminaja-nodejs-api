'use strict';
require('dotenv').config();

const costKiriminajaExpress = async (obj) => {
   try{
     const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/shipping_price`,{
       origin: obj.origin,
       destination: obj.destination,
       weight: obj.weight,
       insurance: obj.insurance,
       item_value: obj.item_value
     },{
       headers: {
         Authorization : process.env.API_KEY_KIRIMINAJA
       }
     })
     const { data } = response;
     return data;
   }catch(e){
     return e.response?.data;
   }
}
const costKiriminajaInstant = async (obj) => {
   try{
      const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v3/instant/pickup/request`,{
         service: ["gosend","grab_express"],
         item_price: obj.item_price,
         origin: {
         lat: obj.origin.lat,
         long: obj.origin.long,
         address: obj.origin.address
         },
         destination: {
         lat: obj.destination.lat,
         long: obj.destination.long,
         address: obj.destination.address
         },
         weight: obj.weight,
         packages: [],
         vehicle: {
         "name":"motor"
         }
      },{
         headers: {
         Authorization : process.env.API_KEY_KIRIMINAJA
         }
      })
      const { data } = response;
      return data
   }catch(e){
      return e.response.data;
   }
}

module.exports = {
   coveragearea: {
      province: async (req, res) => {},
      city: async (req, res) => {},
      district: async (req, res) => {},
   },
   checkcost: {
      express: async (req, res) => {},
      instant: async (req, res) => {},
   }
}