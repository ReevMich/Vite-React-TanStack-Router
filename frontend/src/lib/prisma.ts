import { PrismaClient } from '@prisma/client'


// Connect to prisma client
export const db = new PrismaClient()