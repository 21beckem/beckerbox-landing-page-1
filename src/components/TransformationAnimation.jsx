import './TransformationAnimation-scene.css';
import './TransformationAnimation.css';

const TransformationAnimation = (props) => {

  return (
    <>
      <div class="animation-container">
        <div class="remote">
            <div class="side front"></div>
            <div class="side back"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side left"></div>
            <div class="side right"></div>
            <div class="extra remote-button1"></div>
            <div class="extra remote-button2"></div>
        </div>
        <div class="console">
            <div class="side front"></div>
            <div class="side back"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side left"></div>
            <div class="side right"></div>
            <div class="extra disc-slot"></div>
        </div>
      </div>
    </>
  );
};

export default TransformationAnimation;
