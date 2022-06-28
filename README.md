# Challenge-Activity-MeLi

Ejercicio práctico para evaluar conocimientos en `React` y `NodeJs`.

> Los requerimientos del ejercicio se encuentran en el siguiente [LINK][1].

A continuación podras interactuar con la aplicación construida: [Ver DEMO][2].

## Documentación:

- Ver documentación del [Front End][3].
- Ver documentación de [Back End][4].

### Instalación de ambiente local:

Para ejecutar la aplicación en el ambiente local seguir los siguientes pasos:

1. git clone https://github.com/macosta08/Challenge-Activity.git

2. cd `Challenge-Activity/`

3. Ejecutar el comando `npm install` en el directorio `api/`

4. Ejecutar el comando `yarn install` en el directorio `client/`

5. Para levantar la app de forma local hacer lo siguiente:

- Ubicarse en el directorio `Challenge-Activity/client/`
- Ejecutar el comando `yarn start`
- Deberá abrirse la aplicación en Localhost

![image](https://user-images.githubusercontent.com/70062856/113530779-7d97ea00-958c-11eb-9e03-9e50e59395ae.png)

**Nota:** Tener en cuenta, que por defecto las peticiones que realiza la aplicación web lo hace al API desplegada en Heroku. Si desea probar el cliente de forma local y realizar las peticiones al API en heroku, hacer lo siguiente:

- Crear el archivo `.env` en el directorio `client/`.
- Crear la variable `REACT_APP_URL_ENDPOINT=https://meli-macosta08.herokuapp.com`

5. Para levantar el api de forma local hacer lo siguiente:

- Ubicarse en el directorio `Challenge-Activity/Back/`
- Ejecutar el comando `npm run dev`

![image](https://user-images.githubusercontent.com/70062856/113530621-11b58180-958c-11eb-895f-b26c41cfad1c.png)

- Realizar una petición GET de prueba, desde un cliente API de su preferencia, al siguiente endpoint: `http://localhost:8080/api/items?q=alimento para perros`
- Debe obtener un response exitoso

![image](https://user-images.githubusercontent.com/70062856/113530668-2a259c00-958c-11eb-9418-2fa0d3ec04b4.png)

[1]: https://bit.ly/2IGzCtS
[2]: https://challenge-activity.vercel.app/
[3]: https://github.com/macosta08/Challenge-Activity/tree/master/Front#readme
[4]: https://meli-macosta08.herokuapp.com/doc
