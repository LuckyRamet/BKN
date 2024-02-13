const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { card_id : '1580401268784', password, email: 'andy@ggg.mail' ,name :'Ramet',lastname :'intses',phone :'0842074290'},
  { card_id : '1111111111111', password, email: 'andy@ggg.mail' ,name :'Ramet',lastname :'intses',phone :'0842074290'},
  { card_id : '2222222222222', password, email: 'andy@ggg.mail' ,name :'Ramet',lastname :'intses',phone :'0842074290'},
]

const todoData = [
  { title:'Learn HTML', dueDate: new Date(), userId: 1 },
  { title:'Learn CSS', dueDate: new Date(), userId: 1 },
  { title:'Learn JS', dueDate: new Date(), userId: 2 },
  { title:'Learn React', dueDate: new Date(), userId: 3 },

]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
  // await prisma.todo.createMany({
  //   data : todoData
  // })
}

run()
