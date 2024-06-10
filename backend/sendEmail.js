import nodemailer from "nodemailer";

const sendEmailToReceiver = (orderId,receiverEmail,receiverName) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GOOGLE_EMAIL_ID, //Sender Email
          pass: process.env.GOOGLE_APP_ID, // App password from Gmail account
        },
      });
    
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: {
                name: 'OutReachTeam',
                address: process.env.GOOGLE_EMAIL_ID,
            },
            to: receiverEmail, // list of receivers
            subject: `Payment Confirmed: Your TechNest order #${orderId} is ready to be dispatched and will be delivered soon.`, // Subject line
            text: "Payment Received: Thanks for shopping with TechNest!", // plain text body
            html: 
            `<h2>Dear ${receiverName},</h2>
            <p>Congratulations! Your payment for order #${orderId} has been successfully processed.</p>
            <p>Your order is now being prepared for dispatch and will be delivered to you soon.</p>
            <p>Thank you for choosing TechNest. We appreciate your business and look forward to
            serving you again in the future.</p>
            <br>
            <p>Best regards,</p>
            <p>TechNest Customer Service Team</p>`, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
    main().catch(console.error);
    
}

export default sendEmailToReceiver;