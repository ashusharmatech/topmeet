import React, { useEffect } from 'react';
import Navbar from '../../component/Navbar';
import ImportantMember from './ImportantMember';
import WhyJoin from './WhyJoin';


const Landing = () => {

  useEffect(() => {

  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex flex-col items-center justify-between bg-white py-20'>
        <ImportantMember></ImportantMember>
        <WhyJoin></WhyJoin>
      </div>
    </div>

  );
};

export default Landing;
