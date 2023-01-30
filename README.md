
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
