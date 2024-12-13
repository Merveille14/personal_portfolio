import { useState, useEffect } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import headerImg from "../assets/img/me.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["software Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-7/12 text-center md:text-left">
            <div className="mb-5">
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wide">
                Welcome to my Portfolio
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-5">
              Hi! I'm Merveille{" "}
              <span className="text-indigo-400">
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p className="text-gray-400 mb-8">
            Passionate about web development and
             intuitive design, I create innovative
              solutions to deliver engaging digital 
              experiences that are accessible to all.
            </p>
            <button
              onClick={() => console.log("connect")}
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md shadow-lg"
            >
              Let’s Connect <FiArrowRightCircle size={25} />
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-5/12 mt-10 md:mt-0 text-center">
            <img
              src={headerImg}
              alt="Header"
              className="mx-auto w-2/3 md:w-full animate-zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
