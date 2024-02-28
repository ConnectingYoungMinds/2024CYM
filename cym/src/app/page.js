'use client'

import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link'; 
import { useEffect, useState } from 'react';
import './main.css'; 

export default function Home() {
  const [language, setLanguage] = useState('EN'); // Default language

  const toggleLanguage = () => {
    setLanguage((language) => (language === 'EN' ? 'FR' : 'EN'));
    // Here you would also handle the actual language switch in your application
  };

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
      
      <div className="mainSection relative">
        <div className="metaballs absolute w-full h-full pointer-events-none -z-1">
                <svg className="metasvg" style={{ filter: 'url(#gooify)' , width: '100%', height: '100%',  zIndex: '-1' }}>
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
             
        <div className="nav flex justify-around">
            {/* nav bar icon */}
              <div className='z-10'>
                <Link className="navIcon" href="">
                  <img src="/cymIcon.png" />
                </Link>
              </div>
              {/* list nav item */}
              <div className='z-10 mt-6'>
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
        </div>
    </main>
  );
}
