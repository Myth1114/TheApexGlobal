const countriesData = [
  {
    id: 1,
    name: "UK",
    image: "/images/UK.jpg",
    flag: "/images/UKLogo.png",
    delay: "300",
    tag: "Study in The United Kingdom",
    slug: "uk",
    details: {
      overview:
        "Nepali students often struggle to decide: Why study in the UK? To help make their decision easier, it is important that they understand the benefits of a UK education system and what this could mean for their future. The UK offers numerous reasons to study there, especially as an international student, which should be carefully considered before any commitment is made.",

      popularCourses: [
        "Business & Management",
        "Computer Science & IT",
        "Nursing",
        "Engineering",
        "Hospitality",
      ],

      tuitionFees: {
        bachelors: "£10,000 - £18,000 per year",
        masters: "£12,000 - £20,000 per year",
      },

      livingCost: "£800 - £1200 per month depending on the city",

      stayBack: "2 Years Post Study Work (PSW)",

      partTimeWork:
        "20 hours per week during classes, full time during holidays",

      visaRequirements: [
        "Offer letter from a UK university",
        "Proof of funds (bank balance/loan)",
        "English proficiency (IELTS/PTE)",
        "Passport",
        "Academic documents",
        "Proof of accommodation",
      ],

      documentsRequired: [
        "Passport",
        "Academic Certificates",
        "SOP",
        "CV",
        "Recommendation Letters",
        "Financial documents",
      ],

      topUniversities: [
        "University of Greenwich",
        "Coventry University",
        "University of West London",
        "Teesside University",
        "London Metropolitan University",
      ],
    },
  },
  {
    id: 2,
    name: "Australia",
    image: "/images/Australia.jpg",
    flag: "/images/AusLogo.png",
    delay: "600",
    slug: "australia",
    details: "All about studying in the Australia...",
  },
  {
    id: 3,
    name: "China",
    image: "/images/China.jpg",
    flag: "/images/chinaLogo.png",
    delay: "900",
    slug: "China",
    details: "All about studying in the China...",
  },
  {
    id: 4,
    name: "New Zealand",
    image: "/images/NewZealand.jpg",
    flag: "/images/NewZealandLogo.png",
    delay: "1200",
  },
  {
    id: 5,
    name: "Canada",
    image: "/images/Canada.jpg",
    flag: "/images/canadaLogo.png",
    delay: "1200",
  },
];
export default countriesData;
