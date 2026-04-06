alert("Hello World!")

let f2 = (a, b, n) => {
    let total = 0;
    for (let i = 0; i < n; i++) {
        if (i % a == 0 || i % b == 0) {
            total += i
        }
    }
    return total;
}

alert(f2(3, 5, 1000))

let f3handler = () => {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let n = document.getElementById('n').value;
    alert(f2(a, b, n));
}

function f4(a, b, l) {
    let sum = 0;

    for (let i = 0; i < l.length; i++) {
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum += l[i];
        }
    }

    return sum;
}

let arr = [1, 3, 5, 7, 9, 10];
let results = f4(3, 5, arr);

alert(results);

let f4handler = () => {
    let a = parseInt(document.getElementById("a4").value);
    let b = parseInt(document.getElementById("b4").value);
    let l = document.getElementById("l4").value;

    let arr = l.split(",").map(x => parseInt(x));

    let result = f4(a, b, arr);

    alert(result);
}