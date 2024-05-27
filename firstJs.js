/* output studies */
{
    const rollno = 60
    let name = "Aniket"
    var middleName = "Ashok"
    familyName = "Tandekar"
    let role

    console.table([rollno, name, middleName, familyName, role]);
    console.log("Prints Output in Console")
    // alert("prints output in browser alert")

    "use strict" // treats all code as newer version of JS
}

/* Use ECMA standards or MDN for studies */

/* Datatypes */
// Primitive, Non-primitive, undefined
{
    console.table(["number = 2^53", "bigint", "String", "booloean = true/false", "null = standalone value", "undefined", "symbol = unique"]);

    console.log(typeof undefined) //undefined
    console.log(typeof null) //object
}

/* TypeCasting and their issues */
{
    let rollNo = "60abc" //typecasting instaed of pure number
    console.log(typeof rollNo)
    // if we pass string and typecast to number it works but gives unfavourable output
    let tCastedRollNo = Number(rollNo)
    console.log(typeof tCastedRollNo)
    console.log(tCastedRollNo) //gives "NaN" = "Not a Number" for {string/undefined --> Number}
}

/* *******************Operations******************** */

// Arithmatic: + - * ** / %
console.log(3 + 2 + "1") //precedence left --> right (added first and then concatenate)

/* Memory - Stack(primitive) & Heap(non-primitive) */
{
    //Stack gives copy of variable, do not change original value
    //Shallow Copy
    let user1 = "value1"
    let user2 = user1
    user2 = "value2"

    console.log(user1); // value not changed
    console.log(user2);

    //Heap gives reference of variable, changes original value
    //Deep Copy
    let userOne = {
        email: "abc@email.com"
    }

    let userTwo = userOne
    userTwo.email = "xyz@nomail.com"

    console.log(userOne); //value changed
    console.log(userTwo);
}

/* Strings */
{
    let name = "Aniket"
    let familyName = "Tandekar"
    let rollno = 60

    console.log(`My name is ${name} ${familyName.toUpperCase()} and my Roll No. is ${rollno}`); //use `` back-quotes for concatenated sentences.

    console.log(name.length);
    console.log(name.charAt(3));
    console.log(name.indexOf('n'));
    console.log(name.slice(1, 4));
    console.log(name.concat(" " + familyName));
    let stringArray = "my name is Ani i am from Nagpur".split(" ")
    console.log(stringArray);
    console.log('vaue at index 2 is: ' + stringArray[2]);
}

/* Number and Math */
{
    const score = 100 //auto-detect datatype is Number
    const score2 = new Number(100) //Datatype is specified
    let balance = 10000000
    console.log(score.toString());
    console.log(score.toFixed(2));
    console.log(score.toPrecision(4));
    console.log(balance.toLocaleString());
    console.log(balance.toLocaleString('en-IN'));

    console.log(Math);
    console.log(Math.abs(-23));
    console.log(Math.round(23.3));
    console.log(Math.sqrt(3).toFixed(3));
    console.log(Math.min(4, 7, 8, 1, -3, -8 , 6));
    console.log(Math.random()*100); //has default range 0-1 hence multiplied by 100 for range 1-100
    console.log(Math.floor(Math.random()*100)); //.floor remvoves decimal part
}

/* Date and Time */
{
    let mydate = new Date()
    let mydate2 = new Date("2024-05-15")
    let mydate3 = new Date(2024, 4, 15)

    console.log(mydate);
    console.log(mydate2.toString());
    console.log(mydate3.toLocaleString());
    console.log(Date.now()); //returns timestamp in milisec (long datatype)
    console.log(mydate.getTime()); //returns milisec value of variable date
    console.log(Date.now() - mydate.getTime()); //to compare to timestamps
    console.log(Math.floor(Date.now()/1000)); //Devide by 1000 milisec --> to sec
}
