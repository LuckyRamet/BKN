const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('1234')
const userData = [
  { card_id : '1111111111111', password, email: 'test@mail.com' ,name :'ADMIN',lastname :'LnwZA',phone :'0000000000'},
  { card_id : '222222222222', password,  email: 'user@mail.com' ,name :'Ad',lastname :'panri',phone :'0000000000'},
  { card_id : '3333333333333', password, email: 'user01@mail.com',name :'USERZA',lastname :'LnwZA',phone :'0000000000'},
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
