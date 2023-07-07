/*
  Warnings:

  - The primary key for the `carpool` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_carpool" (
    "idDriver" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    CONSTRAINT "carpool_idDriver_fkey" FOREIGN KEY ("idDriver") REFERENCES "drivers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_carpool" ("day", "idDriver") SELECT "day", "idDriver" FROM "carpool";
DROP TABLE "carpool";
ALTER TABLE "new_carpool" RENAME TO "carpool";
CREATE UNIQUE INDEX "carpool_day_key" ON "carpool"("day");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
