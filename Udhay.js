var i = 0;
var txt1 =
  "                                                                                             < Heyyy Idiot.....!  <<               Now I want to say something special to you. <<<                So , Please read everything carefully...!                                                                           > Our bond is totally unexpected. < I never believed in love at first sight.  <<                  But! As the days goes < I'm getting attched to you than anything else....! <<                           I don't know why your thoughts are always running through my mind 🥱                                                     > Every morning, You are the first thing on my mind...!                     << When you are with me, I forget all my worries✨                                                     > I don't get bored of spending time with you,                     < and i won't                        >We have created nice memories that bring a smile whenever we remember them                              << Still I wanna create a lot                              <<< Untill You are with Me...😐                          > I used to think I'm strong                    << But when i think about losing you                    <<< I realize how weak I am...😕                                                             >I Know nothing will happen.....!                   < But still !!                               <<If there is even a 0.1% chance to keep you with me                      <<< Damn, I'll fight for it...                         > I'm happy that You are the best part of my life                                       <<<< Thanks for everything Idiot...💙  ";
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
