"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const getAll_1 = require("./getAll");
const createContact_1 = require("./createContact");
const deleteContact_1 = require("./deleteContact");
var server = restify_1.createServer();
server.get('/contacts', getAll_1.getAll);
server.post('/contacts', createContact_1.createContact);
server.del('/contacts/:id', deleteContact_1.deleteContact);
const port = 8080;
server.listen(port, function () {
    console.log('API is listening');
});
