const questions = [
  {
    id: 1,
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
  },
  {
    id: 2,
    question: "Which of the following is a non-primitive data structure?",
    options: ["int", "float", "array", "queue"],
  },
  {
    id: 3,
    question:
      "Which sorting algorithm has the best average-case time complexity?",
    options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
  },
  {
    id: 4,
    question: "What does SQL stand for?",
    options: [
      "Sequential Query Language",
      "Structured Query Language",
      "Secure Query Language",
      "Simple Query Language",
    ],
  },
  {
    id: 5,
    question: "In OOP, what does inheritance represent?",
    options: [
      "A way to bundle data and methods",
      "Reusing properties and methods from another class",
      "Restricting access to certain members of a class",
      "Defining multiple behaviors in a class",
    ],
  },
  {
    id: 6,
    question: "What is the primary purpose of an operating system?",
    options: [
      "Manage hardware resources",
      "Provide a programming environment",
      "Execute applications",
      "All of the above",
    ],
  },
  {
    id: 7,
    question:
      "Which of the following protocols is used for secure communication over the Internet?",
    options: ["HTTP", "FTP", "SMTP", "HTTPS"],
  },
  {
    id: 8,
    question: "In a computer network, what does the term 'latency' refer to?",
    options: [
      "The amount of data that can be transmitted in a given time",
      "The delay before a transfer of data begins following an instruction",
      "The number of devices connected to a network",
      "The speed of the network connection",
    ],
  },
  {
    id: 9,
    question: "What is polymorphism in OOP?",
    options: [
      "Ability to create multiple instances of a class",
      "Ability to define methods in multiple ways",
      "Ability to restrict access to class members",
      "Ability to create classes from other classes",
    ],
  },
  {
    id: 10,
    question: "Which scheduling algorithm may cause starvation?",
    options: [
      "Round Robin",
      "First-Come, First-Served",
      "Shortest Job First",
      "Priority Scheduling",
    ],
  },
];

const answers = [2, 3, 0, 1, 1, 3, 3, 1, 1, 3]; // Update answers array to match the new questions
module.exports = { questions, answers };
