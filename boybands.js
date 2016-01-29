var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var bandDiv = document.getElementById('boy-bands');
var vegetablesDiv = document.getElementById('vegetables');

for (var i = 0; i < bands.length; i++) {
    var bandCount = bands[i];
    var vegetablesCount = vegetables[i];
    // console.log(bandCount);
    // console.log(vegetablesCount);
    var loopCount = [i + 1]; // shows amount of times the loop has run
    console.log(loopCount);
    bandDiv.innerHTML += "<p>" + bandCount + "</p>";
    vegetablesDiv.innerHTML += "<p>" + vegetablesCount + "</p>";
}


// // The number of loops to perform (what if the array changes?)
// var loopCount = 5; ! done

// // Keep track of which band we're on in the loop
// var currentBand = "";

// // Keep track of which veggie we're on in the loop
// var currentVeggie = "";

// // Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById(???);

// // Get a reference to the appropriate DOM element for vegetables
// var veggieElement = ???;

// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

//   // Add the band names into the correct <div>
//   currentBand = ???;


//   // Add the veggie names into the correct <div>
//   currentVeggie = ???;

// }