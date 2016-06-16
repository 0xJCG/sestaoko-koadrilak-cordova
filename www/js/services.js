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