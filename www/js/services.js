angular.module('app.services', ['app.config'])

.factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {
        self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', 1024*1024);
        self.query('DROP TABLE IF EXISTS program');
        self.query('DROP TABLE IF EXISTS groups');
        self.query('DROP TABLE IF EXISTS bars');

        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];

            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });

            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            self.query(query);
        });

        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(1, 'Presentación de Kuadrillas', 'Desde el Balcón de la Biblioteca', 43.308877, -3.006916, 'Viernes 24 (Zuri Eguna)', '20:00')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(2, 'Bajada y Concurso de Pancartas', 'Desde la Cruz de Kueto', 43.308043, -3.001343, 'Sábado 25', '19:30')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(3, 'Búsqueda del Tesoro', 'Desde la Plaza San Pedro', 43.308197, -3.006124, 'Domingo 26', '17:30')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(4, 'Competición de Balandros', 'Pantalán de la Benedicta', 43.314503, -3.007782, 'Lunes 27', '19:00')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(5, 'Bingo Solidario', 'Recinto de Txosnas', 43.307128, -3.005153, 'Miércoles 29', '19:00')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(6, 'Aquapark', 'Piscinas de la Benedicta', 43.314353, -3.008904, 'Jueves 30', '19:00')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(7, 'Concurso de Playback', 'Parque de Markonzaga', 43.305010, -3.008321, 'Viernes 1', '19:30')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(8, 'Concurso Gastronómico', 'Colegio Público de Kueto', 43.307718, -2.999864, 'Sábado 2', '11:00')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(9, 'Entrega de Premios y Fin de Fiesta', 'Parque de Markonzaga', 43.305010, -3.008321, 'Domingo 3', '19:30')");

        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(1, 'El Lonjil', 'Cha-Cha')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(2, 'Nahasketa', 'Tres Globos')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(3, 'Sainscuicsuisers', 'Bost')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(4, '+ Betún', 'La Roca')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(5, 'Jo-Ta-Ke', 'Zipi-Zape')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(6, 'Peña en Almíbar', 'Brenes')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(7, 'BMW', 'Ammi')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(8, 'Kalim8', 'Castañares')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(9, 'La Huevera', 'Bock')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(10, 'Abedules', 'Centro Gallego')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(11, 'Los Txikitos', 'La Parada')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(12, 'Ulertezinak', 'La Terraza')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(13, 'Tropezón', 'El Chiringuito')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(14, 'Potones', 'Pale Ale')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(15, 'Peta Zetas', 'Vda. de Baldo')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(16, 'Zapaburus', 'Metro Café')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(17, 'Los Aketes', 'Albadelri')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(18, 'Drink Team', 'La Taberna del Abuelo')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(19, 'Katxitomia', 'Kokolo')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(20, 'Superbebientes', 'El Córner')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(21, 'Kotxe Eskoba', 'Harley')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(22, 'Txoootx', 'Terraco')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(23, 'Juerga de Tronos', 'El Taller de Santiago')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(24, 'Katxiondos', 'El Rincón de María')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(25, 'Tímid@s', 'Tito''s')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(26, 'La Caña Verde', 'Mayte')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(27, 'Jarri Potes', 'Pale Ale')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(28, 'Noche & Galbana', 'Bost')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(29, 'Punto de Encuentro', 'Punto de Encuentro')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(30, 'Vigilantes de la Barra', 'Centro Gallego')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(31, 'The Parranda', 'Dúplex')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(32, 'Amestezinak', 'Jai Alai')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(33, 'Markonzaga', 'Taita')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(34, 'Alcohol Viajes', 'Cha-Cha')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(35, 'Iturri', 'Tito''s')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(36, 'La Mosca Gao', 'Terraco')");

        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(1, 'Bost', 'Vicente Blasco Ibáñez, 22', 43.307733, -3.002559)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(2, 'Bock', 'San Diego, 6', 43.309740, -3.006612)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(3, 'Terraco', 'Manuel Andrés, 10', 43.307743, -3.007165)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(4, 'Tito''s', 'San Diego, s/n ', 43.309684, -3.006560)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(5, 'Cha-Cha', 'Mendebal, 2', 43.309083, -3.006232)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(6, 'Jai Alai', 'Conde de Balmaseda, 3', 43.308930, -3.006161)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(7, 'Taita', 'San Pedro, 5', 43.308343, -3.005950)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(8, 'Dúplex', 'Iparraguirre, 1', 43.307906, -3.007859)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(9, 'Centro Gallego', 'Villar y Villate, 5', 43.308485, -3.007119)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(10, 'Punto de Encuentro', 'Iparraguirre, 5', 43.307620, -3.007468)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(11, 'Pale Ale', 'San Pedro, 7', 43.308045, -3.006327)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(12, 'Mayte', 'Manuel Andrés, 6', 43.307964, -3.007447)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(13, 'El Rincón de María', 'Pablo Sorazabal, 3', 43.309607, -3.004311)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(14, 'El Taller de Santiago', 'Vicente Blasco Ibáñez, 26', 43.307791, -3.002374)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(15, 'Harley', 'Vicente Blasco Ibáñez, 20', 43.307809, -3.002870)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(16, 'Kokolo', 'Ramon y Cajal, 1', 43.309424, -3.009055)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(17, 'El Córner', 'Manuel Andrés, 14', 43.307522, -3.006765)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(18, 'La Taberna del Abuelo', 'Manuel Andrés, 14', 43.307458, -3.006674)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(19, 'Albadelri', 'Gran Vía, 3', 43.309749, -3.006870)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(20, 'Metro Café', 'Gran Vía, 12', 43.308889, -3.004874)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(21, 'Vda. de Baldo', 'Las Llanas, 13', 43.309193, -3.008055)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(22, 'El Chiringuito', 'Gran Vía, 3', 43.309749, -3.006754)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(23, 'La Terraza', 'Gran Vía, 12', 43.308775, -3.004939)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(24, 'La Parada', 'Gran Vía, 55', 43.307892, -2.998117)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(25, 'Castañares', 'Las Llanas, 13', 43.309231, -3.008154)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(26, 'Ammi', 'Conde de Balmaseda, 7', 43.308411, -3.006065)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(27, 'Brenes', 'Miguel de Cervantes, 29', 43.309375, -2.999554)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(28, 'Zipi-Zape', 'Vía Galindo, 13', 43.307359, -3.008176)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(29, 'La Roca', 'Las Llanas, 23', 43.309669, -3.009091)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(30, 'Tres Globos', 'Manuel Andrés, 7', 43.307898, -3.007135)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(31, 'Bodega Charro', 'Villar y Villate, 2', 43.308535, -3.007250)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(32, 'Ongi Etorri', 'Villar y Villate, 4', 43.308496, -3.007288)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(33, 'La Pela', 'Manuel Andrés, 4', 43.308065, -3.007594)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(34, 'Renu', 'Manuel Andrés, 7', 43.307931, -3.007205)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(35, 'Salmen', 'Juan Tomas de Gandarias, 7', 43.307275, -3.006297)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(36, 'Mesón Alberto', 'Villar y Villate, 11', 43.308205, -3.007467)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(37, 'Palas', 'Villar y Villate, 3', 43.308403, -3.007194)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(38, 'Burdin', 'Manuel Andres, 6', 43.308005, -3.007480)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(39, 'Boga-Boga', 'Manuel Andrés, 8', 43.307885, -3.007296)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(40, 'Perfil', 'Manuel Andres, 8', 43.307823, -3.007239)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(41, 'River', ' Manuel Andres, 1', 43.308416, -3.008052)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(42, 'Salón de Juego Kaiku', 'Iparraguirre, 3', 43.307763, -3.007633)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(43, 'Ekintza', 'Manuel Andrés, 12', 43.307680, -3.007027)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(44, 'Zruspa', 'Manuel Andrés, 16', 43.307312, -3.006556)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(45, 'La Ola', 'Iparraguirre, 7', 43.307486, -3.007254)");
        //self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(46, 'La Casa del Pueblo',)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(47, 'Jandro', 'Miguel Servet, 9', 43.308695, -2.999625)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(48, 'Tic Tac', 'Vicente Blasco Ibañez, 4', 43.307722, -3.004719)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(49, 'Las Cepas', 'Vicente Blasco Ibáñez, 14', 43.307706, -3.003881)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(50, 'La Casa Andaluza', 'Grupo La Humanitaria, 1', 43.308260, -3.002452)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(51, 'Estación Los Hermanos', 'Vicente Blasco Ibañez, 28', 43.307755, -3.002220)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(52, 'Kueto', 'Miguel de Cervantes, 13', 43.309143, -3.000909)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(53, 'Ángel', 'Miguel Servet, 2', 43.307911, -2.999329)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(54, 'Cómic', 'Vicente Blasco Ibáñez, 20', 43.307798, -3.002682)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(55, 'Pagoa', 'Marcos Grijalbo, 2', 43.307783, -2.998338)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(56, 'Gure Etxea', 'Miguel Servet, 14', 43.308765, -2.999391)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(57, 'Aldatza', 'Iberia, 12', 43.310896, -3.004835)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(58, 'Alameda', 'Las Llanas, 17', 43.309386, -3.008447)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(59, 'King Döner Kebab', 'Las Llanas, 27', 43.309862, -3.009545)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(60, 'La Herencia de Don José', 'Félix María de Samaniego, 4', 43.308699, -3.009290)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(61, 'Jam', 'Vía Galindo, 11', 43.307883, -3.008121)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(62, 'Anai Bi', 'Antonio Trueba, 15', 43.306399, -3.006463)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(63, 'El Parque', 'Las Llanas, 5', 43.308752, -3.007238)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(64, 'Itaka', 'Conde de Balmaseda, 4', 43.308856, -3.005815)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(65, 'Itzala', 'San Pedro, 2', 43.308035, -3.005261)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(66, 'Edurmendi', 'Gran Vía, 3', 43.309565, -3.006875)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(67, 'Cantera', 'Antonio Trueba, 1', 43.307402, -3.005549)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(68, 'Plaza', 'Kasko, 2', 43.308972, -3.006771)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(69, 'El Casco', 'Las Llanas, 2', 43.308625, -3.006672)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(70, 'Enbor', 'Conde de Balmaseda, 8', 43.308613, -3.006042)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(71, 'La Luna Dorada', 'Mendebal, 2', 43.309128, -3.006379)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(72, 'Hamburgo', 'Gran Vía, 7', 43.309463, -3.006614)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(73, 'Degustación Maribel', 'Gran Vía, 8', 43.309206, -3.006164)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(74, 'La Galería', 'Conde de Balmaseda, 2', 43.309129, -3.005879)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(75, 'Txokoa', 'Las Llanas, 7', 43.308886, -3.007425)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(76, 'O''Ryan', 'Los Baños, 5', 43.309246, -3.004674)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(77, 'Matrix', 'Los Baños, 13', 43.309463, -3.004003)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(78, 'La Thira', 'Pablo Sorozabal, 4', 43.309586, -3.004177)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(79, 'La Tizona', 'Los Baños, 6', 43.309242, -3.004206)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(80, 'Fum', 'Los Baños, 17', 43.309539, -3.003096)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(81, 'Weapons', 'San Diego, 6', 43.309638, -3.006246)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(82, 'Dark', 'San Diego, 1', 43.309490, -3.005983)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(83, 'Charro', 'Aizpuru, 1', 43.309863, -3.007265)");
    };

    self.query = function(query, bindings) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();

        self.db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });

        return deferred.promise;
    };

    self.fetchAll = function(result) {
        var output = [];

        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }

        return output;
    };

    self.fetch = function(result) {
        return result.rows.item(0);
    };

    return self;
})

.factory('Group', function(DB) {
    var self = this;

    self.all = function() {
        return DB.query('SELECT * FROM groups')
        .then(function(result){
            return DB.fetchAll(result);
        });
    };

    self.getById = function(id) {
        return DB.query('SELECT * FROM groups WHERE id = ?', [id])
        .then(function(result){
            return DB.fetch(result);
        });
    };

    return self;
})

.factory('Program', function(DB) {
    var self = this;

    self.all = function() {
        return DB.query('SELECT id, name, day, hour FROM program')
        .then(function(result){
            return DB.fetchAll(result);
        });
    };

    self.getById = function(id) {
        return DB.query('SELECT * FROM program WHERE id = ?', [id])
        .then(function(result){
            return DB.fetch(result);
        });
    };

    return self;
})

.factory('Bar', function(DB) {
    var self = this;

    self.all = function() {
        return DB.query('SELECT id, name, place FROM bars ORDER BY name ASC')
        .then(function(result){
            return DB.fetchAll(result);
        });
    };

    self.getById = function(id) {
        return DB.query('SELECT * FROM bars WHERE id = ?', [id])
        .then(function(result){
            return DB.fetch(result);
        });
    };

    self.getByName = function(name) {
        return DB.query('SELECT * FROM bars WHERE name LIKE ? ORDER BY name ASC', [name])
        .then(function(result){
            return DB.fetchAll(result);
        });
    };

    return self;
})

.factory('Marker', function() {
    var self = this;

    self.marker = new google.maps.Marker({});

    return self;
});