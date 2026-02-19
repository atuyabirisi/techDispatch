const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/forum", label: "Forum" },
  { href: "/contact", label: "Contact" },
];

export default function MenuItems() {
  return (
    <nav
      className="d-none d-md-flex justify-content-center border-bottom py-4"
      aria-label="primary menu bar"
    >
      <div className="p-2 d-flex gap-5">
        {menuLinks.map(({ href, label }, index) => (
          <div className="linkbox" key={index}>
            <a
              key={index}
              href={href}
              className="link-dark text-decoration-none"
            >
              <h4 className="m-0">{label}</h4>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
