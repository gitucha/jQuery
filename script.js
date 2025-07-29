// uki click ina toggle
$("#btn").on( "click", function() {
  $( "p" ).toggle();
} );

// uki hover na mouse ina toggle
$("#btn").on( "mouseover", function() {
  $( "p" ).toggle("slow");
} );
