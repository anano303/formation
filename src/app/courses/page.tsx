import Image from "next/image";
import Link from "next/link";
import "./courses.css";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "ემოციების ინტელექტის განვითარება",
      description:
        "შეისწავლე როგორ გაიაზროო და მართო შენი ემოციები, გაიგე სხვების ემოციების მდგომარეობა და განავითარე ემოციების ინტელექტი ყველა სფეროში.",
      image: "/2.jpg",
      price: 150,
      duration: "8 კვირა",
      level: "დამწყები-შუალედური",
      rating: 4.9,
      students: 320,
      badge: "პოპულარული",
      features: [
        "ემოციების ცნობა და მართვა",
        "ემპათიის განვითარება",
        "სოციალური უნარების გაუმჯობესება",
        "სტრესის ეფექტური მართვა",
        "ინტერპერსონალური ურთიერთობები",
      ],
    },
    {
      id: 2,
      title: "სტრესის მართვისა და რელაქსაციის ტექნიკები",
      description:
        "ისწავლე ეფექტური მეთოდები სტრესთან გასამკლავებლად, რელაქსაციის ტექნიკები და ისე წყობა ცხოვრებისა, რომ ნაკლები სტრესი იყოს.",
      image: "/3.jpg",
      price: 120,
      duration: "6 კვირა",
      level: "ყველა დონე",
      rating: 4.8,
      students: 285,
      badge: "ახალი",
      features: [
        "სტრესის წყაროების იდენტიფიკაცია",
        "სუნთქვის ტექნიკები",
        "მედიტაცია და მაინდფულნესი",
        "ფიზიკური რელაქსაციის მეთოდები",
        "დროის მართვა და პრიორიტეტები",
      ],
    },
    {
      id: 3,
      title: "ეფექტური კომუნიკაციის უნარები",
      description:
        "გაუმჯობესე შენი კომუნიკაციის უნარები, ისწავლე აქტიური მოსმენა, ეფექტური საუბარი და კონფლიქტების მოგვარება.",
      image: "/4.jpg",
      price: 100,
      duration: "5 კვირა",
      level: "დამწყები",
      rating: 4.7,
      students: 195,
      badge: null,
      features: [
        "აქტიური მოსმენის ტექნიკები",
        "არავერბალური კომუნიკაცია",
        "კონფლიქტების მოგვარება",
        "გუნდური მუშაობა",
        "საჯარო გამოსვლა",
      ],
    },
    {
      id: 4,
      title: "შინაგანი მოტივაციისა და მიზნების მიღწევა",
      description:
        "აღმოაჩინე შენი შინაგანი მოტივაცია, დაისახე რეალური მიზნები და ისწავლე მათი მიღწევის ეფექტური გზები.",
      image: "/5.jpg",
      price: 130,
      duration: "7 კვირა",
      level: "შუალედური",
      rating: 4.6,
      students: 165,
      badge: null,
      features: [
        "მიზნების დასახვის მეთოდოლოგია",
        "მოტივაციის წყაროების აღმოჩენა",
        "ხელისშემშლელი ფაქტორების გადალახვა",
        "თვითდისციპლინა და ჩვევები",
        "პროგრესის თვალყურის დევნება",
      ],
    },
    {
      id: 5,
      title: "ავტორიტეტი და ლიდერობის უნარები",
      description:
        "განავითარე ლიდერობის უნარები, ისწავლე გუნდის მართვა, გადაწყვეტილებების მიღება და სხვების ინსპირირება.",
      image: "/6.jpg",
      price: 180,
      duration: "10 კვირა",
      level: "შუალედური-მაღალი",
      rating: 4.8,
      students: 125,
      badge: "პრემიუმი",
      features: [
        "ლიდერობის სტილები",
        "გუნდის მოტივაცია",
        "გადაწყვეტილებების მიღება",
        "კონფლიქტების მედიაცია",
        "ვიზიონერობა და სტრატეგია",
      ],
    },
    {
      id: 6,
      title: "ანგურესობის მართვა და აგრესიის კონტროლი",
      description:
        "ისწავლე ანგურესობის ჯანსაღი გამოხატვა, აგრესიის კონტროლი და კონსტრუქციული გზებით ენერგიის გადამისამართება.",
      image: "/7.jpg",
      price: 110,
      duration: "6 კვირა",
      level: "ყველა დონე",
      rating: 4.5,
      students: 98,
      badge: null,
      features: [
        "ანგურესობის გამომწვევი მიზეზები",
        "ემოციური რეგულაცია",
        "ჯანსაღი გამოხატვის ფორმები",
        "პრევენციული სტრატეგიები",
        "შეგუებისა და თვითკონტროლის ტექნიკები",
      ],
    },
  ];

  return (
    <div className="courses-page">
      <header className="courses-header">
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

      <section className="courses-hero">
        <div className="container">
          <h1>ჩვენი კურსები</h1>
          <p>
            აირჩიე შენთვის სასურველი კურსი და დაიწყე ემოციონალური განვითარების
            გზა
          </p>
          <div className="hero-stats">
            <div>
              <span>15+</span> კურსი
            </div>
            <div>
              <span>500+</span> სტუდენტი
            </div>
            <div>
              <span>98%</span> კმაყოფილება
            </div>
          </div>
        </div>
      </section>

      <section className="courses-grid-section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card-detailed">
                <div className="course-image-container">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={250}
                    className="course-image"
                  />
                  {course.badge && (
                    <div
                      className={`course-badge ${
                        course.badge === "პოპულარული"
                          ? "popular"
                          : course.badge === "ახალი"
                          ? "new"
                          : "premium"
                      }`}
                    >
                      {course.badge}
                    </div>
                  )}
                </div>

                <div className="course-content-detailed">
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>

                  <div className="course-info">
                    <div className="info-item">
                      <span className="icon">⏱️</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="info-item">
                      <span className="icon">📊</span>
                      <span>{course.level}</span>
                    </div>
                    <div className="info-item">
                      <span className="icon">👥</span>
                      <span>{course.students} სტუდენტი</span>
                    </div>
                  </div>

                  <div className="course-features">
                    <h4>რას შეისწავლი:</h4>
                    <ul>
                      {course.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="course-bottom">
                    <div className="course-rating">
                      <span className="stars">★★★★★</span>
                      <span>
                        {course.rating} ({course.students} შეფასება)
                      </span>
                    </div>
                    <div className="course-price">₾{course.price}</div>
                  </div>

                  <div className="course-actions">
                    <button className="btn-enroll">კურსზე ჩაწერა</button>
                    <button className="btn-preview">უფასო გადახედვა</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>არ იპოვე შენთვის შესაფერისი კურსი?</h2>
          <p>დაგვიკავშირდი და ჩვენ შემოგთავაზებთ ინდივიდუალურ პროგრამას</p>
          <div className="cta-buttons">
            <button className="btn-contact">კონსულტაცია</button>
            <Link href="/about" className="btn-learn-more">
              მეტი ინფორმაცია
            </Link>
          </div>
        </div>
      </section>

      <footer className="courses-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <Image src="/logo.png" alt="ფორმაცია" width={40} height={40} />
              <div>
                <h3>ფორმაცია</h3>
                <p>ემოციების ინტელექტის განვითარება</p>
              </div>
            </div>
            <div className="footer-links">
              <Link href="/">მთავარი</Link>
              <Link href="/about">ჩვენ შესახებ</Link>
              <Link href="/contact">კონტაქტი</Link>
            </div>
          </div>
          <p>&copy; 2025 ფორმაცია - ემოციების ჰაბი. ყველა უფლება დაცულია.</p>
        </div>
      </footer>
    </div>
  );
}
