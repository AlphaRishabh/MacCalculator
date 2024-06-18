import React, { useState } from 'react';
import Button from './AdvanceCalculator/Button';
import './index.css';
import Input from './AdvanceCalculator/Input';
import ConfettiExplosion from 'react-confetti-explosion';

function App() {
  // This useState is for the input value and calculations
  const [inputValue, setInputValue] = useState('');

  // This useState is for the memory(M+,M-, MR,MC)
  const [memory, setMemory] = useState(0);

  // This is for the confetti explosion
  const [showConfetti, setShowConfetti] = useState(false);

  // This useState is for the theme change
  const [theme, setTheme] = useState('#202020');

  // This array is for the explosion for operands containing 4 and 3
  const explosion =['3+4','3-4','3*4','3/4','3%4','4+3','4-3','4*3','4/3','4%3']
  const calculateFun = (item) => {
    switch (item) {
      case 'C':
        setInputValue('');
        break;
      case '=':
        calculateResult();
        break;
      case 'sin':
        handleTrigFunction('sin');
        break;
      case 'cos':
        handleTrigFunction('cos');
        break;
      case 'tan':
        handleTrigFunction('tan');
        break;
      case 'Rad':
        convertToRadians();
        break;
      case 'x²':
        handlePower(2);
        break;
      case 'x³':
        handlePower(3);
        break;
      case 'x^y':
        setInputValue((prev) => prev + '**');
        break;
      case 'e^x':
        handleExponential();
        break;
      case '1/x':
        handleReciprocal();
        break;
      case '2√x':
        handleSquareRoot(2);
        break;

      case '3√x':
        handleSquareRoot(3);
        break;
        
      case 'y√x':
        setInputValue((prev) => prev + '**(1/');
        break;

      case '10^x':
        handleTenPower();
        break;

      case 'sinh':
        handleTrigFunction('sinh');
        break;

      case 'cosh':
        handleTrigFunction('cosh');
        break;

      case 'tanh':
        handleTrigFunction('tanh');
        break;

      case 'x!':
        handleFactorial();
        break;

      case '+/-':
        handlePlusMinus();
        break;

      case 'π':
        insertPi();
        break;

      case 'Rand':
        insertRandom();
        break;

      case 'e':
        setInputValue('2.718281828459045');
        break;

        case 'EE':
        handleScientificFunction();
        break;

      case 'ln':
          handleLog('ln');
          break;
          
      case 'log10':
          handleLog('log10');
          break;
      
      case 'MC':
          setMemory(0);
          break;

      case 'M+':
          handleMemoryAdd();
          break;

      case 'M-':
          handleMemorySubtract();
          break;

      case 'MR':
          handleMemoryRecall();
          break;

      default:
        setInputValue((prev) => prev + item);
        break;
    }
  };

  function ChangeTheme() {
    if (theme === '#202020') {
      setTheme('#0c2461');
    } else {
      setTheme('#202020');
    }
  }
// Function for doing calculation
  const calculateResult = () => {
    try {
      if (inputValue.includes('%')) {
        handlePercentage();
        return;
      }
      const result = eval(inputValue);
      setInputValue(result);
  
      // Check if inputValue matches any element in explosion array
      if (explosion.includes(inputValue)) {
        setShowConfetti(true);
      } else {
        setShowConfetti(false);
      }
  
    } catch (error) {
      setInputValue('Error');
    }
  };
//Function For Finding 
  const handleFactorial = () => {
      const value = eval(inputValue);
      if (value < 0) {
        setInputValue('Error');
        return;
      }
      let result = 1;
      for (let i = 1; i <= value; i++) {
        result *= i;
      }
      setInputValue(result.toString());
    } 
    
// Function For Trigonometric Function
  const handleTrigFunction = (func) => {
  
      const radians = eval(inputValue);
      const result = Math[func](radians);
      setInputValue(result.toString());
    } 

// Function For Converting Radians
  const convertToRadians = () => {

      const degrees = eval(inputValue);

      if (isNaN(degrees)) {
        alert('Error');
        return;
      }
      const radians = (degrees * Math.PI) / 180;
      setInputValue(radians.toString());
    } 

// Function For Power
  const handlePower = (power) => {
    
      const value = eval(inputValue);
      const result = Math.pow(value, power);
      setInputValue(result.toString());
    }
    
  // Function For Exponential
  const handleExponential = () => {
   
      const value = eval(inputValue);
      const result = Math.exp(value);
      setInputValue(result.toString());
   
  }

  // Function For Reciprocal
  const handleReciprocal = () => {
  
      const value = eval(inputValue);
      const result = 1 / value;
      setInputValue(result.toString());
    } 

  // Function For Ten Power
  const handleTenPower = () => {
  
      const value = eval(inputValue);
      const result = Math.pow(10, value);
      setInputValue(result.toString());
  }

// Function For Square Root
  const handleSquareRoot = (root) => {
   
      const value = eval(inputValue);
      const result = Math.pow(value, 1 / root);
      setInputValue(result.toString());
    
  };

  
// Function For Plus Minus
  const handlePlusMinus = () => {
  
      const value = eval(inputValue);
      const result = -value;
      setInputValue(result.toString());
    } 

  // Function For Percentage
  // const handlePercentage = () => {
     
  //     const trimmedInput = inputValue.trim();
  //     const parts = trimmedInput.split(/[+\-]/);
  //     const lastPart = parts[parts.length - 1];
  //     const percentIndex = lastPart.lastIndexOf('%');
  
  //     if (percentIndex !== -1) {
  //       const num1 = parseFloat(lastPart.substring(0, percentIndex));
  //         const num2 = parseFloat(lastPart.substring(percentIndex + 1));
  //       const result = (num1 / 100) * num2;
  //       const updatedInput = trimmedInput.substring(0, trimmedInput.length - lastPart.length) + result.toString(); 
  //       setInputValue(updatedInput);
  //     } else {
  //       calculateResult();
  //     }
  //   } 

  const handlePercentage = () => {
  
      const value = inputValue.split('%');
  
      // Initialize the result
      let result = 0;
  
        const num1 = parseFloat(value[0]);
        const num2 = parseFloat(value[1]);

        result = eval(num1/100)*num2;
  
      // Update the input value with the result
      setInputValue(result);
    } 

  
  // Function For Inserting Pi
  const insertPi = () => {
    setInputValue(Math.PI);
  };

  // Function For Inserting Random Number
  const insertRandom = () => {
    setInputValue(Math.random());
  };

  const handleScientificFunction = () => {
      const value = eval(inputValue);
      const result = value.toExponential();
      setInputValue(result);
    } 
  // Function For Logarithm
  const handleLog = (type) => {
      const value = eval(inputValue);
      const result = type === 'ln' ? Math.log(value) : Math.log10(value);
      setInputValue(result.toString());
    } 

// Function For Memory Add
  const handleMemoryAdd = () => {
   
      const value = eval(inputValue);
      setMemory((prev) => prev + value);
      setInputValue('');
    } 
// Function For Memory Subtract
  const handleMemorySubtract = () => {
    
      const value = eval(inputValue);
      setMemory((prev) => prev - value);
      setInputValue('');
    } 

  // Function For Memory Recall
  const handleMemoryRecall = () => {
    setInputValue(memory);
  };

  return (
    <>
      <center>
        <div className='container' style={{backgroundColor:theme}}>
           {/* CHANGE THEME */}
          <button onClick={ChangeTheme} style={{borderStyle:"gove" , borderRadius:"30px"}}>T</button>
          
          <Input displayValue={inputValue}
           color = {theme}/>
           
          <Button calculate={calculateFun} />

          {/* Confetti Explosion  */}
          {showConfetti && <ConfettiExplosion />}  

        </div>
      </center>
    </>
  );
}

export default App;
