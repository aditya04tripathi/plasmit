"use client"

import { useMemo, useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { contactDetails } from "@/lib/site-content"

const SUBMIT_ENDPOINT =
  typeof process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT === "string"
    ? process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT.trim()
    : ""

type FormState = {
  firstName: string
  lastName: string
  mobile: string
  email: string
  country: string
  enquiryType: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

type ContactFormVariant = "dark" | "light"

const countries = [
  "Australia",
  "USA",
  "UK",
  "Canada",
  "Brazil",
  "China",
  "India",
  "Others",
] as const

const enquiryTypes = ["Investor", "Hospital", "Others"] as const

const errorIds = {
  firstName: "contact-first-name-error",
  lastName: "contact-last-name-error",
  email: "contact-email-error",
  country: "contact-country-error",
  enquiryType: "contact-enquiry-type-error",
  message: "contact-message-error",
} as const

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.firstName.trim()) errors.firstName = "First name is required."
  if (!values.lastName.trim()) errors.lastName = "Last name is required."
  if (!values.email.trim()) errors.email = "Email is required."
  if (!values.country.trim()) errors.country = "Country is required."
  if (!values.enquiryType.trim())
    errors.enquiryType = "Enquiry type is required."
  if (!values.message.trim()) errors.message = "Message is required."
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email."
  }
  return errors
}

export function ContactForm({
  variant = "dark",
}: {
  variant?: ContactFormVariant
}) {
  const [values, setValues] = useState<FormState>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    country: "",
    enquiryType: "",
    message: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const canSubmit = useMemo(() => !isSubmitting, [isSubmitting])
  const isLight = variant === "light"

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Fix the fields below.")
      return
    }

    setIsSubmitting(true)
    try {
      if (SUBMIT_ENDPOINT) {
        const res = await fetch(SUBMIT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        toast.success("Message sent", {
          description: "We will reply soon.",
        })
      } else {
        toast.success("Thanks for your message.", {
          description: `Forms are not emailed from this site yet. Please also email ${contactDetails.email}.`,
        })
      }
      setValues({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        country: "",
        enquiryType: "",
        message: "",
      })
      setErrors({})
    } catch {
      toast.error("Send failed. Try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card
      className={
        isLight
          ? "shadow-marketing-md rounded-none border border-border bg-card text-card-foreground"
          : "border border-border bg-card/90 text-card-foreground shadow-sm"
      }
    >
      <CardHeader className="flex flex-col justify-center gap-1.5 pb-0">
        <p
          className={`tracking-[0.26em] uppercase ${
            isLight ? "text-primary" : "text-muted-foreground"
          }`}
        >
          Enquiry form
        </p>
        <CardTitle
          className={`mt-2 leading-[1.1] font-normal tracking-[-0.04em] ${
            isLight ? "text-foreground" : "text-foreground"
          }`}
        >
          Submit your enquiry and our team will get back to you.
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <div
          className={`mt-3 space-y-1.5 leading-body ${
            isLight ? "text-muted-foreground" : "text-muted-foreground"
          }`}
        >
          <p>
            <span className="text-foreground">*</span> Required fields.
          </p>
          {!SUBMIT_ENDPOINT ? (
            <p>
              Also email{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {contactDetails.email}
              </a>{" "}
              so we can respond.
            </p>
          ) : null}
        </div>
        <form
          dir="auto"
          onSubmit={onSubmit}
          className="mt-5 grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2"
        >
          <Field
            className="min-w-0"
            data-invalid={Boolean(errors.firstName)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className="tracking-[0.22em] text-muted-foreground uppercase"
              htmlFor="firstName"
            >
              First name*
            </FieldLabel>
            <FieldContent>
              <Input
                id="firstName"
                value={values.firstName}
                onChange={(e) =>
                  setValues((v) => ({ ...v, firstName: e.target.value }))
                }
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={
                  errors.firstName ? errorIds.firstName : undefined
                }
                required
                autoComplete="given-name"
                maxLength={120}
                disabled={isSubmitting}
                className={
                  isLight
                    ? "border-border bg-muted text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/25"
                    : "border-foreground/10 bg-foreground/5 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/30"
                }
              />
              <FieldError
                id={errorIds.firstName}
                errors={errors.firstName ? [{ message: errors.firstName }] : []}
              />
            </FieldContent>
          </Field>

          <Field
            className="min-w-0"
            data-invalid={Boolean(errors.lastName)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className="tracking-[0.22em] text-muted-foreground uppercase"
              htmlFor="lastName"
            >
              Last name*
            </FieldLabel>
            <FieldContent>
              <Input
                id="lastName"
                value={values.lastName}
                onChange={(e) =>
                  setValues((v) => ({ ...v, lastName: e.target.value }))
                }
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={
                  errors.lastName ? errorIds.lastName : undefined
                }
                required
                autoComplete="family-name"
                maxLength={120}
                disabled={isSubmitting}
                className={
                  isLight
                    ? "border-border bg-muted text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/25"
                    : "border-foreground/10 bg-foreground/5 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/30"
                }
              />
              <FieldError
                id={errorIds.lastName}
                errors={errors.lastName ? [{ message: errors.lastName }] : []}
              />
            </FieldContent>
          </Field>

          <Field className="min-w-0" data-disabled={isSubmitting}>
            <FieldLabel
              className="tracking-[0.22em] text-muted-foreground uppercase"
              htmlFor="mobile"
            >
              Mobile no.
            </FieldLabel>
            <FieldContent>
              <Input
                id="mobile"
                value={values.mobile}
                onChange={(e) =>
                  setValues((v) => ({ ...v, mobile: e.target.value }))
                }
                type="tel"
                autoComplete="tel"
                maxLength={40}
                disabled={isSubmitting}
                className={
                  isLight
                    ? "border-border bg-muted text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/25"
                    : "border-foreground/10 bg-foreground/5 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/30"
                }
              />
            </FieldContent>
          </Field>

          <Field
            className="min-w-0"
            data-invalid={Boolean(errors.email)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className="tracking-[0.22em] text-muted-foreground uppercase"
              htmlFor="email"
            >
              Email*
            </FieldLabel>
            <FieldContent>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) =>
                  setValues((v) => ({ ...v, email: e.target.value }))
                }
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? errorIds.email : undefined}
                required
                autoComplete="email"
                inputMode="email"
                maxLength={254}
                disabled={isSubmitting}
                className={
                  isLight
                    ? "border-border bg-muted text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/25"
                    : "border-foreground/10 bg-foreground/5 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/30"
                }
              />
              <FieldError
                id={errorIds.email}
                errors={errors.email ? [{ message: errors.email }] : []}
              />
            </FieldContent>
          </Field>

          <Field
            className="min-w-0 sm:col-span-2"
            data-invalid={Boolean(errors.country)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className="tracking-[0.22em] text-muted-foreground uppercase"
              htmlFor="contact-country"
            >
              Country*
            </FieldLabel>
            <FieldContent>
              <Select
                value={values.country}
                onValueChange={(value) =>
                  setValues((v) => ({ ...v, country: value }))
                }
                disabled={isSubmitting}
              >
                <SelectTrigger
                  id="contact-country"
                  className={
                    isLight
                      ? "w-full border-border bg-muted text-foreground data-placeholder:text-muted-foreground"
                      : "w-full border-foreground/10 bg-foreground/5 text-foreground data-placeholder:text-muted-foreground"
                  }
                  aria-invalid={Boolean(errors.country)}
                  aria-required="true"
                  aria-describedby={
                    errors.country ? errorIds.country : undefined
                  }
                >
                  <SelectValue placeholder="Please choose an option" />
                </SelectTrigger>
                <SelectContent
                  className={
                    isLight
                      ? "border border-border bg-popover text-popover-foreground"
                      : "border border-foreground/10 bg-background text-foreground"
                  }
                >
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError
                id={errorIds.country}
                errors={errors.country ? [{ message: errors.country }] : []}
              />
            </FieldContent>
          </Field>

          <Field
            className="min-w-0 sm:col-span-2"
            data-invalid={Boolean(errors.enquiryType)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className="tracking-[0.22em] text-muted-foreground uppercase"
              htmlFor="contact-enquiry-type"
            >
              Type of enquiry*
            </FieldLabel>
            <FieldContent>
              <Select
                value={values.enquiryType}
                onValueChange={(value) =>
                  setValues((v) => ({ ...v, enquiryType: value }))
                }
                disabled={isSubmitting}
              >
                <SelectTrigger
                  id="contact-enquiry-type"
                  className={
                    isLight
                      ? "w-full border-border bg-muted text-foreground data-placeholder:text-muted-foreground"
                      : "w-full border-foreground/10 bg-foreground/5 text-foreground data-placeholder:text-muted-foreground"
                  }
                  aria-invalid={Boolean(errors.enquiryType)}
                  aria-required="true"
                  aria-describedby={
                    errors.enquiryType ? errorIds.enquiryType : undefined
                  }
                >
                  <SelectValue placeholder="Please choose an option" />
                </SelectTrigger>
                <SelectContent
                  className={
                    isLight
                      ? "border border-border bg-popover text-popover-foreground"
                      : "border border-foreground/10 bg-background text-foreground"
                  }
                >
                  {enquiryTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError
                id={errorIds.enquiryType}
                errors={
                  errors.enquiryType ? [{ message: errors.enquiryType }] : []
                }
              />
            </FieldContent>
          </Field>

          <Field
            className="min-w-0 sm:col-span-2"
            data-invalid={Boolean(errors.message)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className="tracking-[0.22em] text-muted-foreground uppercase"
              htmlFor="message"
            >
              Message*
            </FieldLabel>
            <FieldContent>
              <Textarea
                id="message"
                value={values.message}
                onChange={(e) =>
                  setValues((v) => ({ ...v, message: e.target.value }))
                }
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? errorIds.message : undefined}
                required
                maxLength={8000}
                className={
                  isLight
                    ? "min-h-32 border-border bg-muted text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/25"
                    : "min-h-32 border-foreground/10 bg-foreground/5 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/30"
                }
                disabled={isSubmitting}
              />
              <FieldError
                id={errorIds.message}
                errors={errors.message ? [{ message: errors.message }] : []}
              />
            </FieldContent>
          </Field>

          <Button
            type="submit"
            disabled={!canSubmit}
            className="h-11 justify-center border border-primary/60 bg-primary text-primary-foreground hover:bg-primary/85 sm:col-span-2"
          >
            {isSubmitting ? "Sending…" : "Send"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
