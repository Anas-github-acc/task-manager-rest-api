import postmark from 'postmark';
// postmark is a library that allows us to send emails
postmark.initialize(process.env.POSTMARK_API_KEY);

const sendWelcomeEmail = (email, name) => {
    postmark.sendEmail({
        "From": "202352322@iiitvadodara.ac.in",
        "To": email,
        "Subject": "Thanks for joining in!",
        "TextBody": `Welcome to the app, ${name}! I guess you are enjoying the app.`,
        "MessageStream": "outbound"
    });
}

const sendCancelationEmail = (email, name) => {
    postmark.sendEmail({
        "From": "202352322@iiitvadodara.ac.in",
        "To": email,
        "Subject": "Sorry to see you go!",
        "TextBody": `Bye, ${name}. I hope to see you back sometime soon.`,
        "MessageStream": "outbound"
    });
}

export { sendWelcomeEmail, sendCancelationEmail };