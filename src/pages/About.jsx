import React from 'react'
import AboutSec from '../components/AboutSec'
import ImageComponent from '../components/ImageComponent'
import abimg from '../assets/about2.jpg'
import abimg2 from '../assets/about1.jpg'
import abimg3 from '../assets/about3.jpg'
import QuoteGrid from '../components/QuoteGrid'
import InfoPanels from '../components/InfoPanels'
import ContactForm from '../components/ContactForm'

const About = () => {
    const customPanels = [
        {
          heading: "engage in unethical practices", 
          content: "Some of the biggest issues the creative economy faces are ethics-related: Plagiarism. Fraud. Unpaid talent. Inequities in the workplace. Unethical leadership. We create original work for our clients because we understand that what makes you different makes you stand out. We do not copy someone else’s homework and pass it off as our own"
        },
        {
          heading: "say yes to everything and everyone",
          content: "We value honesty, transparency and goodwill. We believe in supporting those who want to change the world for the better. We have always taken great pains to uphold our belief system consistently, and because of this, we work only with individuals and businesses whose values are aligned with our own."
        },
        {
          heading: "work for free",
          content: "(Unless you’re up to something good for humani–ty. If you’re a charity, drop us a line.) We feel a sense of responsibility as our team’s source of livelihood, so we are extending this responsibility towards our potential collaborators, too. Work rendered is work paid. That means no free mock-ups, no free pitches. We give free advice but that’s just about it"
        }
      ];
  return (
   <>
   <AboutSec/>
   <ImageComponent imageUrl={abimg}/>
   <AboutSec heading={'We believe..'} para={`Brands happen when curiosity meets creativity, emotion converges
with reason and passion embraces purpose. We also believe that..`}/>
<QuoteGrid/>
<ImageComponent imageUrl={abimg2}/>
<AboutSec heading={'We care..'} para={'About the things that matter'}/>
<InfoPanels/>
<ImageComponent imageUrl={abimg3}/>
<AboutSec heading={`We don't..`} para={<span style={{ display: 'none' }}></span>}/>
<InfoPanels panels={customPanels}/>
<ContactForm/>
   </>
  )
}

export default About
