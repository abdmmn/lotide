

// COPIED FROM assertEqual.js FILE  //


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log ("✅✅✅ Assertion passed", actual, "!==", expected);
  }
  else {
    console.log ("🛑🛑🛑 Assertion failed", actual, "===", expected)
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);




const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// To run in terminal, type >>>>>>   node assertEqual.js




