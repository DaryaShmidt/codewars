// // ❓Description:

// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

 // ❗️  
// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"

// nickname("Jeannie") //=> "Jean"

//  ✅


function nicknameGenerator(name){
    if (name.length < 4){
        return "Error: Name too short";
    }
    if (name[2] === 'a' || name[2] === 'e' || name[2] === 'i' || name[2] === 'o' || name[2] === 'u') {
        return name.substr(0, 4);
    }else{
        return name.substr(0, 3);
    }
}

console.log(nicknameGenerator('Sam'));