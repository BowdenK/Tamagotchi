class tamagotchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.happiness = 100;
        //this.grow();
    }

    // grow(){
    //     setInterval(()=>{
    //         this.age++;
              
    //         if(this.health <= 0){
    //             console.log(`${this.name} has perished`)
    //             console.log(`Control + 'C' to stop`)
                
    //             return;
    //         }
    //         console.log(this.age)
            
    //         if(this.age % 10 == 0){
    //             this.health -=5;
    //             this.hunger -=5;
    //             this.thirst -=5;
    //             this.happiness -=5;
    //             console.log(`Health: ${this.health}`)
    //             console.log(`Control + 'C' to stop`)
    //         }
    //     }, 1000)
    // }

    eat(){
        this.hunger += 10;
        this.health += 10;
        console.log(`${this.name} eats a meal, their health is ${this.health}`)
    }

    drink(){
        this.thirst += 10;
        this.health += 10;
        console.log(`${this.name} has a refreshing drink, their health is ${this.health}`)
    }

    play(){
        this.happiness += 10;
        this.health += 10;
        console.log(`${this.name} jumps for joy, their health is ${this.health}`)
        return this;
    }


}

//const Eevee = new tamagotchi('Eevee')
//console.log(Eevee)
//Eevee.play();

class Dog extends tamagotchi{
    constructor(name, collarColour){
        super(name);
        this.collarColour = collarColour;
    }

    appearance(){
        console.log(`${this.name} has a ${this.collarColour} collar, it's their favourite`);
        return this;
    }

    treat(){
        this.hunger += 10;
        this.health += 10;
        console.log(`${this.name} eats a dog treat, their health is ${this.health}`);
        return this;
    }
}

const Frank = new Dog('Frank', 'Red')

 Frank.appearance();
 Frank.drink();
 Frank.treat();

 class Fish extends tamagotchi{
    constructor(name, bowlFeature){
        super(name);
        this.bowlFeature = bowlFeature;
    }

    feature(){
        console.log(`${this.name} has a ${this.bowlFeature} in their bowl, it's their favourite`);
        return this;
    }    
}

const Jaws = new Fish('Jaws', 'Castle')

 Jaws.feature();