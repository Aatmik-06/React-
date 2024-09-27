import Container from 'react-bootstrap/Container';

const About=()=>{
    return(
        <>
        <Container> 
            
            <div className='aboutsection'>
            <section id='About'>
                <h1 className='aboutme'>About Me</h1>
                <p><li>I'm currently pursuing B.Tech degree And Build Projects of Full Stack Web Development ,<br /> 
                Skilled in problem-solving, communication, and teamwork. Seeking opportunities to apply academic knowledge in real-world situations. <br />Proactive learner with a strong work ethic, eager to contribute to a dynamic team and make meaningful contributions while continuing my 
                education.  </li>
                </p>
            </section>  
                <section id='Education'>  
                <div className='education'>
                        <h1>Education</h1>
                        <div className='edu1'>
                        <div className='edu'>
                        <p> <li> <span> High school or equivalent</span> </li> <br />
                            Nirmala English Medium School , Chhindwara , MP  <br />
                            Field of Study - Mathematics, Science (chemistry, physics), English language <br />
                            Location - Chhindwara , Madhya Pradesh , India  <br />
                        </p>    
                    </div>
                    <div className='bach'>
                        <p> <br />
                        <li> <span> Bachelor’s </span> </li> <br />
                            University Institute of Technology Barkatulla University , <br />
                            Branch - Information Technology <br />
                            Location - Bhopal ,Madhya Pradesh , India <br />
                            Started From -  09/2023 to Present <br />
                        </p>
                    </div>
                    </div>
                </div>
                </section> 
                <section id='Skills'>  
                <div className='skills'>
                    <h1>Skills & Abilities</h1>
                    <ul>
                        <li>Java (core and advance) , SpringBoot</li>
                        <li>HTML, CSS, JavaScript </li>
                        <li>React JS</li>
                        <li>MySQL </li>
                        <li>BootStrap</li>
                        <li>Time management and organizational skills </li>
                    </ul>
                </div>
                </section>
                <footer>
                <section id='Contact'>
                    <h1>Contact</h1>
                    <div className='contact'>
                    <div>
                      <h3>Address:191 9B, Saket Nagar, Bhopal, MP <br /> <br />
                            Email:adi120kush@gmail.com   <br /> <br />
                            Phone:+91 8770093404   <br />
                      </h3>
                    </div> 
                    <div id='form'>  
                      <form action="">
                        <label htmlFor="">Name</label><br />
                        <input type="text"/> <br /> 
                        <label htmlFor="">Email</label> <br />
                        <input type="text" /> <br />
                        <label htmlFor="">Message</label> <br />
                        <textarea rows={5} cols={23}> </textarea> <br />
                        <button>Send Message</button>
                        </form>
                        </div> 
                        </div>         
                </section>
                </footer>
           </div>
            <br /><br />
        </Container>
        </>
    )
}
export default About;