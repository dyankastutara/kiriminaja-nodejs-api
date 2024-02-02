'use strict';
require('dotenv').config();

module.exports = {
   coveragearea: {
      province: async (req, res) => {},
      city: async (req, res) => {},
      district: async (req, res) => {},
   },
   checkcost: {
      express: async (req, res) => {
         try{
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/shipping_price`,req.body,{
              headers: {
                Authorization : process.env.API_KEY_KIRIMINAJA
              }
            })
            const { data } = response;
            res.send(data);
          }catch(e){
            res.send(e.response?.data);
          }
      },
      instant: async (req, res) => {
         try{
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v3/instant/pickup/request`,req.body,{
               headers: {
                  Authorization : process.env.API_KEY_KIRIMINAJA
               }
            })
            const { data } = response;
            res.send(data);
         }catch(e){
            res.send(e.response?.data);
         }
      },
   },
   schedules: async (req, res) => {
      try{
        const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v2/schedules`,{},{
          headers: {
            Authorization : process.env.API_KEY_KIRIMINAJA
          }
        })
        res.send(response.data);
      }catch(e){
        res.send(e.response.data);
      }
   },
   pickup: {
      express: async (req, res) => {
        try {
          const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v2/request_pickup`, req.body,{
            headers: {
              Authorization : process.env.API_KEY_KIRIMINAJA
            }
          })
          res.send(response.data)
        } catch (e) {
          res.send(e.response.data)
        }
      },
      instant: async (obj) => {
        try {
          const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v2/request_pickup`, req.body,{
            headers: {
              Authorization : process.env.API_KEY_KIRIMINAJA
            }
          })
          res.send(response.data);
        } catch (e) {
          res.send(e.response.data);
        }
      },
    },
    tracking: async (req, res) => {
      try{
        const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/tracking`, {
          order_id: req.body.awb
        },{
          headers: {
            Authorization : process.env.API_KEY_KIRIMINAJA
          }
        })
        res.send(response.data);
      }catch(e){
        res.data(e.response.data)
      }
    }
}