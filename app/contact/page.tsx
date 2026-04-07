"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess("Pesan berhasil dikirim!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess("Gagal mengirim pesan.");
    }

    setLoading(false);
  };

  return (
    <section className="scroll-mt-20" id="contact">

    <div className="max-w-md mx-auto mt-15 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Get In Touch
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Nama */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Pesan */}
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
        >
          {loading ? "Mengirim..." : "Kirim Pesan"}
        </button>

        {/* Status */}
        {success && (
          <p className="text-center text-sm mt-2 text-green-600">
            {success}
          </p>
        )}
      </form>
    </div>
    </section>

  );
}