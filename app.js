let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function (event) {
    if (inp.value.trim() !== "") {
        let item = document.createElement("li");
        item.innerText = inp.value;
        item.style.color = "white"; // make list item text white

        let delBtn = document.createElement("button");
        delBtn.innerText = "delete";
        delBtn.classList.add("feature"); // ✅ use same class

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value = "";
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
