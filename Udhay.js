var i = 0;
var txt1 =
  "                                                                                             < Heyyy Idiot.....!  <<               Now I want to say something special to you. <<<                So , Please read everything carefully...!                                                                           > Vettiya irunthen rompa < Adhunaala oru site create pani viten 😂 <<                  Valentines day ku yarkaachum < Anupi ushaar pannalaaam 🤣                                    <<                           Idhulaye background la photo vachukalam 🥱                                                     > Vera song kooda play panitu                    << Maaney, theney, pon maaney nu potu ushaar paniklam😁                   << Yaaaru open panaalum ellarkume idhu kaamikum       ";
var speed = 80;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
