
# PROYECTO FRONT #

## PROYECTO ##
- Este proyecto se basa en realizar un Front que hace llamdas a una base de datos que contenga usuarios y series hecha previamente para otro proyecto.Se ha utilizado REACT-REDUX-JAVASCRIPT-CSS3. Me he decantado por desarrollar un front limpio,sencillo e intuitivo.
- En este Front tanto los usuarios No registrados como los que ya tienen una cuenta en la app pueden buscar las series por Titulo, tambien una vez registrados pueden alquilar cualquier serie. Las series las pueden encontrar por titulo.

## TECNOLOGIAS ##
- ![image](https://user-images.githubusercontent.com/116036050/215578829-df32cd0c-fe39-4a66-bfa2-edd84943c4a2.png) REACT. ![image](https://user-images.githubusercontent.com/116036050/215579153-0d7e1129-8f79-4178-8e14-f29dbd3f7042.png) REDUX. ![image](https://user-images.githubusercontent.com/116036050/215579444-bde4c2cc-9483-4bec-87f8-e78133c946ae.png) JAVASCRIPT. ![image](https://user-images.githubusercontent.com/116036050/215579630-269be669-57c1-4a37-8ddf-5679d4f1990b.png) CSS3.

## PROCESO ##
- Desarrollo principal de la idea.
- Creación del Front con sus diferentes vistas (inicio de sesión, registro, perfil, home).
- Se lleva a cabo la organización de las series.
- Se lleva a cabo la organización de los usuarios.
- se lleva a cabo la opcion de alquiler de series.
- últimas pinceladas para dejar finiquitado el trabajo, aun queda mucho por mejorar.

## VISTA HOME ##
- En esta vista tenemos las series, tambien contamos con la opcion de iniciar sesión y de registro de nuevos usuarios.![image](https://user-images.githubusercontent.com/116036050/215581337-9e392063-428a-4def-b785-149b541d4aff.png)
## VISTA DE REGISTRO ##
- En esta vista tenemos la opcion de registrarnos introduciendo unos datos claves para identificar al usuario, tambien tenemos la opcion de volver a home. ![image](https://user-images.githubusercontent.com/116036050/215582241-1301f15f-be43-4063-baee-ef3932b89e34.png)
## VISTA DE LOGIN ##
- En esta vista accedemos a todas las series asi teniendo la posibilidad de alquilarlas. ![image](https://user-images.githubusercontent.com/116036050/215582620-31452ccf-ad9f-40e0-8ea4-035dc2545989.png)
## VISTA DE PERFIL DE USUARIO ##
- En esta vista el usuario puede ver sus datos y las series alquiladas, así sabrá cuando acabaran los plazos de visibilidad de las mismas. ![image](https://user-images.githubusercontent.com/116036050/215585549-2bc0b936-d8c5-4a89-acd1-e49afa5151f6.png)
## VISTA DEL ADMINISTRADOR ##
- Esta vista la podra ver UNICAMENTE el administrador, aqui apareceran todas las series alquiladas con sus respectivos datos de alquiler: Cliente, Fecha Inicio de alquiler, Fecha final de alquiler y precio de la serie. ![image](https://user-images.githubusercontent.com/116036050/215586049-95caf86d-2c25-46db-a752-3592ce6ec809.png)


#### Endpoints de llamadas a la API ####

###### Con este Endpoint el usuario puede iniciar sesión ######
- router.post("/login", UsersController.loginUser); Con este Endpoint el usuario se podra logear, tambien puede ver el listado de todas las series mas NO PODRA AlQUILARLAS.
http://localhost:5500/users/login

###### Con este Endpoint el usuario podrá registrarse ######
- router.post("/register", UsersController.newUser);  Con este Endpoint el usuario se podra registrar en la app, tambien puede ver el listado de todas las series y tendrá la opcion de AlQUILARLAS.
http://localhost:5500/users/register

###### Con este Endpoint el usuario podrá ver las series ######
- router.get("/", SeriesController.getAllSeries);;  Con este Endpoint el usuario podra ver las series.
http://localhost:5500/series

###### Con este Endpoint el usuario podrá buscar las series por titulo ######
- router.get("/title/:title", SeriesController.getSeriesByTitle); Con este Endpoint el usuario podra buscar las series.
http://localhost:5500/series/title/:title

###### Con este Endpoint el usuario podrá alquilar una serie ######
- router.post("/newAlquiler", auth, AlquileresController.newAlquiler); Con este Endpoint el usuario podra alquilar las series.
http://localhost:5500/alquileres/newAlquiler

###### Con este Endpoint el admin podrá ver los alquileres ######
- router.get("/Alquileres", auth, isAdmin, AlquileresController.getAllAlquileres); Con este Endpoint el admin podra ver un historial de las series alquiladas con sus respectivos datos de alquiler (cliente. fecha inicio, fecha fin).
http://localhost:5500/alquileres/Alquileres


## OBJETIVO ##
- Se pretende mejorar la parte Front a medida que vamos avanzando en el curso, con un objetivo final de ser utilizado por usuarios reales.

## AUTOR ##
- Diego Sánchez Londoño 
