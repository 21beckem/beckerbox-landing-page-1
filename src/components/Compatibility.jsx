import SectionHeader from './SectionHeader';

const Compatibility = () => {
  return (
    <section class="section" id="compatibility">
      <div class="container">
        <SectionHeader
          title="Compatible right away"
          lead="Every player brings their own phone, making multiplayer setup effortless."
        />
        <div class="badges">
          <div class="badge">iOS & iPhone ready</div>
          <div class="badge">Android devices</div>
          <div class="badge">Up to 4 remotes</div>
          <div class="badge">Instant calibration</div>
        </div>
      </div>
    </section>
  );
};

export default Compatibility;
