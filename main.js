// let array = ['Введите команду'];
// for(let i = 0;i = Infinity;i++){

// }


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const even = []
const odd = []

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element % 2 === 0) {
        even.push(element)
   } else {
       odd.push(element)
    }
}

console.log(even);
console.log(odd);



////////////////////////////////////////////////////////////////


const users = [];

for (let i = 0; i < Infinity; i++) {
  const name = prompt("Введите комманду: ");
  const command = name.split(", ");
  if (command[0] === "add") {
    users.push(command[1]);
  } else if (command[0] === "del") {
    for (const key in users) {
      if (users[key] === command[1]) {
        users.splice(key, 1);
      }
    }
  } else if (command[0] === "stop") {
    break;
  }

  console.log(users);
}