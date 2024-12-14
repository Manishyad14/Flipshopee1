import React from 'react';
 // Ensure the correct path to the video

const Socials = () => {
  return (
    <div className="flex justify-between items-start w-full h-screen p-5 bg-gray-100">
      <div className="w-1/2 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold text-black mb-4">Follow us on Instagram at</h2>
        <a
          href="https://www.instagram.com/dailywellnessai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline inline-block mb-6"
        >
          @dailywellnessai
        </a>
        <div className="flex justify-center">
          
        </div>
      </div>
      <div className="w-1/2 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold text-black mb-4">Follow us on YouTube at</h2>
        <a
          href="https://youtu.be/a3ICNMQW7Ok?si=toeDNpU_62BGcXQD"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline inline-block mb-6"
        >
          DailywellnessAI
        </a>
        <div className="flex justify-center">
          <iframe
            className="w-2/3 rounded-lg"
            src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=toeDNpU_62BGcXQD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Socials;