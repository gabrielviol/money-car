import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    const carpool = await prisma.carpool.findMany();
    return res.json(carpool)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Internal server error" })
  }
}