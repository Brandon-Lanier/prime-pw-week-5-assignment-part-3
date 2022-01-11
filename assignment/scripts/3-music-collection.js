console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  album = {
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
console.log('Adding a new album', addToCollection('Futures', 'Jimmy Eat World', 2001));
console.log('Adding another great album', addToCollection('Love is Dead', 'Chvrches', 2018));
console.log('Adding last album', addToCollection('A Brief Inquiry into Online Relationships', 'The 1975', 2018));

console.log(`Lets take a look at our music collection`, collection);


function showCollection(array) {
  console.log(`Number of albums in our collection is ${array.length}`);
  for (let record of array) {
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}.`);
  }
}

showCollection(collection); // Check console for results.
// If I put this into a console log it will run the function but also include an undefined statment at the end of running the function.

// Need a console log to test

function findByArtist(artists) {
  let results = [];
  for (let i = 0; i < collection.length; i++) {
    if (artists === collection[i].artist)
    results.push(collection[i]);
  }
  return results;
}


console.log('Testing for an artist that is know to be in the collection (Should be 2 of them):', findByArtist('Quietdrive'));
console.log('Testing to look for an artist that I know is not in the colletion (Should be an empty array)', findByArtist('Silversun Pickups'));


function search(artist, year) {
  let newResults = [];
  if (artist === undefined && year === undefined) {
  return collection;
  }
  for (let i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist && year === collection[i].yearPublished) {
    newResults.push(collection[i]);
    }
  }
  return newResults;
}




console.log('Testing to see if our search works with both arguments being found (Should return 1 album)', search('Quietdrive', 2006));
console.log('Testing with an album that is not in the collection (should be empty array)', search('Ray Chalres', 1997));
console.log('Testing if no arguments are entered into the search function (should return the collection)', search());
