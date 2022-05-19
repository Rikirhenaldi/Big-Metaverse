import React, {useState} from 'react'
import { data } from '../dataDummy/data'
import { useSpring, animated, config } from 'react-spring'

export default function SectionFiveContract() {
  const [flip, set] = useState(false)

    const props = useSpring({
        to: { opacity: 0.2 },
        from: { opacity: 0.1 },
        reset: true,
        reverse: flip,
        delay: 400,
        config: config.molasses,
        onRest: () => set(!flip),
    })
  return (
    <div className='sectionContract'>
        <div className='boxContract flex '>
            <h2 className='contractText'>Contract</h2>
            <h2 className='codeText'>0xc98a8EC7A07f1b743E86896a52434C4C6A0Dbc42</h2>
        </div>
        <div className='flex'>
            {data.map((i) => {
            return <div> 
                    <div className='boxChild'>
                        <h2 className='dataTitle'>{i.column}</h2>
                        <h2 className='dataValue'>{i.value}</h2>
                    </div>
                    <animated.div style={props} className='dataBoxBlur'></animated.div>
                    </div>
            })}
        </div>
    </div>
  )
}
