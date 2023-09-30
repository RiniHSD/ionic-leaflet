import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}
  // ngOnInit () {

  // }

  ionViewDidEnter () {
    this.map = L.map('mapId').setView([0.6857757519245059, 101.56366279530683], 7)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '@copy; <a href="https://www.opensreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Base maps
    const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Tambahkan marker dan popup
    const customIcon = L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png' , // Gantilah dengan URL ikon kustom Anda
      iconSize: [32, 32], // Ukuran ikon (lebar, tinggi) dalam piksel
      iconAnchor: [16, 16], // Titik ancor ikon (pusat)
      popupAnchor: [0, -16], // Titik ancor popup (atas ikon)
    });

    const marker = L.marker([0.6857757519245059, 101.56366279530683], {icon: customIcon }).addTo(this.map);
    marker.bindPopup("Man Insan Cendekia Siak").openPopup();

    // Pilihan base map
    const baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Topo Map': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://opentopomap.org/about" target="_blank"OpenTopoMap</a> contributors',
      }),
      'Google Maps': L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; <a href="https://maps.google.com">Google maps</a>',
      }),
    };

    const overlayMaps = {
      'Sekolah': L.layerGroup([marker])
    }

    // Tambahkan Layer Control
    L.control.layers(baseMaps, overlayMaps).addTo(this.map);
  }

}
