const noteContainer = document.querySelector(".michnote-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".box-input");

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", noteContainer.innerHTML)
} 

createBtn.addEventListener("click", ()=>{
    let boxInput = document.createElement("p");
    let img = document.createElement("img");
    boxInput.className = "box-input" ;
    boxInput.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    noteContainer.appendChild(boxInput).appendChild(img);   
})

noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".box-input");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


document.get