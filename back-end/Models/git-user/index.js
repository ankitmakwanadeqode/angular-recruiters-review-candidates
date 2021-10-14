/*
 * @file: index.js
 * @description: It Contain function layer for collection.
 * @author: Ankit Makwana
 */

const mongoose = require('mongoose')
const dbSchema = require('./db-schema')
const bcrypt = require('bcrypt')

class GitUserClass {

}

dbSchema.loadClass(GitUserClass);

module.exports = mongoose.model('gituser', dbSchema);