// Object Laptop

const laptop = {
    color : "black",
    amount : 1,
    merk : "hp",
    camera : "720p",
    amountOfCamera : 1,
    processor : "AMD Ryzen",
    keyboard : "no separated",
    computer : {
        processor : "intel celeron",
        camera : false,
        amountOfCamera : false,
        amountOfKeyboard : 1,
        merk : "AOC",
    },
};

//latihan menggunakan console.log
console.log("property object 'laptop': ", laptop);

//memanggil property object dengan dot method
console.log("Property amount: ", laptop.amount);
console.log(laptop.computer.processor);

//memanggil property object dengan bracket method
console.log(laptop["keyboard"]);
console.log(laptop["computer"]["merk"]);
var jumlah = "amount";
console.log(laptop[jumlah]);