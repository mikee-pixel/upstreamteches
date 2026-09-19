import { Presentation, Component, CodeXml, BugPlay, Rocket, ServerCog, Puzzle, Gauge, Award, MoveRight, PackageSearch, ShoppingCart, FileSearchCorner, ChartPie, ChartNoAxesCombined, Brain, Eye, Link, MapPinHouse, Layers2, FileKey, Shapes, Sparkle, PenTool, FileImage, TicketSlash, PackageOpen, Rotate3D, Target, FastForward } from "lucide-react";


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
      btnLink: "/contact-us/#get-in-touch"
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
      btnLink: "/contact-us/#get-in-touch"
    }
  },
  seo: {
    slug: "seo",
    hero: {
      preheader: "Dominate Search Engine Rankings",
      title: "Search Engine Optimization Services",
      subheader:
        "We build data-driven SEO strategies that elevate your search visibility, drive qualified organic traffic, and turn search rankings into predictable revenue.",
      primary_btn_label: "Get Free SEO Audit",
      primary_btn_link: "/contact-us/",

      hero_img:
        "/images/A digital marketing team in Delhi discussing SEO strategies with charts and graphs displayed on a laptop screen.png",
      hero_alt_img:
        "A digital marketing team in Delhi discussing SEO strategies with charts and graphs displayed on a laptop screen",
    },
    coreValues: {
      coreValue1: {
        id: 1,
        featuredIcon: "/images/high intent keywords icon.png",
        title: "High-Intent Keywords",
      },
      coreValue2: {
        id: 2,
        featuredIcon: "/images/technical seo audits icon.png",
        title: "Technical SEO Audits",
      },
      coreValue3: {
        id: 3,
        featuredIcon: "/images/on page optimization icon.png",
        title: "On-Page Optimization",
      },
      coreValue4: {
        id: 4,
        featuredIcon: "/images/content strategy icon.png",
        title: "Content Strategy",
      },
      coreValue5: {
        id: 5,
        featuredIcon: "/images/local seo visibility icon.png",
        title: "Local SEO Visibility",
      },
      coreValue6: {
        id: 6,
        featuredIcon: "/images/transparent analytics icon.png",
        title: "Transparent Analytics",
      },
    },
    overView: {
      col1: {
        preheader: "Overview",
        title: "Be Found by Customers Who Are Ready to Buy",
        subheader:
          "Appearing on page one of Google isn't about luck—it's about strategy. We optimize your entire digital footprint so high-value searchers find your business ahead of your competitors, creating a reliable pipeline of organic leads.",
        checkList: [
          "Higher rankings on Google for commercial-intent keywords",
          "Continuous growth in sustainable, non-paid website traffic",
          "Technical site fixes that improve user experience and indexing",
          "Optimized Google Business Profile for dominant local search visibility",
          "Clear, transparent reporting that tracks keyword positions and conversions",
        ],
      },
      col2: {
        featuredImage:
          "/images/A computer screen displaying a search engine results page focused on search engine optimization strategies and tips.png",
        altImg:
          "A computer screen displaying a search engine results page focused on search engine optimization strategies and tips",
      },
      blurbImageWidget: {
        title:
          "Struggling to Rank on Google? Let's uncover your website's hidden ranking potential!",
        buttonLink: "/contact-us",
        buttonLabel: "Let's Get Started",
      },
    },
    process: {
      preheader: "What We Deliver",
      title: "Comprehensive SEO Solutions That Scale Your Reach",
      subheader1:
        "At UpstreamTeches, we don't rely on shortcuts or risky tactics. We execute a balanced, multi-faceted SEO strategy designed to align with search engine algorithms and build lasting domain authority for your brand.",
      subheader2:
        "",
      workflowProcess: [
        {
          id: 1,
          icon: <Brain />,
          title: "Technical SEO",
          description:
            "Site speed enhancement, schema markup, mobile optimization, and crawl error fixes.",
        },
        {
          id: 2,
          icon: <Eye />,
          title: "Keyword Research",
          description:
            "In-depth mapping of high-volume, commercial search terms your buyers use.",
        },
        {
          id: 3,
          icon: <Layers2 />,
          title: "On-Page Optimization",
          description:
            "Strategic refinement of title tags, meta descriptions, headings, and internal links.",
        },
        {
          id: 4,
          icon: <FileKey />,
          title: "Content Strategy",
          description:
            "Creating authoritative, keyword-targeted content that answers buyer queries and ranks fast.",
        },
        {
          id: 5,
          icon: <Link />,
          title: "Authority & Backlinks",
          description: "High-quality outreach strategies to build domain trust and search credibility.",
        },
        {
          id: 6,
          icon: <MapPinHouse />,
          title: "Local SEO Optimization",
          description:
            "Local map pack domination and citation consistency for nearby customer search.",
        },
      ],
    },
    whyChooseUs: {
      preheader: "Why Choose Us",
      title: "Sustainable Rankings. Transparent Growth.",
      subheader: "We eliminate the mystery from SEO with straightforward execution, clear communication, and tracking focused on actual ROI rather than vanity metrics.",
      iconWidgets: [
        {
          id: 1,
          featuredIcon: <FileSearchCorner />,
          title: "White-Hat Strategies",
          detail: "Clean, ethical search engine techniques built for stable, long-term search rankings.",
        },
        {
          id: 2,
          featuredIcon: <ChartPie />,
          title: "Data-Driven Approach",
          detail: "Constant tracking, keyword monitoring, and campaign adjustments guided by real analytics.",
        },
        {
          id: 3,
          featuredIcon: <ChartNoAxesCombined />,
          title: "Dedicated Reporting",
          detail: "Easy-to-understand monthly performance dashboards that highlight rankings, traffic, and leads.",
        }
      ],
      featuredImage: "/images/A vibrant infographic illustrating the growth of digital marketing in India, featuring statistics and key trends..png",
      altImg: "A vibrant infographic illustrating the growth of digital marketing in India, featuring statistics and key trends.",
    },
    marketingBanner: {
      icon: <Rocket />,
      preheader: "Ready to Climb to Page One?",
      title: "Let’s Transform Your Search Visibility into Business Growth",
      btnLabel: "Claim Your Free Audit",
      btnIcon: <MoveRight />,
      btnLink: "/contact-us/#get-in-touch"
    }
  },
  graphicsDesign: {
    slug: "graphic-design",
    hero: {
      preheader: "Visual Marketing That Captivates",
      title: "Professional Graphic Design Services",
      subheader:
        "We craft compelling visual assets and brand identities that capture attention, communicate value, and turn viewers into paying customers.",
      primary_btn_label: "Get Free Design Consultation",
      primary_btn_link: "/contact-us/",

      hero_img:
        "/images/A designer working on a website layout, with a computer screen displaying code and design elements.png",
      hero_alt_img:
        "A designer working on a website layout, with a computer screen displaying code and design elements",
    },
    coreValues: {
      coreValue1: {
        id: 1,
        featuredIcon: "/images/custom brand identity icon.png",
        title: "Custom Brand Identity",
      },
      coreValue2: {
        id: 2,
        featuredIcon: "/images/high quality ad creatives icon.png",
        title: "High-Converting Ad Creatives",
      },
      coreValue3: {
        id: 3,
        featuredIcon: "/images/social media graphics icon.png",
        title: "Social Media Graphics",
      },
      coreValue4: {
        id: 4,
        featuredIcon: "/images/vector and print ready icon.png",
        title: "Vector & Print Ready",
      },
      coreValue5: {
        id: 5,
        featuredIcon: "/images/fast turnaround icon.png",
        title: "Fast Turnaround Times",
      },
      coreValue6: {
        id: 6,
        featuredIcon: "/images/unlimited brand revisions icon.png",
        title: "Unlimited Brand Revisions",
      },
    },
    overView: {
      col1: {
        preheader: "Overview",
        title: "Stand Out in a Crowded Digital Market",
        subheader:
          "Great graphic design does more than just look good—it builds trust and drives business decisions. We design strategic visual assets tailored to your market, ensuring every ad, post, and branding element works to grow your bottom line.",
        checkList: [
          "Modern visual identity that sets your brand apart from competitors",
          "Scroll-stopping ad creatives built specifically to increase click-through rates",
          "Consistent visual branding across all digital and print touchpoints",
          "Clean, professional marketing collateral that builds instant credibility",
          "Dedicated design support that delivers assets on time, every time",
        ],
      },
      col2: {
        featuredImage:
          "/images/A woman wearing headphones is focused on her work at a computer.png",
        altImg:
          "A woman wearing headphones is focused on her work at a computer",
      },
      blurbImageWidget: {
        title:
          "Need Eye-Catching Visuals? Let’s create stunning designs that elevate your brand image today!",
        buttonLink: "/contact-us",
        buttonLabel: "Let's Get Started",
      },
    },
    process: {
      preheader: "What We Deliver",
      title: "Strategic Design Solutions Engineered for Results",
      subheader1:
        "At UpstreamTeches, our design process combines creative artistic execution with marketing psychology. We deliver pixel-perfect visuals that reflect your brand’s core message and engage your target audience.",
      subheader2:
        "",
      workflowProcess: [
        {
          id: 1,
          icon: <Shapes />,
          title: "Brand Identity Design",
          description:
            "Custom logo creation, color palettes, typography, and comprehensive brand style guides.",
        },
        {
          id: 2,
          icon: <Sparkle />,
          title: "High-Converting Ad Creatives",
          description:
            "Eye-catching graphics designed specifically for Google, Meta, and social ad campaigns.",
        },
        {
          id: 3,
          icon: <FileImage />,
          title: "Social Media Assets",
          description:
            "Branded templates, post graphics, banners, and story visuals that build active engagement.",
        },
        {
          id: 4,
          icon: <TicketSlash />,
          title: "Marketing Collateral",
          description:
            "Professional brochures, flyers, pitch decks, business cards, and promotional materials.",
        },
        {
          id: 5,
          icon: <PenTool />,
          title: "Website & UI Graphics",
          description: "Custom icons, banners, and visual elements that enhance your web user experience.",
        },
        {
          id: 6,
          icon: <PackageOpen />,
          title: "Packaging & Label Design",
          description:
            "Retail-ready print packaging design that stands out on shelves and online stores.",
        },
      ],
    },
    whyChooseUs: {
      preheader: "Why Choose Us",
      title: "Creative Vision. Marketing Impact.",
      subheader: "We align graphic design directly with your marketing strategy, creating visual collateral engineered to support traffic, lead generation, and sales goals.",
      iconWidgets: [
        {
          id: 1,
          featuredIcon: <Rotate3D />,
          title: "Marketing-Driven Creativity",
          detail: "Designs built with conversion principles, visual hierarchy, and buyer psychology in mind.",
        },
        {
          id: 2,
          featuredIcon: <Target />,
          title: "Brand Consistency",
          detail: "We ensure every visual asset adheres strictly to your brand guidelines for a polished online presence.",
        },
        {
          id: 3,
          featuredIcon: <FastForward />,
          title: "Scalable Production",
          detail: "Fast turnaround times and flexible design workflows that support your ongoing campaign needs.",
        }
      ],
      featuredImage: "/images/A man focused on his computer screen, creating graphic designs in a modern workspace.png",
      altImg: "A man focused on his computer screen, creating graphic designs in a modern workspace",
    },
    marketingBanner: {
      icon: <Rocket />,
      preheader: "Ready to Transform Your Visual Brand?",
      title: "Let’s Build a Powerful Visual Identity That Drives Results",
      btnLabel: "Get Started Today",
      btnIcon: <MoveRight />,
      btnLink: "/contact-us/#get-in-touch"
    }
  }
};

export default ServicesData;