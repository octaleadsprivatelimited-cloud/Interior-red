'use client';

const MapComponent = () => {
  return (
    <div className="w-full">
      <div className="w-full h-80 min-h-[320px] rounded-2xl shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890!2d78.1234567890!3d17.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPrimark%20DeStature%20F%20block%20702%20Bachupally%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dream Space Interiors Location - Primark DeStature, Bachupally, Hyderabad"
        ></iframe>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          📍 Primark DeStature, F block 702<br />
          Bachupally, Hyderabad
        </p>
        <a
          href="https://maps.google.com/?q=Primark+DeStature+F+block+702+Bachupally+Hyderabad"
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
  return <MapComponent />;
};

export default GoogleMap;
