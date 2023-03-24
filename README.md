# simplilatam_frontend
***
Desarrollo de la prueba técnica
Frontend de la prueba

## Tabla de contenidos
1. [Descripción del proyecto](#informacion-general)
2. [Tecnologías usadas](#tecnologias)
3. [Componentes](#componentes)
4. [Docker](#docker)

## Información general
***
Frontend del sitio el cual se alimenta desde un backend realizado con Django.
En este se muestra una página principal junto con un menú el cuál cuenta con las secciones de crear una empresa y crear un empleado

#### Información para crear una empresa
***
1. nombre: Nombre de la empresa a registrar
2. direccion: Dirección de la empresa
3. rut: Rut de la empresa
4. telefono: Télefono de la empresa

#### Información para crear un empleado
***
1. nombre: Nombre del empleado
2. email: Correo electronico del empleado
3. rut: Rut del empleado
4. empresa: Empresa a la que pertenece el empleado

## Tecnologías
***
Lista de tecnologías utilizadas en el proyecto:

1. [Angular](https://angular.io/): Versión 15.2.0
2. [Typescript](https://www.typescriptlang.org/): Versión 4.9.4

## Componentes
1. Menu: Menú del sitio
2. index: Página principal
3. empresas: Componente donde se muestra el listado de las empresas creadas
4. empresaform: Formulario de creación de empresas
5. empresa: Información detallada de la empresa
6. empleados: Componente donde se muestra el listado de los empleados creados
7. empleadoform: Formulario de creación de empleados
8. empleado: Información detallada del empleado

## Docker
1. Crear imagen: docker build -t angular-frontend-simplilatam .
2. Correr imagen: docker run -d -p 4200:80 --name fronten angular-frontend-simplilatam