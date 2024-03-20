'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import prodyLogo from '../../../public/logos/hackathon.jpg';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Dropdown from './component/dropdown';

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
        setRulesData('About section text...');
        break;
      case 'timeline':
        setRulesData('Timeline section text...');
        break;
      case 'faq':
        setRulesData('FAQ section text...');
        break;
      case 'rules':
        setRulesData('Rules section text...');
        break;
      case 'contact':
        setRulesData('Abhimanyu Singh : 9548582554 ');
        break;
      default:
        setRulesData('');
    }
  };

  return (
    <div className={styles.container}>
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
                <p>{rulesData}</p>
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
                <p>{rulesData}</p>
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
