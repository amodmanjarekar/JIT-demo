// STRATEGY:
// 1. Start by always saying YES
// 2. If the opponent says NO twice consecutively, always respond NO
// 3. If the opponent says YES twice consecutively, always respond YES
// 4. Repeat until all rounds end

const fs = require("node:fs");

var my_res;

const round_no = parseInt(process.argv[2]);
const prev_res = process.argv[3]?.toString();

fs.readFile("./folder1/mytext", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  past_res = data.split("\n")[0];
  my_res = data.split("\n")[1];

  if (prev_res == past_res) {
    if (prev_res == "YES") {
      my_res = "YES";
    } else if (prev_res == "NO") {
      my_res = "NO";
    }
  }

  fs.writeFile("./folder1/mytext", `${prev_res}\n${my_res}`, () => {
    if (err) {
      console.log(err);
      return;
    }
  });

  console.log(my_res);
});
