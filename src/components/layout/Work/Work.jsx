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
      s.moveToIdx(s.track.details.abs - 5, true, reverseAnimation); // منفی برای جهت مخالف
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 5, true, reverseAnimation);
    },
  });

  return (
    <Content>
      <div className="work-container">
        <SectionTitle title="نـمونه کارها" />
        <div className="work-content d-flex flex-column">
          <div ref={sliderRef} className="keen-slider mt-5">
            <div className="keen-slider__slide">
              <img src={Work1} alt="" />
              <img src={Work2} alt="" />
              <img src={Work3} alt="" />
            </div>
            <div className="keen-slider__slide">
              <img src={Work4} alt="" />
              <img src={Work5} alt="" />
              <img src={Work6} alt="" />
            </div>
            <div className="keen-slider__slide">
              <img src={Work7} alt="" />
              <img src={Work8} alt="" />
              <img src={Work9} alt="" />
            </div>
          </div>

          {/* اسلایدر دوم با جهت مخالف */}
          <div ref={sliderRef2} className="keen-slider keen-slider2 ">
            <div className="keen-slider__slide">
              <img src={Work11} alt="" />
              <img src={Work22} alt="" />
              <img src={Work33} alt="" />
            </div>
            <div className="keen-slider__slide">
              <img src={Work44} alt="" />
              <img src={Work55} alt="" />
              <img src={Work66} alt="" />
            </div>
            <div className="keen-slider__slide">
              <img src={Work77} alt="" />
              <img src={Work88} alt="" />
              <img src={Work99} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Work;
