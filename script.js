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