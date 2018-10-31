/* eslint "require-jsdoc": 0 */
export class Person {
  constructor(fullName) {
    this.nameComponents = fullName.split(' ');
  }
  getFirstName() {
    this.firstName = this.nameComponents[0];
    return this.nameComponents[0];
  }
  getLastName() {
    this.lastName = this.nameComponents[1];
    return this.nameComponents[1];
  }
  setFirstName(first) {
    this.firstName = first;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
  setFullName(firstAndLast) {
    this.nameComponents = firstAndLast.split(' ');
    let nameComponents = firstAndLast.split(' ');
    this.firstName = nameComponents[0];
    this.lastName = nameComponents[1];
  }
  getFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this.fullName;
  }
}

