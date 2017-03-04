//variables
var output = document.getElementById("output");
var input = document.getElementById("input");
var bio = document.getElementsByClassName("bio");
//Create an array of objects that represents famous people
var famous =[
   {
   title: "Mr.",
   name: "Nikola Tesla",
   bio: "Nikola Tesla was a Serbian American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/689px-N.Tesla.JPG",
   lifespan: {
   birth: 1747,
   death: 1797
     }
  },
  {
  title: "Philosopher",	
  name: "Aristotle",
  bio: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
  image: "http://www.thefamouspeople.com/profiles/images/aristotle-17.jpg",
  lifespan: {
  birth: "384 BC",
  death: "322 BC"
     }
  },
  {
  title: "Theologian",
  name: "Erasmus",
  bio: "When I get a little money I buy books; and if any is left I buy food and clothes.",
  image: "http://kingofwallpapers.com/erasmus/erasmus-001.jpg",
  lifespan: {
  birth: 1466,
  death: 1536
     }
  },
  {
  title: "Dr.",
  name: "Martin Luther King Jr.",
  bio: "Martin Luther King Jr. was an American Baptist minister and activist who was a leader in the African-American Civil Rights Movement.",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
  lifespan: {
  birth: 1929,
  death: 1968	
    }
  },
  {
  title: "President",
  name: "George Washington",
  bio: "George Washington was the first President of the United States, the Commander-in-Chief of the Continental Army during the American Revolutionary War, and one of the Founding Fathers of the United States.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/740px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
  lifespan: {
  birth: 1732 ,
  death: 1799
    }  
  }
]

for (var i= 0; i<famous.length; i++) {
    newPerson="";
  	newPerson+=`<div class="personContainer" id="person-${i}">`
  	newPerson+= `<header> ${famous[i].name} -${famous[i].title}</header>`
	newPerson+= `<section class="bio"> ${famous[i].bio}  </section>`
  	newPerson+= `<image src=${famous[i].image} </section>`
  	newPerson+= `<footer> ${famous[i].lifespan.birth} - ${famous[i].lifespan.death}  </footer>`
  	newPerson+=`</div>`
    output.innerHTML += newPerson;
   
}

	var bio = document.getElementsByClassName("bio");

  document.body.addEventListener("click",function(event){
   if(event.target.className==="personContainer"){
   	console.log("add border is execute");
   	
   	//when click in anny element focus in the text box.
    input.focus();
    input.value=
    //add a class to add aborder to the element
    event.target.className += " addBorder selected ";
    }
    //remove the border when click again
    else if(event.target.parentNode.classList.contains("personContainer")){
    	console.log("parent node",event.target.parentNode);
    event.target.parentNode.classList.remove('addBorder');
    console.log('remove border is execute')
    } 
    });


// document.body.addEventListener("click",function(event){
//    if(event.target.className==="personContainer"){
//    	console.log("add border is execute");
   	
//    	//when click in anny element focus in the text box.
//     input.focus();
   
//     //add a class to add aborder to the element
//     event.target.parentNode.classList.add("addBorder");
//     }
//     //remove the border when click again
//     else if(event.target.className==="personContainer addBorder"){
//     	console.log("parent node",event.target.parentNode);
//     event.target.className -= "addBorder";
//     console.log('remove border is execute')
//     } 
//     });



 	input.addEventListener("keydown",function(){
 		for (var i= 0; i<famous.length; i++) {
 			if (event.target.className==="selected"){
 				document.getElementsByClassName('bio').innerHTML += input.value;
 				console.log("add text");
 			}
 		}
 		
 		console.log(input.value);
 	});
 	
//  	for (var i= 0; i<famous.length; i++) {
// if (document.body.className==="bio"){
// input.onkeyup = function(){
//     event.target.innerHTML += input.value;	
// }

// }};


