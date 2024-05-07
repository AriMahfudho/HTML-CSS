// for (let i = 1; i <= 15; i++) {
// 	let output = "";

// 	if (i % 3 === 0) {
// 		output += "game";
// 	}
// 	if (i % 5 === 0) {
// 		output += "gamelab";
// 	}
// 	if (i % 15 === 0) {
// 		output = "gamelab indonesia";
// 	}
// 	if (output === "") {
// 		output = i;
// 	}
// 	console.log(output);
// }
// function gameLabIndonesia(n) {
// 	var output = "";
// 	for (var i = 1; i <= n; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			output += "gamelab indonesia ";
// 		} else if (i % 3 === 0) {
// 			output += "game ";
// 		} else if (i % 5 === 0) {
// 			output += "gamelab ";
// 		}
// 	}
// 	return output.trim();
//   }
  
//   console.log("Hasil uji pertama adalah");
//   console.log(gameLabIndonesia(10));
  
//   console.log("\nHasil uji kedua adalah");
//   console.log(gameLabIndonesia(25));
  
//   console.log("\nHasil uji ketiga adalah");
//   console.log(gameLabIndonesia(39));

function kelipatan(nilai) {
  var output = "";
  for (var i = 1; i <= nilai; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "gamelab indonesia ";
    } else if (i % 3 === 0) {
      output += "game ";
    } else if (i % 5 === 0) {
      output += "gamelab ";
    }
  }
  return output.trim();
}
console.log("Hasil uji pertama adalah");
console.log(kelipatan(10));
console.log("Hasil uji kedua adalah");
console.log(kelipatan(25));
console.log("Hasil uji ketiga adalah");
console.log(kelipatan(39));