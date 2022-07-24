var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

        $(document).ready(function () {
            $("#home").click(function () { 
                $(".home-wrap").fadeToggle(500);
                $(".scarch-wrap").hide();   
            });
            $("#power").click(function () { 
                $(".fullscreen").fadeToggle(500);         
            });
            $("#scarch").click(function () { 
                $(".scarch-wrap").fadeToggle(500);
                $(".home-wrap , .folder-wrap ").hide();   
            });

            $("#quickaccess").click(function () { 
              $(".quick-sub-folder").fadeToggle();
                       
            });

            $("#file").click(function () { 
              $(".folder-wrap").fadeToggle(500);
                $(".scarch-wrap, .home-wrap").hide(); 
              
            });
            $(".hide-bottom").click(function () { 
                $(".folder-wrap").fadeOut(300); 
              
            });


           
        });

        $(document).ready(function () {
          
          $("#freequet-file").click(function () { 
            $("#another").fadeToggle(500);
            
          });
          $("#free").click(function () { 
            $("#two").fadeToggle(500);
            
          });
        });