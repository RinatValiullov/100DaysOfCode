function hello() {
    console.log(this);
}

let user = {
    nick: '4rontender',
    age: 34,
    greet: hello,
    showInfo(job, phone) {
        console.group(`${this.nick} info:`)
        console.log(`Nickname is: ${this.nick}`);
        console.log(`Age is: ${this.age}`);
        console.log(`Job is: ${job}`);
        console.log(`Phone is: ${phone}`);
        console.groupEnd()
    }
};

let newUser = {
    nick: 'Drop',
    age: 555
};

// bind method
user.showInfo.bind(newUser, 'Builder', '8-565-656-00-01')();

user.greet();
user.showInfo('Web Developer', '8-960-654-54-99');


let newPerson = {
    nick: 'Nemo',
    age: 1
};

// call and apply
user.showInfo.call(newPerson, 'Builder', '8-565-656-00-01');
user.showInfo.apply(newPerson, ['Builder', '8-565-656-00-01']);
