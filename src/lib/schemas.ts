export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "ფორმაცია - ემოციების ჰაბი",
  description: "ემოციური განვითარების ცენტრი ბავშვებისა და მოზარდებისთვის",
  url: "https://formation.ge",
  logo: "https://formation.ge/logo.png",
  foundingDate: "2020",
  telephone: "+995511447577",
  email: "info@formation.ge",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19 Pavle Ingorokva St",
    addressLocality: "თბილისი",
    addressCountry: "GE",
  },
  sameAs: ["https://www.facebook.com/Formationemotionalhub"],
  offers: [
    {
      "@type": "Course",
      name: "მითოდრამა",
      description: "8-15 წლის ბავშვებისთვის ემოციური განვითარების კურსი",
      price: "250",
      priceCurrency: "GEL",
    },
    {
      "@type": "Course",
      name: "კალიგრაფია",
      description: "ყველა ასაკისთვის კალიგრაფიის კურსი",
      price: "200",
      priceCurrency: "GEL",
    },
    {
      "@type": "Course",
      name: "Self მარკეტინგი",
      description: "10-17 წლის მოზარდებისთვის თვითწარდგენის კურსი",
      price: "350",
      priceCurrency: "GEL",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ფორმაცია - ემოციების ჰაბი",
  url: "https://formation.ge",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://formation.ge/courses?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
