import { Presentation, Component, CodeXml, BugPlay, Rocket, ServerCog, Puzzle, Gauge, Award, MoveRight, PackageSearch, ShoppingCart } from "lucide-react";


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
        "/images/A modern workspace featuring a computer with web design software.png",
      hero_alt_img:
        "A modern workspace featuring a computer with web design software",
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
      ], 
      featuredImage: "/images/A man focused on his work, using a laptop and an external keyboard at a desk.png",
      altImg: "A man focused on his work, using a laptop and an external keyboard at a desk",
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
  eCommerce: {
    slug: "e-commerce",
    hero: {
      preheader: "E-Commerce Solutions That Drive Sales",
      title: "E-Commerce Website Development",
      subheader:
        "We build secure, high-converting online stores that streamline your sales, engage shoppers, and turn single visits into loyal repeat customers.",
      primary_btn_label: "Get Free Quote",
      primary_btn_link: "/contact-us/",

      hero_img:
        "/images/A diverse group collaborating on customer experience management.png",
      hero_alt_img:
        "A diverse group collaborating on customer experience management",
    },
    coreValues: {
      coreValue1: {
        id: 1,
        featuredIcon: "/images/custom storefront icon.png",
        title: "Custom Storefront Icon",
      },
      coreValue2: {
        id: 2,
        featuredIcon: "/images/mobile shopping icon.png",
        title: "Mobile Shopping Optimized",
      },
      coreValue3: {
        id: 3,
        featuredIcon: "/images/secure payment icon.png",
        title: "Secure Payment Gateways",
      },
      coreValue4: {
        id: 4,
        featuredIcon: "/images/checkout flow icon.png",
        title: "Fast Checkout Flow",
      },
      coreValue5: {
        id: 5,
        featuredIcon: "/images/inventory management icon.png",
        title: "Inventory Management",
      },
      coreValue6: {
        id: 6,
        featuredIcon: "/images/seamless scalability icon.png",
        title: "Seamless Scalability",
      },
    },
    overView: {
      col1: {
        preheader: "Overview",
        title: "Turn Casual Browsers Into Loyal Buyers",
        subheader:
          "In the competitive e-commerce landscape, an online store needs to deliver more than just a product catalog. We craft seamless digital shopping experiences designed to eliminate checkout friction, maximize average order value, and scale with your revenue.",
        checkList: [
          "Intuitive navigation that helps customers find products instantly",
          "Fast-loading product pages optimized for search visibility",
          "Frictionless, one-page checkout experiences that reduce cart abandonment",
          "Integrated payment gateways and secure transaction processing",
          "Easy-to-use admin dashboards for effortless product and inventory tracking",
        ],
      },
      col2: {
        featuredImage:
          "/images/A person analyzing various eCommerce platforms on a laptop.png",
        altImg:
          "A person analyzing various eCommerce platforms on a laptop",
      },
      blurbImageWidget: {
        title:
          "Ready to Launch Your Store? Let's build a profitable e-commerce experience together!",
        buttonLink: "/contact-us",
        buttonLabel: "Let's Get Started",
      },
    },
    process: {
      preheader: "Our Process",
      title: "A Data-Driven Process for Scalable E-Commerce",
      subheader1:
        "At UpstreamTeches, we approach e-commerce development with a focus on conversions and operational efficiency. We combine strategic UI/UX design, robust technical infrastructure, and e-commerce SEO to ensure your store attracts qualified traffic and converts visits into revenue.",
      subheader2:
        "",
      workflowProcess: [
        {
          id: 1,
          icon: <Presentation />,
          title: "Store Strategy & Planning",
          description:
            "We analyze your product catalog, target buyers, and sales channels.",
        },
        {
          id: 2,
          icon: <Component />,
          title: "UX/UI Storefront Design",
          description:
            "We design conversion-focused product pages and intuitive site navigation.",
        },
        {
          id: 3,
          icon: <CodeXml />,
          title: "E-Commerce Development",
          description:
            "We build your store with clean code, secure payment logic, and API integrations.",
        },
        {
          id: 4,
          icon: <BugPlay />,
          title: "Testing & Security Audit",
          description:
            "We test checkout flows, speed performance, and payment gateways rigorously.",
        },
        {
          id: 5,
          icon: <Rocket />,
          title: "Store Launch & Setup",
          description: "We deploy your store smoothly with domain, SSL, and analytics tracking in place.",
        },
        {
          id: 6,
          icon: <ServerCog />,
          title: "Growth & Optimization",
          description:
            "We provide continuous monitoring, security updates, and performance optimization.",
        },
      ],
    },
    whyChooseUs: {
      preheader: "Why Choose Us",
      title: "Better E-Commerce Store. Higher Sales.",
      subheader: "We don't just set up templates; we engineer fully customizable e-commerce growth engines tailored to your inventory and customer purchasing habits.",
      iconWidgets: [
        {
          id: 1,
          featuredIcon: <PackageSearch />,
          title: "Custom Store Architecture",
          detail: "Tailored store layouts designed around your specific product catalog and sales strategy.",
        },
        {
          id: 2,
          featuredIcon: <Gauge />,
          title: "Conversion-Focused Engineering",
          detail: "Optimized page speeds, streamlined checkout flows, and strategic calls-to-action that drive sales.",
        },
        {
          id: 3,
          featuredIcon: <ShoppingCart />,
          title: "Scalable E-Commerce Growth",
          detail: "Modern infrastructure built to handle high traffic surges and expanding inventory effortlessly.",
        }
      ],
      featuredImage: "/images/A woman sits on the floor surrounded by cardboard boxes.png",
      altImg: "A woman sits on the floor surrounded by cardboard boxes",
    },
    marketingBanner: {
      icon: <Rocket />,
      preheader: "Ready to Start Selling Online?",
      title: "Let’s Build a High-Converting Online Store for Your Business",
      btnLabel: "Get Started Today",
      btnIcon: <MoveRight />,
      btnLink: "/contact/#get-in-touch"
    }
  }
};

export default ServicesData;