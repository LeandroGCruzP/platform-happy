import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escoje un orfanato en el mapa</h2>
          <p>Muchos niños están esperando tu visita :)</p>
        </header>

        <footer>
          <strong>La Serena</strong>
          <span>Región de Coquimbo</span>
        </footer>
      </aside>

      <Map 
        center={[-29.9349005,-71.276335]}
        zoom={15}
        style={{ width:'100%', height:'100%' }}
      >
        {/* Mapa 1 */}
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        
        {/* Mapa 2 */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;