import { PrismaClient } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

type CategorySeed = {
  name: string;
  isHeader?: boolean;
  children?: CategorySeed[];
};

const categories: CategorySeed[] = [
  {
    name: "Infocomm Technology",
    children: [
      {
        name: "Artificial Intelligence",
        isHeader: true,
        children: [
          {
            name: "Gen AI & Agentic AI",
            children: [
              { name: "Generative AI", isHeader: true },
              { name: "Agentic AI", isHeader: true },
              { name: "AI Chatbots" },
              { name: "AI Digital Humans" },
              { name: "Large Language Models (LLM)" },
            ],
          },
          {
            name: "Machine Learning",
            children: [
              { name: "Computer Vision" },
              { name: "Natural Language Processing (NLP)" },
              { name: "Generative Adversarial Network (GAN)" },
              { name: "Reinforcement Learning (RL)" },
            ],
          },
          {
            name: "AI Frameworks",
            children: [
              { name: "Pytorch" },
              { name: "Keras, Tensorflow & JAX" },
              { name: "Scikit Learn" },
              { name: "Azure ML & Bedrock" },
              { name: "R ML" },
            ],
          },
          {
            name: "AI Ethics & Governance",
          },
        ],
      },
      { name: "Data Management" },
      { name: "Programming" },
      { name: "Quantum Computing" },
      { name: "Cloud Computing" },
      { name: "Cyber Security" },
      { name: "Content Management" },
      { name: "e-Commerce" },
      { name: "Web Development" },
      { name: "Full Stack Development" },
      { name: "Mobile Apps" },
      { name: "DevOps" },
      { name: "RPA, API & Automation" },
      { name: "Networking" },
      { name: "Databases" },
      { name: "Operating Systems" },
    ],
  },
  {
    name: "Media & Design",
    children: [
      { name: "Graphics Design", isHeader: true },
      { name: "Technical Drawing", isHeader: true },
      { name: "3D Printing" },
      { name: "Video Editing" },
      { name: "Photography" },
      { name: "UX/UI Design" },
      { name: "Gaming & Animation" },
      { name: "Immersive Technologies" },
      { name: "Instructional Design" },
      { name: "Infographics" },
      { name: "eLearning" },
    ],
  },
  {
    name: "Robotics & IoT",
    children: [
      { name: "Internet of Things (IoT)" },
      { name: "ROS" },
      { name: "Raspberry Pi" },
      { name: "Arduino" },
    ],
  },
  {
    name: "Digital Marketing",
    children: [
      { name: "PPC Marketing" },
      { name: "SEO" },
      { name: "Social Media Marketing" },
      { name: "Email Marketing" },
      { name: "Video Marketing" },
      { name: "Content Marketing" },
      { name: "Marketing Analytics" },
    ],
  },
  {
    name: "Business & Soft Skills",
    children: [
      { name: "Project Management", isHeader: true },
      { name: "Soft Skills" },
      { name: "HR Management" },
      { name: "Corporate Governance" },
      { name: "Design Thinking" },
    ],
  },
  {
    name: "Financial Services",
    children: [
      { name: "Accounting", isHeader: true },
      { name: "Finance", isHeader: true },
      { name: "Blockchain" },
      { name: "Algorithmic Trading" },
      { name: "Investment" },
    ],
  },
  {
    name: "Logistics & Supply Chain",
    children: [{ name: "Supply Chain" }, { name: "ERP & CRM" }],
  },
  {
    name: "Semiconductor & Electronics",
    children: [
      { name: "Semiconductor" }, // New badge not supported by schema yet, treating as normal or could use isHeader if it meant 'badge'
      { name: "Electronics" },
      { name: "Quality Assurance" },
    ],
  },
  {
    name: "Healthcare & WSH",
    children: [{ name: "Healthcare" }, { name: "Workplace Safety & Health" }],
  },
  {
    name: "Sustainability & ESG",
    children: [
      { name: "Sustainability" },
      { name: "ISO Standards" },
      { name: "Hydroponics Urban Farming", isHeader: true },
    ],
  },
];
const courses = [
  {
    name: "Generative AI Fundamentals",
    description:
      "<p>This course demystifies the core concepts behind generative AI – from diffusion models to transformer‑based image and text generators. Participants will walk away with a practical understanding of how to build, fine‑tune, and evaluate generative models for real‑world business problems.</p>",
    fee: 1199.0,
    topics:
      "<h3>Topic 1 Foundations of Generative AI</h3><ul><li>Probabilistic Modeling & Latent Spaces</li><li>Variational Auto‑Encoders (VAEs)</li><li>Generative Adversarial Networks (GANs) Overview</li></ul><h3>Topic 2 Diffusion & Transformer Models</h3><ul><li>Diffusion Process & Denoising</li><li>Stable Diffusion, DALL‑E, Midjourney</li><li>Text‑to‑Image Transformers</li></ul><h3>Topic 3 Hands‑On Lab</h3><ul><li>Fine‑tuning a Stable Diffusion model</li><li>Generating synthetic data for downstream tasks</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses (75% attendance required).</p>",
    jobRoles:
      "<ul><li>Data Scientists</li><li>Product Managers</li><li>Creative Technologists</li></ul>",
    courseCode: "AI101",
    trainers:
      "<strong>Dr. Priya Mehta:</strong> Senior AI researcher with 12 years experience building generative models for media & advertising.",
    session: 2,
    duration: 12,
    venue:
      "Kuala Lumpur: Level 3, One Exchange, Jalan Tun‑Razak, 50400 Kuala Lumpur, Malaysia. <strong>|</strong> Penang: Suite B, Penang Tech Hub, 11700 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "Dates are provisional – final schedule confirmed after trainer availability.",
      "Post‑Course Support":
        "Two‑hour follow‑up Q&A session via Zoom within 30 days of course end.",
    },
    categoryName: "Generative AI",
  },
  {
    name: "Agentic AI & Autonomous Decision‑Making",
    description:
      "<p>Explore the emerging field of agentic AI – systems that can set goals, plan, and act autonomously in complex environments. The course covers reinforcement learning, hierarchical planning, and safety considerations for deploying autonomous agents.</p>",
    fee: 1499.0,
    topics:
      "<h3>Topic 1 Agentic AI Basics</h3><ul><li>Definition & Taxonomy of Agents</li><li>Goal Specification & Reward Engineering</li></ul><h3>Topic 2 Learning & Planning</h3><ul><li>Model‑based & Model‑free RL</li><li>Hierarchical RL & Options Framework</li></ul><h3>Topic 3 Safety & Governance</h3><ul><li>Robustness, Explainability</li><li>Ethical & Regulatory Landscape</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Issued by Tertiary Courses upon successful completion.</p>",
    jobRoles:
      "<ul><li>AI Engineers</li><li>Robotics Developers</li><li>Strategic Technology Leaders</li></ul>",
    courseCode: "AI102",
    trainers:
      "<strong>Prof. Daniel Tan:</strong> Professor of Autonomous Systems, author of “Agentic AI in Practice”, 15 years in robotics & RL research.",
    session: 3,
    duration: 15,
    venue:
      "Kuala Lumpur: Space B, KL Innovation Center, 50450 Kuala Lumpur, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer: "Course dates subject to change.",
      "Post‑Course Support": "Access to a private Slack channel for 2 months.",
    },
    categoryName: "Agentic AI",
  },
  {
    name: "Building AI Chatbots with LLMs",
    description:
      "<p>Learn how to design, develop, and deploy conversational agents powered by large language models. Covers prompt engineering, retrieval‑augmented generation, and integration with popular messaging platforms.</p>",
    fee: 999.0,
    topics:
      "<h3>Topic 1 Fundamentals of Chatbot Architecture</h3><ul><li>Rule‑based vs. LLM‑driven bots</li><li>Conversation flow design</li></ul><h3>Topic 2 Prompt Engineering & Retrieval</h3><ul><li>Effective prompting techniques</li><li>RAG pipelines (vector stores, embeddings)</li></ul><h3>Topic 3 Deployment & Monitoring</h3><ul><li>API integration (WhatsApp, Teams, Web)</li><li>Metrics, logging, continuous improvement</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Customer Experience Managers</li><li>AI Product Owners</li><li>Software Engineers</li></ul>",
    courseCode: "AI103",
    trainers:
      "<strong>Aisha Rahman:</strong> Lead Conversational AI Engineer at a fintech unicorn, 8 years building production chatbots.",
    session: 2,
    duration: 10,
    venue:
      "Penang: Innovation Lab, Level 2, 23A Jalan Kelawai, 10200 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "Lab environments use third‑party LLM APIs; costs may apply for exceeding free tier.",
      "Post‑Course Support": "One month of free consulting (up to 4 hours).",
    },
    categoryName: "AI Chatbots",
  },
  {
    name: "Creating Digital Humans for Immersive Experiences",
    description:
      "<p>Digital Humans combine photorealistic avatars with AI‑driven speech and emotion. This hands‑on workshop teaches you to model, rig, and animate digital humans and integrate them into virtual assistants, training simulators, or marketing campaigns.</p>",
    fee: 1399.0,
    topics:
      "<h3>Topic 1 Anatomy of Digital Humans</h3><ul><li>3‑D scanning vs. sculpting</li><li>Facial rigging & blend‑shapes</li></ul><h3>Topic 2 AI‑Powered Speech & Emotion</h3><ul><li>Text‑to‑speech (Neural TTS)</li><li>Emotion inference from text</li></ul><h3>Topic 3 Integration & Real‑time Rendering</h3><ul><li>Unreal Engine & Unity pipelines</li><li>Web‑based deployment (WebGL, Metaverse)</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>XR Designers</li><li>Marketing Creatives</li><li>Training & Simulation Leads</li></ul>",
    courseCode: "AI104",
    trainers:
      "<strong>Ravi Kumar:</strong> Senior Technical Artist at a leading VR studio, specialist in facial animation and AI‑driven avatars.",
    session: 3,
    duration: 14,
    venue:
      "Kuala Lumpur: Digital Innovation Centre, Suite 5, 8th Floor, 2‑Jalan Stuart, 50470 Kuala Lumpur, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer:
        "Software licences (e.g., Unity Pro) are provided for the duration of the course.",
      "Post‑Course Support":
        "Access to project files and 2‑hour follow‑up review.",
    },
    categoryName: "AI Digital Humans",
  },
  {
    name: "Large Language Models (LLM) – Theory & Practice",
    description:
      "<p>An intensive deep‑dive into transformer architectures, scaling laws, and fine‑tuning techniques that power modern LLMs such as GPT‑4, LLaMA, and Claude. Participants will train a small LLM from scratch on a GPU cluster and learn to adapt it for domain‑specific tasks.</p>",
    fee: 1599.0,
    topics:
      "<h3>Topic 1 Transformer Fundamentals</h3><ul><li>Self‑attention, positional encoding</li><li>Scaling laws & model size trade‑offs</li></ul><h3>Topic 2 Training & Fine‑tuning</h3><ul><li>Dataset curation, tokenization</li><li>LoRA, PEFT, Q‑LoRA methods</li></ul><h3>Topic 3 Deployment & Inference</h3><ul><li>Quantization, distillation</li><li>API serving (FastAPI, Triton)</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>ML Researchers</li><li>Data Scientists</li><li>AI Product Engineers</li></ul>",
    courseCode: "AI105",
    trainers:
      "<strong>Dr. Linh Pham:</strong> Research Scientist at a leading LLM lab, author of several open‑source LLM toolkits.",
    session: 4,
    duration: 18,
    venue:
      "Kuala Lumpur: AI Research Hub, Suite 12, 3rd Floor, 1‑Jalan Technology, 50490 Kuala Lumpur, Malaysia.",
    level: "Advanced",
    notes: {
      Disclaimer:
        "GPU resources are limited; participants may share compute nodes.",
      "Post‑Course Support":
        "Free 1‑month cloud credits on the partner GPU provider.",
    },
    categoryName: "Large Language Models (LLM)",
  },
  {
    name: "Computer Vision with Python",
    description:
      "<p>From image preprocessing to object detection and segmentation, this course equips learners with the practical skills to build end‑to‑end CV pipelines using OpenCV, PyTorch, and TensorFlow.</p>",
    fee: 1199.0,
    topics:
      "<h3>Topic 1 Image Fundamentals</h3><ul><li>Color spaces, filtering, edge detection</li></ul><h3>Topic 2 Deep Learning for Vision</h3><ul><li>CNN basics, Transfer learning (ResNet, EfficientNet)</li><li>Object detection (YOLO, Faster R‑CNN)</li></ul><h3>Topic 3 Projects & Deployment</h3><ul><li>Image classification API</li><li>Real‑time video analytics</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Computer Vision Engineers</li><li>Product Designers</li><li>Research Scientists</li></ul>",
    courseCode: "CV101",
    trainers:
      "<strong>Ahmad Zulkifli:</strong> Senior Computer Vision Engineer, 10 years experience in facial recognition and surveillance systems.",
    session: 2,
    duration: 12,
    venue:
      "Penang: Vision Lab, Level 1, 45B Lorong Batu, 11500 Penang, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer: "Bring a laptop with CUDA‑capable GPU for best experience.",
      "Post‑Course Support":
        "Two weeks of office‑hour Q&A via Microsoft Teams.",
    },
    categoryName: "Computer Vision",
  },
  {
    name: "Natural Language Processing (NLP) Essentials",
    description:
      "<p>Covering the full NLP pipeline – text preprocessing, embeddings, sequence models, and modern transformer‑based methods – this course is designed for developers who want to build intelligent language applications.</p>",
    fee: 1099.0,
    topics:
      "<h3>Topic 1 Text Processing</h3><ul><li>Tokenization, stop‑word removal, stemming/lemmatization</li></ul><h3>Topic 2 Classical Methods</h3><ul><li>TF‑IDF, Word2Vec, GloVe</li><li>Naïve Bayes, SVM for text classification</li></ul><h3>Topic 3 Transformers & LLMs</h3><ul><li>BERT, RoBERTa fine‑tuning</li><li>Prompt engineering for downstream tasks</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Data Analysts</li><li>Content Engineers</li><li>AI Product Managers</li></ul>",
    courseCode: "NLP101",
    trainers:
      "<strong>Dr. Siti Nurhaliza:</strong> NLP specialist with experience building chatbots for banking and e‑commerce.",
    session: 3,
    duration: 14,
    venue:
      "Kuala Lumpur: Language AI Lab, Suite 9, 4th Floor, 12‑Jalan Data, 50480 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "Free tier of HuggingFace used for demos; larger models may need paid API keys.",
      "Post‑Course Support": "Access to shared notebooks for 30 days.",
    },
    categoryName: "Natural Language Processing (NLP)",
  },
  {
    name: "Generative Adversarial Networks (GAN) – Hands‑On",
    description:
      "<p>Deep dive into GAN theory, loss functions, and practical implementation. Students will build image‑to‑image translation, style transfer, and text‑to‑image models using PyTorch.</p>",
    fee: 1299.0,
    topics:
      "<h3>Topic 1 GAN Theory</h3><ul><li>Min‑max game, loss landscapes</li><li>DCGAN, WGAN‑GP</li></ul><h3>Topic 2 Advanced GANs</h3><ul><li>StyleGAN2, CycleGAN, Pix2Pix</li><li>Conditional GANs</li></ul><h3>Topic 3 Project Lab</h3><ul><li>Generate synthetic data for a downstream classifier</li><li>Deploy a GAN as a REST API</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Creative Technologists</li><li>Computer Vision Engineers</li><li>Research Scientists</li></ul>",
    courseCode: "GAN101",
    trainers:
      "<strong>Mohamed Al‑Farsi:</strong> AI researcher, author of ‘Practical GANs’, 9 years experience in generative media.",
    session: 3,
    duration: 12,
    venue:
      "Penang: AI Creative Studio, 3rd Floor, 78A Jalan Kecil, 11700 Penang, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer: "Training large GANs may require external cloud GPU credits.",
      "Post‑Course Support":
        "One month of free cloud GPU credits (up to $150).",
    },
    categoryName: "Generative Adversarial Network (GAN)",
  },
  {
    name: "Reinforcement Learning (RL) for Decision Systems",
    description:
      "<p>This course introduces the fundamentals of RL and enables participants to build agents for game AI, robotics, and business optimisation using OpenAI Gym, Stable‑Baselines3 and Ray RLlib.</p>",
    fee: 1349.0,
    topics:
      "<h3>Topic 1 RL Foundations</h3><ul><li>Markov Decision Processes, Bellman equations</li><li>Policy vs. value‑based methods</li></ul><h3>Topic 2 Algorithms</h3><ul><li>DQN, PPO, A2C, SAC</li><li>Exploration strategies</li></ul><h3>Topic 3 Scalable RL</h3><ul><li>Ray RLlib distributed training</li><li>Real‑world case study: inventory management</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>AI Engineers</li><li>Operations Analysts</li><li>Robotics Developers</li></ul>",
    courseCode: "RL101",
    trainers:
      "<strong>Dr. Kevin Liu:</strong> Lead RL Scientist, 11 years building agents for supply‑chain optimisation.",
    session: 4,
    duration: 16,
    venue:
      "Kuala Lumpur: Advanced AI Lab, Suite 18, 7th Floor, 9‑Jalan Kuala, 50460 Kuala Lumpur, Malaysia.",
    level: "Advanced",
    notes: {
      Disclaimer:
        "Some environments require external simulators (e.g., Unity‑ML‑Agents).",
      "Post‑Course Support":
        "Two follow‑up webinars on scaling RL in production.",
    },
    categoryName: "Reinforcement Learning (RL)",
  },
  {
    name: "PyTorch for Deep Learning",
    description:
      "<p>Hands‑on exploration of PyTorch – tensors, autograd, model building, and deployment. By the end of the course, participants will have built an end‑to‑end image classification pipeline.</p>",
    fee: 999.0,
    topics:
      "<h3>Topic 1 PyTorch Basics</h3><ul><li>Tensors, GPU acceleration</li><li>Autograd & custom loss functions</li></ul><h3>Topic 2 Neural Network Design</h3><ul><li>nn.Module, optimizers, learning rate schedulers</li><li>Transfer learning with pretrained models</li></ul><h3>Topic 3 Production</h3><ul><li>ONNX export, TorchServe, FastAPI</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>ML Engineers</li><li>Data Scientists</li><li>Research Engineers</li></ul>",
    courseCode: "PT101",
    trainers:
      "<strong>Nurul Aisyah:</strong> Senior Machine Learning Engineer, 7 years of PyTorch deployments in fintech.",
    session: 2,
    duration: 10,
    venue:
      "Penang: AI Training Center, Suite 4, 12‑Jalan Kumbang, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "GPU‑enabled laptops recommended.",
      "Post‑Course Support": "1‑hour code review session within 2 weeks.",
    },
    categoryName: "Pytorch",
  },
  {
    name: "Keras, TensorFlow & JAX – Modern Deep Learning Stack",
    description:
      "<p>Compare three of the most popular deep‑learning frameworks. Learn when to choose Keras/TensorFlow, when JAX shines, and how to migrate models across them.</p>",
    fee: 1199.0,
    topics:
      "<h3>Topic 1 TensorFlow/Keras</h3><ul><li>Functional API, tf.data pipelines</li></ul><h3>Topic 2 JAX Fundamentals</h3><ul><li>JIT compilation, vmap, automatic differentiation</li></ul><h3>Topic 3 Inter‑Framework Workflows</h3><ul><li>Model conversion (TF ↔︎ JAX), mixed‑precision training</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Deep Learning Researchers</li><li>AI Developers</li><li>Data Engineers</li></ul>",
    courseCode: "DL102",
    trainers:
      "<strong>Prof. Chan Wei:</strong> Associate Professor, author of “Deep Learning with JAX”, 12 years academic + industry experience.",
    session: 3,
    duration: 12,
    venue:
      "Kuala Lumpur: Tech Hub, 2nd Floor, Block B, 5‑Jalan Inovasi, 50420 Kuala Lumpur, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer: "GPU resources provided for both TF and JAX labs.",
      "Post‑Course Support": "Repository with starter notebooks for 3 months.",
    },
    categoryName: "Keras, Tensorflow & JAX",
  },
  {
    name: "Scikit‑Learn for Classical Machine Learning",
    description:
      "<p>Focus on model building, evaluation, and pipelines using scikit‑learn. Ideal for business analysts and data scientists who need quick, interpretable solutions.</p>",
    fee: 799.0,
    topics:
      "<h3>Topic 1 Data Preparation</h3><ul><li>Imputation, scaling, feature engineering</li></ul><h3>Topic 2 Supervised Learning</h3><ul><li>Regression, classification, ensemble methods</li></ul><h3>Topic 3 Model Management</h3><ul><li>Pipeline, cross‑validation, hyper‑parameter tuning (GridSearchCV)</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Business Analysts</li><li>Data Scientists</li><li>Product Managers</li></ul>",
    courseCode: "SK101",
    trainers:
      "<strong>Linda Tan:</strong> Lead Data Analyst, 9 years using scikit‑learn for churn prediction and credit scoring.",
    session: 2,
    duration: 8,
    venue:
      "Penang: Data Lab, Suite 2, 34A Jalan Bunga, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "No GPU needed; all labs run on CPU.",
      "Post‑Course Support": "One month of email Q&A.",
    },
    categoryName: "Scikit Learn",
  },
  {
    name: "Azure Machine Learning & Amazon Bedrock",
    description:
      "<p>Learn to build, train, and deploy models on two leading cloud platforms. Covers Azure ML pipelines, MLOps, and using Amazon Bedrock’s foundation models for quick prototyping.</p>",
    fee: 1399.0,
    topics:
      "<h3>Topic 1 Azure ML Studio</h3><ul><li>Compute targets, data stores, AutoML</li></ul><h3>Topic 2 MLOps on Azure</h3><ul><li>CI/CD with Azure DevOps, model versioning</li></ul><h3>Topic 3 Amazon Bedrock</h3><ul><li>Foundation model selection, prompt engineering, API integration</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Cloud AI Engineers</li><li>Data Platform Architects</li><li>Solution Consultants</li></ul>",
    courseCode: "CLOUDAI01",
    trainers:
      "<strong>Samuel Ong:</strong> Cloud Solutions Architect, Microsoft Certified Trainer, 10 years building end‑to‑end MLOps pipelines.",
    session: 3,
    duration: 14,
    venue:
      "Kuala Lumpur: Cloud Innovation Centre, Suite 11, 6th Floor, 1‑Jalan Cloud, 50450 Kuala Lumpur, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer:
        "Free tier credits for Azure and AWS are pre‑allocated for labs.",
      "Post‑Course Support": "30‑day free consulting on Azure/Bedrock setup.",
    },
    categoryName: "Azure ML & Bedrock",
  },
  {
    name: "R for Machine Learning & Statistics",
    description:
      "<p>A practical guide to using R for data manipulation, statistical modelling, and machine‑learning workflows. Learners will build regression, classification, and time‑series models using tidyverse and caret.</p>",
    fee: 899.0,
    topics:
      "<h3>Topic 1 R Foundations</h3><ul><li>Data frames, dplyr, ggplot2</li></ul><h3>Topic 2 Statistical Modelling</h3><ul><li>Linear & logistic regression, ANOVA</li></ul><h3>Topic 3 Machine Learning with caret</h3><ul><li>Cross‑validation, hyper‑parameter tuning, model stacking</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Statisticians</li><li>Data Analysts</li><li>Research Scientists</li></ul>",
    courseCode: "RML101",
    trainers:
      "<strong>Dr. Arif Abdullah:</strong> Professor of Biostatistics, author of “Applied R for Data Science”.",
    session: 2,
    duration: 10,
    venue:
      "Penang: R Analytics Hub, 2nd Floor, 55A Jalan Kecil, 11700 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "All labs run on RStudio Server (cloud).",
      "Post‑Course Support": "Two follow‑up R‑script reviews.",
    },
    categoryName: "R ML",
  },
  {
    name: "Data Management Foundations",
    description:
      "<p>This course covers data governance, data quality, master data management, and modern data‑lake architectures to help organisations treat data as a strategic asset.</p>",
    fee: 999.0,
    topics:
      "<h3>Topic 1 Data Governance</h3><ul><li>Policies, stewardship, lineage</li></ul><h3>Topic 2 Data Quality & Master Data Management</h3><ul><li>Profiling, cleansing, MDM concepts</li></ul><h3>Topic 3 Data Lake & Warehouse Design</h3><ul><li>Lakehouse, Delta Lake, Snowflake basics</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Data Engineers</li><li>Data Governance Leads</li><li>Business Analysts</li></ul>",
    courseCode: "DM101",
    trainers:
      "<strong>Fahmi Zakaria:</strong> Data Architecture Lead, 12 years building enterprise data platforms.",
    session: 2,
    duration: 12,
    venue:
      "Kuala Lumpur: Data Strategy Center, Suite 3, 8th Floor, 3‑Jalan Data, 50430 Kuala Lumpur, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer: "Hands‑on labs use Azure Synapse & AWS S3 free tiers.",
      "Post‑Course Support": "One‑hour data‑architecture review.",
    },
    categoryName: "Data Management",
  },
  {
    name: "Programming Fundamentals (Python & JavaScript)",
    description:
      "<p>A starter course for non‑technical professionals. Covers programming logic, variables, control flow, functions, and basic web scripting.</p>",
    fee: 749.0,
    topics:
      "<h3>Topic 1 Basics of Programming</h3><ul><li>Variables, data types, operators</li></ul><h3>Topic 2 Control Structures</h3><ul><li>If/else, loops, error handling</li></ul><h3>Topic 3 Intro to Web Scripting</h3><ul><li>HTML, CSS fundamentals, JavaScript DOM manipulation</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Business Analysts</li><li>Product Coordinators</li><li>Marketing Technologists</li></ul>",
    courseCode: "PROG101",
    trainers:
      "<strong>Lee Ming:</strong> Senior Software Engineer, 8 years teaching introductory programming.</",
    session: 3,
    duration: 15,
    venue:
      "Penang: Coding Academy, Suite 6, 22 Jalan Kuala, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "No prior coding experience required.",
      "Post‑Course Support":
        "Access to a community Discord channel for 2 months.",
    },
    categoryName: "Programming",
  },
  {
    name: "Quantum Computing Basics",
    description:
      "<p>Introduce quantum bits, superposition, entanglement, and how to program quantum circuits using Qiskit. Ideal for tech leaders curious about the impact of quantum on their industry.</p>",
    fee: 1299.0,
    topics:
      "<h3>Topic 1 Quantum Theory Primer</h3><ul><li>Qubits, gates, measurement</li></ul><h3>Topic 2 Quantum Algorithms</h3><ul><li>Deutsch‑Jozsa, Grover’s search</li></ul><h3>Topic 3 Hands‑On with Qiskit</h3><ul><li>Building circuits, running on IBM Quantum Experience</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Research Engineers</li><li>Innovation Leads</li><li>Strategic technologists</li></ul>",
    courseCode: "QC101",
    trainers:
      "<strong>Dr. Ananya Rao:</strong> Quantum scientist, 10 years in quantum algorithm development.",
    session: 2,
    duration: 10,
    venue:
      "Kuala Lumpur: Quantum Lab, 4th Floor, 9‑Jalan Quantum, 50470 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "All simulations run on IBM Cloud’s free quantum sandbox.",
      "Post‑Course Support": "Free access to Qiskit tutorials for 30 days.",
    },
    categoryName: "Quantum Computing",
  },
  {
    name: "Cloud Computing Essentials (AWS & Azure)",
    description:
      "<p>Fundamentals of cloud services – compute, storage, networking, security – with hands‑on labs on AWS and Azure. Participants will deploy a three‑tier web application.</p>",
    fee: 1199.0,
    topics:
      "<h3>Topic 1 Core Cloud Concepts</h3><ul><li>IaaS, PaaS, SaaS, regions, availability zones</li></ul><h3>Topic 2 AWS Lab</h3><ul><li>EC2, S3, RDS, IAM</li></ul><h3>Topic 3 Azure Lab</h3><ul><li>VM, Blob Storage, Azure SQL, RBAC</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Cloud Engineers</li><li>System Administrators</li><li>DevOps Specialists</li></ul>",
    courseCode: "CLOUD101",
    trainers:
      "<strong>Nazri Hisham:</strong> Cloud Architect, 12 years designing multi‑cloud solutions.",
    session: 3,
    duration: 14,
    venue:
      "Penang: Cloud Learning Center, Suite 1, 33 Jalan Lang, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "Free tier credits for AWS and Azure are allocated for the duration of the course.",
      "Post‑Course Support":
        "One month of post‑lab troubleshooting assistance.",
    },
    categoryName: "Cloud Computing",
  },
  {
    name: "Cyber Security Fundamentals",
    description:
      "<p>Learn the principles of information security, threat modeling, network defense, and incident response. Includes labs on Wireshark, Metasploit, and cloud security best practices.</p>",
    fee: 1099.0,
    topics:
      "<h3>Topic 1 Security Basics</h3><ul><li>Confidentiality, Integrity, Availability, CIA triad</li></ul><h3>Topic 2 Defensive Techniques</h3><ul><li>Firewalls, IDS/IPS, VPNs</li></ul><h3>Topic 3 Hands‑On Labs</h3><ul><li>Network sniffing, vulnerability scanning, basic pentesting</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Security Analysts</li><li>IT Administrators</li><li>Compliance Officers</li></ul>",
    courseCode: "SEC101",
    trainers:
      "<strong>Rashid Al‑Bahar:</strong> Certified Ethical Hacker (CEH), 9 years in SOC operations.",
    session: 2,
    duration: 12,
    venue:
      "Kuala Lumpur: SecureTech Lab, Suite 7, 5th Floor, 8‑Jalan Secure, 50440 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "Labs use isolated virtual environments; no real systems are harmed.",
      "Post‑Course Support":
        "Two‑hour follow‑up incident‑response tabletop exercise.",
    },
    categoryName: "Cyber Security",
  },

  {
    name: "Content Management Systems (CMS) – WordPress & Headless",
    description:
      "<p>Explore traditional CMS (WordPress) and modern headless approaches (Strapi, Contentful). Build and publish a site, then expose content via APIs.</p>",
    fee: 849.0,
    topics:
      "<h3>Topic 1 WordPress Basics</h3><ul><li>Installation, themes, plugins, SEO basics</li></ul><h3>Topic 2 Headless CMS</h3><ul><li>Content modeling, API delivery, JAMstack integration</li></ul><h3>Topic 3 Deployment</h3><ul><li>Static site generators, Netlify/Vercel hosting</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Web Content Editors</li><li>Digital Marketers</li><li>Front‑end Developers</li></ul>",
    courseCode: "CMS101",
    trainers:
      "<strong>Ani Liyana:</strong> Senior Front‑end Engineer, 10 years building WordPress and headless sites.",
    session: 2,
    duration: 9,
    venue:
      "Penang: Digital Media Hub, Suite 3, 12 Jalan Teknologi, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "WordPress labs run on a shared LAMP stack; headless labs use Netlify free tier.",
      "Post‑Course Support": "30‑day email support for deployment issues.",
    },
    categoryName: "Content Management",
  },

  {
    name: "e‑Commerce Strategy & Platform Implementation",
    description:
      "<p>From market analysis to platform selection (Shopify, WooCommerce, Magento) and omnichannel fulfillment. Includes a capstone project of launching a live store.</p>",
    fee: 1249.0,
    topics:
      "<h3>Topic 1 e‑Commerce Foundations</h3><ul><li>Business models, payment gateways, logistics</li></ul><h3>Topic 2 Platform Deep‑Dive</h3><ul><li>Shopify store setup, WooCommerce customization, Magento architecture</li></ul><h3>Topic 3 Marketing & Analytics</h3><ul><li>SEO, paid ads, conversion tracking</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>e‑Commerce Managers</li><li>Digital Business Strategists</li><li>Product Owners</li></ul>",
    courseCode: "ECOM101",
    trainers:
      "<strong>Rohit Menon:</strong> e‑Commerce consultant, 12 years launching multi‑national online stores.",
    session: 3,
    duration: 16,
    venue:
      "Kuala Lumpur: Retail Innovation Center, Suite 15, 10th Floor, 4‑Jalan Retail, 50460 Kuala Lumpur, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer:
        "Live store demo runs on a sandbox domain; no real transactions processed.",
      "Post‑Course Support": "One‑hour post‑launch health check.",
    },
    categoryName: "e-Commerce",
  },

  {
    name: "Full Stack Web Development (MERN)",
    description:
      "<p>Learn to build modern web applications using MongoDB, Express, React, and Node.js. Includes API design, authentication, state management, and deployment.</p>",
    fee: 1399.0,
    topics:
      "<h3>Topic 1 Backend with Node & Express</h3><ul><li>RESTful APIs, JWT authentication, MVC pattern</li></ul><h3>Topic 2 Frontend with React</h3><ul><li>Hooks, Redux, UI component libraries</li></ul><h3>Topic 3 Full‑Stack Integration & DevOps</h3><ul><li>MongoDB Atlas, Docker, CI/CD pipelines</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Full‑Stack Engineers</li><li>Web Developers</li><li>Technical Leads</li></ul>",
    courseCode: "FSW101",
    trainers:
      "<strong>Leong Jia Han:</strong> Senior Software Engineer, 10 years building MERN applications for fintech.",
    session: 4,
    duration: 20,
    venue:
      "Penang: Tech Innovation Lab, Suite 8, 20 Jalan Dev, 11500 Penang, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer: "Docker required for labs; cloud credits provided.",
      "Post‑Course Support": "Two weeks of code‑review assistance.",
    },
    categoryName: "Full Stack Development",
  },

  {
    name: "Mobile App Development with Flutter",
    description:
      "<p>Cross‑platform mobile development using Google's Flutter SDK. Participants will create a fully functional iOS/Android app with state management, backend integration, and publishing basics.</p>",
    fee: 1249.0,
    topics:
      "<h3>Topic 1 Flutter Foundations</h3><ul><li>Widgets, layout, navigation</li></ul><h3>Topic 2 State Management & APIs</h3><ul><li>Provider, Bloc, REST integration</li></ul><h3>Topic 3 Deployment</h3><ul><li>Testing, signing, publishing to App Store & Play Store</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Mobile Developers</li><li>Product Engineers</li><li>UX Engineers</li></ul>",
    courseCode: "MOB101",
    trainers:
      "<strong>Arif Zulkifli:</strong> Mobile Engineer, 9 years building Flutter apps for retail and health tech.",
    session: 3,
    duration: 15,
    venue:
      "Kuala Lumpur: Mobile Labs, Suite 4, 6th Floor, 2‑Jalan Mobile, 50420 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "Students need a macOS device for iOS build labs.",
      "Post‑Course Support": "One month of build‑pipeline assistance.",
    },
    categoryName: "Mobile Apps",
  },

  {
    name: "DevOps Foundations (CI/CD, IaC, Monitoring)",
    description:
      "<p>Introduce the DevOps culture, continuous integration / delivery pipelines, infrastructure as code (Terraform), and monitoring (Prometheus, Grafana).</p>",
    fee: 1099.0,
    topics:
      "<h3>Topic 1 CI/CD Pipelines</h3><ul><li>GitHub Actions, Jenkins basics</li></ul><h3>Topic 2 Infrastructure as Code</h3><ul><li>Terraform, cloud provisioning</li></ul><h3>Topic 3 Monitoring & Logging</h3><ul><li>Prometheus, Grafana, ELK stack</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>DevOps Engineers</li><li>Site Reliability Engineers</li><li>System Administrators</li></ul>",
    courseCode: "DEVOPS101",
    trainers:
      "<strong>Surya Prakash:</strong> DevOps lead, 11 years automating pipelines for enterprise SaaS.",
    session: 3,
    duration: 14,
    venue:
      "Penang: Ops Lab, Suite 9, 3rd Floor, 45 Jalan Ops, 11500 Penang, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer: "Free tier cloud accounts (AWS, GCP) are used for labs.",
      "Post‑Course Support": "Two‑hour pipeline audit after course.",
    },
    categoryName: "DevOps",
  },

  {
    name: "RPA, API & Automation Essentials",
    description:
      "<p>Learn robotic process automation with UiPath, API design with Swagger, and workflow automation using Power Automate.</p>",
    fee: 999.0,
    topics:
      "<h3>Topic 1 RPA with UiPath</h3><ul><li>Recorder, selectors, exception handling</li></ul><h3>Topic 2 API Design & Testing</h3><ul><li>OpenAPI spec, Postman, OAuth2</li></ul><h3>Topic 3 End‑to‑End Automation</h3><ul><li>Power Automate flows, integration with Teams</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Automation Analysts</li><li>Business Process Engineers</li><li>IT Integration Specialists</li></ul>",
    courseCode: "AUTOM101",
    trainers:
      "<strong>Jenna Tan:</strong> Senior Automation Consultant, 8 years delivering RPA projects in banking.",
    session: 2,
    duration: 10,
    venue:
      "Kuala Lumpur: Automation Hub, Suite 12, 9th Floor, 7‑Jalan Automation, 50410 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "UiPath Community Edition used; no licence cost.",
      "Post‑Course Support": "One month of Slack‑based troubleshooting.",
    },
    categoryName: "RPA, API & Automation",
  },

  {
    name: "Networking Fundamentals (CCNA‑Level)",
    description:
      "<p>Cover networking concepts, IP addressing, routing & switching, VLANs, and basic security. Prepares for Cisco CCNA certification.</p>",
    fee: 899.0,
    topics:
      "<h3>Topic 1 Network Basics</h3><ul><li>OSI/TCP‑IP models, Ethernet, cabling</li></ul><h3>Topic 2 Switching & Routing</h3><ul><li>VLANs, inter‑VLAN routing, static & OSPF routing</li></ul><h3>Topic 3 Network Services & Security</h3><ul><li>DHCP, DNS, ACLs, VPN basics</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses (eligible for CCNA exam voucher).</p>",
    jobRoles:
      "<ul><li>Network Engineers</li><li>IT Support Technicians</li><li>System Administrators</li></ul>",
    courseCode: "NET101",
    trainers:
      "<strong>Mohd Zulkifli:</strong> Cisco Certified Instructor, 15 years designing enterprise networks.",
    session: 3,
    duration: 12,
    venue:
      "Penang: Network Lab, Suite 5, 2nd Floor, 33 Jalan Net, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "Packet Tracer labs provided; optional physical hardware labs available.",
      "Post‑Course Support": "Two‑hour lab Q&A after the course.",
    },
    categoryName: "Networking",
  },

  {
    name: "Database Design & SQL (MySQL & PostgreSQL)",
    description:
      "<p>Learn relational database fundamentals, ER modelling, query optimisation, and transaction management using MySQL and PostgreSQL.</p>",
    fee: 849.0,
    topics:
      "<h3>Topic 1 Relational Theory & Modelling</h3><ul><li>Normalization, ER diagrams</li></ul><h3>Topic 2 SQL Querying</h3><ul><li>SELECT, JOINS, sub‑queries, window functions</li></ul><h3>Topic 3 Performance & Administration</h3><ul><li>Indexes, EXPLAIN, backup & recovery</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Database Administrators</li><li>Backend Developers</li><li>Data Analysts</li></ul>",
    courseCode: "DB101",
    trainers:
      "<strong>Lim Siew Fong:</strong> DBA with 12 years managing high‑availability clusters.",
    session: 2,
    duration: 9,
    venue:
      "Kuala Lumpur: Data Lab, Suite 6, 4th Floor, 10‑Jalan Data, 50430 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "Labs run on Dockerised MySQL & PostgreSQL containers.",
      "Post‑Course Support": "One month of query‑optimisation assistance.",
    },
    categoryName: "Databases",
  },

  {
    name: "Operating Systems Concepts (Linux & Windows)",
    description:
      "<p>Fundamentals of OS architecture, process management, memory, file systems, and security for both Linux and Windows environments.</p>",
    fee: 799.0,
    topics:
      "<h3>Topic 1 OS Architecture</h3><ul><li>Kernel vs. user space, system calls</li></ul><h3>Topic 2 Process & Memory Management</h3><ul><li>Scheduling, virtualization, paging</li></ul><h3>Topic 3 Security & Administration</h3><ul><li>Permissions, services, monitoring tools</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>System Administrators</li><li>DevOps Engineers</li><li>Support Engineers</li></ul>",
    courseCode: "OS101",
    trainers:
      "<strong>Azri Khalid:</strong> Linux Systems Engineer, 10 years in enterprise server management.",
    session: 2,
    duration: 8,
    venue:
      "Penang: Systems Lab, Suite 11, 1st Floor, 22 Jalan Sys, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "Virtual machines provided for both Linux and Windows labs.",
      "Post‑Course Support": "Two‑hour troubleshooting session post‑course.",
    },
    categoryName: "Operating Systems",
  },

  {
    name: "Graphics Design Fundamentals (Adobe Suite)",
    description:
      "<p>Introductory course covering Photoshop, Illustrator, and InDesign for creating professional visual assets.</p>",
    fee: 899.0,
    topics:
      "<h3>Topic 1 Photoshop Basics</h3><ul><li>Layers, masks, retouching</li></ul><h3>Topic 2 Illustrator Essentials</h3><ul><li>Vector creation, typography, logos</li></ul><h3>Topic 3 InDesign for Layouts</h3><ul><li>Brochures, magazines, digital PDFs</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Graphic Designers</li><li>Marketing Creatives</li><li>Content Producers</li></ul>",
    courseCode: "GD101",
    trainers:
      "<strong>Nadia Rahman:</strong> Senior Graphic Designer, 12 years in branding & advertising.",
    session: 3,
    duration: 12,
    venue:
      "Kuala Lumpur: Creative Studio, Suite 2, 3rd Floor, 8‑Jalan Creative, 50470 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "Design software licences provided for the duration of the training.",
      "Post‑Course Support": "One month of portfolio review.",
    },
    categoryName: "Graphics Design",
  },

  {
    name: "Technical Drawing & CAD (AutoCAD)",
    description:
      "<p>Fundamentals of technical drawing, orthographic projection, and 2‑D/3‑D modelling using AutoCAD.</p>",
    fee: 799.0,
    topics:
      "<h3>Topic 1 Drawing Basics</h3><ul><li>Lines, circles, dimensions, layers</li></ul><h3>Topic 2 2‑D Drafting</h3><ul><li>Layouts, blocks, annotation</li></ul><h3>Topic 3 Intro to 3‑D Modelling</h3><ul><li>Extrusion, lofts, rendering basics</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Draughtsmen</li><li>Mechanical Designers</li><li>Architecture Assistants</li></ul>",
    courseCode: "CAD101",
    trainers:
      "<strong>Ahmad Zain:</strong> Certified AutoCAD Instructor, 14 years in mechanical design.",
    session: 2,
    duration: 9,
    venue:
      "Penang: Design Lab, Suite 7, 2nd Floor, 40 Jalan Design, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "AutoCAD licences supplied for labs.",
      "Post‑Course Support": "Two‑hour design critique session.",
    },
    categoryName: "Technical Drawing",
  },

  {
    name: "3D Printing & Additive Manufacturing",
    description:
      "<p>Overview of additive manufacturing processes, slicer software, material selection, and hands‑on operation of FDM and SLA printers.</p>",
    fee: 1199.0,
    topics:
      "<h3>Topic 1 AM Technologies</h3><ul><li>FDM, SLA, SLS basics</li></ul><h3>Topic 2 Design for 3D Printing</h3><ul><li>STL optimisation, support generation</li></ul><h3>Topic 3 Lab & Post‑Processing</h3><ul><li>Printer setup, calibration, finishing</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Product Designers</li><li>Prototyping Engineers</li><li>Manufacturing Technicians</li></ul>",
    courseCode: "3DP101",
    trainers:
      "<strong>Kumar Patel:</strong> Additive Manufacturing Specialist, 11 years in rapid prototyping.",
    session: 2,
    duration: 12,
    venue:
      "Kuala Lumpur: Makerspace, Suite 3, 1st Floor, 12‑Jalan Maker, 50480 Kuala Lumpur, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer:
        "Materials (PLA, resin) provided for labs; additional material purchases optional.",
      "Post‑Course Support": "One month of print‑failure troubleshooting.",
    },
    categoryName: "3D Printing",
  },

  {
    name: "Video Editing with Adobe Premiere Pro",
    description:
      "<p>Learn video editing workflow – import, timeline editing, colour correction, audio mixing, and export for web and broadcast.</p>",
    fee: 899.0,
    topics:
      "<h3>Topic 1 Premiere Pro Basics</h3><ul><li>Project setup, media import, timeline editing</li></ul><h3>Topic 2 Advanced Editing</h3><ul><li>Multi‑camera, keyframing, effects</li></ul><h3>Topic 3 Colour & Audio</h3><ul><li>Lumetri colour, audio ducking, final export settings</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Video Editors</li><li>Content Creators</li><li>Marketing Producers</li></ul>",
    courseCode: "VID101",
    trainers:
      "<strong>Leong Hwee Yi:</strong> Senior Video Producer, 13 years producing corporate videos and ads.",
    session: 3,
    duration: 12,
    venue:
      "Penang: Media Lab, Suite 13, 2nd Floor, 28 Jalan Media, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "Adobe Creative Cloud licences provided for labs.",
      "Post‑Course Support":
        "Feedback on a 2‑minute sample edit (up to 2 revisions).",
    },
    categoryName: "Video Editing",
  },

  {
    name: "Photography Essentials (DSLR & Mirrorless)",
    description:
      "<p>Fundamentals of exposure, composition, lighting, and post‑processing using Lightroom and Photoshop.</p>",
    fee: 799.0,
    topics:
      "<h3>Topic 1 Camera Basics</h3><ul><li>Aperture, shutter speed, ISO, white balance</li></ul><h3>Topic 2 Creative Techniques</h3><ul><li>Composition rules, lighting, portrait vs. landscape</li></ul><h3>Topic 3 Post‑Processing</h3><ul><li>RAW workflow, Lightroom editing, Photoshop retouch</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Photographers</li><li>Content Creators</li><li>Social Media Managers</li></ul>",
    courseCode: "PHOTO101",
    trainers:
      "<strong>Marina Tan:</strong> Professional photographer, 10 years specialising in commercial and event photography.",
    session: 2,
    duration: 8,
    venue:
      "Kuala Lumpur: Photo Studio, Suite 5, Ground Floor, 15‑Jalan Photo, 50490 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "Participants should bring their own camera; loaners available on request.",
      "Post‑Course Support": "One month of photo‑review feedback.",
    },
    categoryName: "Photography",
  },

  {
    name: "UX/UI Design Fundamentals (Figma & Adobe XD)",
    description:
      "<p>Principles of user‑centred design, wireframing, prototyping, and usability testing using modern design tools.</p>",
    fee: 999.0,
    topics:
      "<h3>Topic 1 UX Foundations</h3><ul><li>User research, personas, journey maps</li></ul><h3>Topic 2 UI Design & Prototyping</h3><ul><li>Figma, component libraries, interactive prototyping</li></ul><h3>Topic 3 Usability Testing</h3><ul><li>Heuristic evaluation, remote testing tools</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>UX Designers</li><li>Product Designers</li><li>UI Engineers</li></ul>",
    courseCode: "UX101",
    trainers:
      "<strong>Rohani Kaur:</strong> Lead UX Designer, 9 years building SaaS product experiences.",
    session: 3,
    duration: 12,
    venue:
      "Penang: Design Hub, Suite 14, 3rd Floor, 11 Jalan Design, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "Figma and Adobe XD licences provided for the class.",
      "Post‑Course Support": "Portfolio critique (up to 3 projects).",
    },
    categoryName: "UX/UI Design",
  },

  {
    name: "Game Development & Animation with Unity",
    description:
      "<p>Build 2‑D/3‑D games, work with physics, animation, and UI in Unity. Includes a capstone mini‑game project.</p>",
    fee: 1399.0,
    topics:
      "<h3>Topic 1 Unity Basics</h3><ul><li>Scene setup, GameObjects, scripting (C#)</li></ul><h3>Topic 2 2‑D/3‑D Mechanics</h3><ul><li>Physics, animation state machines, UI Canvas</li></ul><h3>Topic 3 Publishing</h3><ul><li>Build for Android/iOS, performance profiling</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Game Developers</li><li>Interactive Media Artists</li><li>VR/AR Prototypers</li></ul>",
    courseCode: "GAME101",
    trainers:
      "<strong>Steven Lee:</strong> Senior Unity Developer, 12 years creating mobile games and simulations.",
    session: 4,
    duration: 18,
    venue:
      "Kuala Lumpur: Game Lab, Suite 9, 5th Floor, 3‑Jalan Game, 50450 Kuala Lumpur, Malaysia.",
    level: "Intermediate",
    notes: {
      Disclaimer: "Unity Pro licence supplied for labs.",
      "Post‑Course Support": "Two‑hour post‑mortem of the mini‑game.",
    },
    categoryName: "Gaming & Animation",
  },

  {
    name: "Immersive Technologies (AR/VR with Unreal Engine)",
    description:
      "<p>Introduction to immersive experiences using Unreal Engine, covering scene creation, interaction design, and deployment to headsets.</p>",
    fee: 1499.0,
    topics:
      "<h3>Topic 1 Unreal Engine Foundations</h3><ul><li>Blueprint visual scripting, lighting, materials</li></ul><h3>Topic 2 Interaction & XR</h3><ul><li>VR locomotion, AR object placement, hand tracking</li></ul><h3>Topic 3 Publishing</h3><ul><li>Build for Oculus Quest, WebXR, performance optimisation</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>XR Developers</li><li>3‑D Artists</li><li>Experience Designers</li></ul>",
    courseCode: "XR101",
    trainers:
      "<strong>Dr. Mei Lin:</strong> XR Research Lead, 10 years building AR/VR applications for education and training.",
    session: 3,
    duration: 15,
    venue:
      "Penang: Immersive Lab, Suite 10, 4th Floor, 6 Jalan Immersive, 11500 Penang, Malaysia.",
    level: "Advanced",
    notes: {
      Disclaimer: "Oculus Quest 2 headsets provided for hands‑on labs.",
      "Post‑Course Support": "One month of device‑setup assistance.",
    },
    categoryName: "Immersive Technologies",
  },

  {
    name: "Instructional Design & eLearning Development",
    description:
      "<p>Design effective learning experiences using ADDIE, storyboard creation, and authoring tools such as Articulate Rise and Captivate.</p>",
    fee: 999.0,
    topics:
      "<h3>Topic 1 Foundations of Instructional Design</h3><ul><li>Learning theories, needs analysis, ADDIE</li></ul><h3>Topic 2 Storyboarding & Media</h3><ul><li>Scriptwriting, graphics, audio, video basics</li></ul><h3>Topic 3 Authoring Tools & LMS Integration</h3><ul><li>Articulate Rise, Adobe Captivate, SCORM, xAPI</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Instructional Designers</li><li>L&D Specialists</li><li>Content Developers</li></ul>",
    courseCode: "IDL101",
    trainers:
      "<strong>Siti Aisha:</strong> Senior Learning Designer, 11 years creating corporate e‑learning programmes.",
    session: 2,
    duration: 10,
    venue:
      "Kuala Lumpur: Learning Studio, Suite 8, 2nd Floor, 4‑Jalan Learning, 50420 Kuala Lumpur, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "Articulate 360 and Captivate licences supplied.",
      "Post‑Course Support":
        "Feedback on one e‑learning module (up to 2 revisions).",
    },
    categoryName: "Instructional Design",
  },

  {
    name: "Infographics Design with Canva & Illustrator",
    description:
      "<p>Learn data‑visualisation principles and create compelling infographics using Canva templates and Adobe Illustrator.</p>",
    fee: 699.0,
    topics:
      "<h3>Topic 1 Data Visualisation Basics</h3><ul><li>Chart types, hierarchy, colour theory</li></ul><h3>Topic 2 Canva Workflow</h3><ul><li>Template adaptation, collaborative editing</li></ul><h3>Topic 3 Illustrator for Custom Graphics</h3><ul><li>Icon design, vector charts, export for web/social</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion from Tertiary Courses.</p>",
    jobRoles:
      "<ul><li>Marketing Creatives</li><li>Content Strategists</li><li>Social Media Managers</li></ul>",
    courseCode: "INFO101",
    trainers:
      "<strong>Rashid Mahmud:</strong> Visual Designer, 9 years in data‑driven storytelling.",
    session: 2,
    duration: 6,
    venue:
      "Penang: Visual Lab, Suite 4, Ground Floor, 9 Jalan Graphics, 11500 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer: "Canva Pro and Illustrator licences provided.",
      "Post‑Course Support": "One infographic review session.",
    },
    categoryName: "Infographics",
  },
];
async function createCategory(
  category: CategorySeed,
  parentId: string | null = null
) {
  const created = await prisma.courseCategory.upsert({
    where: { name: category.name },
    update: {
      description: category.name,
      //isHeader: category.isHeader || false,
      parentId: parentId,
    },
    create: {
      name: category.name,
      description: category.name,
      //isHeader: category.isHeader || false,
      parentId: parentId,
    },
  });

  if (category.children) {
    for (const child of category.children) {
      await createCategory(child, created.id);
    }
  }
}

export async function main() {
  console.log("Seeding categories...");
  for (const category of categories) {
    await createCategory(category);
  }
  for (const course of courses) {
    await createCategory(
      {
        name: course.categoryName,
      },
      null
    );
    const category = await prisma.courseCategory.findUnique({
      where: {
        name: course.categoryName,
      },
    });
    if (!category) throw new Error();

    await prisma.course.create({
      data: {
        name: course.name,
        description: course.description,
        fee: course.fee,
        topics: course.topics,
        courseInfo: course.courseInfo,
        jobRoles: course.jobRoles,
        courseCode: course.courseCode,
        trainers: course.trainers,
        session: course.session,
        duration: course.duration,
        venue: course.venue,
        level: course.level,
        notes: course.notes,
        categoryId: category.id,
      },
    });
  }
  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
