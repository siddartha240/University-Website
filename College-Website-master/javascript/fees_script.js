function getInputValue(){

    let inputVal=document.getElementById("uid").value;
    let a=1;

    if(inputVal==1){
        document.getElementById("demo").innerHTML ="siddu";
        document.getElementById("demo1").innerHTML ="10000";
    }
    else if(inputVal==2)
    {
        document.getElementById("demo").innerHTML ="No Records Found";
        document.getElementById("demo1").innerHTML ="0";  
    }
    else if(inputVal==3)
    {
        document.getElementById("demo").innerHTML ="shiva";
        document.getElementById("demo1").innerHTML ="10000";   
    }

    else if(inputVal==4)
    {
        document.getElementById("demo").innerHTML ="ankit";
        document.getElementById("demo1").innerHTML ="10000";   
    }
    else if(inputVal==5)
    {
        document.getElementById("demo").innerHTML ="Manish";
        document.getElementById("demo1").innerHTML ="10000";   
    }
    else if(inputVal==6)
    {
        document.getElementById("demo").innerHTML ="VIKASH";
        document.getElementById("demo1").innerHTML ="20000";   
    }
    else{
        document.getElementById("demo").innerHTML ="No Records Found";
        document.getElementById("demo1").innerHTML ="0";
    }
    
}

