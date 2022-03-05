import React, {useState} from 'react'
import { useSpring, animated, config } from 'react-spring'
import coin from '../assets/images/sampleCoin.png'

export default function SectionFiveRight() {
    const [flip, set] = useState(false)

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0.1 },
        reset: true,
        reverse: flip,
        delay: 400,
        config: config.molasses,
        onRest: () => set(!flip),
    })

  return (
    <section>
        <div className='boxSectionFive'>
        <animated.div style={props} className='boxBehind blur-md'>
        </animated.div>
            <div>
                <img className="bigCoin" src={coin} alt=""/> 
            </div>
        </div>
    </section>
  )
}
