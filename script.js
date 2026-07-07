const botao = document.getElementById("tema");

botao.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        botao.innerHTML = "☀️ Tema Claro";
    }else{
        botao.innerHTML = "🌙 Alterar Tema";
    }

});