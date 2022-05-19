import React, {useState} from 'react'
import {ImAppleinc, ImWindows8} from 'react-icons/im'
import { useSpring, animated, config } from 'react-spring'


export default function SectionTwoLeft() {

  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 0.2 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 300,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return (
    <section>
        <div className='boxLeft h-screen flex flex-col justify-center' >
              <animated.div style={props} className='leftBlur absolute '></animated.div>
              <div className='boxTitle flex flex-start'>
                <h2>BIG METAVERSE?</h2>
              </div>
              <div className='boxDescription flex flex-col flex-start items text-left'>
                <h2 className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus accusamus dolorem harum, vero architecto. Quasi nulla est possimus culpa libero incidunt blanditiis porro, quia asperiores deleniti aliquam maiores? Consequatur.</h2>
                
                <h2 className='mb-5'>Cursus nisl, eu, dui vitae. Egestas laoreet etiam odio sed. Et in felis orci turpis tempus ac et aliquet. Eu dui hac viverra ullamcorper vitae non. Aliquet quam mi, sagittis commodo libero id. Consectetur id sollicitudin euismod rutrum pretium.</h2>
              </div>

              <div className='buttonOsWrapper text-sm text-white uppercase w-5/5 '>
                  <button className='buttonOs flex justify-center items-center h-16 w-3/5 mb-5 box-border pr-12 pl-6 uppercase'>
                    <ImWindows8 color="white" size="22"/>
                    <h2>download for windows</h2>
                  </button>
                  <button className='buttonOs justify-center items-center flex h-16 w-3/5 mb-5 box-border pr-12 pl-4 uppercase'>
                    <ImAppleinc color="white" size="22"/>
                    <h2>download for macos</h2>
                  </button>
              </div>
              
            </div>
    </section>
  )
}
