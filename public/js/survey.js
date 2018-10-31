$( document ).ready(function () {

const userSurveyRes = [];

const submitUserSurvey = function () {
    console.log( $(this).serializeArray(),
    )};


    $( "#submit" ).on("click", submitUserSurvey);
});





// $( "form" ).submit(function( event ) {
//     console.log( $( this ).serializeArray() );
//     event.preventDefault();
//   });
