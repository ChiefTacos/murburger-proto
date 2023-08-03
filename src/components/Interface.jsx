import { motion } from "framer-motion";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { currentProjectAtom, projects } from "./Projects";
import { useAtom } from "jotai";


const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
    className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start
    ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
    `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
const AboutSection = () => {


  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug tracking-wider mt-8 mb-4 md:mt-0">
        <span className="bg-white px-1 italic tracking-tight">MURBURGER</span>
      </h1>
    
          <motion.p
        className="text-lg text-gray-700 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
Fresh 100% USA Grade A Beef          <br />
Made with ❤️      </motion.p>
      <motion.button
        onClick={console.log("buttonclicked")}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact us
      </motion.button>
    </Section>
  );
};
const skills = [
  {
    title: "MondayㅤㅤㅤㅤㅤCLOSED",
    level: 0,
  },
  {
    title: "TuesdayㅤㅤㅤㅤㅤCLOSED",
    level: 0,
  },
  {
    title: "Wednesday ㅤ ㅤ3pm-9pm",
    level: 49,
  },
  {
    title: "Thursday ㅤ ㅤㅤ3pm-9pm",
    level: 49,
  },
  {
    title: "Fridayㅤ ㅤ ㅤㅤ3pm-10pm",
    level: 54,
  },
];
const languages = [
  {
    title: "Saturday ㅤ ㅤ10am-10pm",
    level:71,
  },
  {
    title: "Sunday ㅤ ㅤㅤㅤ9am-9pm",
    level: 64,
  },
  
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
      {/* <h1 className="text-3xl md:text-5xl leading-4	 font-bold lg:mb-8 ml-3 pt-0 tracking-tighter text-left	">Official Hours</h1> */}
      <div className="flex flex-wrap justify-between">
      <div className="w-full lg:w-1/2 text-center md:text-left p-0 lg:p-1 md:p-3">

        <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold leading-4 ml-0.5 tracking-wider">Weekdays</h2>
        <div className=" mt-8 mb-0 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full pr-4 md:pr-0 md:w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div 
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` , margin: "0 0 0 41%" }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-4 text-center md:text-left lg:pr-12 mt-0 md:mt-2">
          
          <h2 className="lg:text-5xl  text-3xl md:text-3xl font-bold md:mt-6 mt-5  lg:ml-0.5 tracking-wider text-gray">Weekends</h2>
          <div className=" mt-8 md:mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full pr-4 md:pr-0 md:w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{
                      width: `${lng.level}%`,
                      

                      margin: `0 0 0 ${0 + lng.level / 3}%` ,
                      // overflow:"hidden",
                    }}
                      initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}

          </div>
          <h1 className="text-6xl pt-2 m-1.5 font-medium	text-center">🍽️</h1>
          <p className="text-1xl pt-2 font-medium	">brunch served from 9am-12pm on Sundays!</p>
        </div>

      </div>


      </motion.div>
    </Section>
  );
};
const ProjectsSection = () => {

  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length)
  }
  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length)
  }
 
  return (
    <Section>
  <div className="flex flex-col w-full h-full items-center justify-end mb-12 pointer-events-auto">
    <div className="flex gap-8 items-center ">
      <button
        className="hover:text-indigo-600 transition-colors"
        onClick={previousProject}
      >
        ← Previous
      </button>
      <h2 className="text-5xl font-bold text-center p-0 m-0">Menu Items</h2>
      <button
        className="hover:text-indigo-600 transition-colors"
        onClick={nextProject}
      >
        → Next             

      </button>
    </div>
    
  </div>
</Section>

  )
}
const ContactSection = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "350px", // Set the desired height of the map
  };
  const center = {
    lat: 42.450499, 
    lng: -88.128882, 
  };
  
  const zoom = 15;
  // return (
  //   <section className=" md:flex lg:justify-between items-center">
  //   {/* First Div */}
  //   <div className="md:w-1/2 p-4 mt-5 text-center">
  //     <h1 className="text-3xl font-bold mb-2  mt-20 md:mt-0 ">First Div Heading</h1>
  //     <p className="text-lg">Content for the first div goes here...</p>
  //   </div>

  //   {/* Second Div */}
 
  // </section>

  // );
  return (
    <div id="contact" className="flex flex-wrap items-center">
      {/* First Section */}
      <div className="w-full md:w-1/2 p-4 mt-8 md:mt-16">
        {/* Content for the first section goes here... */}
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      </div>

      {/* Second Section */}
      <div className="w-full md:w-1/2 p-4 mt-8 md:mt-16">
        {/* Content for the first section goes here... */}
        <h2 className="text-xl font-bold mt-2">Phone Number:</h2>
        <h2 className="text-xl font-bold mt-0">(262) 230 5182</h2>
        
      </div>


      {/* Third Section */}
      <div className="w-full md:w-1/2 p-4">
        {/* Content for the third section goes here... */}
        <h2 className="text-xl font-bold mt-2">Address:</h2>
        <h2 className="text-xl font-bold mt-0">7120 N Sheridan Rd, Chicago, IL 60626</h2>
        

      </div>

      {/* Fourth Section */}
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {/* LoadScript will load the required Google Maps scripts */}
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        {/* Embed the Google Map */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
        >
          {/* Add any additional components (markers, etc.) as needed */}
          {/* ... */}
        </GoogleMap>
      </LoadScript>
        
      </div>
    </div>
  );

};
