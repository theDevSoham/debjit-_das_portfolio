export const projects = [
  {
    slug: "superstore-sales-dashboard",

    title: "Superstore Sales Performance Dashboard",

    category: "Data Analytics / Power BI",

    year: "2025",

    image: "/projects/dashboard_preview.png",

    hero:
      "Built an end-to-end retail analytics dashboard to uncover profit leakages, regional trends, and discount-driven losses across 9,994 retail orders.",

    overview:
      "Analyzed 9,994 retail orders spanning 2014–2017 across 4 US regions using Python, SQL, and Power BI. Identified that the Central region’s aggressive 24% discounting strategy reduced profit margins to 7.92%, nearly half the company average. Also discovered that the Tables sub-category generated over $207K revenue while operating at a negative profit margin of −8.56%. Developed an interactive executive dashboard for KPI tracking and business decision-making.",

    methodology: [
      "Performed data cleaning and preprocessing using Python and Pandas.",
      "Conducted exploratory data analysis on sales, profit, discount, and regional trends.",
      "Built SQL queries for KPI extraction and business analysis.",
      "Designed interactive Power BI dashboards with slicers and drilldowns.",
      "Analyzed YoY growth, category performance, and loss-making segments.",
    ],

    results: [
      "Identified high-discount regions impacting profitability.",
      "Detected loss-making product categories despite high revenue generation.",
      "Delivered executive dashboard for data-driven sales monitoring.",
    ],

    metrics: [
      {
        label: "Orders",
        value: "9,994",
      },

      {
        label: "YoY Growth",
        value: "29.47%",
      },

      {
        label: "Regions",
        value: "4",
      },
    ],
  },

  {
    slug: "hr-attrition-analysis",

    title: "HR Attrition Analysis Dashboard",

    category: "People Analytics / Power BI",

    year: "2025",

    image: "/projects/hr_attrition_dashboard_preview.png",

    hero:
      "Developed a workforce analytics dashboard to identify employee attrition drivers and improve HR decision-making using SQL and Power BI.",

    overview:
      "Built an HR analytics solution using IBM employee data containing 1,470 employee records and 35 workforce features. Discovered that Sales Representatives showed the highest attrition rate at 39.76%, while employees working overtime were nearly 3× more likely to leave the organization. Designed an interactive dashboard for workforce analysis, retention insights, and department-level KPI reporting.",

    methodology: [
      "Performed preprocessing and workforce data cleaning using Python.",
      "Built SQL queries to analyze attrition patterns and employee behavior.",
      "Conducted exploratory analysis across departments, overtime, and age groups.",
      "Developed Power BI dashboards with dynamic filters and KPI cards.",
      "Generated retention insights through workforce segmentation analysis.",
    ],

    results: [
      "Identified overtime as a major contributor to attrition.",
      "Detected high-risk employee groups using workforce analytics.",
      "Created dashboard-driven reporting system for HR decision-making.",
    ],

    metrics: [
      {
        label: "Employees",
        value: "1,470",
      },

      {
        label: "Attrition",
        value: "16.12%",
      },

      {
        label: "Highest Risk",
        value: "39.76%",
      },
    ],
  },

  {
    slug: "criminal-intent-detection",

    title: "Criminal Intent Detection Using DistilBERT",

    category: "NLP / Machine Learning",

    year: "2025",

    image: "/projects/ci.png",

    hero:
      "Built a transformer-based NLP system capable of classifying harmful conversational intent across multiple criminal intent categories.",

    overview:
      "Developed a multi-class NLP classification system using DistilBERT to detect harmful conversational intent from dialogue data. Created a custom dataset by combining public harmful-language datasets with synthetically generated movie-dialogue data. The fine-tuned model achieved approximately 85% accuracy while reducing inference latency by nearly 60% compared to larger transformer architectures.",

    methodology: [
      "Built and cleaned an 11K+ dialogue utterance dataset.",
      "Performed tokenization and NLP preprocessing using HuggingFace pipelines.",
      "Fine-tuned DistilBERT for multi-class intent classification.",
      "Implemented batching and optimized inference workflows using PyTorch.",
      "Evaluated model performance using confusion matrix and F1-score analysis.",
    ],

    results: [
      "Achieved strong classification accuracy across 5 intent categories.",
      "Reduced computational overhead using lightweight transformer architecture.",
      "Built scalable NLP workflow for harmful language detection.",
    ],

    metrics: [
      {
        label: "Accuracy",
        value: "85%",
      },

      {
        label: "Dataset",
        value: "11K+",
      },

      {
        label: "Latency",
        value: "-60%",
      },
    ],
  },

  {
    slug: "food-image-classification",

    title: "Food Image Classification System",

    category: "Computer Vision / Deep Learning",

    year: "2025",

    image: "/projects/mutter_paneer.png",

    hero:
      "Developed a deep learning-based food recognition system using transfer learning and feature extraction techniques for fine-grained image classification.",

    overview:
      "Built a food image classification system using EfficientNetB0 and transfer learning techniques on a custom dataset collected from public APIs and benchmark datasets. Compared traditional machine learning approaches against deep learning architectures and achieved approximately 92% classification accuracy, outperforming classical ML models by over 30 percentage points.",

    methodology: [
      "Collected and processed custom food image datasets from multiple sources.",
      "Applied image preprocessing, ROI extraction, and augmentation workflows.",
      "Benchmarked SVM and Random Forest against CNN-based architectures.",
      "Fine-tuned EfficientNetB0 using transfer learning techniques.",
      "Performed model evaluation using classification metrics and visual analysis.",
    ],

    results: [
      "Achieved high classification accuracy across multiple food categories.",
      "Validated effectiveness of deep feature extraction over handcrafted features.",
      "Improved model generalization using augmentation pipelines.",
    ],

    metrics: [
      {
        label: "Accuracy",
        value: "92%",
      },

      {
        label: "Categories",
        value: "20+",
      },

      {
        label: "Model",
        value: "EfficientNetB0",
      },
    ],
  },

  {
    slug: "counterfeit-medicine-detection",

    title: "Counterfeit Medicine Detection System",

    category: "AI / Computer Vision",

    year: "2025",

    image: "/projects/flask_ui.jpg",

    hero:
      "Designed a multimodal AI system that combines image analysis and OCR-based text verification to identify counterfeit pharmaceutical products.",

    overview:
      "Developed a multi-modal counterfeit medicine detection framework integrating MobileNetV2 for packaging image analysis and GRU-based sequence modeling for OCR text verification. Built a Flask-based deployment pipeline integrated with PaddleOCR for real-time inference. The system was trained on over 4,000 medicine samples and optimized using threshold tuning and class balancing strategies.",

    methodology: [
      "Collected and preprocessed medicine packaging datasets.",
      "Applied OCR extraction using PaddleOCR pipelines.",
      "Fine-tuned MobileNetV2 for image feature extraction.",
      "Implemented GRU-based text sequence classification workflows.",
      "Combined image and OCR embeddings for multimodal prediction.",
    ],

    results: [
      "Improved counterfeit detection under severe class imbalance.",
      "Built real-time Flask inference workflow for deployment.",
      "Enhanced classification reliability using multimodal learning.",
    ],

    metrics: [
      {
        label: "Samples",
        value: "4,071",
      },

      {
        label: "Accuracy",
        value: "87.5%",
      },

      {
        label: "Pipeline",
        value: "OCR + AI",
      },
    ],
  },

  {
    slug: "mapinn-pinn-framework",

    title: "MAPINN: Multi-Scale Adaptive PINN",

    category: "Machine Learning / Scientific AI",

    year: "2026",

    image: "/projects/project-6.png",

    hero:
      "Developed an adaptive Physics-Informed Neural Network framework for solving complex nonlinear systems with improved accuracy and stability.",

    overview:
      "Designed MAPINN, a multi-scale adaptive Physics-Informed Neural Network framework for solving nonlinear PDE systems involving sharp interfaces and wave propagation. Integrated Fourier feature encoding, adaptive sampling, and multi-branch neural architectures to improve learning stability and prediction accuracy. The framework achieved up to 100× lower relative L2 error compared to baseline PINN models.",

    methodology: [
      "Built multi-branch PINN architecture using PyTorch.",
      "Integrated Fourier feature embeddings for multi-scale learning.",
      "Implemented adaptive residual-based sampling workflows.",
      "Evaluated performance on Allen–Cahn and FitzHugh–Nagumo systems.",
      "Compared MAPINN against baseline and Fourier-enhanced PINNs.",
    ],

    results: [
      "Achieved significantly lower prediction error than baseline PINNs.",
      "Improved interface tracking and wave propagation accuracy.",
      "Demonstrated scalable scientific machine learning workflows.",
    ],

    metrics: [
      {
        label: "Error Reduction",
        value: "100×",
      },

      {
        label: "Framework",
        value: "PyTorch",
      },

      {
        label: "Systems",
        value: "2 PDEs",
      },
    ],
  },

  {
    slug: "food-image-classification",

    title: "Food Image Classification",

    category: "Deep Learning / Vision",

    year: "2024",

    image: "/projects/project-3.png",

    hero: "Transfer-learning based image classification system using EfficientNet architectures and augmentation workflows.",

    overview:
      "This project explores transfer learning for food image classification using EfficientNetB0 and augmentation pipelines. The system benchmarks deep learning performance against traditional ML approaches.",

    methodology: [
      "Applied transfer learning using EfficientNetB0.",
      "Built augmentation pipelines for generalization.",
      "Benchmarked CNN performance against classical ML models.",
      "Evaluated classification consistency across datasets.",
      "Optimized training workflows for accuracy improvements.",
    ],

    results: [
      "Achieved over 90% classification accuracy.",
      "Validated effectiveness of deep feature extraction.",
      "Improved generalization using augmentation workflows.",
    ],

    metrics: [
      {
        label: "Accuracy",
        value: "90%+",
      },

      {
        label: "Architecture",
        value: "EfficientNetB0",
      },

      {
        label: "Task",
        value: "Classification",
      },
    ],
  },
];

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;

  title: string;
  category: string;
  year: string;

  image: string;

  hero: string;
  overview: string;

  methodology: string[];
  results: string[];

  metrics: ProjectMetric[];
}

