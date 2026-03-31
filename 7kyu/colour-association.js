// // ❓Description:

// Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

// // ❗️  
// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

//  ✅

function colourAssociation(array){
    const newArray = [];
    for (const element of array){
        const [color, meaning] = element;
        const colorObj = {};
        colorObj[color] = meaning;
        newArray.push(colorObj);
    }
    return newArray;
}
