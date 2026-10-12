export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; note: string; icon: string }[];
}

export interface StudentProject {
  id: string;
  title: string;
  gradeBand: string;
  platform: string;
  description: string;
  learningOutcomes: string[];
  techStack: string[];
  image: string;
  badge: string;
}

export interface GradeCurriculum {
  band: string;
  grades: string;
  ages: string;
  focus: string;
  description: string;
  tools: string[];
  keyMilestones: string[];
  sampleProject: string;
}

export const PERSONAL_INFO = {
  name: 'Aishwarya Gowda S R',
  role: 'Senior Coding Instructor & STEM Educator',
  subRoles: [
    'Online Coding Instructor (Grades 1–12)',
    'STEM Curriculum & Lesson Designer',
    'Python & Block-Based Coding Mentor',
    'AI/ML for Kids & App Inventor Specialist',
  ],
  tagline: 'Empowering young minds from Grades 1–12 with computational thinking, creativity, and real-world coding skills through engaging, project-based virtual classrooms.',
  availability: 'Available for Online Classes, 1-on-1 Mentorship & Curriculum Consultation',
  email: 'aishwaryagowda227@gmail.com',
  phone: '+91 83105 89119',
  location: 'Mysuru, Karnataka, India 570023',
  linkedin: 'https://www.linkedin.com/in/aishwarya-s-r-2806aa17b',
  codingal: 'https://www.codingal.com/@aishwaryagsr219/',
  avatar: '/aishwarya_profile.jpg',
  yearsExperience: '8+ Years',
  studentsTaught: '1,200+',
  classesDelivered: '4,500+',
  codingalClasses: '1,934+',
  codingalRating: '4.9 Rating',
  retentionRate: '98%',
  aboutStory: `I am an experienced Coding Instructor with over 8 years of online teaching experience, dedicated to making programming intuitive, exciting, and empowering for students across Grades 1 to 12. My teaching covers a wide spectrum from visual block coding (Scratch, Code.org, EduBlocks, MIT App Inventor, Thunkable, and AI/ML for Kids) to text-based syntax (Python, Java, HTML5, CSS3, and JavaScript).

I believe coding is not just about syntax - it is a superpower for logical reasoning, resilience, and creative expression. By connecting theoretical concepts to hands-on game design, mobile app building, and real-world simulations, I help students transition from passive technology consumers into confident digital creators.

As an empathetic educator and strong communicator, I work closely with parents through structured progress tracking and regular Parent-Teacher Meetings (PTMs) to foster an inclusive, motivating learning journey tailored to each child's unique pace and curiosity.`,
  stats: [
    { label: 'Teaching Experience', value: '8+ Years' },
    { label: 'Student Age Range', value: 'Grades 1–12' },
    { label: 'Coding Platforms', value: '10+ EdTech' },
    { label: 'Parent Retention', value: '98%' },
  ],
};

export const CORE_COMPETENCIES = [
  'Online Coding Instruction',
  'STEM Education',
  'Curriculum & Lesson Planning',
  'Student Engagement',
  'Computational Thinking',
  'Project-Based Learning',
  'Classroom Management',
  'Parent Communication',
  'Student Progress Assessment',
  'Educational Technology',
  'Cross-Cultural Communication',
];

export const TECHNICAL_SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95, note: 'Turtle graphics, OOP, algorithmic logic, data structures', icon: 'FileCode' },
      { name: 'Java', level: 88, note: 'Foundational syntax, classes, methods, problem solving', icon: 'Code' },
      { name: 'JavaScript', level: 88, note: 'Interactive web scripting, DOM, event handling', icon: 'Cpu' },
      { name: 'HTML5 & CSS3', level: 92, note: 'Semantic structure, styling, flexbox, kid-friendly web design', icon: 'Layout' },
    ],
  },
  {
    title: 'Coding Platforms & EdTech',
    skills: [
      { name: 'Scratch 3.0 & Scratch Jr', level: 98, note: 'Block logic, animation, game physics, broadcasts', icon: 'Blocks' },
      { name: 'Code.org', level: 95, note: 'Hour of Code, CS Fundamentals, Express Courses, App Lab', icon: 'Terminal' },
      { name: 'MIT App Inventor', level: 94, note: 'Mobile apps, sensors, cloud DB, block architecture', icon: 'Smartphone' },
      { name: 'Thunkable', level: 92, note: 'Cross-platform native apps, API integrations, UX design', icon: 'Smartphone' },
      { name: 'AI/ML for Kids', level: 90, note: 'Image/text model training, machine learning scratch blocks', icon: 'Sparkles' },
      { name: 'EduBlocks & Python Turtle', level: 92, note: 'Visual-to-text bridge, mathematical geometric art', icon: 'PenTool' },
    ],
  },
  {
    title: 'Virtual Teaching & EdTech Tools',
    skills: [
      { name: 'Virtual Classrooms', level: 96, note: 'Google Classroom, Google Meet, Zoom, Microsoft Teams', icon: 'Video' },
      { name: 'Development Tools', level: 90, note: 'Visual Studio Code, Replit, Python IDLE', icon: 'Laptop' },
      { name: 'Productivity Suites', level: 95, note: 'Google Workspace, Microsoft Office Suite', icon: 'FileText' },
    ],
  },
];

export const PROFESSIONAL_EXPERIENCE = [
  {
    id: 'codingal',
    role: 'Coding Instructor',
    company: 'Codingal',
    duration: 'Mar 2025 – Present',
    status: 'Present',
    type: 'Full-time / Lead Online Instructor',
    location: 'Virtual Classroom (Global & India)',
    highlight: 'Grades 1–12 Live Personalized Coding & STEM Mentorship',
    profileUrl: 'https://www.codingal.com/@aishwaryagsr219/',
    stats: {
      classesTaught: '1,934+',
      studentsTaught: '253+',
      rating: '4.9 / 5.0 (1,632+ Reviews)',
      punctuality: '99.8%',
      countries: '20+ Countries',
    },
    responsibilities: [
      'Deliver live online coding classes to students from Grades 1–12, adapting lessons to diverse learning styles and abilities.',
      'Teach Scratch, Python, HTML, CSS, JavaScript, Java, Code.org, MIT App Inventor, Thunkable, AI/ML for Kids, EduBlocks, and Python Turtle through engaging, project-based learning.',
      'Design interactive coding projects that strengthen computational thinking, logical reasoning, creativity, and problem-solving skills.',
      'Develop personalized lesson plans based on individual learning goals and academic progress.',
      'Conduct Parent-Teacher Meetings (PTMs), providing constructive feedback and actionable learning plans.',
      'Foster an engaging and inclusive virtual classroom environment, contributing to high student retention and satisfaction.',
    ],
    techStack: [
      'Python',
      'Scratch',
      'Java',
      'MIT App Inventor',
      'Thunkable',
      'AI/ML for Kids',
      'HTML/CSS',
      'JavaScript',
      'Code.org',
    ],
  },
  {
    id: 'byjus-futureschool',
    role: 'Coding Instructor',
    company: "BYJU'S FutureSchool (WhiteHat Jr)",
    duration: 'Jul 2021 – Feb 2025',
    status: '3 yrs 8 mos',
    type: 'Senior Online Coding Educator',
    location: 'Virtual Classroom (India & International Markets)',
    highlight: 'Global Virtual Instruction Across India, US, UK, Australia & UAE',
    responsibilities: [
      'Delivered live online coding classes to students across India and international markets.',
      'Taught Scratch, Python, HTML, CSS, JavaScript, and foundational programming concepts using project-based learning.',
      'Customized lessons to accommodate different learning styles and skill levels from elementary to high school.',
      'Guided students from beginner to advanced programming through hands-on, end-to-end projects.',
      'Maintained high student engagement through interactive teaching strategies and continuous progress monitoring.',
      'Collaborated with parents to discuss student development and recommend tailored learning pathways.',
    ],
    techStack: [
      'Scratch',
      'Python',
      'JavaScript',
      'HTML5/CSS3',
      'Block Logic',
      'Game Design',
      'STEM Pedagogy',
    ],
  },
];

export const EDUCATION_DATA = [
  {
    id: 'mba',
    degree: 'Master of Business Administration (MBA)',
    specialization: 'Supply Chain Management',
    institution: 'B.N. Bahadur Institute of Management Sciences, Mysuru',
    location: 'Mysuru, Karnataka, India',
    period: 'Post-Graduate Degree',
    description: 'Developed advanced organizational leadership, project coordination, and structured communication methodologies that enhance student retention and institutional parent coordination.',
  },
  {
    id: 'be-eee',
    degree: 'Bachelor of Engineering (B.E.)',
    specialization: 'Electrical & Electronics Engineering',
    institution: 'GSSS Institute of Engineering & Technology for Women, Mysuru',
    location: 'Mysuru, Karnataka, India',
    period: 'Undergraduate Engineering Degree',
    description: 'Built a rigorous engineering mindset, circuit logic, systems thinking, and computational foundations that translate complex technical concepts into intuitive lessons for young learners.',
  },
];

export const LANGUAGES_DATA = [
  { language: 'English', proficiency: 'Professional Working Proficiency', level: '100%' },
  { language: 'Kannada', proficiency: 'Native Speaker', level: '100%' },
  { language: 'Hindi', proficiency: 'Conversational', level: '85%' },
];

export const GRADE_CURRICULA: GradeCurriculum[] = [
  {
    band: 'Grades 1 – 4',
    grades: 'Grades 1–4',
    ages: 'Ages 6 – 9',
    focus: 'Visual Logic, Storytelling & Block Mechanics',
    description: 'Students explore sequences, loops, conditions, and animations using drag-and-drop visual blocks without typing friction.',
    tools: ['Scratch Jr', 'Scratch 3.0', 'Code.org', 'EduBlocks'],
    keyMilestones: [
      'Understanding sequencing and coordinate axes (X, Y)',
      'Creating interactive animated storybooks',
      'Building arcade games with sprite collision and score counters',
      'Deconstructing problems into step-by-step logic',
    ],
    sampleProject: 'Space Dodger Arcade: Collision physics, health meter, and sound triggers',
  },
  {
    band: 'Grades 5 – 8',
    grades: 'Grades 5–8',
    ages: 'Ages 10 – 13',
    focus: 'Mobile App Architecture, AI Basics & Syntax Bridge',
    description: 'Students graduate to smartphone apps, machine learning models, and transitional block-to-Python text syntax.',
    tools: ['MIT App Inventor', 'Thunkable', 'AI/ML for Kids', 'Python Turtle'],
    keyMilestones: [
      'Designing functional mobile apps using phone sensors and camera',
      'Training machine learning models to detect images and sentiment',
      'Mathematical geometric art using Python Turtle and for-loops',
      'Introduction to variables, arrays, and conditional branches',
    ],
    sampleProject: 'Emergency Alert & Compass App built in MIT App Inventor',
  },
  {
    band: 'Grades 9 – 12',
    grades: 'Grades 9–12',
    ages: 'Ages 14 – 18',
    focus: 'Full Text Syntax, Data Structures & Real-World Projects',
    description: 'High school learners master industry languages like Python, Java, and modern Web technologies for academic and career readiness.',
    tools: ['Python 3', 'Java', 'HTML5 / CSS3 / JS', 'Replit', 'VS Code'],
    keyMilestones: [
      'Object-Oriented Programming (OOP): Classes, objects, methods',
      'Algorithmic problem solving and data handling',
      'Building interactive, responsive web applications',
      'Preparing for AP Computer Science, school exams, and STEM competitions',
    ],
    sampleProject: 'Interactive Expense Tracker & Quiz Engine in Python and Web JS',
  },
];

export const STUDENT_PROJECTS_SHOWCASE: StudentProject[] = [
  {
    id: 'p1',
    title: 'AI Smart Plant Doctor (Scratch + AI/ML for Kids)',
    gradeBand: 'Grades 5–7',
    platform: 'AI/ML for Kids & Scratch',
    description: 'A machine learning model trained on image samples of plant leaves to diagnose healthy vs. diseased foliage, giving tailored care tips.',
    learningOutcomes: [
      'Supervised machine learning basics',
      'Confidence score thresholds',
      'Dynamic sprite dialogue & interactive UI',
    ],
    techStack: ['AI/ML for Kids', 'Scratch 3.0', 'Vision Model'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    badge: 'AI & Robotics',
  },
  {
    id: 'p2',
    title: 'EcoTracker Mobile App (MIT App Inventor)',
    gradeBand: 'Grades 6–9',
    platform: 'MIT App Inventor',
    description: 'An Android application that allows students to log daily carbon footprint habits, scan barcodes, and earn eco-badges stored in CloudDB.',
    learningOutcomes: [
      'Mobile UI layout and navigation',
      'Local TinyDB and CloudDB storage',
      'Device camera integration',
    ],
    techStack: ['MIT App Inventor', 'CloudDB', 'Sensor APIs'],
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
    badge: 'Mobile App',
  },
  {
    id: 'p3',
    title: 'Python Algorithmic Geometric Canvas',
    gradeBand: 'Grades 7–10',
    platform: 'Python Turtle & Replit',
    description: 'A visual coding program computing mathematical spirals, fractals, and kaleidoscopic mandalas using nested loops and RGB color math.',
    learningOutcomes: [
      'Nested loops and algorithmic iteration',
      'Geometric angles and trigonometric properties',
      'Function definition with dynamic parameters',
    ],
    techStack: ['Python', 'Turtle Graphics', 'Math Modules'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    badge: 'Python Programming',
  },
  {
    id: 'p4',
    title: 'Galactic Defense Arcade Game',
    gradeBand: 'Grades 3–6',
    platform: 'Scratch 3.0',
    description: 'A space adventure game with smooth arrow key navigation, asteroid physics, laser velocity calculation, and multiple boss difficulty levels.',
    learningOutcomes: [
      'Cartesian coordinate movement (dx, dy)',
      'Broadcast messaging and event handlers',
      'Variable state tracking (score, lives, game over)',
    ],
    techStack: ['Scratch 3.0', 'Game Mechanics', 'Sound FX'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    badge: 'Game Design',
  },
  {
    id: 'p5',
    title: 'Interactive Periodic Table & Science Quiz',
    gradeBand: 'Grades 8–12',
    platform: 'HTML5, CSS3 & JavaScript',
    description: 'A responsive web application displaying element cards with modal overlays, element filters, and a timed scoring quiz test.',
    learningOutcomes: [
      'DOM manipulation and JSON data rendering',
      'CSS Grid layouts and media queries',
      'State-driven quiz evaluation logic',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM API'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    badge: 'Web Development',
  },
  {
    id: 'p6',
    title: 'Java Student Grade Calculator & Report Generator',
    gradeBand: 'Grades 10–12',
    platform: 'Java & VS Code',
    description: 'A console and GUI Java program implementing OOP principles to calculate grade percentiles, generate statistics, and export student summaries.',
    learningOutcomes: [
      'Object-Oriented Programming (Classes, Methods, Encapsulation)',
      'Array manipulation and sorting algorithms',
      'Exception handling and clean code structure',
    ],
    techStack: ['Java', 'OOP', 'Data Structures'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    badge: 'Java Fundamentals',
  },
];

export const TEACHING_PHILOSOPHY = [
  {
    step: '01',
    title: 'Spark Genuine Curiosity',
    description: 'Start every lesson with real-world questions: "How does YouTube recommend videos?" or "How does Mario know when he hits an obstacle?" Connect code to what kids already love.',
  },
  {
    step: '02',
    title: 'Deconstruct Into Micro-Steps',
    description: 'Complex programming challenges are broken into small, approachable milestones so students experience quick wins without overwhelming cognitive fatigue.',
  },
  {
    step: '03',
    title: 'Active Coding Over Passive Watching',
    description: 'Students code 80% of every session. I provide live guidance, pair debugging, and instant hints while encouraging them to test hypotheses independently.',
  },
  {
    step: '04',
    title: 'Celebrate Creative Ownership',
    description: 'Every project includes a "make it your own" phase where learners customize sprite graphics, game rules, and features, fostering genuine ownership.',
  },
  {
    step: '05',
    title: 'Transparent Parent Partnership',
    description: 'Regular Parent-Teacher Meetings (PTMs) and written progress summaries ensure parents know exactly which concepts were mastered and the child’s next learning roadmap.',
  },
];

export const FAQ_DATA = [
  {
    q: 'What age groups and grades does Aishwarya teach?',
    a: 'Aishwarya teaches students from Grades 1 to 12 (typically ages 6 to 18), tailoring curriculum specifically for early visual learners (Grades 1–4), intermediate app/game creators (Grades 5–8), and high school syntax learners (Grades 9–12).',
  },
  {
    q: 'Does my child need any prior coding experience?',
    a: 'Not at all! Every course begins with an initial assessment to place the student at their comfortable baseline - whether starting from complete scratch with drag-and-drop blocks or advancing straight into Python and Java.',
  },
  {
    q: 'How are virtual classes conducted?',
    a: 'Classes are conducted 1-on-1 or in small interactive cohorts using Google Meet, Zoom, or Microsoft Teams with screen sharing, collaborative coding platforms (Replit, Scratch, Code.org), and interactive whiteboard sessions.',
  },
  {
    q: 'How are parents kept in the loop regarding student progress?',
    a: 'Detailed progress reports are shared after each curriculum milestone, complemented by scheduled Parent-Teacher Meetings (PTMs) to review completed student projects and discuss personalized learning pathways.',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  type: 'parent' | 'student';
  authorSubtitle: string;
  location: string;
  rating: number;
  gradeBand: string;
  course: string;
  quote: string;
  highlight: string;
  outcome: string;
  date: string;
  verified: boolean;
  avatarBg?: string;
  initials: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Priya & Rajesh Sharma',
    type: 'parent',
    authorSubtitle: 'Parents of Aarav (Grade 6)',
    location: 'Bengaluru, India',
    rating: 5,
    gradeBand: 'Grades 5–8',
    course: 'Scratch 3.0 & Python Fundamentals',
    highlight: 'Transformed frustration into genuine excitement for problem-solving',
    quote: 'Aarav used to find math and logical reasoning challenging. Within 3 months of Aishwarya Ma’am’s classes, his confidence skyrocketed. He built his own multi-level Space Defender game in Scratch and is now writing real Python loops. She explains complex ideas with immense patience and joy.',
    outcome: 'Built 8 independent games and moved to Python syntax',
    date: 'Verified Parent · Codingal Student',
    verified: true,
    initials: 'PS',
    avatarBg: 'bg-indigo-600',
  },
  {
    id: 't-2',
    name: 'Diya Sundaram',
    type: 'student',
    authorSubtitle: 'Student, Grade 7',
    location: 'Singapore',
    rating: 5,
    gradeBand: 'Grades 5–8',
    course: 'MIT App Inventor & AI for Kids',
    highlight: 'My favorite hour of the week — I built an app on my own phone!',
    quote: 'In school, computer theory was boring. But with Aishwarya ma’am, 80% of the class is hands-on building! I created an EcoTracker app and installed it on my mom’s Android phone. When the app worked on the real phone, it was the best feeling ever!',
    outcome: 'Published working APK app to home device',
    date: 'Verified Student · 48 Classes Completed',
    verified: true,
    initials: 'DS',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 't-3',
    name: 'Vikram & Meera Patel',
    type: 'parent',
    authorSubtitle: 'Parents of Riya (Grade 9)',
    location: 'California, USA',
    rating: 5,
    gradeBand: 'Grades 9–12',
    course: 'High School Python & Algorithmic Logic',
    highlight: 'Exceptional pedagogy, structured PTMs, and US curriculum alignment',
    quote: 'We were looking for a dedicated 1-on-1 mentor to prepare Riya for AP Computer Science. Aishwarya’s structured lesson plans, rigorous coding homework, and detailed Parent-Teacher reviews after every milestone are gold standard. Her 98% retention rate is thoroughly deserved.',
    outcome: 'Prepared for high school AP CS with 95%+ assignment scores',
    date: 'Verified Parent · 1-on-1 Mentorship',
    verified: true,
    initials: 'VP',
    avatarBg: 'bg-brand-600',
  },
  {
    id: 't-4',
    name: 'Kabir Mehta',
    type: 'student',
    authorSubtitle: 'Student, Grade 8',
    location: 'Dubai, UAE',
    rating: 5,
    gradeBand: 'Grades 5–8',
    course: 'Python Turtle & Text Programming',
    highlight: 'The "Detective Debugging" method changed how I look at bugs',
    quote: 'I used to get panicky whenever Python gave a SyntaxError or IndentationError. Ma’am taught us how to be code detectives instead of giving up. Now I actually enjoy tracing error messages and fixing them independently!',
    outcome: 'Mastered function definitions, loops, and condition trees',
    date: 'Verified Student · 36 Classes Completed',
    verified: true,
    initials: 'KM',
    avatarBg: 'bg-amber-600',
  },
  {
    id: 't-5',
    name: 'Dr. Ananya Rao',
    type: 'parent',
    authorSubtitle: 'Mother of Rohan (Grade 2)',
    location: 'Mysuru, India',
    rating: 5,
    gradeBand: 'Grades 1–4',
    course: 'Scratch Jr & Visual Sequencing',
    highlight: 'Empathetic educator who truly connects with early learners',
    quote: 'Teaching a 7-year-old through a screen requires special magic. Aishwarya keeps Rohan captivated through storytelling, animations, and playful logic games. He counts down the days until his next Saturday class.',
    outcome: 'Understands loops, sequencing, and broadcast messages',
    date: 'Verified Parent · Local Mysuru Community',
    verified: true,
    initials: 'AR',
    avatarBg: 'bg-rose-600',
  },
  {
    id: 't-6',
    name: 'Tanmay Kulkarni',
    type: 'student',
    authorSubtitle: 'Student, Grade 11',
    location: 'Hyderabad, India',
    rating: 5,
    gradeBand: 'Grades 9–12',
    course: 'Java OOP & Data Structures',
    highlight: 'Topped my school practical exam with a full Java application',
    quote: 'Java object-oriented concepts like inheritance and encapsulation used to feel dry and confusing. Aishwarya Ma’am used real-world analogies (like blueprint vs house) and guided me to build a complete Student Grade Calculator. I topped my term exams!',
    outcome: 'Top grade in School Computer Science Board Practical',
    date: 'Verified Student · High School Track',
    verified: true,
    initials: 'TK',
    avatarBg: 'bg-sky-600',
  },
  {
    id: 't-7',
    name: 'Suresh & Nandita Nair',
    type: 'parent',
    authorSubtitle: 'Parents of Ananya (Grade 5)',
    location: 'Bengaluru, India',
    rating: 5,
    gradeBand: 'Grades 5–8',
    course: 'Block-to-Text Bridge & Code.org App Lab',
    highlight: 'Unmatched transparency and consistent milestone feedback',
    quote: 'As working parents, we appreciate how organized Aishwarya is. We receive instant updates, clear milestone roadmaps, and video recordings when needed. Ananya built a quiz app that the entire family played together at dinner.',
    outcome: 'Created 5 interactive web apps on Code.org',
    date: 'Verified Parent · 60+ Sessions',
    verified: true,
    initials: 'SN',
    avatarBg: 'bg-teal-600',
  },
  {
    id: 't-8',
    name: 'Zoya Patel',
    type: 'student',
    authorSubtitle: 'Student, Grade 10',
    location: 'London, UK',
    rating: 5,
    gradeBand: 'Grades 9–12',
    course: 'HTML5, CSS3 & JavaScript Web Lab',
    highlight: 'Built my very first responsive portfolio and science quiz',
    quote: 'I wanted to learn web development to make projects for my school science fair. Aishwarya ma’am made CSS Flexbox, Grid, and JavaScript event listeners so intuitive. She never just gives you the answer—she nudges you until you solve it yourself.',
    outcome: 'Deployed responsive multi-page web app to GitHub',
    date: 'Verified Student · Global Online Track',
    verified: true,
    initials: 'ZP',
    avatarBg: 'bg-purple-600',
  },
  {
    id: 't-9',
    name: 'Arjun & Sneha Mukherjee',
    type: 'parent',
    authorSubtitle: 'Parents of Ishaan (Grade 4)',
    location: 'Kolkata, India',
    rating: 5,
    gradeBand: 'Grades 1–4',
    course: 'Creative Scratch 3.0 & Game Physics',
    highlight: 'Turned passive gaming screen-time into active creative engineering',
    quote: 'Ishaan was spending hours playing mobile games. Thanks to Aishwarya’s guidance, he now asks: "How do I program this mechanic?" He has designed 6 complete games with scores, lives, and custom sprites. An unbelievable transformation!',
    outcome: 'Created 6 original Scratch games with physics loops',
    date: 'Verified Parent · Codingal Verified',
    verified: true,
    initials: 'AM',
    avatarBg: 'bg-blue-600',
  },
];

export interface PortfolioArticle {
  id: string;
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  readingTime: number;
  publishedAt: string;
  createdAt: string;
  author: {
    name: string;
    email: string;
  };
  content: string;
}

export const ARTICLES_DATA: PortfolioArticle[] = [
  {
    id: 'art-1',
    _id: 'post_seed_1',
    title: 'From Scratch Blocks to Real Python: Guiding Young Coders Across the Syntax Bridge',
    slug: 'from-scratch-to-python-k12-guide',
    excerpt: 'A practical pedagogical guide for parents and educators on helping children transition from visual drag-and-drop logic in Scratch to text-based coding in Python without frustration.',
    category: 'STEM Pedagogy',
    tags: ['Python', 'Scratch', 'Pedagogy', 'Grades 5-8', 'Parent Guide'],
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    readingTime: 6,
    publishedAt: 'Oct 10, 2026',
    createdAt: '2026-10-10T10:00:00.000Z',
    author: {
      name: 'Aishwarya Gowda S R',
      email: 'aishwaryagowda227@gmail.com',
    },
    content: `## The Moment Every Young Coder Faces

When an 11-year-old child builds a multi-level platformer game in **Scratch 3.0**, they feel like an invincible digital architect. They drag broadcast messages, manage variables for high scores, and configure gravity loops. 

Yet, when introduced to their first line of text syntax in **Python**, many suddenly hit a wall. 

\`\`\`python
# What once took a colorful block now looks like this:
for score in range(0, 100, 10):
    if score >= 50:
        print(f"Level Cleared with Score: {score}")
\`\`\`

A missing colon, an unexpected indentation error, or a mistyped parenthesis can derail their enthusiasm. As educators and parents, how do we bridge this gap so young minds transition smoothly from visual blocks into genuine text programming?

---

### 1. The Cognitive Shift: Logic vs. Typography

In block-based languages like **Scratch** and **Code.org**, syntax errors are impossible by design—pieces snap together like puzzle pieces only when valid. The learner's brain is purely engaged in **algorithmic sequence**:
- *When green flag clicked*
- *Forever loop*
- *If touching color blue, change score by 1*

When shifting to Python, the cognitive demand doubles. The child must now juggle **two distinct mental operations**:
1. Formulating the logic (conditions, loops, data structures).
2. Typing mechanical syntax (exact indentation, quotes, brackets, capitalization).

---

### 2. The Stepping Stones That Work

Over 8 years of teaching more than 1,200 students across Grades 1 through 12, I've developed a 3-stage bridge that eliminates the shock factor:

#### Phase A: Visual-to-Syntax Hybrid (EduBlocks & Block-to-Text)
Before throwing students into blank text editors, we use platforms like **EduBlocks**. It presents Python functions formatted as blocks, but with the actual Python keywords displayed on the face of the block. Students see \`def jump():\` and \`while True:\` before ever typing it manually.

#### Phase B: Python Turtle Graphics
Young students are visual learners. Text console outputs like \`print("Hello World")\` lack the immediate dopamine hit of an animated sprite. With **Python Turtle**, one line of Python code moves a robotic turtle across the screen:

\`\`\`python
import turtle
t = turtle.Turtle()
t.color("cyan")

# Drawing an algorithmic geometric spiral
for i in range(100):
    t.forward(i * 2)
    t.left(59)
\`\`\`

When children see vibrant kaleidoscopic art emerge from nested loops and math variables, they instantly understand why text syntax gives them superpowers.

#### Phase C: Project-Based Text Games & Problem Solving
Once comfortable with Turtle and basic syntax, we move into text adventure games, secret cipher decoders, and quiz engines. Writing their own rules gives learners ownership over their code.

---

### 3. Practical Tips for Parents Supporting Young Coders

- **Never type the code for them:** When a child hits an \`IndentationError\`, guide their eyes: *"Look at line 4—what is different about the spacing compared to line 3?"* Let them hit the spacebar or Tab key themselves.
- **Celebrate the bug hunt:** Debugging is not failure; it is science in action.
- **Maintain a consistent weekly routine:** Consistency matters far more than cramming. 45 to 60 minutes of focused, fun coding twice a week yields extraordinary fluency.

---

### Ready for a Personalized Learning Roadmap?

Every child learns at their own pace. In our live 1-on-1 virtual sessions, we assess your child's current baseline and construct a personalized curriculum that keeps curiosity alive.

**Book a free 1-on-1 trial class today** to experience how we turn coding into your child's favorite creative superpower!`,
  },
  {
    id: 'art-2',
    _id: 'post_seed_2',
    title: 'Demystifying AI for Kids: How We Teach Machine Learning in Grades 4 to 8',
    slug: 'demystifying-ai-for-kids-machine-learning',
    excerpt: 'How hands-on computer vision and natural language models turn children from passive algorithm consumers into confident, ethical digital creators.',
    category: 'Artificial Intelligence',
    tags: ['AI & ML', 'EdTech', 'Scratch 3.0', 'Future Skills', 'STEM'],
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    readingTime: 5,
    publishedAt: 'Oct 08, 2026',
    createdAt: '2026-10-08T14:30:00.000Z',
    author: {
      name: 'Aishwarya Gowda S R',
      email: 'aishwaryagowda227@gmail.com',
    },
    content: `## Beyond the Buzzwords: Making AI Intuitive for Elementary & Middle School

Today's children grow up surrounded by AI recommendations, facial recognition on smartphones, and generative voice assistants. Yet to most students, artificial intelligence feels like pure magic or a black box.

In my virtual STEM classroom, our mission is to dispel the mystery. Children as young as 9 years old can build, train, and test their own machine learning models using intuitive visual tools.

---

### The "Teach the Computer" Paradigm

Traditional coding teaches computers explicit instructions:  
*\`IF temperature > 30 THEN turn on fan\`*

Machine learning flips this relationship:  
We show the computer dozens of examples, and let the algorithm discover patterns on its own.

Using platforms like **AI/ML for Kids** integrated into **Scratch 3.0**, our students train real supervised classification models across three domains:
1. **Computer Vision:** Classifying hand gestures, healthy vs. diseased plant leaves, or recycling materials (paper vs. plastic vs. metal).
2. **Text Sentiment Analysis:** Training a virtual character to distinguish between kind and hurtful statements.
3. **Sound & Voice Recognition:** Building voice-activated security doors or music synthesizers.

---

### Case Study: Student Project "AI Smart Plant Doctor"

One of our 6th-grade students built an interactive **Smart Plant Doctor**:
- They collected 25 photo samples of healthy green leaves and 25 photos of yellow spotted leaves.
- They trained a vision model in AI for Kids with an 88% confidence threshold.
- In Scratch, they connected the webcam input so holding a real houseplant in front of the camera makes the animated sprite diagnose the plant and prescribe watering advice.

Through this single project, the student mastered:
- Training datasets vs testing datasets
- Overfitting and model bias
- Confidence scores and conditional fallbacks

---

### Nurturing Ethical AI Thinkers Early

Teaching AI to children is not just about building tech—it is about cultivating critical citizenship. We discuss:
- *Why did the model get confused when the room lighting changed?*
- *Who decides what training data is fair?*
- *How can AI assist doctors and farmers rather than just entertain us?*

When young minds understand how algorithms work under the hood, they no longer feel intimidated by technology—they feel equipped to shape it responsibly.`,
  },
  {
    id: 'art-3',
    _id: 'post_seed_3',
    title: 'The Power of the Bug: How Debugging Code Teaches Lifelong Resilience',
    slug: 'power-of-the-bug-debugging-resilience-in-kids',
    excerpt: 'Why error messages are a child’s best learning partner. How learning to debug code fosters emotional grit, patience, and scientific hypothesis testing.',
    category: 'Computational Thinking',
    tags: ['Problem Solving', 'Mindset', 'Debugging', 'Parenting', 'STEM'],
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    readingTime: 4,
    publishedAt: 'Oct 05, 2026',
    createdAt: '2026-10-05T09:15:00.000Z',
    author: {
      name: 'Aishwarya Gowda S R',
      email: 'aishwaryagowda227@gmail.com',
    },
    content: `## Transforming Frustration into Curiosity

In mainstream school education, making a mistake on an exam often results in red ink and lost marks. This can inadvertently condition children to fear error and avoid risk.

In programming, however, errors are not an indictment of capability—they are the fundamental mechanism of progress. 

Every professional software engineer spends hours debugging. When children learn to see bugs not as personal failure, but as interesting puzzles waiting to be solved, something transformative happens to their mindset.

---

### The 4-Step "Detective" Debugging Method

In our virtual coding classes, whenever an error strikes—whether a sprite falling through the floor or a Python \`NameError\`—we put on our "detective hats":

1. **Pause & Breathe:** Stop clicking randomly. Take 5 seconds to observe the symptoms.
2. **Read the Clues:** What did the computer actually do vs. what did we expect it to do? In Python, line numbers and error types are direct clues.
3. **Isolate the Variable:** Change one single thing at a time rather than rewriting the entire script.
4. **Celebrate the Fix:** The moment of eureka when code finally runs smoothly produces lasting self-efficacy.

---

### Beyond Code: Skills That Transfer to Life

Parents frequently report that students who master debugging in coding show marked improvements in other areas:
- **Math & Science:** Greater patience when tackling multi-step word problems.
- **Emotional Regulation:** Less panic when things do not work immediately on the first attempt.
- **Constructive Communication:** Ability to articulate problems clearly during questions.

Code provides a sandbox where failure is free, reversible, and informative.`,
  },
  {
    id: 'art-4',
    _id: 'post_seed_4',
    title: 'Building Real Smartphone Apps with MIT App Inventor: A Middle Schooler’s Guide',
    slug: 'mobile-app-engineering-for-teens-mit-app-inventor',
    excerpt: 'How middle school students design interactive interfaces, leverage hardware sensors, and deploy working mobile apps to Android smartphones.',
    category: 'Mobile Development',
    tags: ['MIT App Inventor', 'Mobile Apps', 'Sensors', 'Grades 6-10'],
    coverImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    readingTime: 5,
    publishedAt: 'Oct 02, 2026',
    createdAt: '2026-10-02T11:20:00.000Z',
    author: {
      name: 'Aishwarya Gowda S R',
      email: 'aishwaryagowda227@gmail.com',
    },
    content: `## From Smartphone Screen Time to Smartphone Creator

Most children spend hours interacting with mobile applications on smartphones and tablets. But what happens when you give a 7th grader the keys to design their own mobile software?

With **MIT App Inventor** and **Thunkable**, students step behind the curtain of mobile development. They design real visual layouts and connect block logic to genuine device hardware:
- Accelerometers and gyroscopes
- GPS location trackers
- Text-to-speech engines
- Device camera and barcode scanners
- Cloud databases (Firebase & CloudDB)

---

### Real Utility Projects Built by Our Students

Our curriculum focuses on building apps with real utility:

#### 1. Emergency Safety & GPS Beacon App
Students build an app that allows a single tap to send an SMS with real-time GPS coordinates to a parent's phone, complete with an audible siren alarm using the phone's speaker.

#### 2. EcoTracker Habit Counter
Learners store daily environmental habits (saving water, bicycling to school) in TinyDB local storage and synchronize global student leaderboards with cloud storage.

#### 3. Voice-Activated Note Taker
Using speech recognizer components, students build personal voice dictation journals that save notes with timestamps.

---

### The Thrill of the APK Install

There is nothing quite like the feeling when a student generates a QR code, scans it with their family's tablet, and sees an app *they built with their own hands* running as an installed native app on their home screen.

This hands-on triumph cements a child's identity as a creator, building the foundational confidence needed for future careers in technology and engineering.`,
  },
];

