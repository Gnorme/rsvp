function showOptions() {
  if (document.getElementById("attending").checked) {
    console.log("CHECKED");
    document.getElementById("dinner-choice").style.maxHeight = "300px";
  } else {
    document.getElementById("dinner-choice").style.maxHeight = "0px";
  }
}
