'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

console.log(account1);
 


// console.log( account1);

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];



// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


movements.forEach(function(mov, i){
  const type = mov > 0 ?'deposit':'withdrawal'; 
  // or
  // if(mov > 0){
  //   console.log('deposit');
  // }else{
  //   console.log('withdrawal');
  // }
//  console.log(a);

const html =`
<div class="movements__row">
  <div class="movements__type movements__type--${type}">
    ${i+1 } ${type}
  </div>
  <div class="movements__date">24/01/2037</div>
  <div class="movements__value">${mov}€</div>
</div> 
`;
containerMovements.insertAdjacentHTML("afterbegin",html)

})
/////////////////////////////////////////////////


const createUsername = function(accs){
  accs.forEach(function(acc){
    acc.usermane =acc.owner.toLocaleLowerCase()
    .split(' ')
    .map(name=>name[0])
    .join('')
  })
}
createUsername(accounts);
console.log(accounts);

let currentAccount;

btnLogin.addEventListener('click',function (e) {
  // console.log('skdjfsldkfjk');
  e.preventDefault();
  currentAccount=accounts.find(acc =>acc.usermane ==inputLoginUsername.value );
  // console.log(currentAccount.pin);
  if(currentAccount.pin ===Number(inputLoginPin.value)){
    console.log('login');
    labelWelcome.innerHTML=`welcome ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;
    inputLoginPin.value = inputLoginUsername.value='';
    inputLoginPin.blur();
  }else{
    console.log('wromg');
  }
})



// const calculateBalance = function(acc){
//   acc.

// }