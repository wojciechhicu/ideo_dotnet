//=====collapse nodes=====
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}
//=====/collapse nodes=====

//=====collecting data=====
var node = document.getElementsByClassName("selectItem");

function selectedNode() {
    var attr = this.getAttribute("data-nodeId");
    attr = `ID = ${attr}`
    document.getElementById("optionSelectParent").innerHTML = attr;
    document.getElementById("optionNewName").innerHTML = attr;
    document.getElementById("optionDelete").innerHTML = attr;
    document.getElementById("optionNewParent").innerHTML = attr;
}
for (var i = 0; i < node.length; i++) {
    node[i].addEventListener('click', selectedNode);
}
//=====/collecting data=====
