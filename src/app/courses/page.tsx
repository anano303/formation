"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import "./courses.css";

export default function Courses() {
  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);

  const toggleCourseExpansion = (courseId: number) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  const courses = [
    {
      id: 1,
      title: "მითოდრამა",
      description:
        "მითოდრამა არის მოკლევადიანი (12 სესია) ჯგუფური ფსიქოთერაპიული მეთოდი, რომელიც აერთიანებს ფსიქოთერაპიულ და თეატრალურ ელემენტებს. მითოდრამა - თერაპიაა ზღაპრით. იგი ეხმარება ბავშვებს და მოზარდებს უკეთ გაეცნონ საკუთარ სუსტ და ძლიერ მხარეებს, დაძლიონ სიმორცხვე თუ კომუნიკაციის სირთულეები, გახდნენ მეტად თავდაჯერებულები.",
      image: "/2.jpg",
      price: "შეთანხმებით",
      duration: "3 თვე (12 შეხვედრა)",
      level: "8-15 წლის ბავშვები",
      rating: 4.9,
      students: 85,
      badge: "პოპულარული",
      category: "ბავშვებისთვის",
      instructor: "ქვეყნის წამყვანი მითოდრამის სპეციალისტები",
      methodology: "ჯგუფური მუშაობა, მითების გამოყენება, თეატრალური ელემენტები",
      testimonial:
        "ჩემმა შვილმა თავდაჯერებულობა შეიძინა და კომუნიკაცია გაუმჯობესდა - ნანა კ.",
      features: [
        "თავდაჯერებულობის ამაღლება",
        "კომუნიკაციის უნარების განვითარება",
        "სიმორცხვის დაძლევა",
        "აგრესიულობის შემცირება",
        "შფოთვის დონის დაბალება",
        "ფანტაზიის გააქტიურება",
        "ემოციური ქცევის რეგულირება",
        "ჯგუფური მხარდაჭერის მიღება",
      ],
    },
    {
      id: 2,
      title: "კალიგრაფია",
      description:
        "კალიგრაფია არ არის მხოლოდ ლამაზი წერა – ეს არის ბავშვის გონებრივი, ემოციური და მოტორული უნარების განვითარების ძლიერი ინსტრუმენტი. წერის პროცესში ბავშვი სწავლობს მოთმინებას, შრომისმოყვარეობას და დეტალებზე ფოკუსირებას. თითოეული მონაწილე სახლში წაიღებს საკუთარ შემოქმედებას – სამახსოვროდ.",
      image: "/3.jpg",
      price: 150,
      duration: "1 თვე (4 შეხვედრა)",
      level: "შეზღუდვა არ არის",
      rating: 4.8,
      students: 120,
      badge: "ახალი",
      category: "შემოქმედება",
      instructor: "ნინი იკაშვილი - კალიგრაფი და პიანისტი",
      methodology:
        "ინდივიდუალური მიდგომა, ხელოვნების ისტორია, პრაქტიკული მუშაობა",
      testimonial:
        "ვაჟმა ლამაზი ხელწერა შეისწავლა და მოთმინებაც განუვითარდა - ნათია ღ.",
      features: [
        "მოთმინების განვითარება",
        "მოტორული უნარების გაუმჯობესება",
        "კონცენტრაციის ამაღლება",
        "ლამაზი ხელწერის ფორმირება",
        "შემოქმედებითი აზროვნების განვითარება",
        "დეტალებზე ფოკუსირების უნარი",
        "პირადი ნამუშევრის შექმნა",
        "ხელოვნების მიმართ ინტერესის ჩამოყალიბება",
      ],
    },
    {
      id: 3,
      title: "მუსიკა და კალიგრაფია",
      description:
        "ორი ხელოვნების კურსი! მუსიკისა და კალიგრაფიის ტანდემი! გეპატიჟებით იმოგზაუროთ იმ უნიკალურ შემოქმედებით პროცესში, რომელსაც მუსიკა და კალიგრაფია გთავაზობთ. ჩვენ ერთად სანოტო ხაზებზე კალმითა და მელნით გავაცოცხლებთ ნოტებს, რომელსაც შეეზავება ქართული ანბანი.",
      image: "/4.jpg",
      price: 190,
      duration: "3 შეხვედრა",
      level: "შეზღუდვა არ არის",
      rating: 4.7,
      students: 65,
      badge: "ექსპრეს კურსი",
      category: "შემოქმედება",
      instructor: "ნინი იკაშვილი - კალიგრაფი და პიანისტი",
      methodology: "მასტერკლასები, ინდივიდუალური მუშაობა, კრეატიული ვარჯიშები",
      testimonial:
        "განუმეორებელი გამოცდილება იყო! მუსიკა და კალიგრაფია ერთად - მაგიურია - გიორგი პ.",
      features: [
        "მუსიკისა და კალიგრაფიის ერთგულება",
        "უნიკალური შემოქმედებითი პროცესი",
        "სანოტო ხაზებზე კალიგრაფიული მუშაობა",
        "საყვარელი მელოდიების კალიგრაფიული ჩანაწერი",
        "ორი ხელოვნების ურთიერთშერწყმა",
        "კრეატიული მიდგომა",
        "ინსპირაციის წყაროს პოვნა",
        "ხელოვნების მრავალფეროვნების შეგრძნება",
      ],
    },
    {
      id: 4,
      title: "Self მარკეტინგი",
      description:
        "Self მარკეტინგი არის ინტერაქციული და პრაქტიკული კურსი 10–17 წლის მოზარდებისთვის, რომლის მიზანია დაეხმაროს მათ საკუთარი თავის სწორად პოზიციონირებაში, საკუთარი უნარებისა და ღირებულებების გაცნობაში და წარმატებული კომუნიკაციის ფორმირების პროცესში.",
      image: "/5.jpg",
      price: 280,
      duration: "3 თვე (12 შეხვედრა)",
      level: "10-17 წლის მოზარდები",
      rating: 4.6,
      students: 95,
      badge: "ახალი",
      category: "მოზარდებისთვის",
      instructor: "მარკეტინგის პროფესიონალები და კოუჩები",
      methodology: "ინტერაქციული ვარჯიშები, პრეზენტაციები, პროექტული მუშაობა",
      testimonial:
        "ვაჟმა თავისი უნარები აღმოაჩინა და თავდაჯერებულად იცის საკუთარი თავის წარდგენა - ლალი მ.",
      features: [
        "საკუთარი უნიკალურობის გაცნობიერება",
        "კრიტიკული ფიქრის განვითარება",
        "კომუნიკაციის უნარების გაუმჯობესება",
        "პრეზენტაციის ტექნიკები",
        "საკუთარი თავის ბრენდად ქცევა",
        "მოტივაციისა და პასუხისმგებლობის გაძლიერება",
        "თვითშეფასების ამაღლება",
        "მარკეტინგის პროფესიასთან გაცნობა",
      ],
    },
    {
      id: 5,
      title: "ცეცხლთან თამაში",
      description:
        "ცეცხლთან თამაში – ითამაშე ფსიქოლოგიურ ტემპერატურაზე თამაში, სადაც სახალისო ფორმით გაიცნობთ საკუთარი თავის ჯერ შეუცნობელ მხარეებს, აღმოაჩენთ დასწავლილი ქცევის პატერნებს და განავითარებთ თვითანალიზის უნარს. ეს არის ჯგუფური თამაში, სადაც სხვა ადამიანებთან ურთიერთობით გადაალახებთ სხვადასხვა გამოწვევებს.",
      image: "/6.jpg",
      price: 100,
      duration: "1 შეხვედრა",
      level: "ზრდასრული",
      rating: 4.8,
      students: 180,
      badge: "პოპულარული",
      category: "თვითანალიზი",
      instructor: "გამოცდილი ფსიქოლოგები და ფასილიტატორები",
      methodology: "ჯგუფური ვარჯიშები, თვითანალიზი, ინტერაქციული თამაშები",
      testimonial:
        "ეს თამაში ნამდვილად გამიხსნა თვალები საკუთარ თავზე. რეკომენდაცია! - ნინო ხ.",
      features: [
        "საკუთარი თავის შეუცნობელი მხარეების აღმოჩენა",
        "ქცევის პატერნების იდენტიფიკაცია",
        "თვითანალიზის უნარის განვითარება",
        "ემპათიის, ექსპრესიის, სიხარბის შეფასება",
        "ღიაობის დონის გაზომვა",
        "ფსიქოლოგიური ჯავშნის მოხსნა",
        "გუნდური ურთიერთობის გამოცდილება",
        "თვითდაკვირვების ჩვევების ფორმირება",
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
            გზა ღრმა ცოდნისა და პრაქტიკული უნარებით
          </p>
          <div className="hero-stats">
            <div>
              <span>5</span> კურსი
            </div>
            <div>
              <span>540+</span> სტუდენტი
            </div>
            <div>
              <span>95%</span> კმაყოფილება
            </div>
            <div>
              <span>24/7</span> მხარდაჭერა
            </div>
          </div>
        </div>
      </section>

      <section className="course-categories">
        <div className="container">
          <h2>კურსების კატეგორიები</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">👶</div>
              <h3>ბავშვებისთვის</h3>
              <p>მითოდრამა და ბავშვების ფსიქოთერაპია</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎨</div>
              <h3>შემოქმედება</h3>
              <p>კალიგრაფია, მუსიკა და ხელოვნების კურსები</p>
            </div>
            <div className="category-card">
              <div className="category-icon">�</div>
              <h3>მოზარდებისთვის</h3>
              <p>Self მარკეტინგი და პირადობის განვითარება</p>
            </div>
            <div className="category-card">
              <div className="category-icon">�</div>
              <h3>თვითანალიზი</h3>
              <p>ცეცხლთან თამაში და ფსიქოლოგიური ვარჯიშები</p>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-grid-section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card-compact">
                {/* კომპაქტური ძირითადი ინფო */}
                <div className="course-image-container">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
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

                <div className="course-content-compact">
                  <h3>{course.title}</h3>
                  <p className="course-description-short">
                    {course.description.substring(0, 120)}...
                  </p>

                  <div className="course-info-compact">
                    <div className="info-item">
                      <span className="icon">⏱️</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="info-item">
                      <span className="icon">📊</span>
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="course-bottom-compact">
                    <div className="course-rating">
                      <span className="stars">★★★★★</span>
                      <span>{course.rating}</span>
                    </div>
                    <div className="course-price">₾{course.price}</div>
                  </div>

                  {/* ღილაკები */}
                  <div className="course-actions-compact">
                    <button
                      className="btn-view-details"
                      onClick={() => toggleCourseExpansion(course.id)}
                    >
                      {expandedCourseId === course.id
                        ? "მოკლედ ნახვა"
                        : "სრული ინფო"}
                    </button>
                    <Link href="/contact">
                      <button className="btn-enroll-compact">ჩაწერა</button>
                    </Link>
                  </div>

                  {/* გაფართოებული ინფო */}
                  {expandedCourseId === course.id && (
                    <div className="course-details-expanded">
                      <div className="expanded-content">
                        <p className="course-description-full">
                          {course.description}
                        </p>

                        <div className="course-info-detailed">
                          <div className="info-item">
                            <span className="icon">👥</span>
                            <span>{course.students} სტუდენტი</span>
                          </div>
                          <div className="info-item">
                            <span className="icon">📚</span>
                            <span>{course.category}</span>
                          </div>
                        </div>

                        <div className="course-instructor">
                          <h4>ინსტრუქტორი:</h4>
                          <p>{course.instructor}</p>
                        </div>

                        <div className="course-methodology">
                          <h4>სწავლების მეთოდოლოგია:</h4>
                          <p>{course.methodology}</p>
                        </div>

                        <div className="course-features">
                          <h4>რას შეისწავლი:</h4>
                          <ul>
                            {course.features
                              .slice(0, 5)
                              .map((feature, index) => (
                                <li key={index}>✓ {feature}</li>
                              ))}
                          </ul>
                        </div>

                        <div className="course-testimonial">
                          <div className="testimonial-content">
                            <span className="quote-icon">"</span>
                            <p>{course.testimonial}</p>
                          </div>
                        </div>

                        <div className="expanded-actions">
                          <Link href="/contact">
                            <button className="btn-enroll">
                              კურსზე ჩაწერა
                            </button>
                          </Link>
                          <Link href="/about">
                            <button className="btn-preview">
                              უფასო გადახედვა
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-methodology">
        <div className="container">
          <h2>ჩვენი სწავლების მეთოდოლოგია</h2>
          <div className="methodology-grid">
            <div className="methodology-item">
              <div className="method-icon">🎯</div>
              <h3>პრაქტიკული მიდგომა</h3>
              <p>
                ყველა კურსი ორიენტირებულია რეალური ცხოვრების სიტუაციებზე და
                პრაქტიკულ გამოყენებაზე
              </p>
            </div>
            <div className="methodology-item">
              <div className="method-icon">👥</div>
              <h3>ინტერაქტიული ფორმატი</h3>
              <p>
                ჯგუფური მუშაობა, დისკუსიები და გამოცდილების გაზიარება სხვა
                მონაწილეებთან
              </p>
            </div>
            <div className="methodology-item">
              <div className="method-icon">🧠</div>
              <h3>სამეცნიერო ბაზა</h3>
              <p>
                ყველა მეთოდი და ტექნიკა დაფუძნებულია თანამედროვე ფსიქოლოგიის
                მიღწევებზე
              </p>
            </div>
            <div className="methodology-item">
              <div className="method-icon">📈</div>
              <h3>ეტაპობრივი ზრდა</h3>
              <p>კურსები აგებულია ლოგიკური წყობით, ზრდის პრინციპის დაცვით</p>
            </div>
          </div>
        </div>
      </section>

      <section className="student-testimonials">
        <div className="container">
          <h2>რას ამბობენ ჩვენი სტუდენტები</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "ფორმაცია ნამდვილად შემცვალა! ემოციური ინტელექტის კურსის შემდეგ
                ყველაფერი სხვაგვარად ვუყურებ ურთიერთობებს."
              </p>
              <div className="student-info">
                <strong>ანა მ.</strong>
                <span>ემოციური ინტელექტის კურსი</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "სტრესის მართვის კურსმა ნამდვილად გამიმარტივა ცხოვრება. ახლა
                მაქვს კონკრეტული ინსტრუმენტები სირთულეებთან გასამკლავებლად."
              </p>
              <div className="student-info">
                <strong>დავით კ.</strong>
                <span>სტრესის მართვის კურსი</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "ლიდერშიპის კურსის შემდეგ გუნდში შედეგები მნიშვნელოვნად
                გაუმჯობესდა. რეკომენდაცია ყველა მენეჯერს!"
              </p>
              <div className="student-info">
                <strong>გიორგი მ.</strong>
                <span>ლიდერშიპის კურსი</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-benefits">
        <div className="container">
          <h2>რატომ აირჩიო ფორმაცია?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🏆</div>
              <h3>ღია სერტიფიკატი</h3>
              <p>
                ყველა წარმატებით დასრულებული კურსისთვის მიიღებ ოფიციალურ
                სერტიფიკატს
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">👨‍🏫</div>
              <h3>ექსპერტი ინსტრუქტორები</h3>
              <p>ჩვენი ინსტრუქტორები არიან გამოცდილი ფსიქოლოგები და კოუჩები</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <h3>მოქნილი ფორმატი</h3>
              <p>კურსები ხელმისაწვდომია როგორც ონლაინ, ისე ოფლაინ ფორმატში</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💬</div>
              <h3>კომუნიტი</h3>
              <p>
                მიიღე წვდომა ჩვენს განსაკუთრებულ კომუნიტისკენ მხარდაჭერისა და
                გამოცდილების გაზიარებისთვის
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📚</div>
              <h3>სასწავლო მასალები</h3>
              <p>
                ყველა კურსს თან ერთვის ღრმა სასწავლო მასალები და პრაქტიკული
                სახელმძღვანელოები
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔄</div>
              <h3>უკვე არსებული მხარდაჭერა</h3>
              <p>
                კურსის დასრულების შემდეგაც მხარდაჭერას ვუწევთ შენ რეალური
                ცხოვრების გამოწვევებში
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>მზად ხარ ემოციური ზრდისთვის?</h2>
          <p>
            აირჩიე შენთვის შესაფერისი კურსი და დაიწყე ტრანსფორმაციის გზა დღესვე
          </p>
          <div className="cta-buttons">
            <Link href="/contact">
              <button className="btn-contact">უფასო კონსულტაცია</button>
            </Link>
            <Link href="/contact" className="btn-learn-more">
              კითხვების დასმა
            </Link>
          </div>
          <div className="guarantee-text">
            <p>
              💯 100% გარანტია: თუ კურსი არ მოგეწონება პირველ კვირაში - სრული
              თანხის დაბრუნება
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
