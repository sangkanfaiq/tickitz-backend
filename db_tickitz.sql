-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2022 at 08:18 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_tickitz`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `bookingID` bigint(20) NOT NULL,
  `movieID` bigint(20) NOT NULL,
  `cinemaID` bigint(20) NOT NULL,
  `playDate` date NOT NULL,
  `time` varchar(25) NOT NULL,
  `ticketPrice` int(25) NOT NULL,
  `seat` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`bookingID`, `movieID`, `cinemaID`, `playDate`, `time`, `ticketPrice`, `seat`, `created_at`, `updated_at`) VALUES
(1, 3, 3, '2022-06-16', '21:00', 30000, 'C6', '2022-06-26 20:05:31', '2022-06-26 20:05:31'),
(2, 1, 2, '2022-06-16', '21:00', 30000, 'C6', '2022-06-26 20:05:39', '2022-06-26 20:05:39');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` bigint(20) NOT NULL,
  `categoryName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Horror'),
(2, 'Sci-Fi'),
(3, 'Adventure'),
(4, 'Fantasy'),
(5, 'Comedy');

-- --------------------------------------------------------

--
-- Table structure for table `cinema`
--

CREATE TABLE `cinema` (
  `cinemaID` bigint(20) NOT NULL,
  `cinemaName` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cinema`
--

INSERT INTO `cinema` (`cinemaID`, `cinemaName`) VALUES
(1, 'CGV Blitz'),
(2, 'XXI Cineplex'),
(3, 'Metropole XXI'),
(4, 'Cinema 21'),
(5, '21 Cineplex'),
(6, 'XXI Premiere'),
(7, 'Cinemaxx');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `locationID` bigint(20) NOT NULL,
  `locationName` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`locationID`, `locationName`) VALUES
(1, 'Jakarta'),
(2, 'Bogor'),
(3, 'Depok'),
(4, 'Tangerang'),
(5, 'Bekasi'),
(6, 'Purwakarta'),
(7, 'Bandung');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movieID` bigint(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `categoryID` bigint(20) NOT NULL,
  `durationHours` int(5) NOT NULL,
  `durationMinute` int(5) NOT NULL,
  `director` varchar(25) NOT NULL,
  `releaseDate` date NOT NULL,
  `cast` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `cover` varchar(200) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movieID`, `title`, `categoryID`, `durationHours`, `durationMinute`, `director`, `releaseDate`, `cast`, `description`, `cover`, `updated_at`, `created_at`) VALUES
(1, 'Annabele', 1, 2, 50, 'Jon Favreau', '0000-00-00', 'Aghniny Haque, Achmad Megantara, Aulia Sarah', 'KKN Di Desa Penari diadaptasi dari salah satu cerita horror yang telah viral di tahun 2019 melalui Twitter, menurut sang penulis, cerita ini diambil dari sebuah kisah nyata sekelompok mahasiswa yang tengah melakukan program KKN (Kuliah Kerja Nyata) di Desa Penari', 'kkn.jpg', '2022-06-27 05:09:55', '2022-06-26 19:38:18'),
(2, 'KKN Desa Penari', 1, 2, 50, 'Jon Favreau', '2020-06-22', 'Aghniny Haque, Achmad Megantara, Aulia Sarah', 'KKN Di Desa Penari diadaptasi dari salah satu cerita horror yang telah viral di tahun 2019 melalui Twitter, menurut sang penulis, cerita ini diambil dari sebuah kisah nyata sekelompok mahasiswa yang tengah melakukan program KKN (Kuliah Kerja Nyata) di Desa Penari', 'kkn.jpg', '2022-06-26 19:38:29', '2022-06-26 19:38:29'),
(3, 'Conjuring', 1, 2, 50, 'Jon Favreau', '2020-06-22', 'Aghniny Haque, Achmad Megantara, Aulia Sarah', 'KKN Di Desa Penari diadaptasi dari salah satu cerita horror yang telah viral di tahun 2019 melalui Twitter, menurut sang penulis, cerita ini diambil dari sebuah kisah nyata sekelompok mahasiswa yang tengah melakukan program KKN (Kuliah Kerja Nyata) di Desa Penari', 'kkn.jpg', '2022-06-26 19:38:38', '2022-06-26 19:38:38'),
(4, 'Conjuring 2', 1, 2, 50, 'Jon Favreau', '2020-06-22', 'Aghniny Haque, Achmad Megantara, Aulia Sarah', 'KKN Di Desa Penari diadaptasi dari salah satu cerita horror yang telah viral di tahun 2019 melalui Twitter, menurut sang penulis, cerita ini diambil dari sebuah kisah nyata sekelompok mahasiswa yang tengah melakukan program KKN (Kuliah Kerja Nyata) di Desa Penari', 'kkn.jpg', '2022-06-27 05:25:43', '2022-06-27 05:25:43');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymentID` bigint(20) NOT NULL,
  `movieID` bigint(20) NOT NULL,
  `userID` bigint(20) NOT NULL,
  `bookingID` bigint(20) NOT NULL,
  `paymentMethodID` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `paymentMethodID` bigint(20) NOT NULL,
  `paymentName` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`paymentMethodID`, `paymentName`) VALUES
(1, 'BCA'),
(2, 'GOPAY'),
(3, 'DANA'),
(4, 'OVO'),
(5, 'Mandiri');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `scheduleID` bigint(20) NOT NULL,
  `movieID` bigint(20) NOT NULL,
  `price` int(10) NOT NULL,
  `cinemaID` bigint(20) NOT NULL,
  `locationID` bigint(20) NOT NULL,
  `dateStart` date NOT NULL,
  `dateEnd` date NOT NULL,
  `time` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`scheduleID`, `movieID`, `price`, `cinemaID`, `locationID`, `dateStart`, `dateEnd`, `time`, `created_at`, `updated_at`) VALUES
(1, 2, 25000, 2, 3, '2022-06-16', '2022-09-01', '15:30', '2022-06-26 20:28:05', '2022-06-26 20:28:05'),
(2, 2, 30000, 2, 3, '2022-06-16', '2022-09-01', '15:30', '2022-06-26 20:29:15', '2022-06-26 20:29:15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` bigint(20) NOT NULL,
  `firstName` varchar(25) NOT NULL,
  `lastName` varchar(25) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `firstName`, `lastName`, `phoneNumber`, `email`, `password`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Sangkan', 'Faiq', '08123456789', 'sangkanfaiq@gmail.com', '12345', 'images.jpg', '2022-06-25 07:35:12', '2022-06-25 07:35:12'),
(2, 'Akhsan', 'Musafa', '081231231232', 'akhsanmusafa@gmail.com', 'qweasd', 'asd.jpg', '2022-06-25 07:43:31', '2022-06-25 07:44:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`bookingID`),
  ADD KEY `cinemaID` (`cinemaID`),
  ADD KEY `movieID` (`movieID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `cinema`
--
ALTER TABLE `cinema`
  ADD PRIMARY KEY (`cinemaID`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`locationID`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movieID`),
  ADD KEY `categoryID` (`categoryID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentID`),
  ADD KEY `bookingID` (`bookingID`),
  ADD KEY `movieID` (`movieID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `paymentMethodID` (`paymentMethodID`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`paymentMethodID`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`scheduleID`),
  ADD KEY `cinemaID` (`cinemaID`),
  ADD KEY `locationID` (`locationID`),
  ADD KEY `movieID` (`movieID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `bookingID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cinema`
--
ALTER TABLE `cinema`
  MODIFY `cinemaID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `locationID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movieID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymentID` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `paymentMethodID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `scheduleID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`cinemaID`) REFERENCES `cinema` (`cinemaID`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`movieID`) REFERENCES `movies` (`movieID`);

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`categoryID`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`bookingID`) REFERENCES `booking` (`bookingID`),
  ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`movieID`) REFERENCES `movies` (`movieID`),
  ADD CONSTRAINT `payment_ibfk_3` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `payment_ibfk_4` FOREIGN KEY (`paymentMethodID`) REFERENCES `payment_method` (`paymentMethodID`);

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`cinemaID`) REFERENCES `cinema` (`cinemaID`),
  ADD CONSTRAINT `schedule_ibfk_2` FOREIGN KEY (`locationID`) REFERENCES `location` (`locationID`),
  ADD CONSTRAINT `schedule_ibfk_3` FOREIGN KEY (`movieID`) REFERENCES `movies` (`movieID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
