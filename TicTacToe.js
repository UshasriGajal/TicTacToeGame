count=0
function run(){
    
    count++
    console.log(count)
    
    
    if(count%2==0){
        
        var currentId=document.getElementById(document.activeElement.getAttribute("id"))
        currentId.style.backgroundColor = "blue"
        currentId.disabled = true
        
        
        // x.setAttribute("id","styleBut"+currentElement)
        console.log(currentId.id)
        // var button=document.getElementById("currentElement")
        // // button.replaceWith(x)
        // // document.body.append(button)
        
        // button.setAttribute("id","stylebutton"+currentElement)
        console.log("yes")
        // button.style.backgroundColor="blue"
        // var x=document.getElementById("currentElement")
        // console.log(x)
        // x.setAttribute("class","butstyle")
        // x.addEventListener('click', function onClick() {
        //     x.style.backgroundColor = 'salmon';
        //     // btn.style.color = 'white';
        //   });
        // x.innerText="EDIT"
        // var x=document.getElementById("b")
        // console.log("Yes")
        // currentElement.setAttribute("class","butstyle")
        // currentElement.
    }
    else if(count%2!=0){
        var currentId=document.getElementById(document.activeElement.getAttribute("id"))
        currentId.style.backgroundColor = "red"
        currentId.disabled = true
        console.log(currentId.id)
        console.log("NO")
    }
    check();
}
var fill=0

function check(){

    fill++
    var elements = document.querySelectorAll(".bc1")
    var col = []
    for(var i=0;i<=8;i++){
        var x = elements[i].style.backgroundColor
        col.push(x)
    }
    console.log(col)
    if((col[0] == "red" && col[1] == "red" && col[2] == "red") || (col[3] == "red" && col[4] == "red" && col[5] == "red") || (col[6]== "red" && col[7]== "red" && col[8]== "red") ||
    (col[0]== "red" && col[3]== "red" && col[6]== "red") || (col[1]== "red" && col[4]== "red" && col[7]== "red") || (col[2]== "red" && col[5]== "red" && col[8]== "red") ||
    (col[0]== "red" && col[4]== "red" && col[8]== "red") || (col[2]== "red" && col[4]== "red" && col[6]== "red")){
       
        document.getElementById("result").innerHTML= "Red Wins"
    
    }
    
    else if((col[0] == "blue" && col[1] == "blue" && col[2] == "blue") || (col[3] == "blue" && col[4] == "blue" && col[5] == "blue") || (col[6]== "blue" && col[7]== "blue" && col[8]== "blue") ||
    (col[0]== "blue" && col[3]== "blue" && col[6]== "blue") || (col[1] == "blue" && col[4] == "blue" && col[7] == "blue") || (col[2] == "blue" && col[5] == "blue" && col[8] == "blue") ||
    (col[0]== "blue" && col[4]== "blue" && col[8]== "blue") || (col[2]== "blue" && col[4]== "blue" && col[6]== "blue")){
        document.getElementById("result").innerHTML= "Blue Wins"
    
    }
    else if(fill==9){
        // document.getElementById("result").innerHTML= " "
        document.getElementById("result").innerHTML= " No Winner"
        // alert("No Win/ner")
    }
    console.log(fill)
  
}

