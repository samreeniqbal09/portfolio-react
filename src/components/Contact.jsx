import { useState } from 'react'
import { motion } from 'motion/react'
import emailjs from '@emailjs/browser'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(field, value) {
  switch (field) {
    case 'name':
      if (!value.trim()) return 'Name is required.'
      if (value.trim().length < 2) return 'Name must be at least 2 characters.'
      return ''

    case 'email':
      if (!value.trim()) return 'Email is required.'
      if (!EMAIL_REGEX.test(value.trim())) {
        return 'Enter a valid email address.'
      }
      return ''

    case 'message':
      if (!value.trim()) return 'Message is required.'
      if (value.trim().length < 10) {
        return 'Message must be at least 10 characters.'
      }
      return ''

    default:
      return ''
  }
}

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const initialTouched = {
  name: false,
  email: false,
  message: false,
}

function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [touched, setTouched] = useState(initialTouched)
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [sendError, setSendError] = useState('')

  const isValid =
    values.name.trim().length >= 2 &&
    EMAIL_REGEX.test(values.email.trim()) &&
    values.message.trim().length >= 10

  const handleChange = (field) => (e) => {
    const value = e.target.value

    setValues((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validate(field, value),
      }))
    }

    if (isSuccess) setIsSuccess(false)
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }))

    setErrors((prev) => ({
      ...prev,
      [field]: validate(field, values[field]),
    }))

    setFocusedField(null)
  }

  const handleFocus = (field) => () => {
    setFocusedField(field)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      name: validate('name', values.name),
      email: validate('email', values.email),
      message: validate('message', values.message),
    }

    setErrors(newErrors)

    setTouched({
      name: true,
      email: true,
      message: true,
    })

    const hasErrors = Object.values(newErrors).some(Boolean)

    if (hasErrors) return

    setIsSubmitting(true)
    setIsSuccess(false)
    setSendError('')

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        setValues(initialValues)
        setErrors({
          name: '',
          email: '',
          message: '',
        })
        setTouched(initialTouched)
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        setIsSubmitting(false)
        setSendError(
          'Something went wrong. Please try again or email me directly.'
        )
      })
  }

  const getFieldClasses = (field) => {
    const hasError = touched[field] && errors[field]
    const isFocused = focusedField === field

    if (hasError) {
      return 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
    }

    if (isFocused) {
      return 'border-indigo-500 ring-2 ring-indigo-500/20'
    }

    return 'border-input hover:border-indigo-500/50'
  }

  const inputBaseClasses =
    'w-full rounded-xl border bg-background/70 backdrop-blur-sm px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200'

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 py-16 sm:py-20 max-w-5xl mx-auto"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-500">
            Let's Connect
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Contact Me
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Interested in collaborating or have a question?
            Send me a message and I'll get back to you soon.
          </p>
        </div>

        {/* Contact Card */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
          <CardContent className="p-6 md:p-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="max-w-2xl mx-auto space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  onFocus={handleFocus('name')}
                  className={`${inputBaseClasses} ${getFieldClasses('name')}`}
                  aria-invalid={Boolean(
                    touched.name && errors.name
                  )}
                  aria-describedby="contact-name-error"
                />

                {touched.name && errors.name && (
                  <p
                    id="contact-name-error"
                    className="mt-2 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  onFocus={handleFocus('email')}
                  className={`${inputBaseClasses} ${getFieldClasses('email')}`}
                  aria-invalid={Boolean(
                    touched.email && errors.email
                  )}
                  aria-describedby="contact-email-error"
                />

                {touched.email && errors.email && (
                  <p
                    id="contact-email-error"
                    className="mt-2 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows={6}
                  value={values.message}
                  onChange={handleChange('message')}
                  onBlur={handleBlur('message')}
                  onFocus={handleFocus('message')}
                  placeholder="Let me know how I can help..."
                  className={`${inputBaseClasses} ${getFieldClasses(
                    'message'
                  )} resize-none`}
                  aria-invalid={Boolean(
                    touched.message && errors.message
                  )}
                  aria-describedby="contact-message-error"
                />

                {touched.message && errors.message && (
                  <p
                    id="contact-message-error"
                    className="mt-2 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.div
                whileHover={{
                  scale: isValid && !isSubmitting ? 1.02 : 1,
                }}
                whileTap={{
                  scale: isValid && !isSubmitting ? 0.98 : 1,
                }}
                className="w-full sm:w-fit"
              >
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  size="lg"
                  className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </motion.div>

              {/* Success */}
              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}

              {/* Error */}
              {sendError && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400"
                >
                  {sendError}
                </motion.p>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default Contact