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
var numnamedef;
var pists = [];
var flag2 = 0;
var intpist = 3;

function cargar() {
    let names = document.getElementById("names");
    let bars = document.getElementById("bars");
    names.innerHTML = "";
    bars.innerHTML = "";
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
    let prenumname = nombresp[nran].toString();
    let numname = prenumname.length;
    numnamedef = numname;
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
    let pokefail = nombresp[nran];
        console.log(pokefail);
    console.log(numname);
    let barnamecon = document.getElementById("name-pistas");
    let names = document.getElementById("names");
    let bars = document.getElementById("bars");
    let fragmentonames = document.createDocumentFragment();
    let fragmentobars = document.createDocumentFragment();
    for (let i = 1; i <= numname ; i++) {
        let barname = document.createElement("h1");
        barname.setAttribute("id",`name-${i}`);
        barname.setAttribute("class",`nombre`);
        barname.classList.add("desactive");
        barname.textContent = prenumname[i-1].toUpperCase();
        let bar = document.createElement("h1");
        bar.setAttribute("id",`bar-${i}`);
        bar.setAttribute("class",`barnombre`);
        bar.textContent = "_";
        fragmentonames.appendChild(barname);
        fragmentobars.appendChild(bar);
    }
    names.appendChild(fragmentonames);
    bars.appendChild(fragmentobars);
    barnamecon.appendChild(names);
    barnamecon.appendChild(bars);
    nompa = nombrep;
    let numpist = document.getElementById("pista");
    numpist.textContent = `Pista pistas-${intpist}`;
}

function pista() {
    let nranm;
    let flag = 0;
    if(intpist>0){
    do{
    let nran = Math.round(Math.random()*numnamedef);
    if(nran ==0){
        nranm = nran + 1;
    }
    else{
        nranm = nran;
    }
    if(flag2==1){
    for (let i = 0; i <= pists.length; i++) {
        if(nranm==pists[i]){
            if(flag==1){
                break;
            }else{
                flag = 1;
            }
        }else{
            if(flag==0){
                break;
            }else{
                flag = 0;
            }
        }
    }
    }else{
        flag2= 1;
    }
    }while(flag==1);
    intpist = intpist-1;
    }
    pists.push(nranm);
    let pist = document.getElementById(`name-${nranm}`);
    pist.classList.remove("desactive");
    pist.classList.add("active");
    let numpist = document.getElementById("pista");
    numpist.textContent = `Pista pistas-${intpist}`;
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
    for (let i = 1; i < numnamedef+1; i++) {
        let pist = document.getElementById(`name-${i}`);
        pist.classList.remove("desactive");
        pist.classList.add("active");
    }
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