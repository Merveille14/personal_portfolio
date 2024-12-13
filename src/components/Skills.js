import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill bg-gray-900 text-white py-20" id="skills">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400">
            Discover my core competencies in web development, poster design and more. <br />
            I strive to turn every idea into an outstanding achievement.
          </p>
        </div>

        <div className="relative">
          <Carousel 
            responsive={responsive} 
            infinite={true} 
            className="skill-slider"
          >
            {/* Skill Item 1 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={meter1} alt="Web Development" className="w-24 h-24 mb-4" />
              <h5 className="text-lg font-semibold">Web Development</h5>
            </div>

            {/* Skill Item 2 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={meter2} alt="Brand Identity" className="w-24 h-24 mb-4" />
              <h5 className="text-lg font-semibold">application mock-up</h5>
            </div>

            {/* Skill Item 3 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={meter3} alt="Logo Design" className="w-24 h-24 mb-4" />
              <h5 className="text-lg font-semibold">poster design</h5>
            </div>

            {/* Skill Item 4 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={meter1} alt="Web Development" className="w-24 h-24 mb-4" />
              <h5 className="text-lg font-semibold">Web Development</h5>
            </div>
          </Carousel>

          <img 
            className="absolute -left-10 bottom-0 w-32 md:w-48" 
            src={colorSharp} 
            alt="Background Shape" 
          />
        </div>
      </div>
    </section>
  );
};
