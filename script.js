
// ================================================ PELÍCULAS (ARRAY DE OBJETOS) ================================================

const peliculas = [
    {
        titulo: "Expediente Warren",
        año: 2013,
        descripcion: "Basada en hechos reales, los investigadores de fenómenos paranormales Ed y Lorraine Warren luchan por ayudar a una familia aterrorizada por una presencia oscura en su casa.",
        url: "https://pics.filmaffinity.com/the_conjuring_the_warren_files-153245956-large.jpg",
        genero: "Terror"
    },
    {
        titulo: "Midsommar",
        año: 2019,
        descripcion: "Una pareja viaja a Suecia para visitar el festival de verano de un pueblo, pero lo que comienza como unas vacaciones idílicas se convierte en una pesadilla.",
        url: "https://pics.filmaffinity.com/Midsommar-578791309-large.jpg",
        genero: "Terror"
    },
    {
        titulo: "La Bruja",
        año: 2015,
        descripcion: "Una familia de colonos en la Nueva Inglaterra de 1630 se desintegra debido a la brujería, la posesión y la paranoia.",
        url: "https://es.web.img2.acsta.net/pictures/16/02/02/12/33/062603.jpg",
        genero: "Terror"
    },
    {
        titulo: "La Zona de Interés",
        año: 2023,
        descripcion: "La vida idílica de un comandante de Auschwitz y su familia en una casa junto al campo de concentración, mostrando la normalización del horror.",
        url: "https://www.academiadecine.com/wp-content/uploads/2024/11/la_zona_de_interes_reino_unido_cartel_2-scaled.jpg",
        genero: "Terror"
    },
    {
        titulo: "Guardianes de la Galaxia",
        año: 2014,
        descripcion: "Un grupo de criminales intergalácticos se unen para salvar la galaxia de una poderosa amenaza.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB5vqv3CgJX_Gi6bTH5KKaEgQ-Ta-gVbBuQ&s",
        genero: "Acción"
    },
    {
        titulo: "Deadpool",
        año: 2016,
        descripcion: "Un ex-operativo de fuerzas especiales se somete a un experimento que le da poderes de curación acelerada y adopta el alter ego de Deadpool.",
        url: "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
        genero: "Acción"
    },
    {
        titulo: "Parque Jurásico",
        año: 1993,
        descripcion: "Un parque temático con dinosaurios clonados se convierte en una pesadilla cuando los animales escapan de su recinto.",
        url: "https://pics.filmaffinity.com/Parque_Juraasico_Jurassic_Park-214895994-large.jpg",
        genero: "Acción"
    },
    {
        titulo: "Trainspotting",
        año: 1996,
        descripcion: "Un grupo de jóvenes heroinómanos en Edimburgo lidia con sus adicciones y las consecuencias de sus elecciones de vida.",
        url: "https://m.media-amazon.com/images/M/MV5BYmVkNGJkMzQtYWQwOS00OTZmLThjODQtZjNjNzllYzRiNTE0XkEyXkFqcGc@._V1_.jpg",
        genero: "Acción"
    },
    {
        titulo: "Cadena Perpetua",
        año: 1994,
        descripcion: "Dos hombres encarcelados forjan un vínculo profundo a lo largo de varias décadas, encontrando consuelo y eventual redención a través de actos de decencia común.",
        url: "https://pics.filmaffinity.com/the_shawshank_redemption-576140557-large.jpg",
        genero: "Acción"
    },
    {
        titulo: "Parásitos",
        año: 2019,
        descripcion: "Una familia pobre que ingeniosamente se infiltra en el hogar de una familia adinerada, desencadenando consecuencias imprevistas.",
        url: "https://pics.filmaffinity.com/parasitos-432616131-large.jpg",
        genero: "Comedia"
    },
    {
        titulo: "La Familia Addams",
        año: 1991,
        descripcion: "La excéntrica y macabra familia Addams debe enfrentarse a un estafador que intenta hacerse con su fortuna.",
        url: "https://pics.filmaffinity.com/La_familia_Addams-987196331-large.jpg",
        genero: "Comedia"
    },
    {
        titulo: "Pride",
        año: 2014,
        descripcion: "Activistas gays y lesbianas recaudan dinero para ayudar a las familias afectadas por la huelga de mineros británicos en 1984.",
        url: "https://es.web.img2.acsta.net/pictures/14/12/30/13/52/559263.jpg",
        genero: "Comedia"
    },
    {
        titulo: "Florida Project",
        año: 2017,
        descripcion: "Sigue a una niña de seis años y sus amigos durante sus vacaciones de verano mientras se meten en problemas y descubren el mundo.",
        url: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Florida_Project.jpg",
        genero: "Comedia"
    },
    {
        titulo: "ET",
        año: 1982,
        descripcion: "Un niño solitario hace amistad con un extraterrestre abandonado en la Tierra y lo ayuda a encontrar el camino de regreso a casa.",
        url: "https://ccinformacion.ucm.es//file/etmovieposter?ver",
        genero: "Comedia"
    },
    {
        titulo: "20000 Especies de Abejas",
        año: 2023,
        descripcion: "Una niña de 8 años llamada Cocó explora su identidad de género durante un verano en el País Vasco.",
        url: "https://www.premiosgoya.com/wp-content/uploads/2023/11/system/uploads/feature_film/poster/2611/Cartel_20000EspeciesdeAbejas-320x457.jpg",
        genero: "Romántica"
    },
    {
        titulo: "Retrato de una Mujer en Llamas",
        año: 2019,
        descripcion: "En la Francia del siglo XVIII, una pintora recibe el encargo de hacer el retrato de bodas de una joven que acaba de salir del convento.",
        url: "https://pics.filmaffinity.com/Retrato_de_una_mujer_en_llamas-111604730-large.jpg",
        genero: "Romántica"
    },
    {
        titulo: "Cinco Lobitos",
        año: 2022,
        descripcion: "Una madre primeriza recurre a su propia madre para que la ayude a cuidar de su bebé, explorando la maternidad y las relaciones familiares.",
        url: "https://m.media-amazon.com/images/M/MV5BYzI2NTIzN2YtYzIwMi00YzNlLTkzZTEtNTQyODBkZWZmNTUzXkEyXkFqcGc@._V1_.jpg",
        genero: "Romántica"
    },
    {
        titulo: "Te Estoy Amando Locamente",
        año: 2023,
        descripcion: "En el Madrid de los años 70, durante los últimos años del franquismo, una joven descubre su identidad sexual y se enamora de otra mujer mientras lucha por la libertad en una sociedad represiva.",
        url: "https://pics.filmaffinity.com/Te_estoy_amando_locamente-779963184-large.jpg",
        genero: "Romántica"
    },
    {
        titulo: "El Maestro que Prometió el Mar",
        año: 2023,
        descripcion: "Un profesor se traslada a un pueblo costero para dar clase a un grupo de estudiantes con dificultades, transformando sus vidas.",
        url: "https://pics.filmaffinity.com/El_maestro_que_prometiao_el_mar-903273076-large.jpg",
        genero: "Romántica"
    },
    {
        titulo: "Mamífera",
        año: 2023,
        descripcion: "Una mujer de 40 años descubre que está embarazada de trillizos, lo que le hace replantearse su vida y relaciones.",
        url: "https://hips.hearstapps.com/hmg-prod/images/gh5ybvgwuaaf17s-662adce9b64b9.jpeg?resize=980:*",
        genero: "Romántica"
    }
];

// ============================== MOSTRAR PELÍCULAS ==============================

// Función para meter el array de objetos "peliculas" en una tabla en el index.html
function cargarPeliculas() {

    // Busca en el documento el cuerpo de la tabla dentro del id => "pelis-tabla"
    const tbody = document.querySelector("#pelis-tabla tbody"); 
    // Establece el contenido como vacío, eliminando filas existentes y evitando duplicados
    tbody.innerHTML = ""; 

    // Recorre cada elemento del array películas para por cada película crear una fila con sus datos organizados en celdas
    peliculas.forEach((pelicula, index) => {

        // Crea una nueva fila dentro de la tabla
        const fila = document.createElement("tr");

        //Construye el contenido de la fila creando 6 celdas <td>
        fila.innerHTML = `
            <td>${pelicula.titulo}</td>
            <td>${pelicula.año}</td>
            <td>${pelicula.descripcion}</td>
            <td><img src="${pelicula.url}" alt="${pelicula.titulo}" style="width: 100px; height: auto;"></td>
            <td>${pelicula.genero}</td>
            <td>
                <button onclick="editarPelicula(${index})">Editar</button>
                <button onclick="eliminarPelicula(${index})">Eliminar</button>
            </td>
        `;

        // Agrega la fila a la tabla
        tbody.appendChild(fila);
    });
}

// ============================== VARIABLE GLOBAL PARA EDITAR ==============================

// Variable global para saber qué película estamos editando
    // Se crea como una varible let (puede cambiar de valor) y se le asigna el valor inicial "null" (vacío o nada)
    // Cuando se agrega una película nueva: Usuario rellena el formulario => indiceEditando = numm => El programa reconoce que es una película nueva => Crea una película nueva
    // Cuando está editando una película existente indiceEditando = 2 (p.e) => Estamos editando la película 2
let indiceEditando = null;


// ============================== FILTRAR POR NOMBRE ==============================

// Función para filtrar películas por nombre mientras el usuario escribe
function filtrarPorNombre() {

    // Toma el texto que el usuario está escribiendo
    const textoBusqueda = document.getElementById("buscar-pelicula").value.toLowerCase().trim();
    
    // Encuentra el cuerpo de la tabla
    const tbody = document.querySelector("#pelis-tabla tbody");
    
    // Limpia la tabla
    tbody.innerHTML = "";
    
    // Si el campo de búsqueda está vacío => mostrar todas las películas
    if (textoBusqueda === "") {
        cargarPeliculas();
        return;
    }
    
    // Recorre cada película del array
    peliculas.forEach((pelicula, index) => {

        // Convierte el título a minúsculas para comparación sin importar mayúsculas
        const tituloPelicula = pelicula.titulo.toLowerCase();
        
        // Si el título contiene el texto de búsqueda, mostrar la película
        if (tituloPelicula.includes(textoBusqueda)) {
            
            // Crea la fila para mostrar el resultado
            const fila = document.createElement("tr");
            
            fila.innerHTML = `
                <td>${pelicula.titulo}</td>
                <td>${pelicula.año}</td>
                <td>${pelicula.descripcion}</td>
                <td><img src="${pelicula.url}" alt="${pelicula.titulo}" style="width: 100px;"></td>
                <td>${pelicula.genero}</td>
                <td>
                    <button onclick="editarPelicula(${index})">Editar</button>
                    <button onclick="eliminarPelicula(${index})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(fila);
        }
    });
    
    // Si no hay resultados => mostrar mensaje
    if (tbody.innerHTML === "") {
        tbody.innerHTML = `<tr><td colspan="6">No se encontraron películas con "${textoBusqueda}"</td></tr>`;
    }
}


// ============================== FILTRAR POR GÉNERO ==============================

// Función para filtar por genero
function filtrarGenero() {
    // Toma el género seleccionado en el dropdown
    const genero = document.getElementById("filtro-genero").value;
    // Encuentra el cuerpo de la tabla donde van las películas 
    const tbody = document.querySelector("#pelis-tabla tbody");
    // Limpia la tabla
    tbody.innerHTML = "";
    
    // Recorre cada película del array películas
    peliculas.forEach((pelicula, index) => {
        // Normalizar géneros para comparación (ignorar mayúsculas, minúsculas y tildes)
        const generoPelicula = pelicula.genero.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const generoSeleccionado = genero.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Si es "todos" o coincide el género, mostrar la película
        if (genero === "todos" || generoPelicula === generoSeleccionado) {
            
            // Si cumple la condición, crea la fila
            const fila = document.createElement("tr");
            
            fila.innerHTML = `
                <td>${pelicula.titulo}</td>
                <td>${pelicula.año}</td>
                <td>${pelicula.descripcion}</td>
                <td><img src="${pelicula.url}" alt="${pelicula.titulo}" style="width: 100px;"></td>
                <td>${pelicula.genero}</td>
                <td>
                    <button onclick="editarPelicula(${index})">Editar</button>
                    <button onclick="eliminarPelicula(${index})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(fila);
        }
    });
}

// ============================== AÑADIR UNA NUEVA PELÍCULA ==============================

// Función para manejar el envío del formulario (tanto agregar como editar)
function manejarFormulario(event) {

    // Evita que se recargue la página para no perder los datos (la página se refrescaría)
    event.preventDefault();

    // Obtener valores del formulario: toma lo que el usuario escribió en cada campo
        // Se utiliza trim() para eliminar espacios vacíos al inicio y al final y parseInt() para convertir el año de texto a número
    const titulo = document.getElementById("name").value.trim();
    const año = parseInt(document.getElementById("year").value);
    const descripcion = document.getElementById("short-text").value.trim();
    const url = document.getElementById("url").value.trim();
    const genero = document.getElementById("gender").value;

    // Verifica que todo esté correcto, revisa que ningún campo esté vacío y si falta algo muestra una alerta
        // new Date() toma la hora y fecha actuales del sistema y .getFullYear() extra solo el año
    const currentYear = new Date().getFullYear(); 
    if (!titulo || !descripcion || !url || !genero) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Verifica que el año sea un número valido que no sea menor a 1800, ni mayor al año actual
    if (isNaN(año) || año < 1800 || año > currentYear) {
        alert("El año debe tener 4 cifras y estar entre 1800 y " + currentYear);
        return;
    }

    // Si estamos editando una película existente
    if (indiceEditando !== null) {
        // Actualizar la película existente
        peliculas[indiceEditando] = {
            titulo,
            año,
            descripcion,
            url,
            genero
        };
        
        // Restaurar el botón a "Añadir película"
        const boton = document.querySelector("#peli-form button");
        boton.textContent = "Añadir película";
        
        // Resetear la variable de edición
        indiceEditando = null;
        
        alert("¡Película actualizada correctamente!");

    } else {

        // Si NO estamos editando, agregar una nueva película
        const nuevaPelicula = {
            titulo,
            año,
            descripcion,
            url,
            genero
        };

        // Guarda la película en una lista (al final del array "peliculas")
        peliculas.push(nuevaPelicula);
        alert("¡Película agregada correctamente!");
    }

    // Limpia el formulario y lo deja listo para agregar otra película
    document.getElementById("peli-form").reset();

    // Al actualizar la tabla vuelve a cargar la tabla con todas las películas
    cargarPeliculas();
}


// ============================== VALIDACIÓN DE FORMULARIO ==============================

const form = document.getElementById ("peli-form")

form.addEventListener("submit", function(event){
    event.preventDefault();

    // Acceso a los "id" de los campos del formulario
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const description = document.getElementById("short-text").value;
    const url = document.getElementById("url").value;
    const gender = document.getElementById("gender").value;

    // Validación de nombre:
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s\-\:\,\.\!\?\(\)\"\']+$/;
    if (!nameRegex.test(name)) {
        alert("Por favor, introduce un nombre válido");
        return;
    }
    // Validación de año:
    const yearRegex = /^(1[8-9][0-9]{2}|20[0-1][0-9]|202[0-5])$/ ;
    if (!yearRegex.test(year)) {
        alert("Por favor, introduce un año válido");
        return;
    }

    // Validación de descripción:
    const descriptionRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s\-\:\,\.\!\?\(\)]{1,300}$/ ;
    if (!descriptionRegex.test(description)) {
        alert("Por favor, introduce un año válido");
        return;
    }

    // Validación de url:
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlRegex.test(url)) {
        alert("Por favor, introduce un año válido");
        return;
    }

    // Validación de gender:
    const genderRegex = /^(Terror|Acción|Comedia|Romántica)$/i;
    if (!genderRegex.test(gender)) {
        alert("Por favor, introduce un año válido");
        return;
    }

    // Si pasas todas las validaciones se procesa el formulario
    alert("Formulario enviado correctamente");

})


// ============================== EDITAR UNA PELÍCULA ==============================

// Función para editar películas existentes que recibe la posición de la película a editar
function editarPelicula(index) {
    
    // Guardar el índice de la película que estamos editando
    indiceEditando = index;
    
    // 1. Mostrar datos actuales en el formulario
    const pelicula = peliculas[index];
    
    document.getElementById("name").value = pelicula.titulo;
    document.getElementById("year").value = pelicula.año;
    document.getElementById("short-text").value = pelicula.descripcion;
    document.getElementById("url").value = pelicula.url;
    document.getElementById("gender").value = pelicula.genero;
    
    // 2. Cambiar el botón temporalmente a "Guardar Cambios"
    const boton = document.querySelector("#peli-form button");
    boton.textContent = "Guardar Cambios";
    
    // 3. Hacer scroll al formulario para que el usuario lo vea
    document.getElementById("formulario").scrollIntoView({ behavior: 'smooth' });
}

// ============================== ELIMINAR UNA PELÍCULA ==============================

// Función para eliminar películas
function eliminarPelicula(index) {
    // 1. Preguntar confirmación
    const pelicula = peliculas[index];
    const confirmacion = confirm(`¿Estás seguro de que quieres eliminar "${pelicula.titulo}"?`);
    
    // 2. Si el usuario confirma => eliminar => "Película eliminada correctamente"
    if (confirmacion) {
        // Elimina 1 elemento en la posición "index"
        peliculas.splice(index, 1); 
        cargarPeliculas();
        alert("Película eliminada correctamente");
    }
}


// ============================== INICIALIZAR ==============================

// Espera a que la página termine de cargarse completamente y cuando está lista ejecuta "cargarPeliculas()"
window.addEventListener("DOMContentLoaded", () => {
    // Configurar el formulario para usar una sola función
    const form = document.getElementById("peli-form");
    form.addEventListener("submit", manejarFormulario);
    
    // Cargar las películas al inicio
    cargarPeliculas();
});