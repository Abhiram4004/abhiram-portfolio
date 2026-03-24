// ─── Portfolio Data ───────────────────────────────────────────────────────────
// Edit this file to customise every section of your portfolio.

export const personalInfo = {
  name: "Koduri Abhiram",
  title: "Machine Learning Engineer & Web Developer",
  email: "abhiramkoduri4004@gmail.com",
  phone: "+91-6301236157",
  linkedin: "https://linkedin.com/in/koduri-abhiram",
  github: "https://github.com/Abhiram4004",
  location: "Warangal, India",
  bio: `I am a Computer Science Engineering student currently pursuing my B.Tech at Lovely Professional University. I am deeply passionate about Machine Learning, Artificial Intelligence, and full-stack development. I enjoy tackling complex computational problems and building intelligent systems that can learn and adapt. Alongside AI, I love crafting modern, visually appealing, and highly responsive web applications. I am always eager to apply theoretical knowledge to practical, scalable solutions.`,
  roles: [
    "Machine Learning Engineer",
    "Web Developer",
    "B.Tech CSE Student",
  ],
  resumeUrl: "/Koduri_Abhiram_CV.pdf",
  avatar: "/assets/profile2.jpg",
};

export const technicalSkills = [
  { name: "Python / C++ / Java", level: 90, icon: "🖥️" },
  { name: "SQL / MySQL / MongoDB", level: 85, icon: "🛢️" },
  { name: "TensorFlow / PyTorch / Keras", level: 80, icon: "🤖" },
  { name: "Scikit-Learn / Pandas / NumPy", level: 88, icon: "📊" },
  { name: "React / JavaScript", level: 85, icon: "⚛️" },
  { name: "HTML / CSS", level: 90, icon: "🎨" },
  { name: "Docker / Colab / Jupyter", level: 80, icon: "🐳" },
  { name: "Flask / Streamlit", level: 80, icon: "🌶️" },
  { name: "Git & GitHub", level: 85, icon: "🐙" },
];

export const nonTechnicalSkills = [
  { name: "Problem Solving", level: 90, icon: "🧩" },
  { name: "Analytical Thinking", level: 85, icon: "🔎" },
  { name: "System Design", level: 75, icon: "🏗️" },
];

export const softSkills = [
  { name: "Communication", level: 85, icon: "🗣️" },
  { name: "Teamwork", level: 90, icon: "🤝" },
  { name: "Project Management", level: 80, icon: "📊" },
  { name: "Adaptability", level: 95, icon: "🔄" },
];

export const projects = [
  {
    id: 1,
    title: "AI-Driven Document Verification System",
    description: [
      "Developed an AI-driven document verification system to classify uploaded documents as Valid or Fake using machine learning models with automated OCR-based text extraction.",
      "Deployed a user-friendly end-to-end solution featuring real-time prediction, efficient data handling, and seamless integration for digital onboarding workflows.",
    ],
    tech: ["Python", "Machine Learning", "OCR", "Streamlit", "Flask"],
    liveUrl: "#",
    githubUrl: "https://github.com/Abhiram4004/ai-document-verification-system-.git",
    color: "from-[#222] to-[#111]",
    accent: "#ffffff",
  },
  {
    id: 2,
    title: "N-gram Autocomplete System",
    description: [
      "Developed a real-time autocomplete system using hierarchical N-gram language models (trigram, bigram, unigram) with punctuation-aware preprocessing for accurate next-word prediction.",
      "Implemented adaptive online learning to personalize predictions by dynamically reinforcing user-generated N-grams, enabling lightweight, low-latency text assistance.",
    ],
    tech: ["Python", "NLP", "NLTK", "Flask"],
    liveUrl: "https://autocomplete-coral.vercel.app",
    githubUrl: "https://github.com/Abhiram4004/Autocomplete.git",
    image: "/assets/autocomplete_demo2.png",
    color: "from-[#333] to-[#111]",
    accent: "#ff0000",
  },
  {
    id: 3,
    title: "Print Job Scheduling System",
    description: [
      "Designed and implemented a Print Job Scheduling System using C++ with priority-based job handling and optimized file management.",
      "Built a modern Streamlit interface enabling job submission, status tracking, and smooth interaction by integrating Python with backend logic.",
    ],
    tech: ["C++", "Streamlit", "Python"],
    liveUrl: "https://printqueuemanager-fpvrqyk2duk7tdgrnu63je.streamlit.app/",
    githubUrl: "https://github.com/Abhiram4004/PrintQueueManager.git",
    image: "/assets/printqueue_demo.png",
    color: "from-[#111] to-[#222]",
    accent: "#ffffff",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Advanced Data Structure",
    issuer: "LPU Skills",
    date: "July 2025",
    description: "Completed Advanced Data Structures training, focusing on priority queues, linked lists, and efficient algorithm design.",
    url: "https://drive.google.com/file/d/1EplhKv39JotNq0_JlJVHU6RedhZ5yg-L/view?usp=sharing",
    image: "/assets/certificates/lpu.png",
    accent: "#ffffff",
  },
  {
    id: 2,
    title: "freeCodecamp – Responsive Web Design",
    issuer: "freeCodecamp",
    date: "Sept 2023",
    description: "Developer Certification for Responsive Web Design.",
    url: "https://drive.google.com/file/d/1YSA8K52xlyRc2CHN-q-Efs0a_a3Ap68k/view?usp=sharing",
    image: "/assets/certificates/freecodecamp.png",
    accent: "#ff0000",
  },
  {
    id: 3,
    title: "AI Intern Certificate",
    issuer: "Edu Tantar Private Limited",
    date: "September 2025",
    description: "Certificate of internship completion as an AI Intern.",
    url: "https://drive.google.com/file/d/1mAaAKo6aqtwsgQlVhIJpG0EceuAw4QJx/view?usp=sharing",
    image: "/assets/certificates/edutantr.png",
    accent: "#ffffff",
  },
];

export const achievements = [
  {
    id: 1,
    year: "March 2024",
    title: "Code A Hunt Hackathon Level 1",
    description: "Qualified Level 1 in the “Code-A-Hunt” Hackathon Based on technical Evaluation Performance.",
    icon: "🏆",
    url: "https://drive.google.com/file/d/1o1nT-WxOCq6a2fHcU90F0bvlFgFviAOG/view?usp=sharing",
    accent: "#ffffff",
  },
  {
    id: 2,
    year: "Feb 2024",
    title: "CyberDrill: Cyber Security Workshop",
    description: "Participated in Cyber Security Workshop.",
    icon: "🛡️",
    url: "https://drive.google.com/file/d/1DWFYsG9nvV60OuvxH_JWv0tdJoqxR7IS/view?usp=sharing",
    accent: "#ff0000",
  },
  {
    id: 3,
    year: "July 2024",
    title: "Project on Farmers Crop Production Management",
    description: "Completed Community Development Project.",
    icon: "🌱",
    url: "https://drive.google.com/file/d/14a2SfGG9haCjJHb2WpLA6sRPCy-EI0tk/view?usp=sharing",
    accent: "#ffffff",
  },
];

export const education = [
  {
    id: 1,
    level: "University",
    institution: "Lovely Professional University (Phagwara, Punjab)",
    degree: "B.Tech Computer Science and Engineering",
    dateRange: "August 2023 - Present",
    description: "Focusing on core Computer Science subjects with a strong interest in Machine Learning, Artificial Intelligence, and Full-Stack Web Development.",
    gpa: "CGPA: 7.06",
    icon: "🎓",
    accent: "#ffffff",
  },
  {
    id: 2,
    level: "Intermediate",
    institution: "SR EDU Center (Subedari, Hanamkonda)",
    degree: "Intermediate",
    dateRange: "April 2021 - March 2023",
    description: "Pre-university education.",
    gpa: "Percentage: 92.7%",
    icon: "🏫",
    accent: "#ff0000",
  },
  {
    id: 3,
    level: "High School",
    institution: "Greenwood High School (Hunte Road, Warangal)",
    degree: "Matriculation",
    dateRange: "March 2020 - March 2021",
    description: "High school education.",
    gpa: "Percentage: 78%",
    icon: "🏫",
    accent: "#ffffff",
  },
];
