import './TransformationAnimation-scene.css';
import './TransformationAnimation.css';

const TransformationAnimation = (props) => {

  return (
    <>
      <div class="animation-container">
        <div class="scaler">
          <div class="label drop-console-label">{props.label1 ?? ''}</div>
          <div class="label use-beckerbox-label">{props.label2 ?? ''}</div>
          <div class="object remote">
            <div class="side front"></div>
            <div class="side back"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side left"></div>
            <div class="side right"></div>
            <div class="extra remote-button1"></div>
          </div>
          <div class="object console">
            <div class="side front">
              <div class="extra stripe"></div>
              <div class="extra stripe" style="bottom: -25px"></div>
            </div>
            <div class="side back"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side left"></div>
            <div class="side right"></div>
          </div>
          <div class="object phone">
            <div class="side front">
              <div class="extra screen">
                <img src={props.iconSrc} alt="" />
              </div>
            </div>
            <div class="side back"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
            <div class="side left"></div>
            <div class="side right"></div>
          </div>
          <div class="object laptop">
            <div class="keyboard">
              <div class="side front"></div>
              <div class="side back"></div>
              <div class="side top"></div>
              <div class="side bottom"></div>
              <div class="side left"></div>
              <div class="side right"></div>
            </div>
            <div class="display">
              <div class="side front"></div>
              <div class="side back"></div>
              <div class="side top">
                <div class="extra screen">
                  <img src={props.logoSrc} alt="" />
                </div>
              </div>
              <div class="side bottom"></div>
              <div class="side left"></div>
              <div class="side right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransformationAnimation;
