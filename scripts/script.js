$(function () {
  //what radio value did they select?

  let userData = ["barry", "somethinglese"];
  let userJSON = {
    email: "defaultEmail@una.edu",
    name: "First Last",
    pwd: "helloWorld123",
  };

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
  });

  $("input[type=radio]").on("change", function () {

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

    let dataStuff = `{ "letterSelected:  ${$(
      "input[type=radio]:checked"
    ).val()} " }`;
    // display data from that input

    console.log(dataStuff);
    alert(dataStuff);
    
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
function display()
{

document.getElementById("displayarea3").innerHTML = document.getElementById('holiday').value; 
document.getElementById("holiday").value = "";

document.getElementById("displayarea2").innerHTML = document.getElementById("pwd").value; 
document.getElementById("pwd").value = "";

document.getElementById("displayarea1").innerHTML = document.getElementById("email").value; 
document.getElementById("email").value = "";

document.getElementById("displayarea").innerHTML = document.getElementById("name").value; 
document.getElementById("name").value = "";
}

function resetProjectDetails() {
  document.getElementById("displayarea3").innerHTML = '';
document.getElementById("holiday").value = "";

document.getElementById("displayarea2").innerHTML = '';
document.getElementById("pwd").value = "";

document.getElementById("displayarea1").innerHTML = '';
document.getElementById("email").value = "";

document.getElementById("displayarea").innerHTML = '';
document.getElementById("name").value = "";
}

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}