// // ❓Description:
// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:


// // ❗️  



//  ✅
const whosOnline = (friends) => {
    const result = {};

    for (const friend of friends) {
        const { username, status, lastActivity } = friend;
        let category;

        if (status === 'offline') {
            category = 'offline';
        } else if (lastActivity > 10) {
            category = 'away';
        } else {
            category = 'online';
        }

        if (!result[category]) {
            result[category] = [];
        }

        result[category].push(username);
    }

    return result;
}

