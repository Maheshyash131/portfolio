import { useState } from "react";

const data = {
  name: "Mahesh Y",
  phone: "9880788999",
  email: "achu78899@gmail.com",
  location: "KR Puram, Bangalore",
  github: "https://github.com/Maheshyash131",
  objective:
    "Motivated MCA student with a strong foundation in full-stack development, seeking an opportunity to apply technical skills, contribute to real-world projects, and grow professionally in the IT industry.",
  education: [
    { degree: "MCA", detail: "Master of Computer Applications", status: "Pursuing", score: null },
    { degree: "BCA", detail: "Bachelor of Computer Applications", status: "Completed", score: "90%" },
    { degree: "12th (PUC)", detail: "Vision PU College", status: "Completed", score: "71%" },
    { degree: "10th (SSLC)", detail: "Navadeep School", status: "Completed", score: "61%" },
  ],
  skills: [
    { name: "React.js", icon: "⚛", cat: "Frontend" },
    { name: "Node.js", icon: "🟩", cat: "Backend" },
    { name: "Express.js", icon: "🚂", cat: "Backend" },
    { name: "Flask", icon: "🐍", cat: "Backend" },
    { name: "MongoDB", icon: "🍃", cat: "Database" },
    { name: "JavaScript", icon: "JS", cat: "Language" },
    { name: "HTML & CSS", icon: "</>", cat: "Frontend" },
    { name: "REST APIs", icon: "🔗", cat: "Backend" },
    { name: "Problem Solving", icon: "🧩", cat: "Skill" },
    { name: "Mobile App development", icon: "📱", cat: "Full stack" },
    { name: "Blockchain", icon: "🔗", cat: "Tool" },
  ],
  projects: [
    {
      name: "CookMate",
      subtitle: "Cooking Assistant App",
      status: "Completed",
      stack: ["React", "Flask", "MongoDB"],
      points: [
        "Full-stack app generating step-by-step cooking instructions from ingredients",
        "Ingredient validation and smart substitution system",
        "MongoDB-backed recipe and ingredient mapping storage",
      ],
    },
     {
      name: "College Conference System",
      subtitle: "Conference Management website",
      status: "Completed",
      stack: ["React", "MongoDB"],
      points: [
       "Conference management system for college events",
       "Role-based access for organizers, speakers, and attendees",
      ],
      links: "https://github.com/Maheshyash131/Svyasa_Conference"
    },
    {
      name: "Friday",
      subtitle: "Personal Assistant",
      status: "In Progress",
      stack: ["Python", "Whisper", "React"],
      points: [
        "Voice-controlled assistant with speech recognition via Whisper",
        "Text-to-speech and wake-word detection",
        "Planned React frontend integration",
      ],
      links: "https://github.com/Maheshyash131/Friday"
    },
    {
      name: "Ingredient Suitability System",
      subtitle: "Backend System",
      status: "Completed",
      stack: ["Node.js", "Flask", "MongoDB"],
      points: [
        "Checks ingredient compatibility for recipes",
        "REST API endpoints using Node.js and Flask",
        "Dynamic MongoDB collections for data handling",
      ],
    },
  ],
  languages: ["English", "Hindi", "Kannada", "Telugu"],
  hobbies: ["Coding & building apps", "Learning new tech", "Fitness & workouts"],
};

const NAV = ["About", "Education", "Skills", "Projects", "Contact"];

const accent = "#00FFB3";
const accentDim = "#00b37e";
const bg = "#0D0F14";
const card = "#13161E";
const border = "#1E2330";
const muted = "#6B7280";

const styles = {
  root: {
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    background: bg,
    color: "#E2E8F0",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(13,15,20,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    height: 56,
  },
  navLogo: {
    color: accent,
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: 2,
  },
  navLinks: {
    display: "flex",
    gap: 4,
  },
  navBtn: (active) => ({
    background: active ? `${accent}18` : "transparent",
    border: active ? `1px solid ${accent}44` : "1px solid transparent",
    color: active ? accent : muted,
    padding: "6px 14px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 12,
    letterSpacing: 1,
    transition: "all 0.2s",
    fontFamily: "inherit",
  }),
  hero: {
    padding: "72px 24px 48px",
    maxWidth: 900,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  badge: {
    display: "inline-block",
    background: `${accent}14`,
    border: `1px solid ${accent}33`,
    color: accent,
    fontSize: 11,
    letterSpacing: 2,
    padding: "4px 12px",
    borderRadius: 4,
    width: "fit-content",
  },
  heroName: {
    fontSize: 52,
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: -1,
    margin: 0,
    color: "#F8FAFC",
  },
  heroAccent: { color: accent },
  heroSub: {
    color: muted,
    fontSize: 15,
    lineHeight: 1.7,
    maxWidth: 560,
  },
  heroLinks: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 8,
  },
  pill: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: card,
    border: `1px solid ${border}`,
    borderRadius: 20,
    padding: "6px 14px",
    fontSize: 12,
    color: "#CBD5E1",
    textDecoration: "none",
  },
  section: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "48px 24px",
  },
  sectionLabel: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 32,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    background: border,
  },
  sectionTitle: {
    color: accent,
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: 700,
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
    background: card,
    border: `1px solid ${border}`,
    borderRadius: 12,
    padding: "20px 24px",
  },
  eduCard: {
    background: card,
    border: `1px solid ${border}`,
    borderRadius: 12,
    padding: "16px 20px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  degreeLabel: {
    color: accent,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1,
  },
  degreeDetail: { color: "#94A3B8", fontSize: 12, marginTop: 2 },
  scoreBadge: (s) => ({
    background: s === "Pursuing" ? `#3B82F618` : `${accent}12`,
    border: `1px solid ${s === "Pursuing" ? "#3B82F644" : `${accent}33`}`,
    color: s === "Pursuing" ? "#60A5FA" : accent,
    fontSize: 12,
    padding: "4px 10px",
    borderRadius: 6,
    whiteSpace: "nowrap",
    fontWeight: 700,
  }),
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: 12,
  },
  skillChip: {
    background: card,
    border: `1px solid ${border}`,
    borderRadius: 10,
    padding: "14px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  skillIcon: { fontSize: 18, lineHeight: 1 },
  skillName: { fontSize: 12, color: "#CBD5E1", fontWeight: 600 },
  skillCat: { fontSize: 10, color: muted, letterSpacing: 1 },
  projectCard: {
    background: card,
    border: `1px solid ${border}`,
    borderRadius: 14,
    overflow: "hidden",
  },
  projectHeader: {
    padding: "20px 24px 16px",
    borderBottom: `1px solid ${border}`,
  },
  projectName: { fontSize: 18, fontWeight: 700, color: "#F1F5F9", margin: 0 },
  projectSub: { fontSize: 12, color: muted, marginTop: 2 },
  projectStatus: (s) => ({
    display: "inline-block",
    marginTop: 10,
    background: s === "In Progress" ? `#F59E0B18` : `${accent}14`,
    border: `1px solid ${s === "In Progress" ? "#F59E0B44" : `${accent}33`}`,
    color: s === "In Progress" ? "#FCD34D" : accent,
    fontSize: 10,
    letterSpacing: 1,
    padding: "3px 10px",
    borderRadius: 4,
  }),
  projectBody: { padding: "16px 24px 20px" },
  projectStack: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 },
  tag: {
    background: "#1E2330",
    color: "#94A3B8",
    fontSize: 11,
    padding: "4px 10px",
    borderRadius: 4,
    letterSpacing: 0.5,
  },
  bullet: {
    color: "#94A3B8",
    fontSize: 13,
    lineHeight: 1.7,
    paddingLeft: 16,
    position: "relative",
  },
  dot: {
    content: "''",
    position: "absolute",
    left: 0,
    top: 9,
    width: 4,
    height: 4,
    background: accent,
    borderRadius: "50%",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },
  contactItem: {
    background: card,
    border: `1px solid ${border}`,
    borderRadius: 10,
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    gap: 14,
    textDecoration: "none",
    color: "inherit",
  },
  contactIcon: { fontSize: 20, width: 36 },
  contactLabel: { fontSize: 11, color: muted, letterSpacing: 1 },
  contactVal: { fontSize: 13, color: "#E2E8F0", fontWeight: 600 },
  footer: {
    borderTop: `1px solid ${border}`,
    padding: "24px",
    textAlign: "center",
    color: muted,
    fontSize: 12,
    letterSpacing: 1,
  },
};

export default function Portfolio() {
  const [active, setActive] = useState("About");

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.root}>
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.navLogo}>MY_</span>
        <div style={styles.navLinks}>
          {NAV.map((n) => (
            <button key={n} style={styles.navBtn(active === n)} onClick={() => scrollTo(n)}>
              {n.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div id="About" style={styles.hero}>
        <span style={styles.badge}>// OPEN TO OPPORTUNITIES</span>
        <h1 style={styles.heroName}>
          <span style={styles.heroAccent}>Mahesh</span> Y
        </h1>
        <p style={styles.heroSub}>{data.objective}</p>
        <div style={styles.heroLinks}>
          {[
            { icon: "📍", label: data.location },
            { icon: "📞", label: data.phone },
            { icon: "✉", label: data.email, href: `mailto:${data.email}` },
            { icon: "⌥", label: "GitHub", href: data.github },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href || "#"}
              target={l.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={styles.pill}
            >
              <span>{l.icon}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
          {[
            { l: "Languages", v: data.languages.join(" · ") },
            { l: "Hobbies", v: data.hobbies.join(" · ") },
          ].map((item) => (
            <div
              key={item.l}
              style={{ ...styles.card, padding: "12px 18px", flex: "1 1 240px" }}
            >
              <div style={{ fontSize: 10, color: muted, letterSpacing: 2, marginBottom: 4 }}>
                {item.l.toUpperCase()}
              </div>
              <div style={{ fontSize: 13, color: "#94A3B8" }}>{item.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <section id="Education" style={styles.section}>
        <div style={styles.sectionLabel}>
          <span style={styles.sectionTitle}>EDUCATION</span>
          <div style={styles.sectionLine} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.education.map((e) => (
            <div key={e.degree} style={styles.eduCard}>
              <div>
                <div style={styles.degreeLabel}>{e.degree}</div>
                <div style={styles.degreeDetail}>{e.detail}</div>
              </div>
              <div style={styles.scoreBadge(e.status)}>
                {e.score || e.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="Skills" style={styles.section}>
        <div style={styles.sectionLabel}>
          <span style={styles.sectionTitle}>SKILLS</span>
          <div style={styles.sectionLine} />
        </div>
        <div style={styles.skillsGrid}>
          {data.skills.map((s) => (
            <div key={s.name} style={styles.skillChip}>
              <span style={styles.skillIcon}>{s.icon}</span>
              <span style={styles.skillName}>{s.name}</span>
              <span style={styles.skillCat}>{s.cat.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" style={styles.section}>
        <div style={styles.sectionLabel}>
          <span style={styles.sectionTitle}>PROJECTS</span>
          <div style={styles.sectionLine} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {data.projects.map((p) => (
            <div key={p.name} style={styles.projectCard}>
              <div style={styles.projectHeader}>
                <div style={styles.projectName}>{p.name}</div>
                <div style={styles.projectSub}>{p.subtitle}</div>
                <div style={styles.projectlink}>{p.links}</div>
                <span style={styles.projectStatus(p.status)}>{p.status.toUpperCase()}</span>
              </div>
              <div style={styles.projectBody}>
                <div style={styles.projectStack}>
                  {p.stack.map((t) => (
                    <span key={t} style={styles.tag}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.points.map((pt) => (
                    <div key={pt} style={{ position: "relative", paddingLeft: 16 }}>
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 8,
                          width: 5,
                          height: 5,
                          background: accent,
                          borderRadius: "50%",
                          display: "block",
                        }}
                      />
                      <span style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.7 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={styles.section}>
        <div style={styles.sectionLabel}>
          <span style={styles.sectionTitle}>CONTACT</span>
          <div style={styles.sectionLine} />
        </div>
        <div style={styles.contactGrid}>
          {[
            { icon: "📧", label: "EMAIL", val: data.email, href: `mailto:${data.email}` },
            { icon: "📞", label: "PHONE", val: data.phone, href: `tel:${data.phone}` },
            { icon: "📍", label: "LOCATION", val: data.location },
            // { icon: "⌥", label: "GITHUB", val: "Maheshyash131", href: data.github },
            // { icon: "💼", label: "Languages", val: "Kannada, ", href: "https://www.linkedin.com/in/mahesh-yash-131/" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href || "#"}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={styles.contactItem}
            >
              <span style={styles.contactIcon}>{c.icon}</span>
              <div>
                <div style={styles.contactLabel}>{c.label}</div>
                <div style={styles.contactVal}>{c.val}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <span style={{ color: accent }}>MAHESH Y</span> · MCA STUDENT · BANGALORE
      </footer>
    </div>
  );
}
