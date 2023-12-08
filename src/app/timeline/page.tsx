import { Chrono } from "./react";
import { Navbar } from "./react";
import "./supporter.css";

export default function Home() {
  const data = [
    {
      title: "Day-1",
      cardTitle: "Event 1",
      cardSubtitle: "Event 1 Subtitle",
      cardDetailedText: "This is the first event on the timeline",
    },
    {
      title: "Day-1",
      cardTitle: "Event 2",
      cardSubtitle: "Event 2 Subtitle",
      cardDetailedText: "This is the second event on the timeline.",
    },
    {
      title: "Day-1",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "Day-2",
      cardTitle: "Event 4",
      cardSubtitle: "Event 14 Subtitle",
      cardDetailedText: "This is the first event on the timeline.",
    },
    {
      title: "Day-2",
      cardTitle: "Event 5",
      cardSubtitle: "Event 5 Subtitle",
      cardDetailedText: "This is the second event on the timeline.",
    },
    {
      title: "Day-2",
      cardTitle: "Event 6",
      cardSubtitle: "Event 6 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "Day-3",
      cardTitle: "Event 7",
      cardSubtitle: "Event 7 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "Day-3",
      cardTitle: "Event 8",
      cardSubtitle: "Event 8 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "Day-3",
      cardTitle: "Event 9",
      cardSubtitle: "Event 9 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
  ];

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          disableNavOnKey
          theme={{
            primary: "#90E0EF",
            secondary: "#90E0EF",
            cardBgColor: "#e0c3fc",
            titleColor: "white",
            cardTitleColor: "#black",
            cardSubtitleColor: "#9A275A",
            titleColorActive: "black",
          }}
          fontSizes={{
            cardSubtitle: "1rem",
            cardText: "1.2rem",
            cardTitle: "1.7rem",
            title: "2rem",
          }}
        ></Chrono>
      </div>
    </>
  );
}
