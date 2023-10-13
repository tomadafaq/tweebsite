

// Nav menu

$(document).ready(function () {
    $("#hide").mouseleave(function () {
      $("#hide").fadeOut(1000);
    });

    $("#hide").mouseenter(function () {
      $("#hide").stop();
      $("#hide").fadeIn(500);
    });
  });


// Nav menu functions 

  function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
  }
  function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
  }
  function w3_fade() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
  }

  // dark theme JS
    
    function darkModeFn() {
       var element = document.body;
       element.classList.toggle("dark-mode");       
    }

    // dark-quote - make sure to replace `<blockquote` with `<blockquote id="dark-quote"` in the HTML that calls this func 
    function darkQuoteFn() {
      var element = document.getElementsByTagName("blockquote");
      element.classList.toggle("dark-quote");       
   }
    