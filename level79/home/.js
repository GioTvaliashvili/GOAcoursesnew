// utils1.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

// utils2.js
export function isEven(n) {
  return n % 2 === 0;
}

export function isOdd(n) {
  return n % 2 !== 0;
}

export function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// utils3.js
export function greet(name) {
  return `Hello, ${name}!`;
}

export function toUpper(s) {
  return String(s).toUpperCase();
}

export function reverseString(s) {
  return String(s).split('').reverse().join('');
}

// parityRunner.js
import readline from 'readline';
import { isEven, isOdd } from './utils2.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter an integer: ', (answer) => {
  const n = Number(answer.trim());
  if (Number.isNaN(n) || !Number.isInteger(n)) {
    console.log('Please enter a valid integer.');
  } else {
    console.log(`Number ${n} is ${isEven(n) ? 'even' : 'odd'}.`);
  }
  rl.close();
});

// factoryA.js
export function createSumFunction(a, b) {
  return function () {
    return a + b;
  };
}

// useFactory.js
import { createSumFunction } from './factoryA.js';

const sumFn = createSumFunction(7, 13);
console.log('Sum function result:', sumFn());

// simpleCalc.js
const argv = process.argv.slice(2);
if (argv.length === 3) {
  const [aRaw, op, bRaw] = argv;
  const a = Number(aRaw);
  const b = Number(bRaw);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('Usage: node simpleCalc.js 4 + 5');
  } else {
    let result;
    switch (op) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b === 0 ? 'Error: division by 0' : a / b; break;
      case '%': result = a % b; break;
      case '^': result = Math.pow(a, b); break;
      default: result = 'Unsupported operator';
    }
    console.log(`${a} ${op} ${b} = ${result}`);
  }
}

// advancedCalc.js
import readlinePromises from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rlp = readlinePromises.createInterface({ input, output });

async function advancedCalculator() {
  try {
    const aRaw = await rlp.question('Enter first number: ');
    const bRaw = await rlp.question('Enter second number: ');
    const op = await rlp.question('Choose operator (+, -, *, /, %, ^): ');

    const a = Number(aRaw.trim());
    const b = Number(bRaw.trim());

    if (Number.isNaN(a) || Number.isNaN(b)) {
      console.log('Please enter two valid numbers.');
      rlp.close();
      return;
    }

    let result;
    switch (op.trim()) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b === 0 ? 'Error: division by 0' : a / b; break;
      case '%': result = a % b; break;
      case '^': result = Math.pow(a, b); break;
      default: result = 'Unsupported operator';
    }

    console.log(`Result: ${result}`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    rlp.close();
  }
}

advancedCalculator();
