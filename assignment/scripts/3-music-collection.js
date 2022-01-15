console.log('***** Music Collection *****')

let collection = [];


function addToCollection(title, artist, yearPublished, tracks) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }; // end of object
  collection.push(album);
  return album;
} // end of function

console.log('Adding an record to our collection', addToCollection('When All That\'s Left Is You', 'Quietdrive', 2006, tracks('Rise From The Ashes', '3\:00', 'Get Up', '3\:35', 'Take A Drink', '2\:44')));
// return is working per console in browser.
console.log('Adding album to our collection', addToCollection('SCIENCE', 'Incubus', 1997, tracks('Redefine', '3\:20', 'Vitamin', '3\:13', 'New Skin', '3\:51')));
console.log('Adding another album from an already used artist', addToCollection('Deliverance', 'Quietdrive', 2008, tracks('Believe', '3\:31', 'Deliverance', '3\:22', 'Motivation', '2\:50')));
console.log('Adding a new album', addToCollection('Futures', 'Jimmy Eat World', 2004, tracks('Futures', '3\:58', 'Just Tonight', '3\:26', 'Work', '3\:24')));
console.log('Adding another great album', addToCollection('Love is Dead', 'Chvrches', 2018, tracks('Graffiti', '3\:39', 'Get Out', '3\:51', 'Deliverance', '4\:13')));
console.log('Adding last album', addToCollection('A Brief Inquiry into Online Relationships', 'The 1975', 2018, tracks('The 1975', '1\:34', 'Give Yourself A Try', '3\:17', 'TooTimeTooTimeTooTime', '3\:28')));
console.log(`Lets take a look at our music collection`, collection);


function tracks(songTitle1, songDur1, songTitle2, songDur2, songTitle3, songDur3) {
  let tracks = [] // empty array to push the tracks to.  Assignment calls for tracks to be in an array.
  let track1 = { // Exploring different ways to enter tracks, but this works currently.
    name: songTitle1,
    duration: songDur1
  };
  let track2 = {
    name: songTitle2,
    duration: songDur2
  };
  let track3 = {
    name: songTitle3,
    duration: songDur3
  };
  tracks.push(track1, track2, track3); // pushing all track objects into array.
  return tracks;
}


function showCollection(array) {
  console.log(`Number of albums in our collection is ${array.length}.`);
  for (let record of array) {
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}.`);
    console.log(`1. ${record.tracks[0].name}: ${record.tracks[0].duration}`); // There might be an easier way to execute the log in this format but this works.
    console.log(`2. ${record.tracks[1].name}: ${record.tracks[1].duration}`);
    console.log(`3. ${record.tracks[2].name}: ${record.tracks[2].duration}`);
  }
}

console.log(`Testing out our show collection function:`);
showCollection(collection); // Check console for results.
// If I call this function inside a console log it will run the function but also include an undefined statment at the end of running the function.

function findByArtist(artists) {
  let results = [];
  for (let i = 0; i < collection.length; i++) {
    if (artists === collection[i].artist)
    results.push(collection[i]);
  }
  return results;
}


console.log('Testing for an artist that I know to be in the collection (Should be 2 of them):', findByArtist('Quietdrive'));
console.log('Testing to look for an artist that I know is not in the colletion (Should be an empty array)', findByArtist('Silversun Pickups'));


function search(artist, year, trackName) {
  let newResults = [];
  if (artist === undefined && year === undefined && trackName === undefined) { // if nothing is entered into the arguments
  return collection; // Needs to run before the loop
  }
  for (let i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist && year === collection[i].yearPublished) {
      for (let j = 0; j < collection[i].tracks.length; j++) { // Nested loop to check the tracks array
        if (trackName === collection[i].tracks[j].name) { // loop through the tracks array at the name key
          newResults.push(collection[i]); // returning the full album if found
          console.log('Match Found!'); //Added for testing
        }
      }
    }
  }
  return newResults; //if not match found return empty array. Otherwise return album.
}


console.log('Testing with an album that is not in the collection (Should be empty array):', search('Ray Chalres', 1997, 'Song'));
console.log('Testing if no arguments are entered into the search function (Should return the collection):', search());
console.log('Testing with track name (Should return 1 album):', search('The 1975', 2018, 'The 1975'));
console.log(`Testing to see if our search works with all arguments being found (Should return 1 album)`, search('Quietdrive', 2006, 'Get Up'));
