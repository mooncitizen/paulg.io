import { NextResponse } from 'next/server';

const experience = [
    {
        company: "Ittybit Ltd",
        title: "CTO",
        startDate: "2022-01-01",
        endDate: null,
        current: true,
        description: "Building MVP through to initial full 1.0 release managing stack using Terraform and GitHub Actions to deploy systems in a full serverless environment using Docker to keep the platform entirely portable to aid redundancy. Built team out to essential development and maintenance teams. I do have an ownership stake in this company that has recently been invested in.",
        tags: ["GCP", "Github", "React", "Node", "Typescript", "DNS", "Python", "Docker", "ECS", "Postgres", "Firebase", "CICD", "Datastore", "Big Query", "AI", "ML", "Terraform"]
    },
    {
        company: "One Compliance",
        title: "Principal Engineer",
        startDate: "2023-01-01",
        endDate: "2024-03-01",
        current: false,
        description: "Created a phishing platform application with tools that interrogates DNS, SMTP, and HTTP as well as looks for identifiable information in the dark web. Used machine learning models to detect changes in data and potential problems arising from formatted information. Was solely responsible for delivering this project.",
        tags: ["Azure", "Github", "React", "Node", "Typescript", "DNS", "Python", "Docker", "ECS", "Postgres", "Firebase", "CICD"]
    },
    {
        company: "Lodestone Security",
        title: "Principal Engineer",
        startDate: "2022-05-01",
        endDate: "2023-01-01",
        current: false,
        description: "Maintained and developed core infrastructure using Terraform and enhanced the API built in Python using the FastAPI framework. Solely developed two front-end systems for non-API users to access the platform, built in React with TailwindCSS for styling. Automated probing of a domain and its assets, finding subdomains, associated domains, and probing their IPs and ports.",
        tags: ["AWS", "Terraform", "Github", "React", "Node", "Typescript", "DNS", "Python", "Docker", "ECS", "Postgres"]
    },
    {
        company: "NYE Health",
        title: "Principal Engineer",
        startDate: "2022-01-01",
        endDate: "2022-05-01",
        current: false,
        description: "Modernized their stack and automated the infrastructure using Pulumi, making it accessible for junior developers. Delivered solutions for enhanced development efficiency.",
        tags: ["AWS", "Pulumi", "React", "Node", "Typescript", "Postgres", "Python", "Docker"]
    },
    {
        company: "BBC",
        title: "Front End Engineer",
        startDate: "2021-06-01",
        endDate: "2021-12-01",
        current: false,
        description: "Moved the content site for the Top Gear TV show from Drupal to a headless CMS system. Developed the front end in React using Storybook and Jest, deployed via Jenkins. Automated deployments and implemented infrastructure as code.",
        tags: ["AWS", "Terraform", "Github", "React", "Node", "Typescript", "DNS", "Docker", "ECS", "Headless CMS"]
    },
    {
        company: "Woodmac",
        title: "Lead Engineer",
        startDate: "2021-01-01",
        endDate: "2021-06-01",
        current: false,
        description: "Unified data from external models to a source of truth model built in Athena for real-time trading data. Utilized AWS Glue and SageMaker for data transformations, enabling seamless data flow to APIs. Built visual tooling using React.",
        tags: ["AWS", "AWS Glue", "Postgres", "DynamoDB", "RDS", "Node", "React", "Terraform", "Docker", "AWS Step Functions"]
    },
    {
        company: "NHS Digital",
        title: "Lead Engineer",
        startDate: "2020-10-01",
        endDate: "2021-01-01",
        current: false,
        description: "Technical Lead for the COVID response, specifically the Vaccination History API (Covid Passport). Managed data migration and obfuscation of sensitive data. Contributed to the forms section of the Covid Pass app and automated letter generation for vaccination results.",
        tags: ["AWS", "Terraform", "AWS Glue", "DynamoDB", "Docker", "Python", "React", "React Native"]
    },
    {
        company: "The Big Video Company",
        title: "Founder, CTO, Interim CEO",
        startDate: "2014-03-01",
        endDate: "2020-09-01",
        current: false,
        description: "Founded the company and developed a patented video compression software (EOOVI) supporting seamless 4K video delivery over low-bandwidth connections. Built a PaaS platform with deep integration into video delivery pipelines. Managed stakeholders and grew the team.",
        tags: ["AWS", "Terraform", "Node", "React", "React Native", "Java", "Docker", "C++", "C", "Stakeholder Management"]
    },
    {
        company: "Various",
        title: "Consultant / Software Engineer",
        startDate: "2008-01-01",
        endDate: null,
        current: false,
        description: "Consulted for various companies and individuals, providing software engineering and consulting services. More details on request.",
        tags: ["Various"]
    }
];

const description = `Over the past 19 years, I have cultivated a dynamic career in the technology sector, marked by a successful entrepreneurial journey of founding, scaling, and divesting a tech startup, as well as a rewarding tenure as a contractor. My passion for delivering functional, high-quality products is matched by my drive for achieving exceptional results. I thrive in leadership roles, having effectively guided both compact and extensive remote teams through complex projects. My expertise is not confined to any single platform; I excel across Web, Mobile, and Desktop environments.

My professional journey has allowed me to collaborate with some of the world's most renowned brands, executing projects that exceed expectations. My industry experience is vast, spanning Banking, Startups, Healthcare, and more, which has honed my ability to adapt and excel in diverse settings. As a proactive and adaptable team player, I am skilled at identifying potential challenges early, proposing innovative solutions, and navigating specifications with agility to ensure project success.

Technically, my core competencies lie in JavaScript and Python, with extensive experience in frameworks such as React, React Native, FastAPI, Django, and Postgres. Over the last five years, I have placed a significant emphasis on mastering these technologies, alongside expanding my expertise into emerging languages like Rust and Go. My dedication to staying abreast of the latest industry trends underscores my role as a Full Stack Developer, where I find equal satisfaction in front-end, back-end, and infrastructure development.
`


const techStack = [
    {
        "dicipline": "Front End",
        "technologies": ["React", "React Native", "Typescript", "Node", "Python", "Django", "TailwindCSS", "NextJS", "Vue", "Svelte"]
    },
    {
        "dicipline": "Back End",
        "technologies": ["Node", "Python", "FastAPI", "Django", "Postgres", "MySQL", "MongoDB", "Redis", "GraphQL", "REST", "Golang", "Rust"]
    },
    {
        "dicipline": "Infrastructure",
        "technologies": ["AWS", "Terraform", "Docker", "Kubernetes", "GCP", "Github", "Gitlab", "CircleCI", "Jenkins", "Pulumi"]
    }, 
    {
        "dicipline": "AI/ML",
        "technologies": ["Python", "Rust", "Tensorflow", "Pytorch", "Keras", "Scikit-learn", "OpenCV", "Numpy", "Pandas", "SciPy"]
    }
]

export async function GET(request: Request) {

    console.log(request.url)

    const oldestDate = new Date(Math.min(...experience.map(e => new Date(e.startDate).getTime())));
    const today = new Date();
    const diff = today.getTime() - oldestDate.getTime();
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Average month length
    const years = Math.floor(months / 12);

    const timeInIndustry = {
        years,
        months: months % 12,
        days: Math.floor(days % 30.44),
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
    };

  return NextResponse.json({ 
    name: "Paul Gardiner",
    email: "me@paulg.io",
    github: "https://github.com/mooncitizen",
    timeInIndustry: timeInIndustry,
    description: description,
    techStack: techStack,
    experience: experience,
  });
}