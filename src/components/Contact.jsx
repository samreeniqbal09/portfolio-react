import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(field, value) {
  switch (field) {
    case "name":
      if (!value.trim()) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      return "";
    case "email":
      if (!value.trim()) return "Email is required.";
      if (!EMAIL_REGEX.test(value.trim())) return "Enter a valid email address.";
      return "";
    case "message":
      if (!value.trim()) return "Message is required.";
      if (value.trim().length < 10) return "Message must be at least 10 characters.";
      return "";
    default:
      return "";
  }
}

const initialValues = { name: "", email: "", message: "" };
const initialTouched = { name: false, email: false, message: false };

function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState(initialTouched);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValid =
    values.name.trim().length >= 2 &&
    EMAIL_REGEX.test(values.email.trim()) &&
    values.message.trim().length >= 10;

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
    }
    if (isSuccess) setIsSuccess(false);
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(field, values[field]) }));
    setFocusedField(null);
  };

  const handleFocus = (field) => () => setFocusedField(field);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;

    setIsSubmitting(true);
    setIsSuccess(false);

    // Fake submission — simulates network latency.
    // Real email sending will be wired up in a later backend task.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setValues(initialValues);
      setErrors({ name: "", email: "", message: "" });
      setTouched(initialTouched);
    }, 1000);
  };

  const fieldBaseClasses =
    "w-full rounded-lg border bg-white dark:bg-gray-800 px-4 py-3 text-[15px] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none transition-colors duration-200";

  const getFieldClasses = (field) => {
    const hasError = touched[field] && errors[field];
    const isFocused = focusedField === field;
    if (hasError) {
      return `${fieldBaseClasses} border-red-400 dark:border-red-500 focus:border-red-500`;
    }
    if (isFocused) {
      return `${fieldBaseClasses} border-blue-500 dark:border-blue-400 ring-2 ring-blue-100 dark:ring-blue-400/20`;
    }
    return `${fieldBaseClasses} border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600`;
  };

  return (
    <section id="contact" className="px-6 py-16 max-w-3xl mx-auto dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        "Intrested in collaborating or have a question ? Send me a message."
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            onFocus={handleFocus("name")}
            placeholder=""
            className={getFieldClasses("name")}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby="contact-name-error"
          />
          {touched.name && errors.name && (
            <p
              id="contact-name-error"
              className="mt-1.5 text-sm text-red-500 dark:text-red-400 animate-[fadeIn_0.2s_ease-out]"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            onFocus={handleFocus("email")}
            placeholder=""
            className={getFieldClasses("email")}
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-describedby="contact-email-error"
          />
          {touched.email && errors.email && (
            <p
              id="contact-email-error"
              className="mt-1.5 text-sm text-red-500 dark:text-red-400 animate-[fadeIn_0.2s_ease-out]"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={values.message}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}
            onFocus={handleFocus("message")}
            placeholder="Let me know how can I help...."
            className={`${getFieldClasses("message")} resize-none`}
            aria-invalid={Boolean(touched.message && errors.message)}
            aria-describedby="contact-message-error"
          />
          {touched.message && errors.message && (
            <p
              id="contact-message-error"
              className="mt-1.5 text-sm text-red-500 dark:text-red-400 animate-[fadeIn_0.2s_ease-out]"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 sm:w-auto sm:px-8"
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>

        {/* Success message */}
        {isSuccess && (
          <p className="animate-[fadeIn_0.3s_ease-out] rounded-lg bg-emerald-50 dark:bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            Message sent! I'll get back to you soon.
          </p>
        )}
      </form>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Contact;