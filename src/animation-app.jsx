import TransformationAnimation from './components/TransformationAnimation';

const App = () => {
  return (
    <div class="page" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <TransformationAnimation
        iconSrc="/images/icon/favicon-96.png"
        logoSrc="/images/logo-with-words.png"
      />
    </div>
  );
};

export default App;
