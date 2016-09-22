


Acessando uma nova instância do terminal dentro do container que está rodando pelo Docker:

```
docker exec -it ff /bin/bash
```
Executando comando dentro do Mongo Commando Line:

```bash
$ db.parties.insert({ name : "A new party", description : "From the mongo console!"});
```

```bash
$ db.parties.insert({ name : "Festa do Vinícius!", description : "Uma festa bem legal inserida pelo console."}, { name : "Esse é um novo registro inserido na mesma linha porém de um objeto diferente!", description : "Tudo isso inserido via mongo pelo terminal!"})
```

```bash
$ db.parties.find()
```

Resultado esperado:

```bash
	{ "_id" : "Dz6XxtJE6CkCgiTuz", "name" : "Dubstep-Free Zone", "description" : "Fast just got faster with Nexus S." }
	{ "_id" : "inmrdrt2S3E7FmkRB", "name" : "All dubstep all the time", "description" : "Get it on!" }
	{ "_id" : "AFB5SSxiJTu6KaTQj", "name" : "Savage lounging", "description" : "Leisure suit required. And only fiercest manners." }
	{ "_id" : ObjectId("57e42102fd8b6355ab734de7"), "name" : "A new party", "description" : "From the mongo console!" }
	{ "_id" : ObjectId("57e4219dfd8b6355ab734de8"), "name" : "Festa do Vinícius!", "description" : "Uma festa bem legal inserida pelo console." }
```
```bash
$ db.parties.remove({"_id" : "AFB5SSxiJTu6KaTQj"});
```

```bash
$ db.parties.update({ "_id" : "inmrdrt2S3E7FmkRB" }, { $set : { "name" : "Savage loung1123123123 vaiviaiviaviaiviaivaiviaivavi vaiiiiiiing2" }});
```

```bash
$ db.parties.find()
```

Resultado esperado:
```bash
	{ "_id" : "Dz6XxtJE6CkCgiTuz", "name" : "Dubstep-Free Zone", "description" : "Fast just got faster with Nexus S." }
	{ "_id" : "inmrdrt2S3E7FmkRB", "name" : "Savage loung1123123123 vaiviaiviaviaiviaivaiviaivavi vaiiiiiiing2", "description" : "Get it on!" }
	{ "_id" : ObjectId("57e42102fd8b6355ab734de7"), "name" : "A new party", "description" : "From the mongo console!" }
	{ "_id" : ObjectId("57e4219dfd8b6355ab734de8"), "name" : "Festa do Vinícius!", "description" : "Uma festa bem legal inserida pelo console." }
```

Próximo passo : "Step 3 - 3-Way data binding | Upgrading to controllerAs syntax"
