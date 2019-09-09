function* getName() {
    let names = [
        'Amanda',
        'Robert',
        'Chuck',
        'Mattiew',
        'Liews',
        'Sally'
    ];
    let facts = [];

    for (let name of names) {
        facts.push(yield name);
    }

    return facts;
}

let generatorIterator = getName();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;
name = generatorIterator.next(`${name} is miracle!`).value;
name = generatorIterator.next(`${name} is great!`).value;
name = generatorIterator.next(`${name} is pretty!`).value;
name = generatorIterator.next(`${name} is sweetie!`).value;

let positions = generatorIterator.next(`${name} is cool!`).value;

console.log(positions.join('\n'));
