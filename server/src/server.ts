import express from 'express'

import { PrismaClient } from '@prisma/client'

const app = express()

const prisma = new PrismaClient()

app.use(express.json())

app.get('/', async (req, res) => {
  const works = await prisma.works.findMany()

  res.json(works)
})

app.listen(3333)