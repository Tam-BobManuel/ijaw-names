
const namesData = require('./ijawnames.json');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ijawNames(name = '') {
  // Capitalize the user input
  name = capitalizeFirstLetter(name);
  const namesArray = Object.keys(namesData);
  
  const randomName = namesArray[Math.floor(Math.random() * namesArray.length)];
  
  const result = {
    name: randomName,
    meaning: namesData[randomName]
  };
 
  if (typeof name !== 'string'){
    throw new Error('Invalid name');
  } else {
    if (name !== '') {
        // Check if the provided name exists in the JSON data
        if (namesData.hasOwnProperty(name)=== true) {
          return {
            name: name,
            meaning: namesData[name]
          };
        } else {
          // Return false if the name doesn't exist
          return {
            name: name,
            meaning: false
          };
        }
    } else {
      return result;
    }
  }
 
}


module.exports = ijawNames;
