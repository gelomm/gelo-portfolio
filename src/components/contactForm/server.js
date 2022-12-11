const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running"));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "rpa.developer456@gmail.com",
        pass: "mktalddhiwmbmbex",
    },
});

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
        from: name,
        to: "rpa.developer456@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };
    transporter.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});