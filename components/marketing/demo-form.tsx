"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function DemoForm() {
  const { toast } = useToast()
  const [pending, setPending] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      email: String(formData.get("email") || "").trim(),
      mobile: String(formData.get("mobile") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      description: String(formData.get("description") || "").trim(),
    }

    if (!payload.email || !payload.mobile || !payload.company) {
      toast({ title: "Please fill all required fields.", variant: "destructive" })
      return
    }

    setPending(true)
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to send request")
      toast({ title: "Request sent!", description: "We’ll contact you shortly." })
      form.reset()
    } catch (err: any) {
      toast({ title: "Could not send request", description: err.message, variant: "destructive" })
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border bg-card p-5">
      <div className="grid gap-2">
        <Label htmlFor="email">Work email</Label>
        <Input id="email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="mobile">Mobile</Label>
        <Input id="mobile" name="mobile" type="tel" placeholder="+91 90000 00000" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Company name</Label>
        <Input id="company" name="company" type="text" placeholder="Company Pvt Ltd" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" placeholder="Tell us about your projects or needs..." />
      </div>
      <div className="flex items-center justify-end">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending..." : "Send Request"}
        </Button>
      </div>
    </form>
  )
}
