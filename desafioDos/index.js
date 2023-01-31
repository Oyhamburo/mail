import { createTransport } from "nodemailer";
import { config } from "./config.js";
const TEST_MAIL = 'oyhamburo.jeremias@gmail.com'

const transporter = createTransport({
    service: 'gmail',
    port:587,
    auth: {
        user: config.user,
        pass: config.password
    },
})

const mailOptions = {
    from: 'Servidor Node.js con img',
    to: TEST_MAIL,
    subject: "Mail de prueb desde Node.js",
    html: '<h1 style="color: burlywood;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments:[
        {
            path: "fondoDinoPixel.jpg"
        }
    ]
}

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}