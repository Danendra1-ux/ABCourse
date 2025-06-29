"use client"
import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa"
import "./css/Overview.css"

// Removed lucide-react imports to fix rendering issues

export default function App() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="abcourse-app">
      {/* Hero Section with Inverted Border Radius */}
      <section className="abcourse-hero-section">
        <div className="abcourse-hero-container">
          <div className="abcourse-hero-wrapper">
            <div className="abcourse-logo-section">
              <img src={logo2 || "/placeholder.svg"} alt="ABCourse Logo" className="abcourse-logo" />
            </div>
            <div className="abcourse-hero-background">
              {/* Header */}
              <header className="abcourse-header">
                <nav className="abcourse-nav">
                  <div className="abcourse-logo-section">
                    <img src={logo2 || "/placeholder.svg"} alt="ABCourse Logo" className="abcourse-logo1" />
                  </div>

                  <div className="abcourse-nav-links">
                    <a href="#" className="abcourse-nav-link">
                      Home
                    </a>
                    <a href="#" className="abcourse-nav-link">
                      Category
                    </a>
                    <a href="#" className="abcourse-nav-link">
                      Chatbot
                    </a>
                    <a href="#" className="abcourse-nav-link">
                      About Us
                    </a>
                  </div>

                  <div className="abcourse-auth-buttons">
                    <Link to="/login">
                      <button className="abcourse-login-btn">LOG IN</button>
                    </Link>
                    <Link to="/signup">
                      <button className="abcourse-signup-btn">SIGN UP</button>
                    </Link>
                  </div>
                </nav>
              </header>

              {/* Decorative curved lines */}
              <div className="abcourse-decorative-lines">
                <svg className="abcourse-lines-svg" viewBox="0 0 1200 600" fill="none">
                  <path d="M0 300C300 200 600 400 900 250C1050 150 1150 200 1200 180" stroke="white" strokeWidth="2" />
                  <path
                    d="M0 350C250 250 550 450 850 300C1000 200 1100 250 1200 230"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path d="M0 400C200 300 500 500 800 350C950 250 1050 300 1200 280" stroke="white" strokeWidth="1" />
                </svg>
              </div>

              <div className="abcourse-hero-content">
                <div className="abcourse-hero-grid">
                  {/* Left Content */}
                  <div className="abcourse-hero-text">
                    <div className="abcourse-hero-badge">
                      <span className="abcourse-badge-text">Never stop learning</span>
                    </div>

                    <h1 className="abcourse-hero-title">Grow up your skills with online courses by ABCourse</h1>

                    <div className="abcourse-hero-actions">
                      <button className="abcourse-cta-button">GET STARTED</button>

                      {/* <div className="abcourse-reviews-section">
                        <div className="abcourse-user-avatars">
                          <div className="abcourse-avatar abcourse-avatar-1"></div>
                          <div className="abcourse-avatar abcourse-avatar-2"></div>
                          <div className="abcourse-avatar abcourse-avatar-3"></div>
                        </div>
                        <div className="abcourse-reviews-info">
                          <div className="abcourse-stars">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="abcourse-star">
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="abcourse-reviews-text">(30k+ Reviews)</p>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* Right Content - 3D Elements */}
                  <div className="abcourse-hero-visual">
                    {/* Globe */}
                    <div className="abcourse-globe-container">
                      <div className="abcourse-globe-outer"></div>
                      <div className="abcourse-globe-inner"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="abcourse-floating-element abcourse-floating-text">
                      <span className="abcourse-floating-content">文</span>
                    </div>

                    <div className="abcourse-floating-element abcourse-floating-letter">
                      <span className="abcourse-floating-content-green">A</span>
                    </div>

                    <div className="abcourse-floating-element abcourse-floating-bar"></div>

                    {/* Headphones Card */}
                    <div className="abcourse-headphones-card">
                      <div className="abcourse-headphones-icon"></div>
                      <div className="abcourse-headphones-wave"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card with Arrow */}
            <div className="abcourse-stats-card">
              <div className="abcourse-stats-content">
                <div className="abcourse-stats-info">
                  <span className="abcourse-stats-icon">📅</span>
                  <div>
                    <p className="abcourse-stats-number">250k</p>
                    <p className="abcourse-stats-label">Assisted Student</p>
                  </div>
                </div>
                <span className="abcourse-stats-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="abcourse-features-section">
        <div className="abcourse-features-container">
          <h2 className="abcourse-features-title">Our Features</h2>
          <div className="abcourse-features-underline"></div>
          <p className="abcourse-features-description">
            ABCourse is one powerful online software suite that combines all the tools needed to run a successful school
            or office.
          </p>

          <div className="abcourse-features-grid">
            {/* AI Chatbot */}
            <div className="abcourse-feature-card">
              <div className="abcourse-feature-icon-wrapper">
                <span className="abcourse-feature-icon">💬</span>
              </div>
              <h3 className="abcourse-feature-title">AI Chatbot</h3>
              <p className="abcourse-feature-description">One powerful online software suite that combines</p>
              <button className="abcourse-feature-link">more</button>
            </div>

            {/* Quiz */}
            <div className="abcourse-feature-card">
              <div className="abcourse-feature-icon-wrapper">
                <span className="abcourse-feature-icon">❓</span>
              </div>
              <h3 className="abcourse-feature-title">Quiz</h3>
              <p className="abcourse-feature-description">One powerful online software suite that combines</p>
              <button className="abcourse-feature-link">more</button>
            </div>

            {/* Grammar Checker */}
            <div className="abcourse-feature-card">
              <div className="abcourse-feature-icon-wrapper">
                <span className="abcourse-feature-icon">✓</span>
              </div>
              <h3 className="abcourse-feature-title">Grammar Checker</h3>
              <p className="abcourse-feature-description">One powerful online software suite that combines</p>
              <button className="abcourse-feature-button">Explore features</button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Category Section */}
      <section className="abcourse-courses-section">
        <div className="abcourse-courses-container">
          <div className="abcourse-courses-header">
            <h2 className="abcourse-courses-title">Courses Category</h2>
            <div className="abcourse-courses-underline"></div>

            {/* Filter Tabs */}
            <div className="abcourse-filter-tabs">
              <button
                className={`abcourse-filter-tab abcourse-filter-tab-active ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All Programme
              </button>
              {/* <button className="abcourse-filter-tab abcourse-filter-tab-inactive">Learn Grammar</button>
              <button className="abcourse-filter-tab abcourse-filter-tab-inactive">Listening</button> */}
            </div>
          </div>

          {/* Course Cards Grid */}
          <div className="abcourse-courses-grid">
            {/* English Grammar Card */}
            <div className="abcourse-course-card">
              <div className="abcourse-course-header abcourse-course-header-teal">
                <div className="abcourse-course-chart-left">
                  <div className="abcourse-chart-bar abcourse-chart-bar-1"></div>
                  <div className="abcourse-chart-bar abcourse-chart-bar-2"></div>
                </div>
                <div className="abcourse-course-chart-right">
                  <div className="abcourse-chart-line abcourse-chart-line-1"></div>
                  <div className="abcourse-chart-line abcourse-chart-line-2"></div>
                  <div className="abcourse-chart-line abcourse-chart-line-3"></div>
                  <div className="abcourse-chart-line abcourse-chart-line-4"></div>
                </div>
              </div>
              <div className="abcourse-course-content">
                <div className="abcourse-course-meta">
                  <span className="abcourse-course-author">ABCourse</span>
                  <span className="abcourse-course-students">• 40 students</span>
                </div>
                <p className="abcourse-course-date">28 July 2022</p>
                <h3 className="abcourse-course-name">English Grammar</h3>
                <p className="abcourse-course-description">
                  Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform
                </p>
                <div className="abcourse-course-footer">
                  <span className="abcourse-course-materials">📄 20 Materials Available</span>
                  <button className="abcourse-course-button">Try Now</button>
                </div>
              </div>
            </div>

            {/* Quiz Grammar Card */}
            <div className="abcourse-course-card">
              <div className="abcourse-course-header abcourse-course-header-orange">
                <div className="abcourse-course-element abcourse-course-element-circle"></div>
                <div className="abcourse-course-element abcourse-course-element-square"></div>
                <div className="abcourse-course-element abcourse-course-element-small"></div>
              </div>
              <div className="abcourse-course-content">
                <div className="abcourse-course-meta">
                  <span className="abcourse-course-author">ABCourse</span>
                  <span className="abcourse-course-students">• 11 students</span>
                </div>
                <p className="abcourse-course-date">28 July 2022</p>
                <h3 className="abcourse-course-name">Quiz Grammar</h3>
                <p className="abcourse-course-description">
                  Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform
                </p>
                <div className="abcourse-course-footer">
                  <span className="abcourse-course-materials">📄 20 Quiz Available</span>
                  <button className="abcourse-course-button">Try Now</button>
                </div>
              </div>
            </div>

            {/* Grammar Checker Card */}
            <div className="abcourse-course-card">
              <div className="abcourse-course-header abcourse-course-header-blue">
                <div className="abcourse-course-emoji">
                  <span className="abcourse-emoji">😊</span>
                </div>
              </div>
              <div className="abcourse-course-content">
                <div className="abcourse-course-meta">
                  <span className="abcourse-course-author">ABCourse</span>
                  <span className="abcourse-course-students">• 234 students</span>
                </div>
                <p className="abcourse-course-date">28 July 2022</p>
                <h3 className="abcourse-course-name">Grammar Checker</h3>
                <p className="abcourse-course-description">
                  Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform
                </p>
                <div className="abcourse-course-footer">
                  <span className="abcourse-course-materials">📄 Check Your Skill</span>
                  <button className="abcourse-course-button">Try Now</button>
                </div>
              </div>
            </div>

            {/* Chatbot Card */}
            <div className="abcourse-course-card">
              <div className="abcourse-course-header abcourse-course-header-teal">
                <div className="abcourse-course-python">
                  <span className="abcourse-python-icon">🤖</span>
                </div>
              </div>
              <div className="abcourse-course-content">
                <div className="abcourse-course-meta">
                  <span className="abcourse-course-author">ABCourse</span>
                  <span className="abcourse-course-students">• 342 students</span>
                </div>
                <p className="abcourse-course-date">28 July 2022</p>
                <h3 className="abcourse-course-name">Chatbot</h3>
                <p className="abcourse-course-description">
                  AI-powered learning assistant to help you with grammar and language learning
                </p>
                <div className="abcourse-course-footer">
                  <span className="abcourse-course-materials">📄 Ask Anything</span>
                  <button className="abcourse-course-button">Try Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Our Chatbot Section */}
      <section className="abcourse-chatbot-section">
        <div className="abcourse-chatbot-container">
          <h2 className="abcourse-chatbot-title">Try Our Chatbot</h2>
          <div className="abcourse-chatbot-underline"></div>

          {/* Simple Rounded Container */}
          <div className="abcourse-chatbot-card">
            {/* Sparkle Icon */}
            <div className="abcourse-chatbot-sparkle">
              <div className="abcourse-sparkle-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L13.4328 8.56718L19 10L13.4328 11.4328L12 17L10.5672 11.4328L5 10L10.5672 8.56718L12 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            </div>

            <h3 className="abcourse-chatbot-subtitle">Ask our AI anything</h3>

            {/* Play Button */}
            <div className="abcourse-play-button-container">
              <div className="abcourse-play-button-wrapper">
                <div className="abcourse-play-glow abcourse-play-glow-1"></div>
                <div className="abcourse-play-glow abcourse-play-glow-2"></div>
                <button className="abcourse-play-button">
                  <div className="abcourse-play-triangle"></div>
                </button>
              </div>
            </div>

            {/* Suggestions */}
            <div className="abcourse-suggestions-section">
              <p className="abcourse-suggestions-title">Suggestions on what to ask Our AI</p>
              <div className="abcourse-suggestions-grid">
                <div className="abcourse-suggestion-card">What can I ask you to do?</div>
                <div className="abcourse-suggestion-card">Which one of my projects is performing the best?</div>
                <div className="abcourse-suggestion-card">What projects should I be concerned about right now?</div>
              </div>
            </div>

            {/* Input Field */}
            <div className="abcourse-input-container">
              <input type="text" placeholder="Ask me anything about your projects" className="abcourse-chatbot-input" />
              <button className="abcourse-input-button">
                <span style={{
                  display: 'inline-block',
                  fontSize: '16px',
                  width: '0rem',
                  height: '2.9rem',
                  color: '#333',
                  fontWeight: 'bold'
                }}>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="abcourse-benefits-section">
        <div className="abcourse-benefits-container">
          <div className="abcourse-benefits-header">
            <h2 className="abcourse-benefits-title">Benefits</h2>
            <p className="abcourse-benefits-description">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit
              dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="abcourse-benefits-grid">
            {/* Benefit 01 */}
            <div className="abcourse-benefit-card">
              <div className="abcourse-benefit-number">01</div>
              <h3 className="abcourse-benefit-title">Flexible Learning Schedule</h3>
              <p className="abcourse-benefit-description">
                Fit your coursework around your existing commitments and obligations.
              </p>
              <div className="abcourse-benefit-arrow">
                <div className="abcourse-arrow-circle">
                  {/* <span className="abcourse-arrow-icon">→</span> */}
                </div>
              </div>
            </div>

            {/* Benefit 02 */}
            <div className="abcourse-benefit-card">
              <div className="abcourse-benefit-number">02</div>
              <h3 className="abcourse-benefit-title">Expert Instruction</h3>
              <p className="abcourse-benefit-description">
                Learn from industry experts who have hands-on experience in design and development.
              </p>
              <div className="abcourse-benefit-arrow">
                <div className="abcourse-arrow-circle">
                  {/* <span className="abcourse-arrow-icon">→</span> */}
                </div>
              </div>
            </div>

            {/* Benefit 04 */}
            <div className="abcourse-benefit-card">
              <div className="abcourse-benefit-number">04</div>
              <h3 className="abcourse-benefit-title">Updated Curriculum</h3>
              <p className="abcourse-benefit-description">
                Access courses with up-to-date content reflecting the latest trends and industry practices.
              </p>
              <div className="abcourse-benefit-arrow">
                <div className="abcourse-arrow-circle">
                  {/* <span className="abcourse-arrow-icon">→</span> */}
                </div>
              </div>
            </div>

            {/* Benefit 05 */}
            <div className="abcourse-benefit-card">
              <div className="abcourse-benefit-number">05</div>
              <h3 className="abcourse-benefit-title">Practical Projects and Assignments</h3>
              <p className="abcourse-benefit-description">
                Develop a portfolio showcasing your skills and abilities to potential employers.
              </p>
              <div className="abcourse-benefit-arrow">
                <div className="abcourse-arrow-circle">
                  {/* <span className="abcourse-arrow-icon">→</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Illustration */}
          <div className="abcourse-illustration-section">
            <div className="abcourse-illustration-grid">
              <div className="abcourse-cta-container">
                <button className="abcourse-final-cta">GET STARTED</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="abcourse-footer">
        <div className="abcourse-footer-container">
          <div className="abcourse-footer-grid">
            {/* Logo and Contact */}
            <div className="abcourse-footer-column">
              <div className="abcourse-logo-container">
                <img src={logo || "/placeholder.svg"} alt="ABCourse Logo" className="abcourse-logo2" />
              </div>

              <div className="abcourse-contact-info">
                <div className="abcourse-contact-item">
                  <FaMapMarkerAlt className="abcourse-contact-icon" />
                  <p className="abcourse-contact-text">
                    Address:
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="abcourse-contact-item">
                  <FaPhoneAlt className="abcourse-contact-icon" />
                  <p className="abcourse-contact-text">Tel: +2292341037</p>
                </div>

                <div className="abcourse-contact-item">
                  <FaClock className="abcourse-contact-icon" />
                  <p className="abcourse-contact-text">Response hours: 8 to 20</p>
                </div>

                <div className="abcourse-contact-item">
                  <FaEnvelope className="abcourse-contact-icon" />
                  <p className="abcourse-contact-text">Email: info@abcourse.com</p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="abcourse-footer-column">
              <h3 className="abcourse-footer-heading">Categories</h3>
              <ul className="abcourse-footer-links">
                <li>
                  <a href="#" className="abcourse-footer-link">
                    Grammar Checker
                  </a>
                </li>
                <li>
                  <a href="#" className="abcourse-footer-link">
                    AI Chatbot
                  </a>
                </li>
                <li>
                  <a href="#" className="abcourse-footer-link">
                    Exams
                  </a>
                </li>
                <li>
                  <a href="#" className="abcourse-footer-link">
                    more
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="abcourse-footer-column">
              <h3 className="abcourse-footer-heading">Links</h3>
              <ul className="abcourse-footer-links">
                <li>
                  <a href="#" className="abcourse-footer-link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="abcourse-footer-link">
                    blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="abcourse-footer-column">
              <h3 className="abcourse-footer-heading">Stay up to date with the latest courses</h3>
              <div className="abcourse-newsletter">
                <input type="email" placeholder="Email" className="abcourse-newsletter-input" />
                <button className="abcourse-btn abcourse-btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
