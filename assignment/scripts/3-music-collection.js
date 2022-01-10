console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title, //This also works by just putting title here and not title: title.  Wasn't sure the proper formatting
    artist: artist,
    yearPublished: yearPublished
  }; // end of object
  collection.push(album);
  return album;
}; //end of function

console.log('Adding an record to our collection', addToCollection('When All That\'s Left Is You', 'Quietdrive', 2006));
// return is working per console in browser.
console.log('Adding album to our collection', addToCollection('SCIENCE', 'Incubus', 1997));
console.log('Adding another album from an already used artist', addToCollection('Deliverance', 'Quietdrive', 2008));
console.log('Adding a new album', addToCollection('Futuers', 'Jimmy Eat World', 2001));
console.log('Adding another great album', addToCollection('Love is Dead', 'Chvrches', 2018));
console.log('Adding last album', addToCollection('Rumors', 'Fleetwood Mac', 1977));

console.log(`Lets take a look at our music collection`, collection);


function showCollection(array) {
  console.log(array.length);
  for (let record of array) {
    console.log(record);
  }
}
console.log('Testing our showCollection function', showCollection(collection));
