document.getElementById("no").style.display = "none";
document.getElementById("yes").style.display = "none";

function generate()
{
    let x = Math.random();
    if(x < 0.1)
    {
        generate();
    }
    else
    {
        document.getElementById("show-pin").value = parseInt(x*10000);
    }
}

function checkNan(){
    let x = document.getElementById("show-pin").value;
    x = parseInt(x);
    if(isNaN(x))
    {
        alert("Please Generate Pin first");
        document.getElementById("match-pin").value = "";
    }
}

function buttonProcess(id){
    document.getElementById("match-pin").value += document.getElementById(id).innerText;
    checkNan();
    checkField();
}

function checkField(){
    if(document.getElementById("match-pin").value.length > 4)
    {
        alert("Please enter 4 digits");
        document.getElementById("match-pin").value = "";
        document.getElementById("show-pin").style.color = "red";
    }
    if(document.getElementById("match-pin").value.length == 4 && document.getElementById("show-pin").value == document.getElementById("match-pin").value)
    {
        document.getElementById("match-pin").style.color = "cyan";
        document.getElementById("show-pin").style.color = "cyan";
    };
}

document.getElementById("generate-pin").addEventListener("click", function(){
    generate();
    document.getElementById("no").style.display = "none";
    document.getElementById("yes").style.display = "none";

    document.getElementById("match-pin").style.color = "red";
    document.getElementById("show-pin").style.color = "red";
});

document.getElementById("match-pin").addEventListener("keyup", checkNan);
document.getElementById("btn-1").addEventListener("click", function(){buttonProcess("btn-1")});
document.getElementById("btn-2").addEventListener("click", function(){buttonProcess("btn-2")});
document.getElementById("btn-3").addEventListener("click", function(){buttonProcess("btn-3")});
document.getElementById("btn-4").addEventListener("click", function(){buttonProcess("btn-4")}); 
document.getElementById("btn-5").addEventListener("click", function(){buttonProcess("btn-5")}); 
document.getElementById("btn-6").addEventListener("click", function(){buttonProcess("btn-6")});
document.getElementById("btn-7").addEventListener("click", function(){buttonProcess("btn-7")}); 
document.getElementById("btn-8").addEventListener("click", function(){buttonProcess("btn-8")}); 
document.getElementById("btn-9").addEventListener("click", function(){buttonProcess("btn-9")}); 
document.getElementById("btn-0").addEventListener("click", function(){buttonProcess("btn-0")}); 
document.getElementById("btn-c").addEventListener("click", function(){
    document.getElementById("match-pin").value ="";});
document.getElementById("btn-remove").addEventListener("click", function(){
    let x = document.getElementById("match-pin").value;
    let y =[];
    for(let i = 0; i < x.length-1; i++)
    {
        y = y+x[i];
    }
    document.getElementById("match-pin").value = y;
});

document.getElementById("match-pin").addEventListener("keyup", function(){
    checkField();
});

document.getElementById("submit").addEventListener("click", function(){
    let x = document.getElementById("match-pin").value;
    let y = document.getElementById("show-pin").value;
    if(isNaN(parseInt(y)))
    {
        alert("Please Generate Pin first");
    }
    else if(x == y)
    {
        alert("Pin Matched");
        document.getElementById("match-pin").value = "";
        document.getElementById("show-pin").value = "";
        document.getElementById("try").innerText = "3";
        document.getElementById("yes").style.display = "block";
        document.getElementById("no").style.display = "none";
    }
    else
    {
        alert("Pin Not Matched");
        document.getElementById("no").style.display = "block";
        document.getElementById("yes").style.display = "none";
        document.getElementById("match-pin").value = "";
        document.getElementById("show-pin").value = "";
        let t = document.getElementById("try").innerText;
        t = parseInt(t);
        t--;
        if(t == 0)
        {
            alert("You have no more tries");
            document.getElementById("submit").setAttribute("disabled", "true");
            document.getElementById("submit").style.backgroundColor = "grey";
            document.getElementById("submit").style.border = "0px";
            document.getElementById("submit").innerText = "Locked";
        }
        document.getElementById("try").innerText = t;
    }
} );