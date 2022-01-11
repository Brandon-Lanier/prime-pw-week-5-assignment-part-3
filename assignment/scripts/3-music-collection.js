console.log('***** Music Collection *****')

let collection = [];

// let nameoftrack = ['Sorry', 'Just my heart', 'Toasty']
// let duration = ['12', '14', '63']
//
// function tracks(trackName, trackDur) {
//   let track;
//   for (let i = 0; i < trackName.length; i++) {
//     console.log(trackName[i]);
//   }
//   for (let i = 0; i < trackDur.length; i++) {
//     console.log(trackDur[i]);
//   }
// }
//
// console.log(tracks(nameoftrack, duration));


function addToCollection(title, artist, yearPublished, track1, track2, track3) {
  let album = {
    title: title, //This also works by just putting title here and not title: title.  Wasn't sure the proper formatting
    artist: artist,
    yearPublished: yearPublished,
    tracks: {
      track1: track1,
      track2: track2,
      track3: track3
    }
  }; // end of object
  collection.push(album);
  return album;
}; //end of function

console.log('Adding an record to our collection', addToCollection('When All That\'s Left Is You', 'Quietdrive', 2006, ['Rise From The Ashes', '3\:00'], ['Get Up', '3\:35'], ['Take A Drin', '2\:44']));
// return is working per console in browser.
console.log('Adding album to our collection', addToCollection('SCIENCE', 'Incubus', 1997, ['Redefine', '3\:20'], ['Vitamin', '3\:13'], ['New Skin', '3\:51']));
console.log('Adding another album from an already used artist', addToCollection('Deliverance', 'Quietdrive', 2008, ['Believe', '3\:31'], ['Deliverance', '3\:22'], ['Motivation', '2\:50']));
console.log('Adding a new album', addToCollection('Futures', 'Jimmy Eat World', 2001, ['Futures', '3\:58'], ['Just Tonight', '3\:26'], ['Work', '3\:24']));
console.log('Adding another great album', addToCollection('Love is Dead', 'Chvrches', 2018, ['Graffiti', '3\:39'], ['Get Out', '3\:51'], ['Deliverance', '4\:13']));
console.log('Adding last album', addToCollection('A Brief Inquiry into Online Relationships', 'The 1975', 2018, ['The 1975', '1\:34'], ['Give Yourself A Try', '3\:17'], ['TooTimeTooTimeTooTime', '3\:28']));

console.log(`Lets take a look at our music collection`, collection);


function showCollection(array) {
  console.log(`Number of albums in our collection is ${array.length}.`);
  for (let record of array) {
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}.`);
    console.log(`1. ${record.tracks.track1[0]}: ${record.tracks.track1[1]}`); //This is the best I can do to get the tracks into the object in an orderly fashion
    console.log(`2. ${record.tracks.track2[0]}: ${record.tracks.track2[1]}`);
    console.log(`3. ${record.tracks.track3[0]}: ${record.tracks.track3[1]}`);
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


function search(artist, year, trackName) {
  let newResults = [];
  if (artist === undefined && year === undefined) {
  return collection; // Needs to run before the loop
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

addToCollection('Close Your Eyes', 'Quietdrive', 2009, ['Jessica', '3\:12'], ['Just My Heart', '3\:50'], ['Call Me Up', '3\:30']);

showCollection(collection);


let obj = {
  stuff: 'things',
  rocks: 'party',
  array: {
    array1: ['taco', 'cat'],
    array2: ['shifty', 'shellshock']
  }
}

console.log(obj.array.array1[1]);
