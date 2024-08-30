// import React from 'react';
// import useGeoLocation from './GeoLocation';


// function LocationComponent() {
//   const { location, error, loading } = useGeoLocation();
//   console.log(loading, error, location)
//     if(error){
//     return <>Error</>
//     }
//   return (
//     <div>
//       <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
//     </div>
//   );
// }

// export default LocationComponent;

import React from 'react';
import {useGeoLocation} from './GeoLocation';


const LocationComponent: React.FC = () => {
  const { location, error, loading, mapsUrl } = useGeoLocation();
console.log(loading, error, location)
    if(error){
    return <>Error</>
    }
 

  const handleClick = () => {
    if (mapsUrl) {
      window.open(mapsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div>
      <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
      {mapsUrl && (
        <button onClick={handleClick}>
          View on Google Maps
        </button>
      )}
    </div>
  );
};

export default LocationComponent;
