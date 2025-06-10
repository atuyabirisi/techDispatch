import axios from "axios";
import { useEffect, useState } from "react";
import type { CloudNativeStory } from "../../interfaces/types";

const API_URL = "http://localhost:5000/api/editorspick";

export default function CloudNativeInfrastructure() {
  const [stories, setStories] = useState<CloudNativeStory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStories = async () => {
    try {
      const response = await axios.get(API_URL);
      setStories(response.data);
    } catch (err: any) {
      console.error("Error fetching stories:", err);
      setError("Failed to fetch stories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="py-2">
      <h4 className="fw-bold m-0 border-top border-bottom py-3">
        Cloud Native & Infrastructure
      </h4>

      {loading && <p>Loading stories...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row my-3">
        {stories.map((story) => (
          <div className="col-md-6 col-lg-3" key={story.articleId._id}>
            <div className="card mb-3 border-0">
              <img
                src={`http://localhost:5000/uploads/${story.articleId.imgfile}`}
                className="card-img-top"
                alt={story.articleId.tittle || "Article image"}
              />
              <div className="card-body px-1">
                <h6>
                  <a href="#" className="link-danger text-decoration-none">
                    {story.articleId.category?.toUpperCase()}
                  </a>
                </h6>
                <h5>
                  <a
                    href={`/posts/${story.articleId._id}`}
                    className="link-dark text-decoration-none"
                  >
                    {story.articleId.tittle}
                  </a>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
