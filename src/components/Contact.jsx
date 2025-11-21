import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();  //not to reload page after send

    emailjs
      .sendForm(
        "service_hz7wxer",  //emailJS service Id
        "template_tvudnp2",  //emailJS template Id
        form.current,
        "RmIGwJQdGoYVAAc_J"  //emailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-[#21a7eb] mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          Interested in working together or have a question? I’d be happy to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#043a53] p-6 rounded-lg shadow-lg border border-gray-600">
        <h3 className="text-2xl font-semibold text-white text-center">
          Reach Out to Me
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#043a53] text-white border border-gray-500 focus:outline-none focus:border-[#21a7eb]"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#043a53] text-white border border-gray-500 focus:outline-none focus:border-[#21a7eb]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#043a53] text-white border border-gray-500 focus:outline-none focus:border-[#21a7eb]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#043a53] text-white border border-gray-500 focus:outline-none focus:border-[#21a7eb]"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSent}
            className="w-full p-2 bg-linear-to-r from-[#21a7eb] to-[#21a7eb] shadow-[0_0_20px_1px_rgba(33,167,235,0.4)] text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            {isSent ? "Sent" : "Send"}
          </button>
        </form>
      </div>
    </section>
  )
}
