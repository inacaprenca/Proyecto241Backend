# Iniciando el proyecto
Una vez descargado, se debe preparar el entorno de trabajo con python, iniciando un terminal. 
CLICK DERECHO, y abrir un nuevo terminal
![imagen](https://user-images.githubusercontent.com/109394677/204371310-33d6f355-207d-4607-8fa1-7608f06de421.png)

En el terminal que se ha abierto, se debe crear un entorno virtual, por medio de conda

```bash
conda create -n py311 python=3.11 --channel conda-forge
```

![imagen](https://user-images.githubusercontent.com/109394677/204371606-9aad81c6-cc7d-45a4-8be4-1f61e5937adb.png)


Una vez que ha terminado de instalar Python 311 por medio de Conda, se debe activar el entorno de trabajo, por medio de 

```bash
conda init bash
```
Una vez iniciado conda, se debe cerrar el terminal, y luego abrir nuevamente. 
Una vez abierto el terminal, se debe activar el entorno, por medio de: 

```bash
conda activate py311
```
![imagen](https://user-images.githubusercontent.com/109394677/204372160-82bfeca4-5dd0-4788-8cd6-d68ecdea4bbd.png)

Una vez activado el entorno, debemos instalar los siguientes packages: 

```bash
conda install fastapi motor pydantic uvicorn python-dotenv python-jose passlib --channel conda-forge
```
# Cargando Datos en Mongo DB. 
Una vez que se ha realizado la conexión con mongodb desde las extensiones de VSCode, debes abrir el archivo que se encuentra en frontend/database/model.mongodb
![imagen](https://user-images.githubusercontent.com/109394677/204374598-c01ef81a-6f8d-4703-943f-acfac0e1a853.png)


# Cómo iniciar el proyecto
Para que el código funcione, se debe crear un archivo, llamado .env

![imagen](https://user-images.githubusercontent.com/109394677/204375633-d9a37320-fe93-4033-8d68-cdca99390c88.png)

![imagen](https://user-images.githubusercontent.com/109394677/204375683-6e4968e9-408d-4539-a9c6-362ab87c8926.png)

Acá se debe escribir el string de conexión a mongodb, reemplazando ELUSUARIO, LACLAVE, y LABASEDEDATOS, por los correspondientes al servidor. 
```js
export MONGODB_URL="mongodb+srv://ELUSUARIO:LACLAVE@cluster0.ELSERVIDOR.mongodb.net/LABASEDEDATOS?retryWrites=true&w=majority"
```

PAra iniciar el proyecto, desde el directorio mongoapi, se debe ejecutar la instrucción
```bash
uvicorn main:app --reload
```

