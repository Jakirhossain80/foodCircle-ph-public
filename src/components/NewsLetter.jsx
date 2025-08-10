// src/components/NewsLetter.jsx
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import { FaEnvelopeOpenText, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      Swal.fire({
        icon: "error",
        title: "Please add your email",
        confirmButtonColor: "#16a34a", // Tailwind green-600
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "You have been subscribed to our newsletter.",
      confirmButtonColor: "#16a34a",
    }).then(() => {
      // Clear/reset the form fields
      setEmail("");
      if (formRef.current) formRef.current.reset();
    });
  };

  return (
    <section
      className="w-full bg-gray-50 dark:bg-gray-900 transition-all duration-500"
      aria-labelledby="newsletter-heading"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-lime-400 text-gray-900 transition-all duration-500">
            Join the Circle
          </span>
          <h2
            id="newsletter-heading"
            className="mt-3 text-2xl md:text-3xl font-semibold font-poppins text-gray-800 dark:text-gray-100 transition-all duration-500"
          >
            Subscribe to our Newsletter
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 font-inter transition-all duration-500">
            Get monthly updates on shared meals, community impact, and tips for safe, sustainable food sharing.
          </p>
        </div>

        {/* Form */}
        <div className="mt-8 max-w-2xl mx-auto">
          <form
            ref={formRef}
            className="grid gap-4 sm:grid-cols-[1fr_auto]"
            onSubmit={handleSubmit}
            aria-label="Newsletter subscription form"
          >
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                <FaEnvelopeOpenText className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden />
              </span>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 transition-all duration-500"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-500 cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <FaCheckCircle className="mt-0.5 text-amber-500 transition-all duration-500" aria-hidden />
              <p className="text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
                Monthly highlights of surplus sharing and local impact stories.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <FaCheckCircle className="mt-0.5 text-amber-500 transition-all duration-500" aria-hidden />
              <p className="text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
                Tips for safe packaging, labeling, and eco-friendly pickups.
              </p>
            </div>
          </div>

          {/* Privacy note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400 transition-all duration-500">
            <FaShieldAlt className="text-green-600 dark:text-green-500 transition-all duration-500" aria-hidden />
            <span>
              We respect your privacy — unsubscribe anytime. No spam, only helpful updates.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
