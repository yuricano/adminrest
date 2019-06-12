export class Map {
  longitude: number;
  latitude: number;
  zoom: number;
  radius: number;
  opacity: number;

  constructor(coords?) {
    this.longitude =  coords? coords.lat : 0;
    this.latitude = coords? coords.lng : 0;
    this.zoom = 13;
    this.radius = 5000;
    this.opacity = 0.3;
  }
}
