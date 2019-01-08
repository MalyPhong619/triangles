$(document).ready(function() {
 $(".trianglesForm").submit(function(event) {
   event.preventDefault();

   var a = parseInt($("#sideOne").val());
   var b = parseInt($("#sideTwo").val());
   var c = parseInt($("#sideThree").val());

if (a && b && c) {
  if (a === b && a === c) {
    $("#equilateral").show();
  } else if (a + b <= c || b + c <= a || a + c <= b) {
    $("#noTriangle").show();
  } else if (a === b || b === c || c === a) {
  $("#isosceles").show();
  } else if (a !== b && a !== c && b !== c) {
  $("#scalene").show();
  }
} else {
  alert("goodbye");
}
 });
});
