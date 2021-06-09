export default function selectionFilter({ lectures, practicals }) {
  return {
    lectures: [
      {
        title: "Transmission lines",
        data: lectures.filter((item) => item.genre === "transmission lines"),
      },
      {
        title: "Data Structures and Algorithms",
        data: lectures.filter((item) => item.genre === "data structures and algorithms"),
      },
      {
        title: "Microprocessor and Microcontroller",
        data: lectures.filter((item) => item.genre === "microprocessor and microcontroller"),
      },
      {
        title: "Object Oriented Programming",
        data: lectures.filter((item) => item.genre === "object oriented programming"),
      },
      {
        title: "Digital Signal Processing",
        data: lectures.filter((item) => item.genre === "digital signal processing"),
      },
    ],
    practicals: [
        {
            title: "Digital Communication",
            data: practicals.filter((item) => item.genre === "digital communication"),
          },
          {
            title: "MATLAB",
            data: practicals.filter((item) => item.genre === "MATLAB"),
          },
          {
            title: "Antenna",
            data: practicals.filter((item) => item.genre === "Antenna"),
          },
          {
            title: "Modulation",
            data: practicals.filter((item) => item.genre === "Modulation"),
          },
          {
            title: "Measurememnt and Instrument",
            data: practicals.filter((item) => item.genre === "Measurememnt and Instrument"),
          },
    ]
  };
}
