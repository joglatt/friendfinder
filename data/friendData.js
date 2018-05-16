var friendData = [
  {
    name: "bill",
    array: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    name: "Joe",
    array: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: "sam",
    array: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  }
];

function checker() {
  for (array in friendData[0]) {
    for (var i = 1; i < friendData.length; i++) {
      for (array[i] in friendData) {
        
      }
    }
  }
}
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendData;
