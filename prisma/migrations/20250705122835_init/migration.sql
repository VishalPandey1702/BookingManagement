/*
  Warnings:

  - You are about to drop the column `user_role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_role",
ADD COLUMN     "user_image_url" TEXT,
ADD COLUMN     "user_role_id" INTEGER;

-- CreateTable
CREATE TABLE "UserRole" (
    "user_role_id" SERIAL NOT NULL,
    "user_role_name" TEXT NOT NULL,
    "user_role_desc" TEXT,
    "user_role_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_role_updated_at" TIMESTAMP(3) NOT NULL,
    "user_role_created_by" INTEGER NOT NULL DEFAULT 1,
    "user_role_updated_by" INTEGER NOT NULL DEFAULT 1,
    "user_role_is_active" BOOLEAN NOT NULL DEFAULT true,
    "user_role_is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("user_role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_user_role_name_key" ON "UserRole"("user_role_name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "UserRole"("user_role_id") ON DELETE SET NULL ON UPDATE CASCADE;
