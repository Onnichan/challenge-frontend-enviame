const btnShow = document.getElementById("btnShow");
const grid = document.getElementById("grid");

btnShow.addEventListener("click", e => {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const primes = showPrimeNumbers(Number(from), Number(to));
  console.log(primes);
  printPrimeNumbers(primes);
});

function showPrimeNumbers(from, to) {
  const primes = [];
  for (let i = from + 1; i < to; i++) {
    let count = 0;
    for (let j = i; j >= 1; j--) {
      if (i % j == 0) {
        count++;
        console.log('asd');
      }
    }
    if (count == 2) {
      primes.push(i);
      // break;
    }
  }
  return primes;
}

// function show(from = 3, to = 15) {
//   return range(from, to).reduce((a,b) => {

//   });
// }

//This function generates a new number array between of initial number and final number
// by salt of one
function range(from, to) {
  return Array.from({ length: to - from - 1 }, (v, i) => from + i + 1);
}

const printPrimeNumbers = primes => {
  let template = "";
  primes.forEach(prime => {
    template += `<div class='grid__item'>${prime}</div>`;
  });
  grid.innerHTML = template;
};

function onlyNumbers(e) {
  return e.charCode >= 48 && e.charCode <= 57;
}
