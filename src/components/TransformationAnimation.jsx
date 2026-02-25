import './TransformationAnimation-scene.css';
import './TransformationAnimation.css';

const TransformationAnimation = (props) => {

  return (
    <>
      <div class="animation-container">
        <div class="object remote" style="display: none;">
            <div class="side front"></div>
            <div class="side back"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side left"></div>
            <div class="side right"></div>
            <div class="extra remote-button1"></div>
            <div class="extra remote-button2"></div>
        </div>
        <div class="object console" style="display: none;">
            <div class="side front"></div>
            <div class="side back"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side left"></div>
            <div class="side right"></div>
            <div class="extra disc-slot"></div>
        </div>
        <div class="object phone" style="display: block;">
            <div class="side front"></div>
            <div class="side back"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side left"></div>
            <div class="side right"></div>
            <div class="extra screen"></div>
        </div>
        <div class="object laptop" style="display: none;">
            <div class="keyboard">
              <div class="side front"></div>
              <div class="side back"></div>
              <div class="side top"></div>
              <div class="side bottom"></div>
              <div class="side left"></div>
              <div class="side right"></div>
            </div>
            <div class="screen">
              <div class="side front"></div>
              <div class="side back"></div>
              <div class="side top"></div>
              <div class="side bottom"></div>
              <div class="side left"></div>
              <div class="side right"></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default TransformationAnimation;
