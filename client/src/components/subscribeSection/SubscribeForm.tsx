import { useState, type FormEvent } from "react";
import axios from "axios";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");

      await axios.post("http://localhost:5000/api/subscribe", { email });

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="container my-5">
      <div className="card rounded shadow-sm border-0">
        <div className="row g-0">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center p-4">
            <h4 className="card-title mb-3 text-center fw-bold">
              Subscribe to Our Newsletter
            </h4>
            <p className="card-text text-muted text-center">
              Subscribe to receive the latest updates, news, and exclusive
              offers directly in your inbox.
            </p>
          </div>

          <div className="col-md-6 p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {status === "success" && (
                <div className="alert alert-success mt-3">
                  Subscribed successfully!
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-danger mt-3">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
