//  All required context is in this single file
export const site = {
  name: "Sadia Mehrin Rahi",
  initials: "Sadia",
  role: "Developer & AI Researcher",
  location: "Dhaka",
  email: "sadia.mehrin.rahi@gmail.com",
  //phone: "+8801700-000000",

  // CV — public/ folder 
  cvUrl: "/Sadia_Mehrin_Rahi_CV.pdf",

  // Research interests
  interests: [
    "Deep Learning for Cybersecurity & NIDS",
    "Explainable & Trustworthy AI",
    "Healthcare Cybersecurity & Threat Detection",
    "Malicious URL & Threat Detection",
  ],

  // Blog / Writing
  blog: [
    { title: "Understanding XSS in Depth: Practical Attacks & Analysis Using DVWA", outlet: "Cybersecurity Research Hub", year: "2026", url: "https://cms.cyberresearch.bubt.edu.bd/understanding-xss-in-depth-practical-attacks-and-analysis-using-dvwa/" },
  ],

  // deployed thesis app live link
  thesisDemoUrl: "https://sadiamehrinrahi-rt-deepnids.hf.space/",


  // public/ folder
  photo: "/profile.jpg",

  about: [
    "I'm Sadia, a Computer Science &amp; Engineering graduate from BUBT (<span class='accent'>3.71 CGPA</span>), a software developer with an active research focus. My work spans full-stack development and deep learning, from production-ready applications to deployed ML models.",
    "My thesis, RT-DeepNIDS, is a real-time hybrid network intrusion detection system built with a five-member team, alongside further work in ICU sepsis prediction, malicious-URL detection, and healthcare threat analysis. As a Student Researcher at the Cyber Security Research Hub, I have a published paper and several in progress, including one accepted at ML4CS 2026. Beyond research, I hold executive roles across the IEEE BUBT Student Branch and its WIE and RAS chapters.",
  ],
  now: "Extending my accepted healthcare-security paper (ML4CS 2026) for a CSI journal.",
  // Education
  education: [
    {
      school: "Bangladesh University of Business and Technology (BUBT)",
      degree: "B.Sc. in Computer Science & Engineering (Artificial Intelligence)",
      period: "Jul 2022 – Jun 2026",
      detail: "CGPA: 3.71 · Strong focus on AI and cybersecurity research.",
    },
  ],

  // Experience
  experience: [
    /*{
      role: "AI Model Trainer (Independent Contractor)",
      org: "Outlier",
      period: "Jul 2026 – Present · Remote",
      detail: "Engage in live conversations with speech-to-speech (S2S) AI models to assess response quality, applying structured rating criteria and documenting bilingual (Bangla–English) evaluation rationales to support model performance improvement.",
    },*/
    {
      role: "Full Stack Development Intern",
      org: "CodeAlpha",
      period: "Sep 2026 – Oct 2026 · Remote",
      detail: "Building responsive, end-to-end web applications across the front-end and back-end using the MERN stack.",
    },
    {
      role: "Student Researcher",
      org: "Cyber Security Research Hub, BUBT",
      period: "Jan 2026 – Present",
      detail: "Conduct applied research on deep learning for network intrusion detection, malicious-URL classification, and healthcare threat analysis. Build, evaluate, and deploy ML models, and co-author academic publications.",
    },
  ],

  // Skills 
  skillGroups: [
    {
      icon: "web",
      title: "Web Development",
      items: ["React", "Express.js", "Node.js", "JavaScript", "MongoDB", "MySQL", "Firebase", "HTML/CSS", "Bootstrap"],
      relatedLabel: "ShopNex platform",
      relatedLink: "#",
    },
     {
      icon: "design",
      title: "Design & Tools",
      items: ["Figma", "Canva", "Draw.io", "Git", "GitHub"],
      relatedLabel: "ShopNex UI",
      relatedLink: "#",
    },
    {
      icon: "ml",
      title: "AI / ML & Data Science",
      items: ["Python", "TensorFlow/Keras", "scikit-learn", "XGBoost", "Pandas", "NumPy", "SHAP", "Streamlit"],
      relatedLabel: "RT-DeepNIDS thesis",
      relatedLink: "https://sadiamehrinrahi-rt-deepnids.hf.space/",
    },
    {
      icon: "security",
      title: "Deep Learning & Security",
      items: ["LSTM", "BERT", "Graph Learning", "CNN+Transformer", "Focal Loss", "Explainable AI"],
      relatedLabel: "Malicious URL Detection",
      relatedLink: "#",
    },
  ],

  // Projects
  projects: [
    { name: "RT-DeepNIDS (Thesis)", desc: "Real-time hybrid network intrusion detection for IT & IoT, Streamlit + Scapy app with live packet capture, SHAP explainability, and a dual-pipeline training strategy across 5 model architectures.", tags: "XGBoost · CNN+Transformer · SHAP · Streamlit", metric: "99.94% accuracy", link: "https://sadiamehrinrahi-rt-deepnids.hf.space/", github: "https://github.com/sanjida-khanom/RT-DeepNIDS-A-Real-Time-Hybrid-Network-Intrusion-Detection-System-for-IT-and-IoT-Environments" },
    { name: "Explainable Sepsis Prediction", desc: "Deep Attention-LSTM predicting ICU sepsis 6 hours before clinical onset (PhysioNet 2019), using focal loss for imbalance.", tags: "Deep Learning · LSTM · Focal Loss", metric: "6h early warning", link: "#", github: "" },
    { name: "Malicious URL Detection", desc: "Two-stage hierarchical graph learning framework for cyber-threat classification.", tags: "Graph Learning · Cybersecurity", metric: "98.91% accuracy", link: "#", github: "" },
    { name: "ShopNex", desc: "Full-stack e-commerce platform with React, Express.js, and SSLCommerz payment integration. Responsive UI designed in Figma.", tags: "React · Express.js · Figma", metric: "Full-stack", link: "#", github: "https://github.com/SadiaMehrinRahi/ShopNex" },
    { name: "MediSync Healthcare App", desc: "Mobile healthcare app built with Android Studio and Java to manage patient information and streamline healthcare services.", tags: "Android · Java · Healthcare", metric: "Mobile app", link: "#", github: "https://github.com/ayesha099-git/sdp300-project" },
    { name: "3D Smart City Simulation", desc: "Urban infrastructure simulation built with Python and PyOpenGL for city-planning visualisation.", tags: "Python · PyOpenGL", metric: "3D / OpenGL", link: "#", github: "" },
  ],

  // Publication summary stats (shown above the list)
  pubStats: [
    { num: "4", label: "Papers" },
    { num: "1", label: "Published" },
    { num: "2", label: "Accepted" },
    { num: "1", label: "In progress" },
  ],

  publications: [
    { title: "From Vulnerability Catalogues to Adversary Behaviour: A Reproducible, Evidence-Graded Mapping Pipeline Across CVE, CWE, ATT&CK and ATLAS for Healthcare Cyber Defence", venue: "CSI Journal · In progress", year: "2026", link: "" },
    { title: "A Decade of Healthcare Cyber Threats: Empirical Analysis, Evidence-Based Prioritisation, and AI Threat Model", venue: "ML4CS 2026 (Springer) · Accepted", year: "2026", link: "" },
    { title: "A Hierarchical Multi-View Graph Learning Framework for Malicious URL Detection", venue: "IEEE SPICSCON 2026 · Accepted", year: "2026", link: "" },
    { title: "Optical Conveyance of Audio Signals: Pioneering Li-Fi Technology for High-Fidelity Data Transmission", venue: "Journal of Energy Engineering and Thermodynamics · Published", year: "2024", link: "" },  ],

  // Certifications & Awards
  certifications: [
    // course completion certificate
    { title: "Full-stack web development (MERN)", issuer: "Ostad", year: "2025", certUrl: "https://..." },
  ],

  // Leadership & Volunteering 
  leadership: [
    { role: "Joint General Secretary", org: "IEEE BUBT Student Branch", year: "Nov 2025 – Aug 2026", certUrl: "" },
    { role: "General Secretary", org: "IEEE BUBT WIE Affinity Group", year: "Jun 2025 – Aug 2026", certUrl: "https://drive.google.com/file/d/1YBTDtXHme0woFIgUNi6hnmmEZwbGWdS6/view?usp=drive_link" },
    { role: "Joint General Secretary", org: "IEEE RAS BUBT Chapter", year: "Aug 2025 – Aug 2026", certUrl: "" },
    { role: "Event-Coordinator (In-Charge)", org: "IEEE BUBT Student Branch", year: "Jan 2024 – May 2025", certUrl: "https://drive.google.com/file/d/143IpsFODAFzgRVxi0gLMsAMVos1JuLRl/view?usp=drive_link" },
    { role: "Content Writer", org: "IEEE BUBT Student Branch", year: "Jan 2023 – Jan 2024", certUrl: "https://drive.google.com/file/d/14XO2_yyYfL5EDVxJ_WCf2H7rlPLodqeJ/view?usp=drive_link" },
  ],

  // Extracurricular / Volunteering 
  volunteering: [
    { role: "Member", org: "IEEE Young Professionals", year: "2026", certUrl: "https://drive.google.com/file/d/1-Q9w2p6qT-6kKhzzRVo-fPylB1vyrPkL/view?usp=drive_link" },
    { role: "Technical Team", org: "ICPC Asia Dhaka Regional Contest 2025, BUBT", year: "Dec 2025", certUrl: "" },
    { role: "Reception & Registration Assistant", org: "BIUCPC 2025, BUBT", year: "Nov 2025", certUrl: "" },
    { role: "Reception & Registration Assistant", org: "AI Olympiad 2025", year: "May 2025", certUrl: "" },
    { role: "Gaming Activities Coordinator", org: "ICPC Asia Dhaka Regional Contest 2023, BUBT", year: "Oct 2023", certUrl: "https://drive.google.com/file/d/1_OeHNunUEGmuFtx-HINADQJ0vJhF2HKM/view?usp=drive_link" },
  ],

  blogUrl: "https://cms.cyberresearch.bubt.edu.bd/understanding-xss-in-depth-practical-attacks-and-analysis-using-dvwa/",  // <-- তোমার blog এর link এখানে বসাও

  socials: [
    { label: "GitHub", href: "https://github.com/SadiaMehrinRahi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sadiamehrinrahi/" },
    { label: "ResearchGate", href: "https://www.researchgate.net/profile/Sadia-Rahi-2?ev=hdr_xprf" },     // <-- তোমার ResearchGate profile link
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=mkaPiNQAAAAJ&hl=en" },   // <-- তোমার Google Scholar profile link
    { label: "Blog", href: "https://cms.cyberresearch.bubt.edu.bd/understanding-xss-in-depth-practical-attacks-and-analysis-using-dvwa/" },             // <-- তোমার blog link (blogUrl এর সাথে মিলিয়ে)
  ],
};
