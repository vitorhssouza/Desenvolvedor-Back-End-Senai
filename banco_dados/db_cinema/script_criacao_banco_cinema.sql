-- Comando de criação do banco de dados cinema

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cinema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cinema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cinema` DEFAULT CHARACTER SET utf8 ;
USE `cinema` ;

-- -----------------------------------------------------
-- Table `cinema`.`sala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`sala` (
  `id_sala` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `capacidade` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_sala`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`diretor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`diretor` (
  `id_diretor` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `nacionalidade` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_diretor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`genero` (
  `id_genero` INT NOT NULL,
  `descricao` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_genero`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`faixa_etaria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`faixa_etaria` (
  `id_faixa_etaria` INT NOT NULL AUTO_INCREMENT,
  `faixa_etaria` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_faixa_etaria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`idioma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`idioma` (
  `id_idioma` INT NOT NULL AUTO_INCREMENT,
  `idioma` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id_idioma`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`filme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`filme` (
  `id_filme` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `nome_original` VARCHAR(150) NOT NULL,
  `ano_lancamento` YEAR NOT NULL,
  `sinopse` VARCHAR(1000) NOT NULL,
  `id_diretor` INT NOT NULL,
  `id_faixa_etaria` INT NOT NULL,
  `id_genero` INT NOT NULL,
  `id_idioma` INT NOT NULL,
  PRIMARY KEY (`id_filme`),
  INDEX `fk_filme_1_idx` (`id_diretor` ASC) VISIBLE,
  INDEX `fk_filme_2_idx` (`id_genero` ASC) VISIBLE,
  INDEX `fk_filme_3_idx` (`id_faixa_etaria` ASC) VISIBLE,
  INDEX `fk_filme_4_idx` (`id_idioma` ASC) VISIBLE,
  CONSTRAINT `fk_filme_1`
    FOREIGN KEY (`id_diretor`)
    REFERENCES `cinema`.`diretor` (`id_diretor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filme_2`
    FOREIGN KEY (`id_genero`)
    REFERENCES `cinema`.`genero` (`id_genero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filme_3`
    FOREIGN KEY (`id_faixa_etaria`)
    REFERENCES `cinema`.`faixa_etaria` (`id_faixa_etaria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filme_4`
    FOREIGN KEY (`id_idioma`)
    REFERENCES `cinema`.`idioma` (`id_idioma`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`cartaz`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`cartaz` (
  `id_cartaz` INT NOT NULL AUTO_INCREMENT,
  `data_inicio` DATE NOT NULL,
  `data_fim` DATE NOT NULL,
  `id_filme` INT NOT NULL,
  PRIMARY KEY (`id_cartaz`),
  INDEX `fk_cartaz_1_idx` (`id_filme` ASC) VISIBLE,
  CONSTRAINT `fk_cartaz_1`
    FOREIGN KEY (`id_filme`)
    REFERENCES `cinema`.`filme` (`id_filme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`premiacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`premiacao` (
  `id_premiacao` INT NOT NULL AUTO_INCREMENT,
  `premiacao` VARCHAR(100) NOT NULL,
  `categoria` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_premiacao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`sessoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`sessoes` (
  `id_horarios_fixos` INT NOT NULL AUTO_INCREMENT,
  `horario` VARCHAR(45) NOT NULL,
  `id_sala` INT NOT NULL,
  `id_filme` INT NOT NULL,
  PRIMARY KEY (`id_horarios_fixos`),
  INDEX `fk_horarios_fixos_1_idx` (`id_sala` ASC) VISIBLE,
  INDEX `fk_horarios_fixos_2_idx` (`id_filme` ASC) VISIBLE,
  CONSTRAINT `fk_horarios_fixos_1`
    FOREIGN KEY (`id_sala`)
    REFERENCES `cinema`.`sala` (`id_sala`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horarios_fixos_2`
    FOREIGN KEY (`id_filme`)
    REFERENCES `cinema`.`filme` (`id_filme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`funcionario` (
  `id_funcionario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `data_admisão` DATE NOT NULL,
  `carteira_trabalho` VARCHAR(60) NOT NULL,
  `salario` DECIMAL(8,2) NOT NULL,
  `cargo` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_funcionario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`sessoes_e_funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`sessoes_e_funcionario` (
  `sessoes_id_sessoes` INT NOT NULL,
  `funcionario_id_funcionario` INT NOT NULL,
  PRIMARY KEY (`sessoes_id_sessoes`, `funcionario_id_funcionario`),
  INDEX `fk_horarios_fixos_has_funcionario_funcionario1_idx` (`funcionario_id_funcionario` ASC) VISIBLE,
  INDEX `fk_horarios_fixos_has_funcionario_horarios_fixos1_idx` (`sessoes_id_sessoes` ASC) VISIBLE,
  CONSTRAINT `fk_horarios_fixos_has_funcionario_horarios_fixos1`
    FOREIGN KEY (`sessoes_id_sessoes`)
    REFERENCES `cinema`.`sessoes` (`id_horarios_fixos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horarios_fixos_has_funcionario_funcionario1`
    FOREIGN KEY (`funcionario_id_funcionario`)
    REFERENCES `cinema`.`funcionario` (`id_funcionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cinema`.`indicacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cinema`.`indicacao` (
  `filme_id_filme` INT NOT NULL,
  `premiacao_id_premiacao` INT NOT NULL,
  PRIMARY KEY (`filme_id_filme`, `premiacao_id_premiacao`),
  INDEX `fk_filme_has_premiacao_premiacao1_idx` (`premiacao_id_premiacao` ASC) VISIBLE,
  INDEX `fk_filme_has_premiacao_filme1_idx` (`filme_id_filme` ASC) VISIBLE,
  CONSTRAINT `fk_filme_has_premiacao_filme1`
    FOREIGN KEY (`filme_id_filme`)
    REFERENCES `cinema`.`filme` (`id_filme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filme_has_premiacao_premiacao1`
    FOREIGN KEY (`premiacao_id_premiacao`)
    REFERENCES `cinema`.`premiacao` (`id_premiacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;