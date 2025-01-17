let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
//Mainly for adding new elements in the list(Structure giving mainly)
btn.addEventListener("click",function(event){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});
//For delete button trigger
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        console.log(listItem.innerText);
        listItem.remove();
        console.log("Deleted");
    }
});