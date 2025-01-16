import { guest, Admin, Developer } from "./types";

export function printUserInfo(user: guest | Admin | Developer) {
    console.log(`id: ${user.id}`);
    console.log(`name: ${user.name}`);
}

export const defaultUser: guest = {
    id: 123,
    name: "giacomo"
};


export function createUser(name?: string): guest {
    return { ...defaultUser, name: name ?? defaultUser.name };
}


let user1 = createUser();
let user2 = createUser("Luca");

printUserInfo(user1);
printUserInfo(user2);
