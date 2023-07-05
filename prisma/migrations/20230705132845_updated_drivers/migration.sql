-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_drivers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "days" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_drivers" ("days", "id", "name", "total") SELECT "days", "id", "name", "total" FROM "drivers";
DROP TABLE "drivers";
ALTER TABLE "new_drivers" RENAME TO "drivers";
CREATE UNIQUE INDEX "drivers_name_key" ON "drivers"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
