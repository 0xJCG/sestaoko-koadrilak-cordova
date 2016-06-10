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
                {name: 'date', type: 'date'}
            ]
        },
        {
            name: 'groups',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'bar', type: 'text'}
            ]
        }
    ]
});