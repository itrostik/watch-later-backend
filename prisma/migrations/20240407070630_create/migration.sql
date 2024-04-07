-- CreateTable
CREATE TABLE "genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT,
    "avatar_url" TEXT,
    "description" TEXT,
    "genres" JSONB NOT NULL,
    "films" JSONB NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "film" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "poster_url" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "genres" TEXT[],
    "reviews" INTEGER[],

    CONSTRAINT "film_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genre_name_key" ON "genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "film_name_key" ON "film"("name");

-- CreateIndex
CREATE UNIQUE INDEX "film_description_key" ON "film"("description");
