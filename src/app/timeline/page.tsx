"use client";
import { Chrono } from "react-chrono";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";

const Timeline = () => {
  const data = [
    {
      title: "Pre-Prody",
      cardTitle: "Abhedya 3.0",
      cardSubtitle: "",
      cardDetailedText:
        "Embark on a cosmic adventure with Abhedya, an interstellar cryptic hunt challenging your logical, technical, and creative thinking. Join participants from across the galaxy as they log in to our cosmic system and traverse a series of celestial levels. May the constellations align in your favor as you reach for the stars and strive to become the ultimate cosmic conqueror!",
    },
    {
      title: "Day-1",
      cardTitle: "Stellarscape Hackathon",
      cardSubtitle: "Day-001",
      cardDetailedText:
        "Develop an app offering an immersive journey into the realms of science and exploration.Create a digital platform that showcases the wonders of space and also delves into other scientific frontier. Develop solutions to the problems the world requires.",
    },
    {
      title: "Day-1",
      cardTitle: "Binary Blitz",
      cardSubtitle: "Round 1",
      cardDetailedText:
        "Binary Blitz, an electrifying competition, challenges participants to showcase their agile brainpower. The event comprises two intensive rounds: First, participants undergo extensive brain-boggling to solve mysteries of Boolean algebra and logic gates. Second, participants exhibit their engineering prowess in hands-on circuit design.",
    },
    {
      title: "Day-1",
      cardTitle: "Chem-e-Rocket",
      cardSubtitle: "Round 1",
      cardDetailedText:
        "This competition aims to provide students with an opportunity to design and construct a small chemically powered rocket and test the ability of participants to safely control and harness the energy of a chemical reaction by launching the rocket and allowing it to traverse to a certain distance.",
    },
    {
      title: "Day-1",
      cardTitle: "Float-Yo-Boat",
      cardSubtitle: "Round 1",
      cardDetailedText:
        "This event consists of the creation and demonstration of Nitinol Heat Engine and how it can be used to power a boat using the shape memoir of Nitinol alloy.",
    },
    {
      title: "Day-2",
      cardTitle: "Stellarscape Hackathon",
      cardSubtitle: "Day-002",
      cardDetailedText:
        "Develop an app offering an immersive journey into the realms of science and exploration.Create a digital platform that showcases the wonders of space and also delves into other scientific frontier. Develop solutions to the problems the world requires.",
    },
    {
      title: "Day-2",
      cardTitle: "Chem-e-Rocket",
      cardSubtitle: "Round 2",
      cardDetailedText:
        "This competition aims to provide students with an opportunity to design and construct a small chemically powered rocket and test the ability of participants to safely control and harness the energy of a chemical reaction by launching the rocket and allowing it to traverse to a certain distance.",
    },
    {
      title: "Day-2",
      cardTitle: "Civil Wars",
      cardSubtitle: "Both Rounds",
      cardDetailedText:
        "This event tests participants’ understanding and application of building design principles. Participants have to fabricate a building model adhering to the size constraints. These models will then be tested against natural forces in two rigorous rounds by simulating earthquakes.",
    },
    {
      title: "Day-2",
      cardTitle: "Startech Auctions",
      cardSubtitle: "Round 1",
      cardDetailedText:
        "The aim of this competition is to challenge your ability to analyze and evaluate the potential of each startup idea, as you bid against other teams using fake currency. It  comprises two rounds, each offering a unique challenge. In the first round, participants will bid on startups, make strategic decisions, and build their portfolios. The second round will escalate in difficulty, simulating a dynamic market environment. ",
    },
    {
      title: "Day-2",
      cardTitle: "Binary Blitz",
      cardSubtitle: "Round 2",
      cardDetailedText:
        "Binary Blitz, an electrifying competition, challenges participants to showcase their agile brainpower. The event comprises two intensive rounds: First, participants undergo extensive brain-boggling to solve mysteries of Boolean algebra and logic gates. Second, participants exhibit their engineering prowess in hands-on circuit design.",
    },
    {
      title: "Day-2",
      cardTitle: "Gear-O-Metry",
      cardSubtitle: "Both Rounds",
      cardDetailedText:
        "The event aims to test the participants’ understanding of working gears and gear assemblies, a core element of mechanical engineering. The basic idea is that the participants are required to pull X blocks of different weights on an inclined plane through a system of pulleys and gears.",
    },
    {
      title: "Day-2",
      cardTitle: "Codequest Chronicle",
      cardSubtitle: "Both Rounds",
      cardDetailedText:
        "Codequest Chronicles allows participants to test their coding knowledge at various levels of difficulty. Participants will be provided with various problem statements and will be required to adhere to certain rules of the event.",
    },
    {
      title: "Day-3",
      cardTitle: "Logic Labyrinth",
      cardSubtitle: "Both Rounds",
      cardDetailedText:
        "Welcome to LogicLabyrinth: A Space-themed Mathematical Problem-Solving Extravaganza, that propels you to put in all your efforts and analytical thinking to solve a set of elaborative problems, not only book-based but real-world or mythical too.",
    },
    {
      title: "Day-3",
      cardTitle: "Startech Auctions",
      cardSubtitle: "Round 2",
      cardDetailedText:
        "The aim of this competition is to challenge your ability to analyze and evaluate the potential of each startup idea, as you bid against other teams using fake currency. It  comprises two rounds, each offering a unique challenge. In the first round, participants will bid on startups, make strategic decisions, and build their portfolios. The second round will escalate in difficulty, simulating a dynamic market environment. ",
    },
    {
      title: "Day-3",
      cardTitle: "Stellarscape Hackathon",
      cardSubtitle: "Day-003",
      cardDetailedText:
        "Develop an app offering an immersive journey into the realms of science and exploration.Create a digital platform that showcases the wonders of space and also delves into other scientific frontier. Develop solutions to the problems the world requires.",
    },
    {
      title: "Day-3",
      cardTitle: "Float-Yo-Boat",
      cardSubtitle: "Both Rounds",
      cardDetailedText:
        "This event consists of the creation and demonstration of Nitinol Heat Engine and how it can be used to power a boat using the shape memoir of Nitinol alloy.",
    },
  ];

  return (
    <div className={styles.body}>
      <Navbar isHomePage={false} />
      <div>
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          hideControls
          cardWidth="500"
          highlightCardsOnHover="true"
          theme={{
            primary: "#90E0EF",
            secondary: "#90E0EF",
            cardBgColor: "#e0c3fc",
            titleColor: "white",
            cardTitleColor: "black",
            cardSubtitleColor: "#9A275A",
            titleColorActive: "black",
          }}
          fontSizes={{
            cardSubtitle: "1rem",
            cardText: "1rem",
            cardTitle: "1.3rem",
            title: "1.5rem",
          }}
        ></Chrono>
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
