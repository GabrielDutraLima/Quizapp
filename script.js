let tema = "claro"

const botaoTema = document.querySelector(".tema button")
botaoTema.addEventListener("click", trocarTema)

const body = document.querySelector("body")

function trocarTema() {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema")
    }

     
    

   if (tema === "claro") {
    body.classList.add("escuro")
    localStorage.setItem("tema", "escuro")
    

   }else {
    body.classList.remove("escuro")
    localStorage.setItem("tema", "claro")
   }

}


function verificarTema() {
    if (localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")

    }
    if (tema === "escuro") {
        body.classList.add("escuro")
    }
}

verificarTema()