document.getElementById("btn").addEventListener("click",function(){
    if(document.getElementById("inputfield").value===""){
        alert("You must add something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=document.getElementById("inputfield").value;
        document.getElementById("unorderd").appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    document.getElementById("inputfield").value="";
    saveData();
});

document.getElementById("unorderd").addEventListener("click",function(e){
   if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
 }
 else if(e.targrt.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
 }
}
,false
);
function saveData(){
    localStorage.setItem("data",document.getElementById("unorderd").innerHTML);
}
function showData(){
    document.getElementById("unorderd").innerHTML=localStorage.getItem("data");
}
showData();