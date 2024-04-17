window.onload = (event) => {
    buscarDato()
};

const apiurl = 'https://rickandmortyapi.com/api/character';
var results = []
const card_container = document.getElementById("card-container")


const buscarDato = async () => {
    try {
        const res = await fetch(apiurl);
        const data = await res.json();
        results = data.results;
        let listado = '';
        let personaje = '';

        for (let i = 0; i < 18; i++) {
            listado += `
            <div class="card" >
                <img src="${results[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${results[i].name}</h5>
                    </div>
            </div>
        `
            personaje += `
            <option>${results[i].name}</option>
            `
        }
        card_container.innerHTML = listado;
        
    }
    catch (err) {
        console.log(err)
    }
}
