import React from 'react'
import "./Freshers.css"

import F1 from "./FreshersImages/1.png"
import F2 from "./FreshersImages/2.png"
import F3 from "./FreshersImages/3.png"
import F4 from "./FreshersImages/4.png"
import F5 from "./FreshersImages/5.png"

import { Button } from '@chakra-ui/react'

import { useMediaQuery } from '@chakra-ui/react'


export default function Freshers({ mode }) {

    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')


    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });


    return (
        <div className='freshers-outer'>
            <div className='freshers-top'>
                <div className='freshers-top-left'>
                    <div className='freshers-top-title' style={{ color: mode === "dark" ? "white" : "#5D5D5D" }}>
                        One Step Closer To Your <label style={{ color: "#BC312E" }}>{" "}New Job{" "}</label>
                        Check Open roles for
                        <label style={{ color: "#BC312E" }}>{" "}FRESHER’S</label><br />
                        <div style={{ marginTop: "5%", width: "100%", display: "flex", justifyContent: "left" }}>
                            <Button color="white" backgroundColor="#BC312E">Check open roles</Button>
                        </div>
                    </div>

                </div>
                <div className='freshers-top-right'>
                    <img src={F1} style={{ width: "100%" }} />
                </div>
            </div>

            <div className='freshers-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Explore roles</u>
            </div>

            <div className='freshers-grid'>
                <div className='freshers-element'>
                    <div className='fresher-element-left'>
                        <img src={F2} style={{ width: "100%" }} />
                    </div>
                    <div className='fresher-element-right'>
                        <div className='fresher-element-content' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}>
                            This is a dummy text, to be replaced with how wehelps recent graduates kickstart their career by joining us.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                        </div>
                        <div style={{ marginTop: "5%", width: "100%", display: "flex", justifyContent: "left" }}>
                            <Button color="white" backgroundColor="#BC312E">Get in touch</Button>
                        </div>
                    </div>
                </div>



                <div className='freshers-element' style={{ flexDirection: isLargerThan1000 ? "row-reverse" : 'column' }}>
                    <div className='fresher-element-left'>
                        <img src={F3} style={{ width: "100%" }} />
                    </div>
                    <div className='fresher-element-right'>
                        <div className='fresher-element-content' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}>
                            Career advancement is the upward trajectory of a person's professional journey. Examples include progressing from an entry-level position to management and transitioning from one occupation to another.Professional development goals are objectives you can set for yourself to help further your career. These might include taking steps to learn relevant skills, expand your professional network, or find more satisfaction at work.
                        </div>
                        <div style={{ marginTop: "5%", width: "100%", display: "flex", justifyContent: "left" }}>
                            <Button color="white" backgroundColor="#BC312E">Get in touch</Button>
                        </div>
                    </div>
                </div>




                <div className='freshers-element'>
                    <div className='fresher-element-left'>
                        <img src={F4} style={{ width: "100%" }} />
                    </div>
                    <div className='fresher-element-right'>
                        <div className='fresher-element-content' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}>
                            Whether you’re graduating with an undergraduate degree, Masters degree, MBA or PhD, Fawr team have positions available globally. While we have internships throughout the year, the majority of our technical internships take place in the summer and last between 12 to 16 weeks. Internships are a great way to immerse yourself in Amazon’s culture to see if we’re a good fit for you and your career goals.
                        </div>
                        <div style={{ marginTop: "5%", width: "100%", display: "flex", justifyContent: "left" }}>
                            <Button color="white" backgroundColor="#BC312E">Get in touch</Button>
                        </div>
                    </div>
                </div>
            </div>



            <div className='freshers-title' style={{ color: "#BC312E" }}>
                WHY JOIN US
            </div>

            <div className='freshers-join'>
                <div className='freshers-box' style={{ border: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <div className='freshers-box-title'>Training</div>
                    <div className='freshers-box-content' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}>
                        A professional learning experience that offers meaningful, practical work related to a student's field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills.
                    </div>
                    <div className='freshers-learn-more' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}><u>Learn More</u></div>
                </div>

                <div className='freshers-box' style={{ border: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <div className='freshers-box-title'>Benefits, Wellness & Compensation</div>
                    <div className='freshers-box-content' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}>
                        Research studies related to wellness indicate that Americans who take good care of themselves and make healthy lifestyle choices are healthier, happier, more productive, miss less work, and have lower healthcare costs
                    </div>
                    <div className='freshers-learn-more' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}><u>Learn More</u></div>
                </div>

                <div className='freshers-box' style={{ border: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <div className='freshers-box-title'>Commitment to Diversity</div>
                    <div className='freshers-box-content' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}>
                        we understand and accept that everyone is different, that we respect those differences, and that we're open to listen to different points of views and leverage them to learn from each other.
                    </div>
                    <div className='freshers-learn-more' style={{ color: mode === "dark" ? "#908B89" : "#5D5D5D" }}><u>Learn More</u></div>
                </div>
            </div>

            <div style={{ width: "100%", marginTop: "5%" }}>
                <img src={F5} style={{ width: "100%" }} />
            </div>
            <div style={{ width: "100%", marginTop: "5%", display: "flex", justifyContent: "center" }}>
                <Button color="white" backgroundColor="#BC312E">Join Us now</Button>
            </div>

        </div>
    )
}
