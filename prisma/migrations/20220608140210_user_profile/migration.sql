-- DropIndex
DROP INDEX "Profile_profile_image_key";

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "profile_image" SET DATA TYPE VARCHAR;
