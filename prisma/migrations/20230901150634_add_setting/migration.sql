-- CreateTable
CREATE TABLE "Setting" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "lable" TEXT NOT NULL,
    "value" JSONB NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Setting_type_key" ON "Setting"("type");
