"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUser = void 0;
exports.printUserInfo = printUserInfo;
exports.createUser = createUser;
function printUserInfo(user) {
    console.log(`id: ${user.id}`);
    console.log(`name: ${user.name}`);
}
exports.defaultUser = {
    id: 123,
    name: "giacomo"
};
function createUser(name) {
    return Object.assign(Object.assign({}, exports.defaultUser), { name: name !== null && name !== void 0 ? name : exports.defaultUser.name });
}
let user1 = createUser();
let user2 = createUser("Luca");
printUserInfo(user1);
printUserInfo(user2);
