import { uniq } from 'lodash';
import insane from 'insane';

import { apiKey as key, myUrl, sample, myVar1, var2 } from './src/config';
import def from './src/config';

let uniqArray = uniq([1, 2, 3, 1, 5, 2, 3]);

console.log(key, myUrl);
console.log(myVar1, var2);
console.log(def);

sample('4ront');


import User, { createURL, gravatar } from './src/user';

let _4ront = new User('4rontender', '4rontender@gmail.com', '4ront.ru');
let profile = createURL(_4ront.name);
let image = gravatar(_4ront.email)


console.log(image)
