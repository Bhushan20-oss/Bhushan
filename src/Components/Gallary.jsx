import React, { memo } from 'react';
import InfiniteScroll from './InfiniteScroll';
import { color } from 'framer-motion';

const items = [
  { content: <img src='./images/sc.jpeg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc1.jpeg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc2.jpg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc3.png' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc4.png' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc5.jpg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc6.jpeg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc7.jpeg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc8.jpg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc9.jpg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <img src='./images/sc10.jpeg' loading="lazy" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
  { content: <video src='./images/rishikesh1.mov' preload="metadata" className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center rounded-xl will-change-transform backface-hidden" /> },
];

const Gallary = () => {
  return (
    <>
      <div className='bg-gray-800 z-50 overflow-hidden'>
        <div
          style={{
            height: '800px',
            position: 'relative',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        >
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={2}
            autoplayDirection="up"
            pauseOnHover={true}
          />
        </div>
      </div>
    </>
  );
};

export default memo(Gallary);
