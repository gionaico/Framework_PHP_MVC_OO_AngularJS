-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-06-2018 a las 16:17:42
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
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `n_comentario` int(11) NOT NULL COMMENT 'Clave primaria',
  `id_curso` int(11) NOT NULL COMMENT 'CURSO',
  `user_name` varchar(200) NOT NULL COMMENT 'USER',
  `comentario` varchar(200) NOT NULL,
  `fecha_comentario` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla de comentarios';

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`n_comentario`, `id_curso`, `user_name`, `comentario`, `fecha_comentario`) VALUES
(1, 1, 'giovani', 'Muy buen curso.', '2018-06-03 22:50:04'),
(2, 2, 'giovani', 'Muy buen curso para profesionales.', '2018-06-03 22:51:47'),
(3, 1, 'LyCaMofY0NQiiJmGHxjENsaqRFo2', 'Muy bueno.', '2018-06-03 23:31:07'),
(4, 1, 'iando', 'Para empezar esta bien.', '2018-06-03 23:31:40'),
(5, 1, 'pepon', 'Muy bueno.', '2018-06-03 23:45:48'),
(6, 1, 'prueba', 'Muy bueno.', '2018-06-03 23:46:03'),
(7, 1, 'YVKlN1Dz2ofnHH1UzGc54AKLfB12', 'Muy bueno.', '2018-06-03 23:46:22'),
(8, 1, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 'En mi opinion es un curso muy completo.', '2018-06-04 14:03:08'),
(9, 1, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 'Como dije es un curso muy completo, pero quiza a nivel profesional habria que profundizar mas.', '2018-06-04 14:07:00'),
(10, 1, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos velit consequuntur, accusantium recusand', '2018-06-04 14:09:06'),
(11, 1, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 'icing elit. Sunt, inventore, officiis! Unde quidem, iure quos', '2018-06-04 14:09:59'),
(12, 1, 'giovani', 'ipsum dolor sit amet, consectetur adipisicing elit. Sunt, inventore, officiis! Unde quidem, iure quos ve.', '2018-06-04 15:44:06'),
(13, 1, 'giovani', '777777777777777777777777777777', '2018-06-04 16:37:18'),
(14, 1, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 'ideal para empezar y practicar.', '2018-06-07 12:06:58');

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
-- Estructura de tabla para la tabla `cursosComprados`
--

CREATE TABLE `cursosComprados` (
  `numerocompra` int(11) NOT NULL,
  `user` varchar(200) NOT NULL COMMENT 'cliente',
  `id_curso` varchar(100) NOT NULL COMMENT 'articulo',
  `id_pedido` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cursosComprados`
--

INSERT INTO `cursosComprados` (`numerocompra`, `user`, `id_curso`, `id_pedido`) VALUES
(1, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', '1', '1OuSdTIEcxYQ1YR5e6JYcUl0yzq12018_06_07_16_09_07'),
(2, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', '2', '1OuSdTIEcxYQ1YR5e6JYcUl0yzq12018_06_07_16_09_07'),
(3, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', '7', '1OuSdTIEcxYQ1YR5e6JYcUl0yzq12018_06_07_16_09_07'),
(4, '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', '15', '1OuSdTIEcxYQ1YR5e6JYcUl0yzq12018_06_07_16_09_07'),
(5, 'giovani', '1', 'giovani2018_06_07_16_16_16'),
(6, 'giovani', '2', 'giovani2018_06_07_16_16_16');

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
('giovanny_15', 'giovanny', 15),
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq1_2', '2', 1),
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq1_3', '3', 1),
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq1_1', '1', 1),
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq1_5', '5', 1),
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq1_15', '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 15),
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq1_14', '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 14),
('giovani_1', 'giovani', 1),
('giovani_2', 'giovani', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` varchar(200) NOT NULL,
  `user` varchar(200) NOT NULL COMMENT 'cliente',
  `fechacompra` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ImporteTotal` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `user`, `fechacompra`, `ImporteTotal`) VALUES
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq12018_06_07_16_09_07', '1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', '2018-06-07 16:09:07', '235.22'),
('giovani2018_06_07_16_16_16', 'giovani', '2018-06-07 16:16:16', '199.98');

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
('1OuSdTIEcxYQ1YR5e6JYcUl0yzq1', 'Giovanny Coque', '0000-00-00', 'Man', 'ES', '45', 'Ablates', 602240448, 'mauricio7102@hotmail.com', '', '', '2018-05-23', 1, '46f151afcae3fcca3e054ab5cdf4e9b1.NDZmMTUxYWZjYWUzZmNjYTNlMDU0YWI1Y2RmNGU5YjE=', 'media/users/1OuSdTIEcxYQ1YR5e6JYcUl0yzq1.gif', 'f', 'n', 'y'),
('fDbUWWxPM7Xa4xD6XIcHqd8N6Jb2', 'gionaico', '0000-00-00', '', '', '', '', 0, 'gm.4int@gmail.com', '', '', '2018-06-04', 0, 'dbfd9c57744ae696edf84ea6d8f789ee.ZGJmZDljNTc3NDRhZTY5NmVkZjg0ZWE2ZDhmNzg5ZWU=', 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg', 'g', 'n', 'y'),
('giovani', 'iando', '2000-05-01', 'Man', 'IT', '', '', 2147483647, 'gm.44int@gmail.com', '$2y$10$V6vVzt3vJkDmBdsTkpnUp.FBbB.dipzXbSX4EU7rHS7D8iFHioDSO', '', '2018-05-21', 1, '11b15923b8e144600f1d2a2d81c966d2.MTFiMTU5MjNiOGUxNDQ2MDBmMWQyYTJkODFjOTY2ZDI=', 'media/users/giovani.png', 'm', 'y', 'y'),
('iando', '', '0000-00-00', '', 'ES', '08', 'Alpens', 0, 'gm.4i5nt@gmail.com', '$2y$10$g6MZm9VAtUk5O5M3cECLIeR/RMxczYIoPkIer5rt0URf.hvHx.GAu', '', '2018-05-30', 0, 'af3ae95d2bb88fc6ff79abf0a733ba6d.YWYzYWU5NWQyYmI4OGZjNmZmNzlhYmYwYTczM2JhNmQ=', 'media/users/iando.gif', 'm', 'y', 'y'),
('LyCaMofY0NQiiJmGHxjENsaqRFo2', 'Giovanny Coque', '0000-00-00', '', '', '', '', 0, 'mauricio7102@hotmail.com', '', '', '2018-06-02', 0, '2f163f7cab9a835bb1bef446bb7584ab.W3sidXNlcl9uYW1lIjoiTHlDYU1vZlkwTlFpaUptR0h4akVOc2FxUkZvMiIsIm5hbWUiOiJHaW92YW5ueSBDb3F1ZSIsInR5cGUiOiIwIiwiYXZhdGFyIjoiaHR0cHM6XC9cL2dyYXBoLmZhY2Vib29rLmNvbVwvMTgyNDM', 'media/users/LyCaMofY0NQiiJmGHxjENsaqRFo2.jpeg', 'f', 'n', 'y'),
('pepon', '', '0000-00-00', '', '', '', '', 0, 'pepeon@gmail.com', '$2y$10$9CqRGt7eftS9ZU1PMCdPzeqNg.nht3v7i7SHARJYt/GQ.ikyvPBQK', '', '2018-05-30', 0, '06c323108c8ecd6a40d58c0d64973f92', 'media/users/pepon.jpeg', 'm', 'n', 'y'),
('prueba', '', '0000-00-00', '', '', '', '', 0, 'gm.4int@gmail.com', '$2y$10$OEMjHVgeRMEsURXoI1mRc./1kGQsoRTnk30/fSNKqIKPiindrdKuK', '', '2018-05-30', 0, 'd9ce8a9d031e2b5f9f187fff93ead31e.ZDljZThhOWQwMzFlMmI1ZjlmMTg3ZmZmOTNlYWQzMWU=', 'media/users/prueba.jpg', 'm', 'y', 'y'),
('YVKlN1Dz2ofnHH1UzGc54AKLfB12', 'Gionaico', '0000-00-00', '', '', '', '', 0, '', '', '', '2018-05-19', 0, NULL, 'media/users/YVKlN1Dz2ofnHH1UzGc54AKLfB12.gif', 't', 'n', 'y');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`n_comentario`);

--
-- Indices de la tabla `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cursosComprados`
--
ALTER TABLE `cursosComprados`
  ADD PRIMARY KEY (`numerocompra`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `n_comentario` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Clave primaria', AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT de la tabla `cursosComprados`
--
ALTER TABLE `cursosComprados`
  MODIFY `numerocompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;