-- CreateTable
CREATE TABLE "drivers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "days" INTEGER NOT NULL,
    "total" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "carpool" (
    "idDriver" TEXT NOT NULL PRIMARY KEY,
    "day" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "drivers_name_key" ON "drivers"("name");
