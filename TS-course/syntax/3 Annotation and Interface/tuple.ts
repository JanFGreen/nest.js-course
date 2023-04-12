// Tuple - array like structure where each element represent some property of a record. Czzyli jest to tablica tablic gdzie kada tablica ma ustaloną kolejnosć elementów ( inaczej sie mona pogłubić)
let drink = {
  color: "brown",
  carbonated: true,
  sugar: "40",
};
// zamiana na tuplet ["brown",true,"40"] - tracimy czesc informacji w porownaniu do obiektu. Zeby zapewnić kolejność trzeba okreslić typy
// let pepsi:[string,boolean, number] = ["brown",true,"40"]

// !!! aby uniknąć powtarzania typów pepsi:[string,boolean, number]. Moemy stwoyć ALIAS type przez
// type Drink = [string,boolean, number] i zastosować krótszą formę. let pepsi:Drink = ["brown",true,"40"]

// Uywamy ich zadko, najczęsciej pzy pracy z plikami csv gdzie kazda linia to zestaw pewnych danych
