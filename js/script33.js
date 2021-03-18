console.log('Lesson-33');

const mymap = L.map('mapid').setView([50.436516, 30.535126], 15);

const marker = L.marker([50.448384, 30.526913]).addTo(mymap);
const artCenterMarker = L.marker([50.441655, 30.521457]).addTo(mymap);
const cathedralSophiaMarker = L.marker([50.4529, 30.514328]).addTo(mymap);

marker.bindPopup("<b>UKRAINE hotel ****</b><br><p>Kyiv, 4 Instytutska str.</p>").openPopup();
artCenterMarker.bindPopup("<b>Pinchuk Art Centre</b><br><b>Location:</b><p>1/3-2 Velyka Vasylkivska / Baseyna str., Kyiv, Ukraine <br>+380 44 590-08-58</p>").openPopup();
cathedralSophiaMarker.bindPopup(
    "<b>SOPHIA of Kyiv</b><br><p>24, Volodymyrska street, Kyiv, Ukraine, 01001<br>Information on prices and excursions (044)279-22-56</p><br>"
)
var popup = L.popup();

const imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
    imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXJpbmFrYXJpa2EiLCJhIjoiY2ttZjh6dzhnMzNkMDJwa250Zm9qMXBzZSJ9.yYwSKAwNDe4t0bMyy-LY4w'
}).addTo(mymap);