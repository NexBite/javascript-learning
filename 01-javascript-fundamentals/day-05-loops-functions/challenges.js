// ---------------- Bonus Challenge 1 — Multiplication Function

// function printTable(number) {

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} X ${i} = ${number * i}`);
//     }

// }
// console.log("--------------- table 7--------------")
// printTable(7);
// console.log("--------------- table 8 -------------")
// printTable(8);
// console.log("--------------- table 9 -------------")
// printTable(9);
// console.log("--------------- table 12-------------")
// printTable(12);
// console.log("--------------- table 17 -----------")
// printTable(17);

function printTable(number) {
    console.log(`\n========== Table of ${number} ==========`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
}
printTable(7);
printTable(8);
printTable(9);
printTable(25);
printTable(35);