function showOptions() {
  if (document.getElementById("attending").checked) {
    console.log("CHECKED");
    document.getElementById("dinner-choice").style.maxHeight = "300px";
    document.getElementById("dinner-choice").style.paddingTop = "20px";
  } else {
    document.getElementById("dinner-choice").style.maxHeight = "0px";
    document.getElementById("dinner-choice").style.paddingTop = "0px";
  }
}

function checkBorder() {
  if (document.getElementById("check-border").checked) {
    document.getElementById("rsvp-form").style.border = "3px solid";
    document.getElementById("rsvp-form").style.borderImageSlice = "1";
  } else {
    document.getElementById("rsvp-form").style.border = "none";
  }
}
