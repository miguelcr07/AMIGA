-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: amiga
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AnnualData`
--

DROP TABLE IF EXISTS `AnnualData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AnnualData` (
  `id` bigint NOT NULL,
  `AvailableHours` varchar(255) DEFAULT NULL,
  `SpecialBenefit` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `approved` bit(1) NOT NULL,
  `benefit` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `dateBenefit` date DEFAULT NULL,
  `dateRegister` date DEFAULT NULL,
  `demandedStudies` varchar(255) DEFAULT NULL,
  `dependants` bit(1) NOT NULL,
  `derivation` varchar(255) DEFAULT NULL,
  `disability` varchar(255) DEFAULT NULL,
  `drivingLicence` bit(1) NOT NULL,
  `healthCoverage` varchar(255) DEFAULT NULL,
  `monthsSepe` date DEFAULT NULL,
  `numberRegistered` int NOT NULL,
  `oneAdultHousehold` bit(1) NOT NULL,
  `postalAddress` varchar(255) DEFAULT NULL,
  `profExpOrigin` varchar(255) DEFAULT NULL,
  `profExpSpain` varchar(255) DEFAULT NULL,
  `qualification` varchar(255) DEFAULT NULL,
  `registered` bit(1) NOT NULL,
  `returned` bit(1) NOT NULL,
  `sepe` bit(1) NOT NULL,
  `situation` varchar(255) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `socialWorker` varchar(255) DEFAULT NULL,
  `unemployedHousehold` bit(1) NOT NULL,
  `valid` bit(1) NOT NULL,
  `vehicle` bit(1) NOT NULL,
  `cohabitation_id` bigint DEFAULT NULL,
  `demand_id` bigint DEFAULT NULL,
  `employment_id` bigint DEFAULT NULL,
  `housing_id` bigint DEFAULT NULL,
  `municipality_id` bigint DEFAULT NULL,
  `participant_id` bigint DEFAULT NULL,
  `Province_id` bigint DEFAULT NULL,
  `studies_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKc5kcwit8ue3a35gpiyxp74v2a` (`cohabitation_id`),
  KEY `FKo2kjcwwv8us5ebg8nwthg3hny` (`demand_id`),
  KEY `FK7byld6e1r5jtigq6yja3nk5f0` (`employment_id`),
  KEY `FK1h6ugs56wkar2udhhfuiod2uy` (`housing_id`),
  KEY `FKdlndlbfnluomns6vco9s2tglu` (`municipality_id`),
  KEY `FKoqrwnj16kj5rchba16dekuvuh` (`participant_id`),
  KEY `FK1q25pyurb23gsihf0s2pnjfd9` (`Province_id`),
  KEY `FKhl44m4cm6gtci08eks7kih8o1` (`studies_id`),
  CONSTRAINT `FK1h6ugs56wkar2udhhfuiod2uy` FOREIGN KEY (`housing_id`) REFERENCES `Housing` (`id`),
  CONSTRAINT `FK1q25pyurb23gsihf0s2pnjfd9` FOREIGN KEY (`Province_id`) REFERENCES `Province` (`id`),
  CONSTRAINT `FK7byld6e1r5jtigq6yja3nk5f0` FOREIGN KEY (`employment_id`) REFERENCES `Employment` (`id`),
  CONSTRAINT `FKc5kcwit8ue3a35gpiyxp74v2a` FOREIGN KEY (`cohabitation_id`) REFERENCES `Cohabitation` (`id`),
  CONSTRAINT `FKdlndlbfnluomns6vco9s2tglu` FOREIGN KEY (`municipality_id`) REFERENCES `Municipality` (`id`),
  CONSTRAINT `FKhl44m4cm6gtci08eks7kih8o1` FOREIGN KEY (`studies_id`) REFERENCES `Studies` (`id`),
  CONSTRAINT `FKo2kjcwwv8us5ebg8nwthg3hny` FOREIGN KEY (`demand_id`) REFERENCES `Demand` (`id`),
  CONSTRAINT `FKoqrwnj16kj5rchba16dekuvuh` FOREIGN KEY (`participant_id`) REFERENCES `Participant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AnnualData`
--

LOCK TABLES `AnnualData` WRITE;
/*!40000 ALTER TABLE `AnnualData` DISABLE KEYS */;
/*!40000 ALTER TABLE `AnnualData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cohabitation`
--

DROP TABLE IF EXISTS `Cohabitation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cohabitation` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cohabitation`
--

LOCK TABLES `Cohabitation` WRITE;
/*!40000 ALTER TABLE `Cohabitation` DISABLE KEYS */;
/*!40000 ALTER TABLE `Cohabitation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Country`
--

DROP TABLE IF EXISTS `Country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Country` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Country`
--

LOCK TABLES `Country` WRITE;
/*!40000 ALTER TABLE `Country` DISABLE KEYS */;
/*!40000 ALTER TABLE `Country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Demand`
--

DROP TABLE IF EXISTS `Demand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Demand` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Demand`
--

LOCK TABLES `Demand` WRITE;
/*!40000 ALTER TABLE `Demand` DISABLE KEYS */;
/*!40000 ALTER TABLE `Demand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employment`
--

DROP TABLE IF EXISTS `Employment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Employment` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employment`
--

LOCK TABLES `Employment` WRITE;
/*!40000 ALTER TABLE `Employment` DISABLE KEYS */;
/*!40000 ALTER TABLE `Employment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ExclusionFactor`
--

DROP TABLE IF EXISTS `ExclusionFactor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ExclusionFactor` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ExclusionFactor`
--

LOCK TABLES `ExclusionFactor` WRITE;
/*!40000 ALTER TABLE `ExclusionFactor` DISABLE KEYS */;
/*!40000 ALTER TABLE `ExclusionFactor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Housing`
--

DROP TABLE IF EXISTS `Housing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Housing` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Housing`
--

LOCK TABLES `Housing` WRITE;
/*!40000 ALTER TABLE `Housing` DISABLE KEYS */;
/*!40000 ALTER TABLE `Housing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Kid`
--

DROP TABLE IF EXISTS `Kid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Kid` (
  `id` bigint NOT NULL,
  `birthDate` date DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `participant_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1u3k8980nxday02ru39sc5cif` (`participant_id`),
  CONSTRAINT `FK1u3k8980nxday02ru39sc5cif` FOREIGN KEY (`participant_id`) REFERENCES `Participant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Kid`
--

LOCK TABLES `Kid` WRITE;
/*!40000 ALTER TABLE `Kid` DISABLE KEYS */;
/*!40000 ALTER TABLE `Kid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Language`
--

DROP TABLE IF EXISTS `Language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Language` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Language`
--

LOCK TABLES `Language` WRITE;
/*!40000 ALTER TABLE `Language` DISABLE KEYS */;
/*!40000 ALTER TABLE `Language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MaritalStatus`
--

DROP TABLE IF EXISTS `MaritalStatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MaritalStatus` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MaritalStatus`
--

LOCK TABLES `MaritalStatus` WRITE;
/*!40000 ALTER TABLE `MaritalStatus` DISABLE KEYS */;
/*!40000 ALTER TABLE `MaritalStatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Municipality`
--

DROP TABLE IF EXISTS `Municipality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Municipality` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Municipality`
--

LOCK TABLES `Municipality` WRITE;
/*!40000 ALTER TABLE `Municipality` DISABLE KEYS */;
/*!40000 ALTER TABLE `Municipality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Participant`
--

DROP TABLE IF EXISTS `Participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Participant` (
  `id` bigint NOT NULL,
  `birthDate` date DEFAULT NULL,
  `datePi` date DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `interviewPi` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nie` varchar(255) DEFAULT NULL,
  `pas` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `surnames` varchar(255) DEFAULT NULL,
  `country_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK66tkg9kqpbysvpbqm0fekl8au` (`country_id`),
  CONSTRAINT `FK66tkg9kqpbysvpbqm0fekl8au` FOREIGN KEY (`country_id`) REFERENCES `Country` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Participant`
--

LOCK TABLES `Participant` WRITE;
/*!40000 ALTER TABLE `Participant` DISABLE KEYS */;
/*!40000 ALTER TABLE `Participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Program`
--

DROP TABLE IF EXISTS `Program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Program` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Program`
--

LOCK TABLES `Program` WRITE;
/*!40000 ALTER TABLE `Program` DISABLE KEYS */;
/*!40000 ALTER TABLE `Program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Province`
--

DROP TABLE IF EXISTS `Province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Province` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Province`
--

LOCK TABLES `Province` WRITE;
/*!40000 ALTER TABLE `Province` DISABLE KEYS */;
/*!40000 ALTER TABLE `Province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Studies`
--

DROP TABLE IF EXISTS `Studies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Studies` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Studies`
--

LOCK TABLES `Studies` WRITE;
/*!40000 ALTER TABLE `Studies` DISABLE KEYS */;
/*!40000 ALTER TABLE `Studies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `userName` varchar(60) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `password` varchar(60) NOT NULL,
  `firstName` varchar(60) NOT NULL,
  `lastName` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `role` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserNameUniqueKey` (`userName`),
  KEY `UserIndexByUserName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant_countrie`
--

DROP TABLE IF EXISTS `participant_countrie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participant_countrie` (
  `participant_id` bigint NOT NULL,
  `country_id` bigint NOT NULL,
  PRIMARY KEY (`participant_id`,`country_id`),
  KEY `FKb5aro9j0ih27e2wu9iyrwno7a` (`country_id`),
  CONSTRAINT `FKb5aro9j0ih27e2wu9iyrwno7a` FOREIGN KEY (`country_id`) REFERENCES `Country` (`id`),
  CONSTRAINT `FKjeeg9gy2ynykekk4ot6byadk2` FOREIGN KEY (`participant_id`) REFERENCES `AnnualData` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant_countrie`
--

LOCK TABLES `participant_countrie` WRITE;
/*!40000 ALTER TABLE `participant_countrie` DISABLE KEYS */;
/*!40000 ALTER TABLE `participant_countrie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant_exclusionFactor`
--

DROP TABLE IF EXISTS `participant_exclusionFactor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participant_exclusionFactor` (
  `participant_id` bigint NOT NULL,
  `exclusionFactor_id` bigint NOT NULL,
  PRIMARY KEY (`participant_id`,`exclusionFactor_id`),
  KEY `FK93xomq58xug3i00k6yqet7fq7` (`exclusionFactor_id`),
  CONSTRAINT `FK93xomq58xug3i00k6yqet7fq7` FOREIGN KEY (`exclusionFactor_id`) REFERENCES `ExclusionFactor` (`id`),
  CONSTRAINT `FKd1r11lwqvvcs0y529vvnjenk8` FOREIGN KEY (`participant_id`) REFERENCES `AnnualData` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant_exclusionFactor`
--

LOCK TABLES `participant_exclusionFactor` WRITE;
/*!40000 ALTER TABLE `participant_exclusionFactor` DISABLE KEYS */;
/*!40000 ALTER TABLE `participant_exclusionFactor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant_language`
--

DROP TABLE IF EXISTS `participant_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participant_language` (
  `participant_id` bigint NOT NULL,
  `language_id` bigint NOT NULL,
  PRIMARY KEY (`participant_id`,`language_id`),
  KEY `FKry8xm9pxk0ystbfs7c9pkwo0q` (`language_id`),
  CONSTRAINT `FKnjlo75ygr6yvi4d0wysiyn8dm` FOREIGN KEY (`participant_id`) REFERENCES `AnnualData` (`id`),
  CONSTRAINT `FKry8xm9pxk0ystbfs7c9pkwo0q` FOREIGN KEY (`language_id`) REFERENCES `Language` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant_language`
--

LOCK TABLES `participant_language` WRITE;
/*!40000 ALTER TABLE `participant_language` DISABLE KEYS */;
/*!40000 ALTER TABLE `participant_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant_program`
--

DROP TABLE IF EXISTS `participant_program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participant_program` (
  `participant_id` bigint NOT NULL,
  `exclusionFactor_id` bigint NOT NULL,
  PRIMARY KEY (`participant_id`,`exclusionFactor_id`),
  KEY `FK34p4d7c9k26qw5v0o467kfhtx` (`exclusionFactor_id`),
  CONSTRAINT `FK34p4d7c9k26qw5v0o467kfhtx` FOREIGN KEY (`exclusionFactor_id`) REFERENCES `Program` (`id`),
  CONSTRAINT `FKqrijplmpk0vqqpt0ap5hy061q` FOREIGN KEY (`participant_id`) REFERENCES `AnnualData` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant_program`
--

LOCK TABLES `participant_program` WRITE;
/*!40000 ALTER TABLE `participant_program` DISABLE KEYS */;
/*!40000 ALTER TABLE `participant_program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'amiga'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-26 10:41:27
