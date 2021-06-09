export function seedDatabase(firebase) {
    function getUUID() {
      // eslint gets funny about bitwise
      /* eslint-disable */
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
      /* eslint-enable */
    }
    const IMAGE_URL = 'https://source.unsplash.com/1600x900/?professor'
    const LECTURES_DB_KEY = 'lectures'
    /* Lectures
      ============================================ */

    // // Transmission Lines  

    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Smith Chart',
    //   description:
    //     "Lecture series on Transmission Lines-Smith Chart by Prof. O.P Sahu, Dept of ECE, NIT Kurushetra",
    //   genre: 'transmission lines',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Coaxial Cable',
    //   description:
    //     "Lecture series on Transmission Lines-Coaxial Cable by Prof. O.P Sahu, Dept of ECE, NIT Kurushetra",
    //   genre: 'transmission lines',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Planar Lines',
    //   description:
    //     "Lecture series on Transmission Lines-Planer Lines by Prof. O.P Sahu, Dept of ECE, NIT Kurushetra",
    //   genre: 'transmission lines',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Input Impedance',
    //   description:
    //     "Lecture series on Transmission Lines-Input Impedance by Prof. O.P Sahu, Dept of ECE, NIT Kurushetra",
    //   genre: 'transmission lines',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Telegraphers Equations',
    //   description:
    //     "Lecture series on Transmission Lines-Telegraphers Equations by Prof. O.P Sahu, Dept of ECE, NIT Kurushetra",
    //   genre: 'transmission lines',
    //   image: IMAGE_URL,
    // });

    // //Data Structures and Algorithms

    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Pointers',
    //   description:
    //     "Lecture series on Data Structures and Algorithms-Pointers by Prof. Jitender Kumar Chhabra, Dept of CS, NIT Kurushetra",
    //   genre: 'data structures and algorithms',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Dynamic Allocation',
    //   description:
    //     "Lecture series on Data Structures and Algorithms-Dynamic Allocation by Prof. Jitender Kumar Chhabra, Dept of CS, NIT Kurushetra",
    //   genre: 'data structures and algorithms',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Recursion',
    //   description:
    //     "Lecture series on Data Structures and Algorithms-Recursion by Prof. Jitender Kumar Chhabra, Dept of CS, NIT Kurushetra",
    //   genre: 'data structures and algorithms',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Trees',
    //   description:
    //     "Lecture series on Data Structures and Algorithms-Trees by Prof. Jitender Kumar Chhabra, Dept of CS, NIT Kurushetra",
    //   genre: 'data structures and algorithms',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'HashMaps',
    //   description:
    //     "Lecture series on Data Structures and Algorithms-HashMaps by Prof. Jitender Kumar Chhabra, Dept of CS, NIT Kurushetra",
    //   genre: 'data structures and algorithms',
    //   image: IMAGE_URL,
    // });

    // // Microprocessor and Microcontroller
     
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'CISC Processor',
    //   description:
    //     "Lecture series on Microprocessor and Microcontroller-CISC Processor by Prof. Trailokya Nath Sasamal, Dept of ECE, NIT Kurushetra",
    //   genre: 'microprocessor and microcontroller',
    //   image: IMAGE_URL,
    // });

    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'RISC Processor',
    //   description:
    //     "Lecture series on Microprocessor and Microcontroller-RISC Processor by Prof. Trailokya Nath Sasamal, Dept of ECE, NIT Kurushetra",
    //   genre: 'microprocessor and microcontroller',
    //   image: IMAGE_URL,
    // });

    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Memory Organization',
    //   description:
    //     "Lecture series on Microprocessor and Microcontroller-Memory Organization by Prof. Trailokya Nath Sasamal, Dept of ECE, NIT Kurushetra",
    //   genre: 'microprocessor and microcontroller',
    //   image: IMAGE_URL,
    // });

    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Pipeline Architecture',
    //   description:
    //     "Lecture series on Microprocessor and Microcontroller-Pipeline Architecture by Prof. Trailokya Nath Sasamal, Dept of ECE, NIT Kurushetra",
    //   genre: 'microprocessor and microcontroller',
    //   image: IMAGE_URL,
    // });

    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: '8085 Pin Description',
    //   description:
    //     "Lecture series on Microprocessor and Microcontroller-8085 Pin Description by Prof. Trailokya Nath Sasamal, Dept of ECE, NIT Kurushetra",
    //   genre: 'microprocessor and microcontroller',
    //   image: IMAGE_URL,
    // });

    // // Object Oriented Programming

    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Introduction',
    //   description:
    //     "Lecture series on Object Oriented Programming-Introduction by Prof. Shweta Chhabra , Dept of ECE, NIT Kurushetra",
    //   genre: 'object oriented programming',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'C++',
    //   description:
    //     "Lecture series on Object Oriented Programming-C++ by Prof. Shweta Chhabra , Dept of ECE, NIT Kurushetra",
    //   genre: 'object oriented programming',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Java',
    //   description:
    //     "Lecture series on Object Oriented Programming-Java by Prof. Shweta Chhabra , Dept of ECE, NIT Kurushetra",
    //   genre: 'object oriented programming',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Python',
    //   description:
    //     "Lecture series on Object Oriented Programming-Python by Prof. Shweta Chhabra , Dept of ECE, NIT Kurushetra",
    //   genre: 'object oriented programming',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Javascript',
    //   description:
    //     "Lecture series on Object Oriented Programming-Javascript by Prof. Shweta Chhabra , Dept of ECE, NIT Kurushetra",
    //   genre: 'object oriented programming',
    //   image: IMAGE_URL,
    // });

    // // Digital Signal Processing

    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Classification Of Signals',
    //   description:
    //     "Lecture series on Digital Signal Processing-Classification Of Signals by Prof. Shally Sharma, Dept of ECE, NIT Kurushetra",
    //   genre: 'digital signal processing',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Analog to Digital',
    //   description:
    //     "Lecture series on Digital Signal Processing-Analog to Digital by Prof. Shally Sharma, Dept of ECE, NIT Kurushetra",
    //   genre: 'digital signal processing',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Digital to Analog',
    //   description:
    //     "Lecture series on Digital Signal Processing-Digital to Analog by Prof. Shally Sharma, Dept of ECE, NIT Kurushetra",
    //   genre: 'digital signal processing',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Z-Transform',
    //   description:
    //     "Lecture series on Digital Signal Processing-Z-Transform by Prof. Shally Sharma, Dept of ECE, NIT Kurushetra",
    //   genre: 'digital signal processing',
    //   image: IMAGE_URL,
    // });
    // firebase.firestore().collection('lectures').add({
    //   id: getUUID(),
    //   title: 'Fourier Transform',
    //   description:
    //     "Lecture series on Digital Signal Processing-Fourier Transform by Prof. Shally Sharma, Dept of ECE, NIT Kurushetra",
    //   genre: 'digital signal processing',
    //   image: IMAGE_URL,
    // });


    const PRACTICALS_DB_KEY = 'practicals'


     /* Practicals
      ============================================ */

      // Digital Communication

      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'PSK',
        description:
          "Practicals series on Digital Communication-PSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'digital communication',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'ASK',
        description:
          "Practicals series on Digital Communication-ASK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'digital communication',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'FSK',
        description:
          "Practicals series on Digital Communication-FSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'digital communication',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'BPSK',
        description:
          "Practicals series on Digital Communication-BPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'digital communication',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'QPSK',
        description:
          "Practicals series on Digital Communication-QPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'digital communication',
        image: IMAGE_URL,
      });

      
      // Digital Communication

      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'PSK',
        description:
          "Practicals series on MATLAB-PSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'MATLAB',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'ASK',
        description:
          "Practicals series on MATLAB-ASK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'MATLAB',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'FSK',
        description:
          "Practicals series on MATLAB-FSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'MATLAB',
        image: IMAGE_URL,
      })
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'BPSK',
        description:
          "Practicals series on MATLAB-BPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'MATLAB',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'QPSK',
        description:
          "Practicals series on MATLAB-QPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'MATLAB',
        image: IMAGE_URL,
      });

      
      // Digital Communication

      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'PSK',
        description:
          "Practicals series on Antenna-PSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Antenna',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'ASK',
        description:
          "Practicals series on Antenna-ASK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Antenna',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'FSK',
        description:
          "Practicals series on Antenna-FSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Antenna',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'BPSK',
        description:
          "Practicals series on Antenna-BPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Antenna',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'QPSK',
        description:
          "Practicals series on Antenna-QPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Antenna',
        image: IMAGE_URL,
      });

      
      // Digital Communication

      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'PSK',
        description:
          "Practicals series on Modulation-PSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Modulation',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'ASK',
        description:
          "Practicals series on Modulation-ASK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Modulation',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'FSK',
        description:
          "Practicals series on Modulation-FSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Modulation',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'BPSK',
        description:
          "Practicals series on Modulation-BPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Modulation',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'QPSK',
        description:
          "Practicals series on Modulation-QPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Modulation',
        image: IMAGE_URL,
      });
      
      // Digital Communication

      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'PSK',
        description:
          "Practicals series on Measurememnt and Instrument-PSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Measurememnt and Instrument',
        image: IMAGE_URL
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'ASK',
        description:
          "Practicals series on Measurememnt and Instrument-ASK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Measurememnt and Instreument',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'FSK',
        description:
          "Practicals series on Measurememnt and Instrument-FSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Measurememnt and Instruement',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'BPSK',
        description:
          "Practicals series on Measurememnt and Instrument-BPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Measurememnt and Instrument',
        image: IMAGE_URL,
      });
      firebase.firestore().collection('practicals').add({
        id: getUUID(),
        title: 'QPSK',
        description:
          "Practicals series on Measurememnt and Instrument-QPSK by Prof. Umesh Ghanekar, Dept of ECE, NIT Kurushetra",
        genre: 'Measurememnt and Instrument',
        image: IMAGE_URL,
      });
   
  } 

  
