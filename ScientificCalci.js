const result =document.getElementById("output");
const btn =document.querySelectorAll(".btn");

for(item of btn){
    item.addEventListener("click",(e)=>{
        btn_text=e.target.innerText;
        if(btn_text=="x"){
            btn_text="*";
        }

        if(btn_text=="÷"){
            btn_text="/";
        }
        result.value += btn_text;
    });
}

function calculate(){
    try{
        result.value = eval(result.value);
    }catch(error){
        alert("Invalid");
    }
}

function allClear(){
    result.value ="";
}

function delLastChar(){
    result.value = result.value.slice(0,-1);
}

function power(){
    result.value =Math.pow(result.value,2);
}

function sin(){
    result.value =Math.sin(result.value);
}

function cos(){
    result.value =Math.cos(result.value);
}

function tan(){
    result.value =Math.tan(result.value);
}

function log(){
    result.value =Math.log(result.value);
}

function pi(){
    result.value =Math.PI;
}

function exp(){
    result.value =Math.exp(result.value);
}

function fact(){
    var i,num,f;
    f=1;
    num=result.value;
    for(i=1;i<=num;i++){
        f=f*i;
    }
    i=i-1;
    result.value=f;
}

function backspace(){
    result.value =result.value.slice(0,-1);
}