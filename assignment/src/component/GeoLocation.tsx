import { useState, useEffect } from 'react';

export const useGeoLocation = () => {
  const [location, setLocation] = useState<{ lat: number | null; lng: number | null }>({ lat: null, lng: null });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
 const  [mapsUrl, setMapsUrl] = useState<string | null>(null);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setLocation({ lat, lng });
      
     
      const url = `https://www.google.com/maps?q=${lat},${lng}`;
      setMapsUrl(url);
       setLoading(true);
    };
                                                                  
    const errorCallback = (err: GeolocationPositionError) => {
      setError(err.message);
      setLoading(false);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, errorCallback);
    } else {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
    }
  }, []);

  return { location, error, loading,mapsUrl };
};

// export default useGeoLocation;
