angular.module('app.config', [])

.constant('DB_CONFIG', {
    name: 'DB',
    tables: [
        {
            name: 'program',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'place', type: 'text'},
                {name: 'lat', type: 'real'},
                {name: 'lng', type: 'real'},
                {name: 'day', type: 'text'},
                {name: 'hour', type: 'text'}
            ]
        },
        {
            name: 'groups',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'bar', type: 'text'}
            ]
        },
        {
            name: 'bars',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'place', type: 'text'},
                {name: 'lat', type: 'real'},
                {name: 'lng', type: 'real'}
            ]
        }
    ]
});