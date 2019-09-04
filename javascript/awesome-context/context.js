function hello() {
    console.log(this);
}

let user = {
    nick: '4rontender',
    age: 34,
    greet: hello,
    showInfo() {
        console.group(`${this.nick} info:`)
        console.log(`Nickname is: ${this.nick}`);
        console.log(`Age is: ${this.age}`);
        console.groupEnd()
    }
};

let newUser = {
    nick: 'Drop',
    age: 555
};

user.showInfo.bind(newUser)();

user.greet();
user.showInfo();
