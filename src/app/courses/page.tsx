import Image from "next/image";
import Link from "next/link";
import "./courses.css";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "ემოციების ინტელექტის განვითარება",
      description:
        "სრული კურსი ემოციური ინტელექტის განვითარებისთვის, რომელიც მოიცავს ღრმა ანალიზს, პრაქტიკულ ვარჯიშებს და რეალური ცხოვრებისადმი მისადაგების მეთოდებს. შეისწავლე როგორ გაიაზროო და მართო შენი ემოციები, გაიგე სხვების ემოციური მდგომარეობა და განავითარე ემოციური ინტელექტი პირად და პროფესიულ სფეროში.",
      image: "/2.jpg",
      price: 150,
      duration: "8 კვირა",
      level: "დამწყები-შუალედური",
      rating: 4.9,
      students: 320,
      badge: "პოპულარული",
      category: "ემოციური განვითარება",
      instructor: "ნინო გელაშვილი - ფსიქოლოგი, ემოციური ინტელექტის ექსპერტი",
      methodology:
        "ინტერაქტიული ლექციები, ჯგუფური ვარჯიშები, პრაქტიკული დავალებები",
      testimonial:
        "ეს კურსი ნამდვილად შემცვალა! ახლა ვიცი როგორ მოვეპყრო ჩემს ემოციებს და უკეთ ვესმი სხვებს - ანა მ.",
      features: [
        "ემოციების ცნობა და მართვა",
        "ემპათიის განვითარება და გაღრმავება",
        "სოციალური უნარების გაუმჯობესება",
        "სტრესის ეფექტური მართვა",
        "ინტერპერსონალური ურთიერთობების გაუმჯობესება",
        "თვითრეფლექსია და ემოციური თვითშეცნობა",
        "კონფლიქტების ემოციურად ჭკვიანი გადაწყვეტა",
        "სამუშაო გარემოში ემოციური ინტელექტის გამოყენება",
      ],
    },
    {
      id: 2,
      title: "სტრესის მართვისა და რელაქსაციის ტექნიკები",
      description:
        "კომპლექსური პროგრამა სტრესის მართვისა და რელაქსაციის ტექნიკების შესწავლისთვის. ისწავლე ეფექტური მეთოდები სტრესთან გასამკლავებლად, რელაქსაციის სხვადასხვა ტექნიკები და ისე წყობა ცხოვრებისა, რომ ნაკლები სტრესი იყოს. კურსი მოიცავს როგორც თეორიულ ბაზას, ისე ინტენსიურ პრაქტიკას.",
      image: "/3.jpg",
      price: 120,
      duration: "6 კვირა",
      level: "ყველა დონე",
      rating: 4.8,
      students: 285,
      badge: "ახალი",
      category: "სტრეს-მენეჯმენტი",
      instructor:
        "თამარ ხვედელიძე - კლინიკური ფსიქოლოგი, მაინდფულნესის ინსტრუქტორი",
      methodology:
        "მედიტაციური პრაქტიკები, სუნთქვის ვარჯიშები, ჯგუფური თერაპია",
      testimonial:
        "6 კვირაში ნამდვილად შევცვალე მოლოდინი სტრესისადმი. ახლა მაქვს კონკრეტული ინსტრუმენტები - დავით კ.",
      features: [
        "სტრესის წყაროების სიღრმისეული იდენტიფიკაცია",
        "სხვადასხვა სუნთქვის ტექნიკები და მათი პრაქტიკა",
        "მედიტაცია და მაინდფულნესის ღრმა შესწავლა",
        "ფიზიკური რელაქსაციის ეფექტური მეთოდები",
        "დროის მართვა და პრიორიტეტების განსაზღვრა",
        "ავტოგენური ტრენინგი და მუსკულური რელაქსაცია",
        "ყოველდღიური რუტინაში სტრეს-მენეჯმენტის ჩართვა",
        "სტრესულ სიტუაციებში სწრაფი რეაგირების ტექნიკები",
      ],
    },
    {
      id: 3,
      title: "ეფექტური კომუნიკაციის უნარები",
      description:
        "სრული კურსი კომუნიკაციის უნარების განსავითარებლად პირადი და პროფესიული ცხოვრების ყველა სფეროში. გაუმჯობესე შენი კომუნიკაციის უნარები, ისწავლე აქტიური მოსმენა, ეფექტური საუბარი და კონფლიქტების კონსტრუქციული მოგვარება. შენ შეძლებ გახდე უკეთესი მეტყველი და მსმენელი.",
      image: "/4.jpg",
      price: 100,
      duration: "5 კვირა",
      level: "დამწყები",
      rating: 4.7,
      students: 195,
      badge: null,
      category: "კომუნიკაციის უნარები",
      instructor: "გიორგი ნადარეიშვილი - კომუნიკაციის ექსპერტი, ბიზნეს-ტრენერი",
      methodology:
        "როლური თამაშები, რეალური სიტუაციების მოდელირება, ვიდეო ანალიზი",
      testimonial:
        "სამსახურში და ოჯახში ურთიერთობები ბევრად გაუმჯობესდა. რეკომენდაცია ყველას! - მარიამ ს.",
      features: [
        "აქტიური მოსმენის ღრმა ტექნიკები",
        "არავერბალური კომუნიკაციის ოსტატობა",
        "კონფლიქტების კონსტრუქციული მოგვარება",
        "გუნდური მუშაობისა და კოლაბორაციის უნარები",
        "საჯარო გამოსვლა და პრეზენტაციის ხელოვნება",
        "ემპათიური კომუნიკაცია",
        "რთული საუბრების წარმოება",
        "სხვადასხვა ტიპის ადამიანებთან ეფექტური ურთიერთობა",
      ],
    },
    {
      id: 4,
      title: "შინაგანი მოტივაციისა და მიზნების მიღწევა",
      description:
        "ტრანსფორმაციული კურსი პირადი ზრდისა და მიზნების მიღწევისთვის. აღმოაჩინე შენი ნამდვილი შინაგანი მოტივაცია, დაისახე რეალისტური და გამომწვევი მიზნები, ისწავლე მათი მიღწევის ეფექტური სტრატეგიები და პრაქტიკული მეთოდები. ეს კურსი შენ დაგეხმარება გახდე უფრო მოტივირებული და მიზანმიმართული.",
      image: "/5.jpg",
      price: 130,
      duration: "7 კვირა",
      level: "შუალედური",
      rating: 4.6,
      students: 165,
      badge: null,
      category: "პირადი განვითარება",
      instructor: "ლევან კახიძე - კოუჩი, მოტივაციის ექსპერტი, NLP პრაქტიკოსი",
      methodology: "კოუჩინგი, გოლ-სეტინგის ვარჯიშები, ინდივიდუალური მენტორინგი",
      testimonial:
        "7 კვირაში მივაღწიე იმას, რაზეც წლებს ვფიქრობდი. მადლობა ლევანს მარგება მეთოდისთვის! - ნიკა ღ.",
      features: [
        "SMART მიზნების დასახვის მეთოდოლოგია",
        "მოტივაციის ღრმა წყაროების აღმოჩენა",
        "ხელისშემშლელი ფაქტორების იდენტიფიკაცია და გადალახვა",
        "თვითდისციპლინა და პოზიტიური ჩვევების ჩამოყალიბება",
        "პროგრესის ეფექტური თვალყურის დევნება",
        "პროკრასტინაციასთან ბრძოლის სტრატეგიები",
        "რესურსებისა და შესაძლებლობების მობილიზაცია",
        "შინაგანი კრიტიკოსის გარდაქმნა მხარდამჭერად",
      ],
    },
    {
      id: 5,
      title: "ავტორიტეტი და ლიდერობის უნარები",
      description:
        "პრემიუმ კურსი ლიდერობის უნარების განვითარებისთვის, განკუთვნილი როგორც არსებული, ასევე მომავალი ლიდერებისთვის. განავითარე ავთენტური ლიდერობის უნარები, ისწავლე გუნდის ეფექტური მართვა, გადაწყვეტილებების მიღება პრესინგის პირობებში და სხვების ინსპირირება ზრდისა და წარმატებისკენ.",
      image: "/6.jpg",
      price: 180,
      duration: "10 კვირა",
      level: "შუალედური-მაღალი",
      rating: 4.8,
      students: 125,
      badge: "პრემიუმი",
      category: "ლიდერშიპი",
      instructor:
        "ანა ბერიძე - ბიზნეს-ლიდერი, ექსექუტივ-კოუჩი, ლიდერშიპის კონსულტანტი",
      methodology:
        "კეისები, ლიდერშიპის სიმულაციები, 360-გრადუსიანი ფიდბეკი, მენტორინგი",
      testimonial:
        "ეს კურსი გადამიტრიალა წარმოდგენა ლიდერობაზე. ახლა ვარ ნამდვილი ლიდერი, არა მხოლოდ მენეჯერი - გიორგი მ.",
      features: [
        "ლიდერობის სხვადასხვა სტილების ღრმა ანალიზი",
        "გუნდის მოტივაცია და ენგეიჯმენტი",
        "რთული გადაწყვეტილებების ანალიტიკური მიღება",
        "კონფლიქტების მედიაცია და რეზოლუცია",
        "ვიზიონერობა და სტრატეგიული აზროვნება",
        "ემოციური ლიდერობა და ავთენტურობა",
        "ცვლილებების ეფექტური მართვა",
        "გუნდის წევრების ზრდისა და განვითარების ხელშეწყობა",
      ],
    },
    {
      id: 6,
      title: "ანგურესობის მართვა და აგრესიის კონტროლი",
      description:
        "სპეციალიზებული კურსი ანგურესობისა და აგრესიის ჯანსაღი მართვისთვის. ისწავლე ანგურესობის ღირსეული და კონსტრუქციული გამოხატვა, აგრესიის ეფექტური კონტროლი და ამ ძლიერი ენერგიის დადებითი მიზნებისკენ გადამისამართება. კურსი გეხმარება გახდე უფრო მშვიდი, დაბალანსებული და ემოციურად მწიფე პიროვნება.",
      image: "/7.jpg",
      price: 110,
      duration: "6 კვირა",
      level: "ყველა დონე",
      rating: 4.5,
      students: 98,
      badge: null,
      category: "ემოციური რეგულაცია",
      instructor:
        "ირაკლი ხუციშვილი - კლინიკური ფსიქოლოგი, ღარიბთან მუშაობის სპეციალისტი",
      methodology:
        "CBT ტექნიკები, მაინდფულნესი, როლური თამაშები, პრაქტიკული ვარჯიშები",
      testimonial:
        "მადლობა ირაკლის! ახლა ვიცი რა ვქნა ანგურესობისას. ოჯახური ურთიერთობები გაუმჯობესდა - თენგიზ რ.",
      features: [
        "ანგურესობის ღრმა გამომწვევი მიზეზების ანალიზი",
        "ემოციური რეგულაციის ეფექტური ტექნიკები",
        "ჯანსაღი და კონსტრუქციული გამოხატვის ფორმები",
        "პრევენციული სტრატეგიები 'ცხელი' მომენტებისთვის",
        "შეგუებისა და თვითკონტროლის პრაქტიკული ტექნიკები",
        "ანგურესობის ენერგიის დადებითად გარდაქმნა",
        "ტრიგერების იდენტიფიკაცია და მუშაობა მათთან",
        "ურთიერთობების გაუმჯობესება ემოციური კონტროლის მეშვეობით",
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
              <span>15+</span> კურსი
            </div>
            <div>
              <span>500+</span> სტუდენტი
            </div>
            <div>
              <span>98%</span> კმაყოფილება
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
              <div className="category-icon">🧠</div>
              <h3>ემოციური განვითარება</h3>
              <p>ემოციური ინტელექტისა და თვითშეცნობის კურსები</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🧘‍♀️</div>
              <h3>სტრეს-მენეჯმენტი</h3>
              <p>სტრესის მართვა, რელაქსაცია და წონასწორობა</p>
            </div>
            <div className="category-card">
              <div className="category-icon">💬</div>
              <h3>კომუნიკაციის უნარები</h3>
              <p>ეფექტური კომუნიკაცია და ურთიერთობები</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎯</div>
              <h3>პირადი განვითარება</h3>
              <p>მოტივაცია, მიზნები და თვითრეალიზაცია</p>
            </div>
            <div className="category-card">
              <div className="category-icon">👑</div>
              <h3>ლიდერშიპი</h3>
              <p>ლიდერობის უნარები და გუნდის მართვა</p>
            </div>
            <div className="category-card">
              <div className="category-icon">⚖️</div>
              <h3>ემოციური რეგულაცია</h3>
              <p>ანგურესობის მართვა და ემოციური კონტროლი</p>
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

                  <div className="course-testimonial">
                    <div className="testimonial-content">
                      <span className="quote-icon">"</span>
                      <p>{course.testimonial}</p>
                    </div>
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
            <button className="btn-contact">უფასო კონსულტაცია</button>
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
