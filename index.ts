class List<T> {
    private readonly items: Array<T>;
    constructor() {
        this.items = [];
    }
    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

    get(index: number): T {
        return this.items[index];
    }
}
interface IFruit {
    type: string,
    description: string,
    fruiting: boolean,
}
type transCondition = Date | null;
abstract class TameTree {
    private readonly _planted: Date;
    protected abstract _fruit: IFruit;
    private static _counter = 0;
    private readonly _number: number;
    private _transplanted: transCondition = null;
     protected constructor(private _age: number) {
        this._planted = new Date();
        TameTree._counter++;
        this._number = TameTree._counter;
    }
    getPlantedDate(){
        return `Дерево посаджене ${this._planted.toLocaleDateString()} о ${this._planted.toLocaleTimeString()}`
    }
    getTransplantedDate(): string{
         if(this._transplanted == null){
             return  `Дерево ще не пересаджувалось`;
         }
         else{
             return  `${this._transplanted.toLocaleDateString()} о ${this._transplanted.toLocaleTimeString()}`;
         }
    }
    setTransplanted(value: transCondition){
         this._transplanted = value;
    }
    get number(){
        return this._number;
    }
    get age(){
        return this._age;
    }
    get fruit(){
         return this._fruit;
    }

}
class Cherry extends TameTree{
    protected _fruit = {
        type: `кістянка`,
        description: `Однонасінний плід з соковитим (рідше сухим) оплоднем (перикарпій)`,
        fruiting: (this.age > 4 && (new Date().getMonth() >= 5 && new Date().getMonth() <= 9))
    }
    constructor(age: number) {
        super(age);
    }
}
class Apple extends TameTree{
    protected _fruit = {
        type: 'яблуко',
        description: `Соковитий, багатий на вітаміни та мікроелементи.`,
        fruiting: (this.age > 4 && new Date().getMonth() == 8)
    }
    constructor(age: number) {
        super(age);
    }
}
class Peach extends TameTree{
    protected _fruit = {
        type: `кістянка`,
        description: `Однонасінний плід з соковитим (рідше сухим) оплоднем (перикарпій)`,
        fruiting: (this.age > 4 && new Date().getMonth() == 8)
    }
    constructor(age: number) {
        super(age);
    }
}
class Pear extends TameTree{
    protected _fruit: IFruit = {
        type: 'яблуко',
        description: `Соковитий, багатий на вітаміни та мікроелементи.`,
        fruiting: (this.age > 4 && new Date().getMonth() == 8),
    }
    constructor(age: number) {
        super(age);
    }
}
class Garden {
    trees: List<TameTree> = new List<TameTree>();
    addRandomTree(num: number){
        switch (num) {
            case 1: this.trees.add(new Cherry(getRandomInt(0,10)))
                break;
            case 2: this.trees.add(new Peach(getRandomInt(0,10)))
                break;
            case 3: this.trees.add(new Pear(getRandomInt(0,10)))
                break;
            case 4: this.trees.add(new Apple(getRandomInt(0,10)))
                break;
        }
    }
    transplanting(){
        for(let i = 0; i < this.trees.size(); i++){
            if(this.trees.get(i).age >= 4 && !this.trees.get(i).fruit.fruiting){
                this.trees.get(i).setTransplanted(new Date());
                console.log(`${(this.trees.get(i) as any).constructor.name} під номером ${this.trees.get(i).number} пересаджена ${this.trees.get(i).getTransplantedDate()}!`)
            }
        }
    }
}
function getRandomInt(min: number, max:number): number {
    return min + Math.floor(Math.random() * (max - min + 1));
}
let garden = new Garden();
/*garden.addRandomTree(getRandomInt(1,4))*/
for(let i = 0; i < getRandomInt(5,15); i++){
    garden.addRandomTree(getRandomInt(1,4))
}
console.log(garden.trees);
garden.transplanting();