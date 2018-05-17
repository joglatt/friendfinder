var friendData = [
  {
    name: "karl",
    array: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    difference: 0
  },
  {
    name: "joe",
    array: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    difference: 0
  },
  {
    name: "grey",
    array: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    difference: 0
  }
];
var total;
function checker() {
// loops through objects starting with the second one in the array
  for (var j = 1; j < friendData.length; j++) {
    total = 0;
//loops through the array in the first objects in friendData
   for (var i = 0; i < friendData[0].array.length; i++) {
//loops through the array in the object being looped through by the first loop
      for (var k = 0; k < friendData[j].array.length; k++) {
        total += Math.abs(friendData[0].array[i] - friendData[j].array[k]);
        console.log(total);
        friendData[j].difference= total;
        console.log("diff" + friendData[j].difference);

      }
    }
  }
}

checker();
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendData;
