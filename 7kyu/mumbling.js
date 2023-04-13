// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.



// My solution:

function accum(s) {
    let stringArray = s.split('')
    stringArray.forEach((number, index) => {
        stringArray[index] = stringArray[index].toUpperCase() + stringArray[index].repeat(index).toLowerCase()
    })
    return stringArray.join('-')
}

