export default function Projects() {
  return (
    <section className="projects-section fade-in">
      <h2>Projects</h2>

      {/* 1. Secure & Scalable Banking Ecosystem */}
      <div className="project">
        <h3>
          1. Project Title: <mark>Secure & Scalable Banking Ecosystem</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>Java, Spring Boot, MySQL</mark>
        </p>
        <ul>
          <li>Developed a secure banking backend with account management, fund transfers and transaction history modules.</li>
          <li>Implemented RESTful APIs, JWT authentication and role-based access control using Spring Security.</li>
          <li>Integrated MySQL through Spring Data JPA for database operations and transaction management, along with input validation and exception handling.</li>
        </ul>
        <div className="project-image">
          <img src="./images/bankapitest.jpg" alt="Bank Account Rest API" />
        </div>
      </div>

      {/* 2. E-Commerce Food Order Microservices API */}
      <div className="project">
        <h3>
          2. Project Title: <mark>E-Commerce Food Order Microservices API</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>Java, Spring Boot, Spring Cloud, MySQL</mark>
        </p>
        <ul>
          <li>Built a food ordering application using microservices architecture with Spring Boot and Spring Cloud.</li>
          <li>Implemented Eureka Service Discovery and API Gateway for service registration and request routing.</li>
          <li>Developed REST APIs, integrated MySQL using Spring Data JPA, and added request validation with centralized exception handling.</li>
        </ul>
        <div className="project-image">
          <img src="./images/imageEureka.jpg" alt="Ecommerce Food APP" />
        </div>
        <div className="project-image">
          <img src="./images/imagepjt.jpg" alt="Ecommerce Food API Test" />
        </div>
      </div>

      {/* 3. Enterprise Knowledge RAG Assistant */}
      <div className="project">
        <h3>
          3. Project Title: <mark>Enterprise Knowledge RAG Assistant</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>React.js, Spring Boot, Python, LangChain, ChromaDB, MySQL</mark>
        </p>
        <ul>
          <li>Developed an AI-based document question-answering application using Retrieval-Augmented Generation (RAG).</li>
          <li>Created a Python FastAPI service with LangChain and ChromaDB for document processing and semantic search.</li>
          <li>Integrated the AI service with Spring Boot APIs and React.js for user interaction, chat history persistence, and document retrieval workflows.</li>
        </ul>
      </div>

      {/* 4. Secure Authentication System */}
      <div className="project">
        <h3>
          4. Project Title: <mark>Secure Authentication System</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>Node.js, Express, React, MySQL</mark>
        </p>
        <ul>
          <li>Built a secure registration and login system using JWT for session management and Bcrypt for password hashing.</li>
          <li>Implemented protected routes on the frontend and integrated MySQL for robust user data storage and schema validation.</li>
        </ul>
      </div>

      {/* 5. Task Tracker App */}
      <div className="project">
        <h3>
          5. Project Title: <mark>Task Tracker App</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>ReactJS</mark>
        </p>
        <div className="project-badge">
          <a
            href="https://github.com/Gururaj254/Task_Tracker_App/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-btn"
          >
            🔗 View Live Application
          </a>
        </div>
        <ul>
          <li>
            <strong>Task Tracker App</strong> is a React-based task management platform for efficient daily task tracking.
          </li>
          <li>Practical exposure to React fundamentals: component lifecycle and state management.</li>
          <li>Showcases clean UI, strong modularity, and optimized performance.</li>
        </ul>
        <div className="project-image">
          <img src="./images/image3.jpg" alt="Task Tracker App" />
        </div>
      </div>
    </section>
  );
}