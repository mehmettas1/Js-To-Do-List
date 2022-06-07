let addToDoButton = document.getElementById("addtodo");
let clearToDoButton = document.getElementById("cleartodo");
let toDoContainer = document.getElementById('todoscontainer')
let inputText = document.getElementById('inputtext')
addToDoButton.addEventListener('click',function(){
    let paragraph =document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click',function() {
      ;  paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick',function() {
        toDoContainer.removeChild(paragraph)
    });

    clearToDoButton.addEventListener('click',function(){
        paragraph.remove();
    })

})