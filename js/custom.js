$(document).ready(function () {
  $("#navbarToggler").click(function () {
    $(".navbar-collapse").slideToggle("slow");
  });
});

// JavaScript to handle modal chaining
$(document).ready(function () {
  $("#addDetails").on("show.bs.modal", function (e) {
    $("#generateBtn").on("click", function () {
      $("#addDetails").modal("hide");
      $("#secondModal").modal("show");
    });
  });
  $("#helpMe").on("click", function () {
    $("#addDetails").modal("show");
    $("#secondModal").modal("hide");
  });
});
