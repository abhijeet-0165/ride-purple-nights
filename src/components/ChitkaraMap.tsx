
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const ChitkaraMap = () => {
  // In a real app, this would integrate with a mapping API like Google Maps or Mapbox
  // For now, creating a placeholder with Chitkara University's location
  
  const [mapAPIKey, setMapAPIKey] = useState<string>('');
  const [showMapInput, setShowMapInput] = useState<boolean>(true);
  
  // Coordinates for Chitkara University, Punjab
  const chitkaraLocation = {
    lat: 30.516558,
    lng: 76.659569,
    address: 'Chitkara University, Rajpura, Punjab, India'
  };
  
  const handleMapKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMapInput(false);
  };

  return (
    <div className="h-full w-full relative">
      {/* This is a placeholder. In a real implementation, you'd use a proper map API */}
      <div className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center p-4">
        {showMapInput ? (
          <div className="w-full max-w-md text-center">
            <h3 className="text-white text-xl mb-4">Map Integration</h3>
            <p className="text-gray-300 mb-4">
              To display an interactive map, you would need to integrate with a mapping API like Google Maps or Mapbox.
            </p>
            <form onSubmit={handleMapKeySubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="apiKey" className="text-white text-left">Map API Key</label>
                <input 
                  type="text"
                  id="apiKey"
                  value={mapAPIKey}
                  onChange={(e) => setMapAPIKey(e.target.value)}
                  placeholder="Enter your Map API Key"
                  className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
              >
                Load Map
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-4">
              <MapPin className="text-purple-500 h-6 w-6 mr-2" />
              <span className="text-white font-medium">{chitkaraLocation.address}</span>
            </div>
            <div className="relative w-full h-full border-2 border-purple-500/30 rounded-md overflow-hidden">
              <img 
                src="https://i.imgur.com/nVMcPUR.jpg" 
                alt="Map of Chitkara University" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-pulse">
                  <MapPin className="text-purple-500 h-10 w-10" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-md">
                <p className="text-white text-xs">
                  Lat: {chitkaraLocation.lat}, Lng: {chitkaraLocation.lng}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              This is a placeholder map. In a real application, you would integrate with a mapping service API.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ChitkaraMap;
