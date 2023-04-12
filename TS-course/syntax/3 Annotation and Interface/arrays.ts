const carMakers = ["ford", "toyota", "chevy"];
//const carMakers: string = ['ford', 'toyota', 'chevy']
// tak nie mona bo inerface rozpoznaje ze to ma być tablica string carMakers[3] = 4;

// tablica te moe przyjmować obiekty
const dates = [new Date(), new Date()];

// dablice kwadratowe
//const carsByMake: string[][] = [] mona dosdać adnotacje albo ts się sam domyśli po danych

const carsByMake = [["f140"]];

//Why we more highlight arrays
//1. Help with interence when extracting values - ts wie jaki typ będzie
const cars = carMakers[0];
const myCar = carMakers.pop();
//2. prevent againt incompatible values
// carMakers.push(100); line with ERROR
//3. we can get help with build in functions like map, forEach, reduce
carMakers.map((car: string): string => {
  return car; //ts wie e to ma być string, daje nam to automatyczny dostęp do kilku wbudowanych funkcji dla danego typu
});
// Flexible - array can still contain multiple different types
const importantDates: (Date | string)[] = [new Date(), "2023-03-03"]; // mona zastosować daw typy w tej tablicy
