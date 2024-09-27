import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import img1 from '../images/a1.png'
const Home=()=>{
    return(
        <>
            <section id='home'>
        <Container className='home'> 
            <div className='about'>
            <h1><span>Hello World ,</span><br />
            I'm Aatmik Kushwaha  <br />
            a Web Developer,</h1>
           <p>Energetic and dedicated BTech student with a passion for Web development.Seeking opportunities to apply academic knowledge in real-world situations. Proactive learner with a strong work ethic, eager to contribute to a dynamic team and make meaningful contributions while continuing my 
           education. 
           </p>
            </div>
          <Image className='img1' src={img1} rounded />
          
        </Container> 
        </section>
        </>
    )
}

export default Home;