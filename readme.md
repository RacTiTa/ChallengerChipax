#general info
La aplicacion devuelve un array con 2 objectos.
El primero muestra la cantidad de veces que se repite un determinado caracter en los nombres de los characters, nombre de los episodios, y nombre de las locations.

#tecnologias
· Expressjs
· Jest

#performance
En el repository se utilizo el patron de diseño Singleton para que los datos sean evaluados la primera vez que se le pegue al endpoint, de todas formas basta con comentar la linea 7 del codigo para desactivarlo para probar el rendimiento de la segunda consigna.
para levantar el server no hace falta mas que ejecutar el comando npm start
