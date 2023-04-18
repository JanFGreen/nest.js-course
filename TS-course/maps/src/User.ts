import faker from "@faker-js/faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.faker.name.fullName();
    this.location = {
      lat: parseFloat(faker.faker.address.latitude()),
      lng: parseFloat(faker.faker.address.longitude()),
    };
  }
}
