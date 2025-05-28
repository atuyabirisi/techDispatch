const menuLinks = [
  { href: "/about-us", label: "ABOUT" },
  { href: "/latest", label: "LATEST" },
  { href: "/startups", label: "STARTUPS" },
  { href: "/policy", label: "POLICY & GOVERNANCE" },
];

export default function MenuItemsCanvas() {
  return (
    <nav className="p-3" aria-label="Mobile sliding menu">
      {menuLinks.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          className="text-decoration-none link-dark d-block"
        >
          <span className="d-block py-3 fw-semibold">{label}</span>
        </a>
      ))}
    </nav>
  );
}
