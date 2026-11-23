export const sections = [
  { id: "AI", name: "AI & machine learning" },
  { id: "SY", name: "Systems & embedded" },
  { id: "RS", name: "Research software" },
  { id: "EX", name: "Applications & experiments" },
];
const b = (title, ...body) => ({ title, body });
const p = (
  repo,
  slug,
  id,
  year,
  title,
  summary,
  fields,
  media,
  context,
  blocks,
  diagram,
  extra = {},
) => ({
  repo,
  slug,
  id,
  year,
  title,
  summary,
  fields,
  media,
  context,
  blocks,
  diagram,
  section: id.split("-")[0],
  yearNote: `Repository archive established in ${year}.`,
  sources: [
    {
      label: "Source repository",
      url: `https://github.com/iankuys/${repo}`,
      public: ![
        "Inflow",
        "P2PAgent",
        "pdf-analyze-ai",
        "AspireChatApp",
        "Converge",
      ].includes(repo),
    },
  ],
  figures: [
    {
      src: `/projects/diagrams/${slug}.svg`,
      alt: `${title}: ${diagram.join(", then ")}.`,
      caption: `Implementation schematic: ${diagram.join(" → ")}.`,
    },
  ],
  tech: [],
  ...extra,
});
export const projects = [
  p(
    "Inflow",
    "inflow",
    "AI-01",
    2025,
    "Inflow",
    "An AI email application connecting classification, response generation, and background workflows to a real-time inbox.",
    ["Agents", "Software"],
    ["Web", "Data"],
    "AI application · founder & founding engineer",
    [
      b(
        "The problem",
        "Email classification is only one part of an inbox workflow. An application also needs to fetch messages, retain context, organize results, and bring the user back into the loop. Inflow connects these pieces in a full-stack system.",
      ),
      b(
        "How it works",
        "A FastAPI backend connects email services, PostgreSQL records, and agents for classification and response generation. A Next.js interface presents the inbox and generated responses; WebSocket routes carry updates to connected clients.",
        "Temporal workflows represent classification, reclassification, and feedback processing. A separate workflow executor orders steps by their dependencies and passes outputs to subsequent steps. This separates ingestion, model work, persistence, and presentation.",
      ),
      b(
        "My part",
        "As founder and founding engineer, I built the FastAPI/PostgreSQL backend and Next.js inbox, including WebSocket-driven updates and AI email workflows.",
      ),
      b(
        "Engineering focus",
        "Intermediate state matters: a message may have been fetched but not classified, a reply may be generated but not accepted, and a background operation may still be running. The repository makes those stages inspectable through separate services, records, and progress components.",
      ),
      b(
        "Scope",
        "Some generic workflow handlers are simplified scaffolds. An execution framework does not mean every possible automation is complete. This page records the implemented architecture; it makes no unverified accuracy, reliability, or scale claim.",
      ),
    ],
    [
      "Gmail ingestion",
      "Classification & context",
      "Background workflows",
      "Inbox & replies",
    ],
    {
      tech: [
        "Python",
        "FastAPI",
        "Next.js",
        "PostgreSQL",
        "Temporal",
        "WebSockets",
      ],
    },
  ),
  p(
    "linkedin_agent",
    "linkedin-agent",
    "AI-02",
    2025,
    "LinkedIn Recruitment Agent",
    "A staged browser agent for search, extraction, evaluation, and structured results, with shared workflow state.",
    ["Agents", "Software"],
    ["Web", "Experiment"],
    "Agent workflow · Python",
    [
      b(
        "The problem",
        "Browser tasks become difficult to inspect when navigation, extraction, and reasoning are mixed into one long conversation. This project divides a sourcing task into explicit stages and retains the information produced along the way.",
      ),
      b(
        "How it works",
        "The workflow manager coordinates strategy creation, search, extraction, evaluation, and output assembly. Tools interact with a browser through the Chrome DevTools Protocol. Shared state holds larger intermediate records so later stages can retrieve them.",
        "Result-merging logic, structured candidate models, progress reporting, and fallback paths handle the gap between an agent response and the output the application expects.",
      ),
      b(
        "What to inspect",
        "The important boundary is between a model-driven decision and a deterministic operation: a tool searches or extracts, the workflow retains its result, and a later stage assembles a record. The source exposes those transitions instead of reducing the application to one prompt.",
      ),
      b(
        "Scope",
        "This is an orchestration project, not a validated hiring decision system. Scores are outputs of configured heuristics and prompts. README accuracy, reliability, and throughput numbers have not been reproduced here and are not treated as evaluation results.",
      ),
    ],
    ["Search strategy", "Browser tools", "Shared state", "Structured results"],
    { tech: ["Python", "AdalFlow", "CDP", "WebSockets"] },
  ),
  p(
    "nlp-and-ml-experiments",
    "ml-experiments",
    "AI-03",
    2023,
    "NLP & ML Experiments",
    "An implementation archive spanning BERT-based NLP, decision trees, and regression on structured data.",
    ["Machine learning", "Data analysis"],
    ["Experiment", "Data"],
    "Machine learning studies",
    [
      b(
        "The studies",
        "The archive brings together text and tabular experiments: BERT-related model code, decision-tree classifiers and regressors, and linear regression examples. Datasets and generated plots accompany the Python implementation. PyTorch and Transformers support the NLP work; scikit-learn, pandas, and NumPy support the tabular studies.",
      ),
      b(
        "Evaluation boundary",
        "These are learning experiments rather than one benchmarked model. A meaningful comparison requires a specified task, preprocessing, a train/test split, a baseline, and a metric. The project is shown for its implementation scope; the available plots are not presented as evidence of novel research or a newly reproduced performance result.",
      ),
    ],
    [
      "Text & tabular data",
      "Preprocessing",
      "BERT / trees / regression",
      "Plots & predictions",
    ],
    { tech: ["Python", "PyTorch", "Transformers", "scikit-learn"] },
  ),
  p(
    "obj_detection",
    "object-detection",
    "AI-04",
    2022,
    "Object Detection",
    "Camera-based vision experiments connecting pretrained models to detection overlays.",
    ["Computer vision", "Machine learning"],
    ["Experiment"],
    "Pretrained-model integration",
    [
      b(
        "The implementation",
        "The repository contains camera detection experiments using OpenCV, PyTorch, and a pretrained YOLOv5 model, alongside an Objectron example. Frames pass through model inference and become a visual overlay. The YOLO integration separates frame scoring from the rendering of labels and bounding boxes.",
      ),
      b(
        "Scope",
        "The accompanying recording illustrates the Objectron experiment, not a training run. The models are pretrained: this is application integration and visualization rather than original detector training. One recorded scene does not establish accuracy across different cameras, lighting conditions, or object categories.",
      ),
    ],
    [
      "Camera frame",
      "Pretrained model",
      "Coordinates & labels",
      "Visual overlay",
    ],
    {
      tech: ["Python", "OpenCV", "PyTorch", "YOLOv5"],
      figures: [
        {
          src: "/projects/evidence/objectron-detection-poster.webp",
          alt: "Objectron demo with a wireframe detection overlay on a camera image.",
          caption:
            "Frame from the repository’s original Objectron demo. Pretrained-model integration.",
          video: "/projects/evidence/objectron-detection.mp4",
        },
      ],
    },
  ),
  p(
    "pdf-analyze-ai",
    "pdf-analysis",
    "AI-05",
    2025,
    "Ask a PDF",
    "A document-question-answering prototype connecting PDF text extraction to an LLM and a chat interface.",
    ["Agents", "Software"],
    ["Web", "Experiment"],
    "Document AI · prototype",
    [
      b(
        "The workflow",
        "The application accepts a PDF, extracts its text with pdfplumber, and stores a record under a file identifier. Questions from the React client refer to that identifier. FastAPI upload and question endpoints connect file selection, extracted content, model requests, and the chat interface.",
      ),
      b(
        "Scope",
        "The inspected backend passes extracted document text as context. Embedding-based retrieval is not presented as an implemented feature merely because the README proposes it. This compact prototype explores the document-to-model interface; long-document selection, citation verification, and a question-answering evaluation would be separate extensions.",
      ),
    ],
    ["PDF upload", "Text extraction", "Document context", "Question & answer"],
    { tech: ["Python", "FastAPI", "pdfplumber", "React"] },
  ),
  p(
    "P2PAgent",
    "agent-messaging",
    "AI-06",
    2025,
    "Agent Messaging Prototype",
    "A WebSocket coordination prototype with room-scoped connections, client identity, and a React interface.",
    ["Agents", "Networking"],
    ["Web", "Experiment"],
    "Coordination prototype",
    [
      b(
        "The mechanism",
        "The project explores connected clients joining a messaging space and exchanging updates. Its framing is agent coordination, while the implemented transport is a central FastAPI WebSocket server. A connection manager tracks sockets by room and client identifier, handles broadcasts, and removes disconnected clients.",
      ),
      b(
        "Scope",
        "The server contains JWT-related authentication and room-code generation; React components provide lobby and chat interfaces. Room membership and token handling are not equivalent to decentralized trust, and a server-mediated broadcast is not a peer-to-peer network protocol. This case study distinguishes the implementation from the broader mesh idea.",
      ),
    ],
    [
      "Connected clients",
      "Identity & room",
      "WebSocket manager",
      "Room broadcast",
    ],
    { tech: ["Python", "FastAPI", "WebSockets", "React"] },
  ),
  p(
    "Converge",
    "converge",
    "AI-07",
    2025,
    "Converge",
    "A unified messaging prototype exploring platform adapters, a common message model, and AI-assisted workflows.",
    ["Agents", "Software"],
    ["Web", "Experiment"],
    "Messaging application · prototype",
    [
      b(
        "The architecture",
        "Messages from different platforms have different identifiers, participants, thread structures, and capabilities. Converge explores a common inbox over those differences. Its backend defines an adapter contract for authentication, fetching and sending messages, reading state, conversations, and connection checks.",
      ),
      b(
        "Scope",
        "Platform implementations sit behind the shared contract, and a mock adapter generates development messages without a live connection. The repository mixes implementations, mocks, and planned integrations. This page does not claim that every named platform is connected or production-ready: capabilities and failure modes still belong to each underlying platform.",
      ),
    ],
    [
      "Platform adapters",
      "Common message model",
      "Classification & routing",
      "Unified inbox",
    ],
    { tech: ["Python", "FastAPI", "Next.js", "TypeScript"] },
  ),
  p(
    "Thread-Scheduling",
    "thread-scheduling",
    "SY-01",
    2023,
    "Thread Scheduling",
    "A C++ study implementing FIFO, earliest-deadline-first, and rate-monotonic policies with pthreads.",
    ["Concurrency", "Software"],
    ["Experiment"],
    "Systems study · POSIX threads",
    [
      b(
        "The question",
        "How does a scheduling policy change the execution order of periodic tasks? This simulator makes the decision explicit, coordinating worker threads instead of leaving all behavior to the operating system.",
      ),
      b(
        "How it works",
        "Four workers coordinate with mutexes and condition variables. The scheduler releases work, waits for completion or preemption, and chooses the next task. FIFO follows arrival order, EDF selects the earliest deadline, and RM prioritizes shorter periods.",
        "Timestamped output exposes readiness, execution, preemption, and completion. These events make the relationship between a scheduling decision and thread coordination visible.",
      ),
      b(
        "Reproduction",
        "The unchanged source was compiled with its Makefile and exercised locally. FIFO completed with one observed deadline miss. EDF and RM aborted on a vector-bounds assertion. The trace below records the first six seconds of the FIFO run; it is not a successful three-policy comparison.",
      ),
      b(
        "Limitations",
        "This is an archived scheduling exercise, not an operating-system scheduler. The checked runs expose an implementation boundary and prevent a reliable claim that all policies meet their deadlines. Host timing and console output also influence a real-thread simulation. A deterministic event simulator would answer a different question.",
      ),
    ],
    [
      "Periodic tasks",
      "FIFO / EDF / RM",
      "Mutexes & conditions",
      "Execution trace",
    ],
    {
      tech: ["C++", "pthreads", "POSIX", "Make"],
      figures: [
        {
          src: "/projects/evidence/scheduler-fifo-trace.svg",
          alt: "Observed first-six-second FIFO execution timeline for four worker threads.",
          caption:
            "Observed FIFO trace from one local run of the unchanged simulator. Thread 0 completed iteration 2 at 2,903 ms against a 2,000 ms deadline. Bars use actual log timestamps.",
        },
        {
          src: "/projects/diagrams/thread-scheduling.svg",
          alt: "Periodic tasks connected to policy selection, synchronization and execution logs.",
          caption:
            "Implementation schematic. The policies are present in source; this diagram does not assert successful execution of all three.",
        },
      ],
    },
  ),
  p(
    "building-management-system",
    "building-management",
    "SY-02",
    2023,
    "Building Management System",
    "Raspberry Pi sensing and control combining HVAC state, door logic, weather data, and a small display.",
    ["Concurrency", "Embedded systems"],
    ["Hardware"],
    "Embedded systems · Raspberry Pi",
    [
      b(
        "The system",
        "The Python application connects environmental sensing and physical controls. It tracks temperature, humidity, motion, door state, heating/cooling state, and energy-related values. GPIO links sensors, buttons, and LEDs, while supporting modules handle a DHT sensor, an I2C LCD, and CIMIS weather data.",
      ),
      b(
        "Engineering considerations",
        "Threading allows monitoring and display work to progress concurrently. The important boundary is shared state: a reading becomes a control decision and a visible update while other inputs continue to arrive. The source demonstrates that integration; calibrated physical measurements and a hardware test would be needed to assess control performance.",
      ),
    ],
    [
      "Sensors & buttons",
      "Shared control state",
      "HVAC & door logic",
      "LCD & outputs",
    ],
    { tech: ["Python", "Raspberry Pi", "GPIO", "I2C", "Threads"] },
  ),
  p(
    "cv_automated_curtains",
    "smart-curtains",
    "SY-03",
    2022,
    "Computer Vision Smart Curtains",
    "Gesture recognition, remote commands, and scheduled actions connected to motorized curtains.",
    ["Computer vision", "Embedded systems"],
    ["Hardware", "Web"],
    "UC Irvine project · 2022",
    [
      b(
        "The project",
        "Two interfaces connect to one physical device: a web application for direct and scheduled control, and a camera-based gesture input. The system spans perception, server logic, and hardware on a Raspberry Pi.",
      ),
      b(
        "How it works",
        "The Flask application maps detected finger positions to curtain actions. Manual controls request opening, closing, or stopping, while CronTab handles scheduled actions. Camera, schedule, and web controls converge on a small shared action interface.",
        "That interface keeps the physical command vocabulary consistent across inputs. The recordings show the original project’s interface and behavior rather than a reconstructed mockup.",
      ),
      b(
        "Scope",
        "The demo is not a gesture-recognition benchmark across different people or environments. Camera uncertainty, competing commands, and stopping behavior are important boundaries whenever software controls a moving object.",
      ),
    ],
    [
      "Gesture / web / schedule",
      "Flask control",
      "Curtain commands",
      "Pi hardware",
    ],
    {
      tech: ["Python", "Flask", "Raspberry Pi", "OpenCV"],
      yearNote:
        "UC Irvine project, March–June 2022, as documented in the original portfolio.",
      figures: [
        {
          src: "/projects/evidence/curtains-poster.webp",
          alt: "Original smart-curtain interface and hardware demonstration.",
          caption:
            "Original project demonstration of the web interface and curtain hardware.",
          animation: "/projects/cv-curtains/cv-curtains-2.gif",
        },
        {
          src: "/projects/diagrams/smart-curtains.svg",
          alt: "Three input modes converge on a shared curtain control interface.",
          caption: "Control schematic showing the shared action vocabulary.",
        },
      ],
    },
  ),
  p(
    "manual-seg",
    "manual-segmentation",
    "RS-01",
    2022,
    "Manual Segmentation",
    "An interactive geometry tool for editing irregular regions and updating their area measurements.",
    ["Computer vision", "Scientific software"],
    ["Web"],
    "Research-tool feature · pysegapp",
    [
      b(
        "The problem",
        "An image-based measurement tool needs a way to represent an irregular boundary and let a person correct it. This feature connects the drawn boundary to a numerical measurement, updating both as the geometry changes.",
      ),
      b(
        "How it works",
        "Fabric.js supplies the interactive canvas. The implementation builds points and connecting lines, responds to mouse and object-movement events, and recalculates polygon area from edited coordinates.",
        "The repository identifies this as a feature originally developed for pysegapp. The technical subject is the connection between manual correction, canvas geometry, and a live area result.",
      ),
      b(
        "My part",
        "I developed the manual boundary-editing and dynamic area-calculation feature for pysegapp, connecting canvas interactions to polygon geometry.",
      ),
      b(
        "Measurement scope",
        "Area calculated from image coordinates belongs to the canvas coordinate system. Physical units require a separate calibration. The recording illustrates editing and recalculation; it is not a comparison against reference segmentations or a clinical measurement study.",
      ),
    ],
    [
      "Image coordinates",
      "Editable boundary",
      "Polygon geometry",
      "Area update",
    ],
    {
      tech: ["JavaScript", "Fabric.js", "Canvas", "Geometry"],
      figures: [
        {
          src: "/projects/evidence/manual-seg-poster.webp",
          alt: "Original editable polygon canvas with its area measurement.",
          caption:
            "Original repository demonstration: editing the boundary updates the measured area.",
          video: "/projects/evidence/manual-seg.mp4",
        },
        {
          src: "/projects/diagrams/manual-segmentation.svg",
          alt: "Image coordinates are edited as polygon geometry and used to update area.",
          caption: "Implementation schematic of the edit-and-measure loop.",
        },
      ],
    },
  ),
  p(
    "tissue-repo-discovery",
    "tissue-cohort-discovery",
    "RS-02",
    2023,
    "Tissue Cohort Discovery",
    "An R Shiny tool for selecting tissue cohorts, inspecting distributions, and exporting matching records.",
    ["Scientific software", "Data analysis"],
    ["Web", "Data"],
    "UCI MIND · research software",
    [
      b(
        "The problem",
        "Finding a cohort means combining several selection criteria and understanding what remains. The application brings cohort selection, visual summaries, and export into one interface. Its documented workflow connects to REDCap-backed records.",
      ),
      b(
        "How it works",
        "R Shiny reactive expressions represent demographic, clinical, and specimen-related filters. A combined-record selection feeds distribution plots and a download handler. The same selected cohort should drive both the charts and exported identifiers. This is a software contribution to a research workflow; the schematic contains no participant records or study findings.",
      ),
      b(
        "My part",
        "At UCI MIND, I built the R Shiny application connected to the tissue repository’s REDCap records, bringing selection, visualization, and export into the research workflow.",
      ),
    ],
    [
      "Repository records",
      "Reactive cohort filters",
      "Distributions",
      "Identifier export",
    ],
    { tech: ["R", "Shiny", "REDCap", "ggplot2"] },
  ),
  p(
    "c2c_survey_app",
    "video-study",
    "RS-03",
    2024,
    "C2C Video Study",
    "A participant-facing video survey with access checks, completion state, and REDCap-linked data capture.",
    ["Scientific software", "Software"],
    ["Web", "Data"],
    "UCI MIND · study software",
    [
      b(
        "The workflow",
        "The application supports a discrete-choice video study. A participant enters an assigned flow, views study material, and submits responses. Application state determines the next page and whether the survey has already been completed.",
      ),
      b(
        "Implementation and scope",
        "Flask routes coordinate access-key mapping, introductory pages, video pages, survey responses, and completion. REDCap helpers read and write study records. The inspected routing checks completion and previously assigned video data before continuing. This case study concerns the study software, not the research findings; its diagram uses no participant data.",
      ),
      b(
        "My part",
        "My work at UCI MIND covered the full-stack video-survey application and its research-data integration for remote cognitive studies.",
      ),
    ],
    [
      "Participant access",
      "Study & video state",
      "Response capture",
      "REDCap record",
    ],
    { tech: ["Python", "Flask", "JavaScript", "REDCap", "Docker"] },
  ),
  p(
    "zigzag_fastapi_backend",
    "zigzag",
    "RS-04",
    2024,
    "ZigZag Research Automation",
    "A Vue/FastAPI workflow turning selected research records into standardized PowerPoint material.",
    ["Scientific software", "Software"],
    ["Web", "Data"],
    "UCI MIND · workflow automation",
    [
      b(
        "The task",
        "Repeatedly preparing standardized slides creates a mechanical step between selecting a record and producing study material. ZigZag provides an interface to request the relevant data and trigger generation through one workflow.",
      ),
      b(
        "How it works",
        "The Vue frontend selects records and calls FastAPI. Backend routes retrieve record/visit selections and accept output requests. The documented system connects SQL Server queries to Visual Basic Script-based PowerPoint manipulation. The frontend and backend are presented together as one project. The schematic contains no patient data and makes no unmeasured time-saving claim.",
      ),
    ],
    [
      "Vue selection",
      "FastAPI orchestration",
      "Record / visit query",
      "PowerPoint output",
    ],
    {
      tech: ["Vue", "Python", "FastAPI", "SQL Server", "VBS"],
      sources: [
        {
          label: "Backend source",
          url: "https://github.com/iankuys/zigzag_fastapi_backend",
          public: true,
        },
        {
          label: "Frontend source",
          url: "https://github.com/iankuys/zigzag_frontend",
          public: true,
        },
      ],
    },
  ),
  p(
    "poker",
    "poker",
    "EX-01",
    2022,
    "Online Poker",
    "A multiplayer poker application combining C game rules, TCP communication, and a GTK interface.",
    ["Networking", "Software"],
    ["Desktop"],
    "Collaborative coursework · original project 2022",
    [
      b(
        "The project",
        "The networked card game separates its client, server, game rules, and deck operations into C modules. The current repository is a fork of the collaborative project. The screenshots document the original desktop interface.",
      ),
      b(
        "Implementation and context",
        "The inspected Makefile compiles with GCC using C11 and pthreads, linking GTK 2 for the client. That is the build represented here, despite the C++/GTK 3 wording in the README. This is collaborative coursework; sole authorship of every module is not implied. Protocol behavior, disconnections, and synchronized game state are the systems questions behind the visible game.",
      ),
    ],
    ["GTK client", "TCP messages", "Server state", "Game & deck rules"],
    {
      tech: ["C11", "GTK 2", "Sockets", "pthreads"],
      yearNote:
        "Original project dated 2022 in the existing portfolio; this source fork was created in 2025.",
      figures: [
        {
          src: "/projects/poker-game/poker-game.png",
          alt: "Original multiplayer poker desktop interface.",
          caption: "Original screenshot of the collaborative poker project.",
        },
        {
          src: "/projects/poker-game/poker-game-2.png",
          alt: "Second original poker client view.",
          caption: "Another view of the original desktop client.",
        },
      ],
    },
  ),
  p(
    "Space-Hell",
    "space-hell",
    "EX-02",
    2021,
    "Space Hell",
    "A C++/SFML bullet-hell game connecting player input, enemy projectiles, collision handling, and rendered state.",
    ["Software"],
    ["Desktop"],
    "Game programming · C++",
    [
      b(
        "The game",
        "Space Hell is a stage-based shooter in which the player navigates enemy projectiles. The existing project archive includes screenshots and a gameplay recording. The application connects continuously changing game state to an interactive rendered scene.",
      ),
      b(
        "Engineering focus",
        "A game loop brings together input, simulation, and rendering. Enemy behavior and projectile patterns must remain coordinated with collisions, player state, and progression. The visual material shows the game itself; it is not a performance benchmark or a claim that every visual asset was authored from scratch. Implementation discussion is limited to the archived C++/SFML project.",
      ),
    ],
    ["Player input", "Entity updates", "Collisions & state", "SFML rendering"],
    {
      tech: ["C++", "SFML", "Game programming"],
      figures: [
        {
          src: "/projects/space-hell/spacehell-2.png",
          alt: "Original Space Hell screenshot with player and enemy projectiles.",
          caption: "Original project screenshot and gameplay recording.",
          video: "/projects/evidence/space-hell.mp4",
        },
      ],
    },
  ),
  p(
    "liveSheets",
    "live-sheets",
    "EX-03",
    2025,
    "LiveSheets",
    "A collaborative grid demonstrating shared in-memory state and Socket.IO edit broadcasts.",
    ["Networking", "Software"],
    ["Web", "Experiment"],
    "Realtime application · compact experiment",
    [
      b(
        "The experiment",
        "A shared five-by-five grid makes realtime synchronization visible. A client edits a cell and sends its coordinates and value to the server. Other connected clients receive the broadcast and display the corresponding change.",
      ),
      b(
        "Implementation and limits",
        "The Flask/Socket.IO server stores the sheet in memory and handles change, connect, and disconnect events. This is a focused synchronization example. It does not implement durable storage, a formula engine, or a conflict-resolution algorithm such as a CRDT. Those boundaries make the state transitions easy to inspect without implying the capabilities of a full spreadsheet.",
      ),
    ],
    ["Cell edit", "Socket.IO event", "In-memory grid", "Client broadcast"],
    { tech: ["Python", "Flask", "Socket.IO", "JavaScript"] },
  ),
  p(
    "FlaskChatApp",
    "flask-chat",
    "EX-04",
    2025,
    "Flask Chat",
    "Room-based messaging with session state, join/leave events, and in-memory message history.",
    ["Networking", "Software"],
    ["Web", "Experiment"],
    "Realtime application · Flask",
    [
      b(
        "The application",
        "A user creates or joins a room using a code. Flask session values associate a name and room with the browser. Socket.IO carries the messages and membership events, while templates provide the page structure.",
      ),
      b(
        "Implementation and limits",
        "A server dictionary stores rooms, member counts, and messages. Handlers send to one room and append to its history; connection handlers update membership. This small design exposes the lifecycle directly. Because the state lives in one process, it does not demonstrate durable history or synchronization across multiple server instances.",
      ),
    ],
    [
      "Room code & session",
      "Socket.IO connection",
      "Room membership",
      "Messages & history",
    ],
    { tech: ["Python", "Flask", "Socket.IO", "Jinja"] },
  ),
  p(
    "tcp_chat_app",
    "tcp-chat",
    "EX-05",
    2025,
    "TCP Chat",
    "A socket-server exercise for client connections, threaded message handling, and broadcasts.",
    ["Networking", "Concurrency"],
    ["Experiment"],
    "Networking study · Python sockets",
    [
      b(
        "The mechanism",
        "The Python source separates accepting a TCP connection, handling a client, and broadcasting a message to other connected clients. Each handler runs in a thread, making the connection lifecycle and shared client state visible parts of the program.",
      ),
      b(
        "What it demonstrates",
        "Join/leave and broadcast behavior illustrate how a server coordinates several sockets. This is a small networking exercise, not a complete messaging service. Message framing, disconnect recovery, resource limits, and transport security each require an explicit design beyond the core example. The diagram describes the implemented server-mediated flow.",
      ),
    ],
    ["TCP connection", "Client thread", "Shared sockets", "Broadcast"],
    { tech: ["Python", "Sockets", "Threads"] },
  ),
  p(
    "AspireChatApp",
    "aspire-chat",
    "EX-06",
    2025,
    "Aspire Chat",
    "A .NET prototype combining Blazor pages, authentication components, and a SignalR chat hub.",
    ["Networking", "Software"],
    ["Web", "Experiment"],
    ".NET application · prototype",
    [
      b(
        "The structure",
        "The source separates an API service, an Aspire app host, shared service defaults, and a Blazor web application. Custom registration, login, and chat pages sit alongside framework starter pages. A SignalR hub supplies the realtime chat component.",
      ),
      b(
        "Implementation scope",
        "The repository includes a database context and migrations, an authentication controller, and a web authentication-state provider. This is a framework-integration prototype: it connects account-related interface state to a realtime interaction. The presence of those components is not a security audit or evidence of production deployment.",
      ),
    ],
    [
      "Blazor interface",
      "Authentication state",
      "SignalR hub",
      "API & storage",
    ],
    { tech: ["C#", ".NET Aspire", "Blazor", "SignalR"] },
  ),
  p(
    "java-swing-calendar",
    "calendar",
    "EX-07",
    2023,
    "Java Swing Calendar",
    "A desktop calendar exploring event models, date-based views, users, and local persistence.",
    ["Software"],
    ["Desktop"],
    "Desktop application · Java Swing",
    [
      b(
        "The application",
        "The calendar organizes events around a desktop date view. Java classes separate the event and user models, calendar pages, date panels, and interface components. Swing event handlers connect a selected date to the relevant stored event information.",
      ),
      b(
        "State and interaction",
        "The GUI reads events from the calendar model and displays their titles and start times. The project explores date navigation, user context, and event editing in a stateful desktop application. Its local-file storage model is different from a hosted scheduling service; distributed synchronization is outside the scope of this implementation.",
      ),
    ],
    ["Date selection", "Calendar model", "Event editing", "Local files"],
    { tech: ["Java", "Swing", "Local files"] },
  ),
  p(
    "budget_buddy_react_node",
    "budget-buddy",
    "EX-08",
    2024,
    "Budget Buddy",
    "A React/Node prototype exploring the boundary between a banking-data API and a budgeting interface.",
    ["Software", "Data analysis"],
    ["Web", "Experiment"],
    "Financial-data application · prototype",
    [
      b(
        "The integration",
        "The React frontend includes Plaid Link components and a small dashboard structure. A Node backend uses the Plaid SDK for token creation and API interaction, connecting a browser-based linking flow to server-side requests.",
      ),
      b(
        "Implemented scope",
        "This is an integration prototype rather than a complete finance product. Several dashboard and planner components are minimal, and backend code follows Plaid sample patterns. The technical subject is the API handoff and application structure. A complete budgeting workflow, security properties, or real-account behavior are not established by the presence of the integration.",
      ),
    ],
    ["React interface", "Plaid Link", "Node API", "Data presentation"],
    { tech: ["React", "TypeScript", "Node.js", "Plaid"] },
  ),
];
export const featuredSlugs = [
  "inflow",
  "linkedin-agent",
  "thread-scheduling",
  "manual-segmentation",
  "smart-curtains",
  "tissue-cohort-discovery",
];
export const fieldNames = [...new Set(projects.flatMap((p) => p.fields))];
export const mediumNames = [...new Set(projects.flatMap((p) => p.media))];
