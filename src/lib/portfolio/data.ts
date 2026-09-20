export const UPWORK_URL = "https://www.upwork.com/freelancers/~019b7c3041d768074e?mp_source=share";

export const profile = {
  name: "Muhammad Asim Saqlain",
  title: "AI Automation Engineer | AI Agents | n8n | RAG | LLM Integration",
  location: "Chakwal, Pakistan",
  email: "asimsaqlain85@gmail.com",
  phone: "+92 316 5101890",
  linkedin: "https://www.linkedin.com/in/muhammad-asim-saqlain-8ab182317",
  github: "https://github.com/MUHAMMADASIMSAQLAIN",
  valueProp:
    "I build AI agents, RAG systems, voice AI and workflow automations that connect LLMs to real business processes — backed by production-ready Python/FastAPI services.",
};

export const services = [
  {
    icon: "bot",
    title: "AI Agents & Agentic AI",
    desc: "Autonomous and multi-agent systems with tool calling, role-based agents and structured decision workflows using OpenAI and Gemini APIs.",
  },
  {
    icon: "workflow",
    title: "AI Automation & n8n",
    desc: "n8n orchestration with webhooks and REST APIs to connect CRMs, messaging, email, calendars and internal services into one automated flow.",
  },
  {
    icon: "database",
    title: "RAG & Knowledge Systems",
    desc: "Document ingestion, chunking, embeddings and vector database retrieval (including Supabase pgvector) for grounded, source-backed answers.",
  },
  {
    icon: "plug",
    title: "LLM / API Integration",
    desc: "LLM integration and prompt engineering wired into existing products through clean, secure APIs and well-defined tool interfaces.",
  },
  {
    icon: "mic",
    title: "Voice AI Automation",
    desc: "Conversational voice pipelines with ElevenLabs, n8n and FastAPI for real-time voice-to-backend workflows.",
  },
  {
    icon: "server",
    title: "Python / FastAPI Backends",
    desc: "Secure REST APIs and microservices with Python, FastAPI and Flask — authentication, JWT/RBAC, MongoDB and deployment-ready structure.",
  },
  {
    icon: "messages",
    title: "AI Chatbots & Customer Support",
    desc: "Customer-facing chatbots for WhatsApp, web and messaging channels that answer questions from your own knowledge base and hand off when needed.",
  },
] as const;

export type Screenshot = { src: string; caption: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  featured?: boolean;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  stack: string[];
  role: string[];
  screenshots?: Screenshot[];
};

const bluewaveScreenshots: Screenshot[] = [
  {
    src: "/login.png",
    caption: "Customer portal sign-in",
    alt: "BlueWave AI customer portal login screen",
  },
  {
    src: "/dashboard.png",
    caption: "Dashboard overview with sales and category charts",
    alt: "BlueWave AI dashboard with KPI cards and charts",
  },
  {
    src: "/orders.png",
    caption: "Order management, filtering and order tracking",
    alt: "BlueWave AI order management screen with order tracking",
  },
  {
    src: "/inventory.png",
    caption: "Inventory management with stock status",
    alt: "BlueWave AI inventory management table",
  },
  {
    src: "/add-product.png",
    caption: "Add product modal and low stock alerts",
    alt: "BlueWave AI add product dialog over the inventory table",
  },
  {
    src: "/mongodb.png",
    caption: "MongoDB collections: inventory, orders, invoices, users",
    alt: "MongoDB Compass showing the BlueWave AI inventory database",
  },
  {
    src: "/n8n-workflow.png",
    caption: "n8n workflows for stock check, order booking and tracking",
    alt: "n8n workflow canvas with AI agent nodes and webhook responses",
  },
  {
    src: "/voice-agent.png",
    caption: "Voice AI order receptionist configuration",
    alt: "ElevenLabs agent configuration with system prompt and voice settings",
  },
  {
    src: "/agent-tools.png",
    caption: "Agent tools wired to n8n webhooks",
    alt: "Agent tools list with stock availability, order booking and invoice tools",
  },
  {
    src: "/knowledge-base.png",
    caption: "RAG knowledge base documents",
    alt: "Agent knowledge base with order and inventory management documents",
  },
];

export const projects: Project[] = [
  {
    slug: "bluewave-ai",
    name: "BlueWave AI",
    tagline: "AI E-Commerce & Order Automation Platform",
    featured: true,
    problem:
      "E-commerce teams handle order intake, stock checks, confirmations, invoicing and follow-up reminders manually across separate tools, which slows down order handling and leaves room for missed steps.",
    solution:
      "A full-stack AI-driven e-commerce automation platform where an AI order receptionist handles customer conversations, checks stock, books and tracks orders, and triggers invoicing and notifications through orchestrated n8n workflows on a FastAPI + MongoDB backend.",
    features: [
      "AI order receptionist for conversational order intake",
      "Inventory and stock availability lookup",
      "Order booking and order tracking",
      "Automatic invoice generation",
      "Gmail order confirmation emails",
      "WhatsApp notifications",
      "Google Calendar reminders",
      "Pricing and payment estimation",
      "Voice AI interaction layer",
      "Knowledge retrieval (RAG) where product/policy context is needed",
    ],
    architecture: [
      "Customer message or voice input enters through the conversational layer (ElevenLabs voice + LLM).",
      "FastAPI services validate the request and expose order, inventory and invoicing endpoints.",
      "Gemini-powered agent logic interprets intent and calls the right backend tool.",
      "n8n orchestrates downstream steps via webhooks: Gmail, WhatsApp, Google Calendar.",
      "MongoDB stores products, orders, invoices and conversation state.",
      "JWT/RBAC protects admin and customer-facing operations.",
    ],
    stack: [
      "Gemini API",
      "n8n",
      "FastAPI",
      "MongoDB",
      "ElevenLabs",
      "Webhooks",
      "REST APIs",
      "JWT / RBAC",
      "Python",
    ],
    screenshots: bluewaveScreenshots,
    role: [
      "Designed the end-to-end platform architecture and data model.",
      "Built the FastAPI backend, authentication and RBAC layer.",
      "Implemented the LLM agent logic and tool-calling interface.",
      "Built the n8n automation workflows and webhook integrations.",
      "Integrated the voice AI layer and notification channels.",
    ],
  },
  {
    slug: "agentic-rag-assistant",
    name: "Agentic RAG Assistant",
    tagline: "Document retrieval, embeddings & tool-calling agents",
    featured: true,
    problem:
      "Teams keep critical knowledge inside long documents, so answering internal questions means manual searching and copy-pasting context into a chat model, which produces ungrounded answers.",
    solution:
      "An agentic RAG assistant that ingests documents, chunks and embeds them into a vector database, retrieves the relevant passages at query time and lets an LLM agent decide when to retrieve, when to call a tool and how to answer with grounded context.",
    features: [
      "Document ingestion pipeline",
      "Chunking strategy tuned for retrieval quality",
      "Embedding generation and vector storage",
      "Semantic retrieval over the vector database",
      "LLM responses grounded in retrieved passages",
      "Agent/tool workflow for multi-step questions",
      "Secure API access to the retrieval layer",
    ],
    architecture: [
      "Documents are ingested, cleaned and split into chunks.",
      "Chunks are embedded and written to a vector store (Supabase pgvector).",
      "A query is embedded and matched against the store for semantic retrieval.",
      "The agent decides whether to retrieve, call a tool, or answer directly.",
      "FastAPI exposes ingestion and query endpoints behind authentication.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "Supabase pgvector",
      "Embeddings",
      "Vector search",
      "Agent tool calling",
    ],
    role: [
      "Built the ingestion, chunking and embedding pipeline.",
      "Designed the vector schema and semantic retrieval queries.",
      "Implemented the agent loop and tool interfaces.",
      "Exposed the system through secure FastAPI endpoints.",
    ],
  },
  {
    slug: "voice-ai-automation",
    name: "Voice AI Automation System",
    tagline: "Real-time voice-to-backend conversational workflows",
    featured: true,
    problem:
      "Voice conversations usually stop at the transcript — the request still has to be re-entered into a backend system by a person before anything happens.",
    solution:
      "A conversational voice pipeline where an AI agent understands the caller, calls backend endpoints in real time and drives automation steps through n8n, so a spoken request becomes an executed action.",
    features: [
      "Natural conversational voice interaction with ElevenLabs",
      "AI agent intent handling and tool calling",
      "Real-time voice-to-backend request handling",
      "n8n workflow orchestration for downstream actions",
      "REST API integration with existing services",
    ],
    architecture: [
      "Voice input is captured and converted through the ElevenLabs voice layer.",
      "The AI agent interprets the request and selects the backend action.",
      "FastAPI endpoints execute the action against the business system.",
      "n8n handles follow-up automation via webhooks and API calls.",
      "A spoken response is returned to the caller.",
    ],
    stack: ["ElevenLabs", "n8n", "FastAPI", "Python", "Webhooks", "REST APIs", "LLM APIs"],
    role: [
      "Built the voice-to-backend pipeline and agent logic.",
      "Implemented FastAPI endpoints for real-time actions.",
      "Wired n8n workflows for downstream automation.",
    ],
  },
  {
    slug: "license-plate-detection",
    name: "Real-Time License Plate Detection",
    tagline: "YOLOv8 computer vision with real-time processing",
    problem:
      "Manual monitoring of vehicle entry and plate records is slow and cannot keep up with a live camera feed.",
    solution:
      "A computer vision system built on YOLOv8 that detects license plates in real time from a video stream and outputs structured detections for downstream processing.",
    features: [
      "YOLOv8 object detection model",
      "Real-time video stream processing",
      "Plate region detection and extraction",
      "Structured detection output for downstream systems",
    ],
    architecture: [
      "Video frames are captured from the source stream.",
      "Each frame runs through the YOLOv8 detection model.",
      "Detected plate regions are extracted and processed.",
      "Results are emitted as structured data for storage or API consumption.",
    ],
    stack: ["Python", "YOLOv8", "Computer Vision", "OpenCV", "Machine Learning"],
    role: [
      "Prepared the detection pipeline and model configuration.",
      "Implemented real-time frame processing and output handling.",
    ],
  },
  {
    slug: "mystore-management",
    name: "MyStore Management",
    tagline: "FastAPI + MongoDB inventory & order management",
    problem:
      "Small stores track inventory and orders in spreadsheets, with no single authenticated system showing current stock and order status.",
    solution:
      "A store management application with a FastAPI backend, MongoDB storage, JWT authentication and a dashboard that surfaces inventory and order data visually.",
    features: [
      "JWT authentication and protected routes",
      "Inventory management",
      "Order management",
      "Dashboard with charts and key figures",
      "Responsive Tailwind interface",
    ],
    architecture: [
      "FastAPI exposes authenticated REST endpoints for products and orders.",
      "MongoDB stores inventory, orders and user records.",
      "JWT protects access and separates roles.",
      "The dashboard consumes the API and renders data with Chart.js.",
    ],
    stack: ["FastAPI", "Python", "MongoDB", "JWT", "Chart.js", "Tailwind CSS", "REST APIs"],
    role: [
      "Built the FastAPI backend and MongoDB data model.",
      "Implemented authentication and role handling.",
      "Built the dashboard and reporting views.",
    ],
  },
  {
    slug: "restaurant-whatsapp-agent",
    name: "Restaurant WhatsApp AI Agent",
    tagline: "n8n conversational automation for customer messaging",
    problem:
      "Restaurants answer the same WhatsApp questions about menu, availability and orders all day, and each message needs a person to reply.",
    solution:
      "An n8n-based WhatsApp AI agent that handles customer conversations automatically, answers common questions and routes order-related requests through an automated workflow.",
    features: [
      "WhatsApp conversational automation",
      "AI-generated replies for customer questions",
      "Menu and order-related request handling",
      "n8n workflow routing with webhooks",
    ],
    architecture: [
      "Incoming WhatsApp messages hit an n8n webhook.",
      "The workflow classifies the request and builds LLM context.",
      "The LLM generates the reply or triggers an order-related branch.",
      "The response is sent back to the customer through WhatsApp.",
    ],
    stack: ["n8n", "WhatsApp automation", "LLM APIs", "Webhooks", "REST APIs"],
    role: [
      "Designed and built the n8n conversational workflow.",
      "Implemented prompt design and reply handling.",
      "Integrated the messaging channel and webhooks.",
    ],
  },
  {
    slug: "ai-wedding-card-generator",
    name: "AI Wedding Card Generator",
    tagline: "Frontend generator backed by an n8n webhook workflow",
    problem:
      "Creating personalised invitation cards means repeating the same manual design steps for every set of event details.",
    solution:
      "A lightweight web app where users enter event details and an n8n webhook workflow generates the card content automatically, returning the result to the browser.",
    features: [
      "Simple HTML/CSS/JavaScript interface",
      "Form-driven event detail input",
      "n8n webhook backend for generation",
      "Instant result rendering in the browser",
    ],
    architecture: [
      "The frontend collects event details and posts them to a webhook.",
      "n8n processes the payload and calls the generation step.",
      "The generated card content is returned to the frontend and displayed.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "n8n", "Webhooks"],
    role: [
      "Built the frontend interface and form handling.",
      "Built the n8n webhook workflow and response handling.",
    ],
  },
  {
    slug: "ai-email-aggregator",
    name: "AI Email Aggregator",
    tagline: "Automated inbox triage and summarisation",
    problem:
      "Important messages get buried in a busy inbox, and reading every email to find what matters takes time each day.",
    solution:
      "An automation that pulls messages through the Gmail API, uses an LLM to classify and summarise them, and delivers a consolidated digest so only the relevant items need attention.",
    features: [
      "Gmail API email retrieval",
      "LLM-based classification and summarisation",
      "Consolidated digest output",
      "n8n scheduling and routing",
    ],
    architecture: [
      "A scheduled n8n workflow fetches new messages via the Gmail API.",
      "Each message is passed to an LLM for classification and summarisation.",
      "Results are grouped into a single digest.",
      "The digest is delivered back through email or a messaging channel.",
    ],
    stack: ["n8n", "Gmail API", "LLM APIs", "Python", "Webhooks"],
    role: [
      "Built the ingestion workflow and Gmail integration.",
      "Designed the classification and summarisation prompts.",
      "Implemented digest formatting and delivery.",
    ],
  },
  {
    slug: "student-success-prediction",
    name: "Student Success Prediction",
    tagline: "Machine learning model on academic performance data",
    problem:
      "Academic performance data sits unused, so at-risk students are only identified after results are published.",
    solution:
      "A machine learning pipeline that cleans academic data, engineers features and trains classification models to predict student outcomes, with evaluation of model performance.",
    features: [
      "Data cleaning and preprocessing",
      "Feature engineering on academic attributes",
      "Classification model training",
      "Model evaluation and comparison",
    ],
    architecture: [
      "Raw academic data is cleaned and preprocessed.",
      "Features are engineered and encoded.",
      "Models are trained and cross-validated.",
      "Metrics are compared to select the final model.",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    role: [
      "Built the data preprocessing and feature pipeline.",
      "Trained and evaluated the classification models.",
    ],
  },
  {
    slug: "flask-todo-app",
    name: "Flask Todo App",
    tagline: "CRUD web application with Flask and SQL",
    problem: "A simple, self-hosted way to track tasks with persistent storage and a clean interface.",
    solution:
      "A Flask web application with full CRUD task management, SQL persistence and server-rendered templates.",
    features: [
      "Create, read, update and delete tasks",
      "SQL database persistence",
      "Server-rendered templates",
      "Responsive interface",
    ],
    architecture: [
      "Flask routes handle CRUD requests.",
      "An ORM layer persists tasks to a SQL database.",
      "Templates render the task views server-side.",
    ],
    stack: ["Python", "Flask", "SQL", "SQLAlchemy", "HTML", "CSS"],
    role: ["Built the Flask application, data model and interface."],
  },
];

export const skillGroups = [
  {
    title: "AI & LLM",
    items: [
      "AI Agent Development",
      "Agentic AI",
      "Generative AI",
      "Large Language Models",
      "LLM Prompt Engineering",
      "AI Prompt Engineering",
      "Retrieval Augmented Generation",
      "LangChain",
      "MCP",
      "OpenAI API",
      "Gemini API",
      "Natural Language Processing",
      "Customer Service Chatbots",
    ],
  },
  {
    title: "Automation",
    items: [
      "n8n",
      "AI Workflow Automation",
      "Zapier",
      "Make.com",
      "Webhooks",
      "Python Automation",
      "Gmail API",
      "Google Calendar API",
      "Google Sheets API",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "API Development",
      "REST APIs",
      "Microservices",
      "JWT / RBAC",
    ],
  },
  {
    title: "Data & Databases",
    items: ["MongoDB", "SQL", "Pinecone", "Supabase Vector Store", "Vector Databases", "Embeddings"],
  },
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "YOLOv8",
      "Computer Vision",
      "Document Processing",
      "ElevenLabs / Voice AI",
    ],
  },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Chart.js"] },
];

export const experience = [
  {
    role: "AI Automation & Agentic AI Developer",
    org: "Independent Projects",
    period: "Ongoing",
    bullets: [
      "Developed production-ready AI applications, intelligent agents and workflow automations focused on agentic workflows, RAG systems and LLM integrations.",
      "Built autonomous AI agents, tool-calling systems and conversational chatbots using OpenAI and Gemini APIs.",
      "Built RAG pipelines with document retrieval, chunking, embeddings and vector database architectures.",
      "Built workflow automations using n8n, webhooks and REST APIs.",
      "Built secure backend applications using REST APIs and microservices with Python, FastAPI and Flask.",
      "Built voice AI workflows using ElevenLabs, and multi-agent, role-based agent architectures.",
      "Delivered end-to-end AI-powered business systems, document processing pipelines and computer vision models using YOLOv8.",
    ],
  },
  {
    role: "Junior Network Engineer Intern",
    org: "Arid University Rawalpindi",
    period: "January 2025 – June 2025",
    bullets: [
      "Assisted in configuring, monitoring and maintaining enterprise-level network infrastructure and system operations.",
      "Supported IT automation initiatives, system troubleshooting and backend technical support.",
      "Built scripts and documentation using Python to optimise network monitoring and operational workflows.",
      "Managed system security policies, database logs and infrastructure-related technical support.",
    ],
  },
];

export const certifications = [
  {
    title: "Artificial Intelligence Using Python",
    issuer: "DigiSkills.pk",
    date: "Issued July 2026",
    credentialId: "29MT4ZBMK",
  },
  {
    title: "Prompt Engineering with ChatGPT & Deepseek: AI Exploured",
    issuer: "Udemy",
    date: "Issued September 2025",
    credentialId: "UC-668e957d-3b67-4fa3-9a5b-df93e866705",
  },
];

export const education = {
  degree: "Bachelor of Computer Science (BSCS)",
  school: "Arid Agriculture University, Rawalpindi",
  period: "2021 – 2026",
};
