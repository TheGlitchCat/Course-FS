# Nodejs

### Instalación
[Nodejs](https://nodejs.org/es/download/)
[Postman](https://www.postman.com/downloads/)

Comprobación:
```
node --version
```

### Primer Programa
- Crear Carpeta "Primer Programa"
- Crear un .js 
- Agregar console.log("Hello Nodejs");
- Ejecutar
```
node '.\Primer Programa\first.js'
```

### Modulos 
Los modulos son son paquetes o librerias de código que se pueden importar a nuestros proyectos.

### Iniciar un proyecto
Para iniciar un proyecto podemos ejecutar el siguiente comando:
```
npm init
```
y esto nos creara el siguiente documento:
```
{
  "name": "<project name>",
  "version": "<version>",
  "description": "",
  "main": "<index.js>",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node <index.js>"
  },
  "author": "<author>",
  "license": "ISC"
}

```
Creamos **index.js**

y ejecutamos el siguiente comando para instalar [express](https://expressjs.com/es/4x/api.html):
```
npm install express --save
```


#### Glosario:
API: Application Programming Interface
REST: Representational State Transfer 
JSON: Java Script Object Notation
