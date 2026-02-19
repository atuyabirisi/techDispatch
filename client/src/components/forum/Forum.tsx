import { useEffect } from "react";

type Thread = {
  id: number | string;
  title: string;
  author: string;
  replies: number;
  category?: string;
  lastUpdated?: string;
};

export default function ForumLanding() {
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

  const latestThreads: Thread[] = [
    {
      id: 1,
      title: "Best Practices for AWS IaC",
      author: "Alice",
      replies: 12,
    },
    {
      id: 2,
      title: "CI/CD Pipelines with GitHub Actions",
      author: "Bob",
      replies: 8,
    },
    {
      id: 3,
      title: "Kubernetes Secrets Management",
      author: "Charlie",
      replies: 5,
    },
    { id: 4, title: "Terraform State Management", author: "Diana", replies: 6 },
    {
      id: 5,
      title: "Monitoring with Prometheus & Grafana",
      author: "Eve",
      replies: 3,
    },
  ];

  return (
    <section className="mb-5 py-5 reveal">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5 reveal">
          <h3 className="fw-bold text-dark float-soft">
            Community Forum Preview
          </h3>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            A glimpse of the latest discussions happening in our DevOps and
            cloud-native community.
          </p>
        </div>

        {/* Single Forum Card */}
        <div className="bg-light rounded shadow-sm p-4 reveal">
          <h5 className="fw-bold mb-3">Latest Threads</h5>

          <div className="list-group forum-thread-list">
            {latestThreads.map((thread) => (
              <div
                key={thread.id}
                className="list-group-item d-flex justify-content-between align-items-center forum-thread-item"
              >
                <span>{thread.title}</span>
                <span className="badge bg-danger rounded-pill">
                  {thread.replies}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .forum-thread-list {
          max-height: 320px;
          overflow-y: auto;
        }

        .forum-thread-item {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .forum-thread-item:hover {
          transform: translateX(5px);
          background-color: rgba(220, 53, 69, 0.05);
        }

        /* Scrollbar customization (optional) */
        .forum-thread-list::-webkit-scrollbar {
          width: 6px;
        }

        .forum-thread-list::-webkit-scrollbar-thumb {
          background-color: rgba(220, 53, 69, 0.5);
          border-radius: 3px;
        }

        .forum-thread-list::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>
    </section>
  );
}
