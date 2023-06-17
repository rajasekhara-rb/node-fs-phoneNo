const fs = require('fs');

const phoneNo = () => {
    const numbers = []
    let series = 9421;
    const num = Math.floor(Math.random() * 1000000)
    let number = `${series}` + `${num}`;
    
    if (number.length === 10) {
        numbers.push(number);
        storeData('phoneNo.txt', `${numbers}`);
    }
}

const storeData = (fileName, data) => {
    fs.appendFile(fileName, `${data}\n`, (err) => {
        if (err) throw err
        console.log("number added");
    })

}

module.exports = {
    phoneNo,
}