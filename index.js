// Import stylesheets
import './style.css';
import { Map } from 'leaflet';
// Write Javascript code!
// const appDiv = document.getElementById('map');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

//创建高德地图
var amap = new AMap.Map('amap', {
  fadeOnZoom: false,
  navigationMode: 'classic',
  optimizePanAnimation: false,
  animateEnable: false,
  dragEnable: false,
  // mapStyle: 'amap://styles/whitesmoke',
  mapStyle: 'amap://styles/242e59d29506cac6a4d60c3ad08f4951',
  zoomEnable: false,
  resizeEnble: true,
  doubleClickZoom: false,
  keyboardEnable: false,
  scrollWheel: false,
  expandZoomRange: true,
  zooms: [1, 20],
  features: ['road', 'point', 'bg'],
  viewMode: '2D',
});
// var amap = new AMap.Map('amap');

const map = new Map('map');
// var map = new Map('map');
map.on('zoom', (evt) => {
  amap.setZoom(evt.target.getZoom());
});
map.on('move', (evt) => {
  const pt = evt.target.getCenter();
  amap.setZoomAndCenter(evt.target.getZoom(), [pt.lng, pt.lat]);
});
map.setView([39.909186, 116.397411], 10);
