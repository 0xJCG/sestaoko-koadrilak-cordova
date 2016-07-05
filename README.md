# Sestaoko Koadrilak

Aplicación para ayudar a las cuadrillas de Sestao. Cuenta con la programación de las pruebas a realizar, la lista de todas las cuadrillas, los bares y comercios que participan, además de las normas a seguir en todo momento.

## Instalación y preparación del paquete

Es necesaria la instalación de Node.js, junto con el gestor de paquetes npm. Una vez instalados, nos dirigimos al directorio del proyecto y usamos los siguientes comandos:
```
npm install
bower install
gulp
```
Se nos descargarán todas las dependencias y se minimizarán todos los fichero JavaScritp y CSS.

## Creación de la aplicación para Android

Para la creación de la aplicación, será necesario contar con Apache Cordova, además del SDK de Android. Una vez se cuente con el SDK de Android instalado y configurado, se instalará Cordova y se añadirá una nueva platadorma al proyecto:
```
npm install -g cordova
cordova platform add android
```
Una vez creada la plataforma, se podrá arrancar el proyecto en el emulador de Android o en nuestro terminal. También se puede crear la APK directamente.

Cordova soporta más plataformas, pero la idea de este proyecto era crear una aplicación nueva para Android. Existe más información sobre Apache Cordova en su página web: https://cordova.apache.org/.

## Aplicación

La aplicación se encuentra actualmente disponible en Google Play:
https://play.google.com/store/apps/details?id=com.jcg.sestaokokoadrilak&hl=es.
