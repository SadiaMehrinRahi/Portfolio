import { site } from "./data";
import ScrollReveal from "./components/ScrollReveal";
import Avatar from "./components/Avatar";
import NeuralBackground from "./components/NeuralBackground";
import Typing from "./components/Typing";
import ThesisShowcase from "./components/ThesisShowcase";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";
import MobileNav from "./components/MobileNav";
import { iconFor, MailIcon, PhoneIcon, LocationIcon } from "./components/Icons";

const GMAIL = (email: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

export default function Home() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((s) => s.href && s.href.trim() !== "");

  return (
    <>
      <NeuralBackground />
      <ScrollReveal />

      {/* ===== TOP NAV ===== */}
      <nav className="topnav">
        <div className="nav-inner">
          <span className="nav-brand">
            {site.initials}
            <span className="dot">.</span>
          </span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#thesis">Thesis</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#research">Research</a>
          </div>
          <a href="#contact" className="nav-cta">Contact</a>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header id="top">
        <div className="wrap hero">
          <Avatar photo={site.photo} initials={initials(site.name)} />
          <div className="hero-eyebrow">
            <span className="ping" />
            {site.role} · {site.location}
          </div>
          <h1>
            <span className="grad">{site.name}</span>
          </h1>
          <Typing phrases={site.typingPhrases} />
          <p>{site.heroLong}</p>
          <div className="cta-row">
            <a href="#thesis" className="btn btn-primary">View my thesis</a>
            <a href="#contact" className="btn btn-ghost">Say hello</a>
          </div>
          <div className="hero-social">
            {socials.map((s) => (
              <a className="icon-btn" href={s.href} key={s.label} target="_blank" rel="noreferrer" aria-label={s.label}>
                {iconFor(s.label)}
              </a>
            ))}
            <a className="icon-btn" href={GMAIL(site.email)} target="_blank" rel="noreferrer" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section className="block" id="about">
        <div className="wrap">
          <div className="block-head reveal">
            <span className="num mono">01</span>
            <h3>About Me</h3>
          </div>
          <div className="about-text reveal">
            {site.about.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div className="now-line">
              <span className="dot" /> {site.now}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="block" id="education">
        <div className="wrap">
          <div className="block-head reveal">
            <span className="num mono">02</span>
            <h3>Education</h3>
          </div>
          <div className="timeline reveal">
            {site.education.map((e, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-dot" />
                <div className="tl-body">
                  <div className="tl-top">
                    <span className="tl-title">{e.school}</span>
                    <span className="tl-period mono">{e.period}</span>
                  </div>
                  <div className="tl-sub">{e.degree}</div>
                  <div className="tl-detail">{e.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THESIS (highlighted) ===== */}
      <section className="block" id="thesis">
        <div className="wrap">
          <div className="block-head reveal">
            <span className="num mono">03</span>
            <h3>Featured: My Thesis, Live</h3>
            <p className="sub">A deployed real-time intrusion-detection system you can explore right here.</p>
          </div>
          <div className="reveal">
            <ThesisShowcase
              url={site.thesisDemoUrl}
              badges={["99.94% accuracy", "96.60% zero-day", "SHAP explainability", "Real-time"]}
            />
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="block" id="skills">
        <div className="wrap">
          <div className="block-head reveal">
            <span className="num mono">04</span>
            <h3>Skills &amp; Tools</h3>
          </div>
          <div className="skill-block reveal">
            <h4>AI / ML &amp; Data Science</h4>
            <div className="chips">
              {site.engineering.map((s) => (<span className="chip" key={s}>{s}</span>))}
            </div>
            <h4>Web Development</h4>
            <div className="chips">
              {site.webdev.map((s) => (<span className="chip" key={s}>{s}</span>))}
            </div>
            <h4>Design &amp; Tools</h4>
            <div className="chips">
              {site.design.map((s) => (<span className="chip" key={s}>{s}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section className="block" id="work">
        <div className="wrap">
          <div className="block-head reveal">
            <span className="num mono">05</span>
            <h3>Things I&apos;ve Built</h3>
          </div>
          <div className="proj-grid">
            {site.projects.map((p, i) => (
              <a className="proj reveal" href={p.link} key={p.name} target="_blank" rel="noreferrer">
                <div className="proj-top">
                  <span className="proj-label mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="proj-metric">{p.metric}</span>
                </div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <div className="tags mono">
                  {p.tags.split("·").map((t) => (<span key={t}>{t.trim()}</span>))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="block" id="experience">
        <div className="wrap">
          <div className="block-head reveal">
            <span className="num mono">06</span>
            <h3>Experience &amp; Leadership</h3>
          </div>
          <div className="timeline reveal">
            {site.experience.map((e, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-dot" />
                <div className="tl-body">
                  <div className="tl-top">
                    <span className="tl-title">{e.role}</span>
                    <span className="tl-period mono">{e.period}</span>
                  </div>
                  <div className="tl-sub">{e.org}</div>
                  <div className="tl-detail">{e.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESEARCH ===== */}
      <section className="block" id="research">
        <div className="wrap">
          <div className="block-head reveal">
            <span className="num mono">07</span>
            <h3>Research</h3>
          </div>
          <div className="pub-list reveal">
            {site.publications.map((p) => {
              const accepted = /accepted/i.test(p.venue);
              const hasLink = p.link && p.link.trim() !== "";
              return (
                <div className="pub" key={p.title}>
                  <span className="yr mono">{p.year}</span>
                  <div className="pub-main">
                    <h4>{p.title}</h4>
                    <div className="venue">
                      {accepted ? (
                        <>
                          {p.venue.replace(/·\s*Accepted/i, "· ")}
                          <span className="tag-accepted">Accepted</span>
                        </>
                      ) : (
                        p.venue
                      )}
                    </div>
                  </div>
                  {hasLink && (
                    <a className="pub-link" href={p.link} target="_blank" rel="noreferrer" aria-label="Open publication">
                      ↗
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="block contact" id="contact">
        <div className="wrap">
          <div className="contact-head reveal">
            <div className="small mono">08 · WHAT&apos;S NEXT</div>
            <h3>Get In Touch</h3>
            <p>
              Open to research collaborations, MSc/PhD opportunities and roles in AI/ML.
              Send a message and I&apos;ll get back to you.
            </p>
          </div>

          <div className="contact-card reveal">
            <aside className="contact-aside">
              <span className="aside-badge">
                <span className="pulse" /> Available for opportunities
              </span>
              <h4>Let&apos;s talk.</h4>
              <p className="aside-sub">
                Whether it&apos;s a research idea, a role or just a hello — my inbox is open.
              </p>
              <div className="aside-divider" />
              <span className="aside-item">
                <MailIcon /> <a href={GMAIL(site.email)} target="_blank" rel="noreferrer">{site.email}</a>
              </span>
              <span className="aside-item">
                <PhoneIcon /> <a href={`tel:${site.phone}`}>{site.phone}</a>
              </span>
              <span className="aside-item">
                <LocationIcon /> {site.location}
              </span>
              <div className="aside-socials">
                {socials.map((s) => (
                  <a href={s.href} key={s.label} target="_blank" rel="noreferrer" aria-label={s.label}>
                    {iconFor(s.label)}
                  </a>
                ))}
              </div>
            </aside>

            <div className="contact-form-side">
              <ContactForm email={site.email} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-cta reveal">
          <span className="footer-cta-label mono">— let&apos;s build something —</span>
          <a href="#contact" className="footer-cta-link">
            Start a conversation <span className="arr">→</span>
          </a>
          <div className="footer-cta-email">
            or email me at <a href={GMAIL(site.email)} target="_blank" rel="noreferrer">{site.email}</a>
          </div>
        </div>
        <div className="footer-simple">
          <div className="footer-social">
            {socials.map((s) => (
              <a className="icon-btn" href={s.href} key={s.label} target="_blank" rel="noreferrer" aria-label={s.label}>
                {iconFor(s.label)}
              </a>
            ))}
          </div>
          <div className="footer-credit">
            Designed &amp; built by {site.name}
          </div>
          <div className="footer-copy">© {year} · All rights reserved</div>
          <a href="#top" className="footer-top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}
