"use client";
import AllProducts from '@/components/AllProducts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Recommendations from '@/components/Recommendations';
import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  return (
    <div>
      <Header onSearch={setSearchQuery}/>
      <AllProducts search={searchQuery}/>
      <Recommendations search={searchQuery} />
      {/* <section className="py-8 text-center bg-blue-600 text-white">
        <h2 className="text-2xl font-bold">Limited Time Offer!</h2>
        <p className="mt-2">Get 20% off your first purchase. Use code: FIRST20</p>
      </section> */}
      <Footer />
    </div>
  );
}