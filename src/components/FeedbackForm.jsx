import { createSignal, Show, For, onMount } from 'solid-js';
import './FeedbackForm.css';

const StarRating = (props) => {
  const initialRating = Number(props.defaultValue);
  const [rating, setRating] = createSignal(Number.isFinite(initialRating) && initialRating > 0 ? initialRating : null);
  const [hoverRating, setHoverRating] = createSignal(0);

  const handleClick = (value) => {
    setRating(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <div class="star-rating">
      <For each={[1, 2, 3, 4, 5]}>
        {(star) => (
          <>
            <input
              class="sr-only"
              type="radio"
              name={props.name}
              id={`${props.name}-${star}`}
              value={star}
              checked={rating() === star}
              required={props.required}
              onChange={() => handleClick(star)}
            />
            <button
              type="button"
              class={`star ${(hoverRating() || rating() || 0) >= star ? 'filled' : ''}`}
              onClick={() => handleClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              aria-label={`Rate ${star} stars`}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </For>
    </div>
  );
};

const FeedbackForm = (props) => {
  const [submitted, setSubmitted] = createSignal(false);
  const [formValues, setFormValues] = createSignal({});
  let textareas = [];

  if (props.action === undefined) props.action = 'https://docs.google.com/forms/d/e/1FAIpQLSdleSvsibbsEf3HFxNdQ41kcB8UwPOgU58nxK37qcyYEdEruw/formResponse?embedded=true';
  if (props.method === undefined) props.method = 'POST';

  const questions = props.questions ?? [
    {
      label: "How would you rate your experience?",
      name: "entry.993192862",
      type: "stars",
      required: true,
    },
    {
      label: "How likely would you be to recommend BeckerBox to a friend?",
      name: "entry.1788690887",
      type: "stars",
      required: false,
    },
    {
      label: "Is there any other feedback you would like to give?",
      name: "entry.785019521",
      type: "textarea",
      placeholder: "Share your thoughts...",
      required: false,
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

  const handleStarChange = (name, value) => {
    setFormValues({ ...formValues(), [name]: value });
  };

  const autoResizeTextarea = (el) => {
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  onMount(() => {
    textareas.forEach((el) => autoResizeTextarea(el));
  });

  return (
    <div class="feedback-form-wrapper">
      <Show 
        when={!submitted()} 
        fallback={
          <div class="feedback-success">
            <div class="success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
                <path d="M8 12.5L10.5 15L16 9.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Thanks for your feedback!</h3>
            <p>We appreciate you taking the time to share your thoughts.</p>
          </div>
        }
      >
        <form onSubmit={handleSubmit} action={props.action} method={props.method} class="feedback-form">
          <For each={questions}>
            {(q) => (
              <div class="form-field">
                <label for={q.name} class="form-label">
                  {q.label}
                  <Show when={q.required}>
                    <span class="form-required">*</span>
                  </Show>
                </label>
                {q.type === 'stars' ? (
                  <StarRating 
                    name={q.name} 
                    required={q.required}
                    onChange={(value) => handleStarChange(q.name, value)}
                    defaultValue={q.defaultValue}
                  />
                ) : q.type === 'textarea' ? (
                  <textarea
                    name={q.name}
                    id={q.name}
                    rows="1"
                    placeholder={q.placeholder || ''}
                    required={q.required}
                    class="form-textarea"
                    value={q.defaultValue || ''}
                    ref={(el) => textareas.push(el)}
                    onInput={(e) => autoResizeTextarea(e.currentTarget)}
                  />
                ) : (
                  <input 
                    type={q.type} 
                    name={q.name} 
                    id={q.name} 
                    placeholder={q.placeholder || ''}
                    required={q.required}
                    class="form-input"
                    value={q.defaultValue || ''}
                  />
                )}
              </div>
            )}
          </For>
          <button type="submit" class="btn primary submit-btn">
            Submit Feedback
          </button>
        </form>
      </Show>
    </div>
  );
};

export default FeedbackForm;