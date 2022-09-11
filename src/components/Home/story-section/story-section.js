import React from "react";
import "./story-section.scss";
import window from "../../../images/window@2x.png";
import storyObj1 from "../../../images/story-subs/object-01.png"
import storyObj2 from "../../../images/story-subs/object-02.png"
import storyObj3 from "../../../images/story-subs/object-03.png"
import storyObj4 from "../../../images/story-subs/object-04.png"
import storyObj5 from "../../../images/story-subs/object-05.png"
import storyObj6 from "../../../images/story-subs/object-06.png"
import storyObj7 from "../../../images/story-subs/object-07.png"

const SectionStory = () => {
  return (
    <div className="story">
      <img src={`${storyObj1} `} id="story-obj1" className="story-obj" alt="image" />
      <img src={`${storyObj2} `} id="story-obj2" className="story-obj" alt="image" />
      <img src={`${storyObj3} `} id="story-obj3" className="story-obj" alt="image" />
      <img src={`${storyObj4} `} id="story-obj4" className="story-obj" alt="image" />
      <img src={`${storyObj5} `} id="story-obj5" className="story-obj" alt="image" />
      <img src={`${storyObj6} `} id="story-obj6" className="story-obj" alt="image" />

      <div className="story-heading">
        <h3 className="story-heading-title">BRAND STORY</h3>
        <p className="story-heading-content">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
      </div>
  
      <div className="story-content">
      
        <img className="img-bg" srcSet={`${window} 2x`} alt="image" />
        <div className="story-content-main">
          <h3 className="title">What Happened’s Brand story</h3>
          <span>
            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
            풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
            살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
            이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
            칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
            끝에 설산에서 황금시대를 이상을 운다.{" "}
          </span>
          <a href="#" className="btn-see-more">see more</a>
        </div>
    
      </div>
    </div>
  );
};

export default SectionStory;
