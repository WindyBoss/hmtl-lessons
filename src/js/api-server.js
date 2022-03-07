/* Export Option 1
const fetchAllUsers = () => {
    console.log('Fetching all users');
};

const fetchUserById = id => {
    console.log(`Fetching user by ${id}`);
};

const updateUserById = id => {
    console.log(`Updating user ${id}`);
};

const x = 5;
const y = 6

export default { fetchUserById, fetchAllUsers, updateUserById, x, y };
*/

import shortid from "shortid";

export const fetchAllUsers = () => {
    console.log('Fetching all users');
};

export const fetchUserById = id => {
    console.log(`Fetching user by ${id}`);
};

export const updateUserById = id => {
    console.log(`Updating user ${id}`);
};

export const x = 5;
export const y = 6

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name,
    };
    console.log(user);
};
