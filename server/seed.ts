import bcrypt from 'bcryptjs';
import { UserModel } from './models/User.js';
import { PostModel } from './models/Post.js';
import { getIsMongoConnected, readFallbackDB, writeFallbackDB } from './db.js';

const BCRYPT_SALT_ROUNDS = 12;

const INITIAL_PUBLISHERS = [
  {
    name: process.env.PUBLISHER_NAME || 'Aishwarya Gowda S R',
    email: (process.env.PUBLISHER_EMAIL || 'aishwaryagowda227@gmail.com').toLowerCase().trim(),
    role: 'publisher' as const,
  },
  {
    name: 'Pavan Gowda B S',
    email: 'pgowda6021@gmail.com',
    role: 'publisher' as const,
  },
];

const INITIAL_POSTS = [
  {
    title: 'From Scratch Blocks to Real Python: Guiding Young Coders Across the Syntax Bridge',
    slug: 'from-scratch-to-python-k12-guide',
    excerpt: 'A practical pedagogical guide for parents and educators on helping children transition from visual drag-and-drop logic in Scratch to text-based coding in Python without frustration.',
    category: 'STEM Pedagogy',
    tags: ['Python', 'Scratch', 'Pedagogy', 'Grades 5-8', 'Parent Guide'],
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    readingTime: 6,
    status: 'published',
    author: {
      name: 'Aishwarya Gowda S R',
      email: 'aishwaryagowda227@gmail.com',
    },
    createdAt: new Date('2026-10-10T10:00:00.000Z'),
    updatedAt: new Date('2026-10-10T10:00:00.000Z'),
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
    title: 'Demystifying AI for Kids: How We Teach Machine Learning in Grades 4 to 8',
    slug: 'demystifying-ai-for-kids-machine-learning',
    excerpt: 'How hands-on computer vision and natural language models turn children from passive algorithm consumers into confident, ethical digital creators.',
    category: 'Artificial Intelligence',
    tags: ['AI & ML', 'EdTech', 'Scratch 3.0', 'Future Skills', 'STEM'],
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    readingTime: 5,
    status: 'published',
    author: {
      name: 'Aishwarya Gowda S R',
      email: 'aishwaryagowda227@gmail.com',
    },
    createdAt: new Date('2026-10-08T14:30:00.000Z'),
    updatedAt: new Date('2026-10-08T14:30:00.000Z'),
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
    title: 'The Power of the Bug: How Debugging Code Teaches Lifelong Resilience',
    slug: 'power-of-the-bug-debugging-resilience-in-kids',
    excerpt: 'Why error messages are a child’s best learning partner. How learning to debug code fosters emotional grit, patience, and scientific hypothesis testing.',
    category: 'Computational Thinking',
    tags: ['Problem Solving', 'Mindset', 'Debugging', 'Parenting', 'STEM'],
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    readingTime: 4,
    status: 'published',
    author: {
      name: 'Aishwarya Gowda S R',
      email: 'aishwaryagowda227@gmail.com',
    },
    createdAt: new Date('2026-10-05T09:15:00.000Z'),
    updatedAt: new Date('2026-10-05T09:15:00.000Z'),
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
    title: 'Building Real Smartphone Apps with MIT App Inventor: A Middle Schooler’s Guide',
    slug: 'mobile-app-engineering-for-teens-mit-app-inventor',
    excerpt: 'How middle school students design interactive interfaces, leverage hardware sensors, and deploy working mobile apps to Android smartphones.',
    category: 'Mobile Development',
    tags: ['MIT App Inventor', 'Mobile Apps', 'Sensors', 'Grades 6-10'],
    coverImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    readingTime: 5,
    status: 'published',
    author: {
      name: 'Aishwarya Gowda S R',
      email: 'aishwaryagowda227@gmail.com',
    },
    createdAt: new Date('2026-10-02T11:20:00.000Z'),
    updatedAt: new Date('2026-10-02T11:20:00.000Z'),
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

export async function seedDatabase() {
  const initialPassword = process.env.PUBLISHER_PASSWORD || 'ChangeMeSecurely2026!';

  if (getIsMongoConnected()) {
    try {
      const User = UserModel as any;
      const Post = PostModel as any;

      // Seed Publishers only if user does not exist yet (never overwrite existing passwords)
      for (const pub of INITIAL_PUBLISHERS) {
        const existingUser = await User.findOne({ email: pub.email });
        if (!existingUser) {
          const passwordHash = await bcrypt.hash(initialPassword, BCRYPT_SALT_ROUNDS);
          await User.create({
            name: pub.name,
            email: pub.email,
            passwordHash,
            role: pub.role,
          });
          console.log(`[OK] Initialized publisher user in MongoDB: ${pub.email}`);
        }
      }

      // Check / Seed Initial Posts
      const postCount = await Post.countDocuments();
      if (postCount === 0) {
        for (const post of INITIAL_POSTS) {
          await Post.create(post);
        }
        if (INITIAL_POSTS.length > 0) {
          console.log(`[OK] Seeded ${INITIAL_POSTS.length} initial published posts into MongoDB`);
        }
      }
      return;
    } catch (err) {
      console.error('Database initialization notice', err);
    }
  }

  // Fallback DB Seeding
  const db = readFallbackDB();
  let modified = false;

  // Initialize publishers only if they do not exist (preserve existing user passwords)
  for (const pub of INITIAL_PUBLISHERS) {
    const existingIndex = db.users.findIndex(u => u.email.toLowerCase() === pub.email.toLowerCase());
    if (existingIndex === -1) {
      const passwordHash = await bcrypt.hash(initialPassword, BCRYPT_SALT_ROUNDS);
      db.users.push({
        _id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        name: pub.name,
        email: pub.email,
        passwordHash,
        role: 'publisher',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      modified = true;
      console.log(`[OK] Initialized publisher account in secure local store: ${pub.email}`);
    }
  }

  // Check posts
  if (INITIAL_POSTS.length > 0 && db.posts.length === 0) {
    db.posts = INITIAL_POSTS.map((p, idx) => ({
      _id: `post_seed_${idx + 1}`,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      category: p.category,
      tags: p.tags,
      coverImage: p.coverImage,
      readingTime: p.readingTime,
      status: 'published' as const,
      author: p.author,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
      content: p.content,
    }));
    modified = true;
  }

  if (modified) {
    writeFallbackDB(db);
  }
}

