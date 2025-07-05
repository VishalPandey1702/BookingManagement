-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_full_name" TEXT,
    "user_phone_number" TEXT,
    "user_address" TEXT,
    "user_password" TEXT,
    "user_role" TEXT,
    "user_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_updated_at" TIMESTAMP(3) NOT NULL,
    "user_created_by" INTEGER NOT NULL DEFAULT 1,
    "user_updated_by" INTEGER NOT NULL DEFAULT 1,
    "user_is_active" BOOLEAN NOT NULL DEFAULT true,
    "user_is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "User"("user_email");
