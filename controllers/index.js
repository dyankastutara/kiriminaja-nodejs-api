'use strict';
require('dotenv').config();
const axios = require("axios")
module.exports = {
   coveragearea: {
      province: async (req, res) => {
         try{
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/province`,{},{
              headers: {
                Authorization : req.headers.authorization
              }
            })
            const { data } = response;
            res.json(data);
          }catch(e){
            res.json(e.response.data);
          }
      },
      city: async (req, res) => {
         try{
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/city`,req.body,{
              headers: {
                Authorization : req.headers.authorization
              }
            })
            const { data } = response;
            res.json(data);
          }catch(e){
            res.json(e.response.data);
          }
      },
      district: async (req, res) => {
         try{
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/kecamatan`,req.body,{
              headers: {
                Authorization : req.headers.authorization
              }
            })
            const { data } = response;
            res.json(data);
          }catch(e){
            res.json(e.response.data);
          }
      },
   },
   checkcost: {
      express: async (req, res) => {
         try{
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/shipping_price`,req.body,{
              headers: {
                Authorization : req.headers.authorization
              }
            })
            const { data } = response;
            res.json(data);
          }catch(e){
            res.json(e.response.data);
          }
      },
      instant: async (req, res) => {
         try{
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v3/instant/pickup/request`,req.body,{
               headers: {
                  Authorization : req.headers.authorization
               }
            })
            const { data } = response;
            res.json(data);
         }catch(e){
            res.json(e.response.data);
         }
      },
   },
   schedules: async (req, res) => {
      try{
        const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v2/schedules`,{},{
          headers: {
            Authorization : req.headers.authorization
          }
        })
        res.json(response.data);
      }catch(e){
        res.json(e.response.data);
      }
   },
   pickup: {
      express: async (req, res) => {
        try {
          const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v2/request_pickup`, req.body,{
            headers: {
              Authorization : req.headers.authorization
            }
          })
          res.json(response.data)
        } catch (e) {
          res.json(e.response.data)
        }
      },
      instant: async (obj) => {
        try {
          const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v2/request_pickup`, req.body,{
            headers: {
              Authorization : req.headers.authorization
            }
          })
          res.json(response.data);
        } catch (e) {
          res.json(e.response.data);
        }
      },
   },
   tracking: {
    express: async (req, res) => {
      try{
        const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/tracking`, req.body,{
          headers: {
            Authorization : req.headers.authorization
          }
        })
        res.json(response.data);
      }catch(e){
        res.json(e.response.data)
      }
    }
   },
   void: {
     express: async (req, res) => {
       try{
         const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v3/cancel_shipment`, req.body,{
           headers: {
             Authorization : req.headers.authorization
           }
         })
         res.json(response.data);
       }catch(e){
         res.json(e.response.data)
       }
     },
     instant: async (req, res) => {
       try{
         const response = await axios.delete(`${process.env.HOST_KIRIMINAJA}/open-api/v1/instants/${req.params.order_id}`,{
           headers: {
             Authorization : req.headers.authorization
           }
         })
         res.json(response.data);
       }catch(e){
         res.json(e.response.data)
       }
     }
   }
}
