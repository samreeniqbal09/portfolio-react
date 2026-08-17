import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import emailjs from "@emailjs/browser"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const initialTouched = {
  name: false,
  email: false,
  message: false,
}

function validate(field, value) {
  switch (field) {
    case "name":
      if (!value.trim()) return "Name is required."
      if (value.trim().length < 2) {
        return "Name must be at least 2 characters."
      }
      return ""

    case "email":
      if (!value.trim()) return "Email is required."
      if (!EMAIL_REGEX.test(value.trim())) {
        return "Enter a valid email address."
      }
      return ""

    case "message":
      if (!value.trim()) return "Message is required."
      if (value.trim().length < 10) {
        return "Message must be at least 10 characters."
      }
      return ""

    default:
      return ""
  }
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
}

function Contact() {
  const shouldReduceMotion = useReducedMotion()

  const [values, setValues] = useState(initialValues)

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [touched, setTouched] = useState(initialTouched)
  const [focusedField, setFocusedField] = useState(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [sendError, setSendError] = useState("")

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

    if (isSuccess) {
      setIsSuccess(false)
    }

    if (sendError) {
      setSendError("")
    }
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
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
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
    setSendError("")

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
          name: "",
          email: "",
          message: "",
        })

        setTouched(initialTouched)
      })
      .catch((error) => {
        console.error("EmailJS error:", error)

        setIsSubmitting(false)

        setSendError(
          "Something went wrong. Please try again or email me directly."
        )
      })
  }

  const getFieldClasses = (field) => {
    const hasError = touched[field] && errors[field]
    const isFocused = focusedField === field

    if (hasError) {
      return "border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
    }

    if (isFocused) {
      return "border-indigo-500 ring-2 ring-indigo-500/20"
    }

    return "border-input hover:border-indigo-500/50"
  }

  const inputBaseClasses =
    "w-full rounded-xl border bg-background/70 backdrop-blur-sm px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200"

  return (
    <motion.section
      id="contact"
      className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={containerVariants}
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_60%)]"
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.6, 1, 0.6],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      {/* =========================
          HEADING
      ========================= */}

      <motion.div
        variants={itemVariants}
        className="mb-10 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-500">
          Let's Connect
        </p>

        <motion.h2
          variants={itemVariants}
          className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Contact Me
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-muted-foreground"
        >
          Interested in collaborating or have a question?
          Send me a message and I'll get back to you soon.
        </motion.p>
      </motion.div>

      {/* =========================
          CONTACT CARD
      ========================= */}

      <motion.div
        variants={itemVariants}
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                y: -4,
              }
        }
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 22,
        }}
      >
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
          <CardContent className="p-6 md:p-8">
            <motion.form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto max-w-2xl space-y-6"
              variants={containerVariants}
            >
              {/* =========================
                  NAME
              ========================= */}

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>

                <motion.input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  onFocus={handleFocus("name")}
                  whileFocus={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.01,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className={`${inputBaseClasses} ${getFieldClasses("name")}`}
                  aria-invalid={Boolean(
                    touched.name && errors.name
                  )}
                  aria-describedby="contact-name-error"
                />

                {touched.name && errors.name && (
                  <motion.p
                    id="contact-name-error"
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: -5,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-2 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              {/* =========================
                  EMAIL
              ========================= */}

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>

                <motion.input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  onFocus={handleFocus("email")}
                  whileFocus={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.01,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className={`${inputBaseClasses} ${getFieldClasses("email")}`}
                  aria-invalid={Boolean(
                    touched.email && errors.email
                  )}
                  aria-describedby="contact-email-error"
                />

                {touched.email && errors.email && (
                  <motion.p
                    id="contact-email-error"
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: -5,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-2 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* =========================
                  MESSAGE
              ========================= */}

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <motion.textarea
                  id="contact-message"
                  rows={6}
                  value={values.message}
                  onChange={handleChange("message")}
                  onBlur={handleBlur("message")}
                  onFocus={handleFocus("message")}
                  placeholder="Let me know how I can help..."
                  whileFocus={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.01,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className={`${inputBaseClasses} ${getFieldClasses(
                    "message"
                  )} resize-none`}
                  aria-invalid={Boolean(
                    touched.message && errors.message
                  )}
                  aria-describedby="contact-message-error"
                />

                {touched.message && errors.message && (
                  <motion.p
                    id="contact-message-error"
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: -5,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-2 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* =========================
                  SUBMIT BUTTON
              ========================= */}

              <motion.div
                variants={itemVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.98,
                      }
                }
                className="w-full sm:w-fit"
              >
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  size="lg"
                  className="w-full bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-600 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.div>

              {/* =========================
                  SUCCESS MESSAGE
              ========================= */}

              {isSuccess && (
                <motion.p
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: -8,
                          scale: 0.98,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}

              {/* =========================
                  ERROR MESSAGE
              ========================= */}

              {sendError && (
                <motion.p
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: -8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400"
                >
                  {sendError}
                </motion.p>
              )}
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  )
}

export default Contact