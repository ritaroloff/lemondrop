const axios = require('axios').default;

class MailchimpServices {
  static username = 'lemondrop';
  static baseUrl = 'https://<dc>.api.mailchimp.com/3.0';

  static subscribe(emailAddress) {
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const dc = apiKey.split('-')[1];
    const fullUrl = `${this.baseUrl.replace('<dc>', dc)}/lists/${audienceId}`;
    const creds = new Buffer(`${this.username}:${apiKey}`).toString('base64');

    console.log(emailAddress);

    const header = {
      Authorization: `Basic ${creds}`,
    };

    const body = {
      members: [
        {
          email_address: emailAddress,
          status: 'subscribed',
        },
      ],
    };

    return axios
      .post(fullUrl, body, {
        headers: header,
      })
      .catch((err) => Promise.reject('We could not process your request. Please try again!'))
      .then((res) => {
        if (res.data.errors.length > 0) {
          const errorCode = res.data.errors[0].error_code;
          const message = res.data.errors[0].error;
          if (errorCode !== 'ERROR_CONTACT_EXISTS') return Promise.reject(message);
          else
            return Promise.reject(
              'The email has already been registered. Please submit another email.'
            );
        } else {
          return Promise.resolve();
        }
      });
  }
}

module.exports = MailchimpServices;
