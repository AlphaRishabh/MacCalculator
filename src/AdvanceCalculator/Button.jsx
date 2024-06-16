import React from 'react';

function Button({ calculate }) {
    const numbers = ['(', ')', 'MC', 'M+', 'M-', 'MR', 'C', '+/-', '%', '/', '2nd', 'x²', 'x³', 'x^y',
        'e^x', '10^x', '7', '8', '9', '*', '1/x', '2√x', '3√x', 'y√x', 'ln', 'log10', '4', '5', '6', '-',
        'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+', 'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='
    ];

    const isArithmetic = (item) => ['+', '-', '*', '/','='].includes(item);
    const isNumber = (item) => ['0','1', '2', '3', '4','5','6','7','8','9','.'].includes(item);


    return (
        <>
            <div className="btn">
                {
                    numbers.map((item) => (
                        <button
                            key={item}
                            onClick={() => calculate(item)}
                            style={{
                                width: item === '0' ? '118px' : undefined,
                                backgroundColor: isArithmetic(item) ? 'rgb(255, 153, 0)' : isNumber(item) ? '#4b4b4b' : undefined,
                                color: isArithmetic(item) ? 'white' : undefined,
                                fontSize: isArithmetic(item) ? '30px' : undefined,
                            }}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
        </>
    );
}

export default Button;
