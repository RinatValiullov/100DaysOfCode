var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var roles = Membership.Standard;
var membershipReverse = Membership[2];
console.log(roles);
console.log(membershipReverse);
var Social;
(function (Social) {
    Social["vk"] = "vkontakte";
    Social["fb"] = "facebook";
    Social["tw"] = "twitter";
})(Social || (Social = {}));
var social = Social.tw;
console.log(social);
