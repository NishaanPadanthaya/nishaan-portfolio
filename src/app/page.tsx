"use client";

import { useEffect, useState } from "react";
import { achievements, profile, projects, publications, skills } from "@/data/portfolio";

const navigation = [
  ["about", "About"], ["experience", "Experience"], ["projects", "Projects"],
  ["research", "Research"], ["skills", "Skills"], ["recognition", "Recognition"], ["contact", "Contact"],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function NetworkVisual() {
  return (
    <div className="network-scene" aria-label="Abstract connected-node visualization">
      <div className="scene-caption"><span className="live-dot" /> SYSTEMS / 01 <span>INTERCONNECTED INTELLIGENCE</span></div>
      <div className="network-core">
        <div className="network-orbit orbit-one" />
        <div className="network-orbit orbit-two" />
        <svg viewBox="0 0 520 440" role="img" aria-label="A network of connected research nodes">
          <g className="network-lines">
            <path d="M78 115 186 176 270 86 372 143 440 75M78 115 111 286 186 176 247 338 372 143 421 284 247 338 111 286M186 176 372 143 247 338M270 86 372 143 421 284" />
            <path d="M78 115 270 86 247 338 440 75M111 286 372 143 440 75" className="line-faint" />
          </g>
          <g className="network-nodes">
            <circle cx="78" cy="115" r="5"/><circle cx="186" cy="176" r="8" className="node-bright"/><circle cx="270" cy="86" r="6"/>
            <circle cx="372" cy="143" r="10" className="node-main"/><circle cx="440" cy="75" r="4"/><circle cx="111" cy="286" r="7"/>
            <circle cx="247" cy="338" r="6"/><circle cx="421" cy="284" r="5"/>
          </g>
          <circle cx="372" cy="143" r="23" className="node-pulse" />
        </svg>
        <div className="float-label label-a">MULTIMODAL <i>01</i></div>
        <div className="float-label label-b">INFERENCE <i>02</i></div>
        <div className="float-label label-c">RESEARCH <i>03</i></div>
      </div>
      <div className="scene-foot"><span>AI × ML × SYSTEMS</span><span>FIG. 01 — CONNECTIONS IN CONTEXT</span></div>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "agents") return <div className="project-visual agent-visual"><span className="agent-node">QUERY</span><i /><span className="agent-node agent-one">SEARCH</span><i /><span className="agent-node agent-two">SYNTHESIZE</span><i /><span className="agent-node agent-three">INSIGHT</span></div>;
  if (type === "text") return <div className="project-visual text-visual"><span className="text-line long"/><span className="text-line"/><span className="text-highlight">meaning, made clearer<span>✳</span></span><span className="text-line short"/></div>;
  if (type === "finance") return <div className="project-visual finance-visual"><div className="chart-label">SPENDING PATTERN <span>OVERVIEW</span></div><div className="chart-bars">{[30, 48, 38, 64, 47, 78, 57, 90, 67, 100, 76, 86].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>;
  return <div className="project-visual graph-visual"><svg viewBox="0 0 360 130" aria-hidden="true"><g><path d="M30 76 87 40 142 89 204 30 264 71 327 43M30 76 103 108 142 89 218 102 264 71 327 100M87 40 204 30 218 102"/></g><circle cx="30" cy="76" r="4"/><circle cx="87" cy="40" r="5"/><circle cx="142" cy="89" r="6"/><circle cx="204" cy="30" r="5"/><circle cx="264" cy="71" r="7"/><circle cx="327" cy="43" r="4"/><circle cx="103" cy="108" r="4"/><circle cx="218" cy="102" r="4"/><circle cx="327" cy="100" r="4"/></svg><span>TOPIC RELATIONSHIP MAP</span></div>;
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
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Nishaan Padanthaya, home"><span>NP</span><i /></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navigation.map(([id, label]) => <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href={`mailto:${profile.email}`}>Let’s talk <Arrow diagonal /></a>
        </div>
      </nav>

      <main id="main">
        <header className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> AI / ML ENGINEER <span className="eyebrow-divider">—</span> BENGALURU, INDIA</div>
            <h1>Nishaan<br/><span>Padanthaya.</span></h1>
            <p className="hero-lede">I build intelligent systems where <em>research</em>, <em>engineering</em>, and real-world problems meet.</p>
            <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="/Nishaan_Padanthaya_Resume.pdf" download>Download résumé <Arrow diagonal /></a></div>
            <div className="hero-meta"><span>01 — 03<br/>ENGINEER · PRACTITIONER · RESEARCHER</span><span>SCROLL TO EXPLORE<br/><b>↓</b></span></div>
          </div>
          <NetworkVisual />
          <div className="hero-index" aria-hidden="true">PORTFOLIO / 2026</div>
        </header>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <div className="section-label"><span>01</span> / ABOUT</div>
            <div><h2>Curious about how intelligence becomes <span>useful.</span></h2><p className="intro-copy">I’m an AI/ML engineer working across applied machine learning, language models, and software systems. My path moves between building AI products, exploring research questions, and turning ideas into tools people can use.</p><p className="intro-copy">At AVEVA, I contribute to industrial AI assistant capabilities. Outside work, I’m drawn to research at the intersection of graph learning, multimodal data, and explainable AI.</p><a className="underlined-link" href={profile.linkedin} target="_blank" rel="noreferrer">More about my journey <Arrow diagonal /></a></div>
            <div className="intro-aside"><span className="aside-mark">∿</span><p>Build with care.<br/>Question with purpose.<br/>Explain what matters.</p><small>PERSONAL PRINCIPLES / 03</small></div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading"><div className="section-label"><span>02</span> / EXPERIENCE</div><p>Building AI capabilities<br/>for complex environments.</p></div>
          <article className="experience-card"><div className="experience-top"><div><span className="company-kicker">INDUSTRIAL SOFTWARE · ENTERPRISE AI</span><h2>AVEVA</h2></div><span className="current-pill"><i/> CURRENTLY</span></div><div className="experience-body"><div className="role-rail"><div className="role-stop"><span/><div><b>AI/ML Graduate Role</b><small>June 2026 — Present</small></div></div><div className="role-stop"><span/><div><b>AI/ML Intern</b><small>January 2026 — June 2026</small></div></div></div><div className="experience-description"><p>Contributing to industrial AI assistant capabilities and enterprise AI services, bringing together language-model features and production-minded engineering.</p><p>Work includes advancing assistant experiences, creating installation packages for AI services, and supporting reliable delivery of enterprise AI functionality.</p><div className="experience-tags"><span>Industrial AI</span><span>AI assistants</span><span>Generative AI</span><span>AI services</span></div></div></div><div className="experience-foot"><span>ONE CONTINUOUS JOURNEY</span><span>AI × INDUSTRY × ENGINEERING</span></div></article>
          <article className="previous-role"><div><span className="company-kicker">GENERATIVE AI · PRODUCT ENGINEERING</span><h3>TechEnhance</h3></div><div><b>AI/ML Intern</b><span>May — July 2024</span></div><p>Developed generative AI solutions for video analytics and finance use cases, and contributed to RAG-based chatbot experiences.</p></article>
        </section>

        <section className="projects-section" id="projects"><div className="section-wrap"><div className="section-heading"><div><div className="section-label"><span>03</span> / SELECTED WORK</div><h2>Ideas, made <span>practical.</span></h2></div><a className="underlined-link" href={profile.github} target="_blank" rel="noreferrer">Browse GitHub <Arrow diagonal /></a></div><p className="section-intro">A selection of applied AI and research projects, from agent-based workflows to multimodal applications.</p><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-card-top"><span>{project.number} / PROJECT</span><span>{project.category}</span></div><ProjectVisual type={project.visual}/><div className="project-card-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit Nishaan's GitHub profile for ${project.title}`}>↗</a></div></div></article>)}</div><p className="repo-note">Project descriptions are drawn from my résumé. Visit GitHub for current source repositories and code.</p></div></section>

        <section className="section-wrap research-section" id="research"><div className="section-heading"><div><div className="section-label"><span>04</span> / RESEARCH</div><h2>Questions worth <span>exploring.</span></h2></div><div className="research-stamp">RESEARCH<br/>ARCHIVE <b>03</b></div></div><p className="section-intro">Research is where engineering meets uncertainty: a way to test ideas, understand evidence, and make complex systems more legible.</p><div className="publication-list">{publications.map((paper, index) => <article className="publication" key={paper.title}><div className="publication-index">0{index + 1}<span>/{paper.year}</span></div><div className="publication-content"><div className="publication-meta"><span>{paper.venue}</span><span>PUBLICATION</span></div><h3>{paper.title}</h3><p>{paper.summary}</p><div className="tag-list">{paper.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{index === 0 && <small className="author-line">{paper.authors}</small>}</div><span className="publication-mark" aria-hidden="true">↗</span></article>)}</div><p className="publication-note">The ICTIS 2026 paper PDF provided lists the authors and abstract; no DOI or publication URL was present in that document.</p></section>

        <section className="skills-section" id="skills"><div className="section-wrap"><div className="section-heading"><div><div className="section-label"><span>05</span> / CAPABILITIES</div><h2>Tools for thoughtful <span>building.</span></h2></div><p>Grounded in the fundamentals.<br/>Expanded through practice.</p></div><div className="skill-grid">{skills.map((group, index) => <article className="skill-group" key={group.label}><div className="skill-group-top"><span>0{index + 1}</span><span>↘</span></div><h3>{group.label}</h3><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

        <section className="section-wrap education-section"><div className="section-label"><span>06</span> / EDUCATION</div><div className="education-card"><div><span className="company-kicker">BENGALURU, INDIA · 2022 — 2026</span><h2>PES University</h2><p>Bachelor of Technology, Computer Science and Engineering (AI & ML)</p></div><div className="gpa"><strong>8.51</strong><span>/ 10 GPA</span></div></div></section>

        <section className="recognition-section" id="recognition"><div className="section-wrap"><div className="section-heading"><div><div className="section-label"><span>07</span> / RECOGNITION</div><h2>Milestones along<br/>the <span>way.</span></h2></div><p>Moments that reflect teamwork,<br/>curiosity, and a love of problem solving.</p></div><div className="achievement-grid">{achievements.map((achievement, index) => <article className={index === 0 ? "achievement featured-achievement" : "achievement"} key={achievement.title}><span className="achievement-number">0{index + 1}</span><h3>{achievement.title}</h3><p>{achievement.detail}</p><span className="achievement-arrow">↗</span></article>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-label"><span>08</span> / CONTACT</div><p className="contact-kicker">HAVE A GOOD PROBLEM?</p><h2>Let’s build<br/><span>something useful.</span></h2><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a><div className="contact-bottom"><p>Open to conversations around AI, ML, research, and engineering.</p><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <Arrow diagonal /></a><a href="/Nishaan_Padanthaya_Resume.pdf" download>Résumé <Arrow diagonal /></a></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="section-wrap"><a className="wordmark footer-mark" href="#home"><span>NP</span><i/></a><span>DESIGNED WITH INTENTION · {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </>
  );
}
