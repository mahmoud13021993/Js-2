// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);
// var x = console.log(genrateQuta[i]);
// console.log(x)
// document.getElementById("quta").innerHTML= `${x}`
// var buton=document.getElementById("quta");
// var randcol= "";
// var allchar="0123456789ABCDEF";

// buton.addEventListener("click",myFun);

// function myFun(){

// for(var i=0; i<6; i++){
//    randcol += allchar[Math.floor(Math.random(genrateQuta[i])+1)];
// }
// document.getElementById("quta").innerHTML= "#"+randcol;
// }
function changeText() {
  var genrateQuta= [
    {author: 'Jim Rohn', 
     quote: 'Beware of what you become in pursuit of what you want.'
    },
    {author: 'Epictetus', 
     quote: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {author: 'Frank Sinatra', 
     quote: 'The best revenge is massive success.'
    },
    {author: 'Wayne Gretzy', 
     quote: 'You miss 100% of the shots you don\'t take.'
    },
    {author: 'Nelson Mandela', 
     quote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {author: 'Elbert Hubbard', 
     quote: 'Do not take life too seriously. You will not get out alive.'
    },
];
    for(i=0;i<genrateQuta.length;i++) {
    var random = Math.floor(Math.random() * genrateQuta.length);
    qutaValue = genrateQuta[random].quote;
    authorValue = genrateQuta[random].author;
   }   
   document.getElementById("quta").innerHTML= `"${qutaValue}" `;
   document.getElementById("writer").innerHTML= `--${authorValue} `;
}


