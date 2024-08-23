var map = L.map("map");
map.setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
function err(error) {
  if (error.code == 1) {
    alert("Please allow location access");
  } else {
    alert("Cannot get current location");
  }
}

navigator.geolocation.watchPosition((pos) => {
  const { accuracy } = pos.coords;
  const marker = L.marker([59.410412, 56.791721]).addTo(map);
  const circle = L.circle([59.410412, 56.791721], {
    radius: accuracy,
  }).addTo(map);
  map.fitBounds(circle.getBounds());
}, err);
const mapFunction = () => {};
