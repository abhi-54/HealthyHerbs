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

