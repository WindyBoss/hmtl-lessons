// There is a possibility to build the class tree with the main class and other classes, that are doing from it.
// the example is MMO PRG game --> Hero --> Human/Shapeshifter --> Mag/warrior --> berserk/shaman

class Hero {
    constructor({ name = 'hero', exp = 0 } = {}) {
        this.name = name;
        this.exp = exp;
    }

    gainExp(amount) { // is saved in __proto__
        // console.log(`${this.name} gained ${amount} of experience`);
        this.exp += amount;
    }
}

// The next class is the child class of the father class Hero
class Warrior extends Hero { // the syntax of father class (extends)
    constructor({ weapon, ...restProbs}) { // helps to retranslate unnecessary variables to the father class
        super({restProbs}); // it must be used in child class for connection with father class
        console.log({weapon});
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacked by ${this.exp * 2} damage`); // calculation works in console.log
    }
}

// the variable must declared on child class. // All properties (also methods and functions) 
// from 'Hero' will be available in 'Warrior' class, because 'Hero' class is in __proto__ of the 'Warrior' class.
const vo4okidik = new Warrior({ name: 'vo4okidik', exp: 1000, weapon: 'Axe' }); // 'Hero must be change on Warrior'
console.log(vo4okidik);
vo4okidik.attack();
vo4okidik.gainExp(1000);
console.log(vo4okidik);

console.log(vo4okidik.__proto__ === Warrior.prototype);
console.log(Warrior.prototype.__proto__ === Hero.prototype);
console.log(Object.getPrototypeOf(vo4okidik) === Warrior.prototype);

vo4okidik.attack();
vo4okidik.gainExp(1000);


class Mage extends Hero {
    constructor({ spells, ...restProbs }) {
        super(restProbs);

        this.spells = spells;
    }

    cast() {
        const damage = this.exp * 2;
        console.log(`${this.name} casted the ${this.spells} with ${damage} damage, and received 1000 of experience`);
        this.gainExp(1000);
    }
}

const madara = new Mage({ name: 'Madara', exp: 2000, spells: ['Susano'] });
console.log(madara);
madara.cast();
console.log(madara);
madara.cast();
madara.cast();
madara.cast();
madara.cast();
madara.cast();
console.log(madara);


// read: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

// strict JavaScript: https://www.typescriptlang.org/ ---> in this JS version, the system is warning that you made a mistake

class Druid extends Mage {
    constructor({ animal, ...restProbs } = {}) {
        super(restProbs);

        this.animal = animal;
        console.log({ animal, ...restProbs });
    }

    animalAwakening() {
        const basedDamage = this.exp * 10;
        this.gainExp(1000);
        console.log(`${this.name} merged with ${this.animal}, hit the opponent and caused ${basedDamage} damage`);

        if (this.exp > 7000) {
                const maxDamage = basedDamage * 5;
                this.gainExp(5000);
                console.log (`${this.name} casted strongest spell, which caused ${maxDamage} damage`)           
        }
    }
}

const naruto = new Druid({
    name: 'Naruto',
    exp: 5000,
    spells: ['RasenSuriken'],
    animal: 'Kyubi',
});

console.log(naruto);

naruto.cast();
console.log(naruto);

naruto.animalAwakening();
console.log(naruto);

naruto.animalAwakening();
console.log(naruto);

naruto.animalAwakening();
console.log(naruto);
