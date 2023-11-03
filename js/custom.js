$(document).ready(function () {
  $("#navbarToggler").click(function () {
    $(".navbar-collapse").slideToggle("slow");
  });
});

// JavaScript to handle add details popup
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

/* Js for the Add offerings popup */

$(document).ready(function () {
  $("#addOfferings").on("show.bs.modal", function (e) {
    $("#generateOfferingsBtn").on("click", function () {
      $("#addOfferings").modal("hide");
      $("#addOfferingsStepTwo").modal("show");
    });
  });
  $("#offeringsBack").on("click", function () {
    $("#addOfferings").modal("show");
    $("#addOfferingsStepTwo").modal("hide");
  });
});

/* Js for the Add values popup */

$(document).ready(function () {
  $("#addValues").on("show.bs.modal", function (e) {
    $("#generateValuesBtn").on("click", function () {
      $("#addValues").modal("hide");
      $("#addValuesStepTwo").modal("show");
    });
  });
  $("#valuesBack").on("click", function () {
    $("#addValues").modal("show");
    $("#addValuesStepTwo").modal("hide");
  });
});

$(document).ready(function () {
  $("#closeNotificationBtn").on("click", function () {
    $(".profile-notification").hide(); // Hides the notification container
  });
  $(".btn-close-offer-notification").on("click", function () {
    $(".offer-notification").hide(); // Hides the notification container
  });
  $(".btn-close-value-notification").on("click", function () {
    $(".value-notification").hide(); // Hides the notification container
  });
});

$(document).ready(function () {
  $(".close-tag").on("click", function () {
    $(this).closest(".remove-tag").hide(); // Hides the closest parent element with class 'remove-tag'
  });
});
