(Symbol.metadata as any) ??= Symbol("Symbol.metadata");

import { jsonify, serialize } from "./serializer";

class Person {
  public readonly firstName: string;
  public readonly lastName: string;

  @serialize
  public readonly age: number;

  @serialize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  toJSON() {
    return jsonify(this);
  }

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

console.log(Person[Symbol.metadata]);
const person = new Person("Usman", "Rehman", 98);
console.log(person.toJSON());