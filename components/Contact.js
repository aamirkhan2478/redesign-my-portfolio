import React from "react";

const Contact = () => {
  return (
    <section id="contact" class="contact-section">
      <h3 class="contact-heading">
        I&apos;m always interested in hearing about new projects, so if
        you&apos;d like to chat please get in touch.
      </h3>
      <form class="form-control">
        <input
          placeholder="Full Name"
          class="text-field"
          type="text"
          name="name"
          id="fullName"
          maxlength="30"
          required
        />
        <input
          placeholder="Email Address"
          class="text-field"
          type="email"
          name="email"
          id="email"
          required
        />
        <textarea
          class="message-field"
          placeholder="Enter text here"
          name="message"
          id="message"
          maxlength="500"
          required
        ></textarea>
        <div className="gap-3">
          <button type="submit" class="btn-primary" id="submit">
            Get In Touch
          </button>
          <button class="btn-primary" id="reset">
            Reset
          </button>
        </div>
        <div class="alert" id="alert-danger"></div>
      </form>
    </section>
  );
};

export default Contact;
