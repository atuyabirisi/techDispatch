export default function SubscribeForm() {
  return (
    <section className="mb-5 py-5 bg-light rounded">
      <div className="text-center px-3 px-md-5">
        <h3 className="fw-bold text-dark mb-3">Be Part of the our Blog</h3>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "700px" }}>
          Whether you want to contribute technical articles, collaborate with
          other engineers, or stay updated with the latest DevOps and
          cloud-native trends — we would love to have you onboard.
        </p>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
          <button className="btn btn-danger px-4">Write for Us</button>
          <button className="btn btn-outline-dark px-4">Join Community</button>
        </div>

        {/* Newsletter Input */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email to subscribe"
              />
              <button className="btn btn-dark">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
