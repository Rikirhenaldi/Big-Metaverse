import React, {useState} from 'react'
import Image1 from '../assets/images/1.svg'
import Image2 from '../assets/images/2.svg'
import Image3 from '../assets/images/3.svg'
import { useSpring, animated, config } from 'react-spring'

export default function SectionTwoRight() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 0.7 },
    from: { opacity: 0.1 },
    reset: true,
    reverse: flip,
    delay: 400,
    config: config.molasses,
    onRest: () => set(!flip),
  })


  return(
        <section>
            <div className='boxRight h-screen -left-44 relative' >
              <div className='photoWrapper h-screen w-full flex flex-col'>
                  <animated.div style={props} className='BackgroundBlurPurpel2 w-72 h-72 blur-md rounded-full '></animated.div>
                  <animated.div style={props} className='BackgroundBlurPurpel w-72 h-72 blur-md rounded-full '></animated.div>
                  <img className="Image1 relative w-48 ml-56 -mb-20 rounded-md"
                  src={Image1} alt=""/> 
                  <img className="Image2 relative w-48 rounded-md" src={Image2} alt=""/> 
                  <img className="Image3 relative w-48 ml-56 -mt-20 rounded-md" src={Image3} alt=""/> 
              </div>
          </div> 
        </section>
  )
}
