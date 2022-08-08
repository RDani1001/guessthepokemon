const pokemon = document.querySelector("#img");
const barnamecon = document.getElementById("name-pistas");
const names = document.getElementById("names");
const bars = document.getElementById("bars");

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
var count = 0;

function recargar() {
    window.location.reload();
}

function cargar() {
    if(count>8){
        let divwin = document.querySelector(".victory");
        divwin.style.display = "block";
        let game = document.querySelector(".game");
        game.style.display = "none";
    }else{
    barnamecon.innerHTML = "";
    intpist = 3;
    fotoimg();
    let name = document.querySelector("#name");
    name.innerHTML = "";
    name.textContent= "¿Quién es?";
    let namep = document.getElementById("namep");
    namep.value = "";
    pists = [];
    }
}

function saltar() {
    barnamecon.innerHTML = "";
    intpist = 3;
    fotoimg();
    let name = document.querySelector("#name");
    name.innerHTML = "";
    name.textContent= `Racha reiniciada`;
    setTimeout(function racha(){
        name.textContent= `¿Quién es?`;
    },1000)
    let namep = document.getElementById("namep");
    namep.value = "";
    pists = [];
    count = 0;
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
    .then(pokemons => {
        renderPokemon(pokemons.sprites.front_default);
    })
    .catch(function () {
        console.log("fallo");
        console.log(nran);
        let pokefail = nombresp[nran];
        console.log(pokefail);
    })
    let pokefail = nombresp[nran];
        console.log(pokefail);
    console.log(numname);
    nompa = nombrep;
    let fragmento = document.createDocumentFragment();
    for(let i = 1 ; i<= numname;i++){
        let divcontainer = document.createElement("div");
        divcontainer.classList.add("letter");
        let letter = document.createElement('h1');
        letter.setAttribute("id",`nombre-${i}`);
        letter.textContent = prenumname[i-1].toUpperCase();
        letter.classList.add("desactive");
        let underline = document.createElement("h1");
        underline.textContent = "¯¯";
        divcontainer.appendChild(letter);
        divcontainer.appendChild(underline);
        fragmento.appendChild(divcontainer);
    }
    barnamecon.appendChild(fragmento);
    let numpist = document.getElementById("pista");
    numpist.textContent = `Pista pistas-${intpist}`;
}

function pista() {
    if(intpist>0){
        let nranm;
        let flag = 0;
        do{
            let nran = Math.round(Math.random()*numnamedef);
            if(nran ==0){
                nranm = nran + 1;
            }
            else{
                nranm = nran;
            }
            if(flag2==1){
                if (pists.includes(nranm)) {
                    flag = 1;
                }else{
                    flag = 0;
                }
            }else{
                flag2= 1;
            }
        }while(flag==1);
            intpist = intpist-1;
            pists.push(nranm);
            let pist = document.getElementById(`nombre-${nranm}`);
            pist.classList.remove("desactive");
            pist.classList.add("active");
            let numpist = document.getElementById("pista");
            numpist.textContent = `Pista pistas-${intpist}`;
    }else{
        let numpist = document.getElementById("pista");
        numpist.textContent = `Te has quedado sin pistas`;
        numpist.classList.add("red");
        setTimeout(function regresar(){
            let numpist = document.getElementById("pista");
            numpist.textContent = `Pista pistas-${intpist}`;
            numpist.classList.remove("red");
        }, 2000);
    }
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
        let pist = document.getElementById(`nombre-${i}`);
        pist.classList.remove("desactive");
        pist.classList.add("active");
    }
    count++;
    name.innerHTML= `!Felicidades¡ lo adivinaste c:<br>
    Racha: ${count}
    `;
    setTimeout(function feli(){
        cargar();
    }, 4000);
}

function intentalodn() {
    let name = document.querySelector("#name");
    name.innerHTML= `Lo siento... no es la respuesta correcta :c<br>
    Racha reiniciada
    `;
    count = 0;
    setTimeout(function mali() {
        let name = document.querySelector("#name");
        name.textContent= "¿Quién es?";
        let namep = document.getElementById("namep");
        namep.value = "";
    },4000);
}