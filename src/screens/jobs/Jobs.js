import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native"
import styles from "./JobsStyle"
import JobsCard from "../../components/jobsCard/JobsCard"


const Jobs = () => {


    const renderItem = ({ item }) => (
        <JobsCard name={item.name} company={item.company.name} location={item.locations} level={item.levels} />

    );



    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export default Jobs;

const DATA = [
    {
        "contents": "<p>Performs sales activities in an assigned territory by introducing the BeneTrac system of electronic enrollment and benefit administration tools to broker distributors and assisting them to promote and sell BeneTrac to their employer group clients.<br> <ul> <li>Seeks opportunities to promote and present BeneTrac by encouraging benefits brokers to become BeneTrac Distributors and subsequently introducing BeneTrac to their clients.</li> <li>Supports Broker Distributors and sponsoring Benefit Plan Carriers with BeneTrac sales presentations and collaterals to their clients including product training.</li> <li>Promotes BeneTrac to Brokers &amp; sponsoring Carrier Reps and maintain relationship for continuing business purposes.</li> <li>Follow through with all sales efforts to prospects recently presented as well as those on hold status.</li> <li>Promotes the relationship between new and existing clients and their assigned BeneTrac Implementation Manager and Benefit Analyst.</li> <li>Communicates status of prospects and new clients to Broker distributors and sponsoring Carrier Reps. Maintain contact with new clients during the implementation process and follow up as needed to assist with a smooth and timely installation.</li> <li>Promotes add-on products to new and existing clients as authorized by Broker Distributor.</li> <li>Maintains accurate records of contacts and client information in BeneTrac CRM tools.</li> <li>Strives to gain knowledge of the benefits brokerage business, Human Resources, direct competitors and benefits-related technology.</li> <li>Develops superior presentation and sales skills.</li> <li>Consistently works to improve understanding of the most current BeneTrac capabilities and new features, communicating new functionality to broker distributors.</li> <li>Consistently works to improve understanding of sponsoring carriers operations and assist with all sales issues related to BeneTrac.</li> <li>Keep records of relevant information and issues relating to BeneTrac, i.e. features/benefits information gathered from client interactions, including any available information regarding competition.</li> <li>Assists in sales planning and reporting regarding the sales process.</li> <li>Strives to achieve assigned territory goals and sales quotas.</li> <li>Performs other duties as assigned.</li> </ul><br><strong>Requirements</strong><br><ul> <li>Bachelor's Degree.</li> <li>3 years of experience in Outside sales experience, and employee benefits and HR background, or training helpful.</li> </ul> <br><strong>Our Commitment</strong><br> <br>Paychex is dedicated to fostering a culture of intentional Inclusion and Diversity (I&amp;D). Our valued employees and commitment to I&amp;D is the essence of our internal and external success. Inclusivity is a key value of our corporate culture and is exemplified through our reputation as a top employer for employee development, diversity, and ethics, as well as a focus on fairness in recruitment, selection, and decision making.<br> <br>Click <a href=\"https://www.paychex.com/corporate/corporate-responsibility/employees\">here</a> for more information on our corporate social responsibility.<br><br></p>",
        "name": "Sales Representative - Benetrac",
        "type": "external",
        "publication_date": "2021-09-03T11:54:53Z",
        "short_name": "sales-representative-benetrac-ac69ee",
        "model_type": "jobs",
        "id": 6747012,
        "locations": [
            {
                "name": "Folsom, CA"
            },
            {
                "name": "Stockton, CA"
            }
        ],
        "categories": [
            {
                "name": "Sales"
            }
        ],
        "levels": [
            {
                "name": "Mid Level",
                "short_name": "mid"
            }
        ],
        "tags": [],
        "refs": {
            "landing_page": "https://www.themuse.com/jobs/paychex/sales-representative-benetrac-ac69ee"
        },
        "company": {
            "id": 11807,
            "short_name": "paychex",
            "name": "Paychex"
        }
    },
    {
        "contents": "<p><b>ALL ABOUT TARGET</b><br>As part of our collaborative and guest-obsessed team, you help us create an experience that makes guests say \"I love Target!\" When you work at Target, you're helping every family discover the joy in everyday life. You're working alongside a dedicated team that brings their passion and pride to all that they do.<br><br><b>ALL ABOUT SERVICE &amp; ENGAGEMENT </b><br>Advocates of guest experience who welcome, thank, and exceed guest service expectations by focusing on guest interaction and recovery. Advocates of both physical and digital services and solutions who are knowledgeable about capabilities and features that drive adoption, usage and ultimately guest loyalty. Empowered to make shopping effortless and seamless for guests at the checklanes, guest services, gift registry, pick-up and drive up.<br><br><b>At Target, we believe in our team members having meaningful experiences that help them build and develop skills for a career. The role of a Guest Advocate can provide you with the: </b><ul><li>Ability to communicate and interact with guests to build an inclusive guest experience</li><li>Ability to blend problem solving and decision making to positively impact the guest experience and resolve guest concerns </li><li>Ability to adapt to different guest interactions and situations</li><li>Experience promoting and selling various benefits, offerings and services</li></ul><b>As a Guest Advocate, no two days are ever the same, but a typical day will most likely include the following responsibilities:</b><ul><li>Create a welcoming experience by authentically greeting, every guest every time.</li><li>Make a connection with guests by engaging in friendly and genuine conversation throughout each transaction; asking open ended questions about the guest's shopping experience and using those questions to assess, understand, and determine how to tailor your approach.</li><li>Welcome guests into self-checkout and provide assistance as needed. </li><li>Scan and bag all guest items efficiently, neatly, and in compliance with food safety standards and company best practices.</li><li>Work efficiently to minimize guest wait time while maintaining guest service and accuracy.</li><li>Make the guest aware of current and upcoming brand launches, store activities, and events. </li><li>Speak to the benefits of the REDcard with every guest and assist them through the application process. </li><li>Understand and show guests how to use Wallet and the other features and offerings within the Target App.</li><li>Be familiar with all fulfillment services, and know how to direct the guest to enroll, activate, and use them.</li><li>Attempt every return and follow register prompts, be empowered to make it right for the guest while following Targets policies and procedures.</li><li>Make it right for the guest by de-escalating any negative situations and recover the guest shopping experience while following Target's policies and procedures.</li><li>Deliver easy and seamless service to all Order Pick Up, Drive Up, Registry, and Photo guests.</li><li>Maintain a clean, clutter free work area (including gathering abandoned items, baskets, and hangers)</li><li>Stock supplies during store open hours while being available for the guest.</li><li>Say thank you after every guest interaction and be sure every guest leaves satisfied with their shopping experience.</li><li>Demonstrate a culture of ethical conduct, safety, and compliance.</li><li>All other duties based on business needs.</li></ul><b>WHAT WE ARE LOOKING FOR</b><br><b>We might be a great match if:</b><ul><li>Working in a fun and energetic environment makes you excited.... We work efficiently and as a team to deliver for our guests</li><li>Providing service to our guests that makes them say I LOVE TARGET! excites you.... That's why we love working at Target</li><li>You enjoy interacting with people all day and making things easy for others.... Interacting with guests, solving concerns and making the guests day better is core of what we do</li><li>You aren't looking for Monday thru Friday job where you are at a computer all day... We are busy all day (especially on the weekends), making it easy for the guest to feel welcomed, inspired and rewarded</li></ul><b>The good news is that we have some amazing training that will help teach you everything you need to know to be a Guest Advocate. But there are a few skills you </b><b>should have from the get-go:</b><ul><li>Communicating effectively, including using positive language and attentive to guests needs</li><li>Welcoming and helpful attitude toward guests and other team members</li><li>Attention to detail while multi-tasking</li><li>Willing to educate guests and sell products and services</li><li>Learn and adapt to evolving technology needs</li><li>Work both independently and with a team</li></ul><b>We are an awesome place to work and care about our teams, so we want to make sure we are clear on a few more basics that we expect:</b><ul><li>Accurately handle cash register operations and cash transactions</li><li>Scan, handle and move merchandise efficiently and safely, including frequently lifting or moving merchandise up to 15 pounds and occasionally lifting or moving merchandise up to 40 pounds </li><li>Flexible work schedule (e.g., nights, weekends and holidays) and regular attendance necessary</li></ul><b>Roles Include:</b><ul><li>Guest Advocate (Cashier)</li><li>Front of Store Attendant (Cart Attendant)</li></ul><b>Americans with Disabilities Act (ADA)</b><br><br>Target will provide reasonable accommodations (such as a qualified sign language interpreter or other personal assistance) with the application process upon your request as required to comply with applicable laws. If you have a disability and require assistance in this application process, please visit your nearest Target store or Distribution Center or reach out to Guest Services at 1-800-440-0680 for additional information.</p>",
        "name": "Guest Advocate (Cashier or Front of Store Attendant/ Cart Attendant) (T0532)",
        "type": "external",
        "publication_date": "2021-09-24T11:38:19Z",
        "short_name": "guest-advocate-cashier-or-front-of-store-attendant-cart-attendant-t0532-a83cb4",
        "model_type": "jobs",
        "id": 6944891,
        "locations": [
            {
                "name": "Bellevue, NE"
            }
        ],
        "categories": [
            {
                "name": "Retail"
            }
        ],
        "levels": [
            {
                "name": "Mid Level",
                "short_name": "mid"
            }
        ],
        "tags": [
            {
                "name": "Fortune 1000",
                "short_name": "fortune-1000-companies"
            }
        ],
        "refs": {
            "landing_page": "https://www.themuse.com/jobs/target/guest-advocate-cashier-or-front-of-store-attendant-cart-attendant-t0532-a83cb4"
        },
        "company": {
            "id": 637,
            "short_name": "target",
            "name": "Target"
        }
    }
];
