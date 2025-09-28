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
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    company: "",
    description: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateMobile = (mobile: string) => {
    const mobileRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
    return mobileRegex.test(mobile)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    // Reset errors
    setErrors({})
    
    // Validate required fields
    const newErrors: Record<string, string> = {}
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number"
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }
    
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
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          company: formData.company.trim(),
          description: formData.description.trim(),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to send request")
      toast({ title: "Request sent!", description: "We'll contact you shortly." })
      setFormData({ email: "", mobile: "", company: "", description: "" })
    } catch (err: any) {
      toast({ title: "Could not send request", description: err.message, variant: "destructive" })
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="w-full max-w-lg">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Compact Header */}
        <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Get Your Free Demo</h3>
          <p className="text-white/90 text-sm">Transform your real estate business</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Email and Mobile Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com" 
                  className={`h-11 px-4 text-sm border-2 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-400 bg-red-50 focus:border-red-500' 
                      : 'border-gray-200 bg-gray-50 focus:border-primary hover:bg-white'
                  }`}
                  style={{ color: '#1f2937' }}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Mobile <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="mobile" 
                  name="mobile" 
                  type="tel" 
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="+91 90000 00000" 
                  className={`h-11 px-4 text-sm border-2 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                    errors.mobile 
                      ? 'border-red-400 bg-red-50 focus:border-red-500' 
                      : 'border-gray-200 bg-gray-50 focus:border-primary hover:bg-white'
                  }`}
                  style={{ color: '#1f2937' }}
                />
                {errors.mobile && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.mobile}
                  </div>
                )}
              </div>
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                Company <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="company" 
                name="company" 
                type="text" 
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your Company Pvt Ltd" 
                className={`h-11 px-4 text-sm border-2 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                  errors.company 
                    ? 'border-red-400 bg-red-50 focus:border-red-500' 
                    : 'border-gray-200 bg-gray-50 focus:border-primary hover:bg-white'
                }`}
                style={{ color: '#1f2937' }}
              />
              {errors.company && (
                <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.company}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Project Details
              </Label>
              <Textarea 
                id="description" 
                name="description" 
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us about your projects..."
                rows={3}
                className="px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                style={{ color: '#1f2937' }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={pending}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {pending ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Schedule Demo</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="text-center pt-4">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-medium">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free consultation</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
