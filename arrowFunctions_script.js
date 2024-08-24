// Numele plural
let animal;
let exception1= 'goose';
let exception2= 'sheep';

function getPlural (numar, animal){
    if (animal === exception1 && numar > 1){
        return `I have ${numar} geese`;
    } else if (animal === exception2){
        return `I have ${numar} sheep`;
    }
    if (numar > 1 || numar === 0 ){
        return `I have ${numar} ${animal}s`;
    }  else {
        return `I have ${numar} ${animal}`;
    }
};
console.log(getPlural(6, 'pig'));
console.log(getPlural(0, 'hamster'));
console.log(getPlural(1, 'parrot'));
console.log(getPlural(10, 'sheep'));

// Pensionare
let numele;
let anulNasterii;
let isF;
function personAge(anulNasterii){
    age = 2024 - anulNasterii;
    return `${age}`;
};
//console.log(personAge(1979)); 

function retiringAge(isF){
    return isF ? 64 : 67;
};
//console.log(retiringAge(66)); 

function retirementStatus(numele, anulNasterii, isF){
    let age = personAge(anulNasterii);
    let retire = retiringAge(isF);
    let untilRetirement = retire - age;
    if (age <= 18){
        return `${numele} e minor/a, are ${age} ani, pina la pensie mai are ${untilRetirement} ani`;
    } else if ( retire <=age){
        return `${numele}  are ${age} ani, e la pensie, poate sa se odihneasca deja`;
    } else {
        return`${numele} are ${age} ani, pina la pensie mai are ${untilRetirement} ani`;
    }
};

console.log(retirementStatus('Sergiu', 1979));
console.log(retirementStatus('Anastasia', 1963));
console.log(retirementStatus('Andreea', 2010));
console.log(retirementStatus('Anton', 1910));




// Rock Paper Scissors Arro functions
let rock;
let paper;
let scissors;
const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else {
        return 'Please check your input';
    }
};
//console.log(getUserChoice('PAPER'));
const getComputerChoice = () => {
    let computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'paper';
        break;
        case 2: 
            return 'scissors';
        break;
        default:
            console.log('Computer broke');
    }
}
//console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'It is a tie';
  } 
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
        return 'The computer won';
    }else {
        return 'You won';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
        return 'The computer won';
    }else {
        return 'You won';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'paper'){
        return 'You won';
    }else {
        return 'The computer won';
    }
  }
}

const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}.`);
    console.log(`Computer chose: ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();
