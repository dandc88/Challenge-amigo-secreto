# 🎁 Amigo Secreto 🤫

¡Bienvenido al repositorio de la aplicación **Amigo Secreto**! Esta es una sencilla y divertida herramienta web para organizar sorteos de amigo secreto entre tus amigos, familiares o compañeros de trabajo.

## 🚀 Dinámica del Sorteo

La dinámica de la aplicación es muy intuitiva y fácil de usar. Solo necesitas seguir estos simples pasos:

1.  **Añade a tus amigos**: En la página principal, encontrarás un campo de texto donde puedes ingresar los nombres de tus amigos uno por uno. Haz clic en el botón "Añadir" para agregarlos a la lista. La lista se actualizará automáticamente a medida que añadas cada nombre.

2.  **¡A Sortear!**: Una vez que todos los nombres estén en la lista, presiona el botón "Sortear amigo". La aplicación seleccionará de forma aleatoria a un ganador entre todos los nombres que has ingresado.

3.  **Resultado**: El nombre del amigo seleccionado aparecerá en la página, revelando quién es el afortunado ganador del sorteo.

---

## 💻 Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las tecnologías web estándar, enfocándose en la simplicidad y la funcionalidad.

* **HTML**: Para la estructura y el contenido de la página.
* **CSS**: Para el diseño y los estilos visuales.
* **JavaScript**: Para la lógica de la aplicación, el manejo de la lista de amigos, la selección aleatoria y la actualización del contenido de la página.

---

## 💡 ¿Cómo Funciona?

* La aplicación mantiene un `array` de JavaScript llamado `amigos` para almacenar los nombres que se van agregando.
* Cuando haces clic en el botón "Añadir", el nombre ingresado se agrega al `array` y la lista en la página se actualiza.
* Al presionar "Sortear amigo", se genera un índice aleatorio basado en el número de amigos en la lista. Se selecciona el amigo en esa posición y su nombre se muestra como el resultado.

¡Siéntete libre de clonar, modificar y usar este proyecto para tus propios sorteos o como base para aprender más sobre desarrollo web!
