import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <Image src="/logo.png" alt="ფორმაცია" width={150} height={150} />
            <div className="footer-brand">
              <h3>ფორმაცია</h3>
              <p>ემოციების ჰაბი</p>
            </div>
          </div>

          <div className="footer-description">
            <p>
              ჩვენ ვართ ემოციების ინტელექტის განვითარების წამყვანი პლატფორმა
              საქართველოში. ჩვენი მისიაა დავეხმაროთ ადამიანებს განავითარონ
              ემოციური ინტელექტი და გაიუმჯობესონ თავიანთი ცხოვრება.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>ნავიგაცია</h4>
              <Link href="/">მთავარი</Link>
              <Link href="/courses">კურსები</Link>
              <Link href="/about">ჩვენ შესახებ</Link>
              <Link href="/contact">კონტაქტი</Link>
            </div>

            <div className="footer-section">
              <h4>კონტაქტი</h4>
              <p>📧 info@formation.ge</p>
              <p>📞 511 44 75 77</p>
              <p>📍 19 Pavle Ingorokva St, თბილისი</p>
            </div>

            <div className="footer-section">
              <h4>სოციალური ქსელები</h4>
              <div className="social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-credits">
          <p>&copy; 2025 ფორმაცია - ემოციების ჰაბი. ყველა უფლება დაცულია.</p>
          <p>
            საიტი დამზადებულია{" "}
            <a
              href="https://bestsoft.ge"
              target="_blank"
              rel="noopener noreferrer"
              className="bestsoft-link"
            >
              BestSoft
            </a>{" "}
            მიერ
          </p>
        </div>
      </div>
    </footer>
  );
}
