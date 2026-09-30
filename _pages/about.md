---
layout: home
portfolio_shell: true
permalink: /
title: "Stanley Chow"
description: "Mathematics and Computer Science at HKU. Projects, research, and writing on recommendation systems, search, machine learning, and applied mathematics."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<header class="home-hero">
  <div class="home-hero__copy">
    <p class="home-pill">Mathematics × Computer Science</p>
    <h1>Stanley Chow<span class="home-hero__dot">.</span></h1>
    <p class="home-hero__subtitle">Mathematics student at the University of Hong Kong</p>
    <p class="home-hero__intro">I work on recommendation systems, search, and inverse problems. This is where I share what I build, what I learn, and how I test ideas.</p>
    <div class="home-actions">
      <a class="home-button home-button--primary" href="{{ '/files/CV.pdf' | relative_url }}">Download CV <span aria-hidden="true">↓</span></a>
      <a class="home-button" href="#selected-work">Explore my work</a>
      <a class="home-button" href="#writing">Read &amp; reflect</a>
    </div>
    <div class="home-socials" aria-label="Contact and profiles">
      <a href="mailto:{{ site.author.email }}">Email</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a>
      <span>Hong Kong</span>
    </div>
  </div>
  <div class="home-hero__portrait">
    <img src="{{ '/images/profile.jpg' | relative_url }}" alt="Stanley Chow" width="320" height="320" fetchpriority="high">
  </div>
</header>

<section class="home-feature" aria-labelledby="home-feature-title">
  <div class="home-feature__copy">
    <p class="home-eyebrow">Research in motion · HKU Summer Research Fellowship</p>
    <h2 id="home-feature-title">Finding a hidden<br class="home-desktop-break"> heat source.</h2>
    <p>Heat spreads and blurs a source’s shape. Can we work backwards from the temperature to find where it came from?</p>
    <p>Watch three models tackle the same problem—and see why the examples a small model learns from matter.</p>
    <a class="home-text-link" href="{{ '/research/#heat-source-demo' | relative_url }}">Watch the 34-second demo <span aria-hidden="true">↗</span></a>
  </div>
  <a class="home-feature__visual" href="{{ '/research/#heat-source-demo' | relative_url }}" aria-label="Watch the 34-second heat-source research demo">
    <img src="{{ '/assets/media/srf-heat-demo/thumbnail.jpg' | relative_url }}" alt="Three models reconstruct a letter-shaped heat source from temperature measurements" width="1920" height="1080" loading="lazy">
    <span class="home-play-badge"><span aria-hidden="true">▶</span> 34 seconds · No audio</span>
  </a>
</section>

<div class="home-background">
  <section aria-labelledby="experience-title">
    <div class="home-section-heading">
      <h2 id="experience-title">Research experience</h2>
      <a href="{{ '/research/' | relative_url }}">Research overview <span aria-hidden="true">↗</span></a>
    </div>
    <ol class="home-timeline">
      <li>
        <div class="home-timeline__heading"><h3>HKU Summer Research Fellowship</h3><span>2026</span></div>
        <p class="home-item-meta">Faculty of Science · Supervisor: Prof. Zhiwen Zhang</p>
        <p>I study how to reconstruct a hidden heat source, how to judge its recovered shape, and when a reduced model can make the computation faster.</p>
        <a class="home-text-link" href="{{ '/research/parabolic-inverse-source/' | relative_url }}">Explore the research <span aria-hidden="true">→</span></a>
      </li>
      <li>
        <div class="home-timeline__heading"><h3>Urban rail network optimization</h3><span>2023</span></div>
        <p class="home-item-meta">Independent research · S.-T. Yau High School Science Award recognition</p>
        <p>I modeled rail routes under geometric and engineering constraints, combining analytical optimization with Particle Swarm Optimization.</p>
      </li>
    </ol>
  </section>
  <section aria-labelledby="education-title">
    <div class="home-section-heading"><h2 id="education-title">Education</h2></div>
    <div class="home-education">
      <article>
        <span class="home-school-mark" aria-hidden="true">HKU</span>
        <div><h3>The University of Hong Kong</h3><p>BSc in Mathematics · Expected May 2028</p><p class="home-item-meta">Second Major in Computer Science<br>Minor in Finance · GPA 3.98 / 4.30</p></div>
      </article>
      <article>
        <span class="home-school-mark home-school-mark--neutral" aria-hidden="true">UCLA</span>
        <div><h3>University of California, Los Angeles</h3><p>Exchange study in Mathematics</p><p class="home-item-meta">2025–2026</p></div>
      </article>
      <article>
        <span class="home-school-mark home-school-mark--neutral" aria-hidden="true">SU</span>
        <div><h3>Stanford University</h3><p>International Honors Program</p><p class="home-item-meta">Summer 2025</p></div>
      </article>
    </div>
  </section>
</div>

<section class="home-section" id="selected-work" aria-labelledby="projects-title">
  <div class="home-section-heading"><h2 id="projects-title">Selected projects</h2><a href="{{ '/projects/' | relative_url }}">All projects <span aria-hidden="true">↗</span></a></div>
  <div class="home-project-grid">
    <article class="home-project-card">
      <p class="home-eyebrow">Recommendation systems</p>
      <h3><a href="{{ '/projects/#hm-two-stage-personalized-recommendation-system' | relative_url }}">Personalized recommendations for H&amp;M</a></h3>
      <p>From millions of shopping transactions to a ranked shortlist: a two-stage system combining nine retrieval channels with a learned ranking model.</p>
      <p class="home-project-fact">31.8 million transaction events</p>
      <div class="home-project-footer"><span>Python · PyTorch · LightGBM</span><a href="https://github.com/Stanley-Chow/hm-2stage-recommender" aria-label="H and M recommender repository">Code <span aria-hidden="true">↗</span></a></div>
    </article>
    <article class="home-project-card">
      <p class="home-eyebrow">Search &amp; software engineering</p>
      <h3><a href="{{ '/projects/#docuquest-agent' | relative_url }}">DocuQuest Agent</a></h3>
      <p>A document question-answering system with a C++ search layer. I built the indexing and retrieval logic, with deterministic tests that run without API credentials.</p>
      <p class="home-project-fact">Custom index · Reproducible tests</p>
      <div class="home-project-footer"><span>C++17 · CMake · LLM APIs</span><a href="https://github.com/Stanley-Chow/docuquest-agent" aria-label="DocuQuest Agent repository">Code <span aria-hidden="true">↗</span></a></div>
    </article>
    <article class="home-project-card">
      <p class="home-eyebrow">Machine learning</p>
      <h3><a href="{{ '/projects/#behavioral-personality-analytics' | relative_url }}">Behavioral personality analytics</a></h3>
      <p>A study of how behavioral features predict personality outcomes, with careful separation of model selection and final evaluation.</p>
      <p class="home-project-fact">381 configurations · Generated-data study</p>
      <div class="home-project-footer"><span>Python · scikit-learn · pandas</span><a href="https://github.com/Stanley-Chow/behavioral-personality-analytics" aria-label="Behavioral personality analytics repository">Code <span aria-hidden="true">↗</span></a></div>
    </article>
  </div>
</section>

<section class="home-section home-writing" id="writing" aria-labelledby="writing-title">
  <div class="home-section-heading"><h2 id="writing-title">Writing &amp; exploration</h2><a href="{{ '/writing/' | relative_url }}">Writing space <span aria-hidden="true">↗</span></a></div>
  <p class="home-section-intro">A place for the thinking behind the work: ideas, experiments, and lessons that don’t fit neatly into a project summary.</p>
  {% include writing-cards.html limit=3 %}
</section>

<section class="home-section" aria-labelledby="interests-title">
  <div class="home-section-heading"><h2 id="interests-title">What I work with</h2></div>
  <div class="home-skills">
    <details><summary>Recommendation &amp; search</summary><p>Candidate retrieval, collaborative filtering, two-tower models, LightGCN, LambdaRank, negative sampling, and temporal validation.</p></details>
    <details><summary>Machine learning &amp; data</summary><p>Python, SQL, PyTorch, LightGBM, XGBoost, scikit-learn, pandas, NumPy, SciPy, and DuckDB.</p></details>
    <details><summary>Mathematics &amp; engineering</summary><p>C++, MATLAB, numerical optimization, partial differential equations, experiment design, Git, CMake, Jupyter, and LaTeX.</p></details>
  </div>
</section>

<section class="home-contact" aria-labelledby="contact-title">
  <div><p class="home-eyebrow">Let’s connect</p><h2 id="contact-title">Have an idea worth exploring?</h2><p>I’m open to internship and research opportunities in recommendation, search, machine learning, and applied mathematics.</p></div>
  <a class="home-button home-button--primary" href="mailto:{{ site.author.email }}">Get in touch <span aria-hidden="true">↗</span></a>
</section>
