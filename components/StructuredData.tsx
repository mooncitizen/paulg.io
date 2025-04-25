import Script from 'next/script';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Paul Gardiner",
    "jobTitle": "Chief Technology Officer",
    "description": "Software Engineer & CTO with 19 years of experience building innovative solutions across web, mobile, and cloud platforms with expertise in AI and machine learning.",
    "url": "https://paulg.io",
    "image": "https://avatars.githubusercontent.com/u/26233649?v=4",
    "sameAs": [
      "https://github.com/mooncitizen",
      "https://linkedin.com/in/piloate",
      "https://bsky.app/profile/paulg.io"
    ],
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Edinburgh",
        "addressRegion": "Scotland",
        "addressCountry": "UK"
      }
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Solutions Architecture",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Python",
      "AWS",
      "GCP",
      "Serverless",
      "Docker",
      "Terraform"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://paulg.io",
    "name": "Paul Gardiner | Software Engineer & CTO",
    "description": "Personal website of Paul Gardiner, a Software Engineer & CTO with 19 years of experience.",
    "author": {
      "@type": "Person",
      "name": "Paul Gardiner"
    }
  };

  return (
    <>
      <Script 
        id="structured-data-person" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script 
        id="structured-data-website" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
} 