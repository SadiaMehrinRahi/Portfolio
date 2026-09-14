import { site } from "./data";
import ScrollReveal from "./components/ScrollReveal";
import ScrollProgress from "./components/ScrollProgress";
import ThesisShowcase from "./components/ThesisShowcase";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";
import MobileNav from "./components/MobileNav";
import { iconFor, MailIcon, PhoneIcon, LocationIcon } from "./components/Icons";

const GMAIL = (email: string) => `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

export default function Home() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((s) => s.href && s.href.trim() !== "");
  const initials = site.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <>
      <ScrollReveal />
      <ScrollProgress />

      {/* ---- spine label / nav ---- */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="mark">
            <span className="mark-name">{site.name}</span>
          </div>
          <nav className="topnav-links">
            <a className="hide-sm" href="#about">About</a>
            <a className="hide-sm" href="#thesis">Thesis</a>
            <a className="hide-sm" href="#work">Work</a>
            <a className="hide-sm" href="#research">Research</a>
            <a className="hide-sm" href="#writing">Writing</a>
            <a className="hide-sm" href="#log">More</a>
            <a className="go" href="#contact">Contact</a>
            <ThemeToggle />
            <MobileNav />
          </nav>
        </div>
      </header>

      {/* ---- COVER ---- */}
      <section className="cover" id="top">
        <div className="wrap cover-inner">
          <div>
            <span className="cover-stamp"><span className="live" /> Available for opportunities · {site.location}</span>
            <h1>{site.name}</h1>
            <p className="lede">{site.role} building full-stack applications and deep learning models for cybersecurity and healthcare.</p>
            <div className="doing"><b>Now —</b> {site.now}</div>
            <div className="cover-actions">
              <a className="btn btn-solid" href="#thesis">Read the thesis</a>
              {site.cvUrl && site.cvUrl !== "" && (
                <a className="btn btn-line" href={site.cvUrl} target="_blank" rel="noreferrer">Download CV</a>
              )}
              <a className="btn btn-line" href="#contact">Get in touch</a>
            </div>
            <div className="cover-social">
              {socials.map((s) => (
                <a href={s.href} key={s.label} target="_blank" rel="noreferrer" aria-label={s.label}>{iconFor(s.label)}</a>
              ))}
              <a href={GMAIL(site.email)} target="_blank" rel="noreferrer" aria-label="Email"><MailIcon /></a>
            </div>
          </div>
          <div className="cover-photo-wrap">
            <figure className="cover-photo">
              <PhotoOrInitials photo={site.photo} initials={initials} />
              <figcaption className="caption">{site.role}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---- ABOUT ---- */}
      <section className="entry" id="about">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">About</span>
            <h2>Who I am</h2>
          </div>
          <div className="note reveal">
            {site.about.map((p, i) => (<p key={i} dangerouslySetInnerHTML={{ __html: p }} />))}
          </div>
          <div className="interests reveal">
            <span className="interests-label">Research interests</span>
            <div className="interests-tags">
              {site.interests.map((it) => (<span key={it}>{it}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- EDUCATION ---- */}
      <section className="entry" id="education">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Education</span>
            <h2>Where I studied</h2>
          </div>
          <div className="log reveal">
            {site.education.map((e, i) => (
              <div className="log-row" key={i}>
                <div className="log-when">{e.period}</div>
                <div className="log-what">
                  <h4>{e.school}</h4>
                  <div className="where">{e.degree}</div>
                  <p>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- EXPERIENCE ---- */}
      <section className="entry" id="experience">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Record</span>
            <h2>Experience</h2>
          </div>
          <div className="log reveal">
            {site.experience.map((e, i) => (
              <div className="log-row" key={i}>
                <div className="log-when">{e.period}</div>
                <div className="log-what">
                  <h4>{e.role}</h4>
                  <div className="where">{e.org}</div>
                  <p>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- THESIS (specimen) ---- */}
      <section className="entry" id="thesis">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Featured</span>
            <h2>The thesis, running live</h2>
            <span className="aside">deployed, not just described</span>
          </div>
          <div className="reveal">
            <ThesisShowcase
              url={site.thesisDemoUrl}
              badges={["99.94% accuracy", "96.60% zero-day", "SHAP explainability", "Real-time"]}
            />
          </div>
        </div>
      </section>

      {/* ---- WORK ---- */}
      <section className="entry" id="work">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Work</span>
            <h2>Things I&apos;ve built</h2>
          </div>
          <div className="log reveal">
            {site.projects.map((p) => (
              <div className="log-row" key={p.name}>
                <div className="log-when">{p.metric}</div>
                <div className="log-what">
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.tags.split("·").map((t) => (<span key={t}>{t.trim()}</span>))}
                  </div>
                  <div className="log-links">
                    {p.link && p.link !== "#" && (
                      <a className="repo" href={p.link} target="_blank" rel="noreferrer">live demo →</a>
                    )}
                    {p.github && p.github !== "" && (
                      <a className="repo gh" href={p.github} target="_blank" rel="noreferrer"><GitHubMini /> code</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SKILLS ---- */}
      <section className="entry" id="skills">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Toolkit</span>
            <h2>What I work with</h2>
          </div>
          <div className="kits reveal">
            {site.skillGroups.map((g) => (
              <div key={g.title}>
                <div className="kit-name"><span className="dot" />{g.title}</div>
                <div className="kit-tags">
                  {g.items.map((s) => (<span key={s}>{s}</span>))}
                </div>
                {g.relatedLink && g.relatedLink !== "#" && (
                  <a className="kit-related" href={g.relatedLink} target="_blank" rel="noreferrer">see it in {g.relatedLabel} →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- RESEARCH ---- */}
      <section className="entry" id="research">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Research</span>
            <h2>Publications</h2>
          </div>
          <div className="refs reveal">
            <div className="ref-summary">
              {site.pubStats.map((s) => (
                <div className="r" key={s.label}><b>{s.num}</b><span>{s.label}</span></div>
              ))}
            </div>
            {site.publications.map((p) => {
              const accepted = /accepted/i.test(p.venue);
              const published = /published/i.test(p.venue);
              const inprogress = /in progress|ongoing/i.test(p.venue);
              const hasLink = p.link && p.link.trim() !== "";
              return (
                <div className="ref" key={p.title}>
                  <span className="ref-year">{p.year}</span>
                  <div className="ref-body">
                    <h4>{p.title}</h4>
                    <div className="where">
                     {accepted ? (<>{p.venue.replace(/·\s*Accepted/i, "")} <span className="yes">Accepted</span></>)
                      : published ? (<>{p.venue.replace(/·\s*Published/i, "")} <span className="yes">Published</span></>)
                      : inprogress ? (<>{p.venue.replace(/·\s*(In progress|Ongoing)/i, "")} <span className="yes">In progress</span></>)
                      : p.venue}
                    </div>
                  </div>
                  {hasLink ? (
                    <a className="ref-open" href={p.link} target="_blank" rel="noreferrer">read →</a>
                  ) : <span className="ref-open" style={{ opacity: 0 }}>·</span>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- WRITING / BLOG ---- */}
      <section className="entry" id="writing">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Writing</span>
            <h2>Notes &amp; articles</h2>
          </div>
          <div className="log reveal">
            {site.blog.map((b, i) => (
              <div className="log-row" key={i}>
                <div className="log-when">{b.year}</div>
                <div className="log-what">
                  <h4>{b.title}</h4>
                  <div className="where">{b.outlet}</div>
                  {b.url && b.url !== "" && (
                    <a className="repo" href={b.url} target="_blank" rel="noreferrer">read the piece →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CERTIFICATIONS (own section) ---- */}
      <section className="entry" id="certifications">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Credentials</span>
            <h2>Certifications &amp; awards</h2>
          </div>
          <div className="log reveal">
            {site.certifications.map((c, i) => (
              <div className="log-row" key={i}>
                <div className="log-when">{c.year}</div>
                <div className="log-what">
                  <h4>{c.title}</h4>
                  <div className="where">{c.issuer}</div>
                  {c.certUrl && c.certUrl !== "" && (
                    <a className="cert-btn" href={c.certUrl} target="_blank" rel="noreferrer">View certificate →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- LEADERSHIP + EXTRACURRICULAR (parallel) ---- */}
      <section className="entry" id="log">
        <div className="wrap">
          <div className="entry-head reveal">
            <span className="entry-tab">Beyond the desk</span>
            <h2>Leadership &amp; activities</h2>
          </div>
          <div className="folio reveal">
            <div>
              <h3>Leadership</h3>
              {site.leadership.map((v, i) => (
                <div className="folio-item" key={i}>
                  <div className="t">{v.role}</div>
                  <div className="m">{v.org} · {v.year}</div>
                  {v.certUrl && v.certUrl !== "" && (
                    <a className="cert-btn sm" href={v.certUrl} target="_blank" rel="noreferrer">Certificate →</a>
                  )}
                </div>
              ))}
            </div>
            <div>
              <h3>Volunteering &amp; Activities</h3>
              {site.volunteering.map((v, i) => (
                <div className="folio-item" key={i}>
                  <div className="t">{v.role}</div>
                  <div className="m">{v.org} · {v.year}</div>
                  {v.certUrl && v.certUrl !== "" && (
                    <a className="cert-btn sm" href={v.certUrl} target="_blank" rel="noreferrer">Certificate →</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- SIGN-OFF / CONTACT ---- */}
      <section className="signoff" id="contact">
        <div className="wrap signoff-grid">
          <div className="reveal">
            <h2>Let&apos;s work together</h2>
              <p className="lede">Open to full-time roles, research collaborations, and MSc/PhD opportunities across full-stack development and AI/ML. I&apos;d love to hear from you.</p>            
              <div className="signoff-lines">
              <span className="signoff-line"><MailIcon /> <a href={GMAIL(site.email)} target="_blank" rel="noreferrer">{site.email}</a></span>
              {/*<span className="signoff-line"><PhoneIcon /> <a href={`tel:${site.phone}`}>{site.phone}</a></span>*/}
              <span className="signoff-line"><PhoneIcon /> Available on request</span>
              <span className="signoff-line"><LocationIcon /> {site.location}</span>
            </div>
            <div className="signoff-social">
              {socials.map((s) => (
                <a href={s.href} key={s.label} target="_blank" rel="noreferrer" aria-label={s.label}>{iconFor(s.label)}</a>
              ))}
            </div>
          </div>
          <div className="cform-card reveal">
            <ContactForm email={site.email} />
          </div>
        </div>
      </section>

      <footer className="colophon">
      <div className="colophon-inner">
        <span>Built & maintained by <span className="sig">Sadia</span></span>
        <span>© {year} · All rights reserved</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
    </>
  );
}

function PhotoOrInitials({ photo, initials }: { photo?: string; initials: string }) {
  if (photo && photo.trim() !== "") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="pic" src={photo} alt={initials} />;
  }
  return <div className="pic-fallback">{initials}</div>;
}

function GitHubMini() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 14, height: 14, fill: "currentColor", verticalAlign: "-2px" }}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}
