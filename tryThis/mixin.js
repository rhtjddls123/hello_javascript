class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("bowwow!");
  }
}
class Pet {
  feed(nutrient) {
    console.log(`feed to ${this.name} :`, nutrient);
  }
}
const jake = new Dog("Jake");
jake.bark();

const petMixin = {
  likesPeople() {
    console.log(`${this.name} like…`);
  },
};
Object.assign(jake, petMixin);

jake.likesPeople();
Object.defineProperty(Pet.prototype, "feed", { enumerable: true });
Object.assign(jake, Pet.prototype);
Object.defineProperty(Pet.prototype, "feed", { enumerable: false });
// Object.assign(jake, { feed: Pet.prototype.feed });
jake.feed("dog-food");
