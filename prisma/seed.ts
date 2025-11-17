import { PrismaClient, Prisma } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

const courses = [
  {
    name: "Finance for Non-Finance Managers",
    description:
      '<p>Navigating the world of finance can be daunting, especially for those not rooted in its intricacies. Our course on <strong>"Finance for Non-Finance Managers"</strong> demystifies financial jargon and principles, ensuring participants confidently engage in financial discussions and make informed decisions. From understanding <strong>financial statements</strong> to budgeting and forecasting, we cover the crucial areas to empower managers in any domain.</p><p>A strong financial understanding is indispensable in today\'s dynamic business environment. This course is meticulously crafted to <strong>bridge the gap</strong> between financial experts and managers from other verticals. Equip yourself with the knowledge to analyze financial data, comprehend the financial health of an organization, and contribute more effectively to strategic planning and execution.</p>',
    fee: 699.0,
    topics:
      "<h3>Topic 1 Understanding Financial Statements</h3><ul><li>Overview of Finance and Chart of Accounts</li><li>Balance Sheet Statement</li><li>Profit and Loss (P&L) Statement</li><li>Cash Flow Statement</li></ul><h3>Topic 2 Analysing Financial Ratios</h3><ul><li>Ratios for Corporate Profitability</li><li>Ratios for Corporate Performance</li><li>Equity Changes Statement</li></ul><h3>Topic 3 Planning & Budgeting using Financial Statements</h3><ul><li>Analyse Financial Statements</li><li>Financial Planning</li><li>Capital Budgeting</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>All participants will receive a Certificate of Completion from Tertiary Courses after achieved at least 75% attendance.</p><h4>Funding and Grant</h4><p><strong>HRD Corp Claimable Course</strong> for Employers Registered with HRD Corp</p>",
    jobRoles:
      "<ul><li>Department Managers</li><li>Team Leaders</li><li>Engineers</li><li>Sales & Marketing Personnel</li><li>Non-Financial Executives</li></ul>",
    courseCode: "M574",
    trainers:
      "<strong>Dr. Ahmad:</strong> Dr. Ahmad is a specialist consultancy that specialises in accounting, financial accounting, management accounting financial modeling, forecasting, valuation, model auditing, and management reporting for clients. He has about more than 18 years of working experience in an education, insurance, marketing, construction, consultancy, accounting and finance industry. He has worked with companies such as Malaysia National Insurance (MNI) Berhad, Taylors University College (KLMU), Lim Kok Wing University College (LKW), Kajima Malaysia, Remittance Company and started as freelance trainer/facilitator since 2007. He is skilled in the development and maintenance of analytical tools and financial models for middle-market to large corporate transactions and clients, at all levels of complexity.",
    session: 1,
    duration: 7.5,
    venue:
      "Kuala Lumpur: G-3A-02, Suite Pejabat Korporat, KL Gateway. No.2, Jalan Kerinchi, Gerbang Kerinchi Lestari, 59200. Kuala Lumpur, Malaysia. <strong>|</strong> Penang: Jalan Sungai Dua, 11700 Penang, Malaysia.",
    level: "Beginner",
    notes: {
      Disclaimer:
        "The course dates displayed on our website are tentative and subject to trainer availability. We will confirm the final date after checking with the trainer. You are also welcome to email us your preferred date at sales@tertiarycourses.com.my, and we will do our best to coordinate with the trainer’s schedule.",
      "Post-Course Support":
        "We may provide consultation related to the subject matter after the course. Please email your queries to sales@tertiarycourses.com.my and we will forward your queries to the subject matter experts and get back to you asap.",
    },
    categoryName: "Finance & Accounting",
  },
  {
    name: "Advanced Data Analytics with Python and Pandas",
    description:
      "<p>Master <strong>data manipulation</strong>, visualization, and statistical analysis using the powerful <strong>Python ecosystem</strong>. This course covers NumPy, Pandas, Matplotlib, and scikit-learn for building robust analytical models. We focus on real-world case studies in <strong>business intelligence</strong> and <strong>predictive modeling</strong> to give you practical, job-ready skills.</p>",
    fee: 1299.0,
    topics:
      "<h3>Module 1: Python and Data Structures</h3><ul><li>NumPy for Array Operations</li><li>Pandas DataFrame Manipulation</li><li>Data Cleaning and Preprocessing Techniques</li></ul><h3>Module 2: Statistical Analysis</h3><ul><li>Inferential Statistics and Hypothesis Testing</li><li>Linear and Logistic Regression</li><li>Time Series Forecasting Basics</li></ul><h3>Module 3: Data Visualization and Reporting</h3><ul><li>Creating Advanced Plots with Matplotlib and Seaborn</li><li>Building Interactive Dashboards</li><li>Automated Report Generation</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Proficiency in Advanced Data Analytics awarded upon successful completion and project submission.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Special discount for group enrollments.</p>",
    jobRoles:
      "<ul><li>Data Analysts</li><li>Business Intelligence Specialists</li><li>Data Scientists (Entry-level)</li><li>Financial Modellers</li><li>Market Researchers</li></ul>",
    courseCode: "DA901",
    trainers:
      "<strong>Ms. Siti Nor, CFA:</strong> Ms. Nor has over 10 years of experience in quantitative finance and data science. She specializes in using Python for large-scale data modeling and risk assessment for major investment banks. She is a certified Chartered Financial Analyst (CFA) and holds a Master's degree in Data Science.",
    session: 3,
    duration: 22.5,
    venue: "Virtual/Online Only (Live Sessions).",
    level: "Advanced",
    notes: {
      Prerequisites:
        "Basic understanding of Python or another programming language is required.",
      Software:
        "Anaconda/Jupyter Notebook will be used. Free access provided for the duration of the course.",
    },
    categoryName: "Technology & Data",
  },
  {
    name: "Effective Project Management: Agile and Scrum",
    description:
      "<p>Learn the essential skills and tools to manage projects from initiation to closure, with a sharp focus on <strong>Agile and Scrum methodologies</strong>. This course covers <strong>PMBOK principles</strong>, risk management, and effective stakeholder communication within a flexible framework. You'll learn to deliver value faster and respond quickly to change.</p>",
    fee: 850.0,
    topics:
      "<h3>Phase 1: Project Initiation & Planning</h3><ul><li>Defining Project Scope and Objectives</li><li>Developing the Work Breakdown Structure (WBS)</li><li>Estimating Resources and Time</li></ul><h3>Phase 2: Agile Frameworks</h3><ul><li>Introduction to Scrum Roles and Events</li><li>Writing Effective User Stories and Product Backlog Management</li><li>Running Sprint Planning and Retrospectives</li></ul><h3>Phase 3: Monitoring & Control</h3><ul><li>Risk Identification and Response Planning</li><li>Tracking Progress with Burn-down Charts</li><li>Project Documentation and Closing</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion in Agile Project Management Fundamentals.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. PMP/CAPM continuing education units (PDUs) available.</p>",
    jobRoles:
      "<ul><li>Project Coordinators</li><li>Team Leads/Supervisors</li><li>Product Owners</li><li>Scrum Masters (Aspiring)</li><li>Anyone aspiring to a Project Management role</li></ul>",
    courseCode: "PM205",
    trainers:
      "<strong>Ms. Evelyn Lim, PMP, CSM:</strong> Evelyn is a seasoned Project Management Professional (PMP) and Certified ScrumMaster (CSM) with over 15 years of experience leading cross-functional teams in the IT and Finance sectors. She is known for her practical, hands-on training style.",
    session: 2,
    duration: 15.0,
    venue: "Kuala Lumpur, Training Centre Suite, Mid Valley. (Hybrid Format)",
    level: "Intermediate",
    notes: {
      Materials:
        "Includes comprehensive course binder and access to online PM templates.",
      Certification: "Prepares participants for basic Scrum certifications.",
    },
    categoryName: "Management & Leadership",
  },
  {
    name: "Digital Marketing Strategy and SEO Optimization",
    description:
      "<p>Equip yourself with the knowledge to craft and execute a winning <strong>digital marketing strategy</strong>. Covers advanced <strong>SEO</strong>, content strategy, social media marketing, and <strong>performance analytics</strong> to drive measurable business growth and dominate the digital landscape. Learn how to convert clicks into customers.</p>",
    fee: 950.0,
    topics:
      "<h3>Module 1: Strategic Foundations</h3><ul><li>Customer Journey Mapping in the Digital Age</li><li>Setting SMART Digital Objectives</li><li>Budget Allocation and ROI Analysis</li></ul><h3>Module 2: Search Engine Mastery</h3><ul><li>Advanced On-Page and Off-Page SEO Techniques</li><li>Google Ads (SEM) Campaign Management</li><li>Local SEO and Google My Business Optimization</li></ul><h3>Module 3: Content and Social Media</h3><ul><li>Content Marketing and Storytelling Frameworks</li><li>Social Media Campaign Management (Facebook, Instagram, LinkedIn)</li><li>Google Analytics and Performance Reporting</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certified Digital Marketing Strategist (CDMS) certificate awarded.</p><h4>Funding and Grant</h4><p>SME Digitalisation Grant Eligible. HRD Corp Claimable Course.</p>",
    jobRoles:
      "<ul><li>Marketing Executives</li><li>Business Owners</li><li>E-commerce Managers</li><li>Content Creators</li><li>PR Professionals</li></ul>",
    courseCode: "DM101",
    trainers:
      "<strong>Mr. Kenji Sato, Digital Consultant:</strong> Kenji is a global digital marketing consultant who has advised over 50 businesses across Southeast Asia on their online presence. His expertise lies in using data to optimize SEO and social media campaigns for maximum conversion.",
    session: 3,
    duration: 21.0,
    venue: "Virtual/Online Only (Live Interactive Workshops)",
    level: "Intermediate",
    notes: {
      Platform: "Zoom and dedicated learning management system for materials.",
      "Case Studies":
        "Includes analysis of successful regional digital campaigns and real-time SEO audits.",
    },
    categoryName: "Marketing & Sales",
  },
  {
    name: "Cybersecurity for IT Professionals: Defensive Tactics",
    description:
      "<p>A comprehensive course focusing on <strong>defensive security tactics</strong>, network threat analysis, vulnerability management, and organizational compliance. This is <strong>essential knowledge</strong> for maintaining a secure enterprise IT environment and protecting against modern cyber threats. Hands-on labs prepare you for real-world scenarios.</p>",
    fee: 1500.0,
    topics:
      "<h3>Area 1: Threat Landscape & Risk</h3><ul><li>Common Attack Vectors (Malware, Phishing, Ransomware)</li><li>Threat Modeling and Risk Assessment Frameworks</li><li>Developing Security Policies and Procedures</li></ul><h3>Area 2: Network & Infrastructure Defense</h3><ul><li>Firewall, IDS/IPS, and VPN Configuration</li><li>Endpoint Detection and Response (EDR)</li><li>Disaster Recovery and Business Continuity Planning</li></ul><h3>Area 3: Compliance and Incident Response</h3><ul><li>GDPR/PDPA Compliance Fundamentals</li><li>Vulnerability Scanning and Patch Management</li><li>Developing an Incident Response Plan (IRP)</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certified Cybersecurity Analyst (CCA) upon passing the final assessment.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Group discounts available for IT departments.</p>",
    jobRoles:
      "<ul><li>IT Managers</li><li>System Administrators</li><li>Network Engineers</li><li>Security Auditors</li><li>Compliance Officers</li></ul>",
    courseCode: "CS400",
    trainers:
      "<strong>Dr. Hamid, CISSP:</strong> Dr. Hamid holds a PhD in Cyber Security and is a Certified Information Systems Security Professional (CISSP). He has led security operations centres (SOC) for multinational corporations and provides expert training on enterprise defense strategies.",
    session: 4,
    duration: 30.0,
    venue:
      "Kuala Lumpur, Cyberjaya Tech Hub. (State-of-the-art lab facilities)",
    level: "Advanced",
    notes: {
      "Lab Sessions":
        "Extensive hands-on labs with industry-standard security tools.",
      "Exam Prep":
        "Aligned with objectives for major security certification exams.",
    },
    categoryName: "Technology & Data",
  },
  {
    name: "Interpersonal Communication Skills for Leaders",
    description:
      "<p>Develop high-impact <strong>communication strategies</strong> to motivate teams, resolve conflicts, and drive organizational alignment. Focuses intensely on <strong>active listening</strong>, non-verbal cues, and persuasive speaking for executive presence and effective team leadership.</p>",
    fee: 550.0,
    topics:
      "<h3>Part 1: Foundational Communication</h3><ul><li>Understanding Communication Styles and Barriers</li><li>Mastering Active Listening Techniques</li><li>Decoding Non-Verbal Communication</li></ul><h3>Part 2: High-Stakes Interactions</h3><ul><li>Giving and Receiving Constructive Feedback Effectively</li><li>Conflict Resolution and Mediation Strategies</li><li>Facilitating Productive and Engaging Meetings</li></ul><h3>Part 3: Influence and Persuasion</h3><ul><li>Communicating Vision and Strategic Goals</li><li>Techniques for Persuasive Presentation (Storytelling)</li><li>Cross-Cultural Communication Competence</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate in Communication Leadership awarded.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Suitable for leadership development programs.</p>",
    jobRoles:
      "<ul><li>Managers and Senior Managers</li><li>Supervisors and Team Leaders</li><li>HR and Training Professionals</li><li>Sales and Business Development Executives</li></ul>",
    courseCode: "COM150",
    trainers:
      "<strong>Ms. Nora Abdullah, Corporate Coach:</strong> Nora is a certified corporate trainer and executive coach with expertise in behavioral science and neuro-linguistic programming (NLP). She specializes in helping leaders enhance their emotional intelligence and communication impact.",
    session: 1,
    duration: 7.0,
    venue: "Penang, Gurney Paragon Business Suite.",
    level: "Beginner",
    notes: {
      Methodology:
        "Highly interactive, featuring role-playing, video analysis, and immediate personalized feedback.",
      Materials:
        "Participant workbook and a 3-month post-course communication plan template provided.",
    },
    categoryName: "Management & Leadership",
  },
  {
    name: "Human Resources Management Essentials: Legal Compliance",
    description:
      "<p>A foundational course covering the key functions of <strong>HR</strong>, including recruitment, compensation, performance management, and essential <strong>Malaysian employment law compliance</strong>. This knowledge is essential for new HR practitioners and small business owners to mitigate legal risk.</p>",
    fee: 750.0,
    topics:
      "<h3>Module 1: HR Strategy and Planning</h3><ul><li>HR's Role in Business Strategy</li><li>Job Analysis and Competency Mapping</li><li>Workforce Planning and Budgeting</li></ul><h3>Module 2: Acquisition and Performance</h3><ul><li>Effective Recruitment and Selection Interview Techniques</li><li>Performance Appraisal Systems and Goal Setting</li><li>Training Needs Analysis (TNA)</li></ul><h3>Module 3: Compensation and Law</h3><ul><li>Designing Fair Compensation and Benefits Structures</li><li>Understanding the Employment Act 1955 and Amendments</li><li>Disciplinary Procedures and Managing Employee Grievances</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Completion in HR Essentials and Compliance.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course.</p>",
    jobRoles:
      "<ul><li>HR Assistants/Executives</li><li>Small Business Owners</li><li>Administrative Managers</li><li>Recruiters</li><li>Operations Managers (handling staff)</li></ul>",
    courseCode: "HRM300",
    trainers:
      "<strong>Puan Sharifah, Senior HR Consultant:</strong> Puan Sharifah is a certified HRDF trainer and a practicing HR consultant specializing in Malaysian labor law and industrial relations. She has over 20 years of experience managing HR for local and foreign enterprises.",
    session: 2,
    duration: 14.0,
    venue: "Kuala Lumpur, Bangsar South Office Complex.",
    level: "Beginner",
    notes: {
      "Local Laws":
        "Heavy emphasis on practical application of Malaysian employment law scenarios.",
      Templates:
        "Includes ready-to-use templates for employment contracts and HR forms.",
    },
    categoryName: "Human Resources",
  },
  {
    name: "Cloud Computing Fundamentals: AWS & Azure",
    description:
      "<p>An introduction to the core concepts of <strong>cloud computing</strong>, covering models (IaaS, PaaS, SaaS), deployment strategies, and key services from major providers like <strong>AWS and Azure</strong>. Ideal for IT professionals and technical decision-makers planning a cloud migration strategy.</p>",
    fee: 1100.0,
    topics:
      "<h3>Section 1: Core Cloud Concepts</h3><ul><li>Cloud Service Models and Deployment Types</li><li>Benefits, Risks, and Challenges of Cloud Adoption</li><li>Cloud Security, Compliance, and Shared Responsibility Model</li></ul><h3>Section 2: AWS Core Services</h3><ul><li>Compute (EC2, Lambda) and Storage (S3, EBS)</li><li>Networking (VPC) and Database Services (RDS)</li></ul><h3>Section 3: Azure Core Services</h3><ul><li>Virtual Machines and Azure Functions</li><li>Azure Storage and Networking (VNet)</li><li>Billing, Cost Optimization, and Cloud Governance</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Cloud Computing Foundation Certificate recognized by the industry.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Aligned with major vendor foundational exams.</p>",
    jobRoles:
      "<ul><li>IT Staff and Technicians</li><li>Software Developers</li><li>Business Analysts (Cloud-focused)</li><li>Technical Sales and Pre-sales</li></ul>",
    courseCode: "CC500",
    trainers:
      "<strong>Mr. Jason Wong, AWS Certified Solutions Architect:</strong> Jason is a certified expert in both AWS and Azure. He has led cloud infrastructure deployments for several Fintech startups and is known for simplifying complex cloud architecture concepts.",
    session: 2,
    duration: 16.0,
    venue: "Virtual/Online Only (Self-Paced with weekly Live Q&A).",
    level: "Beginner",
    notes: {
      "Exam Prep":
        "Covers objectives for the AWS Certified Cloud Practitioner and Azure Fundamentals exams.",
      Access:
        "Participants get temporary access to a lab environment for hands-on practice.",
    },
    categoryName: "Technology & Data",
  },
  {
    name: "Customer Relationship Management (CRM) Strategy",
    description:
      "<p>Learn to develop a holistic <strong>CRM strategy</strong> that improves customer loyalty, drives sales, and increases profitability. Focus on utilizing CRM software effectively (e.g., Salesforce, Dynamics) to unify customer experience across all channels and touchpoints.</p>",
    fee: 890.0,
    topics:
      "<h3>Part A: Strategic CRM</h3><ul><li>Defining Customer Lifetime Value (CLV) and Retention Metrics</li><li>Mapping and Optimizing the Customer Experience Journey</li><li>Aligning CRM with overall Business Strategy</li></ul><h3>Part B: Technology and Implementation</h3><ul><li>Selecting and Implementing the Right CRM Platform</li><li>Sales, Marketing, and Service Process Automation</li><li>Data Quality, Migration, and Governance</li></ul><h3>Part C: Measurement and Optimization</h3><ul><li>Key Performance Indicators (KPIs) for CRM Success</li><li>Utilizing Customer Feedback (NPS, CSAT)</li><li>Advanced Segmentation and Personalization Strategies</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certified CRM Specialist awarded by our training academy.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Consult us for customized team training.</p>",
    jobRoles:
      "<ul><li>Sales Managers and Directors</li><li>Marketing Specialists</li><li>Customer Service Leads and Managers</li><li>Business Analysts (Process focus)</li><li>IT Managers (CRM Implementation)</li></ul>",
    courseCode: "CRM700",
    trainers:
      "<strong>Mr. David Chee, Business Strategist:</strong> David is a seasoned business transformation consultant with expertise in CRM and digital transformation. He has successfully implemented CRM solutions for SMEs and large corporations to drive bottom-line growth.",
    session: 2,
    duration: 15.0,
    venue: "Penang, Bayan Lepas Corporate Suites.",
    level: "Intermediate",
    notes: {
      "Software Focus":
        "Practical case studies and hands-on exercises using a demo CRM environment.",
      Takeaway:
        "Participants will complete the course with a draft CRM implementation roadmap.",
    },
    categoryName: "Marketing & Sales",
  },
  {
    name: "Advanced Microsoft Excel for Business Analysis",
    description:
      "<p>Move beyond basic functions to master powerful <strong>Excel features</strong> like PivotTables, VLOOKUP/XLOOKUP, macros, and advanced data visualization. This course is essential for financial analysts and anyone in data-intensive reporting roles looking to enhance efficiency.</p>",
    fee: 599.0,
    topics:
      "<h3>Topic 1: Advanced Formulas and Functions</h3><ul><li>Advanced Logical and Text Functions</li><li>Dynamic Array Formulas (e.g., FILTER, UNIQUE)</li><li>Data Validation and Auditing Techniques</li></ul><h3>Topic 2: Data Modeling and BI Tools</h3><ul><li>Mastering PivotTables and PivotCharts</li><li>Using Power Query for Data Transformation and Cleanup</li><li>Introduction to Data Modeling with Power Pivot</li></ul><h3>Topic 3: Automation and Visualization</h3><ul><li>Recording and Editing Macros (Introduction to VBA)</li><li>Creating Interactive Dashboards with Slicers</li><li>What-If Analysis: Goal Seek, Solver, and Scenarios</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Advanced Excel Proficiency Certificate awarded.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course.</p>",
    jobRoles:
      "<ul><li>Financial Analysts</li><li>Accounting Staff</li><li>Business Analysts</li><li>Administrative Assistants (Advanced)</li><li>Anyone who handles large datasets and reporting</li></ul>",
    courseCode: "EXL301",
    trainers:
      "<strong>Ms. Lily Chow, Microsoft Office Specialist:</strong> Lily is a certified Microsoft Office Specialist Master Trainer with over 10,000 hours of training experience. She is celebrated for her ability to simplify complex Excel concepts into easy-to-apply business solutions.",
    session: 2,
    duration: 15.0,
    venue: "Kuala Lumpur, Training Lab at KLCC. (Dedicated computer lab)",
    level: "Intermediate",
    notes: {
      Requirement:
        "Participants must bring a laptop with MS Excel 2016 or later (with Power Query/Pivot Add-ins).",
      Files:
        "Includes practice files, solutions, and ready-made dashboard templates.",
    },
    categoryName: "Finance & Accounting",
  },
  {
    name: "Strategic Negotiation Skills and Conflict Resolution",
    description:
      "<p>Develop and apply practical <strong>negotiation strategies</strong> that lead to win-win outcomes. This course focuses on psychological tactics, thorough preparation, and managing difficult conversations to resolve conflicts <strong>constructively</strong> and secure better deals for your organization.</p>",
    fee: 650.0,
    topics:
      "<h3>Module 1: The Negotiation Framework</h3><ul><li>BATNA, ZOPA, and Reservation Price</li><li>The Psychology of Persuasion</li><li>Effective Preparation and Research</li></ul><h3>Module 2: Negotiation Tactics</h3><ul><li>Distributive vs. Integrative Negotiation</li><li>Handling Deadlocks and High-Pressure Tactics</li><li>Cross-Cultural Negotiation Considerations</li></ul><h3>Module 3: Conflict Resolution</h3><ul><li>Identifying Conflict Styles</li><li>Managing Difficult Conversations and Emotional Intelligence</li><li>Mediation and Consensus-Building</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate in Strategic Negotiation and Conflict Resolution.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Highly recommended for procurement and sales teams.</p>",
    jobRoles:
      "<ul><li>Sales and Procurement Professionals</li><li>Managers and Executives</li><li>HR/Industrial Relations Staff</li><li>Anyone involved in contracts or client management</li></ul>",
    courseCode: "BUS450",
    trainers:
      "<strong>Mr. Michael Tan, Certified Mediator:</strong> Michael is a corporate training specialist and a certified mediator. His training approach incorporates Harvard Negotiation Project principles and real-life business scenarios.",
    session: 1,
    duration: 7.5,
    venue: "Kuala Lumpur, PJ Trade Centre, Petaling Jaya.",
    level: "Intermediate",
    notes: {
      Methodology:
        "Intensive practice through video-recorded role-playing and debrief sessions.",
      Materials: "Workbook with negotiation checklists and planning tools.",
    },
    categoryName: "Management & Leadership",
  },
  {
    name: "Introduction to Data Science and Machine Learning",
    description:
      "<p>A beginner-friendly course introducing the full lifecycle of a <strong>data science project</strong>, covering data collection, cleaning, exploratory analysis, and building simple <strong>machine learning models</strong> (e.g., clustering, classification). Start your journey into AI and data-driven decision-making.</p>",
    fee: 1390.0,
    topics:
      "<h3>Phase 1: Data Science Ecosystem</h3><ul><li>What is Data Science and its applications?</li><li>Introduction to R and Python for Data Science</li><li>Data Acquisition and Data Quality Assessment</li></ul><h3>Phase 2: Exploratory Data Analysis (EDA)</h3><ul><li>Statistical Fundamentals for Data Science</li><li>Data Visualization Best Practices</li><li>Feature Engineering Techniques</li></ul><h3>Phase 3: Building ML Models</h3><ul><li>Supervised vs. Unsupervised Learning</li><li>Introduction to Classification (e.g., Decision Trees)</li><li>Evaluating Model Performance (Accuracy, Precision, Recall)</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Data Science Foundation Certificate.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course.</p>",
    jobRoles:
      "<ul><li>IT Professionals seeking a career change</li><li>Business Analysts</li><li>University Graduates</li><li>Anyone interested in the fundamentals of AI/ML</li></ul>",
    courseCode: "DS100",
    trainers:
      "<strong>Dr. Wei Lun, PhD in CS:</strong> Dr. Wei has a Ph.D. in Computer Science specializing in Machine Learning. He actively consults on AI implementation for manufacturing and logistics companies.",
    session: 3,
    duration: 24.0,
    venue: "Virtual/Online Only (Evening Sessions).",
    level: "Beginner",
    notes: {
      Prerequisites: "No prior programming experience necessary.",
      Projects:
        "Includes a mini-project where participants build their first ML model.",
    },
    categoryName: "Technology & Data",
  },
  {
    name: "Practical Budgeting and Cost Control",
    description:
      "<p>Equip participants with the practical skills to prepare, manage, and <strong>control departmental or project budgets</strong>. Focuses on variance analysis, forecasting techniques, and effective <strong>cost management strategies</strong> to increase profitability.</p>",
    fee: 680.0,
    topics:
      "<h3>Section A: Budgeting Fundamentals</h3><ul><li>Types of Budgets (Zero-Based, Incremental, Activity-Based)</li><li>The Budgeting Process: Planning to Approval</li><li>Sales Forecasting and Expense Estimation</li></ul><h3>Section B: Cost Control and Monitoring</h3><ul><li>Fixed vs. Variable Costs and Cost Drivers</li><li>Variance Analysis: Investigating Differences</li><li>Techniques for Cost Reduction and Optimization</li></ul><h3>Section C: Performance Reporting</h3><ul><li>Creating Budget vs. Actual Reports</li><li>Using Budgets for Decision-Making</li><li>Rolling Forecasts and Beyond Budgeting</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certificate of Proficiency in Budgeting and Cost Control.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Suitable for operations and middle management.</p>",
    jobRoles:
      "<ul><li>Department Managers</li><li>Finance Executives</li><li>Operations Staff</li><li>Cost Accountants</li><li>Project Managers</li></ul>",
    courseCode: "FIN210",
    trainers:
      "<strong>Ms. Shirley Koo, CPA:</strong> Shirley is a Certified Public Accountant (CPA) with over 12 years of experience as a Financial Controller. She provides practical, real-world examples from her corporate finance career.",
    session: 1,
    duration: 8.0,
    venue: "Johor Bahru, Taman Molek Business Park.",
    level: "Intermediate",
    notes: {
      "Case Studies":
        "Includes an in-depth case study on creating a full annual operational budget.",
      Software: "Templates provided in Microsoft Excel format.",
    },
    categoryName: "Finance & Accounting",
  },
  {
    name: "Public Speaking and Presentation Mastery",
    description:
      "<p>Overcome fear and deliver engaging, <strong>persuasive presentations</strong>. This course focuses on structuring content, utilizing visual aids, and mastering voice and body language for <strong>maximum impact</strong> in any professional setting. Turn stage fright into confidence.</p>",
    fee: 580.0,
    topics:
      "<h3>Part 1: Preparation and Structure</h3><ul><li>Analyzing Your Audience and Purpose</li><li>Developing a Compelling Core Message</li><li>Structuring Your Presentation (Hook, Body, Close)</li></ul><h3>Part 2: Delivery Techniques</h3><ul><li>Mastering Body Language and Eye Contact</li><li>Vocal Variety, Pacing, and Pauses</li><li>Handling Q&A Sessions Confidently</li></ul><h3>Part 3: Persuasion and Visuals</h3><ul><li>Designing Effective and Minimalist Slides</li><li>Storytelling Techniques for Impact</li><li>Managing Nerves and Anxiety</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Presentation Mastery Certificate.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Great for management communication training.</p>",
    jobRoles:
      "<ul><li>Executives and Managers</li><li>Sales and Marketing Staff</li><li>Trainers and Educators</li><li>Anyone who presents to internal or external audiences</li></ul>",
    courseCode: "COM101",
    trainers:
      "<strong>Mr. Benjamin Ng, Toastmasters DTM:</strong> Ben is a Distinguished Toastmaster (DTM) and a professional corporate speaker. He provides constructive, immediate feedback on delivery and content.",
    session: 1,
    duration: 7.0,
    venue: "Kuala Lumpur, KL Gateway Office Park.",
    level: "Beginner",
    notes: {
      Methodology:
        "Participants will deliver a minimum of three recorded presentations with peer and trainer feedback.",
      Coaching: "Includes one 30-minute post-course virtual coaching session.",
    },
    categoryName: "Personal Development",
  },
  {
    name: "Mastering Power BI for Data Visualization",
    description:
      "<p>Learn to connect to various data sources, clean and transform data, build robust data models, and create interactive, stunning <strong>dashboards</strong> using <strong>Microsoft Power BI</strong> for informed and rapid decision-making across the business.</p>",
    fee: 980.0,
    topics:
      "<h3>Module 1: Data Connection and Transformation</h3><ul><li>Connecting to Different Data Sources (Excel, SQL, Web)</li><li>Data Shaping and Cleaning with Power Query Editor</li><li>Understanding Data Normalization and Relationships</li></ul><h3>Module 2: Data Modeling with DAX</h3><ul><li>Creating a Star Schema Model</li><li>Introduction to DAX (Data Analysis Expressions)</li><li>Creating Calculated Columns and Measures</li></ul><h3>Module 3: Report and Dashboard Design</h3><ul><li>Choosing the Right Visualizations</li><li>Creating Interactive Filters and Slicers</li><li>Publishing and Sharing Reports in Power BI Service</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Power BI Data Visualization Specialist Certificate.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Special focus on business reporting.</p>",
    jobRoles:
      "<ul><li>Business Intelligence Analysts</li><li>Financial Analysts</li><li>Data Report Developers</li><li>IT Managers (Reporting systems)</li></ul>",
    courseCode: "BI600",
    trainers:
      "<strong>Ms. Farah Binti, Data Consultant:</strong> Farah is a certified Microsoft Data Analyst specializing in Power BI and Azure data services. She has delivered BI solutions for telecommunications and retail giants.",
    session: 2,
    duration: 15.0,
    venue: "Virtual/Online Only (Hands-on Lab via Remote Desktop).",
    level: "Intermediate",
    notes: {
      Requirement: "Basic knowledge of data concepts is helpful.",
      Software:
        "Trial version of Power BI Desktop will be used. Installation instructions provided.",
    },
    categoryName: "Technology & Data",
  },
  {
    name: "Supply Chain Management and Logistics Optimization",
    description:
      "<p>A comprehensive overview of modern <strong>supply chain management</strong>, covering procurement, inventory control, warehousing, and transportation to achieve operational efficiency, <strong>cost reduction</strong>, and higher customer satisfaction. Learn to build a resilient and agile supply chain.</p>",
    fee: 900.0,
    topics:
      "<h3>Topic 1: SC Strategy and Design</h3><ul><li>The Role of SCM in Business Strategy</li><li>Designing the Global Supply Chain Network</li><li>Risk Management and Resilience</li></ul><h3>Topic 2: Procurement and Inventory</h3><ul><li>Strategic Sourcing and Supplier Relationship Management (SRM)</li><li>Inventory Control Models (EOQ, JIT)</li><li>Demand Planning and Forecasting</li></ul><h3>Topic 3: Logistics and Technology</h3><ul><li>Transportation Management and Route Optimization</li><li>Warehouse Operations and Layout</li><li>Introduction to SC Technology (ERP, WMS)</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Supply Chain and Logistics Professional Certificate.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Ideal for manufacturing and retail sectors.</p>",
    jobRoles:
      "<ul><li>Supply Chain Managers</li><li>Logistics Coordinators</li><li>Procurement Officers</li><li>Inventory and Warehouse Managers</li></ul>",
    courseCode: "SCM501",
    trainers:
      "<strong>Mr. Samy Vellu, Logistics Expert:</strong> Samy has over 25 years of experience in regional logistics and supply chain management for FMCG companies. He holds a CSCMP certification.",
    session: 2,
    duration: 16.0,
    venue: "Penang, Butterworth Industrial Area Training Center.",
    level: "Intermediate",
    notes: {
      "Case Studies":
        "Focuses on optimizing local and regional logistics networks.",
      "Site Visit":
        "May include an optional visit to a modern warehouse facility.",
    },
    categoryName: "Operations & Logistics",
  },
  {
    name: "Creative Thinking and Problem Solving Workshop",
    description:
      "<p>Unlock your team's <strong>creative potential</strong>. This hands-on workshop introduces powerful techniques (e.g., Six Thinking Hats, SCAMPER) to generate innovative solutions and tackle complex business problems with a structured yet <strong>imaginative approach</strong>.</p>",
    fee: 520.0,
    topics:
      "<h3>Phase 1: Defining the Problem</h3><ul><li>Root Cause Analysis (e.g., 5 Whys, Fishbone)</li><li>Shifting Perspectives and Reframing the Challenge</li><li>Identifying Constraints and Assumptions</li></ul><h3>Phase 2: Idea Generation</h3><ul><li>Brainstorming and Mind Mapping Techniques</li><li>SCAMPER and Lateral Thinking</li><li>Prototyping and Rapid Experimentation</li></ul><h3>Phase 3: Selection and Implementation</h3><ul><li>Idea Evaluation and Prioritization Matrices</li><li>Developing an Action Plan for Implementation</li><li>Overcoming Resistance to Change</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Creative Problem Solving Workshop Certificate.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Excellent for team building and innovation initiatives.</p>",
    jobRoles:
      "<ul><li>All Employees (especially those in R&D or Continuous Improvement)</li><li>Team Leaders and Supervisors</li><li>Innovation Committee Members</li></ul>",
    courseCode: "INN120",
    trainers:
      "<strong>Ms. Mei Ling, Innovation Facilitator:</strong> Mei Ling is a certified design thinking and creativity facilitator. She runs high-energy, immersive workshops designed to foster a culture of innovation.",
    session: 1,
    duration: 7.0,
    venue: "Kuala Lumpur, Co-working Space, TRX.",
    level: "Beginner",
    notes: {
      Methodology: "100% activity-based and highly interactive.",
      Takeaway: "A toolkit of problem-solving methods for immediate use.",
    },
    categoryName: "Personal Development",
  },
  {
    name: "Front-End Web Development with ReactJS",
    description:
      "<p>A deep dive into building modern, scalable <strong>single-page applications (SPAs)</strong> using <strong>React</strong>, the industry-leading JavaScript library. Covers component-based architecture, state management (Hooks), and routing. Essential for becoming a professional web developer.</p>",
    fee: 1600.0,
    topics:
      "<h3>Module 1: React Fundamentals</h3><ul><li>Introduction to JSX and Functional Components</li><li>Understanding State and Props</li><li>Event Handling and Component Lifecycle</li></ul><h3>Module 2: Advanced React</h3><ul><li>Mastering React Hooks (useState, useEffect, useContext)</li><li>Client-Side Routing with React Router</li><li>Form Handling and Validation</li></ul><h3>Module 3: Project and Deployment</h3><ul><li>Integration with RESTful APIs</li><li>Introduction to Redux/Zustand for State Management</li><li>Building and Deploying a Complete SPA</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Certified ReactJS Developer Certificate.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Tech talent development program eligible.</p>",
    jobRoles:
      "<ul><li>Software Developers (up-skilling)</li><li>UI/UX Designers (transitioning to code)</li><li>Full-Stack Developers</li></ul>",
    courseCode: "DEV805",
    trainers:
      "<strong>Mr. Chris Lee, Principal Software Engineer:</strong> Chris is a principal engineer at a major tech firm, specializing in large-scale front-end systems. He's passionate about modern JavaScript frameworks and clean code principles.",
    session: 4,
    duration: 32.0,
    venue: "Virtual/Online Only (Code-along sessions).",
    level: "Advanced",
    notes: {
      Prerequisites:
        "Intermediate knowledge of HTML, CSS, and JavaScript is essential.",
      Project: "Participants build a real-world portfolio project.",
    },
    categoryName: "Technology & Data",
  },
  {
    name: "Lean Six Sigma Green Belt Certification",
    description:
      "<p>Achieve your <strong>Green Belt certification</strong> by mastering the <strong>DMAIC methodology</strong> (Define, Measure, Analyze, Improve, Control) to lead process improvement projects, reduce waste, and increase quality in any organization. Become a certified process expert.</p>",
    fee: 1800.0,
    topics:
      "<h3>Phase 1: Define and Measure</h3><ul><li>Selecting High-Impact Projects</li><li>Mapping the Process (SIPOC)</li><li>Data Collection Planning and Measurement System Analysis (MSA)</li></ul><h3>Phase 2: Analyze and Improve</h3><ul><li>Root Cause Analysis Tools (Hypothesis Testing)</li><li>Introduction to Statistical Process Control (SPC)</li><li>Brainstorming and Implementing Solutions</li></ul><h3>Phase 3: Control and Sustain</h3><ul><li>Creating Control Plans to Maintain Gains</li><li>Documenting and Standardizing the New Process</li><li>Project Sign-off and Handover</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Lean Six Sigma Green Belt Certification (Accredited Body).</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Includes examination fee.</p>",
    jobRoles:
      "<ul><li>Process Improvement Specialists</li><li>Quality Managers</li><li>Operations Managers</li><li>Engineers and Production Staff</li></ul>",
    courseCode: "LSSGB",
    trainers:
      "<strong>Puan Dr. Zura, Master Black Belt:</strong> Dr. Zura is a certified Lean Six Sigma Master Black Belt with extensive experience in the manufacturing and service industries, having mentored dozens of successful Green Belt projects.",
    session: 4,
    duration: 30.0,
    venue: "Selangor, Glenmarie Industrial Park.",
    level: "Advanced",
    notes: {
      Certification:
        "Requires completion of the training and a mandatory process improvement project.",
      Tools: "Use of Minitab/Excel for statistical analysis.",
    },
    categoryName: "Operations & Logistics",
  },
  {
    name: "Advanced Emotional Intelligence for Leadership",
    description:
      "<p>A critical course for <strong>senior leaders</strong> focusing on deep self-awareness, social management, and leveraging <strong>emotional intelligence (EQ)</strong> to build resilient teams, inspire change, and navigate complex organizational politics. Enhance your executive presence and influence.</p>",
    fee: 720.0,
    topics:
      "<h3>Dimension 1: Self-Awareness and Regulation</h3><ul><li>Identifying Personal Triggers and Biases</li><li>Advanced Stress Management and Resilience</li><li>Authentic Leadership and Personal Values</li></ul><h3>Dimension 2: Social Awareness</h3><ul><li>Reading Group Dynamics and Organizational Culture</li><li>Empathy and Perspective-Taking Skills</li><li>Navigating Difficult Stakeholder Relationships</li></ul><h3>Dimension 3: Relationship Management</h3><ul><li>Inspiring and Influencing Others</li><li>Constructive Conflict Resolution and Coaching</li><li>Building a Culture of Trust and Psychological Safety</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>Emotional Intelligence Leadership Practitioner Certificate.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Often bundled with 360-degree assessment tools.</p>",
    jobRoles:
      "<ul><li>Senior Managers and Directors</li><li>High-Potential Leaders</li><li>HR and Organisational Development Specialists</li></ul>",
    courseCode: "LEAD202",
    trainers:
      "<strong>Mr. Alex Tan, Executive Coach:</strong> Alex is a certified leadership and emotional intelligence coach. He uses proven psychological frameworks and personalized feedback to drive measurable behavioral change in leaders.",
    session: 2,
    duration: 14.0,
    venue: "Kuala Lumpur, Mandarin Oriental Hotel (Executive Training Suite).",
    level: "Advanced",
    notes: {
      Assessment:
        "Includes pre-course EQ assessment (e.g., Mayer-Salovey model) and personalized debrief.",
      "Follow-up": "Two virtual group coaching sessions post-course.",
    },
    categoryName: "Management & Leadership",
  },
  {
    name: "Essential ISO 9001:2015 Quality Management System",
    description:
      "<p>Learn the principles and requirements of the <strong>ISO 9001:2015 standard</strong>. This course provides practical knowledge on implementing, maintaining, and auditing a <strong>Quality Management System (QMS)</strong> in any industry. Essential for organizational standardization and global compliance.</p>",
    fee: 780.0,
    topics:
      "<h3>Section A: Understanding ISO 9001</h3><ul><li>The Seven Quality Management Principles</li><li>Structure and Context of ISO 9001:2015 (Annex SL)</li><li>Understanding Customer Requirements and Expectations</li></ul><h3>Section B: Implementation and Documentation</h3><ul><li>Risk-Based Thinking and Opportunity Assessment</li><li>Process Approach and Performance Evaluation</li><li>Required Documented Information</li></ul><h3>Section C: Auditing and Improvement</h3><ul><li>Conducting Internal Audits (Principles and Methods)</li><li>Nonconformity Management and Corrective Actions</li><li>Continuous Improvement (KAIZEN)</li></ul>",
    courseInfo:
      "<h4>Certificate</h4><p>ISO 9001:2015 QMS Foundation Certificate.</p><h4>Funding and Grant</h4><p>HRD Corp Claimable Course. Crucial for compliance and international trade.</p>",
    jobRoles:
      "<ul><li>Quality Managers and Engineers</li><li>Internal Auditors</li><li>Process Owners</li><li>Management Representatives</li></ul>",
    courseCode: "ISO901",
    trainers:
      "<strong>Ms. Janet Lee, Lead Auditor:</strong> Janet is a certified ISO 9001 Lead Auditor and consultant with experience in certifying organizations across manufacturing, oil & gas, and service sectors.",
    session: 2,
    duration: 15.0,
    venue: "Virtual/Online Only (Interactive Case Studies).",
    level: "Intermediate",
    notes: {
      Focus:
        "Practical application of the standard clauses, not just theoretical understanding.",
      Templates: "QMS documentation templates provided.",
    },
    categoryName: "Operations & Logistics",
  },
];

const tags = ["SEO", "SOCIAL MEDIA", "GOOGLE ADS", "Analytics", "Education"];

export async function main() {
  for (const course of courses) {
    let categoryExists = await prisma.courseCategory.findUnique({
      where: {
        name: course.categoryName,
      },
    });
    if (!categoryExists) {
      categoryExists = await prisma.courseCategory.create({
        data: { name: course.categoryName, description: course.categoryName },
      });
    }
    const courseExists = await prisma.course.findUnique({
      where: {
        name: course.name,
      },
    });
    if (courseExists) continue;
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
        categoryId: categoryExists.id,
      },
    });
  }

  for (const tag of tags) {
    let exists = await prisma.tags.findUnique({
      where: {
        name: tag,
      },
    });
    if (exists) continue;
    exists = await prisma.tags.create({
      data: {
        name: tag,
      },
    });
    for (const course of courses) {
      const category = await prisma.courseCategory.findUnique({
        where: {
          name: course.categoryName,
        },
      });
      if (!category) continue;
      const tagExists = await prisma.categoryTags.findUnique({
        where: {
          tagId_categoryId: {
            tagId: exists.id,
            categoryId: category.id,
          },
        },
      });
      if (tagExists) continue;
      await prisma.categoryTags.create({
        data: { tagId: exists.id, categoryId: category.id },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
