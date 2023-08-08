import { motion } from "framer-motion";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { currentProjectAtom, projects } from "./Projects";
import { useAtom } from "jotai";
import burgerLogo from "/img/burgerLogo01.png"; // Replace with the correct path to your logo image


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
      <h1 className="text-4xl md:self-start self-center text-center md:text-left md:text-6xl font-extrabold leading-snug tracking-wider mt-8 mb-4 md:mt-0 ">
        <span className="bg-white px-1 italic tracking-tight">MURBURGER</span>
      </h1>
    <div className=" md:self-start self-center text-center md:text-left">
          <motion.p
        className="text-lg  rounded-lg	p-2 text-white bg-indigo-600 mt-4 font-bold"
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
        className={`bg-red-600 text-white py-4 px-8 
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
        ORDER NOW
      </motion.button>
      </div>
    </Section>
  );
};
const skills = [
  {
    title: "Mondayㅤ ㅤ ㅤ ㅤCLOSED",
    level: 0,
  },
  {
    title: "Tuesdayㅤ ㅤ ㅤ ㅤCLOSED",
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
      <div className="flex flex-wrap justify-between text-white">
      <div className="w-full lg:w-1/2 text-center md:text-left p-0 lg:p-1 md:p-3">

        <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold leading-4 ml-0.5  tracking-wider"><span className="bg-white text-black">Weekdays</span></h2>
        <div className=" mt-8 mb-0 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full pr-4 md:pr-0 md:w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-black"
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
          
          <h2 className="lg:text-5xl  text-3xl md:text-3xl font-bold md:mt-6 mt-5  lg:ml-0.5 tracking-wider text-white"><span className="bg-white text-black">Weekends</span></h2>
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
       <motion.div
        initial={{ translateY: "-13%", translateX: "0%", opacity: 0 }}
        animate={{ translateY: "-13%", translateX: "0%", opacity: 1 }}
        transition={{ duration: 2}}
        className="flex flex-col w-full h-full items-center justify-center mb-12 pointer-events-auto z-0"
      >
<motion.div
        animate={{  rotate: [0, 360]     }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Infinite rotation with a 8s duration
        className="pointer-events-none"
      >
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="220.000000pt" height="220.000000pt" viewBox="0 0 900.000000 900.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4010 8840 c-230 -33 -375 -205 -340 -402 16 -86 51 -155 108 -214
55 -56 116 -96 179 -114 79 -24 225 22 289 92 48 52 57 86 51 191 -9 166 -28
184 -178 174 -49 -4 -98 -12 -110 -19 -24 -15 -49 -69 -49 -109 0 -30 31 -59
62 -59 27 0 68 -22 68 -36 0 -22 -64 -36 -109 -24 -52 14 -78 42 -96 104 -20
68 -19 104 8 150 28 50 67 73 153 90 91 18 100 22 124 61 54 88 -13 137 -160
115z"/>
<path d="M4415 8820 c-19 -21 -20 -41 -23 -324 -3 -248 -1 -304 11 -320 25
-34 313 -59 375 -33 58 24 94 103 73 159 -8 23 -19 27 -93 38 -147 23 -158 35
-55 64 46 14 57 21 59 39 5 72 -14 101 -74 117 -57 16 -48 49 17 64 105 24
133 36 144 65 17 39 5 94 -26 123 -24 22 -32 23 -207 26 -176 3 -182 2 -201
-18z"/>
<path d="M5075 8811 c-39 -16 -49 -41 -90 -236 -73 -349 -77 -368 -73 -415 3
-51 19 -63 101 -75 42 -6 50 -4 69 18 11 13 28 43 37 68 24 65 46 63 66 -8 27
-94 97 -144 156 -113 16 9 19 22 19 73 0 34 -7 87 -15 117 -25 92 -22 104 35
139 28 17 61 49 76 73 23 37 27 53 27 123 1 130 -36 170 -199 214 -84 23 -182
33 -209 22z m198 -215 c7 -16 -1 -26 -20 -26 -7 0 -13 9 -13 20 0 23 25 27 33
6z"/>
<path d="M3265 8694 c-68 -17 -204 -69 -225 -86 -38 -31 -31 -84 39 -315 91
-300 110 -344 161 -362 40 -13 96 3 117 35 14 22 14 33 5 75 -7 28 -12 57 -12
65 0 25 29 15 73 -26 24 -21 56 -44 73 -50 38 -15 107 -4 129 20 17 19 17 22
-1 56 -10 19 -42 63 -71 97 -63 75 -71 105 -41 166 18 35 23 63 23 116 -1 129
-66 200 -191 209 -33 3 -68 3 -79 0z m65 -199 c0 -18 -25 -26 -38 -13 -8 8 -8
17 -1 30 8 15 13 17 25 7 8 -6 14 -17 14 -24z"/>
<path d="M5713 8634 c-12 -3 -35 -19 -52 -36 -34 -34 -47 -90 -39 -163 5 -43
10 -50 140 -213 71 -89 48 -106 -96 -70 -78 20 -106 23 -124 15 -49 -22 -68
-111 -34 -154 33 -42 228 -113 312 -113 64 0 121 43 166 125 57 102 47 145
-70 294 -36 46 -66 92 -66 103 0 22 -8 23 86 -8 109 -35 159 -36 184 -4 11 14
20 41 20 62 0 30 -6 42 -36 66 -71 59 -303 115 -391 96z"/>
<path d="M2768 8486 c-80 -49 -94 -78 -64 -134 69 -129 126 -279 126 -332 0
-24 -34 -60 -55 -60 -41 0 -119 102 -208 270 -53 99 -81 117 -135 83 -53 -33
-82 -66 -82 -95 0 -68 195 -388 278 -456 42 -35 48 -36 116 -36 59 1 82 6 136
33 88 44 144 92 170 146 42 86 19 172 -121 460 -73 151 -91 165 -161 121z"/>
<path d="M2130 8123 c-122 -38 -310 -170 -310 -216 0 -11 33 -61 73 -111 77
-95 211 -273 239 -316 38 -59 89 -100 126 -100 13 0 44 14 70 32 71 49 209
186 216 214 12 45 -33 123 -108 190 -51 45 -75 76 -101 129 -55 113 -150 196
-205 178z m-2 -205 c18 -18 14 -38 -7 -38 -20 0 -35 25 -25 41 7 12 18 11 32
-3z"/>
<path d="M6399 7911 c-23 -24 -29 -38 -29 -73 0 -59 17 -79 71 -85 38 -4 50
-1 77 22 46 38 44 82 -5 130 -44 43 -75 45 -114 6z"/>
<path d="M7113 7863 c-27 -27 -80 -84 -118 -127 -39 -44 -74 -84 -80 -90 -5
-6 -44 -49 -85 -96 -41 -47 -85 -96 -97 -110 -34 -37 -29 -62 21 -108 82 -76
92 -75 179 6 43 40 53 44 85 39 21 -2 58 -18 82 -35 81 -55 122 -52 160 11 33
53 22 100 -41 177 -16 19 -29 45 -29 57 0 38 43 29 111 -24 49 -39 68 -48 101
-48 33 0 46 7 74 38 52 56 47 76 -43 169 -100 102 -211 188 -245 188 -17 0
-42 -16 -75 -47z"/>
<path d="M7535 7406 c-120 -81 -396 -306 -421 -344 -27 -39 -22 -65 19 -109
38 -40 82 -44 144 -11 32 17 45 20 54 11 9 -9 2 -28 -26 -79 l-38 -67 19 -35
c20 -38 72 -82 96 -82 20 0 39 23 78 95 38 69 69 117 85 127 5 4 48 8 96 8
l85 0 57 51 c32 28 64 64 72 80 19 36 19 110 0 156 -36 85 -186 253 -226 253
-8 0 -50 -24 -94 -54z m135 -252 c0 -19 -5 -25 -17 -22 -22 4 -30 38 -12 49
19 11 29 2 29 -27z"/>
<path d="M1684 7280 c-28 -11 -74 -67 -74 -90 0 -11 14 -35 31 -55 42 -48 87
-49 123 -2 43 56 43 82 3 122 -36 36 -47 40 -83 25z"/>
<path d="M959 6988 c-43 -41 -94 -112 -129 -178 -30 -58 -34 -74 -34 -145 -1
-64 3 -85 18 -106 40 -51 67 -64 136 -64 62 0 71 3 185 68 66 37 124 66 130
64 5 -2 11 -18 13 -35 2 -22 -10 -54 -43 -112 -57 -101 -59 -142 -6 -177 55
-37 97 -31 147 21 45 47 51 58 109 176 50 101 52 160 10 221 -40 57 -109 92
-191 97 -75 5 -121 -11 -204 -69 -95 -67 -110 -47 -51 68 45 87 49 109 26 152
-24 47 -77 55 -116 19z"/>
<path d="M7938 6928 c-8 -13 -24 -41 -36 -63 -30 -60 -84 -108 -167 -150 -62
-31 -88 -38 -157 -42 -89 -7 -120 -24 -133 -76 -9 -35 34 -120 95 -189 45 -50
56 -58 88 -58 32 0 45 9 121 89 73 75 99 95 171 129 47 23 113 47 148 55 83
19 106 40 99 90 -8 55 -55 144 -104 194 -51 51 -100 59 -125 21z"/>
<path d="M8125 6500 c-132 -52 -373 -174 -419 -212 -20 -16 -36 -38 -36 -49 0
-60 102 -285 155 -344 37 -40 75 -46 115 -18 56 38 62 71 30 155 -11 29 -20
59 -20 66 0 22 28 13 49 -17 31 -43 71 -54 110 -30 37 23 46 53 33 116 -12 53
-9 63 16 63 21 -1 43 -31 65 -90 18 -48 60 -100 80 -100 20 0 90 40 120 69 33
30 32 50 -7 134 -13 28 -27 63 -31 77 -11 37 -84 173 -103 191 -31 31 -55 29
-157 -11z"/>
<path d="M660 6348 c-50 -28 -76 -54 -118 -118 -58 -86 -73 -119 -79 -169 -4
-40 -2 -49 19 -69 54 -50 339 -169 541 -227 54 -15 61 -15 84 0 38 26 82 134
95 240 11 87 11 93 -11 139 -71 146 -408 275 -531 204z m168 -192 c15 -7 43
-21 62 -31 56 -28 90 -65 90 -97 0 -49 -35 -46 -157 14 -86 42 -109 58 -111
76 -2 13 2 30 8 38 16 18 74 18 108 0z"/>
<path d="M8345 5925 c-71 -36 -92 -77 -151 -285 -20 -69 -26 -81 -48 -94 -26
-16 -40 10 -65 118 -24 103 -47 136 -97 136 -35 0 -88 -31 -105 -61 -29 -55
23 -254 91 -348 55 -75 136 -98 216 -62 97 44 170 140 180 237 7 70 22 124 34
124 13 0 27 -29 57 -118 36 -108 47 -122 93 -122 56 0 100 39 100 89 0 62 -63
253 -104 319 -23 35 -105 82 -145 82 -15 0 -39 -7 -56 -15z"/>
<path d="M463 5809 c-64 -18 -127 -133 -168 -306 -27 -111 -15 -133 97 -174
52 -19 416 -111 491 -124 82 -14 106 5 127 101 12 51 -1 71 -66 101 -62 28
-68 51 -19 65 50 15 111 47 129 67 24 27 31 82 13 106 -13 17 -25 20 -75 17
-32 -1 -81 -9 -108 -17 -82 -25 -95 -21 -139 37 -97 128 -168 160 -282 127z
m87 -224 c0 -16 -35 -21 -44 -6 -8 12 4 21 26 21 10 0 18 -7 18 -15z"/>
<path d="M318 5179 c-19 -7 -31 -22 -38 -47 -12 -45 -13 -102 -1 -121 11 -17
70 -28 191 -36 153 -10 178 -14 210 -41 31 -26 40 -72 21 -103 -12 -19 -86
-30 -212 -30 -58 -1 -134 -4 -168 -7 l-61 -7 0 -87 c0 -65 4 -91 15 -100 19
-16 483 -8 538 9 60 19 102 69 115 136 15 73 15 183 1 239 -14 55 -59 103
-127 133 -101 44 -423 86 -484 62z"/>
<path d="M8204 4918 c-25 -30 -44 -64 -44 -81 0 -7 13 -28 29 -47 24 -29 35
-35 71 -35 36 0 47 6 77 38 41 45 38 66 -16 114 -44 40 -88 44 -117 11z"/>
<path d="M626 4479 c-50 -39 -22 -104 71 -166 59 -39 76 -70 53 -98 -21 -26
-87 -53 -131 -55 -110 -5 -130 -1 -160 29 -16 16 -29 34 -29 39 0 5 18 37 40
70 44 66 50 102 20 132 -43 43 -126 32 -188 -25 l-37 -33 0 -144 c0 -228 10
-238 217 -238 178 0 342 21 390 49 52 31 62 68 56 210 -5 121 -19 172 -56 204
-54 49 -198 64 -246 26z"/>
<path d="M8134 4433 c-57 -11 -98 -97 -115 -239 -14 -117 -4 -158 46 -203 65
-57 192 -76 226 -34 8 9 14 35 14 57 0 43 -15 64 -68 99 -22 14 -27 25 -27 58
0 38 2 41 46 61 37 16 62 19 124 16 70 -3 82 -6 117 -34 54 -44 51 -70 -12
-111 -27 -18 -56 -41 -62 -50 -19 -26 -16 -87 5 -106 26 -24 118 -22 177 3 63
27 94 93 102 217 10 161 -18 202 -162 236 -124 30 -335 45 -411 30z"/>
<path d="M8040 3848 c-53 -28 -96 -87 -135 -185 -37 -94 -46 -250 -17 -303 27
-49 85 -91 178 -127 122 -48 181 -63 279 -69 83 -6 93 -4 125 18 58 40 95 108
134 248 53 194 24 256 -169 353 -81 41 -203 76 -290 83 -51 5 -67 2 -105 -18z
m262 -263 c96 -46 111 -102 41 -150 -29 -19 -50 -25 -94 -25 -49 0 -60 4 -94
33 -32 28 -38 40 -42 82 -4 42 -1 54 18 74 19 20 28 23 70 18 26 -3 72 -17
101 -32z"/>
<path d="M791 3593 c-64 -26 -74 -122 -16 -153 31 -17 105 -7 122 16 17 23 16
84 -1 106 -21 29 -73 44 -105 31z"/>
<path d="M7754 3213 c-10 -16 -27 -46 -37 -67 -16 -35 -16 -41 -2 -62 8 -13
33 -33 54 -44 75 -38 67 -50 -42 -70 -88 -16 -113 -31 -121 -74 -12 -63 3 -81
88 -99 42 -9 90 -17 107 -17 46 0 65 -15 100 -80 23 -44 46 -69 86 -97 52 -36
60 -38 132 -38 69 0 81 3 114 27 19 16 49 49 66 74 37 53 121 226 121 246 0 8
-12 26 -27 40 -42 38 -552 288 -590 288 -22 0 -36 -7 -49 -27z m394 -437 c3
-22 0 -27 -14 -24 -27 5 -42 36 -24 48 22 14 35 7 38 -24z"/>
<path d="M1067 3076 c-47 -17 -99 -57 -129 -98 -19 -28 -23 -49 -28 -148 -9
-161 -22 -175 -80 -87 -19 28 -49 71 -68 95 -38 48 -52 49 -109 5 -45 -33 -44
-75 3 -167 68 -133 109 -192 161 -232 31 -24 48 -29 94 -29 46 0 62 5 93 29
51 39 65 77 77 214 14 155 20 177 47 177 16 0 35 -21 74 -79 29 -44 65 -88 79
-99 24 -17 30 -18 64 -6 55 20 88 64 82 109 -15 100 -126 257 -216 303 -61 30
-88 33 -144 13z"/>
<path d="M7504 2718 c-74 -65 -68 -88 52 -204 41 -39 74 -76 74 -81 0 -18 -40
-23 -183 -23 -150 0 -178 -7 -216 -56 -38 -48 -29 -80 47 -154 37 -36 102 -94
144 -128 224 -179 281 -203 336 -142 54 59 48 95 -28 174 -27 28 -50 57 -50
64 0 10 31 12 143 10 126 -3 146 -1 171 16 46 30 75 69 76 100 0 36 -44 80
-235 239 -71 60 -140 117 -153 128 -43 37 -119 89 -130 89 -6 0 -28 -14 -48
-32z"/>
<path d="M1388 2589 c-62 -52 -63 -80 -8 -153 35 -46 51 -86 35 -86 -3 0 -27
12 -54 27 -44 25 -51 26 -74 14 -39 -21 -52 -61 -38 -117 9 -34 9 -50 1 -58
-12 -12 -10 -13 -96 56 -72 59 -106 62 -154 18 -30 -28 -32 -34 -27 -76 6 -53
80 -169 174 -273 69 -75 90 -79 156 -30 25 19 71 52 102 74 79 55 188 146 263
217 45 45 62 68 62 87 0 36 -107 199 -182 277 -74 78 -94 81 -160 23z"/>
<path d="M1782 2168 c-6 -18 -13 -85 -15 -148 -6 -137 -22 -206 -51 -225 -26
-17 -86 -31 -201 -45 -116 -14 -175 -39 -175 -75 0 -20 12 -33 58 -63 l57 -37
130 0 c123 0 130 -1 133 -20 2 -12 -12 -37 -31 -60 -69 -81 -69 -91 5 -171 66
-72 68 -71 273 142 193 200 219 224 237 206 10 -10 -3 -51 -67 -197 -7 -16
-27 -66 -45 -110 -17 -44 -36 -88 -42 -99 -41 -77 -39 -143 5 -179 111 -92
135 -84 353 113 176 160 284 276 284 305 0 36 -59 69 -110 61 -22 -3 -58 -9
-80 -12 -51 -8 -77 13 -86 65 -12 75 -26 100 -77 143 -68 58 -142 109 -190
130 -36 17 -41 17 -70 1 -18 -9 -44 -25 -60 -37 -43 -32 -58 -9 -69 110 -7 85
-13 105 -40 147 -30 47 -78 87 -105 87 -6 0 -16 -15 -21 -32z"/>
<path d="M6878 1974 c-49 -26 -165 -148 -194 -204 -37 -72 -40 -163 -7 -231
43 -91 174 -223 270 -273 55 -28 117 -21 208 24 143 70 215 139 202 191 -19
76 -405 515 -446 508 -3 -1 -18 -8 -33 -15z m108 -326 c51 -47 104 -131 104
-165 0 -18 -6 -23 -26 -23 -35 0 -87 42 -135 108 -40 57 -48 89 -27 110 20 20
36 14 84 -30z"/>
<path d="M6393 1579 c-18 -5 -70 -28 -115 -51 -210 -106 -259 -175 -229 -319
23 -110 153 -320 238 -385 34 -26 45 -29 113 -28 65 0 83 5 135 34 106 58 164
104 209 162 24 32 28 47 28 99 0 66 -9 94 -78 234 -95 194 -201 283 -301 254z
m79 -333 c76 -94 73 -152 -9 -191 -35 -17 -38 -17 -70 0 -48 26 -103 113 -103
164 0 56 39 93 95 89 35 -3 45 -10 87 -62z"/>
<path d="M2721 1421 c-17 -21 -31 -42 -31 -46 0 -5 -11 -31 -24 -59 -64 -137
-88 -190 -135 -301 -27 -67 -53 -139 -57 -161 -6 -39 -4 -42 38 -77 87 -71
114 -61 183 68 74 136 87 145 166 105 72 -37 72 -54 7 -198 -34 -76 -36 -122
-8 -140 51 -32 130 -49 165 -36 18 7 58 83 111 210 20 49 42 103 49 119 28 61
67 161 81 205 22 73 18 98 -22 136 -29 28 -43 34 -79 34 -42 0 -46 -3 -102
-72 -51 -63 -64 -73 -94 -76 -31 -3 -41 2 -68 33 -36 41 -36 47 -16 105 20 58
19 112 -2 130 -35 30 -91 60 -111 60 -12 0 -33 -16 -51 -39z"/>
<path d="M5615 1221 c-60 -8 -95 -26 -156 -80 -64 -56 -83 -99 -74 -169 4 -30
13 -69 20 -86 7 -17 21 -50 30 -73 27 -64 47 -78 114 -76 68 1 183 51 208 90
15 22 15 29 2 66 -22 59 -54 80 -102 66 -44 -12 -57 -6 -57 26 0 28 32 52 70
55 63 5 81 -1 119 -39 51 -51 67 -115 47 -190 -17 -67 -36 -86 -124 -129 -90
-44 -122 -79 -122 -133 0 -30 5 -42 26 -55 22 -15 32 -15 80 -5 105 24 186 71
271 159 69 71 87 113 86 207 0 70 -4 90 -32 148 -37 78 -105 150 -177 188 -54
29 -144 41 -229 30z"/>
<path d="M3440 1163 c-44 -17 -109 -104 -129 -170 -20 -71 5 -135 88 -226 102
-111 100 -107 77 -126 -11 -9 -25 -9 -55 -1 -22 6 -65 11 -95 12 -65 2 -92
-16 -102 -68 -15 -80 66 -125 270 -151 128 -16 132 -16 171 3 72 35 106 145
71 229 -8 19 -58 78 -110 131 -93 92 -113 128 -82 140 8 3 60 -2 116 -10 113
-19 144 -12 167 34 32 64 7 124 -62 150 -84 32 -292 66 -325 53z"/>
<path d="M5105 1103 c-56 -8 -188 -44 -214 -58 -110 -57 -118 -237 -16 -341
21 -22 132 -77 176 -87 15 -4 37 -15 50 -26 l23 -18 -30 -16 c-16 -8 -49 -18
-74 -22 -25 -3 -66 -13 -92 -21 -52 -17 -62 -36 -49 -97 16 -67 22 -70 141
-64 122 6 216 32 286 80 56 37 69 72 59 155 -6 46 -13 61 -48 96 -41 40 -85
61 -207 101 -128 41 -134 83 -14 100 96 14 169 35 182 52 22 29 10 110 -21
140 -26 27 -85 37 -152 26z"/>
<path d="M4243 868 c-62 -68 -25 -158 64 -161 29 -1 42 6 70 36 40 45 38 66
-13 115 -42 40 -90 44 -121 10z"/>
</g>
</svg>
</motion.div>


       <img
          src={burgerLogo}
          alt="Burger Logo"
          className="md:w-24 md:h-24 w-24 h-24  absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-50"

          // className=" md:w-72 md:h-72 w-48 h-48  absolute top-1/2 left-1/2 transform translate-y-72 -translate-x-1/2  md:translate-y-48 z-50"
        />
      </motion.div>
  <div className="flex flex-col w-full h-full items-center justify-end mb-12 pointer-events-auto">
 
    <div className="flex gap-3 md:gap-36 items-center ">
      <button
      className="hover:text-indigo-600 transition-colors transform hover:scale-100 active:scale-90 duration-400"
      onClick={previousProject}
      >
              <div className="w-full md:w-auto">

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto md:w-40 md:h-40"
           viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
fill="#000000" stroke="none">
<path d="M2573 5969 c-2559 -398 -3479 -3614 -1505 -5260 1818 -1516 4548
-468 4902 1881 292 1939 -1458 3680 -3397 3379z m820 -551 c1594 -240 2518
-2009 1816 -3475 -884 -1848 -3534 -1848 -4418 0 -852 1779 640 3772 2602
3475z"/>
<path d="M2670 4317 c-33 -26 -314 -301 -624 -612 -603 -604 -608 -611 -577
-775 15 -83 1176 -1260 1264 -1283 188 -47 347 75 347 266 l0 114 -344 347
-345 346 955 0 c765 0 968 5 1020 27 229 98 229 408 0 506 -52 22 -255 27
-1020 27 l-955 0 345 346 344 347 0 114 c0 222 -244 359 -410 230z"/>
</g>
</svg>
</div>

        {/* ← Previous */}
      </button>
      {/* <h2 className="text-5xl font-bold text-center p-0 m-0">Menu Items</h2> */}
      <button
      className="hover:text-indigo-600 transition-colors transform hover:scale-100 active:scale-90 duration-400"
      onClick={nextProject}
      >
        {/* → Next              */}
        <div className="w-full md:w-auto">

        <svg fill="#000000" 
                 className="w-full h-auto md:w-40 md:h-40"
        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xml:space="preserve">
<g>
	<path d="M165,0C74.019,0,0,74.02,0,165.001C0,255.981,74.019,330,165,330s165-74.019,165-164.999C330,74.02,255.981,0,165,0z
		 M165,300c-74.44,0-135-60.561-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.439,239.439,300,165,300z"/>
	<path d="M185.606,94.395c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213l34.395,34.395l-103.79,0.006
		c-8.284,0-15,6.717-14.999,15.001c0,8.284,6.717,14.999,15.001,14.999l103.784-0.006l-34.392,34.393
		c-5.858,5.857-5.858,15.355,0,21.213c2.929,2.929,6.767,4.394,10.606,4.394c3.839,0,7.678-1.465,10.606-4.394l60-60.001
		C248.42,172.793,250,168.979,250,165s-1.581-7.794-4.394-10.606L185.606,94.395z"/>
</g>
        </svg>
        </div>
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
    <div id="contact" className="flex flex-wrap items-center justify-center">
      {/* First Section */}
      <div className="w-full md:w-1/2 p-0 mt-8 md:mt-16">
        {/* Content for the first section goes here... */}
        <h1 className="text-4xl font-bold mb-2 text-center rounded-md p-2 bg-white bg-opacity-80 tracking-wider	inline-block ">Contact Us</h1>
      </div>

      {/* Second Section */}
      <div className="w-full md:w-1/2 p-4 mt-0 md:mt-16 ">
        {/* Content for the first section goes here... */}
        <h2 className="text-xl font-bold mt-2">Address:</h2>
        <h2 className="text-xl font-bold mt-0">7120 N Sheridan Rd, Chicago, IL 60626</h2>
        
      </div>


      {/* Third Section */}
      <div className="w-full md:w-1/2 p-4">
        {/* Content for the third section goes here... */}
        <h2 className="text-xl font-bold mt-2">Phone Number:</h2>
        <h2 className="text-xl font-bold mt-0">(262) 230 5182</h2>
        

      </div>

      {/* Fourth Section */}
      <div className="mt-8 p-6 rounded-md bg-white bg-opacity-50 w-96 md:w-6/12		 max-w-full">
        {/* LoadScript will load the required Google Maps scripts */}
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      {/* <LoadScript googleMapsApiKey={""}> */}

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
