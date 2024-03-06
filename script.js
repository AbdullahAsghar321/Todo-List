const inputBox = document.getElementById("input-box")
const listContainer=  document.getElementsByClassName("list-container")[0]
function addTask(){
    if(inputBox.value === ''){
        alert("please write Something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span) ;
    }
    inputBox.value = ""
    saveData();
}
listContainer.addEventListener("click" , function(dets){
    if(dets.target.tagName === "LI"){
        dets.target.classList.toggle("checked")
    }
    else if(dets.target.tagName === "SPAN"){
        dets.target.parentElement.remove();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML  = localStorage.getItem("data")
}
showTask();
