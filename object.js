let testObject = {
  key1: 40,
  key2: 491,
  key3: 991,
  key4: 819,
  key5: 138,
  key6: 481
}


function showKeys(object){
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
}

function addAll(object){
  var count = 0;
  for (const [key, value] of Object.entries(object)) {
    count += value;
  }
  console.log(count);
}

showKeys(testObject);
addAll(testObject);