import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { team } from '../dataDummy/data';

export default function ImageSlider() {
  return (
    <Carousel
    showIndicators={true}
    showThumbs={false}

    className='w-44 h-44'>
        {team.map((people, indek) => {
            return <div key={people.id} className='cardImage'>
                    <img src={people.images} />
                    <h1 className="legend">{people.name}</h1>
                    <h2>{people.position}</h2>
                </div>
        })}
    </Carousel>
  )
}
