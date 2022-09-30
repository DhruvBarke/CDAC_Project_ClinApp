
drop database if exists `new_clin_app`;
create database new_clin_app;
use new_clin_app;
set foreign_key_checks=0;



DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  `status` varchar(10) DEFAULT 'active',
  PRIMARY KEY (`login_id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
);


DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor` (
  `doctor_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `mobile_number` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `graduation` varchar(45) NOT NULL,
  `post_graduation` varchar(45) DEFAULT NULL,
  `speciality` varchar(45) NOT NULL,
  `fees` int NOT NULL,
  `address` varchar (300),
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  UNIQUE KEY `mobile_number_UNIQUE` (`mobile_number`),
  KEY `doctor_fk_login_id_idx` (`login_id`),
  CONSTRAINT `doctor_fk_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`)
);



DROP TABLE IF EXISTS `doctor_specialization`;
CREATE TABLE `doctor_specialization` (
  `specialization_id` int NOT NULL AUTO_INCREMENT,
  `specializationcol_name` varchar(45) NOT NULL,
  `doctor_id` int DEFAULT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`specialization_id`),
  KEY `spec_fk_doctor_id_idx` (`doctor_id`),
  CONSTRAINT `spec_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`)
);



DROP TABLE IF EXISTS `doctor_timetable`;
CREATE TABLE `doctor_timetable` (
  `doctor_timetable_id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int DEFAULT NULL,
  `weekday` varchar(45) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `slot_duration` int DEFAULT '30',
  `break_time` time DEFAULT '14:00:00',
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`doctor_timetable_id`),
  KEY `timetable_fk_doctor_id_idx` (`doctor_id`),
  CONSTRAINT `timetable_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`)
);



DROP TABLE IF EXISTS `patient`;
CREATE TABLE `patient` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `mobile_number` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `blood_group` varchar(45) NOT NULL,
  `dob` date DEFAULT NULL,
  `address` varchar (300),
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `mobile_number_UNIQUE` (`mobile_number`),
  KEY `patient_fk_login_id_idx` (`login_id`),
  CONSTRAINT `patient_fk_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`)
);


drop table if exists `prescription`;
create table prescription(
id int auto_increment,
prescription_date date default (curdate()),
diagnosis longtext,
weight int,
bp int,
patient_id int,
primary key (id),
foreign key (patient_id) references patient(patient_id)
);


drop table if exists `product`;
create table product(
id int auto_increment,
product_name varchar (100),
quantity int,
duration int,
frequency varchar (20),
remarks varchar (30),
prescription_id int,
primary key (id),
foreign key (prescription_id) references prescription(id)
);

DROP TABLE IF EXISTS `appointment`;
CREATE TABLE `appointment` (
  `appointment_id` int NOT NULL AUTO_INCREMENT,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `appointment_type` varchar(45) NOT NULL DEFAULT 'walk-in',
  `doctor_id` int DEFAULT NULL,
  `patient_id` int DEFAULT NULL,
  `status` varchar(45) DEFAULT 'scheduled',
  `cancelled_by` varchar(45) DEFAULT NULL,
  `remark_id` int DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `app_fk_doctor_id_idx` (`doctor_id`),
  KEY `app_fk_patient_id_idx` (`patient_id`),
  KEY `app_fk_remark_id_idx` (`remark_id`),
  CONSTRAINT `app_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`),
  CONSTRAINT `app_fk_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`),
  CONSTRAINT `app_fk_remark_id` FOREIGN KEY (`remark_id`) REFERENCES `remark` (`remark_id`) ON DELETE SET NULL ON UPDATE CASCADE
); 




DROP TABLE IF EXISTS `remark`;
CREATE TABLE `remark` (
  `remark_id` int NOT NULL AUTO_INCREMENT,
  `reason` varchar(45) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  PRIMARY KEY (`remark_id`)
);



set foreign_key_checks=1;
use new_clin_app;
