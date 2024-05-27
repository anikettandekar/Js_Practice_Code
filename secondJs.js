/* Arrays */
function arrFuntn() {
    const ary = [1, 25, 78, 542, "name"]
    const aray = new Array(1, 254, 5, 865, 78, 1)

    console.log(ary);
    console.log(aray);
    /* // To print values using loop
    ary.forEach(element => {
        console.log(element);
    });

    aray.forEach(element => {
        console.log(element);
    }); */

    ary.push("is") //adds a value at end of array
    // Note: we try to push a array on another array ot will not concatenate, results in nested array
    ary.pop() // removes a value from end
    ary.unshift(78) //adds value at start of array
    ary.shift() //removes value from start of array

    console.log(ary);
    console.log(ary.includes(78));
    console.log(ary.indexOf(25));
    console.log(ary.indexOf(965)); //-1 for value not exists

    const newAry = ary.join() //joins array elements into one single string
    console.log(ary);
    console.log(newAry);
    console.log(typeof newAry);

    // Slice and Splice
    const newArry = [12, 23, 34, 45, 56, 67, 78, 88, 91]
    console.log("A: "+newArry);
    const sliceArry = newArry.slice(2,6)
    console.log(sliceArry); // cuts a substring out (start, stop-1)

    console.log("B: "+newArry);
    const spliceArry = newArry.splice(2,6) //cuts a sub-array out (start, stop) and
    //*also makes changes to original array*\\
    console.log(spliceArry);
    console.log("C: "+newArry);

    // Concatenate and Spread
    const concatArry = newArry.concat(spliceArry) //returns new concatenated array
    console.log(concatArry);

    const spreadArry = [...newArry, ...spliceArry, ...ary] // ... are used to spread elements of array

    // both concatenate and spred are used in merging but spread can merge multiple at once
    console.log(spreadArry);

    // Other Array methods
    console.log(Array.isArray("javascript")); // checks if array or not
    console.log(Array.from("javascript")); // converts into a array

    let a = 10, b =20, c = 30, d = "js", e = 50
    console.log(Array.of(a,b,c,d,e)); // returns a array out of given set of elements

}

/* Objects */
function objFuntn() {
    const mySymbol = Symbol() //Symbol type data declaration
    
    //can be declared as Singleton or Literals
    //Singleton ex: - object.create
    const objName = new Object()

    objName.name = "Aniket"
    objName[mySymbol] = "SymbolData"
    objName.age = 22
    objName.email = "ani@gmail.com"
    objName.isOnline = true

    //Literals
    /* const objName = {
        name: "Aniket",
        [mySymbol]: "SymbolData", // Data initialization for syk=mbol type
        age: 22,
        email: "ani@gmail.com",
        isOnline: true
    } */

    // to access the object
    console.log(objName["name"]);
    console.log(objName.name);
    console.log( objName[mySymbol]);

    //Objects Nesting
    const user = {
        fullname: {
            firstName: "Aniket",
            lastName: "Tandekar"
        }
    }
    console.log(user.fullname.firstName);

    //Objects Concatenation
    const concatObjects = Object.assign({}, objName, user) //adding empty is good practice
    const concatObjects2 = {...objName, ...user}
    console.log(concatObjects);
    console.log(concatObjects2);

    //Objects.methods
    console.log(Object.keys(objName));
    console.log(Object.values(objName));
    console.log(Object.entries(objName));

    //Destructure Object
    const {name, email:mail} = objName //No need to use dot operator to access objet
    //can also use differnt temp naming for declared key
    console.log(name);
    console.log(mail);


}

function funFuntn(){

    // Rest and Spread operator (... 3-dots)
    function addInCartItemPrice(...num){ //3-dots (rest) operator is used to feed rest values in one
        return num
    }
    console.log(addInCartItemPrice(200,300,400,500));

    //Passing objects
    const user = {
        userName: "Aniket",
        email: "ani@gmail.com"
    }

    function objPass(anyObject) {
        console.log(`Username is ${anyObject.userName} and email is ${anyObject.email}`);
    }
    objPass(user)

    //Passing Array
    const myArray = new Array(1,2,3,4,5,6)
    function arrPass(anyArray) {
        console.log(anyArray[2]);
    }
    arrPass(myArray)

    //Arrow Function (Explicit) has return stmt
    const addOne = (num1, num2) => {
        return num1 + num2
    }
    console.log(addOne(3,8));
    
    //Arrow Function (Implicit - in one line,) No return stmt, No Brackets 
    const addTwo = (num1, num2) => (num1 + num2)
    console.log(addTwo(8,7));

    /* ++++++++ IIFE (Imediatetly Invoked Function Expressions) ++++++++ */ 
    //()()
    (function printOne(){
        console.log("Pirnt-One");
    })(); //in IIFE add semicolon to end execution

    (()=>{
        console.log("Print-Two");
    })();

}

// Advance Loops - High Order Loops
function advLoops(){

    // Array - For of
    const arr = [11,22,33,44,55]
    for (const i of arr) {
        console.log(i);
    }

    // For each - call back function (has no name of fuctin)
    arr.forEach((item, index, arr) =>{ //(elementOfArray, indexOfArray, Array)
        console.log(`${item} -- ${index} -- ${arr}`);
    })

    // Filter 
    console.log(arr.filter((item)=>(item > 22)));

    //Strings - For of
    const greeting = "Hello World!"
    for (const greets of greeting) {
        console.log(greets);
    }

    // Objects -- For in
    const user = {
        name: "Aniket",
        email: "ani@gmail.com"
    }
    for (const key in user) {
        console.log(`${key} --> ${user[key]}`);
    }

    // Maps --For of
    const myMaps = new Map
    myMaps.set("IN", "India")
    myMaps.set("FR", "France")
    myMaps.set("UK", "United Kingdom")

    for (const [key, values] of myMaps) {
        console.log(`Country Code for ${values} --> ${key}`);
    }
}

function advLoops1(){
    // let myNumbers = [1,2,3,4,5,6,7,8,9,10]
    let myNumbers = [1,2,3,4,5]

    //mapping
    // let newNumbers = myNumbers.map((nums) => nums * 10) // Arrow function in one line 
    let newNumbers = myNumbers.map((nums) => {
        return nums * 10 // Arrow function with return function
    })

    console.log(newNumbers);

    //filtering
    let newNumbers1 = myNumbers.filter((nums)=>(nums >= 5))
    console.log(newNumbers1);

    // chaining (any number or order of chaning is possible)
    let newNumbers2 = myNumbers.map((nums)=>nums*10).map((nums)=> nums+5).filter((nums)=>nums >=55)
    console.log(newNumbers2);

    // reduce
    let newNumbers3 = myNumbers.reduce((accu,currentValue)=>{
        console.log(`Accumulator initial value = ${accu} \nAccumulator new value = ${currentValue}`)
        return accu + currentValue}, 0)

    console.log(newNumbers3);

    let shoppingCart = [
        {
            courseName: "Java",
            price: 4999,
            duration: 45
        },
        {
            courseName: "Python",
            price: 2999,
            duration: 30
        },
        {
            courseName: "JavaScript",
            price: 1499,
            duration: 25
        },
        {
            courseName: "C++",
            price: 1999,
            duration: 40
        }
    ]

    let totalPrice = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
    console.log(totalPrice);

    let durationFilter = shoppingCart.filter((item)=>item.duration<=30)

    console.log(durationFilter);
}

// arrFuntn()
// objFuntn()
// funFuntn()
// advLoops()
advLoops1()
