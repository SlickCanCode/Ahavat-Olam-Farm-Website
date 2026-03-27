import { useState } from "react";

export default function ContactUsSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const name = form.querySelector(".name").value;
    const company = form.querySelector(".company").value;
    const email = form.querySelector(".email").value;
    const message = form.querySelector(".message").value;

    try {
      const response = await fetch("https://contact-form-production-0497.up.railway.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, company, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent! We'll get back to you soon.");
        form.reset(); // clear form
      } else {
        setStatus(
          data.error ||
            "An error occurred. Please contact us directly via email or WhatsApp."
        );
      }
    } catch (err) {
      setStatus("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-800 text-gray-900 py-30 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-green-600 text-sm tracking-widest uppercase mb-2">
          Get in Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white poppins-bold">
          We'd Love to Hear From You
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Whether you are an investor, partner, or community member, reach out to discuss
          opportunities, collaborations, or any inquiries.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          className="contact bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          {status && (
            <p
              className={`mt-2 ${
                status.toLowerCase().includes("error") ? "text-red-600" : "text-green-600"
              }`}
            >
              {status}
            </p>
          )}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="name flex-1 p-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Company"
              className="company flex-1 p-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="email p-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="message p-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition transform hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6 text-white">
          <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
          <p>
            <span className="font-semibold text-white">Email:</span> ahavatolamglobalfarm@gmail.com
          </p>
          <p>
            <span className="font-semibold text-white">Phone:</span> +234 810 693 6560
          </p>
          <p>
            <span className="font-semibold text-white">Address:</span> Ibadan, Nigeria
          </p>
          <p className="mt-6">
            We're committed to quick responses. Reach out to discuss partnerships, investments,
            or community initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}