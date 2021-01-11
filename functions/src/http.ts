import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

import * as express from 'express';

import * as cors from 'cors';

export const basicHTTP = functions.https.onRequest((request, response) => {
    const name = request.query.name;

    if (!name) {
        response.status(400).send('you must supply a name')
    }
    response.send(`Hello ${name}!`);
})

const app = express();
app.use(cors({ origin: true }))

app.get('/cat', (request, response) => {
    response.send('CAT');
})

app.get('/dog', (request, response) => {
    response.send('DOG');
})

export const api = functions.https.onRequest(app);