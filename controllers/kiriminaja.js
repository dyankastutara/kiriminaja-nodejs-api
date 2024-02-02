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
      express: async (req, res) => {
         try{
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/shipping_price`,{
              origin: req.body.origin,
              destination: req.body.destination,
              weight: req.body.weight,
              insurance: req.body.insurance,
              item_value: req.body.item_value
            },{
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
            const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v3/instant/pickup/request`,{
               service: ["gosend","grab_express"],
               item_price: req.body.item_price,
               origin: {
                  lat: req.body.origin.lat,
                  long: req.body.origin.long,
                  address: req.body.origin.address
               },
               destination: {
                  lat: req.body.destination.lat,
                  long: req.body.destination.long,
                  address: req.body.destination.address
               },
               weight: req.body.weight,
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
          const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v2/request_pickup`, {
            name : req.body.name,
            address : req.body.address,
            phone : req.body.phone,
            kecamatan_id : req.body.kecamatan_id,
            packages : req.body.packages,
            zipcode : req.body.zipcode,
            schedule : req.body.schedule,
            drop: req.body.drop,
            packages: req.body.packages
          },{
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
          const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/v2/request_pickup`, {
            packages: req.body.packages
          },{
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