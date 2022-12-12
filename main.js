let string = prompt("Yeah, hi, what's the string you're reversing? Enter it here: ")

function reverse(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

console.log(reverse(string));