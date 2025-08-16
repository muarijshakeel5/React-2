import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop the default redirect
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      setStatus("✅ Your message has been sent successfully!");
    } else {
      setStatus("❌ Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="font-Ovo text-center mb-12">
        <div className="mb-2">Connect with me</div>
        <div className="text-4xl mb-3">Get in touch</div>
        <p className="text-sm font-extralight p-5">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
      </div>

      <div className="max-w-2xl mx-auto py-10 px-4">
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xovlyrll"
          method="POST"
          className="max-w-3xl mx-auto"
        >
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-Ovo">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Second Row */}
          <div className="mt-4">
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center items-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-8 rounded-3xl hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-center text-green-600 font-medium">{status}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
