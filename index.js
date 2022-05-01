/*
abstract class TameTree {
    private static _counter = 0;
    private _transplanted: Date | null = null;
    private readonly _planted: Date;
    protected abstract fruit: object;
   /!* protected abstract fruitingPeriod: Date[];*!/
    protected constructor(private readonly _number: number) {
        TameTree._counter++;
        this._number = TameTree._counter;
        this._planted = new Date();
    }
    get number(){
        return this._number;
    }
    set transplanted(newDate: Date){
        if(newDate > this._transplanted!) this._transplanted = newDate;
    }
    getTransplantedDate():string{
        if(this._transplanted === null){
            return `Дерево ще не переседажувалось`
        }
        else {
            return `${this._transplanted.toLocaleDateString()} час: ${this._transplanted.toLocaleTimeString()}`;
        }
    }
    get planted(){
        return this._planted;
    }
    getPlantedDate(): string{
        return `${this._planted.toLocaleDateString()} час: ${this._planted.toLocaleTimeString()}`
    }
}
class Cherry extends TameTree{
    protected _fruit: {
        type: `кістянка`,
        description: `Однонасінний плід з соковитим (рідше сухим) оплоднем (перикарпій)`
    }
    constructor(age: number) {
        super(age);
    }
    get fruit(){
        return this._fruit
    }
}
class Apple extends TameTree{
    protected _fruit: {
        type: 'яблуко';
        description: `Соковитий, багатий на вітаміни та мікроелементи.`;
    } | undefined
    constructor(age: number) {
        super(age);
    }
    get fruit(){
        return this._fruit
    }
}
class Pear extends TameTree{
    protected _fruit: {
        type: 'яблуко',
        description: `Соковитий, багатий на вітаміни та мікроелементи.`
    }
    constructor(age: number) {
        super(age);
    }
    get fruit(){
        return this._fruit
    }
}
class Peach extends TameTree{
    protected _fruit: {
        type: `кістянка`,
        description: `Однонасінний плід з соковитим (рідше сухим) оплоднем (перикарпій)`
    }
    constructor(age: number) {
        super(age);
    }
    get fruit(){
        return this._fruit
    }
}
let peach = new Peach(5);*/
class List {
    constructor() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    add(value) {
        this.items.push(value);
    }
    get(index) {
        return this.items[index];
    }
}
class TameTree {
    constructor(_age) {
        this._age = _age;
        this._transplanted = null;
        this._planted = new Date();
        TameTree._counter++;
        this._number = TameTree._counter;
    }
    getPlantedDate() {
        return `Дерево посаджене ${this._planted.toLocaleDateString()} о ${this._planted.toLocaleTimeString()}`;
    }
    getTransplantedDate() {
        if (this._transplanted == null) {
            return `Дерево ще не пересаджувалось`;
        }
        else {
            return `${this._transplanted.toLocaleDateString()} о ${this._transplanted.toLocaleTimeString()}`;
        }
    }
    setTransplanted(value) {
        this._transplanted = value;
    }
    get number() {
        return this._number;
    }
    get age() {
        return this._age;
    }
    get fruit() {
        return this._fruit;
    }
}
TameTree._counter = 0;
class Cherry extends TameTree {
    constructor(age) {
        super(age);
        this._fruit = {
            type: `кістянка`,
            description: `Однонасінний плід з соковитим (рідше сухим) оплоднем (перикарпій)`,
            fruiting: (this.age > 4 && (new Date().getMonth() >= 5 && new Date().getMonth() <= 9))
        };
    }
}
class Apple extends TameTree {
    constructor(age) {
        super(age);
        this._fruit = {
            type: 'яблуко',
            description: `Соковитий, багатий на вітаміни та мікроелементи.`,
            fruiting: (this.age > 4 && new Date().getMonth() == 8)
        };
    }
}
class Peach extends TameTree {
    constructor(age) {
        super(age);
        this._fruit = {
            type: `кістянка`,
            description: `Однонасінний плід з соковитим (рідше сухим) оплоднем (перикарпій)`,
            fruiting: (this.age > 4 && new Date().getMonth() == 8)
        };
    }
}
class Pear extends TameTree {
    constructor(age) {
        super(age);
        this._fruit = {
            type: 'яблуко',
            description: `Соковитий, багатий на вітаміни та мікроелементи.`,
            fruiting: (this.age > 4 && new Date().getMonth() == 8),
        };
    }
}
class Garden {
    constructor() {
        this.trees = new List();
    }
    addRandomTree(num) {
        switch (num) {
            case 1:
                this.trees.add(new Cherry(getRandomInt(0, 10)));
                break;
            case 2:
                this.trees.add(new Peach(getRandomInt(0, 10)));
                break;
            case 3:
                this.trees.add(new Pear(getRandomInt(0, 10)));
                break;
            case 4:
                this.trees.add(new Apple(getRandomInt(0, 10)));
                break;
        }
    }
    transplanting() {
        for (let i = 0; i < this.trees.size(); i++) {
            if (this.trees.get(i).age >= 4 && !this.trees.get(i).fruit.fruiting) {
                this.trees.get(i).setTransplanted(new Date());
                console.log(`${this.trees.get(i).constructor.name} під номером ${this.trees.get(i).number} пересаджена ${this.trees.get(i).getTransplantedDate()}!`);
            }
        }
    }
}
function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
let garden = new Garden();
/*garden.addRandomTree(getRandomInt(1,4))*/
for (let i = 0; i < getRandomInt(5, 15); i++) {
    garden.addRandomTree(getRandomInt(1, 4));
}
console.log(garden.trees);
garden.transplanting();
