import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import MessengerChat from "@/components/MessengerChat";
import "./about.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ჩვენ შესახებ - ფორმაცია | ემოციების ჰაბი",
  description:
    "ფორმაცია არის ემოციური განვითარების ცენტრი, რომელიც დაარსდა 2020 წელს. ჩვენი მისიაა ბავშვებსა და მოზარდებს მივცეთ ინსტრუმენტები ემოციების ჯანსაღად გამოსახატავად. 540+ წარმატებული სტუდენტი, 5 უნიკალური კურსი.",
  keywords: [
    "ფორმაცია",
    "ემოციების ჰაბი",
    "ემოციური განვითარება",
    "ბავშვების განათლება",
    "მოზარდების პროგრამები",
    "თბილისი",
    "2020",
  ],
  openGraph: {
    title: "ჩვენ შესახებ - ფორმაცია",
    description: "ემოციური განვითარების ცენტრი 540+ წარმატებული სტუდენტით",
    url: "https://formation.ge/about",
    siteName: "ფორმაცია",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ფორმაცია გუნდი",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="about-page">
      <header className="about-header">
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

      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>ჩვენ შესახებ</h1>
              <p>
                ფორმაცია - ემოციების ჰაბი არის წამყვანი პლატფორმა საქართველოში,
                რომელიც ფოკუსირებულია ემოციონალური ინტელექტის განვითარებასა და
                პირადი ზრდის ხელშეწყობაზე.
              </p>
            </div>
            <div className="hero-image">
              <Image src="/8.jpg" alt="ჩვენი გუნდი" width={500} height={400} />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>ჩვენი მისია</h3>
              <p>
                ჩვენი მისიაა ადამიანებს დავეხმაროთ განავითარონ ემოციონალური
                ინტელექტი, გაიუმჯობესონ ურთიერთობები და მიაღწიონ პირად და
                პროფესიულ წარმატებას.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>ჩვენი მიზანი</h3>
              <p>
                ჩვენი მიზანია შევქმნათ სამყარო, სადაც ყველა ადამიანი ფლობს
                ემოციების ინტელექტის უნარებს და ცხოვრობს ჰარმონიულ, ბედნიერ
                ცხოვრებას.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>ჩვენი ღირებულებები</h3>
              <p>
                ჩვენ ვაფასებთ ვინაობას, ტოლერანტობას, ურთიერთპატივისცემას,
                მუდმივ განვითარებას და ყველა ადამიანის უნიკალურობას.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>ჩვენი გუნდი</h2>
          <p className="team-intro">
            ჩვენი გუნდი შედგება გამოცდილი ფსიქოლოგებისა და ემოციონალური
            ინტელექტის სპეციალისტებისგან
          </p>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <Image
                  src="/5.jpg"
                  alt="ნინო მელაძე"
                  width={200}
                  height={200}
                />
              </div>
              <div className="member-info">
                <h4>ნინო მელაძე</h4>
                <p className="member-role">დამფუძნებელი და მენეჯერი</p>
                <p className="member-description">
                  15 წლიანი გამოცდილება ფსიქოლოგიის სფეროში. სპეციალიზაცია
                  ემოციების ინტელექტის განვითარებაში.
                </p>
                <div className="member-credentials">
                  <span>• მაგისტრი ფსიქოლოგიაში</span>
                  <span>• სერტიფიცირებული კოუჩი</span>
                  <span>• EQ ტესტირების ექსპერტი</span>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <Image
                  src="/6.jpg"
                  alt="დავით ჯაფარიძე"
                  width={200}
                  height={200}
                />
              </div>
              <div className="member-info">
                <h4>დავით ჯაფარიძე</h4>
                <p className="member-role">კლინიკური ფსიქოლოგი</p>
                <p className="member-description">
                  10 წლიანი გამოცდილება სტრესის მართვისა და ანგურესობის
                  კონტროლის სფეროში.
                </p>
                <div className="member-credentials">
                  <span>• დოქტორი ფსიქოლოგიაში</span>
                  <span>• CBT თერაპისტი</span>
                  <span>• მაინდფულნეს ინსტრუქტორი</span>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <Image src="/7.jpg" alt="ანა ბერიძე" width={200} height={200} />
              </div>
              <div className="member-info">
                <h4>ანა ბერიძე</h4>
                <p className="member-role">კომუნიკაციის ექსპერტი</p>
                <p className="member-description">
                  8 წლიანი გამოცდილება კორპორატიულ ტრენინგებსა და კომუნიკაციის
                  უნარების განვითარებაში.
                </p>
                <div className="member-credentials">
                  <span>• მაგისტრი კომუნიკაციებში</span>
                  <span>• ბიზნეს კოუჩი</span>
                  <span>• ლიდერშიპის ტრენერი</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>ჩვენი მიღწევები</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">კმაყოფილი კლიენტი</div>
              <div className="stat-description">
                ჩვენმა კურსებმა დაეხმარა 500+ ადამიანს
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">სპეციალიზებული კურსი</div>
              <div className="stat-description">
                მრავალფეროვანი თემატიკის კურსები
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">კმაყოფილების ხარისხი</div>
              <div className="stat-description">
                ჩვენი კლიენტების 98% კმაყოფილია შედეგით
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">წლიანი გამოცდილება</div>
              <div className="stat-description">
                აქტიურად ვმუშაობთ 2022 წლიდან
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <h2>ჩვენი მიდგომა</h2>
          <div className="approach-content">
            <div className="approach-text">
              <div className="approach-item">
                <h4>🎯 ინდივიდუალური მიდგომა</h4>
                <p>
                  ყოველი კლიენტისთვის ვქმნით პერსონალიზებულ გეგმას მისი
                  საჭიროებებისა და მიზნების მიხედვით.
                </p>
              </div>
              <div className="approach-item">
                <h4>🧠 მეცნიერული ბაზა</h4>
                <p>
                  ჩვენი ყველა მეთოდი დაფუძნებულია თანამედროვე ფსიქოლოგიურ
                  კვლევებსა და დადასტურებულ პრაქტიკებზე.
                </p>
              </div>
              <div className="approach-item">
                <h4>💬 პრაქტიკული გამოყენება</h4>
                <p>
                  ვფოკუსირდებით რეალურ სიტუაციებზე და პრაქტიკულ ვარჯიშებზე,
                  რომლებიც დაეხმარება ყოველდღიურ ცხოვრებაში.
                </p>
              </div>
              <div className="approach-item">
                <h4>🤝 მხარდაჭერა</h4>
                <p>
                  უზრუნველვყოფთ მუდმივ მხარდაჭერას კურსის განმავლობაში და მის
                  შემდეგაც.
                </p>
              </div>
            </div>
            <div className="approach-image">
              <Image
                src="/1.jpg"
                alt="ჩვენი მიდგომა"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>რას ამბობენ ჩვენი კლიენტები</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "ფორმაციის კურსებმა ჩემი ცხოვრება მთლიანად შეცვალა. ახლა ვიცი
                  როგორ ვმართო ჩემი ემოციები და ურთიერთობები უკეთესია."
                </p>
              </div>
              <div className="testimonial-author">
                <Image src="/5.jpg" alt="მარიამი" width={50} height={50} />
                <div>
                  <h5>მარიამ ქართველიშვილი</h5>
                  <span>ბიზნეს ანალიტიკოსი</span>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "სტრესის მართვის კურსმა დამეხმარა სამსახურში უკეთესად
                  მომუშავებინა. ძალიან კმაყოფილი ვარ შედეგით."
                </p>
              </div>
              <div className="testimonial-author">
                <Image src="/6.jpg" alt="გიორგი" width={50} height={50} />
                <div>
                  <h5>გიორგი მამულაშვილი</h5>
                  <span>პროექტ მენეჯერი</span>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "კომუნიკაციის კურსის შემდეგ ჩემი ურთიერთობები ოჯახში და
                  სამსახურში მნიშვნელოვნად გაუმჯობესდა."
                </p>
              </div>
              <div className="testimonial-author">
                <Image src="/7.jpg" alt="ნინო" width={50} height={50} />
                <div>
                  <h5>ნინო გელაშვილი</h5>
                  <span>ადვოკატი</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>მზად ხარ დაიწყო შენი განვითარების გზა?</h2>
          <p>
            დაგვიკავშირდი დღესვე და მიიღე უფასო კონსულტაცია ჩვენი ექსპერტებისგან
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              კონტაქტი
            </Link>
            <Link href="/courses" className="btn-secondary">
              კურსების ნახვა
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MessengerChat />
    </div>
  );
}
