"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { measureLeadCreated } from "@/lib/openai-pixel"
import { cn } from "@/lib/utils"

const EMPTY_FORM = {
  name: "",
  email: "",
  mobile: "",
  company: "",
}

function fieldClass(hasError?: boolean) {
  return cn(
    "h-11 rounded-xl border-2 px-4 text-sm text-slate-800 transition-colors",
    hasError
      ? "border-red-400 bg-red-50 focus-visible:border-red-500"
      : "border-slate-200 bg-slate-50 hover:bg-white focus-visible:border-slate-900",
  )
}

export default function DemoForm() {
  const { toast } = useToast()
  const [pending, setPending] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validateMobile = (mobile: string) => /^[+]?[0-9\s\-()]{10,}$/.test(mobile)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})

    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Work email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number"
    }

    if (!formData.company.trim()) newErrors.company = "Company name is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast({ title: "Please fix the errors below", variant: "destructive" })
      return
    }

    setPending(true)
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          company: formData.company.trim(),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to send request")

      measureLeadCreated()
      setShowConfirmation(true)
      setFormData(EMPTY_FORM)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send request"
      toast({ title: "Could not send request", description: message, variant: "destructive" })
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold text-slate-800">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your full name"
            className={fieldClass(Boolean(errors.name))}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-slate-800">
              Work Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@company.com"
              className={fieldClass(Boolean(errors.email))}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-sm font-semibold text-slate-800">
              Mobile / WhatsApp <span className="text-red-500">*</span>
            </Label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              autoComplete="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="+91 90000 00000"
              className={fieldClass(Boolean(errors.mobile))}
              aria-invalid={Boolean(errors.mobile)}
            />
            {errors.mobile ? <p className="text-xs text-red-600">{errors.mobile}</p> : null}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-semibold text-slate-800">
            Company <span className="text-red-500">*</span>
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Your real estate company"
            className={fieldClass(Boolean(errors.company))}
            aria-invalid={Boolean(errors.company)}
          />
          {errors.company ? <p className="text-xs text-red-600">{errors.company}</p> : null}
        </div>

        <Button
          type="submit"
          disabled={pending}
          className="h-12 w-full rounded-xl bg-[#FFB800] text-base font-bold text-black hover:bg-[#E5A600] disabled:opacity-50"
        >
          {pending ? "Sending..." : "Get My Free Demo"}
        </Button>

        <p className="text-center text-xs text-slate-500">
          No commitment. We&apos;ll contact you to schedule the walkthrough.
        </p>
      </form>

      {showConfirmation ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <dialog
            open
            aria-labelledby="demo-confirmation-title"
            className="m-0 w-full max-w-md rounded-2xl border-0 bg-white p-8 text-center shadow-2xl"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <svg
                aria-hidden="true"
                className="h-8 w-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 id="demo-confirmation-title" className="mb-2 text-2xl font-bold text-slate-900">
              Demo request received
            </h3>
            <p className="mb-6 text-slate-600">
              Thanks — our team will contact you within 24 hours to schedule your Layouts360 walkthrough.
            </p>
            <Button
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-slate-900 text-white hover:bg-slate-800"
            >
              Got it
            </Button>
            <p className="mt-4 text-sm text-slate-500">
              For anything urgent, call{" "}
              <a href="tel:+917276495199" className="font-semibold text-slate-900 hover:underline">
                +91 72764 95199
              </a>
            </p>
          </dialog>
        </div>
      ) : null}
    </div>
  )
}
