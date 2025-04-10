//STYLE
import "../info.scss";

export default function AccessibilityPage() {
  return (
    <div className="info-page">
      <p className="article-title">INFO</p>
      <p className="article-subtitle">ACCESSIBILITY</p>
      <div className="article-contents">
        <p className="article-contents-paragraph">
          Mogutable cares about the accessibility of our website. <br />
          <br /> Have difficulty viewing or navigating the website? <br />
          <br />
          If there is any content, feature, or functionality that isn’t fully
          accessible for you, please email us at <u>info@mogutable.com</u> with
          the subject line “Accessibility.”
          <br />
          <br /> Please include a description of the specific feature you’d like
          to report and any suggestions you have for improvement in your
          message. Your feedback is important to us and we will take it into
          consideration in our efforts to provide an inclusive experience for
          all of our customers.
        </p>
      </div>
    </div>
  );
}
