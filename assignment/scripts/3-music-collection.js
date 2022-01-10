console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
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
