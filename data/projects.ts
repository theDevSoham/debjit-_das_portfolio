export const projects = [
  {
    slug: "counterfeit-medicine-detection",

    title: "Counterfeit Medicine Detection System",

    category: "Computer Vision / NLP",

    year: "2025",

    image: "/projects/project-1.png",

    hero: "A multimodal deep learning system designed to identify counterfeit medicine packaging through OCR and visual intelligence.",

    overview:
      "This research-focused project combines computer vision and natural language processing to detect inconsistencies in pharmaceutical packaging. The system leverages OCR extraction, deep visual embeddings, and multimodal learning pipelines to improve counterfeit detection reliability.",

    methodology: [
      "Collected and preprocessed pharmaceutical packaging datasets.",
      "Applied OCR extraction using PaddleOCR pipelines.",
      "Used MobileNetV2 for visual feature extraction.",
      "Integrated GRU-based sequence understanding for textual analysis.",
      "Combined multimodal embeddings for classification.",
    ],

    results: [
      "Improved robustness under class imbalance.",
      "Achieved strong classification accuracy across validation sets.",
      "Enabled lightweight deployment using Flask APIs.",
    ],

    metrics: [
      {
        label: "Accuracy",
        value: "92%",
      },

      {
        label: "Architecture",
        value: "MobileNetV2 + GRU",
      },

      {
        label: "Framework",
        value: "TensorFlow",
      },
    ],
  },

  {
    slug: "criminal-intent-detection",

    title: "Criminal Intent Detection Using DistilBERT",

    category: "Natural Language Processing",

    year: "2025",

    image: "/projects/project-2.png",

    hero: "Transformer-based NLP system for classifying malicious conversational intent with scalable inference workflows.",

    overview:
      "A natural language processing project focused on detecting harmful or malicious intent using transformer architectures. The system fine-tunes DistilBERT on dialogue datasets while optimizing inference latency and scalability.",

    methodology: [
      "Preprocessed dialogue datasets using tokenization pipelines.",
      "Fine-tuned DistilBERT for intent classification.",
      "Optimized inference workflows using PyTorch.",
      "Implemented scalable batching strategies.",
      "Evaluated performance across conversational scenarios.",
    ],

    results: [
      "Improved classification consistency across dialogue contexts.",
      "Reduced inference latency using lightweight transformer architecture.",
      "Enabled scalable deployment-ready NLP pipelines.",
    ],

    metrics: [
      {
        label: "Model",
        value: "DistilBERT",
      },

      {
        label: "Framework",
        value: "PyTorch",
      },

      {
        label: "Focus",
        value: "NLP",
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
