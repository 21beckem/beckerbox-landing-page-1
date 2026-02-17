import './SectionHeader.css';

const SectionHeader = (props) => {
  return (
    <div class="section-header">
      <h2>{props.title}</h2>
      <p class="lead">{props.lead}</p>
    </div>
  );
};

export default SectionHeader;
