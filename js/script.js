
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

document.querySelector(".todo").addEventListener("click", animateMenu);
document.querySelector(".carnes").addEventListener("click", animateMenu);
document.querySelector(".pollo").addEventListener("click", animateMenu);
document.querySelector(".pescados").addEventListener("click", animateMenu);
document.querySelector(".bebidas").addEventListener("click", animateMenu);

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


var todo = document.querySelector(".todo-img");
var carne = document.querySelector(".carne-img");
var pollo = document.querySelector(".pollo-img");
var pescados = document.querySelector(".pescados-img");
var bebidas = document.querySelector(".bebidas-img");

function animateMenu(event){
    if(event.target.matches(".todo")){

        todo.classList.remove("activetodo-img");
        carne.classList.remove("activecarne-img");
        pollo.classList.remove("activepollo-img");
        pescados.classList.remove("activepescados-img");
        bebidas.classList.remove("activebebidas-img");
        todo.classList.toggle("activetodo-img");

    }else if (event.target.matches(".carnes")){

        todo.classList.remove("activetodo-img");
        carne.classList.remove("activecarne-img");
        pollo.classList.remove("activepollo-img");
        pescados.classList.remove("activepescados-img");
        bebidas.classList.remove("activebebidas-img");
        carne.classList.toggle("activecarne-img");

    }else if(event.target.matches(".pollo")){

        todo.classList.remove("activetodo-img");
        carne.classList.remove("activecarne-img");
        pollo.classList.remove("activepollo-img");
        pescados.classList.remove("activepescados-img");
        bebidas.classList.remove("activebebidas-img");
        pollo.classList.toggle("activepollo-img");

    }else if(event.target.matches(".pescados")){

        todo.classList.remove("activetodo-img");
        carne.classList.remove("activecarne-img");
        pollo.classList.remove("activepollo-img");
        pescados.classList.remove("activepescados-img");
        bebidas.classList.remove("activebebidas-img");
        pescados.classList.toggle("activepescados-img"); 

    }else if(event.target.matches(".bebidas")){

        todo.classList.remove("activetodo-img");
        carne.classList.remove("activecarne-img");
        pollo.classList.remove("activepollo-img");
        pescados.classList.remove("activepescados-img");
        bebidas.classList.remove("activebebidas-img");
        bebidas.classList.toggle("activebebidas-img");

    }
}
