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
        skills: [{name: 'Python'}, {name: 'R'}, {name: 'SQL'}, {name: 'JavaScript'}, {name: 'TypeScript'}, {name: 'Go'}, {name: 'Rust'}, {name: 'Solidity'}, {name: 'Supervised Learning'}, {name: 'Unsupervised Learning'}, {name: 'Deep Neural Networks'}, {name: 'Recurrent Neural Networks'}, {name: 'Retrieval-Augmented Generation'}, {name: 'Natural Language Processing'}, {name: 'Sentiment Analysis'}, {name: 'Quantitative Modeling'}]
    },
    {
        category: 'AI & ML Frameworks',
        skills: [{name: 'PyTorch'}, {name: 'TensorFlow'}, {name: 'Keras'}, {name: 'NumPy'}, {name: 'Pandas'}, {name: 'Polars'}, {name: 'Scikit-learn'}, {name: 'XGBoost'}, {name: 'LightGBM'}, {name: 'CatBoost'}, {name: 'BERT'}, {name: 'SpaCy'}, {name: 'NeuralProphet'}, {name: 'Optuna'}, {name: 'MLX'}, {name: 'CUDA'}]
    },
    {
        category: 'Generative & Agentic AI',
        skills: [{name: 'AutoGen'}, {name: 'PydanticAI'}, {name: 'CrewAI'}, {name: 'Haystack'}, {name: 'Hugging Face Transformers'}, {name: 'Smolagents'}, {name: 'Unsloth'}, {name: 'Chroma'}, {name: 'Weaviate'}, {name: 'Ollama'}, {name: 'LM Studio'}, {name: 'vLLM'}, {name: 'LangChain'}]
    },
    {
        category: 'MLOps & Business Intelligence',
        skills: [{name: 'Google Cloud Platform (GCP)'}, {name: 'VertexAI'}, {name: 'BigQuery'}, {name: 'Apache Airflow'}, {name: 'Kubernetes'}, {name: 'Docker'}, {name: 'ServiceNow'}, {name: 'Smartsheet'}, {name: 'Collibra'}, {name: 'Teradata'}, {name: 'MLflow'}, {name: 'WandB'}, {name: 'Jenkins CI/CD'}, {name: 'Looker Studio'}, {name: 'Qlik Sense'}, {name: 'Tableau'}]
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
