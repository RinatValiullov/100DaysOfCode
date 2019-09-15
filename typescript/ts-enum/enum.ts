enum Membership {
    Simple,
    Standard,
    Premium
}

let roles = Membership.Standard;
let membershipReverse = Membership[2];
console.log(roles);
console.log(membershipReverse);

enum Social {
    vk = 'vkontakte',
    fb = 'facebook',
    tw = 'twitter'
}

let social = Social.tw;
console.log(social);
