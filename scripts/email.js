#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'nchen.dev@mac.com',
    from: 'nchen.dev@mac.com',
    subject: 'Hello world',
    text: 'hello',
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
