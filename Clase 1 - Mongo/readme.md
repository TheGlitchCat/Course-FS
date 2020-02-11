
# MONGODB

Sistema de DB NoSQL orientado a documentos de código abierto


### Instalación

[Tutorial](https://docs.mongodb.com/manual/administration/install-community/)

[MongoDB](https://www.mongodb.com/download-center/community)

[RoboMongo](https://robomongo.org/download)

[MongoDB compass](https://www.mongodb.com/download-center/compass)

<!-- DOCUMENTS -->

### JSON 
Java Script Object Notation

```
{
    "id": "1",
    "name": "Jhon",
    "age": 20
}

{
    "id": "2",
    "name": "Valeria",
    "surname": "Martinez",
    "age": 23
}

{
    "id": "3",
    "name": "Camila",
    "surname": "Rodriguez",
    "age": 24,
    "active": true
}

{
    "id": "4",
    "name": "Liam",
    "surname": "Sanchez",
    "age": 27,
    "active": null
}

{
    "id": "5",
    "name": "Li",
    "surname": "huan",
    "age": 40,
    "subs": ["Liam", "Camila"]
}

```

### BSON

Formato de intercambio de datos usado para almacenar y transferir datos en MongoDB

Respresentación binaria de JSON

[BSON Types](https://docs.mongodb.com/manual/reference/bson-types/)

### Collections

MongoDB guarda los documentos BSON en colecciones, y las colecciones se almacenan en la base de datos.


### Basic Commands

Muestra los comandos basicos y ayuda
```
help
```

Muestra las bases de datos
```
show dbs
```

Muestra las colecciones en la base de datos actual
```
show collections
```

Muestra los usuarios de la base de datos actual
```
show users
```

Selecciona la base de datos a usar (O la crea)
```
use <db_name> 
```

Muestra las bases de datos
```
show dbs
```

Crea un colección
```
db.createCollection("<name>")
```

Obtiene la colección
```
db.getCollection("<collection_name>")
```

Borra una colección
```
db.<collection_name>.drop()
```

lista los objetos de la coleccion
```
db.version()
```

lista los objetos de la coleccion
```
db.<collection_name>.find()
```

Cuenta los objetos de la coleccion
```
db.<collection_name>.find().count()
```

Organiza los objetos de la coleccion por llave (-1: Desc, 1: Asc)
```
db.<collection_name>.find().sort({"<key>": -1})
```

Lista los objetos de la colección donde age = 29
```
db.<collection_name>.find( { age:29 } )
```

Busqueda en objetos hijos
Busca en el objeto usando un objeto que tenga atributos first = Hollie y last = Boone
```
db.<collection_name>.find({"name":{"first":"Hollie", "last":"Boone"}})
```

Busqueda en objetos Array
Busca en el objeto usando un array que tenga atributos ["Action","Drama","Sci-fi"]
```
db.<collection_name>.find({"movies":["Action","Drama","Sci-fi"]})
```


Inserta un documento
```
db.<collection_name>.insert({"name":"foobarfoo"})
db.<collection_name>.insertOne({"name":"foobarfoo2"})
```

Inserta multiples documentos
```  
db.<collection_name>.insertMany(
    [  
      {  
        course: "JavaScript",  
        category: "Programming Language"  
      },  
      {  
        course: "NodeJS",  
        category: "Programming Language"  
      },  
      {  
        course: "Angular 8",  
        category: "Programming Language"  
      }  
    ]
);

db.<collection_name>.insert([{},{},{},{}])
```

Actualiza un dato de la colección
```
db.<collection_name>.update(SELECTIOIN_CRITERIA, UPDATED_DATA)  
db.<collection_name>.update({'course':'JavaScript'},{$set:{'course':'JS'}})  
```

Borra todos los datos de la colección
```
db.<collection_name>.remove({})
```

Borra todos los datos que cumplan la condición
```
db.<collection_name>.remove( { catergory : "programming language" } )  
```

Borra la base de datos en uso
```
db.dropDatabase()
```

Sale de la terminal de mongo (ctrl-c)
```
exit / quit()
```

Importar un archivo .json
```
mongoimport --jsonArray --db <db_name> --collection <collection_name> --file <path>
```

Exportar un archivo .json
```
mongoexport --jsonArray --collection <collection_name> --db <db_name> --out <path/filename.json>
```

### Operators

```
$eq   = Equal 
$ne   = no Equal
$gt   = Grater than
$gte  = Grater Than or Equal
$lt   = Less Than
$lte  = Less Than or Equal
$in   = In
$nin  = No In
$and  = && 
$or   = || 
```

#### Examples 

Devuelve los objectos de las collecion que tengan age igual a 27
```
db.<collection_name>.find({"age":{"$eq":27}})
```

Devuelve los objectos de las collecion que tengan age diferente a 27
```
db.<collection_name>.find({"age":{"$ne":27}})
```

Devuelve los objectos de las collecion que tengan age mayor a 27
```
db.<collection_name>.find({"age":{"$gt":27}})
```

Devuelve los objectos de las collecion que tengan age mayor o igual a 27
```
db.<collection_name>.find({"age":{"$gte":27}})
```

Devuelve los objectos de las collecion que tengan age menor a 27
```
db.<collection_name>.find({"age":{"$lt":27}})
```

Devuelve los objectos de las collecion que tengan age menor o igual a 27
```
db.<collection_name>.find({"age":{"$lte":27}})
```

Consulta Mixta
Devuelve los objectos de las collecion que tengan age mayor a 30 y menor a 50
```
db.<collection_name>.find({"age":{"$gt":30, "$lt":50}})
```

Consulta por String
Devuelve los objectos de las collecion que tengan name.last mayor a U 
```
db.<collection_name>.find({"name.last":{"$gt":"U"}})
```

Consulta con $in y $nin
Devuelve los objetos de la collecion que tengan dentro de name.first Lea y Darla
```
db.<collection_name>.find({"name.last":{"$in":["Lea", "Darla"]}})
```

Devuelve los objetos de la collecion que no tengan dentro de name.first Lea y Darla
```
db.<collection_name>.find({"name.last":{"$nin":["Lea", "Darla"]}})
```

Consulta con $and y $or

Devuelve los valores mayores o iguales a 18 y menores o iguales 25 
```
db.<collection_name>.find({"$and": [{"age":{"$lte":25}}, {"age":{"$gte":18}}]})
```

Devuelve los valores menores o iguales a 18 o color de ojos Azul 
```
db.<collection_name>.find({"$or": [{"eyeColor":{"$eq":"blue"}}, {"age":{"$lte":18}}]})
```

