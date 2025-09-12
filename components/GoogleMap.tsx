'use client';

import { Wrapper, Status } from '@googlemaps/react-wrapper';

const MapComponent = () => {
  return (
    <div className="w-full">
      <div className="w-full h-80 min-h-[320px] rounded-2xl shadow-lg bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="text-4xl mb-4">🗺️</div>
          <p className="text-lg font-medium">Interactive Map</p>
          <p className="text-sm">Add your Google Maps API key to enable</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          📍 123 Design Street, New York, NY 10001
        </p>
        <a
          href="https://maps.google.com/?q=123+Design+Street+New+York+NY+10001"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent hover:text-accent/80 font-medium mt-2"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

const GoogleMap = () => {
  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <div className="w-full h-80 rounded-2xl shadow-lg bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
              <p>Loading map...</p>
            </div>
          </div>
        );
      case Status.FAILURE:
        return <MapComponent />;
      case Status.SUCCESS:
        return <MapComponent />;
    }
  };

  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
      render={render}
    />
  );
};

export default GoogleMap;
