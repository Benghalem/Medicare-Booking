import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Get a technical issue? Want to send feedback about a feature? let us
          know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              className="form__input mt-1"
              id="email"
              type="email"
              placeholder="example@ex.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              className="form__input mt-1"
              id="subject"
              type="text"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div>
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows={6}
              className="form__input mt-1"
              id="message"
              placeholder="leave a comment..."
            />
          </div>
          <button className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
