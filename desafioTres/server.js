import twilio from 'twilio'
import {config} from './config.js'

const clientTwilio = twilio(config.auth,config.pass)

const msjData = {
    body:"hola jere",
    from:config.cel,
    to:"+5401132436872"
}

try {
    const msj = await clientTwilio.messages.create(msjData)
    console.log(msj)
} catch (error) {
    console.log(error)
}