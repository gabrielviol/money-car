import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method !== "DELETE") {
      return res.status(405).end();
   }

   const { id } = req.body;

   const driverExist = await prisma.driver.findUnique({
      where: {
         id
      }
   })

   if (!driverExist) {
      return res.status(400).json({
         message: 'User not found.'
      })
   }

   await prisma.carpool.deleteMany({
      where: {
         idDriver: id
      }
   });

   const RemoveDriver = await prisma.driver.delete({
      where: {
         id
      }
   })
   return res.status(200).json(RemoveDriver);
}
