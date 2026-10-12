const icome = 170000;
const creditScore = 700; 
const hasCoSigner = true

if (creditScore < 500){
    console.log("отказано")
}
else {
    if(icome<50000){
     console.log("отказано");
    }
    else if(icome > 150000 && creditScore>=700){
        console.log("одобрено");
    }
    else if (icome>= 50000 && icome <= 149999 && hasCoSigner){
        console.log("одобрено");
    }
}
