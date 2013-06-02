$(document).ready(function() {
   // Votre code ici
   $("#myInput").keyup(function(){$("#myName").text($("#myInput").val());});
   
});