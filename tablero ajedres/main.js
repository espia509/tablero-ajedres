let yu = 8;
let xu = ""

for (let y = 0; y < yu; y++) {
    for (let x = 0; x < yu; x++) {
        if ((x+y) % 2 === 0) {
            xu += " "
        }
        else{
            xu += "#"
        }
    }
    xu += "\n"
}

console.log(xu);
