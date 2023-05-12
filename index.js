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
