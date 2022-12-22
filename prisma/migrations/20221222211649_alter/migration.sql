/*
  Warnings:

  - You are about to drop the column `dateClosedCart` on the `ItemsCart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN "dateClosedCart" DATETIME;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemsCart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "untValue" DECIMAL NOT NULL,
    CONSTRAINT "ItemsCart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemsCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ItemsCart" ("cartId", "id", "productId", "qty", "untValue") SELECT "cartId", "id", "productId", "qty", "untValue" FROM "ItemsCart";
DROP TABLE "ItemsCart";
ALTER TABLE "new_ItemsCart" RENAME TO "ItemsCart";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
