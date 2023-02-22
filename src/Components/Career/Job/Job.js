import React, { useState } from 'react'
import "./Job.css"

import J1 from "./JobImages/1.png"
import J2 from "./JobImages/2.png"
import J3 from "./JobImages/3.png"
import J4 from "./JobImages/4.png"
import J5 from "./JobImages/5.png"
import J6 from "./JobImages/6.png"
import J7 from "./JobImages/7.png"
import J8 from "./JobImages/8.png"
import J9 from "./JobImages/9.png"
import J10 from "./JobImages/10.png"
import J11 from "./JobImages/11.png"
import J12 from "./JobImages/12.png"
import J13 from "./JobImages/13.png"
import J14 from "./JobImages/14.png"
import J15 from "./JobImages/15.png"
import J16 from "./JobImages/16.png"

import { Input, Stack } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Button
} from '@chakra-ui/react'

import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'

import { useMediaQuery } from '@chakra-ui/react'

export default function Job({ mode }) {

    // window.scroll({
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    // });

    const [selected, setSelected] = useState(0)

    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)')
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    const jobData = [
        {
            title: "Life @ Company",
            content: "Our company's success is based on our people-oriented culture, which touches the lives of everyone it interacts with—including customers, partners, stakeholders, and workers. We strongly support an open culture, welcoming input, and actively putting it into action since we think that greatness is not a destination but a path of continual progress.",
            img: J6,
            link: "/Life@BDM"
        },

        {
            title: "Student/Intern Program",
            content: "A BDM internship is the best approach to see if this company is where you should start your career. Before applying for one of our full-time positions, you may learn more about our company through our internship programmes and obtain practical job experience.",
            img: J7,
            link: "/Student / Intern Program"
        },

        {
            title: "Learning & Development",
            content: "The goal of learning and development, a division of human resources, is to enhance both individual and group performance. The purpose of learning and development, also known as training and development, is to match group and individual goals and performance with the overarching vision and goals of the organisation. It is a component of talent management strategies.",
            img: J8,
            link: "/Learning & Development"
        },

        {
            title: "Diversity & Inclusion",
            content: "At BDM, we are dedicated to fostering a culture and setting that values inclusion and diversity on all fronts. Our variety is a strength. It improves us. It strengthens us. It fuels original thought. We support and bolster an inclusive and equitable culture where everyone feels heard, their opinions are respected, and their contributions are recognised.",
            img: J9,
            link: "/Diversity & Inclusion"
        },
    ]

    const benefitData = [
        {
            title: "Health and Fitness",
            content: "Focusing on one's health is something we at BDM think is crucial. Our in-house nutritionist and fitness instructors are dedicated to promoting a healthy work environment for everybody."
        },
        {
            title: "Health and Fitness",
            content: "Focusing on one's health is something we at BDM think is crucial. Our in-house nutritionist and fitness instructors are dedicated to promoting a healthy work environment for everybody."
        },

        {
            title: "Medical Coverage",
            content: "All employees are protected by a comprehensive health insurance plan, which includes coverage for spouses and children."

        },
        {
            title: "Medical Coverage",
            content: "All employees are protected by a comprehensive health insurance plan, which includes coverage for spouses and children."

        },

        {
            title: "Flexi benefits",
            content: "With the help of our flex benefit plan, emplyees can change the elements of their pay depending on perks like travel allowance, phone bill etc."
        },
        {
            title: "Flexi benefits",
            content: "With the help of our flex benefit plan, emplyees can change the elements of their pay depending on perks like travel allowance, phone bill etc."
        },
    ]

    const jobs = [
        {
            name: "Full Stack Developer",
            location: "Bangalore"
        },
        {
            name: "Senior Executive",
            location: "Bangalore"
        },
        {
            name: "Senior Engineering Manager",
            location: "Bangalore"
        },
        {
            name: "Full Stack Developer",
            location: "Bangalore"
        },
        {
            name: "Senior Executive",
            location: "Bangalore"
        },
        {
            name: "Senior Engineering Manager",
            location: "Bangalore"
        },

        {
            name: "Full Stack Developer",
            location: "Bangalore"
        },
        {
            name: "Senior Executive",
            location: "Bangalore"
        },
        {
            name: "Senior Engineering Manager",
            location: "Bangalore"
        },

    ]

    const rolesContent = ["We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position.",
        "We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position.",
        "We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position.",
        "We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position.",
        "We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position.",
        "We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position.",
        "We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position.",
        "We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position.",
        "We encourage ambitious college students and recent graduates to learn more about our Associate Consultant (AC) position."
    ]

    const rolesPoints = [
        {
            points: ["Generate a higher return on marketing and promotional investments",
                "Increase sales to existing customers",
                "Collecting of trends in consumer behavior, data, and feedback that helps businesses deeply understand their customers and their purchasing decisions."]
        },

        {
            points: ["Finding valuable and quantifiable insights to help teams understand their customers.",
                "Responsible for building a user insights function that supports the velocity and accuracy of business and safety decisions.",
                "To gather insights from various sources, including customer feedback surveys, social media, and customer reviews."]
        },
        {
            points: ["To Engage uses data and AI to automate marketing tasks and workflows, while tracking impact and reach.",
                "Using Automation software to complete repetitive marketing tasks designed to nurture sales leads, personalize marketing messages and content."]
        },
        {
            points: ["Producing clean, efficient code based on specifications",
                "Testing and deploying programs and systems",
                "Fixing and improving existing software"]
        },
        {
            points: ["work with clients to understand their needs and to agree the scope of each consulting project.",
                "Explore business problems and modelling different solutions",
                "Develop and implementing new procedures or training to support the changes proposed.",
                "To consult end to end results and run a smooth process."]
        },
        {
            points: ["To manage and collection data from different sectors of digital marketing .",
                "Manage with the overall management of different sectors that supports business functions.",
                "coordinate projects and programs, evaluate business trends and make recommendations to improve operations efficiencies."]
        },
        {
            points: ["Assist in the preparation of budgets, managing records and receipts, reconciling daily, monthly and yearly transactions.",
                "Tracking and recording every single transaction and payroll  associated.",
                "Working with audits, invoices and budget preparations for digital marketing."]
        },
        {
            points: ["To take charge of all the digital channels and uses them to drive brand awareness and generate leads.",
                "To stay up to date with the best digital marketing tools on the market to help them accomplish work faster and more efficiently.",
                "To monitor brand performance by tracking audience growth, engagement, organic reach, and click rates."]
        },
        {
            points: ["Create and put into action HR initiatives and strategies that are in line with the overall business plan.",
                "Plan, coordinating, and supervising the employment of new employees.",
                "strength the companies involvement through various strong connections.",
                "Create and keep track of the organization’s overall HR strategies, methods, tactics, and procedures."]
        },
    ]

    const rolesLink = ["", "", "", "", "", "", "", "", ""]
    return (
        <div className='job-outer'>
            <div style={{ width: "100%" }}>
                <img src={J1} style={{ width: "100%" }} />
            </div>

            <div className='job-search' style={{ backgroundColor: mode === "dark" ? "#2C2A2D" : "#F2F2F2" }}>
                <Stack direction={isLargerThan1400 ? "row" : "column"} spacing={5} width="100%">
                    <Input placeholder='Enter job role' color={mode === "dark" ? "white" : "black"} borderColor={mode === "dark" ? "white" : "black"} _focus={{ borderColor: mode === "dark" ? "white" : "black" }} _hover={{ borderColor: mode === "dark" ? "white" : "black" }} focusBorderColor={mode === "dark" ? "white" : "black"} _placeholder={{ color: mode === "dark" ? "white" : "black", fontSize: isLargerThan1400 ? "1rem" : "0.75rem" }} />
                    <Menu>
                        <MenuButton
                            transition='all 0.2s'
                            borderWidth='1px'
                            borderRadius="0.5rem"
                            width={isLargerThan1400 ? "50%" : "100%"}
                            _focus={{ boxShadow: 'outline', borderColor: mode === "dark" ? "white" : "black" }}
                            color={mode === "dark" ? "white" : "black"} borderColor={mode === "dark" ? "white" : "black"} _hover={{ borderColor: mode === "dark" ? "white" : "black" }} focusBorderColor={mode === "dark" ? "white" : "black"}
                        >
                            <Stack direction="row" alignItems="center" display="flex" justifyContent={isLargerThan1400 ? "space-around" : "space-between"} paddingLeft={isLargerThan1400 ? "0%" : "2%"}><label style={{ fontSize: isLargerThan1400 ? "1rem" : "0.75rem" }}>Choose job category</label><ChevronDownIcon fontSize="2rem" /></Stack>
                        </MenuButton>
                        <MenuList >
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Input placeholder='Choose job location' color={mode === "dark" ? "white" : "black"} borderColor={mode === "dark" ? "white" : "black"} _focus={{ borderColor: mode === "dark" ? "white" : "black" }} _hover={{ borderColor: mode === "dark" ? "white" : "black" }} focusBorderColor={mode === "dark" ? "white" : "black"} _placeholder={{ color: mode === "dark" ? "white" : "black", fontSize: isLargerThan1400 ? "1rem" : "0.75rem" }} />
                    <Search2Icon display="flex" alignItems="center" justifyContent="center" boxSize={isLargerThan1400 ? "8" : "4"} color={mode === "dark" ? "white" : "black"} />
                </Stack>
                <div className='jobs-track'>
                    Track Application {">"}
                </div>
            </div>

            <div className='job-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Explore roles</u>
            </div>

            <div className='job-roles'>
                <div className='job-roles-left'>
                    <Stack direction="column" spacing={10} width="100%">
                        <Stack direction={isLargerThan500 ? "row" : "column"}>
                            <Button onClick={(e) => setSelected(0)} variant="outline" colorScheme="red">Analytics/Customer Insights</Button>
                        </Stack>

                        <Stack direction={isLargerThan500 ? "row" : "column"} spacing={10}>
                            <Button onClick={(e) => setSelected(1)} variant="outline" colorScheme="red">User Insights</Button>
                        </Stack>

                        <Stack direction={isLargerThan500 ? "row" : "column"} spacing={10}>
                            <Button onClick={(e) => setSelected(2)} variant="outline" colorScheme="red">Automation</Button>
                            <Button onClick={(e) => setSelected(3)} variant="outline" colorScheme="red">Development</Button>
                        </Stack>

                        <Stack direction={isLargerThan500 ? "row" : "column"} spacing={10}>
                            <Button onClick={(e) => setSelected(4)} variant="outline" colorScheme="red">Consulting Services</Button>
                            <Button onClick={(e) => setSelected(5)} variant="outline" colorScheme="red">Business Services</Button>
                        </Stack>


                        <Stack direction={isLargerThan500 ? "row" : "column"} spacing={10}>
                            <Button onClick={(e) => setSelected(6)} variant="outline" colorScheme="red">Digital Marketing Finance </Button>
                            <Button onClick={(e) => setSelected(7)} variant="outline" colorScheme="red">Digital Marketing</Button>
                        </Stack>

                        <Stack direction={isLargerThan500 ? "row" : "column"}>
                            <Button onClick={(e) => setSelected(8)} variant="outline" colorScheme="red">Human Resources</Button>
                        </Stack>

                    </Stack>

                </div>

                <div className='job-roles-right'>
                    <div className='job-roles-right-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        {rolesContent[selected]}
                    </div>
                    <div className='job-roles-right-title'>
                        <u>What You’ll Do</u>
                    </div>
                    <ul className='job-roles-right-points'>
                        {
                            rolesPoints[selected].points.map((item, index) => {
                                return <li style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>{item}</li>
                            })
                        }
                    </ul>
                    <Link to={rolesLink[selected]}>
                        <div style={{ marginTop: "10%" }}>
                            <Button color="white" backgroundColor="#BC312E">Apply Here</Button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='job-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Most demanded job Categories</u>
            </div>

            <div className='job-grid4'>
                <div style={{ width: "100%", cursor: "pointer", display: "flex", justifyContent: "center" }}>
                    <img src={mode === "dark" ? J13 : J2} style={{ width: "80%" }} />
                </div>

                <div style={{ width: "100%", cursor: "pointer", display: "flex", justifyContent: "center" }}>
                    <img src={mode === "dark" ? J14 : J3} style={{ width: "80%" }} />
                </div>

                <div style={{ width: "100%", cursor: "pointer", display: "flex", justifyContent: "center" }}>
                    <img src={mode === "dark" ? J15 : J4} style={{ width: "80%" }} />
                </div>

                <div style={{ width: "100%", cursor: "pointer", display: "flex", justifyContent: "center" }}>
                    <img src={mode === "dark" ? J16 : J5} style={{ width: "80%" }} />
                </div>
            </div>

            <div className='job-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Featured job</u>
            </div>

            <div className='job-grid1'>
                {
                    jobs.map((element, index) => {
                        return <div className='job-grid1-element' style={{ border: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                            <div className='job-grid1-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                                {element.name}
                            </div>
                            <div className='job-grid1-location' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                {element.location}
                            </div>
                        </div>
                    })
                }
            </div>

            <div style={{ marginTop: "10%" }}>
                <Button color="white" backgroundColor="#BC312E">See All Jobs</Button>
            </div>

            <div className='job-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Benefits of working with us</u>
            </div>

            <div className='job-grid3'>
                {
                    benefitData.map((element, index) => {
                        return <div className='job-grid3-element'>
                            <div className='job-grid3-element-left'>
                                <img src={J12} />
                            </div>
                            <div className='job-grid3-element-right'>
                                <div className='job-grid3-element-title'>
                                    {element.title}
                                </div>
                                <div className='job-grid3-element-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    {element.content}
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>

            <div className='job-grid2'>
                {
                    jobData.map((element, index) => {
                        return <div className='job-element2' style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse", display: isLargerThan800 ? "flex" : "none" }}>
                            <div className='job-element2-left'>
                                <div style={{ width: "100%" }}>
                                    <img src={element.img} style={{ width: "100%" }} />
                                </div>
                            </div>
                            <div className='job-element2-right'>
                                <div className='job-element2-title'>
                                    {element.title}
                                </div>

                                <div className='job-element2-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    {element.content}
                                </div>

                                <Link to={element.link}>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "left", marginTop: "10%" }}>
                                        <Button variant="outline" colorScheme="red">Know More</Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    })
                }

                {
                    jobData.map((element, index) => {
                        return <div className='job-element2' style={{ flexDirection: "column", display: isLargerThan800 ? "none" : "flex" }}>
                            <div className='job-element2-left'>
                                <div className='job-element2-title'>
                                    {element.title}
                                </div>

                            </div>
                            <div className='job-element2-right'>
                                <div style={{ width: "100%" }}>
                                    <img src={element.img} style={{ width: "100%" }} />
                                </div>

                                <div className='job-element2-content' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                    {element.content}
                                </div>

                                <Link to={element.link}>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "left", marginTop: "10%" }}>
                                        <Button variant="outline" colorScheme="red">Know More</Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    })
                }

            </div>

            <div className='job-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Opportunities</u>
            </div>

            <div className='job-opportunity'>
                <div className='job-opp-left'>
                    Check out on Opportunities to Join Our Ever-Growing Family
                </div>
                <div className='job-opp-right'>
                    <div style={{ width: "40%", cursor: "pointer" }}>
                        <Link to="/Opportunities for Freshers">
                            <img src={J10} />
                        </Link>
                    </div>

                    <div style={{ width: "40%", cursor: "pointer" }}>
                        <Link to="/Experienced Professional">
                            <img src={J11} />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
