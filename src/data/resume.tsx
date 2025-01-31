import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
// import { title } from "process";

export const DATA = {
  name: "Hassan Ali Siddiqui",
  initials: "HS",
  url: "https://hassanexe.vercel.app",
  location: "Lahore, Punjab PK.",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "Software Engineer that loves doing Frontend. I love building things and helping people. Very active on Socials.",
  summary: "In 2023, I decided to go all-in on my love for web development, diving deep into the MERN stack, but with a special place in my heart for frontend magic. I’m always exploring the cutting edge of tech, which led me to the world of Web3, crypto, and blockchain. Building eCommerce sites with crypto payment gateways? Yep, I’ve done that! Right now, I’m having a blast learning Next.js, and I can’t wait to get my hands on Three.js to bring some 3D magic to the web.",
  avatarUrl: "/hassan2.gif",
  skills: [
    "ReactJs",
    "Next.js",
    "ElectronJs",
    "Express",
    "Node.js",
    "MongoDB",
    "Supabase",
    "Javascript",
    "Python",
    "Flutter",
    "Wordpress",
    "Shopify",
    "Java",
    "C",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hassansiddiqui740@gmail.com",
    tel: "+923099995169",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hassanaly18",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hassan-siddiqui-110373234/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Insta: {
        name: "Insta",
        url: "https://www.instagram.com/hassan._.aly",
        icon: Icons.instagram,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=hassansiddiqui740@gmail.com&su=Subject%20Here&body=I%20guess%20you%20liked%20my%20work",
        icon: Icons.facebook,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "https://shorturl.at/1flv7",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "H2H Technical Sercvices",
      href: "https://h2htechservices.com",
      badges: [],
      location: "Deira, Dubai.",
      title: "Web Developer",
      logoUrl: "/h2h_black2.png",
      start: "Nov 2024",
      end: "Dec 2024",
      description:
        "Developed the [H2H Technical Services Website](https://h2htechservices.com) for the Dubai based Construction and Renovation Company on Next.Js.",
    },
    {
      company: "Apple Land Pvt. Ltd.",
      href: "https://www.linkedin.com/posts/hassan-siddiqui-110373234_webdevelopment-electronjs-databasedesign-activity-7276521889190076416-aP7g",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Desktop App Developer",
      logoUrl: "/appleland.png",
      start: "Sep 2024",
      end: "Oct 2024",
      description:
        "Developed the CMS for AppleLand Store, using ElectronJS, ReactJS, and Supabase. They ca now manage their iPhone's stock, orders, and customers easily, with the integration of barcode reader, its easy to manage the stock. The software is also automatically generating bills and invoices for the customers.",
    },
    {
      company: "Texlink Engineering Co.",
      href: "https://texl-pak.vercel.app",
      badges: [],
      location: "Lahore, Pakistan.",
      title: "Web App Developer",
      logoUrl: "/texl.png",
      start: "Sep 2024",
      end: "Oct 2024",
      description:
        "Implemented their Web App for their clients to communicate with them and for them to have an online professional presence.",
    },
    {
      company: "Apple Land Pvt. Ltd",
      href: "https://applelandstore.pk",
      badges: [],
      location: "Lahore, Pakistan.",
      title: "Ecommerce Store Developer",
      logoUrl: "/appleland.png",
      start: "Dec 2023",
      end: "Present",
      description:
        "Implemented their eCommerce website tat is responsive. Helped them reach the level of sales that they never thought of. Eye catching landing page and attention grabbing animations!",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Store Developer",
      logoUrl: "/shopify.svg",
      start: "Jan 2022",
      end: "Present",
      description:
        "Have developed various shopify stores for various businesses acros the globe",
    },
    {
      company: "WooCommerce",
      href: "https://woocommerce.com/",
      badges: [],
      location: "Remote",
      title: "Store Developer",
      logoUrl: "/woocommerce.jpg",
      start: "",
      end: "",
      description:
        "Developed various WooCommerce, Shoppress stores for local businesses in Pakistan",
    },
    {
      company: "PakHomes",
      href: "",
      badges: [],
      location: "Pakistan",
      title: "App Developer/Co-founder",
      logoUrl: "/pakhomes.png",
      start: "",
      end: "Dec 2023",
      description:
        "Co-developed a prototype Android App(Flutter) with another colleague in COMSATS for the PakHomes App, streamlining and making it simple for Pakistani people to buy, sell and rent Real Estate properties",
    },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "COMSATS University Islamabad, LHR.",
      href: "https://lahore.comsats.edu.pk",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/cui.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Punjab Group of Colleges",
      href: "https://pgc.edu",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/pgc.png",
      start: "2019",
      end: "2021",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Bit-Byte",
      href: "https://bit-byte.us",
      dates: "Jan",
      active: true,
      description:
        "Developed the [Bit-Byte Website](https://bit-byte.us) for the US based Embedded Firmware Development Company through Upwork.",
      technologies: ["HTML", "Bootstrap", "JavaScript", "Vercel", "Github"],
      links: [
        {
          type: "Website",
          href: "https://bit-byte.us",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/bb.png",
    },
    {
      title: "H2H Technical Services",
      href: "https://h2htechservices.com",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Developed the [H2H Technical Services Website](https://h2htechservices.com) for the Dubai based Construction and Renovation Company on Next.Js.",
      technologies: ["Next.js", "Framer Motion", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://h2htechservices.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/h2h.gif",
    },
    {
      title: "Apple Land CMS",
      href: "https://www.linkedin.com/posts/hassan-siddiqui-110373234_webdevelopment-electronjs-databasedesign-activity-7276521889190076416-aP7g",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Developed the CMS for AppleLand Store, using ElectronJS, ReactJS, and Supabase. They ca now manage their iPhone's stock, orders, and customers easily, with the integration of barcode reader, its easy to manage the stock. The software is also automatically generating bills and invoices for the customers.",
      technologies: ["ElectronJS", "ReactJS", "Supabase", "Barcode Reader"],
      links: [
        {
          type: "Desktop App",
          href: "https://www.linkedin.com/posts/hassan-siddiqui-110373234_webdevelopment-electronjs-databasedesign-activity-7276521889190076416-aP7g",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/appleLandCms.gif",
      video: ""
    },
    {
      title: "Texlink Engineering Co.",
      href: "https://texl-pak.vercel.app",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "Developed as Web App for Pakistani Textile Machinery Supply Company Texlink Engineering Co.",
      technologies: ["ReactJS", "Canva", "Vercel", "Tailwind"],
      links: [
        {
          type: "Website",
          href: "https://texl-pak.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/texlgif.gif",
    },
    {
      title: "Bit-Donate",
      href: "https://bit-donate-react.vercel.app",
      dates: "Aug 2024",
      active: true,
      description:
        "With the release of the [Cryptomus-Crypto Payment Gateway](https://cryptomus.com/gateway), I decided to build a site which allows donors to donate to help peopel in Gaza, Palestine, through cryptocurrencies. This is a great way to help those in Palestine.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://bit-donate-react.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
             type: "Source",
             href: "https://github.com/hassanaly18/BitDonate-React",
             icon: <Icons.github className="size-3" />,
           },
      ],
      image: "",
      video: "/bit.gif",
    },
    {
      title: "Apple Land Store",
      href: "https://applelandstore.pk",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Developed as an Ecommerce store for Pakistani market of dominantly iPhone users, [Apple Land Store](https://applelandstore.pk)",
      technologies: ["WooCommerce", "ShopPress", "Elementor"],
      links: [
        {
          type: "Website",
          href: "https://applelandstore.pk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/applegif.gif",
    },
    {
      title: "PakHomes",
      href: "",
      dates: "Sep 2023 - Dec 2023",
      active: true,
      description:
        "Developed for easing the process of finding and selling properties in Pakistan",
      technologies: ["Flutter", "Firebase", "Canva", "Pub Dev"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "pakh.gif",
    },
    {
      title: "Shopify Dropshipping Stores",
      href: "https://shopify.com",
      dates: "April 2023 - Present",
      active: true,
      description:
        "Developed various Shopify Dropshipping Stores integrating Zendrop, Zambeel, Tradelle.io for different clients arounf the globe",
      technologies: ["Shopify", "Canva", "Paypal", "Cryptomus", "Stripe"],
      links: [
        {
          type: "Website",
          href: "https://shopify.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/shopify.gif",
    },
    
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
