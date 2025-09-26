import { Metadata } from "next";

export const metadata: Metadata = {
  title: "კურსები - ფორმაცია | მითოდრამა, კალიგრაფია, Self მარკეტინგი",
  description:
    "ფორმაცია-ს კურსები: მითოდრამა 8-15 წლის ბავშვებისთვის (₾250), კალიგრაფია ყველა ასაკისთვის (₾200), Self მარკეტინგი 10-17 წლის მოზარდებისთვის (₾350), მუსიკა და კალიგრაფია (₾300), ცეცხლთან თამაში (₾400).",
  keywords: [
    "მითოდრამა",
    "კალიგრაფია",
    "Self მარკეტინგი",
    "ბავშვების კურსები",
    "მოზარდების განვითარება",
    "ემოციური განათლება",
    "თბილისი",
    "ფორმაცია",
  ],
  openGraph: {
    title: "კურსები - ფორმაცია",
    description:
      "მითოდრამა, კალიგრაფია, Self მარკეტინგი და სხვა უნიკალური კურსები",
    url: "https://formation.ge/courses",
    siteName: "ფორმაცია",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ფორმაცია კურსები",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
