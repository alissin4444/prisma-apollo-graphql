import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const UserResolver = {
  Query: {
    users: async () => {
      const users = await prisma.user.findMany()
      return users
    },
    user: async (parent, args) => {
      const { id } = args
      const user = await prisma.user.findOne({
        where: { id }
      })
      return user
    },
  },
  Mutation: {
    userStore: async (parent, args) => {
      const { name, email } = args.input
      const user = await prisma.user.create({
        data: {
          name,
          email
        }
      })
      return user
    },
    userUpdate: async (parent, args) => {
      const id = args.id
      const { name, email } = args.input
      const user = await prisma.user.update({
        where: {
          id
        },
        data: {
          name,
          email
        }
      })

      return user
    },
    userDelete: async (parent, args) => {
      const { id } = args
      await prisma.user.delete({
        where: {
          id
        },
      })
      return {
        isDeleted: true
      }
    },
  }
};

export default UserResolver