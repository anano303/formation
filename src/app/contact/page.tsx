import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="nav-content">
          <Link href="/" className="back-link">
            ← მთავარ გვერდზე დაბრუნება
          </Link>
          <div className="logo-section">
            <Image src="/logo.png" alt="ფორმაცია Logo" width={40} height={40} />
            <div>
              <h1>ფორმაცია</h1>
              <p>ემოციების ჰაბი</p>
            </div>
          </div>
        </div>
      </header>

      <section className="contact-hero">
        <div className="container">
          <h1>დაგვიკავშირდით</h1>
          <p>
            ჩვენ აქ ვართ, რომ დაგეხმაროთ შექმნათ უკეთესი ვერსია საკუთარი თავისა
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <div className="form-header">
                <h2>მოგვწერეთ წერილი</h2>
                <p>შეავსეთ ფორმა და ჩვენ დაგიკავშირდებით 24 საათში</p>
              </div>

              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">სახელი</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">გვარი</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">ელ-ფოსტა</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">ტელეფონის ნომერი</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">რა გაინტერესებთ?</label>
                  <select id="interest" name="interest">
                    <option value="">აირჩიეთ კურსი</option>
                    <option value="emotional-intelligence">
                      ემოციების მართვა / ინტელექტის განვითარება
                    </option>
                    <option value="stress-management">სტრესის მართვა</option>
                    <option value="communication">კომუნიკაციის უნარები</option>
                    <option value="motivation">მოტივაცია და მიზნები</option>
                    <option value="leadership">ლიდერობა</option>
                    <option value="anger-management">ანგურესობის მართვა</option>
                    <option value="consultation">კონსულტაცია</option>
                    <option value="other">სხვა</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">თქვენი შეტყობინება</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="მოგვიწერეთ თქვენი კითხვები ან კომენტარები..."
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    ვეთანხმები{" "}
                    <Link href="/privacy">კონფიდენციალურობის პოლიტიკას</Link>
                  </label>
                </div>

                <button type="submit" className="submit-btn">
                  შეტყობინების გაგზავნა
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="contact-info">
                <h3>საკონტაქტო ინფორმაცია</h3>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h4>ელექტრონული ფოსტა</h4>
                    <p>info@formation.ge</p>
                    <p>support@formation.ge</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>ტელეფონი</h4>
                    <p>511 44 75 77</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>მისამართი</h4>
                    <p>19 Pavle Ingorokva St</p>
                    <p>თბილისი, საქართველო</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h4>სამუშაო საათები</h4>
                    <p>ორშაბათი - პარასკევი: 10:00 - 18:00</p>
                    <p>შაბათი: 10:00 - 15:00</p>
                    <p>კვირა: დასვენების დღე</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h4>გამოგვყევით სოციალურ ქსელებში</h4>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/Formationemotionalhub"
                    className="social-link facebook"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                  <a href="#" className="social-link instagram">
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                  <a href="#" className="social-link linkedin">
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="consultation-info">
                <div className="consultation-card">
                  <h4>🎯 უფასო კონსულტაცია</h4>
                  <p>
                    დაჯავშენით 30 წუთიანი უფასო კონსულტაცია ჩვენთან და
                    აღმოაჩინეთ თქვენთვის შესაფერისი გზა
                  </p>
                  <button className="consultation-btn">
                    კონსულტაციის დაჯავშვა
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>ხშირად დასმული კითხვები</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>რამდენი ხანი გრძელდება კურსები?</h4>
              <p>
                ჩვენი კურსების ხანგრძლივობა განსხვავებულია - 5-10 კვირამდე.
                ყოველი კურსი შედგება კვირეული სესიებისგან.
              </p>
            </div>
            <div className="faq-item">
              <h4>შემიძლია ონლაინ გავიარო კურსები?</h4>
              <p>
                კი, ჩვენ გვაქვს როგორც ონლაინ, ასევე ოფლაინ ფორმატები. შეგიძლიათ
                აირჩიოთ თქვენთვის მოსახერხებელი ვარიანტი.
              </p>
            </div>
            <div className="faq-item">
              <h4>რა ღირს კურსები?</h4>
              <p>
                კურსების ფასი 100-180 ლარამდეა. ასევე გვაქვს ღირებული მადლობა
                სცენარი და განრატები სტუდენტებისთვის.
              </p>
            </div>
            <div className="faq-item">
              <h4>მივიღებ სერტიფიკატს?</h4>
              <p>
                კი, კურსის წარმატებული დასრულების შემდეგ თქვენ მიიღებთ ოფიციალურ
                სერტიფიკატს.
              </p>
            </div>
            <div className="faq-item">
              <h4>შემიძლია კურსების გაცვლა?</h4>
              <p>
                თუ გარკვეული მიზეზის გამო ვერ ასწრებთ, შეგიძლიათ გადაიტანოთ
                მომდევნო ჯგუფში.
              </p>
            </div>
            <div className="faq-item">
              <h4>როგორ ხდება რეგისტრაცია?</h4>
              <p>
                რეგისტრაცია შეგიძლიათ გააკეთოთ ონლაინ ან დაგვიკავშირდეთ
                ტელეფონით. გადახდა შესაძლებელია კურსის დაწყებამდე.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
