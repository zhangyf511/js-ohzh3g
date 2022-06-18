// Import stylesheets
import './style.css';
import { Map } from 'leaflet';
// Write Javascript code!
// const appDiv = document.getElementById('map');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

//创建高德地图
const amap = new AMap.Map('amap', {
  // fadeOnZoom: false,
  // navigationMode: 'classic',
  // optimizePanAnimation: false,
  // animateEnable: false,
  // dragEnable: false,
  // zoomEnable: false,
  // resizeEnble: true,
  // doubleClickZoom: false,
  // keyboardEnable: false,
  // scrollWheel: false,
  // expandZoomRange: true,
  // zooms: [1, 20],
  // mapStyle: 'normal',
  // features: ['road', 'point', 'bg'],
  // viewMode: '2D',
});

const map = new Map('map');
map.on('zoom', (evt) => {
  amap.setZoom(evt.target.getZoom());
});
map.on('move', (evt) => {
  amap.setZoomAndCenter(evt.target.getZoom(), [pt, lng, pt.lat]);
});
