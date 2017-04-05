$(".next-button").click( function(e) {
	$(this).parent().parent().hide();
	$(this).parent().parent().next("section").show();
	e.preventDefault(); 

});

$("#feedback-form").submit(function(e){
	$.ajax({
		method: "POST",
		url: "https://ntom.ml/app-feedback.php",
		dataType: "xml",
		data: $("#feedback-form").serialize(),
		success: function() {
			alert("Thank you for your rating.");
		},
		error: function() {
			alert("Unable to submit the rating. Please try again later.");
		}
	});
	e.preventDefault();
});