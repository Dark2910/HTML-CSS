const resDiv = document.getElementById("resultados");
new URLSearchParams(window.location.search).forEach((value, name)=>{
    resDiv.append(`${name}: ${value}`);
    resDiv.append(document.createElement("br"));
})