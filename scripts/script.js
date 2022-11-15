$(function () {
  //what radio value did they select?

  let userData = ["barry", "somethinglese"];
  let userJSON = {
    email: "barry email address",
  };

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
  });

  $("input[type=radio]").on("change", function () {
    // var $this = $(this);
    // if ($this.is(":checked")) alert("a");

    // call a function... to do all this stuff:

    let radioChoice = $("input[type=radio]:checked").val(); // A or B
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value=" ${newWordList[i]} ">${newWordList[i]} </option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    console.log("clicked the button");

    // get data from an input

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    // display data from that input

    console.log(dataStuff);

    // do that suff 2x
  });
});

function getWords(letter) {
  console.log("in f/n getWords, here the paramter: ", letter);

  let aWordArray = ["apple", "ant", "a"];
  let bWordArray = ["bananan", "brains", "bbbq"];
  let cWordArray = ["cat", "cactus", "charlie"];

  //todo: change to a switch/case ctrl structure.

  if (letter === "A") {
    return aWordArray;
  } else if (letter === "B") {
    return bWordArray;
  } else if (letter === "C") {
    return cWordArray;
  } else {
    return ["please select a letter"];
  }
}
