class Person {
  constructor(
    name,
    address,
    educationDetails,
    Dob,
    contactDetails,
    nationality
  ) {
    this.name = "name";
    this.address = "address";
    this.educationDetails = "educationDetails";
    this.Dob = "Dob";
    this.contactDetails = "contactDetails";
    this.nationality = "nationality";
  }
  type() {
    console.log(this.educationDetails, "to save life....");
  }
}
const Person1 = new Person(
  "Nikita",
  "chennai",
  "Doctor",
  "05/06",
  "Reception",
  "Indian"
);
console.log(Person1);
