# 📏 String Calculator

A simple string calculator implemented in TypeScript using the Test-Driven Development (TDD) approach.

## 📦 Project Structure

```
└── 📁string_calculator
    └── .gitignore
    └── Readme.md
    └── jest.config.js
    └── package-lock.json
    └── package.json
    └── 📁src
        └── stringCalculator.ts
    └── 📁tests
        └── stringCalculator.test.ts
    └── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kuldeep-shr/string_calculator.git
   ```

2. Navigate to the project directory:

   ```
   cd string_calculator
   ```

3. Install dependencies:
   ```
   npm install
   ```

---

<br />

## 🛠️ Running the Tests

```
    npm test
```

## 📁 Project Structure

**`src/stringCalculator.ts`**  
Contains the implementation of the **string calculator** function.

**`tests/stringCalculator.test.ts`**  
Contains the **test cases** to verify the string calculator works correctly.

---

### 🧪 Example Test Cases

- Returns `0` for an empty string.
- Returns the number itself when the string contains a single number.
- Returns the sum of two numbers.
- Returns the sum of multiple numbers.
- Supports **newlines** as delimiters.
- Supports **custom delimiters** defined at the start of the string.
- Throws an error when **negative numbers** are present.
