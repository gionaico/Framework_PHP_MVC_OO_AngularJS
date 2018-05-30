-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-05-2018 a las 11:43:09
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `LearnEasy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses`
--

CREATE TABLE `courses` (
  `id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `lenguage` varchar(20) NOT NULL,
  `ulr` varchar(300) NOT NULL,
  `duration` varchar(50) NOT NULL,
  `levelCour` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `courseDescr` varchar(300) NOT NULL,
  `personalDescr` varchar(300) NOT NULL,
  `register_date` date NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `sub_subject` varchar(20) NOT NULL,
  `lat` char(15) DEFAULT NULL,
  `lng` char(15) DEFAULT NULL,
  `country` char(5) DEFAULT NULL,
  `province` char(5) DEFAULT NULL,
  `city` char(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `courses`
--

INSERT INTO `courses` (`id`, `title`, `lenguage`, `ulr`, `duration`, `levelCour`, `price`, `courseDescr`, `personalDescr`, `register_date`, `avatar`, `category`, `subject`, `sub_subject`, `lat`, `lng`, `country`, `province`, `city`) VALUES
(1, 'Laravel para principiantes', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Medio', '99.99', '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-14', 'media/courses/default-potho.jpg', 'Security:Javascript:Laravel:', '', '', '38.8220593', '-0.606392700000', 'ES', '46', 'Onteniente'),
(2, 'Introduccion a laravel', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '99.99', '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-14', 'media/courses/1laravel.png', 'Backend:Robotics:Django:SQL:', 'Backend', '', '38.69870659999', '-0.481093699', 'ES', '3', 'Alcoy'),
(3, 'Aprendiendo laravel desde 0', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '99.99', '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-14', 'media/courses/default-potho.jpg', 'Backend:Robotics:Django:SQL:', 'Backend', '', '39.4699075', '-0.37628810000', 'ES', '46', 'Valencia'),
(4, 'Laravel profesional', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '99.99', '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-14', 'media/courses/default-potho.jpg', 'Backend:Robotics:Django:SQL:', 'Backend', '', '38.9680320', '-0.18446710', 'ES', '46', 'Gandia'),
(5, 'Laravel avanzado', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '99.99', '5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-14', 'media/courses/default-potho.jpg', 'Backend:Robotics:Django:SQL:', 'Backend', '', '38.9899566', '-0.52354739999', 'ES', '46', 'Xativa'),
(6, 'Laravel para principiantes', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '99.99', '6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-14', 'media/courses/default-potho.jpg', 'Backend:Robotics:Django:SQL:', 'Backend', '', '38.2699329', '-0.7125608000', 'ES', '3', 'Elche'),
(7, 'CSS profesional', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '19.25', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', '2018-03-15', 'media/courses/disenadorweb.png', 'Security:Laravel:', 'Security', '', '38.631819600', '-0.8612206000', 'ES', '3', 'Villena'),
(8, 'Less CSS', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Medio', '19.25', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', '2018-03-15', 'media/courses/default-potho.jpg', 'Security:Django:', 'Security', '', '39.4825816', '-0.44486689999', 'ES', '46', 'Quart De Poblet'),
(9, 'Sass CSS', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '19.25', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', '2018-03-15', 'media/courses/default-potho.jpg', 'Frondend:Diseny:Javascript:', 'Security', '', '38.838799', '0.105055699999', '', '3', 'Denia'),
(10, 'Curso bootstrap 4 CSS', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Basic', '19.25', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', '2018-03-15', 'media/courses/default-potho.jpg', 'Robotics:SQL:', '', '', '38.3459963', '-0.4906855000', 'ES', '3', 'Alicante'),
(11, 'Curso bootstrap 3 CSS', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Medio', '19.25', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', '2018-03-15', 'media/courses/default-potho.jpg', 'SQL:Mongo:', 'Diseny', '', '38.5410566', '-0.1224936999', 'ES', '3', 'Benidorm'),
(12, 'CSS para principiantes', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '19.25', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', '2018-03-15', 'media/courses/default-potho.jpg', 'Frondend:Laravel:Mongo:', 'Frondend', '', '38.6436468999', '0.045687600', 'ES', '3', 'Calpe'),
(13, 'Diseno web CSS', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Expert', '19.25', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', '2018-03-15', 'media/courses/default-potho.jpg', 'Security:SQL:', 'Backend', '', '38.4765073', '-0.79645970', 'ES', '3', 'Elda'),
(14, 'aprendiendo diseno web', 'Spanish', 'https://www.youtube.com/', 'betwen 1-3 hours', 'Medio', '19.25', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', 'Adobe Photoshop es un editor de grÃ¡ficos rasterizados desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografÃ­as y grÃ¡ficos, su nombre en espaÃ±ol significa literalmente \"taller de fotos\". ', '2018-03-15', 'media/courses/default-potho.jpg', 'Robotics:Javascript:Laravel:SQL:', 'Backend', '', '', '', '', NULL, NULL),
(15, 'JS para principiantes (desde 0)', 'Spanish', 'https://es.stackoverflow.com/questions/99249/c%C3%B3mo-obtener-json-desde-una-url', 'betwen 3-5 hours', 'Expert', '15.99', '14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-21', 'media/courses/javascript.png', 'Javascript:', 'Frontend', 'Javascript', '', '', '', NULL, NULL),
(16, 'JS para principiantes ', 'Spanish', 'https://es.stackoverflow.com/questions/99249/c%C3%B3mo-obtener-json-desde-una-url', 'betwen 3-5 hours', 'Medio', '15.99', '13 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-21', 'media/courses/default-potho.jpg', 'Backend:Security:PHP:', 'Frontend', 'Jquery', '', '', '', NULL, NULL),
(17, 'JS para principiantes ', 'Spanish', 'https://es.stackoverflow.com/questions/99249/c%C3%B3mo-obtener-json-desde-una-url', 'betwen 3-5 hours', 'Expert', '15.99', '12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-21', 'media/courses/default-potho.jpg', 'Angular:Node js:', 'Frontend', 'Javascript', '', '', '', NULL, NULL),
(18, 'JS para principiantes ', 'Spanish', 'https://es.stackoverflow.com/questions/99249/c%C3%B3mo-obtener-json-desde-una-url', 'betwen 3-5 hours', 'Expert', '15.99', '11 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-21', 'media/courses/default-potho.jpg', 'Robotics:SQL:', 'Frontend', 'Angular 5', '', '', '', NULL, NULL),
(19, 'JS para principiantes ', 'Spanish', 'https://es.stackoverflow.com/questions/99249/c%C3%B3mo-obtener-json-desde-una-url', 'greater than 10 hours', 'Expert', '15.99', '10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-21', 'media/courses/default-potho.jpg', 'PHP:', 'Frontend', 'Mongo DB', '', '', '', NULL, NULL),
(20, 'JS para principiantes ', 'Spanish', 'https://es.stackoverflow.com/questions/99249/c%C3%B3mo-obtener-json-desde-una-url', 'greater than 10 hours', 'Basic', '15.99', '9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-21', 'media/courses/default-potho.jpg', 'Django:Laravel:Node js:', 'Frontend', 'Angular 5', '', '', '', NULL, NULL),
(21, 'DB para novatos', 'Spanish', 'https://es.stackoverflow.com/questions/99249/c%C3%B3mo-obtener-json-desde-una-url', 'betwen 1-3 hours', 'Medio', '15.25', '8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusandae ipsa odio corporis provident sequi temporibus autem aspernatur consequatur voluptates architecto!200', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa labore itaque recusandae, fuga ad, dolores repudiandae id saepe aliquam, nulla laudantium optio, sit eum soluta fugiat. Sint, aliquam sequi.', '2018-03-21', 'media/courses/bases.png', 'Security:Laravel:', 'DB', 'Mongo DB', '', '', '', NULL, NULL),
(22, 'JAVA profesional orientado a objetos', 'Spanish', 'https://www.youtube.com/', 'greater than 10 hours', 'Medio', '75.2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ab sit ex quis a repellendus architecto impedit nulla inventore ut sequi neque quaerat, asperiores voluptates in eum distinctio perferendis, at. Error eaque, saepe dolorem veniam vero odit veritatis eius corrupti ullam quam. Enim labori', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ab sit ex quis a repellendus architecto impedit nulla inventore ut sequi neque quaerat, asperiores voluptates in eum distinctio perferendis, at. Error eaque, saepe dolorem veniam vero odit veritatis eius corrupti ullam quam. Enim labori', '2018-03-23', 'media/courses/default-potho.jpg', 'Backend:Django:', 'Backend', 'PHP', '', '', '', NULL, NULL),
(23, 'CSS RESPONSIVE', 'Spanish', 'https://www.youtube.com/watch?v=dHQIQMYbhvU&list=PLkpsl5JUPCc7n0yQK0Zut8htZDfBPJoUa', 'betwen 5-10 hours', 'Medio', '48.65', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, provident amet repudiandae ipsum sunt quod, labore aliquam aspernatur, est nobis ex suscipit placeat facere culpa quam possimus odio magni a.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, provident amet repudiandae ipsum sunt quod, labore aliquam aspernatur, est nobis ex suscipit placeat facere culpa quam possimus odio magni a.', '2018-04-01', 'media/courses/435170690-sound.jpg', 'Backend:SQL:', 'Frontend', 'Jquery', '', '', '', NULL, NULL),
(24, 'Disenyo  web', 'English', 'https://www.youtube.com/watch?v=dHQIQMYbhvU&list=PLkpsl5JUPCc7n0yQK0Zut8htZDfBPJoUa', 'betwen 3-5 hours', 'Expert', '15.25', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati quidem aliquam nesciunt doloremque, harum doloribus eligendi ea cumque aspernatur est veniam animi tempore ratione ullam ipsam quae natus magnam.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati quidem aliquam nesciunt doloremque, harum doloribus eligendi ea cumque aspernatur est veniam animi tempore ratione ullam ipsam quae natus magnam.', '2018-04-01', 'media/courses/default-potho.jpg', 'Frondend:Diseny:Javascript:', 'Frontend', 'Javascript', '', '', '', NULL, NULL),
(25, 'Seguridad de sistemas', 'Portuguese', 'https://www.youtube.com/watch?v=dHQIQMYbhvU&list=PLkpsl5JUPCc7n0yQK0Zut8htZDfBPJoUa', 'betwen 1-3 hours', 'Expert', '89.20', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laborum est. Commodi nemo in cumque excepturi quis sapiente non consequatur vitae, dolorum inventore maxime deleniti provident laborum blanditiis quo. Repellat.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laborum est. Commodi nemo in cumque excepturi quis sapiente non consequatur vitae, dolorum inventore maxime deleniti provident laborum blanditiis quo. Repellat.', '2018-04-01', 'media/courses/default-potho.jpg', 'Frondend:Laravel:', 'OP', 'Linux', '', '', '', NULL, NULL),
(26, 'Juegos Frontend', 'Spanish', 'https://www.youtube.com/watch?v=dHQIQMYbhvU&list=PLkpsl5JUPCc7n0yQK0Zut8htZDfBPJoUa', 'greater than 10 hours', 'Medio', '12.50', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laborum est. Commodi nemo in cumque excepturi quis sapiente non consequatur vitae, dolorum inventore maxime deleniti provident laborum blanditiis quo. Repellat.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laborum est. Commodi nemo in cumque excepturi quis sapiente non consequatur vitae, dolorum inventore maxime deleniti provident laborum blanditiis quo. Repellat.', '2018-04-01', 'media/courses/2075060831-451028.jpg', 'Backend:Frondend:', 'Diseny', 'CSS3', '', '', '', NULL, NULL),
(27, 'Curso disenyo', 'Spanish', 'https://developer.mozilla.org/', 'betwen 1-3 hours', 'Medio', '18.5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laborum est. Commodi nemo in cumque excepturi quis sapiente non consequatur vitae, dol ... ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laborum est. Commodi nemo in cumque excepturi quis sapiente non consequatur vitae, dol ... ', '2018-05-07', 'media/courses/default-potho.jpg', 'Security:Mongo:', 'Diseny', 'My SQL', NULL, NULL, NULL, NULL, NULL),
(28, 'MONGO Avanzado', 'Spanish', 'https://developer.mozilla.org/', 'betwen 1-3 hours', 'Medio', '85.54', '10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusan ... ', '10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusan ... ', '2018-05-07', 'media/courses/1069074363-user.png', 'Robotics:', 'DB', 'My SQL', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `id` varchar(100) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `id_curso` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`id`, `user_name`, `id_curso`) VALUES
('giovanny_2', 'giovanny', 2),
('iando_2', 'iando', 2),
('pepon_21', 'pepon', 21),
('giovanny_7', 'giovanny', 7),
('iando_7', 'iando', 7),
('iando_15', 'iando', 15),
('giovanny_15', 'giovanny', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_name` varchar(50) NOT NULL COMMENT 'Clave primaria',
  `name` varchar(50) NOT NULL COMMENT 'nombre cliente',
  `birth_date` date NOT NULL,
  `genere` varchar(11) NOT NULL,
  `country` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `phone` int(9) NOT NULL COMMENT 'móvil',
  `email` varchar(100) NOT NULL COMMENT 'email',
  `password` varchar(200) NOT NULL,
  `interests` varchar(100) NOT NULL,
  `register_date` date NOT NULL,
  `type` int(1) DEFAULT '0',
  `token` char(200) DEFAULT NULL,
  `avatar` char(251) DEFAULT NULL,
  `tipo_registro` varchar(2) NOT NULL DEFAULT 'm',
  `activado` char(1) DEFAULT 'n',
  `primera_visita` char(1) DEFAULT 'y'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla de clientes';

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_name`, `name`, `birth_date`, `genere`, `country`, `province`, `city`, `phone`, `email`, `password`, `interests`, `register_date`, `type`, `token`, `avatar`, `tipo_registro`, `activado`, `primera_visita`) VALUES
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 'Giovanny Coque', '0000-00-00', 'Man', 'ES', '46', 'Mislata', 602240448, 'mauricio7102@hotmail.com', '', '', '2018-05-23', 1, '926336c052f261f6b8ae646f3bcb47af.OTI2MzM2YzA1MmYyNjFmNmI4YWU2NDZmM2JjYjQ3YWY=', 'media/users/1OuSdTIEcxYQ1YR5e6JYcUl0yzq1.gif', 'f', 'n', 'y'),
('giovani', 'iando', '2000-05-01', 'Man', 'IT', '', '', 2147483647, 'gm.4int@gmail.com', '$2y$10$V6vVzt3vJkDmBdsTkpnUp.FBbB.dipzXbSX4EU7rHS7D8iFHioDSO', '', '2018-05-21', 0, '377c18b43b998196506480768baffa48.Mzc3YzE4YjQzYjk5ODE5NjUwNjQ4MDc2OGJhZmZhNDg=', 'media/users/giovani.png', 'm', 'y', 'y'),
('oIZPQZCgO4gmpKcoItlZqhwARhP2', 'gionaico', '0000-00-00', '', '', '', '', 0, 'gmc.yanez@gmail.com', '', '', '2018-05-23', 0, '0a4f244455a561633015ae25fce6b067.MGE0ZjI0NDQ1NWE1NjE2MzMwMTVhZTI1ZmNlNmIwNjc=', 'https://lh3.googleusercontent.com/-jpKH4kruS3k/AAAAAAAAAAI/AAAAAAAAAAo/KJreqSH4Ljw/photo.jpg', 'g', 'n', 'y'),
('YVKlN1Dz2ofnHH1UzGc54AKLfB12', 'Gionaico', '0000-00-00', '', '', '', '', 0, '', '', '', '2018-05-19', 0, NULL, 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png', 't', 'n', 'y');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;