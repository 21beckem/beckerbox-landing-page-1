import { createSignal, Show } from 'solid-js';

const FeedbackForm = (props) => {
  const [submitted, setSubmitted] = createSignal(false);

  if (props.action === undefined) props.action = 'https://docs.google.com/forms/d/e/1FAIpQLSdleSvsibbsEf3HFxNdQ41kcB8UwPOgU58nxK37qcyYEdEruw/formResponse?embedded=true';
  if (props.method === undefined) props.method = 'POST';

  const questions = props.questions ?? [
    {
      label: "Experience:",
      name: "entry.993192862",
      type: "number",
    },
    {
      label: "Refer to friend?:",
      name: "entry.1788690887",
      type: "number",
    },
    {
      label: "Is there any other feedback you would like to give (positive or negative)?",
      name: "entry.785019521",
      type: "text",
    }
  ];

  let isSubmitting = false;
  async function handleSubmit(e) {
    if (isSubmitting) return;
    isSubmitting = true;

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log("Form Data:", data);

    // submit the form...
    try {
      let response = await fetch(e.target.action, {
        method: e.target.method,
        body: formData,
        mode: 'no-cors',
      });
      setSubmitted(true);
      console.log("Form submitted, response:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      isSubmitting = false;
    }
  }

  return (
    <Show when={!submitted()} fallback={<p>Thanks for your feedback!</p>}>
      <form onSubmit={handleSubmit} action={props.action} method={props.method}>
        {questions.map(q => (
          <div key={q.name}>
            <label for={q.name}>{q.label}</label>
            <input type={q.type} name={q.name} id={q.name} required />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </Show>
  );
};
export default FeedbackForm;