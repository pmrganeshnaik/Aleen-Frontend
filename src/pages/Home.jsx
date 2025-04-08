import React from 'react';

import HeroSection from '../components/HeroSection';
import EssentialSection from '../components/EssentialSection';

function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-grow">
        <HeroSection />
        <EssentialSection />
        {/* Add more sections as needed */}
      </main>
    </div>
  );
}

export default Home;