import { useEffect } from "react";

export default function ContactUs() {
  // Scroll reveal animation (same as About page)
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <section className="mb-5 text-center reveal">
        <h3 className="fw-bold text-dark float-soft">Get in Touch</h3>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          Have questions, suggestions, or ideas? We’d love to hear from you.
          Reach out and join the conversation in the DevOps and cloud-native
          community.
        </p>
      </section>

      {/* Contact Form + Info Section */}
      <section className="mb-5 reveal">
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-7">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5 className="fw-bold mb-4">Send Us a Message</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your full name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Message</label>
                  <textarea
                    className="form-control"
                    rows={6}
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button className="btn btn-danger px-4">Send Message</button>
              </form>
            </div>
          </div>

          {/* Contact Info + Socials */}
          <div className="col-md-5">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <h5 className="fw-bold mb-4">Reach Us</h5>
              <p className="text-dark mb-2">
                <strong>Email:</strong> info@techdispach.tech
              </p>
              <p className="text-dark mb-2">
                <strong>Phone:</strong> +254 798248825
              </p>
              <p className="text-dark mb-2">
                <strong>Location:</strong> Nairobi, Kenya
              </p>

              <h6 className="fw-bold mt-4 mb-3">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-danger fs-4" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-danger fs-4" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-danger fs-4" aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
