# Nodejs

### Instalación
- [Nodejs](https://nodejs.org/es/download/)
- [Postman](https://www.postman.com/downloads/)
- [API](https://jsonplaceholder.typicode.com/posts)

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
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world from express');
});

app.listen(2020);
```

y ejecutamos los siguientes comandos para instalar [express](https://expressjs.com/es/4x/api.html) y [nodemon](https://www.npmjs.com/package/nodemon):
```
npm install -g express --save
npm install -g nodemon --save
```

Cambiamos nuestro Start en package.json:
```
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
...
```



#### Glosario:
- API: Application Programming Interface
- REST: Representational State Transfer 
- JSON: Java Script Object Notation
