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

let likePet= prompt('does i like pet?yes/no or y/n').toLowerCase();
while(likePet !=='yes'&& likePet !=='y'&& likePet !=='no' && likePet !=='n'){likePet=prompt('Does i like pet');}
/*if(likePet === 'n' || likePet === 'no'){console.log('yes i dont like it ');}
else if(likePet ==='yes' || likePet ==='y'){console.log('no i do not like it');}
*/if(likePet === 'n' || likePet === 'no'){alert('yes i dont like it ');}
else if(likePet ==='yes' || likePet === 'y'){alert('no i do not like it');}


let myMajor= prompt('Does my major is Software Engineering?').toLowerCase();
while(myMajor !== 'yes' && myMajor !== 'y' && myMajor !== 'no' && myMajor !=='n'){myMajor=prompt('Does my major is software engineering ? ');}
/*if(myMajor ==='n' || myMajor ==='no'){console.log('no it is Software Engineering');}
else if(myMajor === 'yes'|| myMajor === 'y'){console.log('yes it is software engineering');}
*/if(myMajor === 'n' || myMajor === 'no'){alert('no it is Software Engineering');}
else if(myMajor === 'yes'|| myMajor === 'y'){alert('yes it is software engineering');}

let myAge= prompt('Does my age is 24 ?').toLowerCase();
while(myAge !== 'yes' && myAge !== 'y' && myAge !== 'no' && myAge !== 'n'){myAge=prompt('Does my age is 24 ? ');}
/*if(myAge === 'n' || myAge === 'no'){console.log('no it is 24');}
else if(myAge === 'yes'|| myAge === 'y'){console.log('yes it is 24 ');}
*/if(myAge === 'n' || myAge === 'no'){alert('no it is 24');}
else if(myAge === 'yes'|| myAge === 'y'){alert('yes it is 24 ');}


let likeDriving= prompt('Does i like driving ?').toLowerCase();
while(likeDriving !== 'yes' && likeDriving !== 'y' && likeDriving !=='no' && likeDriving !== 'n'){likeDriving=prompt('Does i like driving ?');}
/*if(likeDriving === 'n' || likeDriving === 'no'){console.log('no i like driving ');}
else if(likeDriving ==='yes'|| likeDriving === 'y'){console.log('yes i like driving');}
*/if(likeDriving === 'n' || likeDriving === 'no'){alert('no i like driving ');}
else if(likeDriving === 'yes'|| likeDriving === 'y'){alert('yes i like driving');}

let myHobby= prompt('Does my hobby is Swimming ?').toLowerCase();
while(myHobby !== 'yes' && myHobby !== 'y' && myHobby !== 'no' && myHobby !== 'n'){myHobby=prompt('does my hobby is swimming?');}
/*if(myHobby === 'n' || myHobby === 'no'){console.log('no it is swimming');}
else if(myHobby === 'yes'|| myHobby === 'y'){console.log('yes it is swimming ');}
*/if(myHobby === 'n' || myHobby === 'no'){alert('no it is swimming');}
else if(myHobby === 'yes'|| myHobby === 'y'){alert('yes it is swimming ');}


alert('yes '+firstName+' we finished the game .');




