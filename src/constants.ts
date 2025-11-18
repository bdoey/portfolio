/**
 * Portfolio Content Data
 *
 * Purpose: Centralized repository of all portfolio content and personal information.
 * Controls: Skills lists organized by category, work experience with roles and achievements,
 * education history, project portfolio with descriptions and tech stacks, and academic
 * publications. Modifying this file updates the content displayed across Resume, Projects,
 * and Publications sections of the website.
 */

import { SkillGroup, Experience, Education, Project, Publication } from './types';

export const SKILLS: SkillGroup[] = [
    {
        category: 'Languages & Modeling',
        skills: [
            {name: 'Python', icon: 'fab fa-python', description: 'Python is a versatile, high-level programming language known for its readability and extensive ecosystem of data science libraries. It serves as the primary language for machine learning, data analysis, and AI development. Python\'s simple syntax and powerful libraries like NumPy, Pandas, and scikit-learn make it the industry standard for data science workflows.'},
            {name: 'R', icon: 'fab fa-r-project', description: 'R is a programming language specifically designed for statistical computing and graphics. It excels in statistical modeling, data visualization, and exploratory data analysis with packages like ggplot2 and tidyverse. R is widely used in academia and industries requiring rigorous statistical analysis and publication-quality visualizations.'},
            {name: 'SQL', icon: 'fas fa-database', description: 'SQL (Structured Query Language) is the standard language for managing and querying relational databases. It enables efficient data retrieval, manipulation, and analysis across large datasets stored in database management systems. SQL skills are essential for data engineers and scientists to extract insights from enterprise data warehouses and build data pipelines.'},
            {name: 'JavaScript', icon: 'fab fa-js', description: 'JavaScript is a dynamic programming language that powers interactive web applications and increasingly server-side development. It enables real-time data visualizations, interactive dashboards, and full-stack development with frameworks like React and Node.js. JavaScript\'s ubiquity makes it essential for deploying ML models to web interfaces and building data-driven applications.'},
            {name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'TypeScript is a strongly-typed superset of JavaScript that adds static type checking and enhanced IDE support. It improves code reliability and maintainability in large-scale applications by catching errors at compile time. TypeScript is increasingly popular for building robust data visualization tools and enterprise-grade web applications.'},
            {name: 'Go', icon: 'fab fa-golang', description: 'Go (Golang) is a compiled programming language designed for simplicity, efficiency, and concurrent programming. It excels in building high-performance backend services, microservices, and cloud infrastructure tools. Go\'s fast compilation, built-in concurrency, and efficient memory management make it ideal for data pipeline orchestration and API development.'},
            {name: 'Rust', icon: 'fab fa-rust', description: 'Rust is a systems programming language focused on safety, performance, and memory efficiency without garbage collection. It\'s gaining adoption in data engineering for building high-performance data processing tools and ML infrastructure. Rust\'s zero-cost abstractions and memory safety guarantees make it suitable for performance-critical data applications.'},
            {name: 'Solidity', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', description: 'Solidity is the primary programming language for writing smart contracts on Ethereum and other blockchain platforms. It enables the creation of decentralized applications (dApps), DeFi protocols, and tokenized assets. Understanding Solidity is crucial for FinTech applications involving blockchain technology and decentralized finance.'},
            {name: 'Supervised Learning', icon: 'fas fa-project-diagram', description: 'Supervised learning is a machine learning paradigm where models learn from labeled training data to make predictions on new data. It encompasses classification tasks (predicting categories) and regression tasks (predicting continuous values). Common algorithms include linear regression, decision trees, random forests, and neural networks for tasks like fraud detection and demand forecasting.'},
            {name: 'Unsupervised Learning', icon: 'fas fa-network-wired', description: 'Unsupervised learning discovers hidden patterns and structures in data without labeled examples. Key techniques include clustering (grouping similar data points), dimensionality reduction, and anomaly detection. It\'s essential for customer segmentation, market basket analysis, and exploratory data analysis when labels are unavailable or expensive to obtain.'},
            {name: 'DNN', icon: 'fas fa-brain', description: 'Deep Neural Networks (DNNs) are multi-layered artificial neural networks capable of learning complex hierarchical representations from data. They power modern AI applications including image recognition, speech processing, and natural language understanding. DNNs require substantial computational resources but achieve state-of-the-art performance on many complex pattern recognition tasks.'},
            {name: 'RNN', icon: 'fas fa-circle-nodes', description: 'Recurrent Neural Networks (RNNs) are specialized neural architectures designed to process sequential data by maintaining memory of previous inputs. They excel in time series forecasting, natural language processing, and speech recognition. Variants like LSTM and GRU address the vanishing gradient problem, enabling learning of long-term dependencies in sequences.'},
            {name: 'RAG', icon: 'fas fa-magnifying-glass', description: 'Retrieval-Augmented Generation (RAG) combines large language models with external knowledge retrieval to generate more accurate and up-to-date responses. It addresses LLM limitations like hallucinations and knowledge cutoffs by fetching relevant documents before generation. RAG is essential for building enterprise chatbots, Q&A systems, and knowledge management applications.'},
            {name: 'NLP', icon: 'fas fa-language', description: 'Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. It encompasses tasks like text classification, named entity recognition, machine translation, and question answering. NLP techniques are fundamental for building chatbots, search engines, document analysis systems, and extracting insights from unstructured text data.'},
            {name: 'Sentiment Analysis', icon: 'fas fa-face-smile', description: 'Sentiment analysis is an NLP technique that identifies and extracts subjective information from text to determine emotional tone. It classifies text as positive, negative, or neutral and can detect specific emotions like joy or anger. Applications include brand monitoring, customer feedback analysis, financial market sentiment, and social media analytics.'},
            {name: 'Quantitative Modeling', icon: 'fas fa-chart-line', description: 'Quantitative modeling uses mathematical and statistical methods to analyze financial markets, assess risk, and inform investment decisions. It involves building models for asset pricing, portfolio optimization, risk management, and algorithmic trading. Quantitative analysts combine programming skills with financial theory to develop data-driven trading strategies and risk models.'}
        ]
    },
    {
        category: 'AI & ML Frameworks',
        skills: [
            {name: 'PyTorch', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', description: 'PyTorch is an open-source deep learning framework developed by Meta, known for its dynamic computation graphs and intuitive Python interface. It\'s the preferred framework in research due to its flexibility and ease of debugging. PyTorch powers cutting-edge applications in computer vision, NLP, and reinforcement learning with extensive GPU acceleration support.'},
            {name: 'TensorFlow', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', description: 'TensorFlow is Google\'s open-source machine learning platform for building and deploying ML models at scale. It offers comprehensive tools for the entire ML lifecycle including training, optimization, and production deployment. TensorFlow\'s ecosystem includes TensorFlow Lite for mobile and TensorFlow.js for web-based ML applications.'},
            {name: 'Keras', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg', description: 'Keras is a high-level neural networks API that provides an intuitive interface for building deep learning models. It abstracts away complexity while maintaining flexibility, making it ideal for rapid prototyping and experimentation. Keras now serves as TensorFlow\'s official high-level API while also supporting other backends.'},
            {name: 'NumPy', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', description: 'NumPy is the fundamental package for scientific computing in Python, providing support for large multi-dimensional arrays and matrices. It offers a vast collection of mathematical functions to operate on these arrays efficiently. NumPy serves as the foundation for virtually all data science and machine learning libraries in Python.'},
            {name: 'Pandas', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', description: 'Pandas is a powerful data manipulation and analysis library built on top of NumPy. It provides DataFrame and Series objects for handling structured data with intuitive operations for filtering, grouping, and transforming datasets. Pandas is essential for data cleaning, exploration, and preparation in any data science workflow.'},
            {name: 'Polars', icon: 'fas fa-table', description: 'Polars is a blazingly fast DataFrame library written in Rust with Python bindings, designed for high-performance data manipulation. It uses lazy evaluation and multi-threaded query execution to outperform Pandas on large datasets. Polars is gaining adoption for ETL pipelines and data processing tasks requiring speed and memory efficiency.'},
            {name: 'Scikit-learn', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', description: 'Scikit-learn is the most widely-used machine learning library in Python, providing simple and efficient tools for data mining and analysis. It includes implementations of classification, regression, clustering, and dimensionality reduction algorithms. Scikit-learn\'s consistent API and excellent documentation make it ideal for both learning ML and production applications.'},
            {name: 'XGBoost', icon: 'fas fa-tree', description: 'XGBoost (eXtreme Gradient Boosting) is an optimized gradient boosting library known for its speed and performance. It\'s a dominant algorithm in machine learning competitions and production systems for tabular data problems. XGBoost excels in classification and regression tasks with built-in handling of missing values and regularization to prevent overfitting.'},
            {name: 'LightGBM', icon: 'fas fa-bolt', description: 'LightGBM is a gradient boosting framework by Microsoft that uses tree-based learning algorithms optimized for speed and efficiency. It employs histogram-based algorithms and leaf-wise tree growth to achieve faster training on large datasets. LightGBM is particularly effective for high-dimensional data and large-scale machine learning tasks.'},
            {name: 'CatBoost', icon: 'fas fa-cat', description: 'CatBoost is a gradient boosting library by Yandex that handles categorical features natively without extensive preprocessing. It uses ordered boosting to reduce overfitting and provides state-of-the-art results on many benchmark datasets. CatBoost is known for its ease of use, requiring minimal parameter tuning while delivering excellent performance.'},
            {name: 'BERT', icon: 'fas fa-book', description: 'BERT (Bidirectional Encoder Representations from Transformers) is a pre-trained language model by Google that revolutionized NLP. It uses bidirectional training to understand context from both directions, achieving breakthrough performance on language tasks. BERT and its variants are widely used for text classification, question answering, and named entity recognition.'},
            {name: 'SpaCy', icon: 'fas fa-spell-check', description: 'SpaCy is an industrial-strength NLP library designed for production use with efficient processing of large volumes of text. It provides pre-trained models for tokenization, part-of-speech tagging, named entity recognition, and dependency parsing. SpaCy\'s pipeline architecture allows easy customization and integration into production NLP systems.'},
            {name: 'NeuralProphet', icon: 'fas fa-chart-area', description: 'NeuralProphet is a neural network-based time series forecasting library that combines the interpretability of Prophet with deep learning capabilities. It handles seasonality, trends, and special events while supporting auto-regression for improved accuracy. NeuralProphet is ideal for business forecasting applications requiring both accuracy and explainability.'},
            {name: 'Optuna', icon: 'fas fa-sliders', description: 'Optuna is an automatic hyperparameter optimization framework that uses efficient sampling and pruning algorithms. It supports various optimization algorithms including TPE and CMA-ES to find optimal model configurations. Optuna\'s define-by-run API and visualization tools make hyperparameter tuning intuitive and efficient for ML practitioners.'},
            {name: 'MLX', icon: 'fas fa-microchip', description: 'MLX is Apple\'s machine learning framework optimized for Apple Silicon, providing NumPy-like operations with automatic differentiation. It enables efficient ML research and development on Mac devices by leveraging the unified memory architecture. MLX is gaining adoption for running large language models and training neural networks locally on Apple hardware.'},
            {name: 'CUDA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg', description: 'CUDA is NVIDIA\'s parallel computing platform that enables dramatic performance increases by harnessing GPU power. It\'s essential for training deep learning models, as GPUs can process thousands of operations in parallel. CUDA proficiency is crucial for optimizing ML workflows and deploying models that require high computational throughput.'}
        ]
    },
    {
        category: 'Generative & Agentic AI',
        skills: [
            {name: 'AutoGen', icon: 'fas fa-robot', description: 'AutoGen is Microsoft\'s framework for building multi-agent systems where AI agents can converse and collaborate to solve complex tasks. It enables the creation of conversational AI applications with multiple specialized agents working together. AutoGen simplifies the development of autonomous AI systems that can reason, plan, and execute tasks with minimal human intervention.'},
            {name: 'PydanticAI', icon: 'fas fa-code-branch', description: 'PydanticAI combines the power of Pydantic data validation with AI agent capabilities for building type-safe AI applications. It provides structured output parsing and validation for LLM responses, ensuring reliable and predictable AI interactions. PydanticAI is essential for production AI systems requiring strict data contracts and error handling.'},
            {name: 'CrewAI', icon: 'fas fa-users', description: 'CrewAI is a framework for orchestrating role-playing AI agents that work together as a team to accomplish complex objectives. It enables the creation of specialized agents with distinct roles, goals, and tools that collaborate autonomously. CrewAI is used for building sophisticated AI workflows like research automation, content creation, and business process automation.'},
            {name: 'Haystack', icon: 'fas fa-layer-group', description: 'Haystack is an end-to-end NLP framework for building production-ready search systems and question-answering applications. It provides modular components for document retrieval, reader models, and pipeline orchestration. Haystack excels in building RAG applications, semantic search engines, and enterprise knowledge management systems.'},
            {name: 'Hugging Face Transformers', icon: 'fas fa-face-grin-hearts', description: 'Hugging Face Transformers is the leading library for state-of-the-art NLP models, providing thousands of pre-trained models for various tasks. It offers a unified API for training, fine-tuning, and deploying transformer models like BERT, GPT, and T5. The library has become the de facto standard for NLP research and production applications.'},
            {name: 'Smolagents', icon: 'fas fa-user-secret', description: 'Smolagents is Hugging Face\'s lightweight framework for building AI agents that can use tools and reason through multi-step tasks. It provides a simple interface for creating agents that can browse the web, execute code, and interact with APIs. Smolagents is designed for building practical AI assistants with minimal complexity and overhead.'},
            {name: 'Unsloth', icon: 'fas fa-rocket', description: 'Unsloth is a library that dramatically accelerates LLM fine-tuning by up to 30x while reducing memory usage significantly. It optimizes the training process through custom CUDA kernels and memory-efficient techniques. Unsloth makes fine-tuning large language models accessible on consumer hardware, democratizing custom LLM development.'},
            {name: 'Chroma', icon: 'fas fa-palette', description: 'Chroma is an open-source embedding database designed for AI applications requiring fast similarity search and retrieval. It stores and queries embeddings with associated metadata, making it ideal for RAG systems and semantic search. Chroma\'s simple API and in-memory performance make it popular for prototyping and production AI applications.'},
            {name: 'Weaviate', icon: 'fas fa-cubes', description: 'Weaviate is a cloud-native vector database that combines vector search with structured filtering for AI-powered applications. It supports multiple vectorization modules and provides GraphQL APIs for flexible querying. Weaviate is used for building scalable semantic search, recommendation systems, and enterprise RAG applications.'},
            {name: 'Ollama', icon: 'fas fa-server', description: 'Ollama is a tool for running large language models locally on your machine with a simple command-line interface. It handles model downloading, optimization, and serving with support for popular models like Llama, Mistral, and CodeLlama. Ollama makes local LLM development accessible by abstracting away the complexity of model deployment.'},
            {name: 'LM Studio', icon: 'fas fa-laptop-code', description: 'LM Studio is a desktop application for discovering, downloading, and running local LLMs with an intuitive graphical interface. It provides a chat interface and local API server compatible with OpenAI\'s API format. LM Studio is ideal for developers exploring different models and building privacy-focused AI applications.'},
            {name: 'vLLM', icon: 'fas fa-gauge-high', description: 'vLLM is a high-throughput LLM serving library that uses PagedAttention to efficiently manage GPU memory. It achieves up to 24x higher throughput than standard implementations, making it ideal for production LLM deployments. vLLM supports continuous batching and is widely used for serving large language models at scale.'},
            {name: 'LangChain', icon: 'fas fa-link', description: 'LangChain is a framework for developing applications powered by language models through composable chains and agents. It provides abstractions for prompts, memory, tools, and output parsing to build complex LLM applications. LangChain has become a standard tool for creating chatbots, document analysis systems, and autonomous AI agents.'}
        ]
    },
    {
        category: 'MLOps & Business Intelligence',
        skills: [
            {name: 'Google Cloud', icon: 'fab fa-google', description: 'Google Cloud Platform (GCP) is a comprehensive suite of cloud computing services for building, deploying, and scaling applications. It offers infrastructure, storage, machine learning, and data analytics services used by enterprises worldwide. GCP\'s integration with Google\'s AI/ML tools makes it particularly strong for data science and machine learning workloads.'},
            {name: 'VertexAI', icon: 'fab fa-google', description: 'Vertex AI is Google Cloud\'s unified machine learning platform for building, deploying, and scaling ML models. It provides tools for the entire ML lifecycle including AutoML, custom training, model monitoring, and feature stores. Vertex AI simplifies MLOps by integrating data preparation, training, and deployment into a single managed platform.'},
            {name: 'BigQuery', icon: 'fas fa-database', description: 'BigQuery is Google\'s fully-managed, serverless data warehouse designed for large-scale data analytics. It enables SQL queries on petabytes of data with automatic scaling and built-in machine learning capabilities. BigQuery\'s separation of storage and compute allows cost-effective analysis of massive datasets for business intelligence.'},
            {name: 'Apache Airflow', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', description: 'Apache Airflow is an open-source platform for programmatically authoring, scheduling, and monitoring data workflows. It uses directed acyclic graphs (DAGs) to define complex pipelines with dependencies and retry logic. Airflow has become the standard for orchestrating ETL processes and machine learning pipelines in production environments.'},
            {name: 'Kubernetes', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', description: 'Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. It provides self-healing, load balancing, and rolling updates for microservices architectures. Kubernetes is essential for deploying ML models at scale and managing distributed training workloads.'},
            {name: 'Docker', icon: 'fab fa-docker', description: 'Docker is a platform for developing, shipping, and running applications in isolated containers. It ensures consistency across development, testing, and production environments by packaging code with dependencies. Docker is fundamental to modern MLOps, enabling reproducible experiments and portable model deployments across any infrastructure.'},
            {name: 'ServiceNow', icon: 'fas fa-ticket', description: 'ServiceNow is a cloud-based platform for IT service management, workflow automation, and enterprise operations. It provides tools for incident management, change management, and service catalogs used by large organizations. ServiceNow\'s workflow capabilities are increasingly used for automating ML model governance and deployment approvals.'},
            {name: 'Smartsheet', icon: 'fas fa-table-cells', description: 'Smartsheet is a collaborative work management platform that combines spreadsheet simplicity with project management features. It offers Gantt charts, automation, and real-time collaboration for tracking complex projects. Smartsheet is used in data teams for managing ML project timelines, resource allocation, and stakeholder communication.'},
            {name: 'Collibra', icon: 'fas fa-folder-tree', description: 'Collibra is an enterprise data intelligence platform for data governance, cataloging, and quality management. It provides a business glossary, data lineage tracking, and policy management for regulatory compliance. Collibra is essential for organizations managing data assets at scale and ensuring trust in their analytics and ML models.'},
            {name: 'Teradata', icon: 'fas fa-database', description: 'Teradata is an enterprise data warehousing platform optimized for large-scale analytics and complex queries. It provides massively parallel processing (MPP) architecture for handling petabytes of structured data. Teradata is used by large enterprises for business intelligence, customer analytics, and supporting data science initiatives.'},
            {name: 'MLflow', icon: 'fas fa-flask', description: 'MLflow is an open-source platform for managing the end-to-end machine learning lifecycle. It provides experiment tracking, model packaging, registry, and deployment capabilities. MLflow has become a standard tool for reproducible ML experiments and model versioning across teams and organizations.'},
            {name: 'WandB', icon: 'fas fa-wand-magic-sparkles', description: 'Weights & Biases (WandB) is a platform for experiment tracking, model visualization, and collaborative ML development. It automatically logs metrics, hyperparameters, and artifacts while providing interactive dashboards for analysis. WandB is widely used in research and industry for tracking deep learning experiments and sharing results.'},
            {name: 'Jenkins', icon: 'fab fa-jenkins', description: 'Jenkins is an open-source automation server for implementing continuous integration and continuous delivery (CI/CD) pipelines. It supports building, testing, and deploying software with extensive plugin ecosystem. Jenkins is used in MLOps for automating model training, testing, and deployment workflows in production environments.'},
            {name: 'Looker Studio', icon: 'fas fa-chart-pie', description: 'Looker Studio (formerly Data Studio) is Google\'s free business intelligence tool for creating interactive dashboards and reports. It connects to various data sources and provides drag-and-drop visualization building. Looker Studio is popular for sharing ML model performance metrics and business KPIs with stakeholders.'},
            {name: 'Qlik Sense', icon: 'fas fa-chart-bar', description: 'Qlik Sense is a self-service business intelligence platform with an associative analytics engine for data exploration. It enables users to create visualizations and discover insights through natural search and AI-generated recommendations. Qlik Sense is used for building enterprise dashboards and enabling data-driven decision making across organizations.'},
            {name: 'Tableau', icon: 'fas fa-chart-column', description: 'Tableau is a leading data visualization platform that transforms data into interactive, shareable dashboards. It connects to virtually any data source and provides intuitive drag-and-drop analytics accessible to business users. Tableau is widely used for presenting ML model results, creating executive dashboards, and enabling self-service analytics.'}
        ]
    }
];

export const EXPERIENCE: Experience[] = [
    {
        role: 'Senior Manager - Data Science',
        company: 'Verizon',
        duration: 'Aug 2024 – Present',
        points: [
            'Architected and implemented a self-optimizing wireless churn forecasting pipeline leveraging Optuna hyperparameter tuning and a customized NeuralProphet model, achieving 15% higher prediction accuracy and extending forecast horizons by 3 months.',
            'Designed and deployed a GenAI-powered anomaly detection system that autonomously identifies churn pattern anomalies and generates executive-ready summaries, reducing time-to-insight from days to hours and enabling proactive retention strategies.',
            'Developed an innovative XGBoost-Prophet hybrid ensemble forecasting model for Verizon\'s Fixed Wireless Access team, increasing churn prediction accuracy by 10% while reducing computational overhead by 25%.'
        ]
    },
    {
        role: 'Principal Data Engineer',
        company: 'Verizon',
        duration: 'Jan 2021 – Aug 2024',
        points: [
            'Spearheaded the implementation of the first Qlik powered end-to-end data pipeline combining 120M+ records from 3 disparate systems, enabling product managers to track over $45B in annual revenue.',
            'Developed a Python-based application that automatically generated essential product hierarchy data, reducing turnaround time by 95% and facilitating accurate product revenue tracking.',
            'Engineered scalable JavaScript-based Google Apps Script connecting product delivery to revenue tracking, upholding Verizon\'s $130B revenue recognition pipeline.'
        ]
    },
    {
        role: 'Systems Analysis & Programming Supervisor',
        company: 'Verizon',
        duration: 'Sep 2017 – Jan 2021',
        points: [
           "Successfully integrated Verizon's Finance Corporate Systems organization into their new ServiceNow CMDB platform (15 teams, 150 users) enabling improved stakeholder visibility by increasing ITIL process adoption and increasing customer satisfaction rates by 60%.",
           "Managed a diverse team of systems specialists that supported Verizon's internal ERP Portal infrastructure which incorporated both SAP ERP platforms and Oracle's PeopleSoft systems critical for finance operations.",
           'Implemented process improvements that resulted in 44% faster average resolution time on critical system issues affecting the Verizon Finance and Accounting organizations.'
        ]
    },
    {
        role: 'Lead Systems Specialist',
        company: 'Verizon',
        duration: 'Mar 2017 – Sep 2017',
        points: [
            'Coordinated the delivery of a comprehensive enterprise-wide ERP support solution for Verizon’s SAP ERP platforms and negotiated key SLA agreements with external support vendors.',
            'Managed global SAP support teams to triage ERP-related issues, resulting in a 30% decrease to resolution times.',
            'Improved internal customer satisfaction by 20% through the implementation of organization-wide KPIs.'
        ]
    },
    {
        role: 'Lead Systems Analyst',
        company: 'Aon',
        duration: 'Jan 2015 – Mar 2017',
        points: [
            'Partnered with the HR Technology team to implement a new benefit administration platform, which was completed ahead of schedule and under budget, serving 150,000+ employees.',
            'Led cross-functional development and design teams to deliver training for 50+ internal employees to ensure smooth transition to the new platform.',
            'Employed Agile project management methodology to move complex software improvements through the Software Development Life Cycle (SDLC) and into production.'
        ]
    },
    {
        role: 'Systems Analyst',
        company: 'Aon',
        duration: 'Apr 2012 – Jan 2015',
        points: [
            'Designated a Subject Matter Expert (SME) on Aon\'s proprietary TBA web portal.',
            'Performed comprehensive QA testing to verify functionality and ensure system stability.',
            'Configured Aon\'s benefits administration system serving over 15 clients\' requirements.'
        ]
    },
    {
        role: 'Linux Server Analyst',
        company: 'HostDime',
        duration: 'Jul 2008 – Apr 2012',
        points: [
            'Deployed and managed HostDime’s Virtual Private Server product line with 99.95% uptime.',
            'Exceeded sales targets with high ROI solutions sold throughout 7 international branches on monthly basis.',
            'Created curriculum and led the first 3-week Employee Training program for new hires.',
            'Provided 24/7 support on CentOS Linux based web servers for international clients.'
        ]
    }
];

export const EDUCATION: Education[] = [
    {
        degree: 'MS, Finance Technology (FinTech)',
        university: 'University of Central Florida',
        concentration: 'Concentration in AI/ML applications for FinTech innovation.'
    },
    {
        degree: 'BS, Management Information Systems',
        university: 'University of Central Florida',
        concentration: 'Concentration in database management, systems analysis, and project management.'
    }
];

export const PROJECTS: Project[] = [
    {
        category: 'Generative AI',
        title: 'AI Enabled Financial Literacy Q&A System',
        image: 'https://picsum.photos/seed/ai1/600/400',
        description: 'Leveraging Retrieval Augmented Generation and local LLMs to combat financial illiteracy with a private and secure Q&A system.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/AI_Financial_Literacy_Local_LLM.ipynb',
        techStack: ['Python', 'RAG', 'LLM', 'Chroma']
    },
    {
        category: 'Generative AI',
        title: 'LLM Powered Data Anomaly Detection App',
        image: 'https://picsum.photos/seed/ai2/600/400',
        description: 'Identifies anomalies in datasets using Python for analysis and a local LLM for narrative explanations.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/AI_Llama3_Powered_Anomaly_Detection.ipynb',
        techStack: ['Python', 'Llama3', 'Pandas']
    },
    {
        category: 'Generative AI',
        title: 'AI Research Summarizer with LLM Feedback',
        image: 'https://picsum.photos/seed/ai3/600/400',
        description: 'Fetches recent AI research papers from arXiv and provides concise summaries with insightful feedback from a local LLM.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/AI_Research_Summarizer_LLM_Feedback.ipynb',
        techStack: ['Python', 'arXiv API', 'LLM', 'NLP']
    },
    {
        category: 'FinTech Apps',
        title: 'BNPL Credit Worthiness App',
        image: 'https://picsum.photos/seed/ft1/600/400',
        description: 'Uses a Keras Sequential model for deep learning-based creditworthiness analysis of potential borrowers.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/FT_BNPL_CAP5619_Final.ipynb',
        techStack: ['Python', 'Keras', 'TensorFlow', 'Deep Learning']
    },
    {
        category: 'FinTech Apps',
        title: 'DJIA Analysis using NLP and MACD',
        image: 'https://picsum.photos/seed/ft2/600/400',
        description: 'Combines natural language processing of financial news with quantitative trading algorithms to generate actionable insights.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/FT_DJIA_Analysis_using_NLP_MACD.ipynb',
        techStack: ['Python', 'NLP', 'MACD', 'Trading']
    },
    {
        category: 'FinTech Apps',
        title: 'Trading Agent using Q-Learning',
        image: 'https://picsum.photos/seed/ft3/600/400',
        description: 'Develops a reinforcement learning agent that learns optimal trading strategies from historical market data.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/FT_Trading_Agent_using_Q-learning.ipynb',
        techStack: ['Python', 'Q-Learning', 'RL', 'Trading']
    },
    {
        category: 'Data Science',
        title: 'Stock Market Prediction using LSTM',
        image: 'https://picsum.photos/seed/ds1/600/400',
        description: 'Utilizes Long Short-Term Memory (LSTM) networks for time-series prediction of stock market movements.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/FT_Stock_Prediction_using_LSTM.ipynb',
        techStack: ['Python', 'LSTM', 'Keras', 'Time Series']
    },
    {
        category: 'Data Science',
        title: 'Churn Prediction using RF Classifier',
        image: 'https://picsum.photos/seed/ds2/600/400',
        description: 'Predicts customer churn for a telecom company and informs targeted retention strategies through customer segmentation.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/DS_Churn_Prediction_using_Classifier.ipynb',
        techStack: ['Python', 'Random Forest', 'Scikit-learn']
    },
    {
        category: 'Data Science',
        title: 'Bankruptcy Prediction using Ensemble ML',
        image: 'https://picsum.photos/seed/ds3/600/400',
        description: 'Performs an ensemble machine learning approach to predict bankruptcy, including EDA and handling class imbalance.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/DS_Bankruptcy_Prediction_using_Ensemble.ipynb',
        techStack: ['Python', 'Ensemble ML', 'XGBoost']
    },
    {
        category: 'Machine Learning',
        title: 'Customer Segmentation using Clustering',
        image: 'https://picsum.photos/seed/ml1/600/400',
        description: 'Aims to better understand customer behavior to assess risk profiles and inform risk mitigation strategies.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/ML_Customer_Segmentation_using_Clustering.ipynb',
        techStack: ['Python', 'K-Means', 'Clustering']
    },
    {
        category: 'Machine Learning',
        title: 'Dropout Prediction using FF Neural Network',
        image: 'https://picsum.photos/seed/ml2/600/400',
        description: 'Applies a Keras-based Feed-Forward Neural Network to predict the likelihood of college student dropouts.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/ML_Dropout_Prediction_using_FFNN.ipynb',
        techStack: ['Python', 'Keras', 'Neural Network']
    },
    {
        category: 'Machine Learning',
        title: 'Sentiment Analysis using LDA',
        image: 'https://picsum.photos/seed/ml3/600/400',
        description: 'Uses Latent Dirichlet Allocation (LDA) for topic modeling and weighted sentiment analysis on news articles.',
        link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/ML_Sentiment_Analysis_using_LDA.ipynb',
        techStack: ['Python', 'LDA', 'NLP', 'Topic Modeling']
    }
];

export const PUBLICATIONS: Publication[] = [
    {
        title: 'How negative tones in earnings calls shape media narratives',
        meta: 'January 2025 · Review of Behavioral Finance',
        authors: 'Brandon Doey, Pieter Johannes De Jong',
        abstract: 'This study investigates the relationship between earnings call sentiment and subsequent media coverage sentiment. Examining these synergistic effects between executive communication style and resulting news narratives provides novel insights. The unscripted qualitative discussions in earnings calls establish perceptions and outlooks that the media echoes in later coverage. Understanding these intricate connections between information channels aids communication experts and market analysts in shaping strategic messaging and predicting market impacts.',
        doi: 'https://doi.org/10.1108/RBF-08-2024-0228'
    },
    {
        title: 'Linguistic complexity and gender in financial analysis: Evidence from earnings call questioning patterns',
        meta: 'September 2025 · Journal of Behavioral Finance',
        authors: 'Brandon Doey, Pieter Johannes De Jong, Inga Timmerman Chira',
        abstract: 'This study examines gender-based differences in linguistic complexity during earnings conference calls. We analyze variations in syntactic complexity across analyst-CEO interactions and find that male analysts exhibit greater syntactic variability, but lower lexical complexity compared to female analysts. These patterns are more pronounced when questioning female CEOs and in smaller firms. The linguistic variations have measurable market consequences, with significant associations between communication patterns and post-call market reactions. Our findings suggest that gender diversity in analyst ranks may enhance information extraction during earnings calls through complementary questioning strategies.',
        doi: 'https://doi.org/10.1080/15427560.2025.2556660'
    }
];
