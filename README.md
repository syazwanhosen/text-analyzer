# **Text Analyzer Tool**

A React-based web application that allows users to analyze text by
providing insights such as word count, character count, sentence count,
paragraph count, the most frequent word, and the longest word. The tool
also includes sentiment analysis using the OpenAI API and an option to
export results as a PDF.

## **Features**

- Analyze text for:

  - Word count

  - Character count (with and without spaces)

  - Sentence count

  - Paragraph count

  - Most frequent word

  - Longest word

- Sentiment analysis using the OpenAI API.

- Export analysis results to a PDF file.

- Responsive and user-friendly interface.

## **Setup Instructions**

### **Prerequisites**

1.  Ensure you have [[Node.js]{.underline}](https://nodejs.org/)

    > installed (version 16 or higher recommended).

2.  Install [[Docker]{.underline}](https://www.docker.com/) for
    > containerized deployment (optional).

### **1. Clone the Repository**

git clone \<repository-url\>

cd text-analyzer

### **2. Install Dependencies**

npm install

### **3. Set Up Environment Variables**

Create a .env file in the root directory and add the following
variables:

REACT_APP_API_URL=https://api.openai.com/v1/chat/completions

REACT_APP_API_KEY=your_openai_api_key

REACT_APP_MODEL=gpt-3.5-turbo

Replace your_openai_api_key with your OpenAI API key.

### **4. Run the Application**

Start the development server:

npm start

The application will be available at http://localhost:3000.

### **5. Build for Production**

To build the application for production:

npm run build

This will create a build folder with the production-ready files.

### **6. Deploy Using Docker**

1.  **Build the Docker Image**:\

    > \
    > docker build -t text-analyzer .

2.  **Run the Docker Container**:\

    > \
    > docker run -d -p 3000:80 \--name text-analyzer text-analyzer

3.  Access the application at http://localhost:3000.

## **Approach to the Problem**

### **1. User Input and Validation**

- A **TextInput** component captures the user\'s text input with

  > validation to ensure no empty input is analyzed.

- Error messages are displayed for invalid input using a reusable
  > **ErrorAlert** component.

### **2. Text Analysis**

- Analysis functions (e.g., getWordCount, getCharacterCount, etc.) are

  > implemented using **vanilla JavaScript** for simplicity and
  > performance.

- Punctuation is ignored to provide accurate word, sentence, and
  > character counts.

### **3. Sentiment Analysis**

- Integrated the OpenAI API (gpt-3.5-turbo) for sentiment analysis.

- The analysis result is fetched asynchronously with proper error
  > handling.

### **4. Exporting Results**

- Used the **jsPDF** library to generate and download a PDF report of
  > the analysis results, including sentiment analysis.

### **5. Responsive Design**

- Styled using **styled-components** for modular and reusable styling.

- Ensured the application is fully responsive for various devices.
