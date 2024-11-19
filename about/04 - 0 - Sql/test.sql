-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost:3306
-- Üretim Zamanı: 21 Ara 2023, 11:01:20
-- Sunucu sürümü: 10.3.39-MariaDB
-- PHP Sürümü: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `yildixkn_anket`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `surname` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `value` text DEFAULT NULL,
  `img_url` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_byId` int(11) DEFAULT NULL,
  `isUpdated` int(11) NOT NULL DEFAULT 0,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_byId` int(11) DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 1,
  `isDeleted` int(11) NOT NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_byId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `test`
--

INSERT INTO `test` (`id`, `name`, `surname`, `email`, `value`, `img_url`, `created_at`, `created_byId`, `isUpdated`, `updated_at`, `updated_byId`, `isActive`, `isDeleted`, `deleted_at`, `deleted_byId`) VALUES
(1, 'name edit', 'Surname', 'test@test.com', '1', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 4, 1, '2023-11-07 01:51:00', 1, 1, 1, NULL, NULL),
(2, 'Name', 'Surname', 'test@test.com', '2', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 4, 0, NULL, NULL, 0, 0, NULL, NULL),
(3, 'Name', 'Surname', 'test@test.com', '3', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 4, 0, NULL, NULL, 1, 1, NULL, NULL),
(4, 'Name', 'Surname', 'test@test.com', '4', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 4, 0, NULL, NULL, 1, 0, NULL, NULL),
(7, 'Name', 'Surname', 'test@test.com', '7', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(8, 'Name', 'Surname', 'test@test.com', '8', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(10, 'name güncelleme', 'surname güncelleme', 'test@test.com', '10', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 1, '2023-12-15 08:58:58', 5, 1, 0, NULL, NULL),
(11, 'Name', 'Surname', 'test@test.com', '11', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(12, 'Name', 'Surname', 'test@test.com', '12', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(13, 'Name', 'Surname', 'test@test.com', '13', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(14, 'Name', 'Surname', 'test@test.com', '14', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(15, 'Name', 'Surname', 'test@test.com', '15', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(16, 'Name', 'Surname', 'test@test.com', '16', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(17, 'Name', 'Surname', 'test@test.com', '17', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(18, 'Name', 'Surname', 'test@test.com', '18', '/assets/img/user/default.jpg', '2023-11-03 11:58:25', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(19, 'Name', 'Surname', 'test@test.com', '19', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(20, 'Name', 'Surname', 'test@test.com', '20', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(21, 'Name', 'Surname', 'test@test.com', '21', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(22, 'Name', 'Surname', 'test@test.com', '22', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(23, 'Name', 'Surname', 'test@test.com', '23', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(24, 'Name', 'Surname', 'test@test.com', '24', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(25, 'Name', 'Surname', 'test@test.com', '25', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(26, 'Name', 'Surname', 'test@test.com', '26', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(27, 'Name', 'Surname', 'test@test.com', '27', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(28, 'Name', 'Surname', 'test@test.com', '28', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(29, 'Name', 'Surname', 'test@test.com', '29', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(30, 'Name', 'Surname', 'test@test.com', '30', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(31, 'Name', 'Surname', 'test@test.com', '31', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(32, 'Name', 'Surname', 'test@test.com', '32', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 0, NULL, NULL, 1, 0, NULL, NULL),
(33, 'Name', 'Surname', 'test@test.com', '33', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 1, '2023-12-15 14:57:58', 10, 0, 1, '2023-12-15 14:57:58', 10),
(34, 'name güncelleme', 'surname güncelleme', 'test@test.com', '34', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 1, '2023-12-15 14:56:01', 10, 0, 1, '2023-12-15 14:56:01', 10),
(35, 'name güncelleme', 'surname güncelleme', 'test@test.com', '35', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 1, '2023-12-15 14:47:08', 5, 0, 1, '2023-12-15 03:09:13', 10),
(36, 'name güncelleme', 'surname güncelleme', 'test@test.com', '36', '/assets/img/user/default.jpg', '2023-11-03 11:58:26', 1, 1, '2023-12-15 08:51:02', 5, 0, 1, '2023-12-15 06:14:09', 10),
(69, 'name add', 'surname add', 'email add', NULL, NULL, '2023-12-17 06:35:27', 1, 0, NULL, NULL, 1, 0, NULL, NULL);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
