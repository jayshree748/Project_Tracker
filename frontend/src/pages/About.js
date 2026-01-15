import "../styles/Pages.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1>About Us</h1>

        <div className="about-content">
          <section className="about-subsection">
            <h2>Our Mission</h2>
            <p>
              At Project Tracker, our mission is to empower teams and individuals
              to organize, collaborate, and deliver projects more efficiently.
              We believe that effective project management is key to success.
            </p>
          </section>

          <section className="about-subsection">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Simple and intuitive interface</li>
              <li>Real-time collaboration features</li>
              <li>Secure and reliable platform</li>
              <li>24/7 customer support</li>
              <li>Regular updates and improvements</li>
            </ul>
          </section>

          <section className="about-subsection">
            <h2>Our Team</h2>
            <p>
              We are a dedicated team of developers and designers committed to
              creating the best project management solution for our users. With
              years of experience in software development, we understand what
              teams need to succeed.
            </p>
          </section>

          <section className="about-subsection">
            <h2>Contact Information</h2>
            <p>
              Have questions? We'd love to hear from you. Reach out to us at
              <strong> support@projecttracker.com</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
