// functie ce returneaza rezolutia ecranului
// functie ce returneaza data curenta
// functie ce returneaza pozitia geografica

const screenResolution = function() {
  return `${screen.width}x${screen.height}`;
};

const curdate = function() {
  return new Date().toDateString();
};

const pos = navigator.geolocation.getCurrentPosition(position => {
  console.log(position);
});

// document.getElementById("dateButton").addEventListener("click", onClickDate);
// document.getElementById("resolutionButton").addEventListener("click", onClickResolution);
// document.getElementById("locationButton").addEventListener("click", onClickLocation);

function onClickDate() {
  document.getElementById("date").innerHTML = curdate();
}

function onClickResolution() {
  document.getElementById("resolution").innerHTML = screenResolution();
}

function onClickLocation() {
  navigator.geolocation.getCurrentPosition(position => {
    document.getElementById(
      "location"
    ).innerHTML = `lat ${position.coords.latitude.toPrecision(
      5
    )} long ${position.coords.longitude.toPrecision(5)}`;
  });
}
