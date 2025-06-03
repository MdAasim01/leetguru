-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "companies" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "github" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "twitter" TEXT,
ADD COLUMN     "website" TEXT;
