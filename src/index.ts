import namesData from '../ijawnames.json';
import { IjawNamesData, IjawNameResult, RandomNameResult } from './types';

function formatName(name: string): string {
  if (typeof name !== 'string') {
    throw new Error('Input must be a string');
  }
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function ijawNames(name: string = ''): IjawNameResult | RandomNameResult {
  // Capitalize the user input
  name = formatName(name);
  const namesArray: string[] = Object.keys(namesData as IjawNamesData);
  
  const randomName: string = namesArray[Math.floor(Math.random() * namesArray.length)];
  
  const result: RandomNameResult = {
    name: randomName,
    meaning: (namesData as IjawNamesData)[randomName]
  };
 
  if (typeof name !== 'string') {
    throw new Error('Invalid name');
  } else {
    if (name !== '') {
      // Check if the provided name exists in the JSON data
      if ((namesData as IjawNamesData).hasOwnProperty(name)) {
        return {
          name: true,
          meaning: (namesData as IjawNamesData)[name]
        };
      } else {
        // Return false if the name doesn't exist
        return {
          name,
          meaning: false
        };
      }
    } else {
      return result;
    }
  }
}

export = ijawNames;