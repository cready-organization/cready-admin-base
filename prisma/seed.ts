import { encrypt } from '@/Helper/security'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const admin = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@test.com',
      first_name: 'admin',
      last_name: 'test',
      role: 'ADMIN',
      password: encrypt('password'),
    },
  })
  console.log({ admin })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
