import { useEffect } from "react";

export default function About() {
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
      <section className="mb-5 reveal">
        <h4 className="text-dark mb-3">Our Mission</h4>
        <p className="text-dark">
          Our blog was built with one goal in mind — to help developers,
          engineers, and enthusiasts excel in the cloud-first world. We share
          deep dives into DevOps practices, Kubernetes, CI/CD automation,
          Infrastructure as Code (IaC), and cloud-native technologies focusing
          on AWS.
        </p>
        <p className="text-dark">
          Whether you're just starting your journey or are a seasoned
          professional, our goal is to empower you with real-world insights and
          hands-on examples.
        </p>
      </section>

      {/* community values section*/}
      <section className="mb-5 py-5 bg-light rounded">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h3 className="fw-bold text-dark">Our Community Values</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Our community is built on shared principles that guide how we
              learn, collaborate, and build in the cloud-first world.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 delay-1">
              <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-danger h-100">
                <h6 className="fw-bold text-dark mb-2">
                  Collaboration Over Silos
                </h6>
                <p className="text-muted mb-0">
                  Knowledge grows when shared. We encourage open discussions,
                  community-driven learning, and collective problem-solving.
                </p>
              </div>
            </div>

            <div className="col-md-6 delay-2">
              <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-danger h-100">
                <h6 className="fw-bold text-dark mb-2">
                  Automation Over Repetition
                </h6>
                <p className="text-muted mb-0">
                  We promote efficiency through Infrastructure as Code, CI/CD
                  pipelines, and modern automation practices.
                </p>
              </div>
            </div>

            <div className="col-md-6 delay-3">
              <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-danger h-100">
                <h6 className="fw-bold text-dark mb-2">Learning Over Ego</h6>
                <p className="text-muted mb-0">
                  From beginners to experts, curiosity and continuous
                  improvement matter more than titles.
                </p>
              </div>
            </div>

            <div className="col-md-6 delay-4">
              <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-danger h-100">
                <h6 className="fw-bold text-dark mb-2">Security by Design</h6>
                <p className="text-muted mb-0">
                  Cloud systems must prioritize security from day one — never as
                  an afterthought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we focus on section */}
      <section className="mb-5 py-5">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h3 className="fw-bold text-dark">What We Focus On</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              We explore the technologies, practices, and mindset shaping modern
              cloud-native engineering.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4 delay-1">
              <div className="p-4 h-100 bg-white rounded shadow-sm focus-block">
                <h5 className="fw-bold text-dark mb-3">DevOps Culture</h5>
                <p className="text-muted">
                  Bridging development and operations through automation,
                  collaboration, and scalable engineering practices.
                </p>
                <button className="btn btn-outline-danger btn-sm mt-2">
                  Explore Topics →
                </button>
              </div>
            </div>

            <div className="col-md-4 delay-2">
              <div className="p-4 h-100 bg-white rounded shadow-sm focus-block">
                <h5 className="fw-bold text-dark mb-3">Cloud Computing</h5>
                <p className="text-muted">
                  Architecture patterns, deployment strategies, and real-world
                  implementations across AWS, Azure, and GCP.
                </p>
                <button className="btn btn-outline-danger btn-sm mt-2">
                  Explore Topics →
                </button>
              </div>
            </div>

            <div className="col-md-4 delay-3">
              <div className="p-4 h-100 bg-white rounded shadow-sm focus-block">
                <h5 className="fw-bold text-dark mb-3">Automation & CI/CD</h5>
                <p className="text-muted">
                  Deep dives into GitHub Actions, Jenkins, ArgoCD, and workflows
                  that streamline modern software delivery.
                </p>
                <button className="btn btn-outline-danger btn-sm mt-2">
                  Explore Topics →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
