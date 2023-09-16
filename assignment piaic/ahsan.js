"use strict";
// problem 1
let Name = "Hello Eric";
let message = `${Name} Would you like to lern phyton\n`;
console.log(message);
//problem 2
let userName = "Hello Eric";
let personalMessage = `${Name} Would you like to lern phyton`;
console.log(personalMessage.toUpperCase());
console.log(personalMessage.toLowerCase());
//problem 3
let aurthurName = "Albert einstein once said,";
let quote = `" A person who never made mistake never tried  anything new "`;
console.log("\n", aurthurName + quote);
//problem 4
let famous_person = "Albert einstein once said,";
let Message = `\n${famous_person}" A person who never made mistake never tried  anything new "`;
console.log(Message);
//problem 5
let person = "\t ahsan \n ";
console.log(person);
let stripped = person.trim();
console.log("stripped name: " + stripped);
//problem 6
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//problem 7
let favouriteNumber = 9;
console.log(`My Favourite number is ${favouriteNumber}\n`);
//problem 8
// Ahsan ali gill date:4 Sep 2023
console.log(5 + 3);
//line no 61 perform addition opreation
console.log(11 - 3);
//line no64 perform subtration opreation
console.log(4 * 2);
//line no 67 perform multipliatin opreation
console.log(16 / 2);
//line no 70 perform division opreation
//Ahsan Ali Gill Date: 4 Sep 2023
let Person = "\t ahsan \n ";
//line no 75 declares person variable with whitespaces at the begining and end
console.log(Person);
//print on consple with whitespaces
let Stripped = person.trim();
//trim() method is used to remove whitespaces
console.log("stripped name: " + stripped, "\n");
// line no 85  display varible stripped on console without whitespaces
// Problem no 11:Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let friends = ["Ahsan", "shais", "Nabeel"];
for (let i = 0; i < friends.length; i++) {
    // we use for loop to display friend lists
    console.log(friends[i]);
}
//problem no 12: Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
let friend = ["Ahsan", "shais", "Nabeel"];
for (let i = 0; i < friends.length; i++) {
    console.log("hi mera Dost" + friend[i]);
    //line no 99 displayed on console such as hi mera dost ahsan ,shais, nabeel etc
}
//problem 13:
let trans = ["honda", "toyota", "yamaha", "suzuki"];
for (let i = 0; i < trans.length; i++) {
    console.log(`i would like to own ${trans[i]} Motorcycle\n`);
}
//problem 14: 
let guest = ["Uncle", "cousin", "Grand uncle"];
console.log(guest);
guest.forEach((num) => {
    console.log(`your are invited to our dinner tommrow ${num} \n`);
});
//problem 15: 
let guests = ["Uncle", "Cousin", "Grand uncle"];
console.log(guests);
console.log(`the guest cannot made ${guests[2]}\n`);
guests.pop();
//grand uncle has been removed because we use pop fuction
guests.push("cousin husband");
// now, we add cousin husband instead of Grand Uncle by using push function
console.log(`our new Guests are replaced by ${guests[2]}\n`);
console.log(guests);
guests.forEach((Now) => {
    console.log(`  Now our guest are  ${Now}\n`);
    //final list of our guest
});
// problem 16:
console.log(`Good news! we have more space at dinner table. i have to think to invite three more guest\n`);
guests.unshift("brother");
// to add guest to the first of array
guests.splice(2, 0, "GrandMother");
// to add guest in the middle of array
guests.push("Aunty");
// to add guest at the last of array
console.log(guests);
guests.forEach((num) => {
    console.log(`${num} you are invited to the dinner party\n`);
});
//problem 17:
console.log("Sorry for that i can invite only 2 guest \n");
console.log(`Sorry ${guests.pop()} i cannot invite you int the dinner\n`);
// last guest of array has been removed
console.log(`Sorry ${guests.pop()} i cannot invite you int the dinner\n`);
// last guest of the array has been removed
console.log(`Sorry ${guests.pop()} i cannot invite you int the dinner\n`);
// last guest of the array has been removed
console.log(`Sorry ${guests.pop()} i cannot invite you int the dinner\n`);
// last guest of the array has been removed
guests.forEach((hey) => {
    console.log(`${hey} You are invited `);
});
// problem 18: 
let worldPlace = ["Saudi Arbia", "UAE", "Canada", "England", "Qatar"];
console.log("\t\tOriginal order\t");
console.log(worldPlace);
// print array in original order
const array = worldPlace.slice();
// slice function copy a protion of array without modifing the array
console.log("\tAftthe original alphebetical order without modifing the current list");
console.log(array);
console.log("\tarray in its original order");
console.log(worldPlace);
console.log("\tAfter reversing the array\t");
console.log(worldPlace.reverse());
// we use reverse function to reverse array order
console.log("\tNow it has been reversed again");
console.log(worldPlace.reverse());
// zgain reverse the array
console.log("Array is in original form");
console.log(worldPlace);
console.log("\tNow  Sort the reverse order array\t");
console.log(worldPlace.sort());
// sort the reverse array 
console.log(worldPlace.sort().reverse());
//first sort array in alphabetical array  then reverse the alphabetical array
//Problem 19:
console.log(`\n hello guys i want to invite ${guests.length} people in my dinner`);
//problem 20
let list = ["faislabad", "lahore", "peshawar", "islamabad", "karachi"];
console.log("\nthe List of famous Pakistancities are in the following");
list.forEach((cities) => {
    console.log(`\t\t ${cities}`);
});
let userProfile = {
    userName: "ahsan",
    id: 1222,
    address: "lahore"
};
let Userprofile2 = {
    userName: "Shais",
    id: 23455,
    address: "karachi"
};
let Userprofile3 = {
    userName: "Nabeel",
    id: 4245,
    address: "peshawar"
};
let data = [userProfile, Userprofile2, Userprofile3];
for (let i = 0; i < 3; i++) {
    console.log(data[i]);
}
//problem 23
let array1 = ["cricket", "football", "badmintion", "hockey"];
//creating an array
let invalidIndex = 45;
// invalid index
console.log(` we are created ${array1[invalidIndex]}invalid index which doest not exist`);
console.log(` \nthe famous sports are in the following`);
array1.forEach((sports) => {
    console.log(`\t\t${sports}`);
});
//problem 24
let car = "subaru";
console.log(`is Car is =="subaru"?| predict true`);
console.log(car == "subaru");
//true
console.log(`is Car is =="subaru"?| predict flase`);
console.log(car == "Subaru");
//false
console.log(`is Car is =="subaru"?| predict true`);
console.log(car == "subaru");
//true
console.log(`is Car is =="subaru"?| predict flase`);
console.log(car == "sabura");
//false
console.log(`is Car is =="subaru"?| predict true`);
console.log(car == "subaru");
//true
console.log(`is Car is =="subaru"?| predict false`);
console.log(car == "lambo");
//flase
console.log(`is Car is =="subaru"?| predict true`);
console.log(car == "subaru");
//true
console.log(`is Car is =="subaru"?| predict flase`);
console.log(car == "SUBRU");
//false
console.log(`is Car is =="subaru"?| predict true`);
console.log(car == "subaru");
//true
console.log(`is Car is =="subaru"?| predict false`);
console.log(car == "SUBARU");
//false
console.log(`is Car is =="subaru"?| predict true`);
console.log(car == "subaru");
//true
console.log(`is Car is =="subaru"?| predict false`);
console.log(car == "sabara");
//false
//problem 24
let string1 = "shaheed";
let string2 = "Shaheed";
console.log(string1 == string2);
//flase
console.log(string1 != string2);
//true
console.log(string2.toLowerCase() == string1);
//true
let number = 12;
let number2 = 14;
console.log(number == number2);
//flase
console.log(number != number2);
//true
console.log(number > number2);
//false
console.log(number < number2);
//true
console.log(number >= number2);
//false 
console.log(number <= number2);
//true
console.log(number < number2 && number2 < number);
// && condition are false
console.log(number < number2 && number2 > number);
//&& condition are true
console.log(number < number2 || number2 < number);
// OR condition are true 
console.log(number > number2 || number2 < number);
// OR conditon are false
let arrayTest = ["ahsan", "shais", "saeed"];
//let check array elements
console.log(arrayTest.includes("ahsan"));
//true  the number is exist in array 
console.log(arrayTest.includes("hammad"));
//false the number does not exist in the array
//problem 25
let alien_color = "green";
if (alien_color == "green") {
    console.log("You have earned 5 points ");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("you have earned 5 points");
    //line no 378 does executed because the condition is not true
}
//problem 26
alien_color = "green";
if (alien_color == "green") {
    console.log("You have earned 5 points  for shooting the alien");
}
else {
    console.log("You have earned 10 points  for shooting the alien");
}
//second block that run else block
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You have earned 5 points  for shooting the alien");
}
else {
    console.log("You have earned 10 points  for shooting the alien");
}
//problem 27
// version 1 displaying green color as a output
alien_color = "green";
if (alien_color == "green") {
    console.log(`you earned 5 points for killing aliens`);
}
else if (alien_color == "yellow") {
    console.log(`you earned 10 points for killing aliens`);
}
else if (alien_color == "red") {
    console.log(`you earned 15 points for killing aliens`);
}
else {
    console.log("unknown alien color");
}
// version 2 displaying yellow color as a output
alien_color = "yellow";
if (alien_color == "green") {
    console.log(`you earned 5 points for killing aliens`);
}
else if (alien_color == "yellow") {
    console.log(`you earned 10 points for killing aliens`);
}
else if (alien_color == "red") {
    console.log(`you earned 15 points for killing aliens`);
}
else {
    console.log("unknown alien color");
}
// version 3 displaying red color as a output
alien_color = "red";
if (alien_color == "green") {
    console.log(`you earned 5 points for killing aliens`);
}
else if (alien_color == "yellow") {
    console.log(`you earned 10 points for killing aliens`);
}
else if (alien_color == "red") {
    console.log(`you earned 15 points for killing aliens`);
}
else {
    console.log("unknown alien color");
}
//problem 28
let age = 20;
if (age < 2) {
    console.log("the person is child");
}
else if (age && age < 4) {
    console.log("the person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("the person is kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is adult");
}
else {
    console.log("the person is elder");
}
//problem 29
let favourite_fruits = ["apple", "pineapple", "banana"];
// favourite fruits
for (let i = 0; i < 3; i++) {
    //check apple is in the array
    if (favourite_fruits[i] == "apple") {
        console.log(`appless are tasty `);
    }
    //check pineapple is in the array
    if (favourite_fruits[i] == "pineapple") {
        console.log(" pineapple is delicious");
    }
    //check banana is in the array
    if (favourite_fruits[i] == "banana") {
        console.log("iam really like the banana");
    }
    //check papaya is in the array 
    if (favourite_fruits[i] == "papaya") {
        console.log("im really like the papaya");
    }
    //check peach is in the array
    if (favourite_fruits[i] == "peach") {
        console.log("iam like peach");
    }
}
//problem 30
let userNames = ["admin", "Eric", "saeed", "nabeel", "shais"];
for (let i = 0; i < 4; i++) {
    //printing admin condition
    if (userNames[i] == "admin") {
        console.log(`Hello  ${userNames[i]} would you like to see status report`);
    }
    //printing the rest of member
    else {
        console.log(`hello  ${userNames[i]} thank you for loggging in agian`);
    }
}
//problem 31
// if the list is empty print amessage user need to find some user
if (userNames.length == 0) {
    console.log("we need to find some Users");
}
else {
    // the list is not empty so print the user names
    for (let i = 0; i < 4; i++) {
        console.log(userNames);
    }
}
// remove all the element in the array
userNames.splice(0, userNames.length);
console.log(userNames);
//empty array print
// problem 32
let current_users = ["ahsan", "shais", "sherz", "ahmad", "nabeel"];
let new_users = ["shais", "saeed", "hammad", "haroon", "nabeel"];
for (const user of new_users) {
    if (current_users.includes(user)) {
        console.log(`Username ${user} is  already taken`);
    }
    else {
        console.log(`the username  ${user} is avialabe`);
    }
}
//problem 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//declaring array
let ord;
// declaring a variable
for (let i = 0; i < 9; i++) {
    if (numbers[i] == 1) {
        ord = "st";
    }
    else if (numbers[i] == 2) {
        ord = 'nd';
    }
    else if (numbers[i] == 3) {
        ord = "rd";
    }
    else {
        ord = "th";
    }
    console.log(`${numbers[i]}${ord}`);
    // printing in the form of 1st 2nd 3rd... 
}
//problem 34
let pizza = ["Chicago pizza", "Margrehita pizza", "pepperonzi pizza"];
for (let i = 0; i < 3; i++) {
    console.log(pizza[i]);
    //printing name of pizza
}
for (let i = 0; i < 3; i++) {
    console.log(`\n i like ${pizza[i]}`);
}
//add additional line at the end of program after the for loop
console.log(`i really love pizza`);
//problem 35
let animals = ["dog", "cat", "cow"];
for (let i = 0; i < 3; i++) {
    console.log(animals[i]);
}
// statement about each animals
for (let i = 0; i < 3; i++) {
    if (animals[i] == "dog") {
        console.log(`${animals[i]} would make a great pet`);
    }
    else if (animals[i] == "cat") {
        console.log(`${animals[i]} is a good pet for putting in the house`);
    }
    else if (animals[i] == "cow") {
        console.log(`${animals[i]} is great and loving a animals`);
    }
}
console.log("animal have in common");
console.log("any of these animals would make a great pet");
//problem 36
function make_shirt(size, message) {
    console.log(`\nthe waist of${size},Message ${message}`);
}
make_shirt("medium", "suits on me");
//problem 37
function make_shirts(size = "large", message = " I love typescript") {
    console.log(`Size ${size} message ${message}`);
}
make_shirts();
//makes a large shirt with default message
make_shirts("Medium");
//makes a medium shirt with default message
make_shirts("extra large", "i love phython");
// different size with differentmessage
//problem 38
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("faislabad");
describe_city("london");
//problem 39
function city_coutry(cities, country) {
    console.log(`"${cities},${country}"`);
}
//three different cities in pair with country name
city_coutry("\nfaislabad", "pakistan");
city_coutry("lonodn", "england");
city_coutry("new york", "America\n");
//problem 40
function make_album(artistname, albumTitle, track) {
    const album = {
        artistname,
        albumTitle,
        track
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
const album1 = make_album("atif aslam", "zindagi tum hi ho");
const album2 = make_album("ali zafar", "jhoom", 8);
const album3 = make_album("fawad khan", "karachi kings lga ke wings", 14);
console.log(album1);
console.log(album2);
console.log(album3);
//pproblem 41
let magician = ["abrar ahmed", "abdullah", "rehman"];
// array of magician names
function show_magician(magician) {
    for (let i = 0; i < 3; i++) {
        console.log(magician[i]);
    }
}
show_magician(magician);
// call the function of array
// problem 42
function great_magician(magician) {
    // we use for each  to modify array
    magician.forEach((grey) => {
        console.log(`Great magician ${grey}`);
    });
}
great_magician(magician);
// call the  function
//problem 43
let magicians = ["abrar ahmed", "abdullah", "rehman"];
// array of magician names
function show_magicians(magician) {
    for (let i = 0; i < 3; i++) {
        console.log(magician[i]);
    }
}
function make_great(magician) {
    const new_magician = [];
    for (let i = 0; i < 3; i++) {
        new_magician.push(`great magcian ${magician[i]}`);
    }
    return new_magician;
}
const new_magician = make_great(magicians);
// new array created with
show_magician(magician);
// calling the function
show_magician(new_magician);
// calling the function
// problem 44
function sandwich(...item) {
    console.log(`summary of sandwich that has been odrdered`);
    item.forEach((key, i) => {
        console.log(key);
    });
}
//call the function 3 times with different argument
sandwich("tomatao", "turkey", "tomato");
sandwich("cheese", "hum");
sandwich("onion", "cucumber");
// problem 45
function cars(manufactured, model, ...properties) {
    const carss = {
        manufactured,
        model
    };
    for (const [key, value] of properties) {
        carss[key] = value;
    }
    return carss;
}
console.log(cars("hondA", "civic", ["colour", "blue"], ["speed", "240"]));
