angular.module('app.services', ['app.config'])

.factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {
        self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);
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

        self.query("INSERT OR IGNORE INTO program(id, name, place, lat, lng, day, hour) VALUES(1, 'Presentación de Kuadrillas', 'Desde el Balcón de la Biblioteca', 43.308877, -3.006916, 'Viernes 24', '20:00')");
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
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(2, 'Bock', 'San Diego, 6', 43.3097704, -3.0087375)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(3, 'Terraco', 'Manuel Andrés, 10', 43.3077505, -3.0093534)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(4, 'Tito''s', 'San Diego, s/n ', 43.309663, -3.006642)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(5, 'Cha-Cha', 'Mendebal, 2', 43.309077, -3.0067392)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(6, 'Jai Alai', 'Conde de Balmaseda, 3', 43.3088315, -3.0064881)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(7, 'Taita', 'San Pedro, 5', 43.308385, -3.0064862)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(8, 'Dúplex', 'Iparraguirre, 1', 43.3079008, -3.0081505)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(9, 'Centro Gallego', 'Villar y Villate, 5', 43.3085032, -3.0076165)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(10, 'Punto de Encuentro', 'Iparraguirre, 5', 43.3073315, -3.0077931)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(11, 'Pale Ale', 'San Pedro, 7', 43.307976, -3.006824)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(12, 'Mayte', 'Manuel Andrés, 6', 43.3079755, -3.0074893)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(13, 'El Rincón de María', 'Pablo Sorazabal, 3', 43.3095026, -3.006439)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(14, 'El Taller de Santiago', 'Vicente Blasco Ibáñez, 26', 43.3077595, -3.0029071)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(15, 'Harley', 'Vicente Blasco Ibáñez, 20', 43.3077783, -3.0033022)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(16, 'Kokolo', 'Ramon y Cajal, 1', 43.3094309,-3.0112387)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(17, 'El Córner', 'Manuel Andrés, 14', 43.3074096, -3.0072885)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(18, 'La Taberna del Abuelo', 'Manuel Andrés, 14', 43.3074149, -3.0072388)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(19, 'Albadelri', 'Gran Vía, 3', 43.309752, -3.0074162)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(20, 'Metro Café', 'Gran Vía, 12', 43.3090485, -3.0060915)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(21, 'Vda. de Baldo', 'Las Llanas, 13', 43.309197, -3.0086012)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(22, 'El Chiringuito', 'Gran Vía, 3', 43.309754, -3.0072792)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(23, 'La Terraza', 'Gran Vía, 12', 43.308734, -3.0054462)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(24, 'La Parada', 'Gran Vía, 55', 43.3078856, -2.9983585)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(25, 'Castañares', 'Las Llanas, 13', 43.309223, -3.0086942)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(26, 'Ammi', 'Conde de Balmaseda, 7', 43.30843, -3.0065862)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(27, 'Brenes', 'Miguel de Cervantes, 29', 43.3090751, -2.9998899)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(28, 'Zipi-Zape', 'Vía Galindo, 13', 43.3073407, -3.0083567)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(29, 'La Roca', 'Las Llanas, 23', 43.3097161, -3.0094308)");
        self.query("INSERT OR IGNORE INTO bars(id, name, place, lat, lng) VALUES(30, 'Tres Globos', 'Manuel Andrés, 7', 43.3075472, -3.0063455)");
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

    //self.

    return self;
})

.directive('loading', ['$http', function($http) {
    return {
        restrict: 'A',
            link: function (scope, element, attrs) {
                scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };
            scope.$watch(scope.isLoading, function (value) {
                if (value) {
                    element.removeClass('ng-hide');
                } else {
                    element.addClass('ng-hide');
                }
            });
        }
    };
}]);