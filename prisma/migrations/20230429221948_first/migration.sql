-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "profile_pic" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_phones" (
    "id" SERIAL NOT NULL,
    "id_contact" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "phone_type" INTEGER NOT NULL,

    CONSTRAINT "contact_phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_types" (
    "id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,

    CONSTRAINT "contact_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_emails" (
    "id" SERIAL NOT NULL,
    "id_contact" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "email_type" INTEGER NOT NULL,

    CONSTRAINT "contact_emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_types" (
    "id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,

    CONSTRAINT "email_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_adresses" (
    "id" SERIAL NOT NULL,
    "id_contact" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "adress_type" INTEGER NOT NULL,
    "coutry" INTEGER NOT NULL,

    CONSTRAINT "contact_adresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adresses_types" (
    "id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,

    CONSTRAINT "adresses_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "country_name" TEXT NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "contact_phones" ADD CONSTRAINT "contact_phones_id_contact_fkey" FOREIGN KEY ("id_contact") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_phones" ADD CONSTRAINT "contact_phones_phone_type_fkey" FOREIGN KEY ("phone_type") REFERENCES "contact_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_emails" ADD CONSTRAINT "contact_emails_id_contact_fkey" FOREIGN KEY ("id_contact") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_emails" ADD CONSTRAINT "contact_emails_email_type_fkey" FOREIGN KEY ("email_type") REFERENCES "email_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_adresses" ADD CONSTRAINT "contact_adresses_id_contact_fkey" FOREIGN KEY ("id_contact") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_adresses" ADD CONSTRAINT "contact_adresses_adress_type_fkey" FOREIGN KEY ("adress_type") REFERENCES "adresses_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_adresses" ADD CONSTRAINT "contact_adresses_coutry_fkey" FOREIGN KEY ("coutry") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
