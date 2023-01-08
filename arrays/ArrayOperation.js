// Data Structures
// Arrays
const strings = ['a', 'b', 'c', 'd'];

// Access (Look up)
"Access(Look up): " + strings[2]; // O(1)

// Push
strings.push('e'); // O(1)

// UnShift //O(n)
strings.unshift('lekan');

// Splice //O(n)
strings.splice(1, 2, "ezekiel", "arimoro");

console.log(strings);
