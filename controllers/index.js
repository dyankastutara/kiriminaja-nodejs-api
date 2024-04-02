"use strict";
require("dotenv").config();
const axios = require("axios");
module.exports = {
  coveragearea: {
    province: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/province`,
          {},
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    city: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/city`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    district: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/kecamatan`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    search: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v2/get_address_by_name
          `,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
  },
  express: {
    schedule: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v2/schedules`,
          {},
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    pricing: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v5/shipping_price`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    pickup: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v5/request_pickup`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    tracking: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/tracking`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    void: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v3/cancel_shipment`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
  },
  instant: {
    pricing: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v4/instant/pricing`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    pickup: async (obj) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v3/instant/pickup/request
          `,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    find_driver: async (obj) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v4/instant/pickup/find-new-driver
          `,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    tracking: async (req, res) => {
      try {
        const response = await axios.get(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v4/instant/tracking/${req.body.order_id}
          `,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    void: async (req, res) => {
      try {
        const response = await axios.delete(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v4/instant/pickup/void/${req.body.order_id}
          `,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
  },
  set_callback: async (req, res) => {
    try {
      const response = await axios.post(
        `${process.env.HOST_KIRIMINAJA}/api/mitra/set_callback`,
        req.body,
        {
          headers: {
            Authorization: req.headers.authorization,
          },
        }
      );
      res.json(response.data);
    } catch (e) {
      res.json(e.response.data);
    }
  },
  checkcost: {
    express: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v5/shipping_price`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    instant: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v4/instant/pricing`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        const { data } = response;
        res.json(data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
  },
  schedules: async (req, res) => {
    try {
      const response = await axios.post(
        `${process.env.HOST_KIRIMINAJA}/api/mitra/v2/schedules`,
        {},
        {
          headers: {
            Authorization: req.headers.authorization,
          },
        }
      );
      res.json(response.data);
    } catch (e) {
      res.json(e.response.data);
    }
  },
  pickup: {
    express: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v5/request_pickup`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    instant: async (obj) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v3/instant/pickup/request
          `,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
  },
  tracking: {
    express: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/tracking`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
  },
  void: {
    express: async (req, res) => {
      try {
        const response = await axios.post(
          `${process.env.HOST_KIRIMINAJA}/api/mitra/v3/cancel_shipment`,
          req.body,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
    instant: async (req, res) => {
      try {
        const response = await axios.delete(
          `${process.env.HOST_KIRIMINAJA}/open-api/v1/instants/${req.params.order_id}`,
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        );
        res.json(response.data);
      } catch (e) {
        res.json(e.response.data);
      }
    },
  },
};
