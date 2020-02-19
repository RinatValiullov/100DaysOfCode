// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

/*
ADMIN = 1 (in binary 111)
READ_ONLY = 3 (in binary 001)
AUTHOR = 7 (in binary 011)
*/

enum Role {
  ADMIN = '111', READ_ONLY = '001', AUTHOR = '011'
}

const person = {
  nickname: '4rontender',
  age: 34,
  hobbies: ['Sport', 'Cooking', 'Reading'],
  role: ''
}

switch (person.role) {
  case Role.ADMIN:
    console.log('person is admin')
    break;
  case Role.AUTHOR:
    console.log('person is author')
    break;
  case Role.READ_ONLY:
    console.log('person has read only permissions')
    break;
  default:
    console.log('provide a correct person role')
    break;
}

