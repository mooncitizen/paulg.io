"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function Home() {
  // Tech stack data
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "React Native", "Tailwind", "SASS", "Storybook", "Jest"]
    },
    {
      name: "Backend",
      skills: ["Python", "Node.js", "Rust", "Golang", "Serverless", "FastAPI", "Django"]
    },
    {
      name: "Infrastructure",
      skills: ["AWS", "GCP", "Azure", "Terraform", "Pulumi", "Docker", "Kubernetes"]
    },
    {
      name: "Database",
      skills: ["Postgres", "MongoDB", "DynamoDB", "DocumentDB", "Aurora", "Athena"]
    },
    {
      name: "AI/ML",
      skills: ["Hugging Face", "TensorFlow", "Machine Learning"]
    }
  ];

  // Work experience data
  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "ITTYBIT Ltd",
      period: "Jan 2022 - Present",
      description: "Established the technical vision and strategy, overseeing the development roadmap from MVP through to the full 1.0 release. Coordinated infrastructure planning using Terraform and implemented CI/CD pipelines with GitHub Actions in a serverless environment. Built and managed cross-functional teams, focusing on knowledge sharing and collaborative development practices. Responsible for technical hiring, mentoring engineers, and aligning technology decisions with business objectives. Hold an ownership stake in the recently invested company.",
      technologies: "GCP, Github, React, Node, Typescript, DNS, Python, Docker, ECS, Postgres, Firebase, CICD, Datastore, Big Query, AI, ML, Terraform"
    },
    {
      title: "Principal Engineer",
      company: "One Compliance",
      period: "Jan 2023 - Mar 2024",
      description: "Created a phishing platform application with tools that interrogates dns, smtp and http as well as looks for identifiable information in the dark web. Using machine learning models to detect changes in data and potential problems arising from formatted information. Was solely responsible for delivering this project.",
      technologies: "Azure, Github, React, Node, Typescript, DNS, Python, Docker, ECS, Postgres, Firebase, CICD"
    },
    {
      title: "Principal Engineer",
      company: "Lodestone Security",
      period: "May 2022 - Jan 2023",
      description: "In this position I helped maintain and develop the core infrastructure using Terraform and assisted in enhancing the API that was build in Python using the Fastapi framework. I then solely developed two front end systems that would allow non api users to access the platform which I built in React using Tailwindcss for styling.",
      technologies: "AWS, Terraform, Github, React, Node, Typescript, DNS, Python, Docker, ECS, Postgres"
    },
    {
      title: "Principal Engineer",
      company: "NYE Health",
      period: "January 2022 - May 2022",
      description: "Brought in as a contractor to assist in modernising their stack and automate the infrastructure. I did this by utilising Pulumi as it was a low cost and easier platform for juniors to pick up and utilise in their code with limited knowledge, which was the requirement.",
      technologies: "AWS, Pulumi, React, Node, Typescript, Postgres, Python, Docker"
    },
    {
      title: "Front End Engineer",
      company: "BBC",
      period: "June 2021 - December 2021",
      description: "In this position I was originally brought in to move their content site for the Top Gear TV show from drupal to a headless cms system. The front end was written in React and had utilities such as storybooks and jest and was deployed via jenkins.",
      technologies: "AWS, Terraform, Github, React, Node, Typescript, DNS, Docker, ECS, Headless CMS"
    },
    {
      title: "Founder, CTO, Interim CEO",
      company: "The Big Video Company",
      period: "March 2014 - September 2020",
      description: "Having developed a video compression software in my spare time over the previous 10 years I formed a company that now has 5 board members and 5 members of staff working to continuously support the platform that I created. This software also known as EOOVI was developed mostly by myself as a Platform (PaaS) which includes deep integration into a video delivery pipeline.",
      technologies: "AWS, Terraform, Node, React, React Native, Java, Docker, C++, C, Stakeholder Management"
    }
  ];

  return (
    <>
      <Header />
      
      <article className="w-full">
        <section id="home" className="min-h-[70vh] flex flex-col justify-center w-full" aria-labelledby="hero-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-indigo-600 animate-float-slow inline-block">Paul Gardiner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Software Engineer & CTO at Ittybit
            </p>
            <p className="max-w-3xl text-gray-700 dark:text-gray-300">
              With 19 years in the technology sector, I&apos;ve led teams across startups and major organizations, 
              delivering exceptional products for world-renowned brands. My expertise spans Web, Mobile, and Desktop 
              environments, with a passion for creating functional, high-quality solutions.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors mr-4"
                aria-label="Contact Paul Gardiner"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-transparent border border-gray-300 hover:border-indigo-600 px-6 py-3 rounded-md font-medium transition-colors backdrop-blur-sm bg-white/10 dark:bg-black/10"
                aria-label="View Paul&apos;s work"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-20" aria-labelledby="about-heading">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-600"></div>
            
            <div className="flex items-center mb-8 space-x-2">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
                P
              </div>
              <h2 id="about-heading" className="text-3xl font-bold">About Me</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  👋 Hello! I&apos;m a passionate technologist with <span className="font-semibold text-indigo-600">19 years</span> in the industry. 
                  I&apos;ve had the exciting journey of founding and scaling a tech startup, while also enjoying rewarding work as a contractor.
                </p>
                <p className="text-lg leading-relaxed">
                  ✨ I love creating high-quality products that solve real problems. Leading teams is where I thrive - 
                  whether it&apos;s small focused groups or large remote teams tackling complex challenges.
                </p>
                <p className="text-lg leading-relaxed">
                  🌐 My experience spans across Banking, Healthcare, and various Startups, which has taught me 
                  to adapt quickly and find creative solutions in diverse settings.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center space-x-2">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                    💻
                  </span>
                  <span>What I Do</span>
                </h3>
                <p className="text-lg leading-relaxed">
                  I&apos;m a Full Stack Developer who enjoys tackling challenges across the entire development spectrum. 
                  My core strengths are in JavaScript and Python, with extensive experience in React, React Native, 
                  FastAPI, and Django.
                </p>
                <p className="text-lg leading-relaxed">
                  Recently, I&apos;ve been exploring Rust and Go while continuing to deepen my expertise in my favorite tools and frameworks.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Full Stack", "Frontend", "Backend", "Infrastructure", "AI/ML"].map((skill, index) => (
                    <span 
                      key={skill} 
                      className={`bg-indigo-100/40 dark:bg-indigo-900/30 backdrop-blur-xs px-4 py-2 rounded-full text-sm font-medium animate-float`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-20" aria-labelledby="skills-heading">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-xl shadow-lg relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-indigo-500/30 dark:bg-indigo-500/20 animate-float-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-500/20 dark:bg-blue-500/10 animate-float"></div>
            
            <div className="flex items-center mb-8 space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xl">
                🧠
              </div>
              <h2 id="skills-heading" className="text-3xl font-bold">Skills & Technologies</h2>
            </div>
            
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
              My toolkit has evolved over 19 years of software development, with a focus on these core technologies:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <div 
                  key={category.name} 
                  className="space-y-3 p-4 rounded-lg bg-white/20 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-indigo-100/30 dark:border-indigo-900/30"
                >
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 flex items-center">
                    {getCategoryIcon(category.name)}
                    <span className="ml-2">{category.name}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <span 
                        key={skill} 
                        className="bg-white/20 dark:bg-white/10 backdrop-blur-xs px-3 py-1 rounded-full text-sm animate-float"
                        style={{ 
                          animationDelay: `${(categoryIndex * 5 + index) * 0.05}s`,
                          background: `linear-gradient(to right, rgba(255,255,255,0.1), rgba(${99 + categoryIndex * 20}, ${99 + categoryIndex * 20}, ${255 - categoryIndex * 20}, 0.2))`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="py-20" aria-labelledby="experience-heading">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-xl shadow-lg relative"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-bl-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/5 rounded-tr-[100px]"></div>
            
            <div className="flex items-center mb-10 space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white text-xl">
                💼
              </div>
              <h2 id="experience-heading" className="text-3xl font-bold">Experience</h2>
            </div>
            
            <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-indigo-600 before:to-blue-500 before:rounded-full">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={`${exp.company}-${exp.period}`} 
                  className="relative group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[40px] top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform"></div>
                  
                  <div className="space-y-2 pl-4 pb-6 border-l-2 border-indigo-100 dark:border-indigo-900/30 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 transition-colors">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 pt-2">{exp.description}</p>
                    
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.split(', ').map((tech, i) => (
                          <span 
                            key={`${exp.company}-${tech}-${i}`}
                            className="text-xs px-2 py-1 bg-white/30 dark:bg-white/5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-20" aria-labelledby="projects-heading">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-xl shadow-lg relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-indigo-500/20"></div>
              <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-blue-500/10"></div>
            </div>
            
            <div className="flex items-center mb-10 space-x-2 relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl">
                🚀
              </div>
              <h2 id="projects-heading" className="text-3xl font-bold">Highlighted Projects</h2>
            </div>
            
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              These projects showcase my ability to build complex systems and innovative solutions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="group border border-white/20 dark:border-white/10 rounded-xl overflow-hidden bg-white/10 dark:bg-black/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <span className="relative z-10 text-4xl font-bold text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">Ittybit</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Serverless Platform Development</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A team effort moving from MVP to full 1.0 release, building a resilient serverless environment on GCP. The development team implemented Docker containerization for enhanced platform portability and redundancy, with a focus on collaborative problem-solving and knowledge sharing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["GCP", "React", "Node.js", "Terraform", "Python"].map((tech) => (
                      <span key={tech} className="text-xs bg-indigo-100/30 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-gray-100/50 dark:border-gray-800/50 mt-2">
                    <div className="flex items-center space-x-1 text-indigo-600 dark:text-indigo-400">
                      <span className="text-sm font-medium">Current Role</span>
                      <span>🔥</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="group border border-white/20 dark:border-white/10 rounded-xl overflow-hidden bg-white/10 dark:bg-black/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-900/40 dark:to-purple-900/40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <span className="relative z-10 text-4xl font-bold text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">EOOVI</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Video Compression Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Patent-pending video compression technology enabling 4K video delivery on 1-2mb connections. 
                    Developed as a Platform (PaaS) with deep integration into video delivery pipelines.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["AWS", "Node.js", "C++", "React", "Docker"].map((tech) => (
                      <span key={tech} className="text-xs bg-indigo-100/30 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-gray-100/50 dark:border-gray-800/50 mt-2">
                    <div className="flex items-center space-x-1 text-indigo-600 dark:text-indigo-400">
                      <span className="text-sm font-medium">Patented Technology</span>
                      <span>✨</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="py-20" aria-labelledby="contact-heading">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-xl shadow-lg relative overflow-hidden"
          >
            {/* Decorative shapes */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl"></div>
            
            <div className="flex items-center mb-8 space-x-2 relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white text-xl">
                ✉️
              </div>
              <h2 id="contact-heading" className="text-3xl font-bold">Let&apos;s Connect</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 relative">
              <div className="space-y-6">
                <p className="text-lg">
                  I&apos;m always open to discussing new projects, opportunities, or partnerships.
                  Feel free to reach out if you&apos;d like to work together!
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <a 
                        href="mailto:me@paulg.io" 
                        className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                      >
                        me@paulg.io
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-medium">Edinburgh, UK</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-lg"></div>
                <div className="relative p-6 rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="flex gap-4 mb-6">
                    <a 
                      href="https://github.com/mooncitizen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/piloate" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://bsky.app/profile/paulg.io" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 600 530" aria-hidden="true">
                        <path d="M497.755127,470.744995 C485.020508,483.933563 472.004242,496.230164 456.677277,505.861084 C441.365479,515.482483 425.079437,522.303406 406.705383,521.900757 C389.602600,521.526123 374.803009,514.820496 362.017303,503.530273 C338.982605,483.189880 325.491089,456.689789 314.113556,428.909454 C309.944763,418.730591 306.657318,408.191498 302.924957,397.832184 C302.560944,396.821869 301.893585,395.920868 300.820892,393.981903 C299.330048,397.986694 298.085297,401.044708 297.044586,404.170624 C287.765533,432.041504 276.515869,459.017548 258.944946,482.797150 C245.718781,500.696716 229.951324,515.473328 207.125809,520.483093 C192.149918,523.770020 177.973679,521.144287 164.078598,515.556274 C138.354965,505.211273 118.806931,486.614990 100.521988,466.754303 C87.137993,452.216949 77.181564,435.187927 74.335983,415.268005 C71.956177,398.608643 76.104729,383.044800 86.816048,369.731537 C106.220131,345.613800 133.414886,335.057587 161.991333,326.996521 C163.359940,326.610474 164.711517,326.164032 166.046005,325.000305 C160.418030,325.000305 154.780624,325.212433 149.163696,324.963196 C125.999908,323.935455 103.559013,319.868378 82.613327,309.256317 C53.304012,294.406860 34.953224,270.618530 26.377338,239.359528 C23.679420,229.525635 23.317982,219.040085 22.018356,208.836090 C20.612564,197.798523 19.265915,186.751602 18.072855,175.689407 C17.227476,167.850937 16.663912,159.981689 16.003172,152.123779 C14.667380,136.237762 12.951276,120.370575 12.137438,104.457497 C11.298490,88.053436 10.400308,71.551888 11.302755,55.190880 C12.033246,41.947414 16.327457,29.259668 26.747292,19.755520 C32.198025,14.783790 38.712654,12.231097 45.919098,10.965860 C64.736229,7.662127 81.785431,13.929002 98.340469,21.258774 C118.597145,30.227453 136.684372,42.821758 153.130081,57.673885 C162.457077,66.097107 172.077972,74.277138 180.677505,83.404297 C193.424057,96.932953 205.941422,110.757614 217.539108,125.269249 C233.615707,145.385132 249.284744,165.877884 264.101440,186.931915 C274.364532,201.515427 282.946472,217.287216 292.171448,232.593231 C295.183014,237.590057 297.853607,242.792374 300.941162,248.372314 C303.390564,244.103027 305.787354,240.159851 307.962067,236.097809 C324.993835,204.285172 345.299042,174.619064 367.416870,146.193466 C378.075745,132.494766 389.180756,119.115196 400.614807,106.056061 C410.749695,94.480766 421.148071,83.055229 432.266113,72.439102 C453.377899,52.280392 475.929352,33.921131 502.787903,21.648512 C516.490906,15.387114 530.631287,10.285848 545.828247,10.109745 C569.875427,9.831087 583.471313,21.912401 588.854614,44.675606 C592.492432,60.057838 591.610962,75.814095 590.062744,91.476868 C589.527832,96.888031 589.353882,102.334572 588.999756,107.763962 C588.002563,123.052612 587.215942,138.359085 585.936584,153.624176 C584.525696,170.459686 583.090820,187.314331 580.866272,204.054321 C578.792114,219.662567 577.828369,235.509644 572.048340,250.485138 C562.958557,274.036102 548.045227,292.529572 526.187927,305.416412 C509.668793,315.155975 491.909760,321.013855 472.906372,322.948242 C460.602966,324.200684 448.239929,324.867737 436.439728,325.756714 C442.743805,327.699799 449.845001,329.619019 456.757538,332.070190 C476.773499,339.167816 495.693909,348.330902 510.482300,364.082367 C523.696045,378.156616 530.251709,395.072510 527.809937,414.388611 C525.774536,430.489929 518.467773,444.742004 508.758514,457.666901 C505.412140,462.121613 501.602386,466.228271 497.755127,470.744995 z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                    © {new Date().getFullYear()} Paul Gardiner. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </article>
    </>
  );
}

function getCategoryIcon(category: string) {
  switch(category) {
    case "Frontend":
      return <span className="text-lg">🎨</span>;
    case "Backend":
      return <span className="text-lg">⚙️</span>;
    case "Infrastructure":
      return <span className="text-lg">🏗️</span>;
    case "Database":
      return <span className="text-lg">🗄️</span>;
    case "AI/ML":
      return <span className="text-lg">🤖</span>;
    default:
      return <span className="text-lg">✨</span>;
  }
}
