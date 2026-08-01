function searchWiki() {

let search = document.getElementById("searchInput").value.toLowerCase();


if(search.includes("wolland")) {
    window.location.href = "wolland.html";
}


else if(search.includes("kurmasikk")) {
    window.location.href = "kurmasikk.html";
}


else if(search.includes("artemaka")) {
    window.location.href = "artemaka.html";
}


else if(search.includes("персонажи")) {
    window.location.href = "characters.html";
}


else if(search.includes("история")) {
    window.location.href = "history.html";
}


else if(search.includes("карта")) {
    window.location.href = "map.html";
}


else {
    alert("Ничего не найдено в HKL 2 Wiki");
}

}
function toggleMenu(){

const menu=document.getElementById("sidebar");

if(menu.style.left==="0px"){

menu.style.left="-260px";

}else{

menu.style.left="0px";

}

}
const pages = [
    {name:"👑 Wolland", link:"kingdoms.html"},
    {name:"🌊 Остров Саймона", link:"kingdoms.html"},
    {name:"🔮 Империя Магов", link:"kingdoms.html"},
    {name:"👤 Kurmasikk", link:"characters.html"},
    {name:"⚔️ Artemaka", link:"characters.html"},
    {name:"🐍 ReSnake", link:"characters.html"},
    {name:"📜 История", link:"history.html"},
    {name:"📅 Хронология", link:"timeline.html"},
    {name:"🗺️ Карта", link:"map.html"},
    {name:"⚔️ События", link:"events.html"},
    {name:"🎟️ Получить проходку", link:"pass.html"}
];

const input=document.getElementById("searchInput");
const suggestions=document.getElementById("suggestions");

input.addEventListener("input",function(){

const text=this.value.toLowerCase();

suggestions.innerHTML="";

if(text===""){
    suggestions.style.display="none";
    return;
}

const result=pages.filter(p=>p.name.toLowerCase().includes(text));

result.forEach(page=>{

const div=document.createElement("div");

div.className="suggestion";

div.textContent=page.name;

div.onclick=()=>window.location=page.link;

suggestions.appendChild(div);

});

suggestions.style.display=result.length?"block":"none";

});