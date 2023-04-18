// Klasa działa jako bluprint dla objektów (rzeczy) filmy 211-216

class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();

vehicle.drive();
vehicle.honk();

// klas w ts są troszkę inne ni klasy w js2015
// dziedziczenie

class Car extends Vehicle {
  // car przejmuje metody clasy Vehicle
  //mozemy te nadpisać metody z klasy po której dziedziczymy
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car();

car.drive();
car.honk();

// 2. Class modyfikatory do metod !!!!
// public, private, protected - jeśli klasa rodzic ma metode jako public to class child będzie miało error jeśli rozszeenie tej metody będzie private
// moe te się odnośc do pol w klasie np: constructor(public color: string){} - i nie musimy inicjalizować property color w klasie? ( forma skrutu by nie pisać property w kilku miejscach)

// .this odnosi się do elementów klasy ( np zmienna lub inna klasa w )

//3. Fields in class
// fields in class są dziwnie definiowane, jak property w obiekcie ( moe bo klasa to obiekt) na przykład color: string = 'red'
// Class posiada te konstruktry, które są inicjowane w momenicie inicjalizacji klasy np jak zrobimy coś takiego const vehicle = new Vehicle(); to co wpiszemy w () mozemy zainicjować np:
//constructor(color: string){
//     this.color = color;
// }
// i wtedy mona zrobić const vehicle = new Vehicle('orange');

//4. Pola w dziedziczeniu
// jeśli klasa child nie ma konstruktora to za kadym razem jak będzie inicjalizowany obiekt tej klasy to wywoła on konstruktora klasy rodzic ( o ile jest)
// tworzenie konstruktora klasy child wymaga wywołania metody super() zeby dostac to co wywoluje konstruktor klasy rodzic
//pdzyklad
//class Car extends Vehicle{
//     constructor(public wheels: number, color: string){
//         super(color)
//     }
// }
