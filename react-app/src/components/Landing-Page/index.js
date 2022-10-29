import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPage-container">
      <div className="gray-container">
        <div className="orange-box">
          <div className="orange-box-content">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h2 className="orange-box-words">
              Find the best answer to your technical question, help others
              answer theirs
            </h2>
            <button className="orange-button">Join the community</button>
          </div>
        </div>
        <div className="blue-box">
          <div className="blue-box-content">
            <h2 className="blue-box-words">
              Want a secure, private space for your technical knowledge?
            </h2>
            <button>Discover Teams</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
