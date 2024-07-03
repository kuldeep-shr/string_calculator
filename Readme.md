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

<br />

## 📁 Project Files

`src/stringCalculator.ts`

This file contains the implementation of the string calculator.

`tests/stringCalculator.test.ts`

This file contains the test cases for the string calculator.

### 🧪 Example Test Cases:

<li> Returns 0 for an empty string
<li> Returns the number itself for a single number string
<li> Returns the sum of two numbers
<li> Returns the sum of multiple numbers
<li> Handles new lines as delimiters
<li> Handles custom delimiters
