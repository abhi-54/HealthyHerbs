function diseasedisplay(select)
        {
          if (select.value==0)
          {
            window.open('herbs-for-cancer.html', "_self");
          }
          else if (select.value==1)
          {
            window.open('herbs-for-diabetes.html', "_self");
          }
          else if (select.value==2)
          {
            window.open('herbs-for-diarrhea.html', "_self");
          }
          else if (select.value==3)
          {
            window.open('herbs-for-lupus.html', "_self");
          }
          else if (select.value==4)
          {
            window.open('herbs-for-malaria.html', "_self");
          }
          else if (select.value==5)
          {
            window.open('herbs-for-tuberculosis.html', "_self");
          }
          else if (select.value==6)
          {
            window.open('herbs-for-typhoid.html', "_self");
          }
          else
          { 
            alert("Something went wrong. Please reload the page.");
          }
        }
        
        var sliderIndex = [1,1,1];
        var sliderId = ["mySlides1", "mySlides2", "mySlides3"]
        showSlides(1, 0);
        showSlides(1, 1);
        showSlides(1, 2);
    
        function plusSlides(n, no) {showSlides(sliderIndex[no] += n, no);}
    
        function showSlides(n, no) {
          var i;
          var x = document.getElementsByClassName(sliderId[no]);
          if (n > x.length) {sliderIndex[no] = 1}    
          if (n < 1) {sliderIndex[no] = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";}
          x[sliderIndex[no]-1].style.display = "block";  
        }