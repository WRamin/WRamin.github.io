const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'raminballer23@gmail.com',  
            pass: '3Xfxkyh8'           
        }
    });

    // Define email options
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'ramin.w7@outlook.com',      
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
