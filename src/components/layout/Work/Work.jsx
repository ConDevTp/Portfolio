import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./index.css";
import Content from "../Content/Content";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

import Work1 from "../../../assets/img/Work/1.jpg";
import Work2 from "../../../assets/img/Work/2.jpg";
import Work3 from "../../../assets/img/Work/3.jpg";
import Work4 from "../../../assets/img/Work/4.jpg";
import Work5 from "../../../assets/img/Work/5.jpg";
import Work6 from "../../../assets/img/Work/6.jpg";
import Work7 from "../../../assets/img/Work/7.jpg";
import Work8 from "../../../assets/img/Work/8.jpg";
import Work9 from "../../../assets/img/Work/9.jpg";

import Work11 from "../../../assets/img/Work/88.jpg";
import Work22 from "../../../assets/img/Work/22.jpg";
import Work33 from "../../../assets/img/Work/33.jpg";
import Work44 from "../../../assets/img/Work/99.jpg";
import Work55 from "../../../assets/img/Work/55.jpg";
import Work66 from "../../../assets/img/Work/66.jpg";
import Work77 from "../../../assets/img/Work/77.jpg";
import Work88 from "../../../assets/img/Work/44.jpg";
import Work99 from "../../../assets/img/Work/11.jpg";

const animation = { duration: 80000, easing: (t) => t };
const reverseAnimation = { duration: 90000, easing: (t) => t };

const Work = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const [sliderRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(-5, true, reverseAnimation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 5, true, reverseAnimation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 5, true, reverseAnimation);
    },
  });

  return (
    <Content>
      <div className="work-container" id="portfolio">
        <SectionTitle title="نـمونه کارها" />
        <div className="work-content d-flex flex-column">
          {/* ردیف اول */}
          <div ref={sliderRef} className="keen-slider mt-5">
            <div className="keen-slider__slide">
              <a
                href="https://delbet.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work1} alt="پروژه ۱" />
              </a>
              <a
                href="https://livebet-9.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work2} alt="پروژه ۲" />
              </a>
              <a
                href="https://www.casinolivebet.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work3} alt="پروژه ۳" />
              </a>
            </div>
            <div className="keen-slider__slide">
              <a
                href="https://dino-shop.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work4} alt="پروژه ۴" />
              </a>
              <a
                href="https://spin-wheel-con.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work5} alt="پروژه ۵" />
              </a>
              <a
                href="https://betsisi-2.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work6} alt="پروژه ۶" />
              </a>
            </div>
            <div className="keen-slider__slide">
              <a
                href="https://condevtp.github.io/livebet14/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work7} alt="پروژه ۷" />
              </a>
              <a
                href="https://condevtp.github.io/livebet18/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work8} alt="پروژه ۸" />
              </a>
              <a
                href="https://condevtp.github.io/livebet16/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work9} alt="Con Dev - پروژه ۹" />
              </a>
            </div>
          </div>

          {/* ردیف دوم - جهت مخالف */}
          <div ref={sliderRef2} className="keen-slider keen-slider2">
            <div className="keen-slider__slide">
              <a
                href="https://condevtp.github.io/livebet15/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work11} alt="پروژه ۱۰" />
              </a>
              <a
                href="https://condevtp.github.io/livebet12/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work22} alt="پروژه ۱۱" />
              </a>
              <a
                href="https://livebet-10.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work33} alt="پروژه ۱۲" />
              </a>
            </div>
            <div className="keen-slider__slide">
              <a
                href="https://condevtp.github.io/livebet11/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work44} alt="پروژه ۱۳" />
              </a>
              <a
                href="https://livebet-8.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work55} alt="پروژه ۱۴" />
              </a>
              <a
                href="https://condevtp.github.io/livebet13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work66} alt="پروژه ۱۵" />
              </a>
            </div>
            <div className="keen-slider__slide">
              <a
                href="https://mines-stake.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work77} alt="پروژه ۱۶" />
              </a>
              <a
                href="https://plinko-stake.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work88} alt="پروژه ۱۷" />
              </a>
              <a
                href="https://limbo-stake.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Work99} alt="پروژه ۱۸" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Work;
