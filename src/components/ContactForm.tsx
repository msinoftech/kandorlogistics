"use client";
import { useState } from "react";
import { contactInfo } from "@/lib/config";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const { phone  } = contactInfo;

  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill all required fields.");
      return;
    }

    try {
      setStatus("sending");
      setErrorMessage("");

      // Send email via API (includes lead saving on server side)
      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Check email API response
      if (!emailRes.ok) {
        try {
          const emailErrData = await emailRes.json();
          setStatus("error");
          setErrorMessage(emailErrData.error || `Email API error: ${emailRes.status}`);
        } catch {
          setStatus("error");
          setErrorMessage(`Email API error: ${emailRes.status}`);
        }
      } else {
        const emailData = await emailRes.json();
        if (!emailData.success) {
          setStatus("error");
          setErrorMessage(emailData.error || "Failed to send email.");
        } else {
          setStatus("success");
          setErrorMessage("");
          // Clear form fields after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        }
      }

    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Network error. Please try again.");
    }
  };


  return (
    <>

    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      
      <input id="name" name="name" type="text" required placeholder="Full Name" value={formData.name} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <input id="phone" name="phone" type="tel" inputMode="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"/>
        <input id="email" name="email" type="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"/>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <select id="service" aria-label="Select Service" name="service" required value={formData.service} onChange={handleChange} className="block w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500">
          <option value="">--Select Service--</option>
          <option value="hotshot-dispatch">Hotshot Dispatch</option>
          <option value="flatbeds-step-deck-dispatch">Flatbeds/Step Deck Dispatch</option>
          <option value="power-only-units-dispatch">Power Only Units Dispatch</option>
          <option value="low-boy-dispatch">Low Boy Dispatch</option>
          <option value="box-truck-dispatch">Box Truck Dispatch</option>
          <option value="dry-van-dispatch">Dry Van Dispatch</option>
          <option value="reefer-dispatch">Reefer Dispatch</option>
        </select>
      </div>

      <textarea id="message" name="message" rows={4} required placeholder="How can we help?" value={formData.message} onChange={handleChange} className="block w-full border rounded-xl border-gray-200 bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"/>
      
      <div className="block sm:flex items-center justify-between items-center justify-between gap-3">
        <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-400 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:bg-red-700 transition-transform transform hover:-translate-y-1 cursor-pointer" aria-disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request Quote"}
        </button>
        <div className="text-gray-500">Or <a href={phoneHref} className="underline">book a call</a></div>
      </div>

      {status === "success" && (
        <div className="mt-2 p-3 rounded-md bg-green-50 border border-green-200 text-sm text-green-700">
          ✓ Email sent successfully! We&apos;ll get back to you shortly.
        </div>
      )}
      
      {status === "error" && (
        <div className="mt-2 p-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
          ✗ {errorMessage || "Oops — something went wrong. Please try again or contact us directly."}
        </div>
      )}
    </form>
    </>
  );
};

export default ContactForm;