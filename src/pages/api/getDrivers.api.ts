import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    const drivers = await prisma.driver.findMany();
    return res.json(drivers)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Internal server error" })
  }
}