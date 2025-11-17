-- CreateTable
CREATE TABLE "Tags" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryTags" (
    "tagId" UUID NOT NULL,
    "categoryId" UUID NOT NULL,

    CONSTRAINT "CategoryTags_pkey" PRIMARY KEY ("tagId","categoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tags_name_key" ON "Tags"("name");

-- AddForeignKey
ALTER TABLE "CategoryTags" ADD CONSTRAINT "CategoryTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryTags" ADD CONSTRAINT "CategoryTags_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CourseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
