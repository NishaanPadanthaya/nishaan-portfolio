"use client";

import { useEffect, useState } from "react";
import { achievements, profile, projects, publications, skills } from "@/data/portfolio";

const navigation = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["research", "Publications"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["recognition", "Achievements"],
  ["contact", "Contact"],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function NetworkVisual() {
  return (
    <figure className="network-scene">
      <figcaption className="scene-caption"><span className="live-dot" /> MODEL / CONNECTION MAP <span>AI × ML × SYSTEMS</span></figcaption>
      <svg viewBox="0 0 520 400" role="img" aria-label="Connected research nodes arranged as a three-dimensional network">
        <defs>
          <radialGradient id="coreGlow"><stop stopColor="#3a8fff" stopOpacity=".25"/><stop offset="1" stopColor="#3a8fff" stopOpacity="0"/></radialGradient>
          <linearGradient id="linkGlow"><stop stopColor="#3977b8" stopOpacity=".12"/><stop offset=".5" stopColor="#82c6ff" stopOpacity=".9"/><stop offset="1" stopColor="#3977b8" stopOpacity=".12"/></linearGradient>
        </defs>
        <circle cx="265" cy="199" r="157" fill="url(#coreGlow)"/>
        <g className="network-orbits"><ellipse cx="260" cy="205" rx="198" ry="85"/><ellipse cx="260" cy="205" rx="198" ry="85" transform="rotate(58 260 205)"/><ellipse cx="260" cy="205" rx="198" ry="85" transform="rotate(-58 260 205)"/></g>
        <g className="network-lines">
          <path d="M72 114 177 170 259 76 355 140 447 83M72 114 112 286 177 170 247 323 355 140 425 285 247 323 112 286M177 170 355 140 247 323M259 76 355 140 425 285"/>
          <path d="M72 114 259 76 247 323 447 83M112 286 355 140 447 83" className="line-faint"/>
        </g>
        <g className="network-nodes">
          <circle cx="72" cy="114" r="6"/><circle cx="177" cy="170" r="9" className="node-bright"/><circle cx="259" cy="76" r="7"/>
          <circle cx="355" cy="140" r="12" className="node-main"/><circle cx="447" cy="83" r="5"/><circle cx="112" cy="286" r="8"/>
          <circle cx="247" cy="323" r="7"/><circle cx="425" cy="285" r="6"/>
        </g>
        <circle cx="355" cy="140" r="27" className="node-pulse"/>
      </svg>
      <span className="scene-note note-one">MULTIMODAL <b>01</b></span>
      <span className="scene-note note-two">INFERENCE <b>02</b></span>
      <span className="scene-note note-three">RESEARCH <b>03</b></span>
      <div className="scene-foot"><span>LEARN / CONNECT / EXPLAIN</span><span>FIG. 01 — NETWORK VIEW</span></div>
    </figure>
  );
}

function ProjectDiagram({ label, steps }: { label: string; steps: string[] }) {
  return (
    <figure className="project-diagram" aria-label={`${label}: ${steps.join(" to ")}`}>
      <figcaption>{label}</figcaption>
      <div className="diagram-flow">
        {steps.map((step, index) => (
          <div className="flow-item" key={step}>
            <span className={`flow-node ${index === 0 ? "flow-input" : ""} ${index === steps.length - 1 ? "flow-output" : ""}`}>
              <i>{String(index + 1).padStart(2, "0")}</i>{step}
            </span>
            {index < steps.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <span className="diagram-base" aria-hidden="true"/>
    </figure>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>("main section[id], main header[id]")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className={`site-nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Nishaan Padanthaya, home"><span>NP</span><i/></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navigation.map(([id, label]) => <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href={`mailto:${profile.email}`}>Let’s talk <Arrow diagonal/></a>
        </div>
      </nav>

      <main id="main">
        <header className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot"/> AI / ML ENGINEER <span className="eyebrow-divider">—</span> BENGALURU, INDIA</div>
            <h1>Nishaan<br/><span>Padanthaya.</span></h1>
            <p className="hero-lede">I build intelligent systems where <em>research</em>, <em>engineering</em>, and real-world problems meet.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow/></a><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow diagonal/></a></div>
            <div className="hero-meta"><span>ENGINEER · PRACTITIONER · RESEARCHER</span><a href="#about">SCROLL TO EXPLORE <b>↓</b></a></div>
          </div>
          <NetworkVisual/>
          <div className="hero-index" aria-hidden="true">PORTFOLIO / 2026</div>
        </header>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <div className="section-label"><span>01</span> / ABOUT</div>
            <div><h2>Curious about how intelligence becomes <span>useful.</span></h2><p className="intro-copy">I’m an AI/ML engineer working across applied machine learning, language models, and software systems. My path moves between building AI products, exploring research questions, and turning ideas into tools people can use.</p><p className="intro-copy">At AVEVA, I contribute to industrial AI assistant capabilities. Outside work, I’m drawn to research at the intersection of graph learning, multimodal data, and explainable AI.</p><a className="underlined-link" href={profile.linkedin} target="_blank" rel="noreferrer">More about my journey <Arrow diagonal/></a></div>
            <div className="intro-aside"><span className="aside-mark">∿</span><p>Build with care.<br/>Question with purpose.<br/>Explain what matters.</p><small>PERSONAL PRINCIPLES / 03</small></div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading"><div className="section-label"><span>02</span> / EXPERIENCE</div><p>Building AI capabilities<br/>for complex environments.</p></div>
          <article className="experience-card"><div className="experience-top"><div><span className="company-kicker">INDUSTRIAL SOFTWARE · ENTERPRISE AI</span><h2>AVEVA</h2></div><span className="current-pill"><i/> CURRENTLY</span></div><div className="experience-body"><div className="role-rail"><div className="role-stop"><span/><div><b>AI/ML Graduate Role</b><small>June 2026 — Present</small></div></div><div className="role-stop"><span/><div><b>AI/ML Intern</b><small>January 2026 — June 2026</small></div></div></div><div className="experience-description"><p>Contributing to industrial AI assistant capabilities and enterprise AI services, bringing together language-model features and production-minded engineering.</p><p>Work includes advancing assistant experiences, creating installation packages for AI services, and supporting reliable delivery of enterprise AI functionality.</p><div className="experience-tags"><span>Industrial AI</span><span>AI assistants</span><span>Generative AI</span><span>AI services</span></div></div></div><div className="experience-foot"><span>ONE CONTINUOUS JOURNEY</span><span>AI × INDUSTRY × ENGINEERING</span></div></article>
          <article className="previous-role"><div><span className="company-kicker">GENERATIVE AI · PRODUCT ENGINEERING</span><h3>TechEnhance</h3></div><div><b>AI/ML Intern</b><span>May — July 2024</span></div><p>Developed generative AI solutions for video analytics and finance use cases, and contributed to RAG-based chatbot experiences.</p></article>
        </section>

        <section className="projects-section" id="projects"><div className="section-wrap"><div className="section-heading"><div><div className="section-label"><span>03</span> / SELECTED WORK</div><h2>Projects with a clear <span>purpose.</span></h2></div><a className="underlined-link" href={profile.github} target="_blank" rel="noreferrer">Browse GitHub <Arrow diagonal/></a></div><p className="section-intro">Six projects spanning LLM applications, multimodal learning, graph methods, computer vision, and practical AI products.</p><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-card-top"><span>{project.number} / PROJECT</span><span>{project.category}</span></div><ProjectDiagram label={project.diagram.label} steps={project.diagram.steps}/><div className="project-card-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit Nishaan's GitHub profile for ${project.title}`}>GitHub <Arrow diagonal/></a></div></div></article>)}</div><p className="repo-note">Project links open the public GitHub profile, where the repositories are listed.</p></div></section>

        <section className="section-wrap research-section" id="research"><div className="section-heading"><div><div className="section-label"><span>04</span> / PUBLICATIONS</div><h2>Research, <span>published.</span></h2></div><div className="research-stamp">PUBLISHED<br/>PAPERS <b>03</b></div></div><p className="section-intro">Three published studies across multimodal medical AI, language models, and explainable computer vision.</p><div className="publication-list">{publications.map((paper, index) => <article className="publication" key={paper.title}><div className="publication-index">0{index + 1}<span>/{paper.year}</span></div><div className="publication-content"><div className="publication-meta"><span className="published-pill"><i/> PUBLISHED</span><span>{paper.venue}</span></div><h3>{paper.title}</h3><p>{paper.summary}</p><div className="tag-list">{paper.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{index === 0 && <small className="author-line">{paper.authors}</small>}</div><span className="publication-mark" aria-hidden="true">↗</span></article>)}</div></section>

        <section className="skills-section" id="skills"><div className="section-wrap"><div className="section-heading"><div><div className="section-label"><span>05</span> / CAPABILITIES</div><h2>Tools for thoughtful <span>building.</span></h2></div><p>Grounded in the fundamentals.<br/>Expanded through practice.</p></div><div className="skill-grid">{skills.map((group, index) => <article className="skill-group" key={group.label}><div className="skill-group-top"><span>0{index + 1}</span><span>↘</span></div><h3>{group.label}</h3><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

        <section className="section-wrap education-section" id="education"><div className="section-label"><span>06</span> / EDUCATION</div><div className="education-card"><div><span className="company-kicker">BENGALURU, INDIA · 2022 — 2026</span><h2>PES University</h2><p>Bachelor of Technology, Computer Science and Engineering (AI & ML)</p></div><div className="gpa"><strong>8.51</strong><span>/ 10 GPA</span></div></div></section>

        <section className="recognition-section" id="recognition"><div className="section-wrap"><div className="section-heading"><div><div className="section-label"><span>07</span> / ACHIEVEMENTS</div><h2>Milestones along<br/>the <span>way.</span></h2></div><p>Moments that reflect teamwork,<br/>curiosity, and a love of problem solving.</p></div><div className="achievement-grid">{achievements.map((achievement, index) => <article className={index === 0 ? "achievement featured-achievement" : "achievement"} key={achievement.title}><span className="achievement-number">0{index + 1}</span><h3>{achievement.title}</h3><p>{achievement.detail}</p><span className="achievement-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-label"><span>08</span> / CONTACT</div><p className="contact-kicker">HAVE A GOOD PROBLEM?</p><h2>Let’s build<br/><span>something useful.</span></h2><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal/></a><div className="contact-bottom"><p>Open to conversations around AI, ML, research, and engineering.</p><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal/></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal/></a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <Arrow diagonal/></a></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="section-wrap"><a className="wordmark footer-mark" href="#home"><span>NP</span><i/></a><span>DESIGNED WITH INTENTION · {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </>
  );
}
