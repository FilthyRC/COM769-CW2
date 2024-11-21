//A function to submit a new asset to the REST endpoint 
$(document).ready(function() {
 
     //Handler for the new asset submission button
    $("#subNewForm").click(function(){
  
      //Execute the submit new asset function
      submitNewAsset();
      
    }); 
  });

function submitNewAsset(){ 
    //Create a form data object 
    submitData = new FormData(); 
    
    //Get form variables and append them to the form data object 
    submitData.append('FileName', $('#FileName').val());
    submitData.append('userID', $('#userID').val());
    submitData.append('userName', $('#userName').val());
    submitData.append('File', $("#UpFile")[0].files[0]);
    
    //Post the form data to the endpoint, note the need to set the content type header 
    $.ajax({ url: "https://sarc769media.blob.core.windows.net",
        data: submitData,
        cache: false,
        enctype: 'multipart/form-data',
        contentType: false, processData: false, 
        type: 'POST',
        success: function(data){ 

        } 
    }); 
}