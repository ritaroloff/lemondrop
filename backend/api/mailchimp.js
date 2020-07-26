const express = require('express');
const router = express.Router();
const emailValidator = require('email-validator');
const hasToken = require('../middlewares/token').hasToken;
const MailchimpService = require('../services/mailchimp');

/**
 * POST => /api/mailchimp/subscribe
 */
router.post('/subscribe', hasToken, (req, res, next) => {
  const { email_address } = req.body;

  if (!emailValidator.validate(email_address))
    return res.status(400).json({
      status: 'failed',
      message: 'Invalid email',
    });

  MailchimpService.subscribe(email_address)
    .then(() => {
      return res.status(200).json({
        status: 'success',
        message: 'Thanks! Your email has been added.',
      });
    })
    .catch((msg) => {
      return res.status(200).json({
        status: 'failed',
        message: msg,
      });
    });
});

module.exports = router;
