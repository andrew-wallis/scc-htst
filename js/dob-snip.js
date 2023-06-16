console.log(outputParams.dob);

var dob = Date.parse(outputParams.dob);

var other = new Date('09-17-1986');

console.log(dob);
console.log(other);

if (dob < other ) {
  console.log('You are older');
} else {
  console.log('You are younger');
}


$( "input[name='circumstance']" ).on('input', function() {
  if($("input[name='circumstance']:checked").length > 0) {
    $(".button--next").show("fast").removeClass('hidden');
  } else {
    $(".button--next").hide("fast");
  }
});