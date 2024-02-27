import React from 'react';

const OfficeLocation = () => {
  return (
    <div className="-mt-8">
      <p> অফিস-সিকদার টাউওয়ার নিচতলা</p>
      <p> ইউনিয়ন ব্যাংকের নিচে </p>
      <p>মেইন রোড় আমিরাবাদ, লোহাগাড়া, চট্টগ্র্রাম.</p>

      <iframe
        width="250"
        height="150"
        frameBorder="0"
        allowFullScreen={true}
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.8063452393867!2d92.0981144!3d22.0187299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad0dfc06dba835%3A0x81ee624916a3b31d!2sHafezia%20Tours%20And%20Travels!5e0!3m2!1sen!2sbd!4v1698943209272!5m2!1sen!2sbd"
      ></iframe>
    </div>
  );
};

export default OfficeLocation;
