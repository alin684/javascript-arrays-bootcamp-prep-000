var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningofArray(array1, element1) {
  array1.push(element1);
}
function destructivelyAddElementToEndOfArray(array2, element2) {

  [element2, ...array2]
}