var $ = (s, o = document) => o.querySelector(s);
var $$ = (s, o = document) => o.querySelectorAll(s);

$(".password").addEventListener("input", indicatorCheck);
$(".check").addEventListener("click", hideCheck);
$(".password").addEventListener("keyup", submit);

window.addEventListener("click", function(e){   
  if ($(".password").contains(e.target)){
    $(".password").classList.add("active");
  } else{
    $(".password").classList.remove("active");
    $(".password-input").value = "";
    $(".indicator").classList.remove("weak", "medium", "strong");
    $(".check").classList.remove("submit");
  }
});

function indicatorCheck(){
  var val = $(".password-input").value;
  var strength = null;
  if(val.length > 0) strength = "weak";
  if(val.length > 3) strength = "medium";
  if(val.length > 6) strength = "strong";
  $(".indicator").classList.remove("weak", "medium", "strong");
  $(".indicator").classList.add(strength);
  $(".check").classList.remove("submit");
};

function hideCheck(){
  $(".check").classList.toggle('active');
  ($(".password-input").type == 'password') ? $(".password-input").type = 'text' : $(".password-input").type = 'password';
};

function submit(e){
  if (e.keyCode == 13) {
    $(".check").classList.add("submit");
    return false;
  }
};