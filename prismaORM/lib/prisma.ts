import "dotenv/config"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../generated/prisma/client.js"

// create instance of prisma client to use in diffrent files
// pass in the connection string to prismaPg adapter 
// and the dapter to the prisma client instance

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })

const prisma = new PrismaClient({ adapter })

export { prisma }