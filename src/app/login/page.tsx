import { PrismaClient, User } from '@prisma/client'
import React from 'react'
export default async function Page() {
  const prisma = new PrismaClient()
  const data = await prisma.user.findFirst()
  return <h1>UserName :{data?.username}</h1>
}
