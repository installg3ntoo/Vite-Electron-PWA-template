# React + Vite + VitePWA + Vite-Electron

Template para poder buildear una aplicación en React tanto como una PWA como una aplicación en Electron.

## Build PWA

Las builds de PWA se guardan en la carpeta `/dist`. Para buildear la aplicación en PWA se usa el comando:

``` 
npm run build 
```

Para correr la aplicación en local se puede utilizar:

``` 
npm run preview 
```

Para ejecutarla en un servidor y escuchar por fuera:

``` 
npm run preview-host 
```


## Build Electron

Las builds de electron se guardan en la carpeta `/dist-electron`, donde la `outDir` (directorio de la SPA con index.html) se genera en `/dist-electron/out` y las builds se generan en `/dist-electron/${plataforma}/${arquitectura}`.

Para buildear el outDir solamente se puede utilizar:

``` 
npm run electron:build 
```

Para buildear los ejecutables y binaries para Windows se puede utilizar:

``` 
npm run electron:build-win
```

El build genera la versión unpacked de la aplicación, el setup.exe que es la versión instalable y la versión portable.exe de la aplicación (que almacena la AppData en la carpeta del portable como `data`).


#### Entorno Electron

Para distinguir en React si uno está corriendo en una build de electron o en una build de PWA se utiliza la variable de entorno `VITE_REACT_APP_ENV` que tiene como valor `'electron'` cuando se corre en ese entorno.

## Dependencias

Este proyecto utiliza Material UI y MRT v3 para la interfaz.

## TODO

* Automatizar la generación de iconos para Electron (carpeta build) usando el `favicon.svg`.
* Linkear `win: executableName:` de Electron builder con el resto del proyecto (por ahora es manual).
* Agregar iconos de PWA.