"use client";
import React from 'react';
import Slider from 'react-slick';
import { bestseller } from "../coffeedata/bestsellerdata";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#6e4121] hover:text-[#ffffff] text-3xl"
      onClick={onClick}
    >
     →
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#8895c] text-[#6e4121] hover:text-[#ffffff] text-3xl"
      onClick={onClick}
    >
      ←
    </div>
  );
};

export default function BestSellerCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of cards to show at a time
    slidesToScroll: 5,
    prevArrow: <PrevArrow />, // Custom previous button
    nextArrow: <NextArrow />, // Custom next button
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          prevArrow: <PrevArrow />, // Keep arrows for smaller screens
          nextArrow: <NextArrow />,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          prevArrow: null, // Hide arrows for smaller screens
          nextArrow: null,
        }
      }
    ]
  };

  return (
    <div className="relative overflow-hidden">
      {bestseller.length > 0 ? (
        <Slider {...settings} className="slider flex p-6 px-12">
          {bestseller.map((item, index) => (
            <div className="fonting flex flex-col text-center w-36 px-6 py-2 !bg-[#F6E7C7] rounded-lg" key={index}>
              <h1 className="italic font-extrabold text-[#3D1C05]">BEST SELLERS!</h1>
              {item.image && <img src={item.image} alt={item.title} className="w-full h-auto" />}
              <h2 className="italic font-extrabold text-[#3D1C05]">{item.title}</h2><br />
              <div className="flex italic text-center justify-between font-extrabold text-[#3D1C05]">
                <div className='rating flex flex-row gap-2 items-center align-middle'>
              <img className='star' src='/images/star-512.png'/>
                <p>{item.rating ? item.rating : 'No rating available'}</p>
                </div>
                <p>{item.price ? `$ ${item.price}` : 'Price not available'}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

