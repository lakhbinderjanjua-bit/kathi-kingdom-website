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

  <section className="section">
    <div className="container">
      <div className="section-head">
        <h2>Why Kathi Kingdom?</h2>
        <p>
          We’re not just another cloud kitchen — we’re a destination for roll lovers.
        </p>
      </div>

      <div className="card-grid">
        <div className="info-card">
          <h3>Rich & Bold Flavours</h3>
          <p>Every roll is packed with perfectly balanced spices and fillings.</p>
        </div>

        <div className="info-card">
          <h3>Perfect Anytime Meal</h3>
          <p>Lunch, snack, or late-night craving — we’ve got you covered.</p>
        </div>

        <div className="info-card">
          <h3>Made for Delivery</h3>
          <p>Prepared fresh and delivered hot across Nagpur.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="container">
      <div className="section-head">
        <h2>Our Bestselling Rolls</h2>
        <p>Customer favourites that keep Nagpur coming back.</p>
      </div>

      <div className="card-grid">
        <div className="menu-card">
          <h3>Paneer Tikka Roll</h3>
          <p>Soft paneer with rich spices in a warm roll.</p>
        </div>

        <div className="menu-card">
          <h3>Chilli Potato Roll</h3>
          <p>Crispy potatoes with spicy street-style flavour.</p>
        </div>

        <div className="menu-card">
          <h3>Signature Rolls</h3>
          <p>Our special creations — bold and satisfying.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="section-head">
        <h2>Order Now</h2>
        <p>Get your favourite rolls delivered in minutes.</p>
      </div>

      <div className="order-grid">
        <div className="order-card">
          <h3>Zomato</h3>
          <p>Fast and trusted ordering.</p>
          <a className="btn btn-primary" href={links.zomato}>Order Now</a>
        </div>

        <div className="order-card">
          <h3>Swiggy</h3>
          <p>Another easy way to order.</p>
          <a className="btn btn-secondary" href={links.swiggy}>Order Now</a>
        </div>
      </div>
    </div>
  </section>
</main>
      </main>
    </div>
  );
}
