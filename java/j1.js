'use strict';

let firstName = prompt('What is your name?');
alert('Welcome ' + firstName + ' let start our guessing game');

/*it's work just another way for the operator it is terrnary!
let likePet = prompt('Does i like pet?yes/no or y/n');
likePet = likePet.toLowerCase();
while(likePet.toLowerCase() !== 'yes' && likePet.toLowerCase() !== 'y' && likePet.toLowerCase() !=='no' && likePet.toLowerCase() !== 'n'){
  likePet=prompt('Does i like pet?yes/no or y/n');
}
alert((likePet==='yes'||likePet==='y')?'no i do not !':'yes i do not like it');
*/

let likePet= prompt('does i like pet?yes/no or y/n');
while(likePet.toLowerCase()!=='yes'&& likePet.toLowerCase()!=='y'&&likePet.toLowerCase()!=='no'&&likePet.toLowerCase()!=='n'){likePet=prompt('does i like pet');}
/*if(likePet.toLowerCase()==='n' || likePet.toLowerCase()==='no'){console.log('yes i dont like it ');}
else if(likePet.toLowerCase()==='yes'||likePet.toLowerCase()==='y'){console.log('no i do not like it');}
*/if(likePet.toLowerCase()==='n' || likePet.toLowerCase()==='no'){alert('yes i dont like it ');}
else if(likePet.toLowerCase()==='yes'||likePet.toLowerCase()==='y'){alert('no i do not like it');}


let myMajor= prompt('Does my major is Software Engineering?');
while(myMajor.toLowerCase()!=='yes'&& myMajor.toLowerCase()!=='y'&&myMajor.toLowerCase()!=='no'&&myMajor.toLowerCase()!=='n'){myMajor=prompt('Does my major is software engineering ? ');}
/*if(myMajor.toLowerCase()==='n' || myMajor.toLowerCase()==='no'){console.log('no it is Software Engineering');}
else if(myMajor.toLowerCase()==='yes'||myMajor.toLowerCase()==='y'){console.log('yes it is software engineering');}
*/if(myMajor.toLowerCase()==='n' || myMajor.toLowerCase()==='no'){alert('no it is Software Engineering');}
else if(myMajor.toLowerCase()==='yes'||myMajor.toLowerCase()==='y'){alert('yes it is software engineering');}

let myAge= prompt('Does my age is 24 ?');
while(myAge.toLowerCase()!=='yes'&& myAge.toLowerCase()!=='y'&&myAge.toLowerCase()!=='no'&&myAge.toLowerCase()!=='n'){myAge=prompt('Does my age is 24 ? ');}
/*if(myAge.toLowerCase()==='n' || myAge.toLowerCase()==='no'){console.log('no it is 24');}
else if(myAge.toLowerCase()==='yes'||myAge.toLowerCase()==='y'){console.log('yes it is 24 ');}
*/if(myAge.toLowerCase()==='n' || myAge.toLowerCase()==='no'){alert('no it is 24');}
else if(myAge.toLowerCase()==='yes'||myAge.toLowerCase()==='y'){alert('yes it is 24 ');}


let likeDriving= prompt('Does i like driving ?');
while(likeDriving.toLowerCase()!=='yes'&& likeDriving.toLowerCase()!=='y'&&likeDriving.toLowerCase()!=='no'&&likeDriving.toLowerCase()!=='n'){likeDriving=prompt('Does i like driving ?');}
/*if(likeDriving.toLowerCase()==='n' || likeDriving.toLowerCase()==='no'){console.log('no i like driving ');}
else if(likeDriving.toLowerCase()==='yes'||likeDriving.toLowerCase()==='y'){console.log('yes i like driving');}
*/if(likeDriving.toLowerCase()==='n' || likeDriving.toLowerCase()==='no'){alert('no i like driving ');}
else if(likeDriving.toLowerCase()==='yes'||likeDriving.toLowerCase()==='y'){alert('yes i like driving');}

let myHobby= prompt('Does my hobby is Swimming ?');
while(myHobby.toLowerCase()!=='yes'&& myHobby.toLowerCase()!=='y'&&myHobby.toLowerCase()!=='no'&&myHobby.toLowerCase()!=='n'){myHobby=prompt('does my hobby is swimming?');}
/*if(myHobby.toLowerCase()==='n' || myHobby.toLowerCase()==='no'){console.log('no it is swimming');}
else if(myHobby.toLowerCase()==='yes'||myHobby.toLowerCase()==='y'){console.log('yes it is swimming ');}
*/if(myHobby.toLowerCase()==='n' || myHobby.toLowerCase()==='no'){alert('no it is swimming');}
else if(myHobby.toLowerCase()==='yes'||myHobby.toLowerCase()==='y'){alert('yes it is swimming ');}


alert('yes '+firstName+' we finish the game');




