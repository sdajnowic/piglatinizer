$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("button").click(function(){ // click handler
    $(".output").text("");
    var nums =$("input").val(); // store the input into var num
    var nums_array = nums.split('+'); // split number by +

    var sum = 0; //
    nums_array.forEach(function(element){
        sum += Number(element);
    });

    $('.output').append(nums+" = "+sum);

});
});
