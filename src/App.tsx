const links = {
  zomato: "https://zoma.to/r/21553924",
  swiggy: "https://www.swiggy.com/city/nagpur/kathi-kingdom-pratap-nagar-rest1001000",
  instagram: "https://www.instagram.com/kathikingdom/",
};

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <img src="/logo.png" alt="Kathi Kingdom logo" className="header-logo" />
            <div>
              <div className="brand-name">Kathi Kingdom</div>
              <div className="brand-sub">Nagpur, Maharashtra</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <h1>
                Royal Kathi Rolls,
                <span> Made for Nagpur Cravings</span>
              </h1>

              <p className="hero-copy">
                Kathi Kingdom brings you flavour-packed rolls crafted with rich fillings,
                bold spices, and a royal twist.
              </p>

              <div className="cta-row">
                <a className="btn btn-primary" href={links.zomato}>Order on Zomato</a>
                <a className="btn btn-secondary" href={links.swiggy}>Order on Swiggy</a>
              </div>

              <div className="hero-meta">
                <span>📍 Nagpur</span>
                <span>🌯 Signature Rolls</span>
                <span>⚡ Fast Delivery</span>
              </div>
            </div>

            <div className="hero-logo-wrap">
              <div className="hero-logo-clean">
                <img src="/logo.png" alt="Kathi Kingdom logo" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
