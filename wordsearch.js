const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    // look for word horizonatally

    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    // transpose the matrix
    let output = [];
    const rowsLetters = letters.length;
    const colsLetters = letters[0].length;

    for (let i = 0; i < rowsLetters; i++) {
        output[i] = [];
        for (let j = 0; j < colsLetters; j++) {
            output[i][j] = letters[j][i];
        }
    }
    // look horizontally again
    const verticalJoin = output.map(ls => ls.join(''));
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch;

