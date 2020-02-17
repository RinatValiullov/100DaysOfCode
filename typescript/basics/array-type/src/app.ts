const object = {
  nickname: '4rontender',
  age: 34,
  hobbies: ['Reading', 'Singing', 'Chating', 'Sport']
};

let favoriteActivities: string[] | number[];
favoriteActivities = ['string'];

for (const hobby of object.hobbies) {
  console.log(hobby.toUpperCase());
}
