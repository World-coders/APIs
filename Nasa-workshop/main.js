document.getElementById('button').addEventListener("click",function(e){
   e.preventDefault();
   document.getElementsByClassName('container2')[0].classList.add('toggle');
    getNasaImage();
});

function getNasaImage(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", true);


  xhr.onload = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          console.log(response)
          document.getElementById('picture').setAttribute("src",response.hdurl );
        } else {
          console.error(xhr.statusText);
        }
    };

  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send();
  return xhr.response;

}
