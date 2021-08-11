import Image from '../components/image/Image'
import underConstruction from '../assets/images/under_construction.png'
import './About.css'

function About() {
    return (
        <>
            <h2>About</h2>
            <Image src={underConstruction} classes="img img-lg-ctr" altText="Under Construction, coming Christmas 2002."></Image>
        </>
    ) 
  }

export default About