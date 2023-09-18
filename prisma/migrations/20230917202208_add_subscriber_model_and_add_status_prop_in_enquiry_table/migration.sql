-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('PENDING', 'READ');

-- AlterTable
ALTER TABLE "Enquiry" ADD COLUMN     "status" "EnquiryStatus" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "Subscriber" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscriber_email_key" ON "Subscriber"("email");
