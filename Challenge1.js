function regularF (num) {
    
    if (num % 2 === 0) {
      console.log(num + " Es Par");
    } else {
      console.log(num + " Es impar");
    }
}

const arrowF = (num) => {
    if (num % 2 === 0) {
        console.log(num + " Es Par");
    } else {
        console.log(num + " Es impar");
    }
}

console.log(regularF(1))
console.log(arrowF(2))