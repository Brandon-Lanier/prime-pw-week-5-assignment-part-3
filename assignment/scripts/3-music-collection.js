console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let record = {
    title,
    artist,
    yearPublished
  } // end of object
  collection.push(record);
  return record;
}; //end of function

console.log('Adding an record to our collection', addToCollection('When All That\'s Left Is You', 'Quietdrive', '2006'));
console.log(collection);
addToCollection('SCIENCE', 'Incubus', '1998')
console.log(collection);
