"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.basicHTTP = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const express = require("express");
const cors = require("cors");
exports.basicHTTP = functions.https.onRequest((request, response) => {
    const name = request.query.name;
    if (!name) {
        response.status(400).send('you must supply a name');
    }
    response.send(`Hello ${name}!`);
});
const app = express();
app.use(cors({ origin: true }));
app.get('/cat', (request, response) => {
    response.send('CAT');
});
app.get('/dog', (request, response) => {
    response.send('DOG');
});
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=http.js.map