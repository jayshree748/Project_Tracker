import { Link } from "react-router-dom";
import "../styles/Pages.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>Welcome to Project Tracker</h1>
        <p>Manage your projects efficiently and effectively</p>
        <Link to="/signup" className="cta-button">
          Get Started
        </Link>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Projects</h3>
            <p>Easily track and manage all your projects in one place. View project status, due dates, and descriptions all at a glance.</p>
            <ul className="feature-list">
              <li>✓ Organized project list</li>
              <li>✓ Real-time status updates</li>
              <li>✓ Due date management</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Create & Edit Tasks</h3>
            <p>Create and organize projects with detailed descriptions. Edit and update projects anytime with full control over project details.</p>
            <ul className="feature-list">
              <li>✓ Create new projects</li>
              <li>✓ Edit existing projects</li>
              <li>✓ Detailed descriptions</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Secure & Private</h3>
            <p>Your projects are secure and private. Only you have access to your project data with JWT-based authentication.</p>
            <ul className="feature-list">
              <li>✓ Secure login</li>
              <li>✓ Private projects</li>
              <li>✓ Data protection</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Monitor Progress</h3>
            <p>Keep track of progress with project status management. Mark projects as pending, in-progress, or completed.</p>
            <ul className="feature-list">
              <li>✓ Status tracking</li>
              <li>✓ Progress visibility</li>
              <li>✓ Completion marking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-number">1</span>
            <h4>Simple Interface</h4>
            <p>User-friendly design that's easy to navigate and use</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-number">2</span>
            <h4>Fast Performance</h4>
            <p>Quick load times and responsive interactions</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-number">3</span>
            <h4>Secure Authentication</h4>
            <p>JWT-based security with encrypted passwords</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-number">4</span>
            <h4>Full Control</h4>
            <p>Create, read, update, and delete your projects</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Join now and start managing your projects effectively</p>
        <Link to="/signup" className="cta-button-large">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
