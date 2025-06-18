import BlogPost from "../components/blogPost/BlogPost";
import FooterLayout from "../layouts/FooterLayout";
import MenubarLayout from "../layouts/MenubarLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import SubscribeLayout from "../layouts/SubscribeLayout";

export default function BlogPostPage() {
  return (
    <div>
      <NavbarLayout />
      <MenubarLayout />
      <BlogPost />
      <SubscribeLayout />
      <FooterLayout />
    </div>
  );
}
