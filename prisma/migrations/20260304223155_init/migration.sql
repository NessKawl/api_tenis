-- CreateEnum
CREATE TYPE "StatusUsuario" AS ENUM ('ATIVO', 'INATIVO', 'BLOQUEADO');

-- CreateEnum
CREATE TYPE "StatusAgendamento" AS ENUM ('AGENDADO', 'CONFIRMADO', 'CANCELADO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "StatusQuadra" AS ENUM ('ATIVA', 'MANUTENCAO', 'INATIVA');

-- CreateTable
CREATE TABLE "tiu_tipo_usuario" (
    "tiu_id" SERIAL NOT NULL,
    "tiu_nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tiu_tipo_usuario_pkey" PRIMARY KEY ("tiu_id")
);

-- CreateTable
CREATE TABLE "usu_usuario" (
    "usu_id" SERIAL NOT NULL,
    "usu_nome" TEXT NOT NULL,
    "usu_email" TEXT NOT NULL,
    "usu_telefone" TEXT,
    "usu_senhaHash" TEXT NOT NULL,
    "usu_cpf" TEXT,
    "usu_status" "StatusUsuario" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_tipo_usuario" INTEGER NOT NULL,

    CONSTRAINT "usu_usuario_pkey" PRIMARY KEY ("usu_id")
);

-- CreateTable
CREATE TABLE "qua_quadra" (
    "qua_id" SERIAL NOT NULL,
    "qua_nome" TEXT NOT NULL,
    "qua_status" "StatusQuadra" NOT NULL DEFAULT 'ATIVA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qua_quadra_pkey" PRIMARY KEY ("qua_id")
);

-- CreateTable
CREATE TABLE "tia_tipo_aula" (
    "tia_id" SERIAL NOT NULL,
    "tia_nome" TEXT NOT NULL,
    "tia_modalidade" TEXT,
    "tia_valor" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_professor" INTEGER NOT NULL,

    CONSTRAINT "tia_tipo_aula_pkey" PRIMARY KEY ("tia_id")
);

-- CreateTable
CREATE TABLE "age_agendamento" (
    "age_id" SERIAL NOT NULL,
    "age_data_inicio" TIMESTAMP(3) NOT NULL,
    "age_data_fim" TIMESTAMP(3) NOT NULL,
    "age_status" "StatusAgendamento" NOT NULL DEFAULT 'AGENDADO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" INTEGER NOT NULL,
    "id_quadra" INTEGER NOT NULL,
    "id_tipo_aula" INTEGER,

    CONSTRAINT "age_agendamento_pkey" PRIMARY KEY ("age_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usu_usuario_usu_email_key" ON "usu_usuario"("usu_email");

-- CreateIndex
CREATE UNIQUE INDEX "usu_usuario_usu_cpf_key" ON "usu_usuario"("usu_cpf");

-- CreateIndex
CREATE INDEX "usu_usuario_id_tipo_usuario_idx" ON "usu_usuario"("id_tipo_usuario");

-- CreateIndex
CREATE INDEX "tia_tipo_aula_id_professor_idx" ON "tia_tipo_aula"("id_professor");

-- CreateIndex
CREATE INDEX "age_agendamento_id_quadra_idx" ON "age_agendamento"("id_quadra");

-- CreateIndex
CREATE INDEX "age_agendamento_id_usuario_idx" ON "age_agendamento"("id_usuario");

-- CreateIndex
CREATE INDEX "age_agendamento_age_data_inicio_age_data_fim_idx" ON "age_agendamento"("age_data_inicio", "age_data_fim");

-- AddForeignKey
ALTER TABLE "usu_usuario" ADD CONSTRAINT "usu_usuario_id_tipo_usuario_fkey" FOREIGN KEY ("id_tipo_usuario") REFERENCES "tiu_tipo_usuario"("tiu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tia_tipo_aula" ADD CONSTRAINT "tia_tipo_aula_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "usu_usuario"("usu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "age_agendamento" ADD CONSTRAINT "age_agendamento_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usu_usuario"("usu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "age_agendamento" ADD CONSTRAINT "age_agendamento_id_quadra_fkey" FOREIGN KEY ("id_quadra") REFERENCES "qua_quadra"("qua_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "age_agendamento" ADD CONSTRAINT "age_agendamento_id_tipo_aula_fkey" FOREIGN KEY ("id_tipo_aula") REFERENCES "tia_tipo_aula"("tia_id") ON DELETE SET NULL ON UPDATE CASCADE;
