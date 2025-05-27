export default function NavbarSearch() {
  return (
    <div className="p-2" role="search" aria-label="Site search">
      <form>
        <input
          id="navbar-search"
          type="search"
          className="form-control"
          placeholder="search here..."
        />
      </form>
    </div>
  );
}
