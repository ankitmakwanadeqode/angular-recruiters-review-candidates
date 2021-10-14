const createError = require("http-errors");
const User = require("../Models/user");
const axios = require("axios");
require("dotenv").config();

module.exports = {
  search: async (req, res, next) => {
    try {
      console.log("Req payload: ", req.query)
      const searchText = req.query.repo
      const page = req.query.page || 1
      const limit = req.query.limit || 10
      axios
        .get(`https://api.github.com/search/repositories?q=${searchText}&page=${page}&per_page=${limit}`)
        .then(function (response) {
          // console.log(response.data);
          res.send({ succes: true, statusCode: 200, data: response.data });
        })
        .catch(function (error) {
          console.log(error);
          res.send({ succes: false, statusCode: 400 });
        });

    } catch (error) {
      next(error);
    }
  },
};
