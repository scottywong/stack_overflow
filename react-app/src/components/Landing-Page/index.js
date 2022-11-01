import "./LandingPage.css";
import LoginFormModal from "../auth/LoginFormModal";
import LoginForm from "../auth/LoginForm";
import { Modal } from "../../context/Modal";
import React, { useState } from "react";

const LandingPage = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="landingPage-container">
      <div className="gray-container">
        <div className="orange-blue-container">
          <div className="orange-box">
            <div className="orange-box-content">
              <i className="fa-solid fa-magnifying-glass"></i>
              <h2 className="orange-box-words">
                Find the best answer to your technical question, help others
                answer theirs
              </h2>
              <button
                className="orange-button"
                onClick={() => setShowLoginModal(true)}
              >
                Join the community
              </button>
              {showLoginModal && (
                <Modal onClose={() => setShowLoginModal(false)}>
                  <LoginForm setShowLoginModal={setShowLoginModal} />
                </Modal>
              )}
            </div>
          </div>
          <div className="blue-box">
            <div className="blue-box-content">
              <i class="fa-solid fa-lock"></i>
              <h2 className="blue-box-words">
                Want a secure, private space for your technical knowledge?
              </h2>
              <button
                className="blue-button"
                onClick={() => setShowLoginModal(true)}
              >
                Discover Teams
              </button>
              {showLoginModal && (
                <Modal onClose={() => setShowLoginModal(false)}>
                  <LoginForm setShowLoginModal={setShowLoginModal} />
                </Modal>
              )}
            </div>
          </div>
        </div>
        <div className="every-dev-text-container">
          <h2 className="every-dev-text">
            Every developer has a tab open to Stack Overflow
          </h2>
        </div>
        <div className="stats-container">
          <ul className="stats-ul-container">
            <li className="stats-headings">
              100+ million{" "}
              <p className="p-text">
                monthly visitors to Stack Overflow and Stack Exchange
              </p>
            </li>
            <li className="stats-headings">
              45.1+ billion{" "}
              <p className="p-text">Times a developer got help since 2008</p>
            </li>
            <li className="stats-headings">
              191% ROI{" "}
              <p className="p-text">
                from companies using Stack Overflow for Teams
              </p>
            </li>
            <li className="stats-headings">
              5,000+{" "}
              <p className="p-text">
                Stack Overflow for Teams instances active every day
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
