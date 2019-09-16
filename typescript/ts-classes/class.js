var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TS = /** @class */ (function () {
    function TS(version) {
        this.version = version;
    }
    TS.prototype.info = function (name) {
        return "[" + name + "] Typescript version is " + this.version;
    };
    return TS;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.wheels = 4;
        this.model = theModel;
    }
    return Car;
}());
// another way
var CarAsAbove = /** @class */ (function () {
    function CarAsAbove(model) {
        this.model = model;
        this.wheels = 4;
    }
    return CarAsAbove;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // can be modified in parent class and derived classes
        this.color = 'red';
        this.go();
    }
    // only in parent class
    Animal.prototype.go = function () {
        console.log('GO');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var burry = new Cat();
burry.setVoice('meow');
console.log(burry.color);
// abstract classes
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is information';
    };
    return AppComponent;
}(Component));
var myComponent = new AppComponent();
myComponent.render();
var informationFromMyComponent = myComponent.info();
console.log(informationFromMyComponent);
