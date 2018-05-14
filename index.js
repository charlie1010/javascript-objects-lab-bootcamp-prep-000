<<<<<<< HEAD
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}
=======
var recipes = new Object({key: "value"});

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes,key,value) {
  recipes [key] = value
  return recipes
}

>>>>>>> 8bfb3104f07bacd1bd7980b8f974542afae83fcb
