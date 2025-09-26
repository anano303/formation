import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import MessengerChat from "@/components/MessengerChat";
import "./page.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ფორმაცია - ემოციების ჰაბი | ემოციური განვითარების კურსები",
  description: "ფორმაცია არის ემოციების განვითარების ცენტრი, სადაც ვთავაზობთ მითოდრამის, კალიგრაფიის, Self მარკეტინგის და სხვა უნიკალურ კურსებს ბავშვებისა და მოზარდებისთვის. 540+ დასრულებული სტუდენტი.",
  keywords: ["ფორმაცია", "ემოციები", "მითოდრამა", "კალიგრაფია", "Self მარკეტინგი", "ბავშვების განვითარება", "მოზარდების კურსები", "თბილისი"],
  authors: [{ name: "ფორმაცია - ემოციების ჰაბი" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "ფორმაცია - ემოციების ჰაბი",
    description: "ემოციური განვითარების კურსები ბავშვებისა და მოზარდებისთვის",
    url: "https://formation.ge",
    siteName: "ფორმაცია",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ფორმაცია - ემოციების ჰაბი",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ფორმაცია - ემოციების ჰაბი",
    description: "ემოციური განვითარების კურსები ბავშვებისა და მოზარდებისთვის",
    images: ["/logo.png"],
  },
};

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
          <Link href="/courses" className="cta-button">
            ჰაბი
          </Link>
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
              <Link href="/courses">
                <button>კურსების ნახვა</button>
              </Link>
              <Link href="/contact">
                <button>უფასო კონსულტაცია</button>
              </Link>
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
            <span>540+</span>
            <p>სტუდენტი</p>
          </div>
          <div>
            <span>5</span>
            <p>კურსი</p>
          </div>
          <div>
            <span>95%</span>
            <p>კმაყოფილება</p>
          </div>
          <div>
            <span>24/7</span>
            <p>მხარდაჭერა</p>
          </div>
        </div>
      </section>

      <section className="courses">
        <div>
          <h2>პოპულარული კურსები</h2>
          <p>აირჩიე შენთვის სასურველი კურსი და დაიწყე ემოციების მართვა</p>
        </div>
        <div className="courses-grid">
          <div className="course-card">
            <Image src="/2.jpg" alt="მითოდრამა" width={400} height={200} />
            <div>
              <h3>მითოდრამა</h3>
              <p>
                ფსიქოთერაპიული მეთოდი ბავშვებისა და მოზარდებისთვის - თერაპია
                ზღაპრით
              </p>
              <div>
                <span>★★★★★ 4.9</span>
                <span>შეთანხმებით</span>
              </div>
              <Link href="/courses">
                <button>კურსის ნახვა</button>
              </Link>
            </div>
          </div>

          <div className="course-card">
            <Image src="/3.jpg" alt="კალიგრაფია" width={400} height={200} />
            <div>
              <h3>კალიგრაფია</h3>
              <p>
                ლამაზი წერა და მოთმინების განვითარება ბავშვებისა და
                ზრდასრულებისთვის
              </p>
              <div>
                <span>★★★★★ 4.8</span>
                <span>₾150</span>
              </div>
              <Link href="/courses">
                <button>კურსის ნახვა</button>
              </Link>
            </div>
          </div>

          <div className="course-card">
            <Image
              src="/6.jpg"
              alt="ცეცხლთან თამაში"
              width={400}
              height={200}
            />
            <div>
              <h3>ცეცხლთან თამაში</h3>
              <p>
                ფსიქოლოგიური ტემპერატურის თამაში თვითანალიზისა და
                თვითშეცნობისთვის
              </p>
              <div>
                <span>★★★★★ 4.8</span>
                <span>₾100</span>
              </div>
              <Link href="/courses">
                <button>კურსის ნახვა</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MessengerChat />
    </div>
  );
}
