
IUPS = "https://prod-19.uksouth.logic.azure.com:443/workflows/63ea88979d4a42b68830cced4904c46f/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=v3F6wBhQAIiiqVr8ZEuxhnMV6IxJTkesXugB1DqFcnE";
RAI = "https://prod-25.uksouth.logic.azure.com:443/workflows/ec127cc8f156442398c8c50cb1299492/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=cgab8EXxlt-7okMwfSI4zzq-GKOnxEenJugpJQvZn_w";

BLOB_ACCOUNT = "https://sarc769media.blob.core.windows.net";


function GetVideos(){
  $('#MovieIcon').html('<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>');
    $.getJSON(RAI, function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<hr />");
        items.push("<img src='"+BLOB_ACCOUNT + val["iconPath"] +"' width='200pc'/> <br />")
        items.push( "<hr />");
        items.push(val["videoName"] + "<br />");
        items.push("Uploaded by: " + val["userID"]+"<br />");
        items.push("<a href= '"+BLOB_ACCOUNT + val["videoPath"] +"'>Watch Here </a> <br />")
      });

      $('#MovieIcon').empty();
      //Append the contents of the items array to the ImageList Div
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "#MovieIcon" );

    });
  };


 function UploadVideo(){
    submitData = new FormData();

    submitData.append('videoName', $('#videoName').val());
    submitData.append('userID', $('#userID').val());
    submitData.append('Video', $("#UpVideo")[0].files[0]);
    submitData.append('Icon', $("#UpIcon")[0].files[0]);
    
    
   console.log(submitData)
    $.ajax({
      url: IUPS,
      data: submitData,
      cache: false,
      enctype: 'multipart/form-data',
      contentType: false,
      processData: false,
      type: 'POST',
      success: function(data){
        alert("Upload Complete!");
    }
  })

  };