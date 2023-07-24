var count = 0
var fill=[]
function run(){
   count+=2
   fill.push(count)
   console.log(fill)
   console.log(count)
    var elements = document.querySelectorAll(".bc1")
    var ids=[]
    console.log(ids)
    if(count%2===0){
        var currentId=document.getElementById(document.activeElement.getAttribute("id"))
        currentId.style.backgroundColor = "red"
        console.log(currentId.id)
        console.log((ids))
    }
for(var i=0;i<=8;i++){
    if((elements[i].style.backgroundColor!=="red") && (elements[i].style.backgroundColor!=="blue")){
    ids.push(elements[i].id)
    }
}
if(count<10){
        var randomIndex = Math.floor(Math.random() * ids.length)
        var randomId = ids[randomIndex];
        var randomElement = document.getElementById(randomId)
        randomElement.style.backgroundColor = "blue"
        console.log(randomElement.id);
        console.log("NO")
}
    check();
}
function check(){
    console.log(count)
    var elements = document.querySelectorAll(".bc1")
    var col = []
    for(var i=0;i<=8;i++){
        var x = elements[i].style.backgroundColor
        col.push(x)
    }
    console.log(col)
    var restart=document.createElement("button")
        restart.innerText+="Restart"
        restart.setAttribute("class","restart")
        restart.addEventListener('click',restart_page)
    if((col[0] == "red" && col[1] == "red" && col[2] == "red") || (col[3] == "red" && col[4] == "red" && col[5] == "red") || (col[6]== "red" && col[7]== "red" && col[8]== "red") ||
    (col[0]== "red" && col[3]== "red" && col[6]== "red") || (col[1]== "red" && col[4]== "red" && col[7]== "red") || (col[2]== "red" && col[5]== "red" && col[8]== "red") ||
    (col[0]== "red" && col[4]== "red" && col[8]== "red") || (col[2]== "red" && col[4]== "red" && col[6]== "red")){
       
        document.getElementById("result").innerHTML= "Red Wins"
        document.getElementById("result").append(restart)
    
    }
    else if((col[0] == "blue" && col[1] == "blue" && col[2] == "blue") || (col[3] == "blue" && col[4] == "blue" && col[5] == "blue") || (col[6]== "blue" && col[7]== "blue" && col[8]== "blue") ||
    (col[0]== "blue" && col[3]== "blue" && col[6]== "blue") || (col[1] == "blue" && col[4] == "blue" && col[7] == "blue") || (col[2] == "blue" && col[5] == "blue" && col[8] == "blue") ||
    (col[0]== "blue" && col[4]== "blue" && col[8]== "blue") || (col[2]== "blue" && col[4]== "blue" && col[6]== "blue")){
        document.getElementById("result").innerHTML= "Blue Wins"
        document.getElementById("result").append(restart)
    }
    else if(fill.length==5){
        document.getElementById("result").innerHTML= " No Winner"
        document.getElementById("result").append(restart)
    }
    console.log(fill)
    console.log(count)
}
function restart_page(){
    location.reload()
}

