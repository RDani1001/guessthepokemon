const pokemon = document.querySelector("#img");

var nombresp = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill",
"pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","sandshrew","sandslash","clefairy","clefable","vulpix","ninetales","jigglypuff",
"wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe",
"arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta",
"rapidash","slowpoke","slowbro","magnemite","magneton","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler",
"voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra",
"goldeen","seaking","staryu","starmie","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte",
"omastar","kabuto","kabutops","aerodactyl","snorlax"];

let num = nombresp.length;
console.log(num);

var nompa;

function cargar() {
    fotoimg();
    let name = document.querySelector("#name");
    name.textContent= "¿Quién es?";
    let namep = document.getElementById("namep");
    namep.value = "";
}

function renderPokemon(image) {
    pokemon.setAttribute('src',image);
}

function fotoimg() {
    let nran = Math.random()*134;
    nran = Math.round(nran);
    let nombrep = nombresp[nran];
    pok= "https://pokeapi.co/api/v2/pokemon/"+ nombrep;
    fetch(pok)
    .then(response => response.json())
    .catch(function () {
        console.log("fallo");
        console.log(nran);
        let pokefail = nombresp[nran];
        console.log(pokefail);
    })
    .then(pokemons => {
        renderPokemon(pokemons.sprites.front_default);
    })
    nompa = nombrep;
}

function espoke() {
    let namep = document.getElementById("namep").value;
    namep = namep.toLowerCase();
    if (namep==nompa) {
        felicidades();
    }else{
        intentalodn();
    }
}

function felicidades() {
    let name = document.querySelector("#name");
    name.textContent= "!Felicidades¡ lo adivinaste c:";
    setTimeout(function feli(){
        cargar();
    }, 4000);
}

function intentalodn() {
    let name = document.querySelector("#name");
    name.textContent= "Lo siento... no es la respuesta correcta :c";
    setTimeout(function mali() {
        let name = document.querySelector("#name");
        name.textContent= "¿Quién es?";
        let namep = document.getElementById("namep");
        namep.value = "";
    },4000);
}