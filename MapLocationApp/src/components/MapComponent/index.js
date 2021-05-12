import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerIcon from '../../images/marker-icon.png';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';


function MapComponent({lat, long}){
    //console.log(state);
    const position = [lat, long];

    const Icon=new L.Icon({
        iconUrl: MarkerIcon,
        iconRetinaUrl: require('../../images/marker-icon.png'),
        iconAnchor: null,
        popupAnchor:null,
        shadowUrl:null,
        shadowSize:null,
        shadowAnchor:null,
        iconSize: new L.Point(25, 41),
        className: 'leaflet-def-icon'
    });
    return(
        
        
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={Icon}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    )
}
export default MapComponent;