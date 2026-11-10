import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStats } from '../components/sections/TrustStats';
import { HomeShowcase } from '../components/sections/HomeShowcase';

export const HomePage = () => {
  return (
    <div className="page-transition">
      <Hero />
      <TrustStats />
      <HomeShowcase />
    </div>
  );
};
