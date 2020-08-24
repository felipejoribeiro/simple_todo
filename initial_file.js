
// Salada antes pra exemplificar códigos:

var data = [    [1 , 2 , 4 , 5 , 6] , 
                [7 , 8 , 9 , 10 , 11] 
            ]  
var object = {
    meal: "cats with wine",
    age: 32,
    isMarie: false,
    TurnIntoMary: function(){
        object.isMarie = true;
    },
}

var u = 4+4;

var i = 0;

if(u === 7){
    alert("o trem funcionou!!");
    console.log("hello " + String(i) );
}

function entrada (ola){
    return 2*ola;
}

var m = entrada;

var m = document.querySelector("h1")

// Programa principal:

var button = document.getElementsByTagName("button")[0];
var button2 = document.getElementById("colocar");
var input = document.getElementById("colocar_item");
var lista = document.getElementById('Lista_de_compras');
var initial_button= document.getElementById('initial_button')

// Functions:

function delete_item(event){
    event.target.parentElement.remove();   
}

function red_item(event){
    event.target.classList.toggle("done");   
}

function add_item (where_to_add, where_to_read){
    var li = document.createElement("li");
    var exit = document.createElement("button");

    exit.setAttribute("class", "erase_button");
    li.appendChild(document.createTextNode(where_to_read.value + " "));
    li.append(exit);
    where_to_read.value = "";
    where_to_add.append(li);
    where_to_add.children[where_to_add.children.length - 1].children[0].addEventListener('click', delete_item); 
    where_to_add.children[where_to_add.children.length - 1].addEventListener('click', red_item); 
}

initial_button.addEventListener('click', delete_item);
lista.children[0].addEventListener('click', red_item);


button.addEventListener("click", function(){
    console.log("click!" + String(i));
    i++;
});

button2.addEventListener("click", function(){

    if(input.value.length > 0 ){
        add_item(lista, input);
    };
    
});

input.addEventListener("keypress", function(event){

    if(input.value.length > 0 && event.keyCode ===13 ){
        add_item(lista, input);
    };
    
});

// console.log(data);