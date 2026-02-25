import './TransformationAnimation-scene.css';
import './TransformationAnimation.css';

const TransformationAnimation = (props) => {

  return (
    <>
      <div class="animation-container">
        <div class="remote">
            <div class="front"></div>
            <div class="back"></div>
            <div class="top"></div>
            <div class="bottom"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="console">
            <div class="front"></div>
            <div class="back"></div>
            <div class="top"></div>
            <div class="bottom"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
      </div>
    </>
  );
};

export default TransformationAnimation;
