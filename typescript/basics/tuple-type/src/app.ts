const person: {
  nickname: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  nickname: '4rontender',
  age: 34,
  hobbies: ['Sport', 'Reading'],
  role: [1, 'admin']
};

person.role.push('user');
// person.role[1] = 5; error

// person.role = [2, 'user', 45]; // error
