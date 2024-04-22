


const apiurl = 'https://rickandmortyapi.com/api/character';
var result = []
let listado = '';
let status = "";
const card_container = document.getElementById("card-container");
const filter = document.getElementById("floatingSelect");
filter.innerHTML = `<option value="0" selected>Todos</option>`;

const estado = char =>{
    let res = "";
    if (char.status == "Alive") {
        res = `<span class="text-success">${char.status}</span>`;
    } else {
        res = `<span class="text-danger">${char.status}</span>`;
    }
    return res;
};

const buscarDato = async () => {
    try {
        const res = await fetch(apiurl);
        const data = await res.json();
        result = data.results.slice(0, 15); // carga solo los 15 personajes
        let personaje = '';
        for (let i = 0; i < result.length; i++) {
            const nombre = result[i].name;
            const descripcion = descripciones[nombre] || "Descripción no disponible";
            status = estado(result[i]);
            listado += `
                <div class="card" >
                    <div class="box">
                        <img src="${result[i].image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="profile-name">
                                <h5 class="card-title">${nombre}</h5>
                            </div>
                        </div>
                        <div class="contentBx">
                            <div class="card-body">
                                <p class="card-text">
                                    Estado: ${status}<br>
                                    Especie: ${result[i].species}<br>
                                    Genero: ${result[i].gender}<br>
                                    <span class="desc">${descripcion}</span>
                                </p>
                            </div>
                        </div>
                    </div>        
                </div>
            `
            personaje += `<option value="${i+1}">${result[i].name}</option>`
        }
        card_container.innerHTML = listado;
        filter.innerHTML += personaje;
    }
    catch (err) {
        console.log(err)
    }
}
buscarDato()

const descripciones = {
    "Rick Sanchez": "Es un científico alcohólico y misántropo conocido por su comportamiento temerario, nihilista y su personalidad pesimista. El personaje ha sido bien recibido por su complejidad y desarrollo. Rick es un científico loco sociopático que parece conocer todo en el universo y, por lo tanto, encuentra la vida una experiencia traumática y sin sentido. A pesar de asumir que es la persona más inteligente del universo, ha habido momentos en los que se ha equivocado.",
    "Morty Smith": "Morty Smith es un adolescente de 14 años, nieto de Rick Sánchez y protagonista de “Rick y Morty”. Conocido por su ansiedad y sumisión inicial, Morty evoluciona hacia una mayor confianza e independencia. A menudo involucrado en las peligrosas aventuras interdimensionales de Rick, Morty es un personaje complejo y bien recibido por su desarrollo",
    "Summer Smith":"Summer Smith es la hermana mayor de Morty, estudiante de 17 años y personaje principal de “Rick y Morty”. Es conocida por su deseo de mejorar su estatus social entre sus pares y por su personalidad inteligente y humorística. A medida que avanza la serie, Summer se une a las aventuras interdimensionales de Rick y Morty, mostrando su evolución de un personaje secundario a uno principal",
    "Beth Smith":"Beth Smith es la hija de Rick, esposa de Jerry y madre de Summer y Morty en “Rick y Morty”. Cirujana de caballos, Beth es inteligente y a veces fría. Lucha con problemas de abandono y complejo de superioridad, lo que afecta su matrimonio y relación con su familia. Su personaje refleja una evolución significativa a lo largo de la serie",
    "Jerry Smith":"Jerry Smith es el esposo inseguro de Beth y padre de Summer y Morty en “Rick y Morty”. A menudo ridiculizado por su falta de éxito profesional y personal, Jerry muestra un lado heroico en crisis. Su relación con Rick es tensa, pero su amor por su familia lo lleva a participar en sus aventuras interdimensionales",
    "Abadango Cluster Princess":"La Princesa del Cúmulo Abadango es la monarca de los Abadongianos en “Rick y Morty”. Aparece brevemente en el episodio “Rest and Ricklaxation”. Poseedora de un fragmento de plasma que Rick desea, ella lo recompensa tras ayudarla a destruir una criatura espacial gigante junto a su ejército",
    "Abradolf Lincler":"Abradolf Lincler es un clon humano genéticamente modificado creado por Rick en “Rick y Morty”. Mezcla del ADN de Abraham Lincoln y Adolf Hitler, intenta ser un líder super neutral, pero resulta ser un ser confundido y frustrado que resiente a su creador",
    "Adjudicator Rick":"Adjudicator Rick es un personaje de “Rick y Morty” que sirvió como juez en el primer debate presidencial en la Ciudadela. Despreciaba a Candidato Morty, lo que le costó la vida cuando Morty se convirtió en Presidente Morty. Su apariencia incluye cabello peinado gris-azul, un entrecejo y vestía un traje azul marino",
    "Agency Director":"El Director de la Agencia es el principal antagonista en el episodio “Pickle Rick” de “Rick y Morty”. Dirige un edificio gubernamental secreto y busca matar a Rick y Jaguar. Es conocido por su sadismo y corrupción, y su incapacidad para matar a un pepinillo lo lleva a su perdición",
    "Alan Rails":"Alan Rails es un superhéroe de “Rick y Morty” que puede invocar trenes fantasma. Exmarido de Supernova, su trágica historia incluye la muerte de sus padres en un accidente ferroviario. Su atuendo refleja su poder: lleva un uniforme de conductor de tren y un silbato que le permite convocar a los trenes",
    "Albert Einstein":"Albert Einstein en “Rick y Morty” es una parodia del científico real. Aparece en el episodio “A Rickle in Time”, donde es confundido con Rick por los Seres de la Cuarta Dimensión. Tras ser golpeado, jura vengarse alterando el tiempo, lo que alude humorísticamente a sus teorías de la relatividad",
    "Alexander":"Alexander es un personaje menor de “Rick y Morty” que apareció en el episodio “Anatomy Park”. Trabajaba en el parque temático dentro del cuerpo de un hombre sin hogar. Llevaba un disfraz de perro que odiaba y nunca se le permitió quitárselo. Murió trágicamente cuando fue despedazado por una tos violenta",
    "Alien Googah":"El Alien Googah es una criatura que invadió los Túneles Sexuales de la Casa Blanca en “The Rickchurian Mortydate”. Es pequeño y no representa una amenaza real. Rick y Morty lo encuentran y deciden que es inofensivo, dejándolo para jugar Minecraft en vez de luchar contra él",
    "Alien Morty":"Alien Morty es una versión alternativa de Morty Smith que apareció en el episodio “Close Rick-counters of the Rick Kind”. Es un adolescente alienígena con piel verde lima y viscosa, dos antenas rizadas en la cabeza, cabello corto marrón, tres ojos ligeramente entrecerrados, uno en la frente, y orejas puntiagudas",
    "Alien Rick":"Alien Rick es una versión alternativa de Rick Sánchez que aparece en el episodio “Close Rick-counters of the Rick Kind”. Es un alienígena con piel azul y ojos amarillos. Aunque comparte la inteligencia y el ingenio de Rick, su personalidad y motivaciones pueden diferir significativamente",
    "Amish Cyborg":"Amish Cyborg es un personaje de “Rick y Morty” que aparece en el episodio “Total Rickall”. Es un hombre Amish con una pierna y un brazo robóticos, y parte de su rostro también es cibernético. Fue creado por un parásito de la memoria y fue asesinado por Rick mientras huía en la cocina",
    "Annie":"Annie es una adolescente que trabajaba en el parque temático Anatomy Park. Es inteligente, valiente y se convierte en interés amoroso de Morty. Sobrevive a los peligros del parque y muestra habilidad para liderar, ya que Rick la encoge para que construya un nuevo Anatomy Park",
    "Antenna Morty":"Antenna Morty es una versión alternativa de Morty Smith con dos antenas verdes en su cabeza. Fue uno de los Mortys esclavizados por el Malvado Rick y Morty, y ayudó a derrotar a Rick y sus Arañas Cangrejo. Sueña con escribir novelas de acción intensas",
    

}

filter.addEventListener("change", ()=>{

    let selectedOption = filter.value;
    
    //Si la opción es distinta de "Todos" se remplazará todo el HTML del main por la tarjeta seleccionada
    if (selectedOption != 0) {
        let nameSelected= filter.options[selectedOption].text;
        arrayCharacter = result.filter(ch => ch.name === nameSelected);
        character = arrayCharacter[0];
        //console.log(character.name);
        status = estado(character);
        const descripcion = descripciones[character.name] || "Descripción no disponible";
        card_container.innerHTML = `
            <div class="card" >
                <div class="box">
                    <img src="${character.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="profile-name">
                            <h5 class="card-title">${character.name}</h5>
                        </div>
                    </div>
                    <div class="contentBx">
                        <div class="card-body">
                            <p class="card-text">
                                Estado: ${status}<br>
                                Especie: ${character.species}<br>
                                Genero: ${character.gender}
                                <span class="desc">${descripcion}</span>
                            </p>
                        </div>
                    </div>
                </div>        
            </div>
        `;
        card_container.classList.remove("card-container");
        card_container.classList.add("card-container-selected");
    } else { //De lo contrario se cargarán de nuevo todas las cartas
        card_container.innerHTML = listado;
        card_container.classList.remove("card-container-selected");
        card_container.classList.add("card-container");
    }
    

});