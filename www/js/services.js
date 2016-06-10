angular.module('app.services', ['app.config'])

.factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {
        self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);

        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];

            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });

            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            self.query(query);
            console.log('Table ' + table.name + ' created');
        });

        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(1, 'Presentación de Kuadrillas', '', '')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(2, 'Bajada y Concurso de Pancartas', '', '')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(3, 'Búsqueda del Tesoro', '', '')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(4, 'Competición de Balandros', '', '')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(5, 'Bingo Solidario', '', '')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(6, 'Aquapark', '', '')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(7, 'Concurso de Playback', '', '')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(8, 'Concurso Gastronómico', '', '')");
        self.query("INSERT OR IGNORE INTO program(id, name, place, date) VALUES(9, 'Entrega de Premios y Fin de Fiesta', '', '')");

        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(1, 'El Lonjil', 'Cha-Cha')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(2, 'Nahasketa', 'Tres Globos')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(3, 'Sainscuicsuisers', 'Bost')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(4, '+ Betún', 'La Roca')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(5, 'Jo-Ta-Ke', 'Zipi Zape')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(6, 'Peña en Almíbar', 'Brenes')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(7, 'BMW', 'Ammi')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(8, 'Kalim8', 'Castañares')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(9, 'La Huevera', 'Bock')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(10, 'Abedules', 'Centro Gallego')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(11, 'Los Txikitos', 'La Parada')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(12, 'Ulertezinak', 'La Terraza')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(13, 'Tropezón', 'El Chiringuito')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(14, 'Potones', 'Pale Ale')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(15, 'Peta Zetas', 'Vda. de Valdo')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(16, 'Zapaburus', 'Metro Café')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(17, 'Los Aketes', 'Albadelri')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(18, 'Drink Team', 'La Taberna del Abuelo')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(19, 'Katxitomia', 'Kokolo')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(20, 'Superbebientes', 'El Córner')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(21, 'Kotxe Eskoba', 'Harley')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(22, 'Txoootx', 'Terraco')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(23, 'Juerga de Tronos', 'El Taller de Santiago')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(24, 'Katxiondos', 'El Rincón de María')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(25, 'Tímid@s', 'Tito's')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(26, 'La Caña Verde', 'Mayte')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(27, 'Jarri Potes', 'Pale Ale')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(28, 'Noche & Galbana', 'Bost')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(29, 'Punto de Encuentro', 'Punto de Encuentro')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(30, 'Vigilantes de la Barra', 'Centro Gallego')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(31, 'The Parranda', 'Dúplex')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(32, 'Amestezinak', 'Jai Alai')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(33, 'Markonzaga', 'Taita')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(34, 'Alcohol Viajes', 'Cha-Cha')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(35, 'Iturri', 'Tito's')");
        self.query("INSERT OR IGNORE INTO groups(id, name, bar) VALUES(36, 'La Mosca Gao', 'Terraco')");
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
        return DB.query('SELECT id, name, date FROM program')
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
});