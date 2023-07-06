import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, id } = req.body

  const driverExist = await prisma.driver.findUnique({
    where: {
      name
    }
  })

  if (driverExist) {
    return res.status(400).json({
      message: 'Name already taken.'
    })
  }

  const driver = await prisma.driver.create({
    data: {
      name,
      id
    }
  })
  return res.status(201).json(driver)
}