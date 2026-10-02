import React, { useState } from "react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkovkkkg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully! ✅");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          name="Message"
          required
        ></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>
      </form>

      <div className="copyright">
        &copy; 2026 Siva Mani All Rights Are Reserved.
      </div>
    </div>
  );
}

export default Contact;