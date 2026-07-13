/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH FOR THE PORTFOLIO
 * ============================================================================
 *  Everything the site renders — text, links, publications, projects, skills —
 *  lives in this one file. To update the portfolio, edit the values below;
 *  no component code needs to change.
 *
 *  Tip: search for "EDIT" comments to find the spots most likely to change
 *  (e.g. adding a repo link or a demo URL to a project).
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

export type Link = {
  label: string;
  href: string;
};

export type ResearchGroup = {
  title: string;
  description: string;
  topics: string[];
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  /** e.g. "Accepted", "Under Review", "Published" */
  status: "Accepted" | "Under Review" | "Published" | "Preprint";
  year: string;
  contribution: string;
  links?: {
    paper?: string;
    code?: string;
    project?: string;
  };
};

export type Patent = {
  title: string;
  authors: string[];
  office: string;
  applicationNumber: string;
  status: string;
  date: string;
  description: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  /** Local image under /public, or leave undefined for a generated placeholder. */
  image?: string;
  /** Accent glyph shown in the placeholder card art. */
  emoji?: string;
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
};

export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  advisor?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

/* ----------------------------------------------------------------------------
 * Site / SEO metadata
 * ------------------------------------------------------------------------- */

export const site = {
  name: "Ibrohimjon Muminov",
  title: "Multimodal AI Engineer",
  url: "https://ibrohimjon.com",
  domain: "ibrohimjon.com",
  description:
    "Ibrohimjon Muminov is a Multimodal AI Engineer and M.S. candidate in Artificial Intelligence at Dongguk University, researching how language reasoning and computer vision combine so AI can not only see but reason about what it sees.",
  keywords: [
    "Multimodal AI",
    "Vision-Language Models",
    "Large Language Models",
    "Visual Grounding",
    "Open-Vocabulary Object Detection",
    "Multimodal Reasoning",
    "AI Researcher",
    "Machine Learning Engineer",
    "Ibrohimjon Muminov",
  ],
  ogImage: "/og.png",
  locale: "en_US",
};

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

export const hero = {
  name: "Ibrohimjon Muminov",
  title: "Multimodal AI Engineer",
  summary:
    "M.S. candidate in Artificial Intelligence with research focused on Multimodal AI. My work combines language reasoning with computer vision to enable AI systems to not only see, but also reason about what they see — supporting more natural human–machine interaction.",
  photo: "/profile.jpg",
  // EDIT: point this at your CV file in /public
  cv: "/Ibrohimjon_Muminov_CV.pdf",
  availability: "M.S. in AI · Dongguk University · Seoul",
};

/* ----------------------------------------------------------------------------
 * About
 * ------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I am a Multimodal AI Engineer and researcher pursuing my M.S. in Artificial Intelligence at Dongguk University, advised by Prof. Jihie Kim. My research sits at the intersection of language and vision: I build systems that pair the reasoning ability of large language models with the perceptual grounding of computer vision.",
    "The goal of my work is to move beyond models that merely detect pixels toward models that understand intent — resolving natural, commonsense, and referring requests into precise visual decisions. This is the foundation for AI that collaborates with people through language rather than rigid commands.",
    "I design multimodal reasoning datasets, train and evaluate deep models in PyTorch, and translate research into working systems — from LLM-guided visual grounding frameworks to robotics and simulation pipelines.",
  ],
  highlights: [
    { label: "Current", value: "M.S. in Artificial Intelligence" },
    { label: "Institution", value: "Dongguk University, Seoul" },
    { label: "Advisor", value: "Prof. Jihie Kim" },
    { label: "Focus", value: "LLM reasoning × computer vision" },
  ],
};

/* ----------------------------------------------------------------------------
 * Research interests
 * ------------------------------------------------------------------------- */

export const researchGroups: ResearchGroup[] = [
  {
    title: "Multimodal Intelligence",
    description:
      "Fusing perception and language so models can interpret scenes the way people describe them.",
    topics: ["Vision-Language Models", "Visual Grounding", "Multimodal Reasoning"],
  },
  {
    title: "Language & Reasoning",
    description:
      "Using LLMs to plan, decompose, and reason over ambiguous instructions before acting.",
    topics: ["Large Language Models", "Semantic Planning", "Candidate Reasoning"],
  },
  {
    title: "Visual Perception",
    description:
      "Detecting and localizing objects from open-ended, natural-language descriptions.",
    topics: ["Language-Guided Computer Vision", "Open-Vocabulary Object Detection"],
  },
  {
    title: "Human-Centered AI",
    description:
      "Designing intelligent visual systems that interact naturally and helpfully with people.",
    topics: ["Human–Machine Interaction", "Intelligent Visual Systems"],
  },
];

/* ----------------------------------------------------------------------------
 * Publications & Patents
 * ------------------------------------------------------------------------- */

export const publications: Publication[] = [
  {
    title:
      "Learning to Ground Like Humans: Semantic Planning and Candidate Reasoning for Visual Grounding",
    authors: ["Ibrohimjon Muminov", "Jihie Kim"],
    venue: "ACCV 2026",
    status: "Under Review",
    year: "2026",
    contribution:
      "Introduces See-Think-Detect, a cognitively inspired visual grounding framework that resolves referring expressions through semantic planning and candidate comparison.",
    links: {
      // EDIT: add paper / code / project URLs when available
    },
  },
  {
    title:
      "Vag2Det: Handling Ambiguous Prompts in Knowledge-Based Open-World Detection",
    authors: ["Ibrohimjon Muminov", "Jihie Kim"],
    venue:
      "AIComPS 2025 — Int'l Conference on Artificial Intelligence Computing and Systems",
    status: "Accepted",
    year: "2025",
    contribution:
      "Resolves ambiguous natural-language prompts in knowledge-based open-world detection by grounding user intent before localization.",
    links: {},
  },
  {
    title:
      "Commonsense-Guided Open-World Object Detection Using LLMs and Visual-Semantic Matching",
    authors: ["Ibrohimjon Muminov", "Jihie Kim"],
    venue: "ASK 2025 — Annual Symposium of KIPS",
    status: "Accepted",
    year: "2025",
    contribution:
      "A multimodal framework combining language reasoning, visual-semantic matching, and object detection to identify objects from natural and commonsense user requests.",
    links: {},
  },
];

export const patents: Patent[] = [
  {
    title:
      "Open-World Object Detection Using a Knowledge-Based LLM and Visual-Semantic Matching",
    authors: ["Ibrohimjon Muminov", "Jihie Kim"],
    office: "Korean Intellectual Property Office (KIPO)",
    applicationNumber: "10-2025-0070409",
    status: "Filed · Pending",
    date: "Filed May 29, 2025",
    description:
      "A patented method for detecting open-world objects by combining knowledge-based LLM reasoning with visual-semantic matching to interpret user intent.",
  },
];

/* ----------------------------------------------------------------------------
 * Projects
 * ------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    name: "See-Think-Detect",
    tagline: "LLM-guided visual grounding with semantic planning and candidate reasoning",
    description:
      "A cognitively inspired grounding pipeline that reads a referring expression, plans the semantics of the request, compares candidate regions, and decides on the correct object — mirroring how humans resolve language into a visual target.",
    technologies: ["PyTorch", "LLMs", "VLMs", "GroundingDINO", "Visual Grounding"],
    emoji: "🎯",
    links: {
      // EDIT: replace with the project's own repo when public
      github: "https://github.com/ibrohimgets",
    },
  },
  {
    name: "CommonsenseVision",
    tagline: "Commonsense-guided open-world object detection",
    description:
      "An open-world detection framework that uses LLM commonsense and visual-semantic matching to find objects from natural, underspecified requests — detecting what a user means, not just what they literally name.",
    technologies: ["LLMs", "Open-Vocabulary Detection", "CLIP", "Visual-Semantic Matching"],
    emoji: "🧠",
    links: {
      github: "https://github.com/ibrohimgets",
    },
  },
  {
    name: "Robotics & Simulation",
    tagline: "Embodied perception in ROS 2, Gazebo, and NVIDIA Isaac Sim",
    description:
      "Bringing multimodal grounding into embodied agents: navigation, mapping, and language-guided perception stacks built and validated across ROS 2, Gazebo, and Isaac Sim with SLAM and Nav2.",
    technologies: ["ROS 2", "Nav2", "Gazebo", "NVIDIA Isaac Sim", "SLAM"],
    emoji: "🤖",
    links: {
      github: "https://github.com/ibrohimgets",
    },
  },
];

/* ----------------------------------------------------------------------------
 * Experience
 * ------------------------------------------------------------------------- */

export const experience: ExperienceItem[] = [
  {
    role: "AI Researcher / Multimodal AI Engineer",
    organization: "ITRC, Dongguk University",
    location: "Seoul, South Korea",
    period: "Nov 2024 – Present",
    current: true,
    bullets: [
      "Conduct research in Multimodal AI, LLMs, VLMs, visual grounding, and open-vocabulary object detection.",
      "Develop LLM-guided reasoning frameworks for visual understanding.",
      "Design multimodal reasoning datasets and training pipelines.",
      "Fine-tune and evaluate deep learning models using PyTorch.",
      "Contribute to conference papers and patent development.",
    ],
  },
  {
    role: "Frontend Developer (AI Applications)",
    organization: "iOyandasoz",
    location: "Dushanbe, Tajikistan",
    period: "Feb 2022 – Nov 2022",
    bullets: [
      "Built and maintained scalable web applications integrating AI-powered services for reliable, user-friendly experiences.",
      "Integrated backend APIs for data processing and ML inference, building responsive interfaces to visualize model outputs.",
    ],
  },
  {
    role: "Engineering Intern",
    organization: "Crocus Group",
    location: "Moscow, Russia",
    period: "Jun 2017 – Dec 2017",
    bullets: [
      "Worked with 2D/3D engineering drawings and CAD models, applying geometric reasoning and spatial analysis.",
      "Processed and analyzed complex industrial layout models using 3D spatial understanding and geometric transformations.",
    ],
  },
];

/* ----------------------------------------------------------------------------
 * Education
 * ------------------------------------------------------------------------- */

export const education: EducationItem[] = [
  {
    institution: "Dongguk University",
    degree: "M.S. in Artificial Intelligence",
    period: "Sep 2024 – Aug 2026",
    location: "Seoul, South Korea",
    gpa: "3.85 / 4.5",
    advisor: "Prof. Jihie Kim",
  },
  {
    institution: "Moscow Technological Institute",
    degree: "B.Eng. in Engineering",
    period: "Aug 2016 – Jun 2021",
    location: "Moscow, Russia",
    gpa: "4.1 / 5.0",
    advisor: "Prof. Leonid Ivanovich Munkhoev",
  },
];

/* ----------------------------------------------------------------------------
 * Skills
 * ------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Tools",
    skills: ["Python", "PyTorch", "Git", "Linux", "Docker"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "LLMs",
      "VLMs",
      "Multimodal AI",
      "Visual Grounding",
      "Open-Vocabulary Object Detection",
      "Reasoning Systems",
    ],
  },
  {
    title: "Robotics & Simulation",
    skills: ["ROS 2", "Nav2", "Gazebo", "NVIDIA Isaac Sim", "SLAM"],
  },
];

/* ----------------------------------------------------------------------------
 * Contact & socials
 * ------------------------------------------------------------------------- */

export const contact = {
  email: "ibrohimuminov@gmail.com",
  phone: "+82 10-7486-0095",
  location: "Yongsan-gu, Seoul, South Korea",
  github: "https://github.com/ibrohimgets",
  linkedin: "https://www.linkedin.com/in/ibrohim-muminov-775650259",
  website: "https://ibrohimjon.com",
};

export const socials: Link[] = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "Email", href: `mailto:${contact.email}` },
];

/* ----------------------------------------------------------------------------
 * Navigation
 * ------------------------------------------------------------------------- */

export const navItems: Link[] = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
