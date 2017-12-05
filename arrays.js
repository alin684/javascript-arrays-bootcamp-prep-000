var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array1, element1) {
  var newarray = [element1,...array1];
  return newarray;
}
function destructivelyAddElementToBeginningOfArray(array2, element2) {
  [array2,...element];
  return array2;
}