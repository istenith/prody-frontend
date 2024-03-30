'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import prodyLogo from '../../../public/logos/hackathon.png';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';


const ExternalPage: React.FC = () => {
  const [activeOption, setActiveOption] = useState('about');
  const [rulesData, setRulesData] = useState(`
  <div><br/>
    <h2>Welcome to Stellerscape Hackathon presented by Andromeda!</h2>
    <p>Andromeda is The First Decentralized, On-Chain Operating System. It is an all on-chain and multi-chain suite of products, tools, and utilities enabled by a decentralized Operating System called aOS, or Andromeda Operating System. aOS is where Web3 starts.</p>

    <p>Are you ready for an exciting opportunity to showcase your talent in a competitive environment? In this hackathon presented by Andromeda, participants will have to build solutions on problem statements given below and they should be developed with Andromeda's SDK.</p>
    <br />
    <h1>Tracks:</h1>

    <b>Track 1</b> - Backend - Rust - ADO: Solve Problem Statement 1 - Flexible-pay crowdfund related to the backend using Rust programming language and Andromeda's SDK or solve Problem Statement 2 which is Open submission (Use your creativity to build a new AOS compatible ADO that can easily connect and operate with other existing ADO in rust)<br/><br />
    <b>Track 2</b> - UI - Embeddables: Create UI and embeddable solutions for real-world use cases using andromeda.js. <br /><br />
    <b>Track 3</b> - Use Case Build: Use aOS to turn your ideas into real-world applications using provided no-code embeddable builders. <br /> <br />

    Note: 
    You should be using Andromeda SDK to devise your solution.
    A workshop will be taken by Andromeda on April 1, 2024 , time will be shared by email.<br />
    <u>Supported Languages:</u>

    Rust, Next.js, TypeScript, JavaScript


    <br /><br />
    <p>Prize Pool:

    Exciting rewards await with a total prize pool of 8.5+ Lakhs INR.
    Participants stand a chance to win goodies and merchandise in addition to the cash prizes.

    So, gear up and get ready to embark on a coding journey like never before. Don't miss this chance to shine in the world of technology with Andromeda's Hackathon!
    </p>
    <br />
    Rules:
    <ul style="list-style: inside;">
      <li>Participants must use Andromedas SDK in their projects.</li>
      <li>Solutions must adhere to the guidelines provided by Andromeda.</li>
      <li>Participants in the Open Submission category must justify their choice of problem and demonstrate how Andromedas SDK was utilized.</li>
      <li>Teams must comply with the event's code of conduct and ethics.</li>
      <li>Submission deadline will be communicated during the event.</li>
    </ul>

    <br />
    <p>
      <b>Accommodation</b><br/>
      Approximate cost : <br/> [180INR (for accomodation) + 210INR (optional) (for meals thrice a day)] per day per head
      <br/>
      <a href="https://forms.gle/UkvVu1babDcRArwU8" style="text-decoration: underline; font-weight: bold; cursor: pointer;">Form Link for Accommodation</a>

    </p>

    <br /><br />
    <b>Terms and Condition:</b><br>
    All winning amount will be awarded in the form of INR convertible $ANDR Tokens.
    All token conversions will be assisted by the organizers.

    <b>Important Links:</b>
    <ul style="list-style: inside; overflow-x: scroll;">
      <li><a href="https://www.andromedaprotocol.io/">https://www.andromedaprotocol.io/</a></li>
      <li><a href="https://github.com/andromedaprotocol/">https://github.com/andromedaprotocol/</a></li>
      <li><a href="https://docs.andromedaprotocol.io/andromeda">https://docs.andromedaprotocol.io/andromeda</a></li>
      <li><a href="https://www.youtube.com/@andromedaprotocol">https://www.youtube.com/@andromedaprotocol</a></li>
    <ul>

    <p>
    <b>Contact:</b><br />

    Ayan Choradia
    +91 9460384779 <br/>
    Sourabh Awasthy
    +91 9418223946
    </p>
  </div>
`);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    
    window.addEventListener('resize', checkMobile);

    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  
    switch (option) {
      case 'about':
        setRulesData(`
          <div><br/>
            <h2>Welcome to Stellerscape Hackathon presented by Andromeda!</h2>
            <p>Andromeda is The First Decentralized, On-Chain Operating System. It is an all on-chain and multi-chain suite of products, tools, and utilities enabled by a decentralized Operating System called aOS, or Andromeda Operating System. aOS is where Web3 starts.</p>

            <p>Are you ready for an exciting opportunity to showcase your talent in a competitive environment? In this hackathon presented by Andromeda, participants will have to build solutions on problem statements given below and they should be developed with Andromeda's SDK.</p>
            <br />
            <h1>Tracks:</h1>

            <b>Track 1</b> - Backend - Rust - ADO: Solve Problem Statement 1 - Flexible-pay crowdfund related to the backend using Rust programming language and Andromeda's SDK or solve Problem Statement 2 which is Open submission (Use your creativity to build a new AOS compatible ADO that can easily connect and operate with other existing ADO in rust)<br/><br />
            <b>Track 2</b> - UI - Embeddables: Create UI and embeddable solutions for real-world use cases using andromeda.js. <br /><br />
            <b>Track 3</b> - Use Case Build: Use aOS to turn your ideas into real-world applications using provided no-code embeddable builders. <br /> <br />

            Note: 
            You should be using Andromeda SDK to devise your solution.
            A workshop will be taken by Andromeda on April 1, 2024 , time will be shared by email.<br />
            <u>Supported Languages:</u>

            Rust, Next.js, TypeScript, JavaScript


            <br /><br />
            <p>Prize Pool:

            Exciting rewards await with a total prize pool of 8.5+ Lakhs INR.
            Participants stand a chance to win goodies and merchandise in addition to the cash prizes.

            So, gear up and get ready to embark on a coding journey like never before. Don't miss this chance to shine in the world of technology with Andromeda's Hackathon!
            </p>
            <br />
            Rules:
            <ul style="list-style: inside;">
              <li>Participants must use Andromedas SDK in their projects.</li>
              <li>Solutions must adhere to the guidelines provided by Andromeda.</li>
              <li>Participants in the Open Submission category must justify their choice of problem and demonstrate how Andromedas SDK was utilized.</li>
              <li>Teams must comply with the event's code of conduct and ethics.</li>
              <li>Submission deadline will be communicated during the event.</li>
            </ul>

            <br />
            <p>
              <b>Accommodation</b><br/>
              Relevant details will be e-mailed to the participants. Approximate cost will be 500INR per day per head (including meals thrice a day) 
            </p>

            <br /><br />
            <b>Terms and Condition:</b><br>
            All winning amount will be awarded in the form of INR convertible $ANDR Tokens.
            All token conversions will be assisted by the organizers.

            <b>Important Links:</b>
            <ul style="list-style: inside;">
              <li><a href="https://www.andromedaprotocol.io/">https://www.andromedaprotocol.io/</a></li>
              <li><a href="https://github.com/andromedaprotocol/">https://github.com/andromedaprotocol/</a></li>
              <li><a href="https://docs.andromedaprotocol.io/andromeda">https://docs.andromedaprotocol.io/andromeda</a></li>
              <li><a href="https://www.youtube.com/@andromedaprotocol">https://www.youtube.com/@andromedaprotocol</a></li>
            <ul>
<br/>            <p>
            <b>Contact:</b><br />

            Ayan Choradia
            +91 9460384779 <br/>
            Sourabh Awasthy
            +91 9418223946
            </p>
          </div>
        `);
        break;
        case 'timeline':
          setRulesData(`
            <div>
              
              <ul>
<br/>                <li><strong>HACKATHON (Check point 1) [April 5]</strong>
                  <ul>
                    <li>AT 4 PM</li>
                  </ul>
                </li><br/>
                <li><strong>EXPERT LECTURE [April 6]</strong>
                  <ul>
                    <li>10 AM-11:30 AM (Lecture)</li>
                    <li>11:30AM-12:00 PM (Interaction with audience)</li>
                  </ul>
                </li><br/>
                <li><strong>HACKATHON (Check point 2)</strong>
                  <ul>
                    <li>AT 12 PM</li>
                  </ul>
                </li><br/>
                <li><strong>HACKATHON [April 7]</strong>
                  <ul>
                    <li>AT 12 PM - 4 PM</li>
                  </ul>
                </li>
              </ul>
            </div>
          `);
        break;
        case 'judges':
          setRulesData(`
          <div>
            <ul>
              <li style="display: flex; align-items: center; margin-bottom: 20px; margin-top:40px;">
                <img src="./judges/dany.png" alt="Daniel" height="30px" width="50px" style="border-radius: 40px; margin-right: 10px;">
                <strong>Mr. Dany Wehbe</strong>
                <span style="margin-left: auto;">Documentation Lead at Andromeda</span>
              </li>
              <li style="display: flex; align-items: center; margin-bottom: 20px; margin-top:10px;">
                <img src="./judges/myron.png" alt="Daniel" height="40px" width="50px" style="border-radius: 40px; margin-right: 10px;">
                <strong>Mr. Myron Koch</strong>
                <span style="margin-left: auto;">Head of Product and CX at Andromeda</span>
              </li>
              <li style="display: flex; align-items: center; margin-bottom: 20px; margin-top:10px;">
                <img src="./judges/lief.png" alt="Daniel" height="40px" width="50px" style="border-radius: 40px; margin-right: 10px;">
                <strong>Mr. Leif Sorensen</strong>
                <span style="margin-left: auto;">Lead Offchain Engineer at Andromeda</span>
              </li>
              <li style="display: flex; align-items: center; margin-bottom: 20px; margin-top:10px;">
                <img src="./judges/kevin.png" alt="Daniel" height="40px" width="50px" style="border-radius: 40px; margin-right: 10px;">
                <strong>Mr. Kevin Colahan</strong>
                <span style="margin-left: auto;">Head of Technical Operations at Andromeda</span>
              </li>
            </ul>
          </div>
        `);
        
        break;

        case 'faq':
          setRulesData(`
            <div>
              
              <ol>
<br/>                <li><strong>Who can participate in the Andromeda Hackathon?</strong>
                  <ul>
                    <li>The Stellerscape Explorer Hackathon is open to all enthusiasts and aspiring developers with a passion for coding. Whether you're a student or hobbyist, you're welcome to join the event.</li>
                  </ul>
                </li><br/>
                <li><strong>Do I need prior experience with Andromeda's SDK to participate?</strong>
                  <ul>
                    <li>No prior experience with Andromeda's SDK is required. We welcome participants of all skill levels, and resources will be provided to help you get started with the SDK in the workshop.</li>
                  </ul>
                </li><br/>
                <li><strong>Can I participate as an individual or do I need to form a team?</strong>
                  <ul>
                    <li>You have the flexibility to participate either individually or as a team. Teams can consist of up to a maximum number of 4 members.</li>
                  </ul>
                </li><br/>
                
                <li><strong>Is there any restriction on the problem domain for the Open Innovation category?</strong>
                  <ul>
                    <li>There are no specific restrictions on the problem domain for the Open Innovation category. Participants are encouraged to choose any problem they're passionate about and solve it using Andromeda's SDK. Creativity and innovation are highly valued in this category.</li>
                  </ul>
                </li><br/>
                <li><strong>How will the submissions be judged?</strong>
                  <ul>
                    <li>Submissions will be judged based on criteria tailored to each track:

                    <br/><strong>Track 1:</strong> ADO functionality, security, compatibility, code quality, schema compliance, documentation, and test coverage.
                    
                    <br/><strong>Track 2:</strong> Working aOS app with ADO components, AndromedaJS usage, data interaction, explanation clarity, visual appeal, code quality, and real-world impact.
                    
                    <br/><strong>Track 3:</strong> Completed build functionality, purpose clarity, practicality, creativity, value proposition, and presentation quality.</li>
                  </ul>
                </li><br/>
                <li><strong>Will there be any workshops or resources available to help participants get started?</strong>
                  <ul>
                    <li>Yes, Andromeda will conduct workshops to familiarize participants with their SDK and provide guidance on solving the problem statements. Additionally, resources and support will be available throughout the event to assist participants in their coding journey.</li>
                  </ul>
                </li>
             
              </ol><br/>
              <p>If you have any further questions or inquiries, feel free to reach out to the organizers for assistance. We look forward to seeing you at the Andromeda Hackathon!</p>
            </div>
          `);
          break;
      case 'rules':
        setRulesData('<div><ul> <li><br/><li>Participants must use Andromedas SDK in their projects.</li> </li><br/><li><li>Solutions must adhere to the guidelines provided by Andromeda.</li></li><li><li><br/><li><li>Participants in the Open Submission category must justify their choice of problem and demonstrate how Andromedas SDK was utilized.</li></li><br/><li><li>Teams must comply with the events code of conduct and ethics.</li></li><br/><li><li>Submission deadline will be communicated during the event.</li></li></ul></div>');
        break;
      case 'contact':
        setRulesData('<div><br/>Abhimanyu Singh<br/>+91 9548582554<br/> <br/>Sourabh Awasthy<br/>+91 9418223946<br/>');
        break; 
      
       
      default:
        setRulesData('');
    }
  };

  return (
    <div className={styles.container} style={{background: 'url("/image.svg")', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
      <Navbar isHomePage={false} />
      <br /><br /><br /><br />
      <div className={styles.content}>
        <div className={styles.card}>
          <Image src={prodyLogo} alt='prodyLogo' />
          <div>
          <a href="https://unstop.com/p/stellerscape-explorer-hackathon-prodyogiki-nit-hamirpur-939534" target="_blank" rel="noopener noreferrer">
    <button>Register Now</button></a>
    <a href="https://chat.whatsapp.com/Kor1veX6CZ2DPcx27BFQUq" target="_blank" rel="noopener noreferrer">
      <button className={styles.whatsappButton}>Join WhatsApp</button>
    </a>
    <br/>
    <a href="https://drive.google.com/file/d/1fXw7rt99ODKEtVll4aRbgOZigueMtDNS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <button className={styles.whatsapButton}>Problem Statement</button>
    </a>
  </div>
        </div>
        {isMobile ? (
          <div className={styles.navCard}>
            <div className={styles.navOptions}>
              <button
                className={`${styles.active} ${activeOption === 'about' ? styles.active : ''}`}
                onClick={() => handleOptionClick('about')}
              >
                About
              </button>
              <button
                className={`${styles.active} ${activeOption === 'timeline' ? styles.active : ''}`}
                onClick={() => handleOptionClick('timeline')}
              >
                Timeline
              </button>
              <button
                className={`${styles.active} ${activeOption === 'faq' ? styles.active : ''}`}
                onClick={() => handleOptionClick('faq')}
              >
                FAQ
              </button>
              <button
                className={`${styles.active} ${activeOption === 'rules' ? styles.active : ''}`}
                onClick={() => handleOptionClick('rules')}
              >
                Rules
              </button>
              <button
                className={`${styles.active} ${activeOption === 'contact' ? styles.active : ''}`}
                onClick={() => handleOptionClick('contact')}
              >
                Contact
              </button>
              <button
                className={`${styles.active} ${activeOption === 'judges' ? styles.active : ''}`}
                onClick={() => handleOptionClick('judges')}
              >
                Judges
              </button>
            </div>
            <div>
            <div>
                <h2>{activeOption.charAt(0).toUpperCase() + activeOption.slice(1)}</h2>
                <div dangerouslySetInnerHTML={{ __html: rulesData }}></div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.navCard}>
            <div className={styles.navOptions}>
              <button
                className={`${styles.active} ${activeOption === 'about' ? styles.active : ''}`}
                onClick={() => handleOptionClick('about')}
              >
                About
              </button>
              <button
                className={`${styles.active} ${activeOption === 'timeline' ? styles.active : ''}`}
                onClick={() => handleOptionClick('timeline')}
              >
                Timeline
              </button>
              <button
                className={`${styles.active} ${activeOption === 'faq' ? styles.active : ''}`}
                onClick={() => handleOptionClick('faq')}
              >
                FAQ
              </button>
              <button
                className={`${styles.active} ${activeOption === 'rules' ? styles.active : ''}`}
                onClick={() => handleOptionClick('rules')}
              >
                Rules
              </button>
              <button
                className={`${styles.active} ${activeOption === 'contact' ? styles.active : ''}`}
                onClick={() => handleOptionClick('contact')}
              >
                Contact
              </button>
              <button
                className={`${styles.active} ${activeOption === 'judges' ? styles.active : ''}`}
                onClick={() => handleOptionClick('judges')}
              >
                Judges
              </button>
            </div>
            <div>
            <div>
                {/* <h2>{activeOption.charAt(0).toUpperCase() + activeOption.slice(1)}</h2> */}
                <div dangerouslySetInnerHTML={{ __html: rulesData }}>
                </div>
              </div>
            </div>
          </div>
        )}


        
     
        
      </div>
      <Footer />
    </div>
  );
};

export default ExternalPage;
