const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
// we can use
const age1 = profile.age;
//destructuring - musimy powturzyć strukture obiektu któroa destruujemy
const { age }: { age: number } = profile;
//destructuring  of coords
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
