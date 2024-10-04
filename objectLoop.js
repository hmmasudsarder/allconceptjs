const mobile = {
    name: "redmi",
    price: 32000,
    color: "black",
}
const phone = {
    price: 3200
}

// for (const key in mobile) {
//     for(const values in phone){
//         if (phone[values] === mobile[key]) {
//             console.log("is match");
//         }else{
//             console.log("oops nos");
//         }
//     }
// }

const keys = Object.values(mobile)

for (const element of keys) {
    // console.log(element);
}


const names = ["masud", "hridoy", "soboj", "noro"]

for (let i = names.length; i >= 0; i--) {
    if (i === undefined) {
        console.log("no problem");
    }else{
        console.log(names[i]);
    }
}