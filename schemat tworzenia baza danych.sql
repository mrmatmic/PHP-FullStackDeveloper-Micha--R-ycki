--Najpierw wsadzamy poniższe 2 linijki dotyczące utworzenia bazy danych

CREATE DATABASE IF NOT EXISTS `pracownicy` DEFAULT CHARACTER SET utf8 COLLATE utf8_polish_ci;
USE `pracownicy`;

-- --------------------------------------------------------
-- --Potem wsadzamy pozostałe linijki kodu w miejscu utworzenia bazy danych

--
-- Struktura tabeli dla tabeli `pracownik`
--

DROP TABLE IF EXISTS `pracownik`;
CREATE TABLE IF NOT EXISTS `pracownik` (
  `id_pracownika` int(11) NOT NULL,
  `imie` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `nazwisko` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `opis` text COLLATE utf8_polish_ci NOT NULL,
  `stanowisko` enum('Tester','Developer','Project Manager') COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id_pracownika`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `pracownik`
--

INSERT INTO `pracownik` (`id_pracownika`, `imie`, `nazwisko`, `email`, `opis`, `stanowisko`) VALUES
(1, 'Michaliny', 'Rozycki', 'michalina.jan.rozycki@gmail.com', 'To ja', 'Project Manager'),
(2, 'MichaÅ‚', 'RÃ³Å¼ycki', 'michal.jan.rozycki@gmail.com', 'To ja', 'Project Manager'),
(3, 'MichaÅ‚', 'RÃ³Å¼ycki', 'michal.jan.rozycki@gmail.com', 'To ja', 'Tester'),
(4, 'Angelina', 'RÃ³Å¼ycka', 'angelina.rozycka@gmail.com', 'To', 'Developer'),
(5, 'Angelina', 'Jolie', 'angelina.rozycka@gmail.com', 'To', 'Tester'),
(6, 'Angelina', 'RÃ³Å¼ycka', 'angelina.rozycka@gmail.com', 'To', 'Project Manager');

-- --------------------------------------------------------
--
-- Struktura tabeli dla tabeli `developer`
--

DROP TABLE IF EXISTS `developer`;
CREATE TABLE IF NOT EXISTS `developer` (
  `id_pracownika` int(11) NOT NULL,
  `srodowiska_ide` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `jezyki_programowania` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `zna_sql` enum('tak','nie') COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id_pracownika`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `developer`
--

INSERT INTO `developer` (`id_pracownika`, `srodowiska_ide`, `jezyki_programowania`, `zna_sql`) VALUES
(4, 'Visual Studio, IntellijIDEA', 'Python, Java, PHP, JavaScript', 'nie');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `project_manager`
--

DROP TABLE IF EXISTS `project_manager`;
CREATE TABLE IF NOT EXISTS `project_manager` (
  `id_pracownika` int(11) NOT NULL,
  `metodologie_prowadzenia_projektow` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `systemy_raportowe` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `zna_scrum` enum('tak','nie') COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id_pracownika`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `project_manager`
--

INSERT INTO `project_manager` (`id_pracownika`, `metodologie_prowadzenia_projektow`, `systemy_raportowe`, `zna_scrum`) VALUES
(2, 'Visual Studio, IntellijIDEA', 'Python, Java, PHP, JavaScript', 'tak'),
(6, 'Visual Studio, IntellijIDEA', 'Python, Java, PHP, JavaScript', 'nie'),
(1, 'nie wiem', 'nie wiem', 'tak');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tester`
--

DROP TABLE IF EXISTS `tester`;
CREATE TABLE IF NOT EXISTS `tester` (
  `id_pracownika` int(11) NOT NULL,
  `systemy_testujace` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `systemy_raportowe` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `zna_selenium` enum('tak','nie') COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id_pracownika`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `tester`
--

INSERT INTO `tester` (`id_pracownika`, `systemy_testujace`, `systemy_raportowe`, `zna_selenium`) VALUES
(3, 'Visual Studio, IntellijIDEA', 'Python, Java, PHP, JavaScript', 'tak'),
(5, 'nic', 'nic', 'nie');

