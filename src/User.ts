import faker from "faker"; // imports the 'default export' and names it faker
// however 'default export' is only usual for NPM and ES6 modules, it's uncommon for TS *

// import * as faker from "faker"; // should work too?

// * sidenote: convention in TypeScript is to NEVER use the 'default' keyword
// which means NO DEFAULT EXPORTS, for example:  export default "test";
// the reason for it is to not worry when to use import without curly braces {}

import { Mappable } from "./CustomMap"; // import needed because of 'implements'


// Keyword "implements" used for additional type check.
// In this case class 'User' has to implement (satisfy) interface 'Mappable'.
export class User implements Mappable {
  name: string;
  location: {
    // objects of properties don't get initialized on their own
    // so "lat" and "lng" is undefined, we define it here only
    // for type checking and overview
    lat: number; // latitude
    lng: number; // longitude
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    // this.location.lat = 123 WON'T WORK _after_ compilation because .lat is undefined, see above
    // Uncaught TypeError: Cannot set property 'lat' of undefined

    this.location = {
      lat: parseFloat( faker.address.latitude() ),
      lng: parseFloat( faker.address.longitude() )
    };
  }

  markerContent(): string {
    return `<strong style="color:${this.color}">User name:</strong> ${this.name}`;
  }

}
