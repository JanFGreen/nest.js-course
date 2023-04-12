let apples: number = 5; //type annotation
//apples = "test"; // error example

// annotation: type the same as value - interesting
let nothing: null = null;
let nothing2: undefined = undefined;

// objet annotation
let now: Date = new Date();
// array - we want array of some type for example string
let colors: string[] = ["red", "green", "blue"];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function - składnia dość dziwna -  annotation to fragment (i:number) => void

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// !!! type interface - jeśli deklaracja const color i inicjalizacja są w tej samej lini  to TS będzie wiedział jakiego typu jest zmienna!!
const color = "red"; // to pozwala działać type interface

//Kiedy uzywac type annotation a kiedy type interface (ZAWSZE)
// type annotation - 1) gdy funkcja zwraca typ any a my potrzebujemy mieć jasny typ return przykład json.parse()
//                   2) kidy deklarujemy zmienną w jednym miejscu a inicjalizujemy w innym
//                    3) kiedy chcemy zeby zmienna miała typ który nie moze wywnioskować?

//Annotation usecase
// 1) ANY example
const json = '{"x": 10, "y":20}';
//const cordinates = JSON.parse(json); // ta metoda zwraca any  poniewa moe zwracać string, boolean, number wiec agrguje wszystko do any type
const cordinates: { x: number; y: number } = JSON.parse(json); // fix for any tupe now it will return number and chec it
console.log(cordinates);
// jak to naprawić 1) dodać type annotation do cordinates
//2) deklaration and inicjalization w róznych liniach
let words = ["red", "green", "blue"];
//let foundWord;// to ma any tame
let foundWord: boolean; // fix declaration and inicjalization in separate lines

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
//3) Variable whose type cannot be inferred corectly - przypadek w którym mogą być przypisane dwa typy
// zmiennej do jednej zmiennej w zaleności od warunku i TS nie zrozumie co jaki typ trzeba zastosować
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
