function addElementToBeginningOfArray(array, element){
  var Arr2 = [element,...array]
  return Arr2
}

function destructivelyAddElementToBeginningOfArray(array, element){ array.unshift(element)
  return array}

function addElementToEndOfArray(array, element){
 var Arr2 = [...array, element]
  return Arr2
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

function chocolateBars(array){
  return array
}






