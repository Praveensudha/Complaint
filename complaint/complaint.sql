-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 25, 2024 at 05:56 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `complaint`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
CREATE TABLE IF NOT EXISTS `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state_id` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `state_id`, `name`) VALUES
(1, 1, 'Salem'),
(2, 1, 'Chennai'),
(3, 2, 'Alappuzha'),
(4, 2, 'Thrissur'),
(5, 3, 'Bangalore'),
(6, 3, 'Mysuru');

-- --------------------------------------------------------

--
-- Table structure for table `complaint_form`
--

DROP TABLE IF EXISTS `complaint_form`;
CREATE TABLE IF NOT EXISTS `complaint_form` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `subject` text NOT NULL,
  `message` text NOT NULL,
  `image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active_status` tinyint NOT NULL DEFAULT '1',
  `status` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `complaint_form`
--

INSERT INTO `complaint_form` (`id`, `email`, `subject`, `message`, `image`, `created_at`, `updated_at`, `active_status`, `status`) VALUES
(1, '', ' Complaint letter against unprofessional behavior of your employee.', 'I,[your name] writing this to complain about [person name] working in your company in [department] as a [destination]. This happened when I visited your [shop/store/office/factory] on [date] at [time].\r\n\r\nHe/she is very rude and unprofessional with customers like me, which is bringing negative impression about your company.\r\n\r\nI hope you will take the necessary action about this issue.', 'uploads/010.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(2, '', 'Testing ', 'Testing this page', 'uploads/jg4.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(3, '', 'Test', 'Testing', 'uploads/A66.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(4, '', 'Test', 'Testing', 'uploads/dis.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(5, '', 'Test', 'Testing', 'uploads/QmE.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(6, '', 'Test', 'Testing this page', 'uploads/nhk.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(7, '', ' Complaint about bus service', 'I am currently attending Golden West Middle School and I am concerned about the arrival time of our buses. Many times I have been late to school because my bus driver failed to pick up my bus stop on time. It frequently picks up my stop 5-10 minutes late and on top of that we have to pick up another stop that takes around 5 minutes to get to. This is not just a problem for my bus but my friend’s buses too. They have also been late to school because of their bus drivers.\r\n\r\nThis problem is also occurring frequently for my sister. She attends Vanden High School and has been complaining how her bus is extremely late. Most of the time when she is done with soccer practice, she has to wait 45 minutes to an hour for the bus to come and pick her up.\r\n\r\nI understand that sometimes there is traffic but to be 45 minutes late is just unacceptable. This problem has been happening more and more often. I find it very irritating that our middle and high school buses are not picking and dropping us off on time. Many parents have to pay for their kids bus pass and expect them to arrive to school on time. I would greatly appreciate it if our bus drivers could make an effort to come on time.', 'uploads/QLH.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(8, '', 'Complaint about the bus service.', 'I am currently attending Golden West Middle School and I am concerned about the arrival time of our buses. Many times I have been late to school because my bus driver failed to pick up my bus stop on time. It frequently picks up my stop 5-10 minutes late and on top of that we have to pick up another stop that takes around 5 minutes to get to. This is not just a problem for my bus but my friend’s buses too. They have also been late to school because of their bus drivers.\r\n\r\nThis problem is also occurring frequently for my sister. She attends Vanden High School and has been complaining how her bus is extremely late. Most of the time when she is done with soccer practice, she has to wait 45 minutes to an hour for the bus to come and pick her up.\r\n\r\nI understand that sometimes there is traffic but to be 45 minutes late is just unacceptable. This problem has been happening more and more often. I find it very irritating that our middle and high school buses are not picking and dropping us off on time. Many parents have to pay for their kids bus pass and expect them to arrive to school on time. I would greatly appreciate it if our bus drivers could make an effort to come on time.', 'uploads/pRN.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(9, '', 'Complaint about the bus service.', 'I am currently attending Golden West Middle School and I am concerned about the arrival time of our buses. Many times I have been late to school because my bus driver failed to pick up my bus stop on time. It frequently picks up my stop 5-10 minutes late and on top of that we have to pick up another stop that takes around 5 minutes to get to. This is not just a problem for my bus but my friend’s buses too. They have also been late to school because of their bus drivers.\r\n\r\nThis problem is also occurring frequently for my sister. She attends Vanden High School and has been complaining how her bus is extremely late. Most of the time when she is done with soccer practice, she has to wait 45 minutes to an hour for the bus to come and pick her up.\r\n\r\nI understand that sometimes there is traffic but to be 45 minutes late is just unacceptable. This problem has been happening more and more often. I find it very irritating that our middle and high school buses are not picking and dropping us off on time. Many parents have to pay for their kids bus pass and expect them to arrive to school on time. I would greatly appreciate it if our bus drivers could make an effort to come on time.', 'uploads/jWK.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(10, '', 'Complaint about the bus service.', 'I am currently attending Golden West Middle School and I am concerned about the arrival time of our buses. Many times I have been late to school because my bus driver failed to pick up my bus stop on time. It frequently picks up my stop 5-10 minutes late and on top of that we have to pick up another stop that takes around 5 minutes to get to. This is not just a problem for my bus but my friend’s buses too. They have also been late to school because of their bus drivers.\n\nThis problem is also occurring frequently for my sister. She attends Vanden High School and has been complaining how her bus is extremely late. Most of the time when she is done with soccer practice, she has to wait 45 minutes to an hour for the bus to come and pick her up.\n\nI understand that sometimes there is traffic but to be 45 minutes late is just unacceptable. This problem has been happening more and more often. I find it very irritating that our middle and high school buses are not picking and dropping us off on time. Many parents have to pay for their kids bus pass and expect them to arrive to school on time. I would greatly appreciate it if our bus drivers could make an effort to come on time.', 'uploads/PQ6.png', '0000-00-00 00:00:00', '2024-01-31 07:18:56', 0, 0),
(11, '', 'Complaint about the bus service.', 'I am currently attending Golden West Middle School and I am concerned about the arrival time of our buses. Many times I have been late to school because my bus driver failed to pick up my bus stop on time. It frequently picks up my stop 5-10 minutes late and on top of that we have to pick up another stop that takes around 5 minutes to get to. This is not just a problem for my bus but my friend’s buses too. They have also been late to school because of their bus drivers.\r\n\r\nThis problem is also occurring frequently for my sister. She attends Vanden High School and has been complaining how her bus is extremely late. Most of the time when she is done with soccer practice, she has to wait 45 minutes to an hour for the bus to come and pick her up.\r\n\r\nI understand that sometimes there is traffic but to be 45 minutes late is just unacceptable. This problem has been happening more and more often. I find it very irritating that our middle and high school buses are not picking and dropping us off on time. Many parents have to pay for their kids bus pass and expect them to arrive to school on time. I would greatly appreciate it if our bus drivers could make an effort to come on time.', 'uploads/gxR.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(12, '', 'Complaint about the bus service.', 'I am currently attending Golden West Middle School and I am concerned about the arrival time of our buses. Many times I have been late to school because my bus driver failed to pick up my bus stop on time. It frequently picks up my stop 5-10 minutes late and on top of that we have to pick up another stop that takes around 5 minutes to get to. This is not just a problem for my bus but my friend’s buses too. They have also been late to school because of their bus drivers.\r\n\r\nThis problem is also occurring frequently for my sister. She attends Vanden High School and has been complaining how her bus is extremely late. Most of the time when she is done with soccer practice, she has to wait 45 minutes to an hour for the bus to come and pick her up.\r\n\r\nI understand that sometimes there is traffic but to be 45 minutes late is just unacceptable. This problem has been happening more and more often. I find it very irritating that our middle and high school buses are not picking and dropping us off on time. Many parents have to pay for their kids bus pass and expect them to arrive to school on time. I would greatly appreciate it if our bus drivers could make an effort to come on time.', 'uploads/AGT.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(13, 'vidya2002@gmail.com', 'Mathematics', 'fdrtreredasd', 'uploads/aMR.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(14, 'kokila13@gmail.com', 'Test ', 'Testing this page', 'uploads/U7Y.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(15, '', 'Test ', 'Testing this complaint form', 'uploads/vBh.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(16, '', 'Test ', 'Testing this pag', 'uploads/kcD.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(17, '', 'Testing ', 'Testing this page', 'uploads/bEw.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(18, '', 'Testing ', 'Testing this page', 'uploads/keV.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(19, 'madhumithavenkatesan2002@gmail.com', 'Test', 'Testing this page', '', '0000-00-00 00:00:00', '2024-01-31 12:39:01', 0, 0),
(20, '', 'tes', 'Testing', 'uploads/kv6.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(21, '', 'Test', 'Testing', 'uploads/Wy8.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(22, '', 'Test', 'Testing this page', 'uploads/Sbx.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(23, 'jerin2003@gmail.com', 'Test', 'Testing ', 'uploads/4QQ.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(24, 'jerin2003@gmail.com', 'Test 1', 'Testing ', 'uploads/mtN.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(25, '', 'Testing', 'Testing ', 'uploads/RQP.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(26, '', 'Test ', 'Testing ', 'uploads/HDf.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(27, '', ' Complaint about bus service.', 'I am currently attending Golden West Middle School and I am concerned about the arrival time of our buses. Many times I have been late to school because my bus driver failed to pick up my bus stop on time. It frequently picks up my stop 5-10 minutes late and on top of that we have to pick up another stop that takes around 5 minutes to get to. This is not just a problem for my bus but my friend’s buses too. They have also been late to school because of their bus drivers.\r\n\r\nThis problem is also occurring frequently for my sister. She attends Vanden High School and has been complaining how her bus is extremely late. Most of the time when she is done with soccer practice, she has to wait 45 minutes to an hour for the bus to come and pick her up.\r\n\r\nI understand that sometimes there is traffic but to be 45 minutes late is just unacceptable. This problem has been happening more and more often. I find it very irritating that our middle and high school buses are not picking and dropping us off on time. Many parents have to pay for their kids bus pass and expect them to arrive to school on time. I would greatly appreciate it if our bus drivers could make an effort to come on time.', 'uploads/NK7.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(28, '', 'Test', 'Testing', 'uploads/M7I.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(29, 'madhumithavenkatesan2002@gmail.com', 'Mathematics', 'Testing this page', '', '0000-00-00 00:00:00', '2024-01-31 14:07:16', 0, 0),
(30, '', 'Mathematics', 'Testing', 'uploads/196.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(31, '', 'Mathematics', 'test', 'uploads/1XV.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(32, '', 'test', 'Testing 11', 'uploads/DGk.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(33, '', 'test', 'Testingdede', 'uploads/qzn.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(34, 'madhumithavenkatesan2002@gmail.com', 'Testing this page', 'Complaint ', '', '0000-00-00 00:00:00', '2024-01-31 12:57:40', 0, 0),
(35, 'kalaivani09@gmail.com', 'Testing this page ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'uploads/eW9.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(36, 'madhumithavenkatesan2002@gmail.com', 'Test', 'Testing this page ', 'uploads/Tq6.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(37, 'yogeshwaran@gmail.com', 'Mathematics', 'Complaint about the bus service ', 'uploads/P7Z.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(38, 'madhu27@gmail.com', 'Testing oiutrsdfhio', '679okjbcset7ioknbce5689okmbcde5689oknvcdr679olmcde6', 'uploads/8H9.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(39, 'venkatesan1966@gmail.com', 'Complaint about the bus service.', 'Testing this page ', 'uploads/xlN.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(40, 'mohana@gmail.com', 'Test', 'testing', 'uploads/RQm.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
CREATE TABLE IF NOT EXISTS `state` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `state_name`) VALUES
(1, 'TamilNadu'),
(2, 'Kerala'),
(3, 'Karnataka');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

DROP TABLE IF EXISTS `user_login`;
CREATE TABLE IF NOT EXISTS `user_login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` bigint NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirm_password` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active_status` tinyint NOT NULL DEFAULT '1',
  `status` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`id`, `name`, `email`, `mobile`, `password`, `confirm_password`, `created_at`, `updated_at`, `active_status`, `status`) VALUES
(1, 'Madhumitha V ', 'madhumithavenkatesan2002@gmail.com', 7305010074, 'Madhu@27', 'Madhu@27', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(2, 'Kaviya S', 'Kaviyasri@gmail.com', 9943810071, 'Kaviya@30', 'Kaviya@30', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(3, 'Yogeshwaran V', 'yogeshwaran@gmail.com', 9943810071, 'Yogesh@09', 'Yogesh@09', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(4, 'Madhumitha Venkatesa', '2k20cse181@kiot.ac.in', 7305010075, 'Madhu@2002', 'Madhu@2002', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(5, 'Vidyawathi S', 'vidya2002@gmail.com', 9787687234, 'Vidya@14', 'Vidya@14', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(6, 'Kokila ', 'kokila13@gmail.com', 9941806344, 'Kokila@03', 'Kokila@03', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(7, 'Madhumitha V ', '2k20cse182@kiot.ac.in', 7305010074, 'Madhu@27', 'Madhu@27', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(8, 'Jerin A P', 'jerin2003@gmail.com', 9943810071, 'Jerin@2003', 'Jerin@2003', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(9, 'Kalaivani V', 'kalaivani09@gmail.com', 7305010075, 'Kalai@09', 'Kalai@09', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(10, 'Madhumitha V ', 'madhu27@gmail.com', 9943810071, 'Madhu@2002', 'madhu@2002', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(11, 'Madhumitha V ', 'madhu2002@gmail.com', 9943810071, 'Madhu@2002', 'Madhu@2002', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(12, 'Venkatesan', 'venkatesan1966@gmail.com', 8825510150, 'Venkatesan@1966', 'Venkatesan@1966', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(13, 'Mohana', 'mohana@gmail.com', 9943810071, 'Mohana@27', 'Mohana@27', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(14, 'Indhu', 'indhu@gmail.com', 7305010071, 'Indhu@02', 'Indhu@02', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

DROP TABLE IF EXISTS `user_profile`;
CREATE TABLE IF NOT EXISTS `user_profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` bigint NOT NULL,
  `dob` date NOT NULL,
  `state` varchar(100) NOT NULL,
  `district` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active_status` tinyint NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>Inactive',
  `status` tinyint NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>Inactive',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_profile`
--

INSERT INTO `user_profile` (`id`, `name`, `email`, `mobile`, `dob`, `state`, `district`, `gender`, `created_at`, `updated_at`, `active_status`, `status`) VALUES
(1, 'Madhumitha V ', 'madhumithavenkatesan2002@gmail.com', 7305010074, '2002-11-27', '1', '2', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(2, 'Kaviya S', 'Kaviyasri@gmail.com', 9943810071, '2024-01-30', '1', '1', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(3, 'Yogeshwaran V', 'yogeshwaran@gmail.com', 9943810071, '1997-03-09', '3', '5', 'male', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(4, 'Madhumitha Venkatesa', '2k20cse181@kiot.ac.in', 7305010075, '2024-01-31', '2', '4', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(5, 'Vidyawathi S', 'vidya2002@gmail.com', 9787687234, '2002-01-14', '1', '1', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(6, 'Kokila ', 'kokila13@gmail.com', 9941806344, '2002-01-03', '1', '1', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(7, 'Madhumitha V ', '2k20cse182@kiot.ac.in', 7305010074, '2024-01-31', '1', '2', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(8, 'Jerin A P', 'jerin2003@gmail.com', 9943810071, '2003-03-05', '1', '2', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(9, 'Kalaivani V', 'kalaivani09@gmail.com', 7305010075, '2024-01-31', '1', '1', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(10, 'Madhumitha V ', 'madhu27@gmail.com', 9943810071, '2024-01-31', '1', '1', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(11, 'Madhumitha V ', 'madhu2002@gmail.com', 9943810071, '2024-01-31', '1', '1', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(12, 'Venkatesan', 'venkatesan1966@gmail.com', 8825510150, '2024-02-01', '1', '1', 'male', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(13, 'Mohana', 'mohana@gmail.com', 9943810071, '2024-02-01', '2', '3', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(14, 'Indhu', 'indhu@gmail.com', 7305010071, '2002-01-07', '1', '1', 'female', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
