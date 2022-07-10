// The way to take all Object property names.

const feedback = {
    good: 10,
    neutral: 8,
    bad: 5,
}


// The next row present the name of properties in the Array
const keys = Object.keys(feedback);
console.log(keys);

let totalFeedbackNumber = 0;

for (const key of keys) {
    console.log(key); // - show the names of all properties (as string)
    console.log(feedback[key]); // - show the names of all properties (as their own features)

    totalFeedbackNumber += feedback[key];
}

console.log('Total Feedback Number: ', totalFeedbackNumber);


// The next function shows the value of properties in the Array
const values = Object.values(feedback);
console.log(values);

let objectValues = 0;

for (const value of values) {
    console.log(value);

    objectValues += value;
}

console.log(objectValues); // -shows the value of object

// Complicated object

const hotelOffer = {
    id: 'fd123jjjooiiaas',
    company: 'Airbnb',
    pricePerDay: 500,
// Object in Object 
    location: {
        city: 'Berlin',
        street: 'Bundesstrasse',
        buildingNumber: 23,
    },
    contact: {
        name: 'John',
        phone: '+48 794 540 165',
        email: 'john@example.com'
    }
}

// Array of Objects  

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

console.table(friends);

// This 'For' shows all separate Objects in Array separately, 
// and it will add to each Objects the properties
for (const friend of friends) {
    console.log(friend);

    friend.age = 15;
}

// if you want to add to some object separately you should use the next syntax:

friends[0].education = 'high';

console.table(friends);

// Function, which helps to find Object by the value of property
const findFriendByName = function (allFriends, name) {
    // for - helps to create variables for all Objects separately
    for (const friend of allFriends) {
    console.log(friend); // - shows all Objects from array separately    
    console.log(friend.name); // - show the all values of properties "name"
    // if - helps to check all Objects separately and return the result if the conditions are matched
        if (friend.name === name) {
            return 'Founded!!!';
        }
    }
}
console.log(findFriendByName(friends, 'Poly')); 

// This is not working
const findFriendByNameWrong = function (allFriends, name) {
    console.log(allFriends.includes(name));
}

console.log(findFriendByNameWrong(friends, 'Poly'));


// Function, which helps to get all values of individual property and push it in created array

const getAllNames = function (allFriends) {
    const names = [];
    
    for (const friend of allFriends) {
        console.log(friend.name); // - show in console separately all values of property 'names'
        // the next row helps to push all values of property 'names' in one array 'names'
        names.push(friend.name);
    }
    console.log(names);
    return names; // - makes the same as console log, but stop the function and cut last 'undefined'
}

console.log(getAllNames(friends));


// Function, that show in separate array the Objects with the some chosen value of chosen property
// For example: 'Which friends are online?'
const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        // It is the same as:
        // if (friend.online === true) {
        //     onlineFriends.push(friend);
        // }

        // this is better syntax
        if (friend.online) {
            onlineFriends.push(friend);
        }
    }
    return onlineFriends;
}

console.log(getOnlineFriends(friends));


const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        // It is the same as:
        // if (friend.online === true) {
        //     onlineFriends.push(friend);
        // }

        // this is better syntax
        if (!friend.online) {
            offlineFriends.push(friend);
        }
    }
    return offlineFriends;
}

console.log(getOfflineFriends(friends));

// ! - is the separation // 

// The next function will make 2 arrays with different online status in one Object


// First version
const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    // cycle, which helps to check all friends 
    for (const friend of allFriends) {
        // conditions which must be done
        if (friend.online) {
            friendsByStatus.online.push(friend);
        } else {
            friendsByStatus.offline.push(friend);
        }
    }
    return friendsByStatus;
}

console.log(getFriendsByOnlineStatus(friends));

//Second version
const getFriendsByOnlineStatusSecondVersion = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        if(friend.online) {
            friendsByStatus.online.push(friend);
            //instead 'else' - 'continue'
            continue;
        }

        friendsByStatus.offline.push(friend);
    }

    return friendsByStatus;
};

console.log(getFriendsByOnlineStatusSecondVersion(friends));

//Third version
const getFriendsByOnlineStatusThirdVersion = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        friend.online
        ? friendsByStatus.online.push(friend)
        : friendsByStatus.offline.push(friend);
    }

    return friendsByStatus;
};

console.log(getFriendsByOnlineStatusThirdVersion(friends));


//Fourth version
const getFriendsByOnlineStatusFourthVersion = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        // 'online' and 'offline' - can replace .online and .offline
        friendsByStatus[friend.online ? 'online' : 'offline'].push(friend);
    }
    return friendsByStatus;
};

console.log(getFriendsByOnlineStatusFourthVersion(friends));

//Fifth version
const getFriendsByOnlineStatusFifthVersion = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        // The same as version 4, but put conditions into variable
        const key = friend.online ? 'online' : 'offline';
        friendsByStatus[key].push(friend);
    }
    return friendsByStatus;
};

console.log(getFriendsByOnlineStatusFifthVersion(friends));


// The results ---> Object with 2 arrays with 2 objects each