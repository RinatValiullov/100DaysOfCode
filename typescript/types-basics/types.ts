
// booleans
const isFetching: boolean = true;
const isLoading: boolean = false;

// numbers
const int:number = 5;
const float:number = 5.23;
const num:number = 3e10;

// strings
const nickname:string = '4rontender';

// arrays
const numberArray: number[] = [1, 2, 3, 5, 8, 13];
const numberArrayDiff: Array<number> = [1, 2, 3, 5, 8, 13];

const words:string[] = ['Hello', 'Typescript'];

// tuple
const contact: [string, number] = ['Rinat', 123456];

// any
let variable: any = 45;
variable = 'string';
variable = [];

// functions
function sayMyName(name: string): void {
    console.log(name);
};

sayMyName('Rinat');


// Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while(true) {}
}


// custom types
type Login = string;
const log: Login = 'Admin';

type ID = string | number;
const id1: ID = 456;
const id2: ID = '456';

// null and undefined
type Some = string | null | undefined;
let someVar: Some = null;
let someVar1: Some = undefined;
let someVar2: Some = 'word';