import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import Mailjet, { SendEmailV3_1 } from "node-mailjet";

import { PrismaClient } from '@prisma/client'

const app = express()

const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

if(process.env.MAILJET_API_KEY === undefined || process.env.MAILJET_SECRET_KEY === undefined){
  throw new Error("Mailjet Api Key or Secret Key missing!")
}
// const mailjet = new Mailjet({
//   apiKey: process.env.MAILJET_API_KEY,
//   apiSecret: process.env.MAILJET_SECRET_KEY
// });

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY,
);

app.get('/works', async (req, res) => {
  const works = await prisma.works.findMany()

  res.json(works)
})

app.post('/mail', async (req,res) => {
  const { name, email, message } = req.body

  const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "lucas.rodrigues.sousa@lrds.com.br",
              },
              To: [
                {
                  Email: "lucas.rodrigues.sousa@lrds.com.br",
                }
              ],
              Subject: "Portifolio Message!",
              TextPart: message,
              HTMLPart: `<h2 style="color:#4F4869;font-size:1.75rem">From: ${name} - ${email}</h2><p style="color:#685F8C;font-size:1.25rem;">${message}</p>`
            }
          ]
        })

  const result =  await request
      .then((result) => {
          return result.body
      })
      .catch((err) => {
          return err.statusCode
      })


    res.json({ result })
})

app.listen(3333)