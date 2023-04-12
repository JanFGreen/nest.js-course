//example of function which return error becuse argument is any type
// const add = (a,b)=>{

// }
//TS can check if we use proper types in functions but can't check if logic is proper
const add = (a: number, b: number): number => {
  return a + b;
};

//example for anoymus function
function divide(a: number, b: number): number {
  return a / b;
}

// void and never type
// some function can not return anything and than TS will check if there is return statment and validate it
const logger = (message: string): void => {
  console.log(message);
};

//never - function is never ended complittly
const throwError = (message: string): never => {
  throw new Error(message);
};
