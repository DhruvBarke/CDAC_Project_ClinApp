

-- INSERT INTO `login` (login_id, user_name, password, user_type, status)
-- VALUES (1,'ajinkya123@gmail.com','ajinkya@123','Admin','active'), 
-- (2,'punam123@gmail.com','punam@123','Patient','active'),
-- (3,'druv123@gmail.com','druv@123','Doctor','active'),
-- (4,'pooja123@gmail.com','pooja@123','Patient','active'),

-- (5,'mrunalzanzane5@gmail.com','mrunal@1234','Patient','active'),
-- (6,'vishal.chavan123@gmail.com','vishal@123','Doctor','active'),
-- (7,'akashauti123@gmail.com','akash@123','Doctor','active'),
-- (8,'akashalure123@gmail.com','akash@123','Doctor','active'),
-- (9,'ankitsharma123@gmail.com','ankit@123','Doctor','active'),
-- (10,'rahulmahajan123@gmail.com','rahul@123','Doctor','active'),
-- (11,'ankitamishra123@gmail.com','ankita@123','Doctor','active'),
-- (12,'neerajshinde123@gmail.com','neeraj@123','Doctor','active');





-- INSERT INTO `appointment` VALUES (1,'2022-04-11','10:30:00','walk-in',1,1,'cancelled','Patient',NULL),
-- (2,'2022-04-10','10:00:00','walk-in',1,1,'scheduled',NULL,NULL),
-- (3,'2022-04-13','12:00:00','walk-in',1,1,'cancelled','Doctor',NULL),
-- (4,'2022-04-16','10:00:00','walk-in',1,1,'scheduled',NULL,NULL),
-- (5,'2022-04-16','10:30:00','walk-in',1,2,'cancelled','Patient',NULL);


-- INSERT INTO `doctor` (doctor_id, first_name, last_name,mobile_number, gender, dob, graduation, post_graduation,
-- speciality, fees, login_id)
-- VALUES (1,'Mayuresh','Lathkar','7350943266','Male','1997-09-14','MBBS','MD','Orthopedic',500,1),
-- (2,'Vishal','Chavan','8237345698','Male','1995-12-12','MBBS','MD','Cardiologists',1000,2),
-- (3,'Druv','Barke','9868087680','Male','1992-10-03','MBBS','','Dentis',600,3),
-- (4,'Akash','Alure','8698867332','Male','1996-09-03','MBBS','MD','Pediatrician',400,4),
-- (5,'Ankit','Sharma','9987652345','Male','1995-03-01','BDS','','Dentist',300,8),
-- (6,'Rahul','Mahajan','7845903216','Male','1996-04-04','MBBS','','Physician',400,5),
-- (7,'Ankita','Mishra','9296784432','Female','1995-06-14','MBBS','MS','Gynecologist',500,6),
-- (8,'Niraj','Shinde','7878652432','Male','1992-03-03','MBBS','','Physician',600,7);





-- INSERT INTO `doctor_timetable` VALUES (1,1,'Monday','12:00:00','18:00:00',60,'14:00:00','available'),
-- (2,1,'Tuesday','10:00:00','18:00:00',30,'14:00:00','not available'),
-- (3,1,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (4,1,'Thursday','10:00:00','14:00:00',30,'14:00:00','available'),
-- (5,1,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (6,1,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (7,1,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available');

-- INSERT INTO `doctor_timetable` VALUES (8,3,'Monday','12:00:00','18:00:00',60,'14:00:00','available'),
-- (9,3,'Tuesday','10:00:00','18:00:00',30,'14:00:00','not available'),
-- (10,3,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (11,3,'Thursday','10:00:00','14:00:00',30,'14:00:00','available'),
-- (12,3,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (13,3,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (14,3,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available');

-- (8,2,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (9,2,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (10,2,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (11,2,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (12,2,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (13,2,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (14,2,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
-- (15,3,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (16,3,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (17,3,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (18,3,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (19,3,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (20,3,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (21,3,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
-- (22,4,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (23,4,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (24,4,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (25,4,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (26,4,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (27,4,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (28,4,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
-- (29,5,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (30,5,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (31,5,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (32,5,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (33,5,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (34,5,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (35,5,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
-- (36,6,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (37,6,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (38,6,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (39,6,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (40,6,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (41,6,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (42,6,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
-- (43,7,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (44,7,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (45,7,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (46,7,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (47,7,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (48,7,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (49,7,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
-- (50,8,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (51,8,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (52,8,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (53,8,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (54,8,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (55,8,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
-- (56,8,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available');



-- INSERT INTO `patient` VALUES (1,'Punam','Londhe','7972898178','Female','B+','1995-01-07','pune',2),
-- (2,'Mrunal','Zanzane','8698867448','Female','O+','1995-03-15','nagpur',5);



INSERT INTO `login`(login_id, user_name, password, user_type, status) 
VALUES (1,'narwade.niraj.44@gmail.com','niraj@123','Admin','active'),
(2,'vikas.dandge07@gmail.com','vikas@123','Patient','active'),
(3,'lathkarmayuresh14@gmail.com','mayuresh@123','Doctor','active'),
(4,'clinApp@gmail.com','connect@123','Admin','active'),
(5,'mrunalzanzane5@gmail.com','mrunal@1234','Patient','active'),
(6,'vishal.chavan123@gmail.com','vishal@123','Doctor','active'),
(7,'akashauti123@gmail.com','akash@123','Doctor','active'),
(8,'akashalure123@gmail.com','akash@123','Doctor','active'),
(9,'ankitsharma123@gmail.com','ankit@123','Doctor','active'),
(10,'rahulmahajan123@gmail.com','rahul@123','Doctor','active'),
(11,'ankitamishra123@gmail.com','ankita@123','Doctor','active'),
(12,'neerajshinde123@gmail.com','neeraj@123','Doctor','active');



INSERT INTO `patient`(patient_id,first_name, last_name, mobile_number, gender, blood_group, dob, address, login_id) 
VALUES (1,'Vikas','Dandge','7972898178','Male','B+','1995-01-07','pune',2),
(2,'Mrunal','Zanzane','8698867448','Female','O+','1995-03-15','nagpur',5);



INSERT INTO `doctor`(doctor_id, first_name, last_name, mobile_number, gender, dob, graduation, 
post_graduation, speciality, fees, address, login_id)
 VALUES (1,'Mayuresh','Lathkar','7350943266','Male','1997-09-14','MBBS','MD','Orthopedic',500,'pune',3),
 (2,'Vishal','Chavan','8237345698','Male','1995-12-12','MBBS','MD','Cardiologists',1000,'pune',6),
 (3,'Akash','Auti','7878984432','Male','1995-10-10','MBBS','MD','Gynecologist',600,'pune',7),
 (4,'Akash','Alure','8698867332','Male','1996-09-03','MBBS','MD','Pediatrician',400,'pune',8),
 (5,'Ankit','Sharma','9987652345','Male','1995-03-01','BDS','','Dentist',300,'pune',9),
 (6,'Rahul','Mahajan','7845903216','Male','1996-04-04','MBBS','','Physician',400,'pune',10),
 (7,'Ankita','Mishra','9296784432','Female','1995-06-14','MBBS','MS','Gynecologist',500,'pune',11),
 (8,'Niraj','Shinde','7878652432','Male','1992-03-03','MBBS','','Physician',600,'pune',12);


INSERT INTO `doctor_timetable`(doctor_timetable_id, doctor_id, weekday, start_time, end_time, 
slot_duration, break_time, status)
 VALUES (1,1,'Monday','12:00:00','18:00:00',60,'14:00:00','available'),
(2,1,'Tuesday','10:00:00','18:00:00',30,'14:00:00','not available'),
(3,1,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
(4,1,'Thursday','10:00:00','14:00:00',30,'14:00:00','available'),
(5,1,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
(6,1,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
(7,1,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
(8,2,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
(9,2,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
(10,2,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
(11,2,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
(12,2,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
(13,2,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
(14,2,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
(15,3,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
(16,3,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
(17,3,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
(18,3,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
(19,3,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
(20,3,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
(21,3,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
(22,4,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
(23,4,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
(24,4,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
(25,4,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
(26,4,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
(27,4,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
(28,4,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
(29,5,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
(30,5,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
(31,5,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
(32,5,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
(33,5,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
(34,5,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
(35,5,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
(36,6,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
(37,6,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
(38,6,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
(39,6,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
(40,6,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
(41,6,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
(42,6,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
(43,7,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
(44,7,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
(45,7,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
(46,7,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
(47,7,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
(48,7,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
(49,7,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),
(50,8,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),
(51,8,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),
(52,8,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),
(53,8,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),
(54,8,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),
(55,8,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),
(56,8,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available');
















