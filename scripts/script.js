$(function () {
  //what radio value did they select?

  $("input[type=radio]").on("change", function () {
    // var $this = $(this);
    // if ($this.is(":checked")) alert("a");

    let radioChoice = $("input[type=radio]:checked").val(); // A or B

    if (radioChoice === "A") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">A</option>`)
        .append(`<option value="brains">AA</option>`)
        .append(`<option value="bbq">AAA</option>`);
    } else if (radioChoice === "B") {
      //`<option value="${optValue}">${optText}</option>`

      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">banana</option>`)
        .append(`<option value="brains">brains</option>`)
        .append(`<option value="bbq">bbq</option>`);
    } else {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">pick a letter...A or B</option>`);
    }
  });
});