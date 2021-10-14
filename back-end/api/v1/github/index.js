/*
 * @file: index.js
 * @description: It contain all routes.
 * @author: Ankit Makwana
 */


const searchRepo = require('./searchRepo')
const searchUser = require('./searchUser')

module.exports = [searchRepo, searchUser];

