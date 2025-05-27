const menuLinks = [
  { href: "/about-us", label: "ABOUT" },
  { href: "/latest", label: "LATEST" },
  { href: "/startups", label: "STARTUPS" },
  { href: "/governance", label: "POLICY & GOVERNANCE" },
];

export default function MenuItems() {
  return (
    <nav
      className="d-none d-md-flex justify-content-center border-bottom py-4"
      aria-label="primary menu bar"
    >
      <div className="p-2 d-flex gap-5">
        {menuLinks.map(({ href, label }, index) => (
          <a
            key={index}
            href={href}
            className="link-dark border-bottom border-light text-decoration-none"
          >
            <h5 className="m-0">{label}</h5>
          </a>
        ))}
      </div>
    </nav>
  );
}
