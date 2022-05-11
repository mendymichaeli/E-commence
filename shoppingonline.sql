-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2022 at 11:04 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shoppingonline`
--

-- --------------------------------------------------------

--
-- Table structure for table `cartproducts`
--

CREATE TABLE `cartproducts` (
  `id` int(11) NOT NULL,
  `price` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartproducts`
--

INSERT INTO `cartproducts` (`id`, `price`, `quantity`, `cartId`, `productId`, `createdAt`, `updatedAt`) VALUES
(3, '8', 2, 2, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, '20', 5, 3, 3, '0000-00-00 00:00:00', '2021-02-28 22:02:05'),
(53, '25', 7, 1, 1, '0000-00-00 00:00:00', '2021-03-07 15:03:30'),
(54, '789', 7, 1, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, '45', 7, 1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, '85', 7, 9, 1, '2021-03-07 21:37:59', '2021-03-11 19:40:59'),
(63, '5', 2, 9, 3, '2021-03-07 22:22:03', '2021-03-07 22:22:04'),
(87, '28', 1, 9, 7, '2021-03-08 06:59:05', '2021-03-08 06:59:05'),
(91, '11.2', 1, 9, 6, '2021-03-09 16:54:34', '2021-03-09 16:54:34'),
(98, '8.75', 3, 10, 3, '2021-03-12 12:09:17', '2021-03-14 21:13:53'),
(100, '85', 1, 10, 1, '2021-03-14 21:13:37', '2021-03-14 21:13:37'),
(101, '17.90', 1, 10, 6, '2021-03-14 21:13:41', '2021-03-14 21:13:41'),
(102, '8', 1, 10, 2, '2021-03-14 21:14:04', '2021-03-14 21:14:04'),
(103, '28', 1, 10, 7, '2021-03-14 21:14:12', '2021-03-14 21:14:12'),
(104, '12.55', 1, 10, 8, '2021-03-14 21:14:18', '2021-03-14 21:14:18'),
(110, '8', 1, 11, 2, '2021-03-15 07:58:27', '2021-03-15 07:58:27'),
(115, '92', 1, 12, 1, '2021-03-16 22:20:46', '2021-03-16 22:20:46'),
(116, '92', 1, NULL, 1, '2021-03-16 22:23:09', '2021-03-16 22:23:09'),
(122, '92', 2, 13, 1, '2021-03-16 22:33:13', '2021-03-16 22:45:47'),
(123, '92', 1, NULL, 1, '2021-03-16 23:02:29', '2021-03-16 23:02:29'),
(124, '92', 1, 14, 1, '2021-03-16 23:03:16', '2021-03-16 23:03:16'),
(125, '92', 1, NULL, 1, '2021-03-19 07:18:04', '2021-03-19 07:18:04'),
(126, '92', 1, 15, 1, '2021-03-19 07:18:40', '2021-03-19 07:18:40'),
(127, '92', 1, NULL, 1, '2021-03-19 07:28:19', '2021-03-19 07:28:19'),
(134, '92', 2, 16, 1, '2021-03-19 08:20:22', '2021-03-19 08:20:25'),
(135, '92', 1, NULL, 1, '2021-03-19 08:23:04', '2021-03-19 08:23:04'),
(136, '92', 1, 17, 1, '2021-03-19 08:25:37', '2021-03-19 08:25:37'),
(137, '92', 1, NULL, 1, '2021-03-19 08:26:27', '2021-03-19 08:26:27'),
(138, '92', 1, 18, 1, '2021-03-19 08:37:33', '2021-03-19 08:37:33'),
(139, '92', 1, NULL, 1, '2021-03-19 08:38:06', '2021-03-19 08:38:06'),
(140, '92', 1, 19, 1, '2021-03-19 08:39:01', '2021-03-19 08:39:01'),
(141, '92', 2, 20, 1, '2021-03-19 08:39:25', '2021-03-19 08:39:30'),
(142, '92', 1, 21, 1, '2021-03-19 08:44:17', '2021-03-19 08:44:17'),
(143, '92', 1, 22, 1, '2021-03-19 11:24:34', '2021-03-19 11:24:34'),
(144, '8.75', 2, 23, 3, '2021-12-26 17:01:42', '2021-12-26 17:01:45'),
(145, '5', 7, 23, 1, '2021-12-26 17:01:57', '2021-12-26 17:01:58');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `createTime` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `isOpen` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `userId`, `createTime`, `isOpen`, `createdAt`, `updatedAt`) VALUES
(1, 2, '10/10/10', 1, '2021-02-03 23:09:50', '0000-00-00 00:00:00'),
(2, 2, '20/20/20', 0, '2021-02-01 23:10:11', '0000-00-00 00:00:00'),
(3, 8, '15/48/78', 1, '2021-02-28 22:54:01', '0000-00-00 00:00:00'),
(4, 4, '48/45/78', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 9, '1615153053991', 0, '2021-03-07 21:37:59', '2021-03-12 08:53:09'),
(10, 9, '3/12/2021', 0, '2021-03-12 09:07:42', '2021-03-14 21:41:11'),
(11, 11, '3/15/2021', 0, '2021-03-15 07:56:24', '2021-03-15 07:59:12'),
(12, 9, '3/16/2021', 0, '2021-03-16 21:42:48', '2021-03-16 21:42:48'),
(13, 9, '3/17/2021', 0, '2021-03-16 22:23:09', '2021-03-16 22:59:59'),
(14, 9, '3/17/2021', 0, '2021-03-16 23:02:29', '2021-03-16 23:03:45'),
(15, 9, '3/19/2021', 0, '2021-03-19 07:18:04', '2021-03-19 07:19:08'),
(16, 9, '3/19/2021', 0, '2021-03-19 07:28:19', '2021-03-19 08:21:05'),
(17, 9, '3/19/2021', 0, '2021-03-19 08:23:04', '2021-03-19 08:25:48'),
(18, 9, '3/19/2021', 0, '2021-03-19 08:26:27', '2021-03-19 08:37:50'),
(19, 9, '3/19/2021', 0, '2021-03-19 08:38:06', '2021-03-19 08:39:14'),
(20, 9, '3/19/2021', 0, '2021-03-19 08:39:25', '2021-03-19 08:43:36'),
(21, 9, '3/19/2021', 1, '2021-03-19 08:44:17', '2021-03-19 08:44:17'),
(22, 12, '3/19/2021', 1, '2021-03-19 11:24:34', '2021-03-19 11:24:34'),
(23, 13, '12/26/2021', 1, '2021-12-26 17:01:42', '2021-12-26 17:01:42');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'Drinks', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Vegetables and Fruit', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Dairy', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Meat and Fish', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Breads', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Cooking and Baking', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Snacks and cereal', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Clean', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Pharm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Deals', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'TEL AVIV', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'JERUSALEM', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'RAMAT GAN', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'PETAH TIKVA', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'RISHON LEZION', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'LOD', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'KRIYAT ATA', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'NATANYA', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'EILAT', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'ASHDOD', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `totalPrice` varchar(255) NOT NULL,
  `deliveryDate` varchar(255) NOT NULL,
  `orderDate` varchar(255) NOT NULL,
  `creditFourNumer` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `userId`, `cartId`, `totalPrice`, `deliveryDate`, `orderDate`, `creditFourNumer`, `city`, `street`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '58', '2021-03-02', '2021-03-02', '1324', 'tel aviv', 'rochild', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 2, '56', '2021-03-02', '2021-03-02', '7894', 'lod', 'chabad', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 4, 3, '874', '2021-03-02', '2021-03-02', '12345', 'jerusalem', 'hoel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 1, '561', '2021-03-03', '2021-03-03', '4567', 'ramla', 'sinai', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 8, 2, '584', '2021-03-08', '2021-03-08', '4569', 'haifa', 'shalom', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 2, 3, '8745', '2021-03-07', '2021-03-08', '1478', 'ashdod', 'noash', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 2, 1, '6038', '2021-03-04', '1614796930723', '12354', 'tel aviv', 'Kaplan 2', '2021-03-03 18:42:30', '2021-03-03 18:42:30'),
(8, 2, 1, '6038', '2021-03-04', '1614800388790', '123456', 'PETAH TIKVA', 'Kaplan 2', '2021-03-03 19:40:00', '2021-03-03 19:40:00'),
(9, 2, 1, '6038', '2021-03-11', '1614800526248', '123456', 'JERUSALEM', 'Kaplan 2', '2021-03-03 19:42:19', '2021-03-03 19:42:19'),
(10, 2, 1, '6038', '2021-03-06', '1614800848248', '789456', 'TEL AVIV', 'Kaplan 2', '2021-03-03 19:47:40', '2021-03-03 19:47:40'),
(11, 2, 1, '6038', '2021-03-03', '1614800933343', '213456', 'TEL AVIV', 'Kaplan 2', '2021-03-03 19:49:06', '2021-03-03 19:49:06'),
(12, 2, 1, '6038', '2021-03-16', '1614801244159', '123456', 'TEL AVIV', 'Kaplan 2', '2021-03-03 19:54:20', '2021-03-03 19:54:20'),
(13, 2, 1, '6038', '2021-03-18', '1614801424204', '456789', 'PETAH TIKVA', 'Kaplan 2', '2021-03-03 19:57:16', '2021-03-03 19:57:16'),
(14, 2, 1, '6038', '2021-03-25', '1614801448710', '123', 'TEL AVIV', 'Kaplan 2', '2021-03-03 19:57:41', '2021-03-03 19:57:41'),
(15, 9, 9, '644.2', '2021-03-12', '3/12/2021', '123456789', 'tel aviv', 'alenby', '2021-03-12 08:29:27', '2021-03-12 08:29:27'),
(16, 9, 9, '644.2', '2021-03-12', '3/12/2021', '123456789', 'tel aviv', 'alenby', '2021-03-12 08:29:28', '2021-03-12 08:29:28'),
(17, 9, 9, '644.2', '2021-03-13', '3/12/2021', '123456789', 'tel aviv', 'alenby', '2021-03-12 08:30:33', '2021-03-12 08:30:33'),
(18, 9, 9, '644.2', '2021-03-13', '3/12/2021', '123456789', 'tel aviv', 'alenby', '2021-03-12 08:49:16', '2021-03-12 08:49:16'),
(19, 9, 9, '644.2', '2021-03-31', '3/12/2021', '123456789', 'tel aviv', 'alenby', '2021-03-12 08:51:48', '2021-03-12 08:51:48'),
(20, 9, 9, '644.2', '2021-03-31', '3/12/2021', '123456789', 'tel aviv', 'alenby', '2021-03-12 08:53:09', '2021-03-12 08:53:09'),
(21, 9, 10, '177.7', '2021-03-16', '3/14/2021', '123456789', 'tel aviv', 'alenby', '2021-03-14 21:40:42', '2021-03-14 21:40:42'),
(22, 9, 10, '177.7', '2021-03-16', '3/14/2021', '123456789', 'tel aviv', 'alenby', '2021-03-14 21:41:11', '2021-03-14 21:41:11'),
(23, 11, 11, '8', '2021-03-17', '3/15/2021', '123456789', 'LOD', 'chabad', '2021-03-15 07:59:12', '2021-03-15 07:59:12'),
(24, 9, 13, '92', '2021-03-26', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 22:33:23', '2021-03-16 22:33:23'),
(25, 9, 13, '92', '2021-04-02', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 22:37:55', '2021-03-16 22:37:55'),
(26, 9, 13, '92', '2021-03-18', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 22:41:33', '2021-03-16 22:41:33'),
(27, 9, 13, '184', '2021-03-19', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 22:46:24', '2021-03-16 22:46:24'),
(28, 9, 13, '184', '2021-03-17', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 22:47:20', '2021-03-16 22:47:20'),
(29, 9, 13, '184', '2021-03-24', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 22:52:35', '2021-03-16 22:52:35'),
(30, 9, 13, '184', '2021-03-24', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 22:53:34', '2021-03-16 22:53:34'),
(31, 9, 13, '184', '2021-03-17', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 22:59:59', '2021-03-16 22:59:59'),
(32, 9, 14, '92', '2021-03-23', '3/17/2021', '123456789', 'tel aviv', 'alenby', '2021-03-16 23:03:45', '2021-03-16 23:03:45'),
(33, 9, 15, '92', '2021-03-25', '3/19/2021', '123456789', 'tel aviv', 'alenby', '2021-03-19 07:19:08', '2021-03-19 07:19:08'),
(34, 9, 16, '184', '2021-03-24', '3/19/2021', '123456789', 'tel aviv', 'alenby', '2021-03-19 08:21:05', '2021-03-19 08:21:05'),
(35, 9, 17, '92', '2021-02-28', '3/19/2021', '123456789', 'tel aviv', 'alenby', '2021-03-19 08:25:48', '2021-03-19 08:25:48'),
(36, 9, 18, '92', '2021-03-03', '3/19/2021', '123456789', 'tel aviv', 'alenby', '2021-03-19 08:37:50', '2021-03-19 08:37:50'),
(37, 9, 19, '92', '2021-02-28', '3/19/2021', '123456789', 'tel aviv', 'alenby', '2021-03-19 08:39:14', '2021-03-19 08:39:14'),
(38, 9, 20, '184', '2021-04-01', '3/19/2021', '123456789', 'tel aviv', 'alenby', '2021-03-19 08:43:36', '2021-03-19 08:43:36');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(1, 'Coca Cola', '1.75', 'uploads\\1614707042922_cola.jpg', 1, '0000-00-00 00:00:00', '2021-03-15 08:08:43'),
(2, 'Milk', '7.25', 'uploads\\1616340821881_milk.jpg', 3, '0000-00-00 00:00:00', '2021-03-21 15:33:48'),
(3, 'Rice', '8.75', 'uploads\\1615412498895_rice.jpg', 2, '0000-00-00 00:00:00', '2021-03-10 21:41:52'),
(6, 'chocolate chips', '17.90', 'uploads\\1615412475275_chocolate_chips.jpg', 7, '2021-02-16 20:53:37', '2021-03-10 21:41:16'),
(8, 'lollipops', '12.50', 'uploads\\1615412634329_lollipops.jpg', 7, '2021-03-10 21:43:55', '2021-03-10 21:43:55'),
(9, 'Cheese Cake', '25.90', 'uploads\\1616144032008_Cheesecake.jpg', 3, '2021-03-19 08:54:36', '2021-03-19 08:54:36'),
(13, 'Snickers', '4.25', 'uploads\\1616340193035_snickers.jpg', 7, '2021-03-21 15:23:13', '2021-03-21 15:23:13'),
(14, 'Fanta', '8.25', 'uploads\\1616340247805_fanta.jpg', 1, '2021-03-21 15:24:09', '2021-03-21 15:24:09'),
(15, 'Sprite', '1.25', 'uploads\\1616340275443_sprite.jpg', 1, '2021-03-21 15:24:37', '2021-03-21 15:24:37'),
(16, 'Cheerios ', '9.90', 'uploads\\1616340321980_cheerios.jpg', 3, '2021-03-21 15:25:23', '2021-03-21 15:25:23'),
(18, 'Air Cleaner', '3.25', 'uploads\\1640938401725_air_cleaner.png', 8, '2021-12-31 08:13:24', '2021-12-31 08:13:24'),
(19, 'Beigels', '1.75', 'uploads\\1640938499513_Baigles.jpg', 5, '2021-12-31 08:15:01', '2021-12-31 08:15:01'),
(20, 'apple', '1.50', 'uploads\\1640938640518_apple.png', 2, '2021-12-31 08:17:26', '2021-12-31 08:17:26'),
(21, 'Axe', '2.50', 'uploads\\1640938669494_axe_men.png', 9, '2021-12-31 08:17:50', '2021-12-31 08:17:50'),
(22, 'Bannanas', '3.50', 'uploads\\1640938695068_bannana.png', 2, '2021-12-31 08:18:16', '2021-12-31 08:18:16'),
(23, 'Barbadians Fish', '10.00', 'uploads\\1640938742452_barbunions_fish.png', 4, '2021-12-31 08:19:03', '2021-12-31 08:19:03'),
(24, 'Carlsberg Beer Pack', '7.25', 'uploads\\1640938783402_beer_carlsberg.png', 1, '2021-12-31 08:19:44', '2021-12-31 08:19:44'),
(25, 'Bread ', '1.50', 'uploads\\1640938805251_bread.png', 5, '2021-12-31 08:20:06', '2021-12-31 08:20:06'),
(26, 'Hala', '2.75', 'uploads\\1640938830539_chala.png', 5, '2021-12-31 08:20:31', '2021-12-31 08:20:31'),
(27, 'Chickens', '5.90', 'uploads\\1640938854297_chicken.png', 4, '2021-12-31 08:20:55', '2021-12-31 08:20:55'),
(28, 'Cinnamon Cookies', '2.50', 'uploads\\1640938899757_Cinnamon_cookie.jpg', 6, '2021-12-31 08:21:41', '2021-12-31 08:21:41'),
(29, 'Coffee', '4.50', 'uploads\\1640938919980_coffee.png', 1, '2021-12-31 08:22:01', '2021-12-31 08:22:01'),
(30, 'Corson', '1.50', 'uploads\\1640938970263_Corasons.jpg', 6, '2021-12-31 08:22:51', '2021-12-31 08:22:51'),
(31, 'Cronflex', '6.50', 'uploads\\1640939006378_cornflex.png', 7, '2021-12-31 08:23:27', '2021-12-31 08:23:27'),
(32, 'Cosmin Bread', '3.75', 'uploads\\1640939031467_cosmin_bread.png', 5, '2021-12-31 08:23:54', '2021-12-31 08:23:54'),
(33, 'Cucumbers', '1.25', 'uploads\\1640939063708_cucambers.png', 2, '2021-12-31 08:24:24', '2021-12-31 08:24:24'),
(34, 'Cupcakes', '2.50', 'uploads\\1640939101648_Cupcake.jpg', 6, '2021-12-31 08:25:04', '2021-12-31 08:25:04'),
(35, 'Dishes Cleaner', '10.75', 'uploads\\1640939146944_dishes_cleaning.png', 8, '2021-12-31 08:25:48', '2021-12-31 08:25:48'),
(36, 'Hair Color', '8.50', 'uploads\\1640939213988_hair_color.png', 9, '2021-12-31 08:26:55', '2021-12-31 08:26:55'),
(37, 'Ice Cappuccino', '3.50', 'uploads\\1640939259868_ice_capuchino.png', 3, '2021-12-31 08:27:40', '2021-12-31 08:27:40'),
(38, 'Black Label Jonny Walker', '25.90', 'uploads\\1640939298227_jonny_walker.png', 1, '2021-12-31 08:28:19', '2021-12-31 08:28:19'),
(39, 'Lemon', '1.50', 'uploads\\1640939320044_lemon.png', 2, '2021-12-31 08:28:41', '2021-12-31 08:28:41'),
(40, 'Machmetzet Bread ', '5.75', 'uploads\\1640939368439_Machmetzet.jpg', 5, '2021-12-31 08:29:33', '2021-12-31 08:29:33'),
(41, 'Makeup ', '23.50', 'uploads\\1640939420434_makeup.png', 9, '2021-12-31 08:30:22', '2021-12-31 08:30:22'),
(42, 'Mashrooms', '3.75', 'uploads\\1640939452018_mashroom.png', 2, '2021-12-31 08:30:53', '2021-12-31 08:30:53'),
(43, 'Melon', '5.75', 'uploads\\1640939471297_melon.png', 2, '2021-12-31 08:31:13', '2021-12-31 08:31:13'),
(44, 'Musht Fish', '7.95', 'uploads\\1640939502766_musht_fish.png', 4, '2021-12-31 08:31:44', '2021-12-31 08:31:44'),
(45, 'Orange', '4.50', 'uploads\\1640939520062_orange.png', 2, '2021-12-31 08:32:01', '2021-12-31 08:32:01'),
(46, 'Perfume', '35.90', 'uploads\\1640939566437_perfumes.png', 9, '2021-12-31 08:32:47', '2021-12-31 08:32:47'),
(47, 'Pizza', '5.75', 'uploads\\1640939587302_pizza_deals.png', 10, '2021-12-31 08:33:10', '2021-12-31 08:33:10'),
(48, 'Pringles', '5.25', 'uploads\\1640939613127_pringles.png', 7, '2021-12-31 08:33:34', '2021-12-31 08:33:34'),
(49, 'Red Onion', '1.75', 'uploads\\1640939635625_red_onion.png', 2, '2021-12-31 08:33:56', '2021-12-31 08:33:56'),
(50, 'Salmon Fish', '9.75', 'uploads\\1640939662254_salmon_fish.png', 4, '2021-12-31 08:34:23', '2021-12-31 08:34:23'),
(51, 'Cooking Cream', '3.75', 'uploads\\1640939744403_shamenet_lebishul.png', 3, '2021-12-31 08:35:45', '2021-12-31 08:35:45'),
(52, 'Shampoo', '6.50', 'uploads\\1640939768896_shampoo.png', 9, '2021-12-31 08:36:10', '2021-12-31 08:36:10'),
(53, 'Clean Spray', '5.75', 'uploads\\1640939808198_spray_clean.png', 8, '2021-12-31 08:36:49', '2021-12-31 08:36:49'),
(54, 'Steak', '4.50', 'uploads\\1640939840455_stake.png', 4, '2021-12-31 08:37:21', '2021-12-31 08:37:21'),
(55, 'Strawberry', '12.50', 'uploads\\1640939863905_strawberry.png', 2, '2021-12-31 08:37:45', '2021-12-31 08:37:45'),
(56, 'Chips Snack - Cream and Onion', '1.25', 'uploads\\1640939911368_tapuchips.png', 7, '2021-12-31 08:39:30', '2021-12-31 08:39:30'),
(57, 'Chips Snack - Mexican', '1.50', 'uploads\\1640940033772_tapuchips_mexican.png', 7, '2021-12-31 08:40:35', '2021-12-31 08:40:35'),
(58, 'Chips Snacks - Pack', '5.90', 'uploads\\1640940071283_tapuchips_pack.png', 7, '2021-12-31 08:41:12', '2021-12-31 08:41:12'),
(59, 'Teeth Brush', '15.90', 'uploads\\1640940107172_teeth_brush.png', 9, '2021-12-31 08:41:49', '2021-12-31 08:41:49'),
(60, 'Tomatoes', '2.75', 'uploads\\1640940132179_tomatoes.png', 2, '2021-12-31 08:42:13', '2021-12-31 08:42:13'),
(61, 'Trix', '10.90', 'uploads\\1640940149910_trix.png', 7, '2021-12-31 08:42:30', '2021-12-31 08:42:30'),
(62, 'Uggi', '12.50', 'uploads\\1640940170537_uggi.png', 7, '2021-12-31 08:42:51', '2021-12-31 08:42:51'),
(63, 'Dishes Liquid', '8.50', 'uploads\\1640940232583_wash_liquid.png', 8, '2021-12-31 08:43:54', '2021-12-31 08:43:54'),
(64, 'Fish', '13.25', 'uploads\\1640940259541_whole_fish.png', 4, '2021-12-31 08:44:22', '2021-12-31 08:44:22'),
(65, 'Wine', '16.75', 'uploads\\1640940278471_wines.png', 1, '2021-12-31 08:44:41', '2021-12-31 08:44:41'),
(66, 'Cleaning Wipes ', '12.90', 'uploads\\1640940316408_wipes_clean.png', 8, '2021-12-31 08:45:17', '2021-12-31 08:45:17'),
(67, 'yellow Cheese', '7.90', 'uploads\\1640940345129_Yellow_cheese.png', 3, '2021-12-31 08:45:46', '2021-12-31 08:45:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` tinyint(1) DEFAULT NULL,
  `firstName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `personalId` int(9) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `firstName`, `lastName`, `city`, `street`, `email`, `password`, `personalId`, `createdAt`, `updatedAt`) VALUES
(1, 0, 'mendy', 'michaeli', 'Haifa', 'Pal Yam 7', 'm@gmail.com', '123', 999999999, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 0, 'shay', 'lusky', 'Tel Aviv', 'Kaplan 2', 's@gamil.com', '123456', 222222222, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 0, 'mendy', 'hilki', 'TEL AVIV', 'meauli', 'a@a.com', '123', 585858585, '2021-02-27 22:54:01', '2021-02-27 22:54:01'),
(8, 0, 'mendy', 'michaeli', 'EILAT', '789', 'a@j.com', '123', 111111111, '2021-02-27 23:11:04', '2021-02-27 23:11:04'),
(9, 1, 'yossi', 'michaeli', 'tel aviv', 'alenby', 'm@o.com', '123456', 895412571, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 0, 'me', 'last', 'TEL AVIV', 'hili', 'm@gmail.com', '123456', 897894456, '2021-03-09 20:38:34', '2021-03-09 20:38:34'),
(11, 1, 'Mendy', 'Michaeli', 'LOD', 'chabad', 'm@gmail.com', '1234', 888888888, '2021-03-15 07:16:52', '2021-03-15 07:16:52'),
(12, 0, 'mendy', 'michaeli', 'JERUSALEM', 'halevi', 'm@m.com', '123456', 555555555, '2021-03-19 09:33:45', '2021-03-19 09:33:45'),
(13, 0, 'Mendy', 'Michaeli', 'PETAH TIKVA', 'micha', 'mm@mm.com', '1234', 859595954, '2021-03-21 18:03:38', '2021-03-21 18:03:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartproducts`
--
ALTER TABLE `cartproducts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `cartId` (`cartId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartproducts`
--
ALTER TABLE `cartproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
