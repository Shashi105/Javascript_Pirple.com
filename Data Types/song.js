var song;
var singers=[];
var length;
var genre=[];
var billBoard100;
var album;
var dateOfRelease;	
var favSongs=[];

function songConstructor(song,singer,length,genre,billBoard100,album,dateOfRelease ){
  this.song=song;
  this.singer=singer;
  this.length=length+" "+"mins";
  this.genre=genre;
  this.billBoard100=billBoard100;
  this.album=album;
  this.dateOfRelease=dateOfRelease;
}

var fav1 = new songConstructor( "girls like you",["Adam levin", "Cardi B"],3.3,
                                      ["pop","rock"],
                                      true,"Red Pill Blues","May 30, 2018");



var fav2 = new songConstructor("Eye of the Tiger","",4.04,
                                      "Hard rock",
                                      true,"Rocky III","1982");
									  
									  
									  
var fav3 = new songConstructor( "attention","Charlie Puth",3.31,
                                      ["pop","rock"],
                                      true,"Voicenotes","2017");
									  

var fav4 = new songConstructor( "Blinding Lights","The Weeknd",3.31,
                                      ["Synthwave","synth-pop","electropop"],
                                      true,"After Hours","November 29, 2019");



									  
									  
var fav5 = new songConstructor( "Lahore","Guru Randhawa",3.52,
                                      ["Bhangra","Indi-pop","EDM"],
                                      false,"Lahore","13 December 2017");







favSongs.push(fav1,fav2,fav3,fav4,fav5);

console.log(favSongs);

















3.3