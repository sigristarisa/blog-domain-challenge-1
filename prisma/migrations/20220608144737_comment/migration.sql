/*
  Warnings:

  - You are about to drop the column `post_title` on the `Comment` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Comment_post_title_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "post_title";
