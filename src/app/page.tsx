import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div className="main-container">
      <header className="header">
        <div className="nav-content">
          <div className="logo-section">
            <Image src="/logo.png" alt="ფორმაცია Logo" width={50} height={50} />
            <div>
              <h1>ფორმაცია</h1>
              <p>ემოციების ჰაბი</p>
            </div>
          </div>
          <nav>
            <Link href="/">მთავარი</Link>
            <Link href="/courses">კურსები</Link>
            <Link href="/about">ჩვენ შესახებ</Link>
            <Link href="/contact">კონტაქტი</Link>
          </nav>
          <div className="cta-button">ჰაბი</div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div>
            <h1>
              ფორმაცია ემოციების <span>ჰაბი</span>
            </h1>
            <p>
              გაიღრმავე შენი ცოდნა ემოციური ინტელექტის სფეროში და განავითარე
              პირადი უნარები ჩვენი პროფესიონალური კურსებით.
            </p>
            <div>
              <button>კურსების ნახვა</button>
              <button>უფასო კონსულტაცია</button>
            </div>
          </div>
          <div>
            <Image src="/1.jpg" alt="ფორმაცია" width={600} height={400} />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div>
            <span>500+</span>
            <p>მოსწავლე</p>
          </div>
          <div>
            <span>15+</span>
            <p>კურსი</p>
          </div>
          <div>
            <span>98%</span>
            <p>კმაყოფილება</p>
          </div>
          <div>
            <span>3+</span>
            <p>წლიანი გამოცდილება</p>
          </div>
        </div>
      </section>

      <section className="courses">
        <div>
          <h2>პოპულარული კურსები</h2>
          <p>
            აირჩიე შენთვის სასურველი კურსი და დაიწყე ემოციების მართვა
            
          </p>
        </div>
        <div className="courses-grid">
          <div className="course-card">
            <Image src="/2.jpg" alt="კურსი 1" width={400} height={200} />
            <div>
              <h3>ემოციების ინტელექტის განვითარება</h3>
              <p>შეისწავლე როგორ გაიაზროო და მართო შენი ემოციები</p>
              <div>
                <span>★★★★★ 4.9</span>
                <span>₾150</span>
              </div>
              <button>კურსის ნახვა</button>
            </div>
          </div>

          <div className="course-card">
            <Image src="/3.jpg" alt="კურსი 2" width={400} height={200} />
            <div>
              <h3>სტრესის მართვისა და რელაქსაციის ტექნიკები</h3>
              <p>ისწავლე ეფექტური მეთოდები სტრესთან გასამკლავებლად</p>
              <div>
                <span>★★★★★ 4.8</span>
                <span>₾120</span>
              </div>
              <button>კურსის ნახვა</button>
            </div>
          </div>

          <div className="course-card">
            <Image src="/4.jpg" alt="კურსი 3" width={400} height={200} />
            <div>
              <h3>ეფექტური კომუნიკაციის უნარები</h3>
              <p>გაუმჯობესე შენი კომუნიკაციის უნარები და ურთიერთობები</p>
              <div>
                <span>★★★★☆ 4.7</span>
                <span>₾100</span>
              </div>
              <button>კურსის ნახვა</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <Image src="/logo.png" alt="ფორმაცია" width={40} height={40} />
          <div>
            <h3>ფორმაცია</h3>
            <p>ემოციების განვითარება</p>
          </div>
        </div>
        <p>
          ჩვენ ვართ ემოციების ინტელექტის განვითარების წამყვანი პლატფორმა
          საქართველოში.
        </p>
        <div>
          <Link href="/courses">კურსები</Link>
          <Link href="/about">ჩვენ შესახებ</Link>
          <Link href="/contact">კონტაქტი</Link>
        </div>
        <div>
          <p>📧 info@formation.ge</p>
          <p>📞 +995 555 123 456</p>
          <p>📍 თბილისი, საქართველო</p>
        </div>
        <p>&copy; 2025 ფორმაცია - ემოციების ჰაბი. ყველა უფლება დაცულია.</p>
      </footer>
    </div>
  );
}
