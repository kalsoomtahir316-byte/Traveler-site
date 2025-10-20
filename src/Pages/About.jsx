import "../styles/about.css";

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about-container">

        <section className="section hero">
          <div>
            <h1>About Traveler</h1>
            <p>
              We design small-group adventures and custom trips with trusted local guides.
              From city breaks to remote treks, our focus is comfort, safety, and authentic experiences.
            </p>
          </div>
          <div className="hero-media" aria-hidden="true">
            <img src="/images/about-hero.jpg" alt="Scenic destination" />
          </div>
        </section>

        <section className="section stats">
          <div className="stat">
            <div className="num">10k+</div>
            <div className="label">Happy Travelers</div>
          </div>
          <div className="stat">
            <div className="num">65+</div>
            <div className="label">Destinations</div>
          </div>
          <div className="stat">
            <div className="num">4.9★</div>
            <div className="label">Average Rating</div>
          </div>
          <div className="stat">
            <div className="num">8 yrs</div>
            <div className="label">Experience</div>
          </div>
        </section>

        <section className="section values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value">
              <h3>Local Expertise</h3>
              <p>We partner with licensed local guides and boutique stays to keep trips authentic.</p>
            </div>
            <div className="value">
              <h3>Fair & Safe</h3>
              <p>Transparent pricing, small groups, and safety-first logistics on every itinerary.</p>
            </div>
            <div className="value">
              <h3>Sustainable Travel</h3>
              <p>Low-impact routes, community support, and leave-no-trace principles.</p>
            </div>
          </div>
        </section>

        <section className="section team">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <article className="member">
              <img src="/images/team1.jpg" alt="Guide" />
              <div className="meta">
                <div className="name">Ava Khan</div>
                <div className="role">Lead Guide</div>
              </div>
            </article>
            <article className="member">
              <img src="/images/team2.jpg" alt="Planner" />
              <div className="meta">
                <div className="name">Liam Chen</div>
                <div className="role">Trip Planner</div>
              </div>
            </article>
            <article className="member">
              <img src="/images/team3.jpg" alt="Support" />
              <div className="meta">
                <div className="name">Sara Ahmed</div>
                <div className="role">Customer Success</div>
              </div>
            </article>
            <article className="member">
              <img src="/images/team4.jpg" alt="Operations" />
              <div className="meta">
                <div className="name">Noah Patel</div>
                <div className="role">Operations</div>
              </div>
            </article>
          </div>
        </section>

      </div>
    </div>
  );
}