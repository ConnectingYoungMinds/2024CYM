'use client'

import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link'; 
import { useEffect, useState } from 'react';
import './main.css'; 
import Carousel from '@/pages/components/carousel';

export default function Home() {
  const [language, setLanguage] = useState('EN'); // Default language

  const toggleLanguage = () => {
    setLanguage((language) => (language === 'EN' ? 'FR' : 'EN'));
    // Here you would also handle the actual language switch in your application
  };

  //nav Background control 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // metaball
  // Set up state for each circle
  const [circle1, setCircle1] = useState({ x: 400, y: 200, xSpeed: 0.2, ySpeed: 0.34 });
  const [circle2, setCircle2] = useState({ x: 600, y: 400, xSpeed: -0.5, ySpeed: 0.5 });
  const [circle3, setCircle3] = useState({ x: 800, y: 600, xSpeed: 0.3, ySpeed: 0.6 });
  const [circle4, setCircle4] = useState({ x: 1000, y: 500, xSpeed: -0.1, ySpeed: 0.6 });
  const [circle5, setCircle5] = useState({ x: 900, y: 300, xSpeed: -0.2, ySpeed: 0.3 });
  const [bounds, setBounds] = useState({ minX: -150, minY: -150, maxX: typeof window !== 'undefined' ? window.innerWidth + 100 : 0, maxY: typeof window !== 'undefined' ? window.innerHeight + 100 : 0 });

  // Function to update circle position
  const updateCirclePosition = (circle, setCircle) => {
    let newX = circle.x + circle.xSpeed;
    let newY = circle.y + circle.ySpeed;

    // Check bounds and update position & speed accordingly
    if (newX < bounds.minX) {
      newX = bounds.minX + Math.random() * 10;
      circle.xSpeed = Math.abs(circle.xSpeed);
    } else if (newX > bounds.maxX) {
      newX = bounds.maxX - Math.random() * 10;
      circle.xSpeed = -Math.abs(circle.xSpeed);
    }
    if (newY < bounds.minY) {
      newY = bounds.minY + Math.random() * 10;
      circle.ySpeed = Math.abs(circle.ySpeed);
    } else if (newY > bounds.maxY) {
      newY = bounds.maxY - Math.random() * 10;
      circle.ySpeed = -Math.abs(circle.ySpeed);
    }

    setCircle({ ...circle, x: newX, y: newY });
  };

  // Use effect to mimic the mounted lifecycle hook for continuous update
  useEffect(() => {
    const interval = setInterval(() => {
      updateCirclePosition(circle1, setCircle1);
      updateCirclePosition(circle2, setCircle2);
      updateCirclePosition(circle3, setCircle3);
      updateCirclePosition(circle4, setCircle4);
      updateCirclePosition(circle5, setCircle5);
    }, 10);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [circle1, circle2, circle3, circle4, circle5]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>CYM Website</title>
        <link rel="icon" href="/cym-logo.ico" />
      </Head> 
      
      <div className="mainSection relative flex justify-center items-center">

        {/* background metaball */}
        <div className="metaballs absolute w-full h-full pointer-events-none z-0">
                <svg className="metasvg absolute z-0" style={{ filter: 'url(#gooify)' , width: '100%', height: '100%',   }}>
                  <defs>
                    <filter id="gooify" x="-10%" y="-10%" width="120%" height="110%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0
                              0 1 0 0 0
                              0 0 1 0 0
                              0 0 0 25 -10"
                      />
                    </filter>
                    <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#9653E6" />
                      <stop offset="100%" stopColor="#3C218F" />
                    </linearGradient>
                  </defs>
                  <g filter="url(#gooify)">
                    {[circle1, circle2, circle3, circle4, circle5].map((circle, index) => (
                      <circle
                        key={index}
                        className="blobb glow"
                        fill="url(#lavaGradient)"
                        cx={circle.x}
                        cy={circle.y}
                        r={index % 2 === 0 ? 170 - index * 30 : 90 + index * 30}
                      />
                    ))}
                  </g>
                </svg>
              </div>
        {/* nav bar */}
        <div className="nav w-full flex fixed top-0 justify-around">
            {/* nav bar icon */}
              <div className='z-200'>
                <Link className="navIcon" href="">
                  <img src="/cymIcon.png" />
                </Link>
              </div>
              {/* list nav item */}
              <div className= {`z-200 mt-10 mb-9  ${scrolled ? 'rounded-xl bg-purple-300 bg-opacity-25' : ''}`}>
                <Link className="navItem" href="/">About</Link>
                <Link className="navItem" href="/">2024 Conference</Link>
                <Link className="navItem" href="/">Get Involved</Link>
                <Link className="navItem" href="/">Past Competition</Link>
                <Link className="navItem" href="/">Sponsor</Link>
              </div>
              {/* language Translation */}
              <div>
                <div className="button r" id="button-3" onClick={toggleLanguage}>
                    <input type="checkbox" className="checkbox" />
                    <div className="knobs"></div>
                    <div className="layer"></div>
                  </div>
              </div>
        </div>

        
        {/* Title section */}
        {/* 1. Title name 
        2. Date, time, location 
        3. Two buttons  */}

        <div className='titleSection relative text-center w-full'>
            <h1 className='z-10 drop-shadow-lg font-bold text-6xl text-[#E1D1ED]'>Connecting Young Minds</h1>
            <p  className='mt-6 text-lg'>Billigual Research Conference</p>
            <p  className='text-base'><span className='font-bold'>September 24 - 26, 2024</span> at Ottawa</p>
            <div className='flex justify-center mt-6'>
              <button className='transition duration-500 ease-in-out registerBtn transition duration-700 ease-in-out mx-8 drop-shadow-lg rounded-md  bg-[#6C3FC5] transform hover:-translate-y-1 hover:scale-110 '><p className='font-bold'>Register</p></button>
              <button className='transition duration-500 ease-in-out sponsorBtn mx-8 drop-shadow-lg rounded-md  bg-[#fff] transform hover:-translate-y-1 hover:scale-110'><p className='font-bold text-[#6C3FC5]'>Sponsor</p></button>
           </div>
        </div>
      </div>

      <div className='bottom-0  w-full'>
           <Carousel></Carousel>
        </div>


      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9771D7" fillOpacity="1" d="M0,96L26.7,90.7C53.3,85,107,75,160,90.7C213.3,107,267,149,320,144C373.3,139,427,85,480,80C533.3,75,587,117,640,144C693.3,171,747,181,800,176C853.3,171,907,149,960,154.7C1013.3,160,1067,192,1120,197.3C1173.3,203,1227,181,1280,160C1333.3,139,1387,117,1413,106.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      
    </main>
  );
}
