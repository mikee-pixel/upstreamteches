import { Presentation, Component, CodeXml, BugPlay, Rocket, ServerCog, Puzzle, Gauge, Award, MoveRight } from "lucide-react";


const ServicesData = {
  websiteDevelopment: {
    slug: "website-development",
    hero: {
      preheader: "Digital Marketing That Drives Growth",
      title: "Website Design and Development",
      subheader:
        "We create modern, responsive, and high-performance websites that not only look great but also drive real results for your business.",
      primary_btn_label: "Get a Free Quote",
      primary_btn_link: "/contact-us/",

      hero_img:
        "/images/A group of individuals collaborating on a computer while a crane operates in the background.png",
      hero_alt_img:
        "A group of individuals collaborating on a computer while a crane operates in the background",
    },
    coreValues: {
      coreValue1: {
        id: 1,
        featuredIcon: "/images/modern custom design icon.png",
        title: "Modern & Custom Design",
      },
      coreValue2: {
        id: 2,
        featuredIcon: "/images/responsive website icon.png",
        title: "Fully Responsive",
      },
      coreValue3: {
        id: 3,
        featuredIcon: "/images/seo icon.png",
        title: "SEO Friendly",
      },
      coreValue4: {
        id: 4,
        featuredIcon: "/images/website speed icon.png",
        title: "Fast Loading Speed",
      },
      coreValue5: {
        id: 5,
        featuredIcon: "/images/secure and scable icon.png",
        title: "Secure & Reliable",
      },
      coreValue6: {
        id: 6,
        featuredIcon: "/images/website support icon.png",
        title: "Ongoing Support",
      },
    },
    overView: {
      col1: {
        preheader: "First Impressions Create Lasting Impact",
        title: "First Impressions Create Lasting Impact",
        subheader:
          "Today’s digital landscape requires more than just a site; it needs a growth-driven digital asset. We build websites that elevate your branding, engage visitors, and convert browsers into paying customers.",
        checkList: [
          "Reflects your brand credibility and builds trust",
          "Delivers a seamless user experience across all devices",
          "Optimized from day one for search engine rankings",
          "Fast load speeds that reduce bounce rates",
          "Built to grow as your business expands",
        ],
      },
      col2: {
        featuredImage:
          "/images/A desktop computer, laptop, and tablet showcasing a modern workspace setup.png",
        altImg:
          "A desktop computer, laptop, and tablet showcasing a modern workspace setup",
      },
      blurbImageWidget: {
        title:
          "Have a Project in Mind? Let's Build Something Amazing Together!",
        buttonLink: "/contact-us",
        buttonLabel: "Let's Get Started",
      },
    },
    process: {
      preheader: "Our Process",
      title: "A Proven Process for Outstanding Websites",
      subheader1:
        "At UpstreamTeches, we believe that a successful website is more than just a collection of pages. It's a powerful tool that can help you achieve your business goals. Our comprehensive approach to web development ensures that your website is not only visually appealing but also highly functional and effective.",
      subheader2:
        "Partner with us to bring your digital vision to life. Contact us today to discuss your project requirements.",
      workflowProcess: [
        {
          id: 1,
          icon: <Presentation />,
          title: "Discovery & Planning",
          description:
            "We learn about your business, goals, and target audience.",
        },
        {
          id: 2,
          icon: <Component />,
          title: "Design Phase",
          description:
            "We create modern, user-friendly designs that reflect your brand.",
        },
        {
          id: 3,
          icon: <CodeXml />,
          title: "Development",
          description:
            "Our developers bring the designs to life with clean, efficient code.",
        },
        {
          id: 4,
          icon: <BugPlay />,
          title: "Testing & Review",
          description:
            "We test across all devices and browers to ensure everything works perfectly.",
        },
        {
          id: 5,
          icon: <Rocket />,
          title: "Launch",
          description: "Once everything is approved, we launch your website.",
        },
        {
          id: 6,
          icon: <ServerCog />,
          title: "Support & Maintenance",
          description:
            "We provide ongoing support and updates to keep your website running smoothly.",
        },
      ],
    },
    whyChooseUs: {
      preheader: "Why Choose Us",
      title: "Better Website. Better Results",
      subheader: "We don't just build websites; we build digital growth engines tailored to your business goals and market demands.",
      iconWidgets: [
        {
          id: 1,
          featuredIcon: <Puzzle />,
          title: "Custom Solution",
          detail: "Tailored designs built specifically around your brand and target audience.",
        },
        {
          id: 2,
          featuredIcon: <Gauge />,
          title: "Performance Driven",
          detail: "Fast, secure, and mobile-friendly architecture engineered for high conversions.",
        },
        {
          id: 3,
          featuredIcon: <Award />,
          title: "Affordable Packages",
          detail: "Scalable web design packages built around transparent, competitive pricing.",
        }
      ]
    },
    marketingBanner: {
      icon: <Rocket />,
      preheader: "Ready to Build a Website That Works For You?",
      title: "Let’s Elevate Your Business With a Powerful Online Presence",
      btnLabel: "Get Started Today",
      btnIcon: <MoveRight />,
      btnLink: "/contact/#get-in-touch"
    }
  },
};

export default ServicesData;
