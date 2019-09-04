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

user.showInfo.bind(newUser, 'Builder', '8-565-656-00-01')();

user.greet();
user.showInfo();
