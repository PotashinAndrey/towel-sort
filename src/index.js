
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return matrix ? matrix.map((e, i) => !((i + 1) % 2) ? e.reverse() : e).flat() : [];
}
