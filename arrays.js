var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array1, element1) {
  [element1, ...array1]

}
function destructivelyAddElementToBeginningOfArray(array2, element2) {
  array2.push(element2);
}