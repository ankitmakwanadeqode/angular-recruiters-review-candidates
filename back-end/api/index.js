/*
 * @file: index.js
 * @description: It combine all routers.
 * @author: Ankit Makwana
 */

const github = require('./v1/github')

// Combine all Routes
module.exports = [
    ...github
]
