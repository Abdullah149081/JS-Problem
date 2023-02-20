const multiply = (n, n1, n2) => n * n1 * n2;

const result = multiply(5, 5, 8);
console.log(result);

/* 
2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.  */

const templateString = `I am a web developer.
I love to code.
I love to eat vitamin Food  
`;

console.log(templateString);

/* 3) Write an arrow function that will take 2 parameters: One parameter  will come from you and the other parameter will be a default  parameter. Add these two parameters and return the result.  */

const defaultParameter = (first, second = 5) => first + second;

const defaultResult = defaultParameter(5);
console.log(defaultResult);
