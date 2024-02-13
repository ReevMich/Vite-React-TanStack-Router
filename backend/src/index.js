const fastify = require('fastify')
const { PrismaClient } = require('@prisma/client')
const cors = require('@fastify/cors');

const prisma = new PrismaClient()
const app = fastify({ logger: true })
app.register(cors)


app.post(`/contact/new`, async (req, res) => {
  const result = await prisma.post.create({
    data: {
      first: "",
      last: "",
      avatar: "",
      twitter: "",
      notes: "",
      favorite: "",
    },
  })
  return result
})

app.put('/contact/:id', async (req, res) => {
  const { id } = req.params
  delete req.params.id;
  try {
    const contact = await prisma.contact.update({
      where: { id: Number(id) },
      data: {
        ...req.params
      },
    })

    return contact
  } catch (error) {
    return { error: `Contact with ID ${id} does not exist in the database` }
  }
})


app.delete('/contact/:id', async (req, res) => {
  const { id } = req.params

  try {
    const contact = await prisma.contact.delete({
      where: { id: Number(id) },
    })

    return contact
  } catch (error) {
    return { error: `Contact with ID ${id} does not exist in the database` }
  }
})

app.get('/contacts', async (req, res) => {
  const contacts = await prisma.contact.findMany()
  return contacts
})

app.get(`/contact/:id`, async (req, res) => {
  const { id } = req.params

  const contact = await prisma.contact.findUnique({
    where: { id: Number(id) },
  })
  return contact
})

app.listen({ port: 3000 }, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-fastify#using-the-rest-api`),
)
