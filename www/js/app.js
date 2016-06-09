angular.module('app', ['ionic', 'ngCordova', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        db = $cordovaSQLite.openDB("koadrilak.db");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY, name TEXT, bar TEXT, UNIQUE(id, name"));
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(1, 'El Lonjil', 'Cha-Cha')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(2, 'Nahasketa', 'Tres Globos')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(3, 'Sainscuicsuisers', 'Bost')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(4, '+ Betún', 'La Roca')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(5, 'Jo-Ta-Ke', 'Zipi Zape')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(6, 'Peña en Almíbar', 'Brenes')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(7, 'BMW', 'Ammi')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(8, 'Kalim8', 'Castañares')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(9, 'La Huevera', 'Bock')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(10, 'Abedules', 'Centro Gallego')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(11, 'Los Txikitos', 'La Parada')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(12, 'Ulertezinak', 'La Terraza')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(13, 'Tropezón', 'El Chiringuito')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(14, 'Potones', 'Pale Ale')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(15, 'Peta Zetas', 'Vda. de Valdo')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(16, 'Zapaburus', 'Metro Café')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(17, 'Los Aketes', 'Albadelri')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(18, 'Drink Team', 'La Taberna del Abuelo')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(19, 'Katxitomia', 'Kokolo')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(20, 'Superbebientes', 'El Córner')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(21, 'Kotxe Eskoba', 'Harley')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(22, 'Txoootx', 'Terraco')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(23, 'Juerga de Tronos', 'El Taller de Santiago')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(24, 'Katxiondos', 'El Rincón de María')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(25, 'Tímid@s', 'Tito's')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(26, 'La Caña Verde', 'Mayte')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(27, 'Jarri Potes', 'Pale Ale')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(28, 'Noche & Galbana', 'Bost')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(29, 'Punto de Encuentro', 'Punto de Encuentro')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(30, 'Vigilantes de la Barra', 'Centro Gallego')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(31, 'The Parranda', 'Dúplex')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(32, 'Amestezinak', 'Jai Alai')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(33, 'Markonzaga', 'Taita')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(34, 'Alcohol Viajes', 'Cha-Cha')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(35, 'Iturri', 'Tito's')");
        $cordovaSQLite.execute(db, "INSERT OR IGNORE INTO groups(id, name) VALUES(36, 'La Mosca Gao', 'Terraco')");
    });
})