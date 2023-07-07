import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { id, dayInMonth } = req.body

  const existDay = await prisma.carpool.findUnique({
    where: {
      day: dayInMonth
    }
  })

  if (existDay) {
    const updatedCarpool = await prisma.carpool.update({
      where: {
        day: dayInMonth
      },
      data: { idDriver: id }
    })
    return res.status(201).json(updatedCarpool)
  } else {
    const carpool = await prisma.carpool.create({
      data: {
        idDriver: id,
        day: dayInMonth,
      }
    })
    return res.status(201).json(carpool)
  }
}