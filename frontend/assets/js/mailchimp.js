(($) => {
  'use strict';

  const accessKey = '2jXxOvxTsn';
  const apiEndpoint = 'http://lemondrop-api.diodeiva.com';

  jQuery(document).ready(function ($) {
    $('.subscription-form').on('submit', function (e) {
      e.preventDefault();

      const input = $(this).find('[name=email]');
      const submitButton = $(this).find('[type=submit]');

      submitButton.prop('disabled', true).html('<div class="loader"></div>');

      const email = input.val();

      subscribe(email, input, submitButton);
    });
  });

  const subscribe = (email, input, submitButton) => {
    $.ajax({
      url: apiEndpoint + '/api/mailchimp/subscribe',
      method: 'POST',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('AccessKey', accessKey);
      },
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        email_address: email,
      }),
      success: (data) => {
        if (data.status === 'success') {
          new Noty({
            type: 'success',
            text: 'Thanks! Your email has been added.',
          }).show();

          input.val('');
        } else {
          new Noty({
            text: data.message,
            type: 'error',
          }).show();
        }

        submitButton.prop('disabled', false).html('Sign Up');
      },
      error: (jqxhr) => {
        new Noty({
          text: jqxhr.responseJSON.message,
          type: 'error',
        }).show();

        submitButton.prop('disabled', false).html('Sign Up');
      },
    });
  };
})(jQuery);
