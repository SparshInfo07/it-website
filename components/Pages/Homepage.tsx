"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Code2, Layers3, Menu, Plus, ShoppingBag, Sparkles, X } from "lucide-react";
import gsap from "gsap";
import Image from 'next/image';
import { Universe, RestoredSections } from "./CosmicExperience";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const capabilities = [
  { icon: Code2, tag: "Make an impression", title: "Websites with\nsomething to say.", text: "Distinctive digital experiences. Thoughtful design, fast pages, and a clear next step for every visitor.", href: "/services/ui-ux-design-and-digital-experience", items: "Brand websites · Product design · Web development" },
  { icon: ShoppingBag, tag: "Turn interest into action", title: "Commerce without\nthe complications.", text: "From first discovery to final order. Catalogues, quotation flows, and stores that feel effortless.", href: "/services/application-development", items: "E-commerce · B2B catalogues · Payments" },
  { icon: Layers3, tag: "Find your flow", title: "Less busywork.\nMore business.", text: "Give your team one clear place to manage content, customers, and the work that happens behind the scenes.", href: "/services/artificial-intelligence", items: "Custom software · Admin systems · AI automation" },
];
const stages = [
  { title: "Get to the real problem.", text: "We listen, ask the awkward questions, and map what your business actually needs. A clear brief comes before a single screen.", chips: ["Discovery workshop", "Scope & priorities", "Success criteria"], label: "A shared starting point", diagram: ["Your business", "The right questions", "A clear direction"] },
  { title: "Make the idea tangible.", text: "Explore a working prototype, test the important journeys, and shape a visual direction together. You see the experience before we build it.", chips: ["User journeys", "Interactive prototype", "Visual system"], label: "Something you can click", diagram: ["User needs", "Design & prototype", "Feedback loop"] },
  { title: "Build. Test. Make it better.", text: "We turn the approved direction into a dependable product, share progress, and test the details that make everyday use feel simple.", chips: ["Engineering", "Regular demos", "Quality checks"], label: "Progress you can see", diagram: ["Approved design", "Build & refine", "A working product"] },
  { title: "Launch with a way forward.", text: "Go live with a handover your team understands. We agree the hosting, support, and next steps so your product has room to grow.", chips: ["Launch checklist", "Team handover", "Growth roadmap"], label: "Ready for your next chapter", diagram: ["Final checks", "Go live", "Learn & evolve"] },
];
const concepts = [
  { name: "Forme", type: "B2B DIGITAL CATALOGUE", description: "A better way to browse, shortlist, and start a conversation.", image: "/images/curated/case-01-forme.jpg", tags: ["Product discovery", "Quotation flow"] },
  { name: "Atelier", type: "RETAIL COMMERCE", description: "A considered storefront for collections worth discovering.", image: "/images/curated/case-02-atelier.jpg", tags: ["Shopping experience", "Content management"] },
  { name: "Flow", type: "SERVICE & BOOKING", description: "From finding the right service to finding the right time.", image: "/images/curated/case-03-flow.jpg", tags: ["Service design", "Booking journey"] },
];

function Edges() {
  return <span className="studio-edges" aria-hidden="true"><i /><i /><i /><i /></span>;
}

export default function HomePage() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [demo, setDemo] = useState(0);
  const [concept, setConcept] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-intro]", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out", clearProps: "all" });
      gsap.utils.toArray<HTMLElement>("[data-rise]").forEach(el => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%", once: true }, clearProps: "all" });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const followPointer = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  };
  const work = concepts[concept];

  return (
    <div className="studio-home" ref={root}>
      <a className="studio-skip" href="#home-content">Skip to content</a>
      <header className="studio-header">
        <Link href="/" aria-label="Sparsh IT home" className="studio-brand"><img src="/sparshlogo_nav.svg" alt="Sparsh IT" width="132" height="44" /></Link>
        <nav id="home-navigation" aria-label="Main navigation" className={`studio-nav ${menuOpen ? "studio-navOpen" : ""}`} onKeyDown={e => { if (e.key === "Escape") setMenuOpen(false); }}>
          {[["What we do", "#possibilities"], ["Selected work", "#selected-work"], ["Packages", "#packages"], ["Our approach", "#approach"], ["About us", "/about"]].map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<span /></Link>)}
        </nav>
        <Link className="studio-navCta" href="/contact-us">Let’s talk <span>✳</span></Link>
        <button className="studio-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="home-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <div id="home-content">
        <section className={`studio-hero studio-wrap`}>
          <div className="studio-heroCopy">
            <div className="studio-kicker" data-intro><span className="studio-miniMark">✳</span> INDEPENDENT THINKING. CONNECTED ENGINEERING.</div>
            <h1 data-intro>A universe of<br /><span className="studio-highlight">possibilities.</span><br />Built around you.</h1>
            <div className="studio-heroBottom" data-intro><p>We turn ambitious ideas into websites, digital products, and smarter ways to work.</p><Link className="studio-button" href="/contact-us">Build with us <span>✳</span></Link></div>
          </div>
          <Universe />
          <div className="studio-playground cosmic-secondary-lab" data-intro>
            <div className="studio-playgroundTop"><span>THE POSSIBILITY LAB</span><span className="studio-live"><i /> INTERACTIVE</span></div>
            <div className="studio-labTabs" aria-label="Explore a product direction">{["A website", "A store", "A system"].map((label, i) => <button key={label} onClick={() => setDemo(i)} aria-pressed={demo === i} className={demo === i ? "studio-labActive" : ""}>{label}</button>)}</div>
            <div className="studio-labStage">
              <div className="studio-orbitOne" /><div className="studio-orbitTwo" />
              <div className="studio-labWindow" key={demo}>
                <div className="studio-windowChrome"><div><i /><i /><i /></div><span>{["your-next-idea.com", "your-store.com", "workspace / overview"][demo]}</span><Plus size={13} /></div>
                {demo === 0 ? <div className="studio-websiteDemo"><span>GOOD IDEAS DESERVE</span><strong>A great<br /><em>first hello.</em></strong><div className="studio-demoBlock"><Sparkles size={48} strokeWidth={1} /><span>Designed to feel<br />like you.</span></div><div className="studio-demoBottom"><span>Explore what’s possible</span><span>✳</span></div></div>
                  : demo === 1 ? <div className="studio-storeDemo"><div><span>THE EVERYDAY COLLECTION</span><strong>Less, but better.</strong></div><div className="studio-products">{["Essential", "Everyday", "Edition"].map((p, i) => <div key={p}><div className={`studio-productShape ${`studio-shape${i}`}`} /><span>{p}</span></div>)}</div><div className="studio-demoBottom">Thoughtfully made. Easily found.<ShoppingBag size={17} /></div></div>
                    : <div className="studio-systemDemo"><div><span>YOUR WORK, CONNECTED</span><strong>A little more clarity.</strong></div><div className="studio-stats"><span><small>Enquiries</small><b>24</b></span><span><small>In progress</small><b>08</b></span><span><small>Completed</small><b>16</b></span></div>{["Website content updated", "New enquiry received", "Weekly report ready"].map((item, i) => <div className="studio-task" key={item}><Check size={13} /><span>{item}</span><small>{["Done", "New", "Ready"][i]}</small></div>)}</div>}
              </div>
              <span className="studio-floatingTag"><Check size={14} /> {['Made to stand out', 'Built to convert', 'Connected by design'][demo]}</span>
              <span className="studio-labStamp">IDEA<br /><b>→ REALITY</b></span>
            </div>
            <div className="studio-labFoot"><span>Small interactions. Big possibilities.</span><span>Try a direction above.</span></div>
          </div>
          <div className="studio-heroFoot"><span>DESIGN × TECHNOLOGY × YOUR NEXT CHAPTER</span><a href="#possibilities">Keep exploring <ArrowDown size={15} /></a></div>
        </section>

        <section id="possibilities" className={`studio-capabilities studio-wrap`}>
          <div className="studio-sectionHead" data-rise><div><span className="studio-kicker">WHAT WE CAN MAKE HAPPEN</span><h2>Good ideas.<br /><span className="studio-serif">Real-world impact.</span></h2></div><p>No one-size-fits-all stacks. We connect design and engineering around the thing your business needs next.</p></div>
          <div className="studio-cardGrid">{capabilities.map(({ icon: Icon, ...card }) => <Link key={card.title} href={card.href} className="studio-serviceCard" onPointerMove={followPointer} data-rise><Edges /><div className="studio-cardTop"><span className="studio-cardIcon"><Icon size={24} strokeWidth={1.5} /></span><ArrowUpRight className="studio-cardArrow" size={21} /></div><span className="studio-cardTag">{card.tag}</span><h3>{card.title}</h3><p>{card.text}</p><div className="studio-cardFoot">{card.items}</div></Link>)}</div>
          <div className="studio-capNote"><span className="studio-miniMark">✳</span><p>From a first launch to your next leap. <Link href="/services">Explore all our capabilities</Link></p></div>
        </section>

        <section id="selected-work" className="studio-work">
          <div className="studio-wrap">
            <div className="studio-workHead" data-rise><span className="studio-kicker">A FEW POSSIBLE FUTURES</span><h2>Made to <span className="studio-serif">make a difference.</span></h2><p>Original concept explorations. A glimpse of what we could build together.</p></div>
            <div className="studio-workGrid" data-rise><div className="studio-workList">{concepts.map((item, i) => <button key={item.name} onClick={() => setConcept(i)} aria-pressed={concept === i} className={`studio-workChoice ${concept === i ? "studio-workChosen" : ""}`}><span><small>{item.type}</small><strong>{item.name}</strong></span><span className="studio-workPlus">{concept === i ? <ArrowUpRight size={24} /> : <Plus size={22} />}</span></button>)}<Link href="/showcase" className="studio-workAll">Explore the showcase <span>View all concepts</span></Link></div>
              <div className="studio-workPreview" key={work.name}><div className="studio-workImage"><img src={work.image} alt={`${work.name} ${work.type.toLowerCase()} concept interface`} width="1000" height="700" /><span>CONCEPT EXPLORATION</span></div><div className="studio-workCaption"><p>{work.description}</p><div>{work.tags.map(t => <span key={t}>{t}</span>)}</div></div></div>
            </div>
          </div>
        </section>

        <section id="approach" className={`studio-approach studio-wrap`}>
          <div className="studio-sectionHead" data-rise><div><span className="studio-kicker">A PARTNERSHIP, NOT A HANDOFF</span><h2>From “what if”<br />to <span className="studio-serif">“it’s live.”</span></h2></div><p>Clear conversations. Tangible progress. A team that stays connected to the why behind the work.</p></div>
          <div className="studio-approachGrid" data-rise><div className="studio-stageList">{stages.map((item, i) => <div className={`studio-stage ${stage === i ? "studio-stageActive" : ""}`} key={item.title}><h3><button onClick={() => setStage(i)} aria-expanded={stage === i} aria-controls={`stage-panel-${i}`}><span>{['Discover', 'Design', 'Build', 'Launch'][i]}</span><span className="studio-stageTitle">{item.title}</span><Plus size={18} /></button></h3><div id={`stage-panel-${i}`} hidden={stage !== i}><p>{item.text}</p><div className="studio-chips">{item.chips.map(chip => <span key={chip}>{chip}</span>)}</div></div></div>)}</div>
            <div className="studio-processArt"><div className="studio-processTop"><span>THE SHAPE OF PROGRESS</span><span>✳</span></div><div className="studio-blueprint" key={stage}>{stages[stage].diagram.map((label, i) => <div className="studio-flowStep" key={label}><div className={i === 1 ? "studio-flowFocus" : ""}>{i === 1 ? <Sparkles size={22} /> : <span className="studio-flowNode" />}<strong>{label}</strong>{i === 2 && <Check size={16} />}</div>{i < 2 && <span className="studio-flowLine"><i /></span>}</div>)}</div><div className="studio-processBottom"><span>{stages[stage].label}</span><div>{stages.map((_, i) => <i className={stage === i ? "studio-progressOn" : ""} key={i} />)}</div></div></div>
          </div>
        </section>

        <RestoredSections />
        <section className="studio-invite">
          <div className="studio-wrap" data-rise><div className="studio-inviteTop"><span className="studio-kicker">BRING THE BIG IDEA. OR THE ROUGH SKETCH.</span><Sparkles size={24} /></div><h2>Let’s make<br /><span className="studio-serif">your next move.</span><span className="studio-inviteAsterisk" aria-hidden="true">✳</span></h2><div className="studio-inviteBottom"><p>A new website? A smarter system?<br />A problem you haven’t quite put into words?<br />We’d love to hear it.</p><Link href="/contact-us" className="studio-button">Start a conversation <span>✳</span></Link></div></div>
        </section>
        <footer className="studio-footer studio-wrap"><div className="studio-footerTop"><Link href="/" className="studio-brand"><img src="/sparshlogo_nav.svg" alt="Sparsh IT" width="132" height="44" /></Link><p>Independent minds.<br />Connected possibilities.</p><a href="mailto:info@sparshit.com">info@sparshit.com</a></div><div className="studio-footerBottom"><span>© 2026 Sparsh IT Private Limited.</span><nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/join-us">Careers</Link><Link href="/privacy-policy">Privacy</Link><Link href="/contact-us">Contact</Link></nav><a href="#home-content">Back to top ↑</a></div></footer>
      </div>
    </div>
  );
}
