// Question 40

function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };

  if (tracks === undefined) {
    album.tracks = 0;
  } else {
    album.tracks = tracks;
  }

  return album;
}

// Create three album objects
let album1 = make_album("Artist1", "Album 1");
let album2 = make_album("Artist2", "Album 2", 3);
let album3 = make_album("Artist3", "Album 3");

// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
