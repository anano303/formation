import Link from "next/link";
import "./MessengerChat.css";

export default function MessengerChat() {
  return (
    <Link
      href="https://m.me/Formationemotionalhub"
      target="_blank"
      rel="noopener noreferrer"
      className="messenger-chat-button"
      title="დაგვიკავშირდით Facebook Messenger-ზე"
    >
      <div className="messenger-content">
        <div className="messenger-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.36 2 2 6.13 2 11.7c0 3.61 1.83 6.83 4.69 8.93v3.87c0 .28.22.5.5.5.13 0 .26-.05.35-.15L11.1 20.5c.29.04.59.06.9.06 5.64 0 10.2-4.13 10.2-9.86C22.2 6.13 17.64 2 12 2z" />
          </svg>
        </div>
        <span className="messenger-text">ჩათი</span>
      </div>
    </Link>
  );
}
