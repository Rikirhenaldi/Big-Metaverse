import React from 'react'
import '../index.css'
import '../App.css'
import BgVideo from '../components/video/wire.mp4'
import Navbar from '../components/Navbar'
import SectionTwoLeft from '../components/SectionTwoLeft'
import SectionTwoRight from '../components/SectionTwoRight'
import SectionFiveLeft from '../components/SectionFiveLeft'
import exampleVideo from '../assets/images/examplevideo.png'
import gameplay2 from '../assets/images/gameplay2.png'
import gameplay3 from '../assets/images/gameplay3.png'
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Flash from 'react-reveal/Flash';
import SectionFiveRight from '../components/SectionFiveRight'
import { data, team, textList1, textList2, textList3, article } from '../dataDummy/data'
import SectionFiveContract from '../components/SectionFiveContract'
import ImageSlider from '../components/ImageSlider'
import sampleImage from '../assets/images/exampleProfile.png'
import { Carousel } from 'react-responsive-carousel';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import {AiOutlineCheck} from 'react-icons/ai'
import {BiLoader} from 'react-icons/bi'
import articlesImage from '../assets/images/articles1.png'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headline: false,
      description: false,
      button: false,
      section1: React.createRef(),
      section2: React.createRef(),
      section3: React.createRef(),
      section4: React.createRef(),

    }
} 

componentDidMount(){
  setTimeout(() => {
    this.setState({headline: true})
  }, 1000);
  setTimeout(() => {
    this.setState({description: true})
  }, 2500);
  setTimeout(() => {
    this.setState({button: true})
  }, 4000);
}

executeScroll = (ref) => ref.current.scrollIntoView()

  render() {
    return (
      <div className='parent'>
        {/* <div classname='bg-yellow-500 absolute top-0 w-full h-screen bg-yellow-500'
        ></div> */}
        <section ref={this.state.section1} onWheel = {(e) => this.wheel(e)} className="section1 bg-gradient-to-r from-blue-900/30 bg-opacity-80 bg-clip-padding h-screen">
        <Navbar />
        <div className='videoWrapper'>
          <video autoPlay loop muted
          className='coverBlur w-screen h-screen absolute object-cover z-1 top-0'
          style={{
            zIndex: '-2',
          }}
          >
            <source src={BgVideo} type='video/mp4' />
          </video>
        </div>
          <section className='w-full h-screen flex flex-col items-center '>
            <div className='firstSection w-4/5 h-4/5'>
                <div className='flex flex-col justify-center items-center mb-6'>
                  {this.state.headline ? <Flip bottom>
                    <h1 className='centerTitle text-center'>Feel the new</h1>
                  </Flip>: <h1 className='centerTitle text-center'></h1>}
                  {this.state.headline ?<Flip top>
                    <h1 className='centerTitle text-center'>social life experience</h1>
                  </Flip>: null}
                </div>
                {this.state.description ?<Slide bottom>
                  <div className='flex flex-col justify-center items-center mb-12 px-72'>
                    <h2 className='descriptionText text-center'>The new experience of metaverse is coming, prepare 
                      <h2 className='descriptionText text-center'>yourself to feel the new experience.</h2>
                    </h2>
                  </div>
                </Slide> : 
                <div className='flex flex-col justify-center items-center mb-12 px-72'>
                  <h2 className='descriptionText2 text-center'>The new experience of metaverse is coming, prepare 
                      <h2 className='descriptionText2 text-center'>yourself to feel the new experience.</h2>
                  </h2>
                </div>
                }
                {this.state.button ? <Slide bottom>
                  <div className='flex flex-row justify-center items-center box-border'>
                    <button className='rounded-md w-48 h-14 bg-clip-padding justify-center align-center bg-gradient-to-r from-sky-900/80  to-gray-900 bg-clip-padding blur-md ml-48 '>
                    </button>
                    <button 
                    className='borderLeftButton rounded-md w-48 h-14 bg-clip-padding justify-center align-center relative -left-48 uppercase text-sm'
                    >
                      <h1>Explore now</h1>
                    </button>
                  </div>
                </Slide>
                : 
                <div className='flex flex-row justify-center items-center box-border'>
                    <button className='rounded-md w-48 h-14'>
                    </button>
                    <button 
                    className='rounded-md w-48 h-14 bg-clip-padding justify-center align-center relative -left-48 uppercase text-sm'
                    >
                      <h1></h1>
                    </button>
                  </div>
                }
              </div>
          </section>
        <div className='bgGradient bg-gradient-to-r from-slate-500/30 to-current bg-opacity-80 bg-clip-padding w-full h-screen absolute top-0 blur'></div>
        <div className='bgGradient2 bg-clip-padding w-full h-screen absolute top-0 blur'></div>
        </section>


        <div className='parentSectionFrom2'>
        <section className='section2 bg-clip-padding w-full h-screen flex flex-col justify-center items-center mb-20'>
          <div className=' flex flex-row justify-center items-center w-4/5 '>
            <div>
              <SectionTwoLeft />
            </div>
            <div>
              <SectionTwoRight />
            </div>
          </div>
        </section>

        <section className='section3 w-full h-screen flex flex-col justify-center items-center mb-20'>
          <div className='section3Title flex flex-col w-4/5 justify-center items-center'>
            <h1>A new world, new journey, and</h1>
            <h1>new social life has begin</h1>
            <img className="exampleVideoStyle w-4/5 h-4/5 rounded-md mt-5"
            src={exampleVideo} alt=""/> 
          </div>
        </section>

        <section className='section4 w-full h-screen flex flex-col justify-center items-center mb-20'>
          <div className='section4Title flex flex-col w-4/5 '>
            <h1 className='mb-8'>Gameplay</h1>
            <div className='grid grid-rows-1 grid-flow-col gap-4'>
                <img className="exampleVideoStyle w-4/5 h-4/5 rounded-md mt-5"
                src={gameplay2} alt=""/> 
                <img className="exampleVideoStyle w-4/5 h-4/5 rounded-md mt-5"
                src={gameplay2} alt=""/> 
                <img className="exampleVideoStyle w-4/5 h-4/5 rounded-md mt-5"
                src={gameplay3} alt=""/> 
            </div>
          </div>
        </section>

        <section className='section5 pl-28 pr-28'>
          <div className='boxRow'>
              <div className=''>
                <SectionFiveLeft />
              </div>
              <div className=''>
                <SectionFiveRight />
              </div>
          </div>
            <SectionFiveContract/>
        </section>
        
        <section className='section6 h-screen w-screen flex flex-col justify-center items-center'> 
            <div>
                <h2 className='section6Title'>Our Team</h2>
            </div>
            <Carousel
            showIndicators={true}
            showThumbs={false}   
            className='boxCarousel' 
            >
              {team.map((user, index) => {
                return <div className='cardImage' id={user.id}>
                        <img src={user.images} className='userImage'/>
                        <div className='NameBox'>
                          <h2 className='userName'>{user.name}</h2>
                          <h2 className='position'>{user.position}</h2>
                        </div>
                      </div>
              })}
            </Carousel>
        </section>

        <section className='section7 flex flex-col items-center h-screen mt-20'>
          <h2 className='section7Title'>Roadmap</h2>
          <div className='roadMap'>
            <div className='flex justify-center items-center'>
              <IoIosArrowDropleftCircle color="white" size="44" />
              <h2 className='buttonFuturePast ml-4 '>Past</h2>
            </div>
            <div className='flex justify-center items-center'>
              <h2 className='buttonFuturePast mr-4 '>Future</h2>
              <IoIosArrowDroprightCircle color="white" size="44" />
            </div>
          </div>
          
          <div className='flex mt-4'>
              <div className='boxList1 pl-8 pr-8 pt-10 box-content mr-8'>
                <h2 className='buttonFuturePast mb-4'>Q1  #1  2022</h2>
                {textList1.map((i) => {
                return <div className="flex h-10 mt-1">
                      <AiOutlineCheck color="white" size="16" />
                      <h2 className='listItemQ1 ml-2'>{i.list}</h2>
                      </div>
                })}
              </div>

              <div className='boxList2 pl-8 pr-8 pt-10 box-content'>
                <h2 className='buttonFuturePast mb-4'>Q2  #2  2022</h2>
                {textList2.map((i) => {
                return <div className="flex h-10 mt-1 ">
                      {i.icon === 1 ? 
                      <AiOutlineCheck color="white" size="16" />
                      : 
                      <BiLoader color="white" size="16" />
                      }
                      <h2 className='listItemQ1 ml-2'>{i.list}</h2>
                      </div>
                })}
              </div>

              <div className='boxList3 pl-8 pr-8 pt-10 box-content ml-8'>
                <h2 className='buttonFuturePast mb-4'>Q3  #3  2022</h2>
                {textList3.map((i) => {
                return <div className="flex h-10 mt-1">
                {i.icon === 1 ? 
                <AiOutlineCheck color="white" size="16" />
                : 
                <BiLoader color="white" size="16" />
                }
                <h2 className='listItemQ1 ml-2'>{i.list}</h2>
                </div>
                })}
              </div>
          </div>
        </section>

        <section className='section8 flex flex-col items-center h-screen mt-20'>
          <div className='latestArticles'>
            <h2 className='section8Title'>Latest article</h2>
            <h2 className='showAll'>Show all</h2>
          </div>
          <div className='cardWrapper flex justify-between'>
            {article.map((i) => {
              return <Link>
                  <div className="cardArticles flex flex-col justify-center items-center box-content pt-4 pl-2 pr-2 ">
                    <img src={i.image} className='articlesImage'/>
                    <div className='boxNews'>
                      <h2>{i.type}</h2>
                    </div>
                    <div className='titleArticleBox'>
                      <h2>{i.title}</h2>
                    </div>
                    <div className='boxNews'>
                      <h2>{i.description}</h2>
                    </div >
                    <div className='readMore'>
                      <h2>Read more</h2>
                    </div>
                  </div>
              </Link>
            })}
          </div>
        </section>

        <footer className='footer'>

        </footer>
        </div>

      </div>
    )
  }
}

export default Home