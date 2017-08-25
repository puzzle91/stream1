
$(document).ready(function(){
  
$(".settings-symbol").click(function(e){
      $(".settings-dropdown").fadeToggle();
      e.stopImmediatePropagation();
  });
$('html').click(function (e) {
  if($(".settings-dropdown").is(":visible") && !$("div").is(e.target)) {
      $(".settings-dropdown").fadeOut("fast");
  }
  });
});



    $(document).ready(function(){
        $(".signin").submit(function(){
            alert("You've succesfully signed in");
        });
    });



        $(".signin.in").click(function() {
            window.location = "file:///Users/EduardoP/Desktop/Code/Project/trails/all.html" + this.id;
         });




$(document).ready(function(){
    $("#form-signin.in").click(function(){
        alert("You've succesfully signed out");
    });
});


