class TS {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}] Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly wheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

// another way
class CarAsAbove {
    readonly wheels: number = 4

    constructor(readonly model: string) {}
}

class Animal {
    protected voice: string = '' // can be modified in parent class and derived classes
    public color: string = 'red'

    constructor() {
        this.go();
    }

    // only in parent class
    private go() {
        console.log('GO')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

let burry = new Cat()

burry.setVoice('meow')
console.log( burry.color );


// abstract classes
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('component on render');
    }

    info() {
        return 'This is information';
    }
}

let myComponent = new AppComponent();
myComponent.render()
let informationFromMyComponent = myComponent.info();
console.log(informationFromMyComponent);
