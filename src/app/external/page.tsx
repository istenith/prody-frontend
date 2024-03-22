'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import prodyLogo from '../../../public/logos/hackathon.jpg';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';


const ExternalPage: React.FC = () => {
  const [activeOption, setActiveOption] = useState('about');
  const [rulesData, setRulesData] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    // Listen for window resize to update mobile state
    window.addEventListener('resize', checkMobile);

    // Cleanup function to remove event listener
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
            <p>Are you ready for an exciting opportunity to showcase your talent in a competitive environment. In this hackathon presented by Andromeda, participants will have to built solution on problem statement given after the workshop and it should developed with Andromeda's SDK.</p>
            <br/><h3>Categories:</h3>
            <ul>
              <li><strong>Rust Lang Challenge:</strong> With Rust programming language and Andromeda's SDK to built solutions for a problem statement revealed after Andromeda's workshop.</li>
              <li><strong>Best Frontend:</strong> Show off your creativity and design skills by developing captivating frontends. Three prizes will be given in this category.</li>
              <li><strong>Open Innovation:</strong> Unleash your creativity! Choose any problem and solve it using Andromeda's SDK. Two prizes are up for grabs in this category.</li>
            </ul><br/>
            <ul><strong>Note: </strong> Your should be using Andromeda SDK to devise your solution. </ul><br/>
            <h3>Supported Languages:</h3>
            <ul>
              
              <li>Rust,
              Next.js,
              TypeScript,
              JavaScript</li>
            </ul><br/>
            <h3>Prize Pool:</h3>
            <p>Exciting rewards await with a total prize pool of 4 Lakhs INR.</p>
            
            <p>Participants stand a chance to win goodies and merchandise in addition to the cash prizes.</p><br/>
            <p>So, gear up and get ready to embark on a coding journey like never before. Don't miss this chance to shine in the world of technology with Andromeda's Hackathon!</p>
          </div>
        `);
        break;
        case 'timeline':
          setRulesData(`
            <div>
              <h2>Timeline:</h2>
              <ul>
<br/>                <li><strong>HACKATHON (Check point 1)</strong>
                  <ul>
                    <li>AT 4 PM</li>
                  </ul>
                </li><br/>
                <li><strong>EXPERT LECTURE</strong>
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
                <li><strong>HACKATHON</strong>
                  <ul>
                    <li>AT 12 PM - 4 PM</li>
                  </ul>
                </li>
              </ul>
            </div>
          `);
        break;
        case 'faq':
          setRulesData(`
            <div>
              <h2>Frequently Asked Questions (FAQ):</h2>
              <ol>
<br/>                <li><strong>Who can participate in the Andromeda Hackathon?</strong>
                  <ul>
                    <li>The Stellerscape Explorer Hackathon is open to all enthusiasts and aspiring developers with a passion for coding. Whether you're a student, professional, or hobbyist, you're welcome to join the event.</li>
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
                <li><strong>How will the problem statements be provided for the Rust Lang Challenge?</strong>
                  <ul>
                    <li>Problem statements for the Rust Lang Challenge will be revealed after Andromeda's workshop. Participants will receive detailed instructions and guidelines to develop their solutions using Rust and Andromeda's SDK.</li>
                  </ul>
                </li><br/>
                <li><strong>Is there any restriction on the problem domain for the Open Innovation category?</strong>
                  <ul>
                    <li>There are no specific restrictions on the problem domain for the Open Innovation category. Participants are encouraged to choose any problem they're passionate about and solve it using Andromeda's SDK. Creativity and innovation are highly valued in this category.</li>
                  </ul>
                </li><br/>
                <li><strong>How will the submissions be judged?</strong>
                  <ul>
                    <li>Submissions will be evaluated based on criteria such as creativity, technical proficiency, usability, and impact. A panel of expert judges will carefully review each submission to determine the winners in each category.</li>
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
        setRulesData('<div><ul> <li><br/><li>Participants must use Andromedas SDK in their projects.</li> </li><br/><li><li>Solutions must adhere to the guidelines provided by Andromeda.</li></li><br/><li><li>For the Rust Lang Challenge, only solutions developed in Rust using the SDK will be considered.</li></li><br/><li><li>In the Best Frontend category, emphasis will be placed on creativity, user experience, and design aesthetics.</li></li><br/><li><li>Participants in the Open Innovation category must justify their choice of problem and demonstrate how Andromedas SDK was utilized.</li></li><br/><li><li>Teams must comply with the events code of conduct and ethics.</li></li><br/><li><li>Submission deadline will be communicated during the event.</li></li></ul></div>');
        break;
      case 'contact':
        setRulesData('<div><br/>Abhimanyu Singh<br/>+91 1234567890<br/> <br/>Sourabh Awasthy<br/>+91 1234567890<br/>');
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
            <button>REGISTER</button>
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
            </div>
            <div>
            <div>
                <h2>{activeOption.charAt(0).toUpperCase() + activeOption.slice(1)}</h2>
                <div dangerouslySetInnerHTML={{ __html: rulesData }}></div>
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
