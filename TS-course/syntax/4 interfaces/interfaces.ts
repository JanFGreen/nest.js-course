// interfaces + classes daje nam silnie reuywalny kod z którym moemy pracować

// const oldCivic = {
//   name: "civic",
//   year: 2000,
//   broken: true,
// };

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`name: ${vehicle.name}`);
//   console.log(`year: ${vehicle.year}`);
//   console.log(`broken: ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

/// simplyfy above code
// interface zawsze piszemy z duej litery. Interface deiniuje nam jakie typy chcemy mieć dla danej rzeczy np obiektu. Sprawdza poprawność typu jak i poprawność property

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// czym róni się interface od aliasu w TS

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

//1.  w interfacach mozemy stosować inne typy a nie tylko wartości prymitywne

// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
// }

// i wtedy obiekt ma postać
// const oldCivic = {
//   name: "civic",
//   year: new Date(),
//   broken: true,
// };

//2. moeny stosować tez interface do funkcji - property name z nawiasami, przyklad summery(): string
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string; // oczekujemy ze funkcja summery będzie zwracać string
// }

//obiekt będzie miał postać
// const oldCivic = {
//   name: "civic",
//   year: new Date(),
//   broken: true,
//   summary(): string{
// return `Name ${this.name}`
//}
// };

//!!! Interface sprawdza tylko czy dany objekt zawiera element zawarty w interface, jezeli ma dodatkowe property to i tak bedzie interpretowany jako zgodny typ ( film 208)
