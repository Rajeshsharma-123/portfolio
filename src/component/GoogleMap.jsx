import React from 'react';

function GoogleMap() {  // Keeping the original function name
    return (
        <div style={{ width: '80%', height: '80%' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14148.506055420055!2d82.9593168717552!3d27.558583827392102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996fccac953f769%3A0x10bb06950851b691!2sMaharajganj%2032800!5e0!3m2!1sen!2snp!4v1730531529947!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default GoogleMap;
