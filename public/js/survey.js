
  $("#submit").click(function() {
    const userResponse = {
      name: $("#name")
        .val()
        .trim(),
      photo: $("#photo")
        .val()
        .trim(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

    console.log(userResponse);

    $.post("/api/employees", userResponse).done(function(data) {
      console.log(data);
      $('.modal-content').empty();
      $(".modal-content").append(`
      <div class="modal-header">
      <h2 class="modal-title"><strong>Best Match</strong></h2>
      <button class="close float-right" data-dismiss="modal">×</button>
  </div>
  <div class="modal-body">
      <h2 id="match-name">Name: ${data.name}</h2>
      <img id="match-img" src="${data.photo}" alt="${data.name}" width="100%">
  </div>
  <div class="modal-footer">
      <button class="btn btn-default" data-dismiss="modal">Close</button>
  </div>`);
      $(".modal").modal("show");
    });
  });

