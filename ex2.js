
//Write a function, testNum, that takes a number as an argument and returns a Promise that tests if the value is less than or greater than 50.



function testNum (num) {
    nbr = new Promise( (resolve, reject) => {
        if ((num > 50) || (num < 50)) {
            resolve("This number is not 50");
        } else {
           reject( Error("this is  50") );
        }
    })
    return nbr;
}

testNum(49)
.then( val => console.log(val) )
.catch( err => console.log(err) )

testNum(50)
.then( val => console.log(val) )
.catch( err => console.log(err) )

testNum(51)
.then( val => console.log(val) )
.catch( err => console.log(err) )