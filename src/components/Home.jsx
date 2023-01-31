import React from 'react'
import vg from "../assests/2.png"
import vi from "../assests/5.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
        <div className='home' id="home">
            <main>
                <img src={vi} alt="Graphics"/>
                <h1>
                    Technopolis
                </h1>
                <p>Solution to all your problems</p>
            </main>
        </div>
        <div className='home'>
            <img src={vg} alt="Graphics"/>
            <div>
                <p>
                    We are your one and only solution to the tech problems you face everyday. 
                    We are leading tech company whose aim is to increase the problem solving ability in children.
                </p>
            </div>
        </div>


        <div className="home3" id="about">
            <div>
                <h1>
                    Who we are?
                </h1>
                <p>
                Technopolis is an end-to-end Product Development Company that helps its customer with Product Planning, Interaction Design & Architecture, Product Engineering & Deployment. 

Specialised in converging conventional tech and effective use of disruptive technologies to ensure customers become an innovative disruptor to lead their competition.
Services include-
|| Product Engineering || Data Engineering Services || Agile Digital Transformation || Custom Application Development ||   
                </p>
            </div>
        </div>

        <div className="home4" id="brands">

            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s",

                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay:"0.5s",
                        
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay:"0.7s",
                        
                    }}>
                        <AiFillYoutube/>
                        <p>YouTube</p>
                    </div>
                    <div style={{
                        animationDelay:"1s",
                        
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  );
}

export default Home
