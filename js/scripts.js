$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var place1Input = $("input#place1").val();
    var person1Input = $("input#person1").val();
    var productInput = $("input#product").val();
    var villianInput = $("input#villian").val();
    var villianlairInput = $("input#villianlair").val();
    var thingInput = $("input#thing").val();


    $(".place1").text(place1Input);
    $(".person1").text(person1Input);
    $(".product").text(productInput);
    $(".villian").text(villianInput);
    $(".villianlair").text(villianlairInput);
    $(".thing").text(thingInput);

    $("#story").show();

    event.preventDefault();
  });
});
