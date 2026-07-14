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
  overview: string;
  motivation: string;
  contribution: string;
  technologies: string[];
  /** Headline figure pulled from the project's repository (under /public). */
  image: string;
  /** How the figure should sit in its frame. */
  imageFit?: "cover" | "contain";
  /** One-line headline metric / status badge. */
  metric?: string;
  links: {
    github?: string;
    demo?: string;
    paper?: string;
    paperLabel?: string;
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
  headline: "Building AI Systems That See, Think, and Reason",
  subtitle:
    "M.S. in Artificial Intelligence at Dongguk University. Research focused on Multimodal AI, Vision-Language Models, Visual Grounding, and Multimodal Reasoning.",
  photo: "/profile.jpeg",
  // EDIT: point this at your CV file in /public
  cv: "/MULTIMODAL_AI_ENGINEER_FlowCV_Resume_2026-07-14.pdf",
  availability: "M.S. in AI · Dongguk University · Seoul",
};

/* ----------------------------------------------------------------------------
 * About
 * ------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I'm an M.S. student in Artificial Intelligence at Dongguk University, advised by Prof. Jihie Kim. I work on multimodal AI, getting large language models and computer vision to cooperate so a system can reason about what it's looking at instead of just labeling it.",
    "Most detectors map pixels to a fixed set of labels. I'm more interested in models that can take an everyday request, work out what a person actually means, and turn that into the right detection, even when the object was never a training label.",
    "Day to day that means building datasets, training and evaluating models in PyTorch, and turning the research into things that actually run, from grounding frameworks to robotics and simulation.",
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
      "Building visual systems that people can actually talk to, using everyday language.",
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
    name: "See-Think-Detect (STD)",
    tagline: "Learning to Ground Like Humans",
    overview:
      "A cognitively inspired, three-stage referring-expression grounding pipeline — See & Think → Detect → Decide — built on a frozen open-vocabulary detector and a LoRA-adapted Qwen3-VL-8B backbone. Stage 1 predicts the target category and a structured semantic plan, Stage 2 proposes candidates with a frozen GroundingDINO, and Stage 3 reasons over the numbered candidates to select the referent.",
    motivation:
      "Humans don't localize a referring expression in one shot — they first plan what to look for (attributes, relations, ordinals), then compare candidates and decide. End-to-end detectors skip this reasoning, so they falter on spatial, ordinal, and functional queries.",
    contribution:
      "A semantic planner plus candidate-reasoning selector that reaches 85.3% Acc@0.5 on RefCOCOg-UMD validation and 86.01% on test — oracle-free (no ground-truth class) and with the detector kept frozen.",
    technologies: ["Qwen3-VL-8B", "LoRA", "GroundingDINO", "PyTorch", "RefCOCOg"],
    image: "/research/std-pipeline.jpg",
    imageFit: "contain",
    metric: "86.0% Acc@0.5 · RefCOCOg-UMD test",
    links: {
      paperLabel: "ACCV 2026 · Under Review — code private during review",
    },
  },
  {
    name: "Vague2Detect",
    tagline: "Handling Ambiguous Prompts in Open-World Detection",
    overview:
      "A hybrid open-world detection pipeline that interprets vague, functional prompts and grounds them into concrete detections. It combines Sentence-BERT for semantic grounding, a structured Knowledge Base for commonsense memory, YOLO-World for open-vocabulary detection, and a GPT fallback for unseen concepts.",
    motivation:
      "Real users describe objects by function — \"something to cut food with\" — not by class name. A detector needs commonsense to bridge that intent gap and still verify its guess visually.",
    contribution:
      "KB-guided semantic grounding with dynamic GPT expansion, a visual verification loop, and a new Vague Prompt Success Rate (VPSR) metric, benchmarked on ~1,000 household-object images. Accepted at AIComPS 2025.",
    technologies: ["Sentence-BERT", "YOLO-World", "GPT-3.5", "Knowledge Base"],
    image: "/research/v2d-arch.png",
    imageFit: "contain",
    metric: "AIComPS 2025 · Accepted",
    links: {
      github: "https://github.com/ibrohimgets/Vague2Detect",
      paperLabel: "AIComPS 2025 · Accepted",
    },
  },
  {
    name: "CommonsenseVision",
    tagline: "Commonsense-Guided Open-World Detection",
    overview:
      "An open-world detector that fuses YOLOv8, LLaVA scene description, Sentence-BERT intent embedding, GPT trait reasoning, and CLIP region matching to detect objects from a user's intent and scene context — even when the object was never in YOLO's label set.",
    motivation:
      "Prompting \"I need something to write with\" should surface a pen, even if \"pen\" was never a training label. That requires mapping intent to object traits and matching them against the actual scene.",
    contribution:
      "An intent → trait → region matching pipeline that filters candidate boxes with CLIP, LLaVA, and commonsense reasoning, extending detection beyond the closed label set. Accepted at ASK 2025 (KIPS).",
    technologies: ["YOLOv8", "CLIP", "LLaVA", "Sentence-BERT", "GPT"],
    image: "/research/cv-arch.png",
    imageFit: "contain",
    metric: "ASK 2025 (KIPS) · Accepted",
    links: {
      github: "https://github.com/ibrohimgets/CommonsenseVision",
      paperLabel: "ASK 2025 (KIPS) · Accepted",
    },
  },
  {
    name: "ThinkDet",
    tagline: "An MLLM-to-Detector Adapter for Ambiguous Grounding",
    overview:
      "A lightweight adapter that keeps GroundingDINO and InternVL frozen, extracts query-conditioned InternVL hidden states, compresses them into a few summary tokens via a trainable TMA block, and fuses them into GroundingDINO's decoder text memory through a zero-initialized, gated residual.",
    motivation:
      "Can the reasoning inside a multimodal LLM be injected into a frozen detector — without retraining the detector — to help on ambiguity-heavy, affordance-style prompts?",
    contribution:
      "A gated summary-token adapter that begins exactly equivalent to frozen GroundingDINO (alpha=0) and yields small, honest gains on a corrected affordance benchmark (16.99% → 17.77% hit@0.5). Core M.S. thesis study of the mechanism and its limits.",
    technologies: ["InternVL3.5", "GroundingDINO", "Cross-Attention", "PyTorch"],
    image: "/research/td-arch.png",
    imageFit: "contain",
    metric: "M.S. thesis · adapter study",
    links: {
      github: "https://github.com/ibrohimgets/thinkdet",
    },
  },
];

/* ----------------------------------------------------------------------------
 * See · Think · Detect — research philosophy (signature pipeline)
 * ------------------------------------------------------------------------- */

export type PipelineStep = {
  key: string;
  title: string;
  description: string;
};

export const pipeline: PipelineStep[] = [
  {
    key: "SEE",
    title: "See",
    description: "The model perceives the scene — objects, attributes, and layout.",
  },
  {
    key: "THINK",
    title: "Think",
    description:
      "Language reasoning interprets context and user intent, planning what to look for.",
  },
  {
    key: "DETECT",
    title: "Detect",
    description:
      "Reasoning guides accurate visual grounding and precise object localization.",
  },
];

/* ----------------------------------------------------------------------------
 * News
 * ------------------------------------------------------------------------- */

export type NewsItem = {
  date: string;
  tag: string;
  title: string;
};

export const news: NewsItem[] = [
  {
    date: "2026",
    tag: "Submission",
    title:
      "Submitted “Learning to Ground Like Humans” (See-Think-Detect) to ACCV 2026.",
  },
  {
    date: "Nov 2025",
    tag: "Accepted",
    title:
      "Paper “Vag2Det” accepted at AIComPS 2025 (Int'l Conference on AI Computing and Systems).",
  },
  {
    date: "May 2025",
    tag: "Accepted",
    title:
      "Paper “Commonsense-Guided Open-World Object Detection” accepted at ASK 2025 (KIPS).",
  },
  {
    date: "May 2025",
    tag: "Patent",
    title:
      "Filed Korean patent application (KIPO No. 10-2025-0070409) on knowledge-based open-world detection.",
  },
  {
    date: "Nov 2024",
    tag: "Research",
    title: "Joined ITRC at Dongguk University as a Machine Learning Researcher.",
  },
];

/* ----------------------------------------------------------------------------
 * Research timeline
 * ------------------------------------------------------------------------- */

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "Nov 2024",
    title: "Joined ITRC",
    description: "Began multimodal AI research at Dongguk University under Prof. Jihie Kim.",
  },
  {
    date: "Early 2025",
    title: "CommonsenseVision",
    description: "First commonsense-guided open-world detection framework.",
  },
  {
    date: "May 2025",
    title: "Patent Filed",
    description: "Korean patent application on knowledge-based open-world detection.",
  },
  {
    date: "Nov 2025",
    title: "Vag2Det",
    description: "Ambiguous-prompt detection accepted at AIComPS 2025.",
  },
  {
    date: "2026",
    title: "See-Think-Detect",
    description: "Cognitively inspired grounding — 86% Acc@0.5 on RefCOCOg-UMD test.",
  },
  {
    date: "2026",
    title: "ACCV Submission",
    description: "Submitted the See-Think-Detect framework to ACCV 2026.",
  },
];

/* ----------------------------------------------------------------------------
 * Conferences & community — photos from events I've attended
 * ------------------------------------------------------------------------- */

export type EventPhoto = {
  image: string;
  event: string;
  caption: string;
};

export const events: EventPhoto[] = [
  {
    image: "/events/ask2025-presenting.jpg",
    event: "ASK 2025 · Kyungpook National University, Daegu",
    caption:
      "Presenting our accepted paper at ASK 2025, the Annual Symposium of KIPS.",
  },
  {
    image: "/events/itrc-fair-2025.jpg",
    event: "ITRC Talent Development Fair 2025 · Seoul",
    caption:
      "With the ITRC research community at the 2025 ITRC Talent Development Fair (인재양성대전), hosted by the Ministry of Science and ICT.",
  },
  {
    image: "/events/ask2025-group.jpg",
    event: "ASK 2025 · Symposium session",
    caption: "With fellow researchers and session chairs at ASK 2025.",
  },
];

/* ----------------------------------------------------------------------------
 * Research gallery — real figures from the project repositories
 * ------------------------------------------------------------------------- */

export type GalleryItem = {
  image: string;
  caption: string;
  tag: string;
  fit?: "cover" | "contain";
};

export const gallery: GalleryItem[] = [
  {
    image: "/research/std-pipeline.jpg",
    caption: "See-Think-Detect: the full grounding pipeline.",
    tag: "Pipeline",
    fit: "contain",
  },
  {
    image: "/research/std-horse.jpg",
    caption: "Spatial grounding: numbered candidates on the left, the model's prediction (green) against ground truth (blue) on the right.",
    tag: "Grounding",
  },
  {
    image: "/research/std-giraffe.jpg",
    caption: "Ordinal reasoning: “the third giraffe from the left.”",
    tag: "Grounding",
  },
  {
    image: "/research/std-car.jpg",
    caption: "Attribute + relation with duplicate resolution: “black car behind bags of ice.”",
    tag: "Grounding",
  },
  {
    image: "/research/cv-arch.png",
    caption: "CommonsenseVision architecture: YOLOv8 · LLaVA · SBERT · GPT · CLIP.",
    tag: "Architecture",
    fit: "contain",
  },
  {
    image: "/research/v2d-arch.png",
    caption: "Vague2Detect architecture: SBERT · Knowledge Base · YOLO-World · GPT fallback.",
    tag: "Architecture",
    fit: "contain",
  },
  {
    image: "/research/td-arch.png",
    caption: "ThinkDet: query-conditioned InternVL features fused into a frozen GroundingDINO via a gated TMA adapter.",
    tag: "Architecture",
    fit: "contain",
  },
  {
    image: "/research/v2d-result.jpg",
    caption: "Vague prompt grounded to a concrete detection: “sink”.",
    tag: "Detection",
  },
  {
    image: "/research/td-compare.jpg",
    caption: "ThinkDet vs. baseline GroundingDINO on “tool to eat with”.",
    tag: "Comparison",
    fit: "contain",
  },
  {
    image: "/research/td-llm-probe.jpg",
    caption: "LLM semantic probe: “I need a tool to charge my phone” → the USB cable.",
    tag: "Reasoning",
    fit: "contain",
  },
  {
    image: "/research/td-attention.jpg",
    caption: "InternVL layer-20 token-norm attention conditioned on “knife”.",
    tag: "Attention",
    fit: "contain",
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
  { label: "Research", href: "#pipeline" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];
