let removePunctuations = function(input) {
  return input.replace(/[&\/\\#,+()$~%.'":;*?<>{}\^\@\-\=\`\!]/g, '');
}

let generateHashtag = function(message) {
  let input = document.getElementById("message").value.trim();
  let cleanString = removePunctuations(input);

  let words = cleanString.split(" ");
  let results = words.map( word => ` #${word}` )
    .filter(word => word.length > 2)
    .join(" ")
    .toLowerCase();

  // display results
  document.getElementById("results").innerHTML = results;
};