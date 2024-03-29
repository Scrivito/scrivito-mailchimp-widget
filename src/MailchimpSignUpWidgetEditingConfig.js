import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("MailchimpSignUpWidget", {
  title: "Mailchimp Sign Up",
  attributes: {
    buttonText: {
      title: "text for submit button",
    },
  },
  properties: [ "buttonText", "successMessage" ],
  initialContent: {
    buttonText: "Sign me up",
    successMessage: "Thank you for signing up!",
  },
});
