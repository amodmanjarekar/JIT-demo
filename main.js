// STRATEGY:
// 1. Start by always saying YES
// 2. If the opponent says NO twice consecutively, always respond NO
// 3. If the opponent says YES twice consecutively, always respond YES
// 4. Repeat until all rounds end

// importing required libraries
const fs = require("node:fs");

var my_res; // to store final response for this round

const round_no = parseInt(process.argv[2]); // to store current round number (not needed for this strategy)
const prev_res = process.argv[3]?.toString(); // to store opponent's response in the previous round

// we shall store one past response & our current response in a file
fs.readFile("./helpers/mytext", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  past_res = data.split("\n")[0]; // reading opponent response in the round before previous round
  my_res = data.split("\n")[1]; // reading our response in the last round

  if (prev_res == past_res) {
    if (prev_res == "YES") {
      my_res = "YES";
    } else if (prev_res == "NO") {
      my_res = "NO";
    }
  }

  // writing new responses to file
  fs.writeFile("./helpers/mytext", `${prev_res}\n${my_res}`, () => {
    if (err) {
      console.log(err);
      return;
    }
  });

  console.log(my_res);
});
