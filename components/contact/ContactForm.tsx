"use client"

import { useMemo, useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
      toast.error("Check the highlighted fields.")
      return
    }

    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 900))
      toast.success("Message sent. We’ll get back to you shortly.")
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
      toast.error("Couldn’t send right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card
      className={
        isLight
          ? "rounded-none border border-sky-950/10 bg-white text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.05)]"
          : "border border-white/8 bg-slate-900/72 text-slate-50"
      }
    >
      <CardHeader className="pb-0">
        <p
          className={`text-xs tracking-[0.26em] uppercase ${
            isLight ? "text-sky-700" : "text-slate-400"
          }`}
        >
          Enquiry form
        </p>
        <CardTitle
          className={`mt-3 text-xl leading-[1.1] font-normal tracking-[-0.04em] ${
            isLight ? "text-slate-950" : "text-slate-50"
          }`}
        >
          Send a note. We’ll reply with the fastest next step.
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <div
          className={`mt-4 text-xs leading-6 ${
            isLight ? "text-slate-500" : "text-slate-400"
          }`}
        >
          Fields marked with
          <span className={isLight ? "text-slate-950" : "text-slate-100"}>*</span> are
          required.
        </div>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.firstName)} data-disabled={isSubmitting}>
            <FieldLabel
              className={`text-xs tracking-[0.22em] uppercase ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
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
                autoComplete="given-name"
                disabled={isSubmitting}
                className={
                  isLight
                    ? "border-sky-950/10 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-200"
                    : "border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:border-emerald-300/70 focus-visible:ring-emerald-300/30"
                }
              />
              <FieldError errors={errors.firstName ? [{ message: errors.firstName }] : []} className="text-xs" />
            </FieldContent>
          </Field>

          <Field data-invalid={Boolean(errors.lastName)} data-disabled={isSubmitting}>
            <FieldLabel
              className={`text-xs tracking-[0.22em] uppercase ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
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
                autoComplete="family-name"
                disabled={isSubmitting}
                className={
                  isLight
                    ? "border-sky-950/10 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-200"
                    : "border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:border-emerald-300/70 focus-visible:ring-emerald-300/30"
                }
              />
              <FieldError errors={errors.lastName ? [{ message: errors.lastName }] : []} className="text-xs" />
            </FieldContent>
          </Field>

          <Field data-disabled={isSubmitting}>
            <FieldLabel
              className={`text-xs tracking-[0.22em] uppercase ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
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
                disabled={isSubmitting}
                className={
                  isLight
                    ? "border-sky-950/10 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-200"
                    : "border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:border-emerald-300/70 focus-visible:ring-emerald-300/30"
                }
              />
            </FieldContent>
          </Field>

          <Field data-invalid={Boolean(errors.email)} data-disabled={isSubmitting}>
            <FieldLabel
              className={`text-xs tracking-[0.22em] uppercase ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
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
                autoComplete="email"
                inputMode="email"
                disabled={isSubmitting}
                className={
                  isLight
                    ? "border-sky-950/10 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-200"
                    : "border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:border-emerald-300/70 focus-visible:ring-emerald-300/30"
                }
              />
              <FieldError errors={errors.email ? [{ message: errors.email }] : []} className="text-xs" />
            </FieldContent>
          </Field>

          <Field
            className="sm:col-span-2"
            data-invalid={Boolean(errors.country)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className={`text-xs tracking-[0.22em] uppercase ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
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
                  className={
                    isLight
                      ? "w-full border-sky-950/10 bg-slate-50 text-slate-950 data-placeholder:text-slate-400"
                      : "w-full border-white/10 bg-white/5 text-slate-100 data-placeholder:text-slate-500"
                  }
                  aria-invalid={Boolean(errors.country)}
                >
                  <SelectValue placeholder="Please choose an option" />
                </SelectTrigger>
                <SelectContent
                  className={
                    isLight
                      ? "border border-sky-950/10 bg-white text-slate-950"
                      : "border border-white/10 bg-slate-950 text-slate-100"
                  }
                >
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError errors={errors.country ? [{ message: errors.country }] : []} className="text-xs" />
            </FieldContent>
          </Field>

          <Field
            className="sm:col-span-2"
            data-invalid={Boolean(errors.enquiryType)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className={`text-xs tracking-[0.22em] uppercase ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
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
                  className={
                    isLight
                      ? "w-full border-sky-950/10 bg-slate-50 text-slate-950 data-placeholder:text-slate-400"
                      : "w-full border-white/10 bg-white/5 text-slate-100 data-placeholder:text-slate-500"
                  }
                  aria-invalid={Boolean(errors.enquiryType)}
                >
                  <SelectValue placeholder="Please choose an option" />
                </SelectTrigger>
                <SelectContent
                  className={
                    isLight
                      ? "border border-sky-950/10 bg-white text-slate-950"
                      : "border border-white/10 bg-slate-950 text-slate-100"
                  }
                >
                  {enquiryTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError errors={errors.enquiryType ? [{ message: errors.enquiryType }] : []} className="text-xs" />
            </FieldContent>
          </Field>

          <Field
            className="sm:col-span-2"
            data-invalid={Boolean(errors.message)}
            data-disabled={isSubmitting}
          >
            <FieldLabel
              className={`text-xs tracking-[0.22em] uppercase ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
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
                className={
                  isLight
                    ? "min-h-32 border-sky-950/10 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-200"
                    : "min-h-32 border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:border-emerald-300/70 focus-visible:ring-emerald-300/30"
                }
                disabled={isSubmitting}
              />
              <FieldError errors={errors.message ? [{ message: errors.message }] : []} className="text-xs" />
            </FieldContent>
          </Field>

          <Button
            type="submit"
            disabled={!canSubmit}
            className={`h-11 justify-center sm:col-span-2 ${
              isLight
                ? "border border-sky-500 bg-sky-500 text-white hover:bg-sky-600"
                : "border border-emerald-300/60 bg-emerald-300 text-slate-950 hover:bg-emerald-200"
            }`}
          >
            {isSubmitting ? "Sending…" : "Send"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
