export default function About() {
  return (
    <main id="main" className="page about-page">
      <div className="about-layout">
        <img className="portrait" src="/ianku/Ian_KU_hs.jpg" alt="Ian Ku" />
        <div className="about-content">
          <h1 tabIndex="-1">Ian Ku</h1>
          <p className="about-role">
            Software engineer · computer science & AI
          </p>
          <p>
            I build software across AI applications, real-time systems, and
            research tools. I’m interested in the engineering behind intelligent
            systems: how models connect to tools, how state moves through a
            workflow, and how an implementation behaves beyond the first
            successful demo.
          </p>
          <p>
            My projects range from agent-driven email workflows and concurrent
            scheduling to image annotation and software for research studies.
            This archive brings the implementation, context, and limitations of
            that work into one place.
          </p>
          <section className="about-section">
            <h2>Education</h2>
            <dl className="about-list">
              <div>
                <dt>2021–2023</dt>
                <dd>
                  <strong>University of California, Irvine</strong>
                  <span>B.S. Computer Engineering</span>
                </dd>
              </div>
            </dl>
          </section>
          <section className="about-section">
            <h2>Selected experience</h2>
            <dl className="about-list">
              <div>
                <dt>2025</dt>
                <dd>
                  <strong>Inflow</strong>
                  <span>Founder & founding engineer</span>
                </dd>
              </div>
              <div>
                <dt>2024–2025</dt>
                <dd>
                  <strong>Ulendo Technologies</strong>
                  <span>Software engineer</span>
                </dd>
              </div>
              <div>
                <dt>2022–2024</dt>
                <dd>
                  <strong>UCI MIND</strong>
                  <span>Software programmer</span>
                </dd>
              </div>
              <div>
                <dt>2023</dt>
                <dd>
                  <strong>Ansys</strong>
                  <span>Software developer — meshing intern</span>
                </dd>
              </div>
              <div>
                <dt>2022–2023</dt>
                <dd>
                  <strong>Kheradvar Research Group</strong>
                  <span>Full stack developer researcher</span>
                </dd>
              </div>
            </dl>
          </section>
          <section className="about-section">
            <h2>Links</h2>
            <dl className="about-list contact-links">
              <div>
                <dt>CV / résumé</dt>
                <dd>
                  <a href="/ianku/resume.pdf" target="_blank" rel="noreferrer">
                    Download PDF
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:iankuyisien@gmail.com">
                    iankuyisien@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a
                    href="https://github.com/iankuys"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/iankuys
                  </a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a
                    href="https://linkedin.com/in/ian-ku-yi-sien/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ian-ku-yi-sien
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </main>
  );
}
