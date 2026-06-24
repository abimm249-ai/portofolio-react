const roles = [
    "Admin Gudang",
    "IT Support",
    "Front End Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if(charIndex < roles[roleIndex].length){

        typing.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex > 0){

        typing.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(type,500);

    }

}

typing.textContent = "";

type();