import React from 'react'
import "./Blog.css"

import Blog_img1 from "./BlogImages/Blog_img1.png"

import B1 from "./BlogImages/B1.png"
import B2 from "./BlogImages/B2.png"
import B3 from "./BlogImages/B3.png"

import { Card, CardHeader, CardBody, CardFooter, Image, Button, Heading, Text, Stack, ButtonGroup, Divider } from '@chakra-ui/react'

export default function Blog() {
    return (
        <div className='blog-outer'>
            <div className='blog-grid'>
                <div className='blog-grid-element'>
                    <div className='blog-grid-img'>
                        <img className='blog-img' src={B1} />
                    </div>
                    <div className='blog-grid-date'>
                        01-Jan-2021
                    </div>
                    <div className='blog-grid-title'>
                        Research Methodologies
                    </div>
                    <div className='blog-grid-text'>
                        Research methods are different from research methodologies because they ... a list of quantitative, qualitative, and mixed research methods.
                    </div>
                </div>



                <div className='blog-grid-element'>
                    <div className='blog-grid-img'>
                        <img className='blog-img' src={B2} />
                    </div>
                    <div className='blog-grid-date'>
                        01-Feb-2021
                    </div>
                    <div className='blog-grid-title'>
                        Business Missions
                    </div>
                    <div className='blog-grid-text'>
                        A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them.On the other hand, ...
                    </div>
                </div>


                <div className='blog-grid-element'>
                    <div className='blog-grid-img'>
                        <img className='blog-img' src={B3} />
                    </div>
                    <div className='blog-grid-date'>
                        01-March-2021
                    </div>
                    <div className='blog-grid-title'>
                        Calm Thinking
                    </div>
                    <div className='blog-grid-text'>
                        What does calm minded mean?
                        Calmness is the mental state of peace of mind being free from agitation, excitement, or disturbance..
                    </div>
                </div>


            </div>
        </div>
    )
}
