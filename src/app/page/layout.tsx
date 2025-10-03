import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ფორმაცია - ემოციების ჰაბი | ემოციური განვითარების კურსები",
  description:
    "ფორმაცია არის ემოციების განვითარების ცენტრი, სადაც ვთავაზობთ მითოდრამის, კალიგრაფიის, Self მარკეტინგის და სხვა უნიკალურ კურსებს ბავშვებისა და მოზარდებისთვის. 540+ დასრულებული სტუდენტი.",
  keywords: [
    "ფორმაცია",
    "ემოციები",
    "მითოდრამა",
    "კალიგრაფია",
    "Self მარკეტინგი",
    "ბავშვების განვითარება",
    "მოზარდების კურსები",
    "თბილისი",
  ],
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

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
