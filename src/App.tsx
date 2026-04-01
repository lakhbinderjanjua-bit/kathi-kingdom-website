const links = {
  zomato: "https://zoma.to/r/21553924",
  swiggy: "https://www.swiggy.com/city/nagpur/kathi-kingdom-pratap-nagar-rest1001000",
  instagram: "https://www.instagram.com/kathikingdom/",
};

const highlights = [
  {
    title: "Royal flavour in every bite",
    text: "Kathi rolls with rich fillings, satisfying texture, and a bold, memorable finish."
  },
  {
    title: "Fast cloud-kitchen delivery",
    text: "Built for quick cravings across Nagpur with easy ordering through the top food apps."
  },
  {
    title: "A kingdom for roll lovers",
    text: "From comforting classics to signature picks, the menu is designed for repeat cravings."
  }
];

const menu = [
  { name: "Paneer Tikka Masala Roll", desc: "Rich paneer filling with a spicy, indulgent finish." },
  { name: "Chilli Potato Roll", desc: "Street-style comfort with a crisp and saucy kick." },
  { name: "Signature Kathi Rolls", desc: "The core of the kingdom — bold, filling, and satisfying." }
];

const stats = [
  { value: "4.3★", label: "Zomato delivery rating" },
  { value: "2,617+", label: "Delivery ratings" },
  { value: "₹100", label: "Average order value" }
];

function CrownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mini-icon">
      <path d="M4 18L3 8L8.5 12L12 5L15.5 12L21 8L20 18H4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M5 21H19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function RoyalLogo({ large = false }: { large?: boolean }) {
  return (
    <div className={large ? "royal-logo royal-logo-large" : "royal-logo"}>
      <img src="/logo.jpeg" alt="Kathi Kingdom logo" className="royal-logo-image" />
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <RoyalLogo />
            <div>
              <div className="brand-name">Kathi Kingdom</div>
              <div className="brand-sub">Nagpur, Maharashtra</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#order">Order</a>
            <a href="#social">Instagram</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <CrownIcon />
                Royal flavour, rolled fresh
              </div>
              <h1>
                Welcome to the
                <span> Kingdom of Rolls</span>
              </h1>
              <p className="hero-copy">
                Kathi Kingdom is a royal-themed cloud kitchen in Nagpur serving flavour-packed Kathi rolls,
                available on Zomato, Swiggy, and Instagram.
              </p>

              <div className="cta-row">
                <a className="btn btn-primary" href={links.zomato} target="_blank" rel="noreferrer">Order on Zomato</a>
                <a className="btn btn-secondary" href={links.swiggy} target="_blank" rel="noreferrer">Order on Swiggy</a>
                <a className="btn btn-light" href={links.instagram} target="_blank" rel="noreferrer">Follow Instagram</a>
              </div>

              <div className="hero-meta">
                <span>📍 Nagpur, Maharashtra</span>
                <span>📦 Delivery-first cloud kitchen</span>
              </div>
            </div>

            <div className="hero-logo-wrap">
              <div className="hero-logo-ring">
                <RoyalLogo large />
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-tag">Why Kathi Kingdom</p>
              <h2>A more royal way to enjoy your favourite Kathi rolls</h2>
              <p>The brand is built around indulgent flavour, premium presentation, and fast online ordering.</p>
            </div>

            <div className="card-grid">
              {highlights.map((item) => (
                <div key={item.title} className="info-card">
                  <div className="icon-badge"><CrownIcon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <p className="section-tag">Menu Highlights</p>
              <h2>Popular picks from the royal table</h2>
              <p>A premium first impression for customers before they head to the delivery apps.</p>
            </div>

            <div className="card-grid">
              {menu.map((item) => (
                <div key={item.name} className="menu-card">
                  <div className="menu-bar" />
                  <p className="menu-tag">Best Seller</p>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <a href={links.zomato} target="_blank" rel="noreferrer">View Online</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="order" className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-tag">Order Online</p>
              <h2>From craving to checkout in a few clicks</h2>
              <p>Send visitors directly to the delivery platform they already trust.</p>
            </div>

            <div className="order-grid">
              <div className="order-card order-card-gold">
                <p className="order-label">Zomato</p>
                <h3>Order directly from your Zomato page</h3>
                <p>Fast, familiar ordering for customers ready to check out now.</p>
                <a className="btn btn-primary" href={links.zomato} target="_blank" rel="noreferrer">Open Zomato</a>
              </div>

              <div className="order-card">
                <p className="order-label">Swiggy</p>
                <h3>Also available on Swiggy</h3>
                <p>Reach more customers across Nagpur through another trusted delivery app.</p>
                <a className="btn btn-secondary" href={links.swiggy} target="_blank" rel="noreferrer">Open Swiggy</a>
              </div>
            </div>
          </div>
        </section>

        <section id="social" className="section social-band">
          <div className="container social-grid">
            <div>
              <p className="section-tag">Instagram</p>
              <h2>Build a royal food brand, one post at a time</h2>
              <p className="social-copy">
                Use <strong>@kathikingdom</strong> to showcase bestsellers, limited-time offers, and the personality behind your brand.
              </p>
              <a className="btn btn-light" href={links.instagram} target="_blank" rel="noreferrer">Visit Instagram</a>
            </div>

            <div className="social-card">
              <div className="social-brand">
                <RoyalLogo />
                <div>
                  <div className="social-handle">@kathikingdom</div>
                  <div className="social-sub">Cloud kitchen • Nagpur</div>
                </div>
              </div>
              <ul>
                <li>Post bestsellers and combo offers with strong visuals.</li>
                <li>Use stories for limited-time offers and delivery updates.</li>
                <li>Keep ordering links visible so social traffic converts faster.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <RoyalLogo />
            <div>
              <div className="brand-name footer-brand">Kathi Kingdom</div>
              <div className="brand-sub footer-sub">Cloud kitchen in Nagpur, Maharashtra</div>
            </div>
          </div>

          <div className="footer-links">
            <a href={links.zomato} target="_blank" rel="noreferrer">Zomato</a>
            <a href={links.swiggy} target="_blank" rel="noreferrer">Swiggy</a>
            <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}