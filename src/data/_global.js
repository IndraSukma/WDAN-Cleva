const data = {
  app: {
    name: "Cleva",
    tagline: "Innovative IT Solutions with Cleva",
    about: [
      "We are an award winning IT support and strategic services company with over 10 years' experience of delivering exceptional service to small and medium sized organisations across all sectors.",
      "Every day over 2,000 people in 100+ companies depend on our support and expertise and we have grown to be a trusted and reliable provider throughout the UK.",
    ],
    copyright: "© 2016 ClevaGroup Ltd. All Rights Reserved",
    rating: 4.6,
    socials: [
      {
        name: "LinkedIn",
        icon: "@img/icons/linkedin-light.svg",
      },
      {
        name: "Facebook",
        icon: "@img/icons/facebook-light.svg",
      },
      {
        name: "Instagram",
        icon: "@img/icons/instagram-light.svg",
      },
      {
        name: "X",
        icon: "@img/icons/x-light.svg",
      },
    ],
  },
  menu: {
    navbar: [
      {
        id: "services",
        title: "Services",
        isDropdown: true,
      },
      {
        id: "aboutUs",
        title: "About Us",
        isDropdown: false,
      },
      {
        id: "caseStudies",
        title: "Case Studies",
        isDropdown: false,
      },
      {
        id: "careers",
        title: "Careers",
        isDropdown: false,
      },
      {
        id: "blog",
        title: "Blog",
        isDropdown: false,
      },
    ],
    footer: [
      {
        title: "Services",
        lists: [
          "IT Support",
          "Professional Services",
          "Cyber Security",
          "Communications",
          "Cloud Solutions",
          "Intelligence",
        ],
      },
      {
        title: "Company",
        lists: ["About Us", "Contact Us", "Case Studies", "Carrers at Cleva"],
      },
      {
        title: "Resources",
        lists: [
          "Client Portal",
          "Blog",
          "Help Center",
          "Terms & Conditions",
          "Privacy Policy",
        ],
      },
    ],
  },
  services: [
    {
      title: "IT Support",
      desc: "Tincidunt curabitur cursus augue rhoncus enim varius. Vehicula in etiam magna lorem orci.",
      icon: "dns",
    },
    {
      title: "Communications",
      desc: "Sit sit integer egestas diam pellentesque pellentesque sed. Egestas iaculis eget neque ut etiam.",
      icon: "group",
    },
    {
      title: "Professional Services",
      desc: "Auctor proin nulla sit vitae euismod fermentum a elit a. Turpis sed sit sem vestibulum facilisis habitant.",
      icon: "encrypted",
    },
    {
      title: "Cloud Solutions",
      desc: "Duis fringilla magna feugiat non blandit scelerisque curabitur vel. Mauris eget consequat id urna varius.",
      icon: "chat",
    },
    {
      title: "Cyber Security",
      desc: "Sagittis vel imperdiet nisl velit et nunc leo venenatis. Diam sed pulvinar facilisis nunc in consectetur.",
      icon: "cloud",
    },
    {
      title: "Intelligence",
      desc: "Fames integer risus ac dolor consequat amet interdum. Quisque morbi potenti quisque cursus.",
      icon: "lightbulb",
    },
  ],
  benefits: [
    {
      title: "Fast Response Times",
      desc: "Super fast service desk with an industry leading average wait time of under 13 seconds",
      icon: "electric_bolt",
    },
    {
      title: "Fully Accredited",
      desc: "Microsoft Gold Partner, ISO 27001 & 9001 Accredited, CompTIA Managed Services and 3CX Silver Partner",
      icon: "editor_choice",
    },
    {
      title: "Years of Experience",
      desc: "We've been in business for over 10 years and now support over 100+ customers",
      icon: "thumb_up",
    },
  ],
  clients: [
    {
      name: "heathrow",
      img: "@img/clients/heathrow.png",
    },
    {
      name: "balance",
      img: "@img/clients/balance.png",
    },
    {
      name: "asclepius",
      img: "@img/clients/asclepius.png",
    },
    {
      name: "ics",
      img: "@img/clients/ics.png",
    },
    {
      name: "bmw-car-club",
      img: "@img/clients/bmw-car-club.png",
    },
    {
      name: "rye-house",
      img: "@img/clients/rye-house.png",
    },
    {
      name: "heathrow",
      img: "@img/clients/heathrow.png",
    },
    {
      name: "balance",
      img: "@img/clients/balance.png",
    },
    {
      name: "asclepius",
      img: "@img/clients/asclepius.png",
    },
    {
      name: "ics",
      img: "@img/clients/ics.png",
    },
    {
      name: "bmw-car-club",
      img: "@img/clients/bmw-car-club.png",
    },
    {
      name: "rye-house",
      img: "@img/clients/rye-house.png",
    },
  ],
  stats: [
    {
      title: "Overall SLA's Met",
      value: "99%",
    },
    {
      title: "Average Wait Time",
      value: "14s",
    },
    {
      title: "Same Day Fix (Calls)",
      value: "92%",
    },
    {
      title: "Customer Satisfaction",
      value: "100%",
    },
  ],
  pricingOptions: [
    {
      type: "essential",
      icon: "electric_bolt",
      desc: "Consectetur mi fringilla gravida purus vel odio est neque neque. Id curabitur dui duis egestas eu arcu.",
      price: "£5,499",
      discountPrice: "£4,999",
      lists: [
        "Phasellus accumsan et",
        "Porttitor id lectus bibendum",
        "Fringilla varius ullamcorper",
        "Diam massa mauris integer",
        "Sed sapien vitae vitae",
        "Gravida turpis mi magna",
      ],
    },
    {
      type: "business",
      icon: "star",
      desc: "Minus ducimus, iure tempore odit earum ad dignissimos, maiores corrupti aliquam voluptate ab.",
      price: "£8,999",
      discountPrice: "£6,499",
      lists: [
        "Phasellus accumsan et",
        "Porttitor id lectus bibendum",
        "Fringilla varius ullamcorper",
        "Diam massa mauris integer",
        "Sed sapien vitae vitae",
        "Gravida turpis mi magna",
        "Enim parturient urna lacus",
      ],
    },
    {
      type: "enterprise",
      icon: "diamond",
      desc: "Molestiae atque beatae nemo nesciunt. Quam quas unde quidem officiis velit labore saepe consequatur.",
      price: "£12,999",
      discountPrice: "£10,499",
      lists: [
        "Phasellus accumsan et",
        "Porttitor id lectus bibendum",
        "Fringilla varius ullamcorper",
        "Diam massa mauris integer",
        "Sed sapien vitae vitae",
        "Gravida turpis mi magna",
        "Enim parturient urna lacus",
        "Augue gravida pretium ac",
      ],
    },
  ],
  caseStudies: [
    {
      title:
        "Quis tortor adipiscing sed egestas consectetur turpis tincidunt pretium ac.",
      category: "Automotive",
      img: "@img/case-studies/case-1.jpg",
    },
    {
      title:
        "Diam id duis senectus vestibulum. Ac enim tellus neque dictum faucibus.",
      category: "Healt Care",
      img: "@img/case-studies/case-2.jpg",
    },
    {
      title:
        "Leo viverra lacus enim dignissim. Aliquam turpis amet cras morbi leo feugiat scelerisque.",
      category: "Entertainment",
      img: "@img/case-studies/case-3.jpg",
    },
    {
      title:
        "Gravida nisi congue sit orci cras id quis arcu. Vitae egestas tristique eu vitae magna vitae id.",
      category: "Finance",
      img: "@img/case-studies/case-4.jpg",
    },
  ],
  testimonials: [
    {
      title: "Mike Wisnefski",
      subtitle: "CEO & Founder of MaterialsXchange",
      body: "Turpis scelerisque tortor ut sed libero. Tempor et volutpat amet faucibus non mattis in lacus. At a felis et nisl ut morbi ac aenean. Tincidunt lacus egestas rutrum magna magna fames. Leo viverra non in ipsum vitae sed viverra magna semper.",
    },
    {
      title: "Alex Kerr",
      subtitle: "CEO & Founder of Trajektory",
      body: "Et vel elementum sit diam vitae nunc sed suspendisse lacus. Rhoncus praesent elit ultricies eget ut odio urna habitasse. Pulvinar ultrices vulputate vivamus nisl id vitae imperdiet in pellentesque. Aenean ut morbi placerat ultrices aliquam enim feugiat risus. Felis tempus odio sit aliquam ac luctus amet faucibus.",
    },
    {
      title: "Karen Kravits",
      subtitle: "Co-Founder of Enclave",
      body: "Integer volutpat a magna urna eget. Pharetra eu cursus dictumst amet egestas sit. Malesuada maecenas tempor volutpat feugiat placerat amet sit. Eu imperdiet facilisis pharetra ultrices aliquet.",
    },
    {
      title: "Jane Cooper",
      subtitle: "Manager at Acme Co.",
      body: "Porttitor condimentum eget venenatis id. Elementum accumsan in eu facilisis eu massa laoreet. Sed aliquam in diam ornare. Ut velit arcu vitae tristique sed sed. Accumsan sed amet sollicitudin neque.",
    },
    {
      title: "Brooklyn Simmons",
      subtitle: "CEO of Bindford Ltd.",
      body: "Vel ac nisl sit consequat porttitor id. Egestas odio mi nibh posuere interdum felis. Placerat nibh erat facilisis leo vitae amet consectetur quam consectetur. Facilisi velit in purus sit turpis. Nibh ut et senectus scelerisque eros amet dictum.",
    },
  ],
  accreditations: [
    {
      name: "microsoft-gold-partner",
      img: "@img/accreditations/microsoft-gold-partner.png",
    },
    {
      name: "apple-consultants",
      img: "@img/accreditations/apple-consultants.png",
    },
    {
      name: "3cx-silver-partner",
      img: "@img/accreditations/3cx-silver-partner.png",
    },
    {
      name: "dell",
      img: "@img/accreditations/dell.png",
    },
    {
      name: "27001-RGB-White",
      img: "@img/accreditations/27001-RGB-White.png",
    },
    {
      name: "9001-RGB-White",
      img: "@img/accreditations/9001-RGB-White.png",
    },
    {
      name: "cyber-Essentials",
      img: "@img/accreditations/cyber-Essentials.png",
    },
    {
      name: "Managed-Services",
      img: "@img/accreditations/Managed-Services.png",
    },
  ],
  faqs: [
    {
      key: "general",
      text: "General Information",
      lists: [
        {
          q: "What is Cleva and what services do you offer?",
          a: "Vitae facilisi augue sed in malesuada quis risus lorem elementum. Id cursus ullamcorper quisque euismod donec viverra. Tincidunt quisque tincidunt tristique sem massa dignissim nulla eu elementum.",
        },
        {
          q: "How long has Cleva been in business?",
          a: "Et faucibus malesuada pellentesque blandit sed.. Dolor arcu quis enim massa sit.. Sed donec morbi donec sit aliquet semper odio..",
        },
        {
          q: "What sets Cleva apart from other IT service providers?",
          a: "Dictum luctus lacinia lectus ut nisi porttitor nam.. Molestie purus erat gravida purus orci lectus.. Euismod gravida sed est in massa laoreet nulla purus.. Neque ut quam pellentesque sed. Integer risus a sit nunc.",
        },
        {
          q: "How can I contact Cleva for more information?",
          a: "Egestas eleifend ornare augue vivamus. Suspendisse in diam eu a pellentesque placerat.. Ipsum id arcu rutrum dolor.",
        },
      ],
    },
    {
      key: "it_support",
      text: "IT Support",
      lists: [
        {
          q: "What types of IT support services do you offer?",
          a: "Consectetur elementum facilisi dolor a maecenas posuere turpis amet hac.. Eu pellentesque nulla nunc odio cras vitae ultricies et sed.. Mi eu urna sed viverra non turpis netus tempor..",
        },
        {
          q: "Do you provide both remote and onsite support?",
          a: "Porttitor condimentum vitae pellentesque amet lectus congue lectus nec.. Convallis eu fermentum turpis venenatis varius.. Purus viverra ut semper hac lorem aliquet neque quam nisi..",
        },
        {
          q: "Do you offer 24/7 IT support?",
          a: "Dignissim auctor placerat facilisis amet porttitor ridiculus vivamus tristique id.. Leo quam enim scelerisque suspendisse ut nibh eleifend facilisis.. Eget nec duis tempus proin.",
        },
        {
          q: "How do I contact support if I need help?",
          a: "Ut sit enim risus interdum in.. Odio platea arcu enim ipsum. Velit feugiat eu diam vestibulum vitae adipiscing..",
        },
      ],
    },
    {
      key: "cyber",
      text: "Cyber Security",
      lists: [
        {
          q: "What cybersecurity measures do you implement to protect businesses?",
          a: "Nam laoreet diam mi et in a.. Et tincidunt massa arcu tellus. Neque id gravida commodo etiam quis tempus risus adipiscing..",
        },
        {
          q: "Do you offer cybersecurity audits or risk assessments?",
          a: "Turpis dictum eget urna mauris. Purus convallis sodales sit malesuada tristique volutpat nunc lectus.. Aliquam sed mi etiam diam.",
        },
        {
          q: "Do you provide employee cybersecurity training?",
          a: "Fermentum massa elit dis consectetur sed augue molestie ut.. Purus dolor vitae rhoncus cras at metus pellentesque morbi.. Faucibus auctor senectus egestas ultricies gravida consectetur sapien ac..",
        },
        {
          q: "What security solutions do you offer for remote workers?",
          a: "Lectus adipiscing eu ullamcorper tellus pellentesque amet bibendum laoreet.. Malesuada condimentum ornare in nec adipiscing.. Odio arcu proin eu felis quam augue..",
        },
      ],
    },
    {
      key: "services",
      text: "Professional Services",
      lists: [
        {
          q: "What IT consulting services do you provide?",
          a: "Nam laoreet diam mi et in a.. Et tincidunt massa arcu tellus. Neque id gravida commodo etiam quis tempus risus adipiscing..",
        },
        {
          q: "Can you help with IT infrastructure upgrades and migrations?",
          a: "Turpis dictum eget urna mauris. Purus convallis sodales sit malesuada tristique volutpat nunc lectus.. Aliquam sed mi etiam diam.",
        },
        {
          q: "How do your professional services differ from standard IT support?",
          a: "Fermentum massa elit dis consectetur sed augue molestie ut.. Purus dolor vitae rhoncus cras at metus pellentesque morbi.. Faucibus auctor senectus egestas ultricies gravida consectetur sapien ac..",
        },
        {
          q: "Can you assist with cloud migration and strategy?",
          a: "Lectus adipiscing eu ullamcorper tellus pellentesque amet bibendum laoreet.. Malesuada condimentum ornare in nec adipiscing.. Odio arcu proin eu felis quam augue..",
        },
      ],
    },
    {
      key: "pricing",
      text: "Pricing & Plans",
      lists: [
        {
          q: "How much do your IT services cost?",
          a: "Urna cras integer nibh neque proin vitae.. Elit purus arcu scelerisque curabitur lacus quis.. Massa tellus et mattis commodo bibendum..",
        },
        {
          q: "Do you offer flexible pricing plans?",
          a: "Non sapien ipsum at id duis.. Consequat ipsum hendrerit fringilla ullamcorper. Dignissim feugiat pellentesque quam nisl porttitor eleifend platea condimentum..",
        },
        {
          q: "Are there any hidden fees in your plans?",
          a: "Enim interdum id purus amet pulvinar commodo.. Tortor proin eget vitae hac dictum congue lacinia ut nisl.. Sem dignissim donec semper porttitor aliquet..",
        },
        {
          q: "Can I upgrade or downgrade my plan at any time?",
          a: "Urna non cursus urna tincidunt cum vivamus.. Malesuada in scelerisque ut nulla condimentum.. Vestibulum viverra sit morbi ac.",
        },
      ],
    },
    {
      key: "security",
      text: "Security & Compliance",
      lists: [
        {
          q: "How do you ensure compliance with data protection regulations?",
          a: "Urna cras integer nibh neque proin vitae.. Elit purus arcu scelerisque curabitur lacus quis.. Massa tellus et mattis commodo bibendum..",
        },
        {
          q: "Do you help businesses meet GDPR and other security requirements?",
          a: "Non sapien ipsum at id duis.. Consequat ipsum hendrerit fringilla ullamcorper. Dignissim feugiat pellentesque quam nisl porttitor eleifend platea condimentum..",
        },
        {
          q: "Can you help with cybersecurity insurance requirements?",
          a: "Enim interdum id purus amet pulvinar commodo.. Tortor proin eget vitae hac dictum congue lacinia ut nisl.. Sem dignissim donec semper porttitor aliquet..",
        },
        {
          q: "How do you handle third-party security risks?",
          a: "Urna non cursus urna tincidunt cum vivamus.. Malesuada in scelerisque ut nulla condimentum.. Vestibulum viverra sit morbi ac.",
        },
      ],
    },
  ],
  blog: {
    recent: [
      {
        title: "",
        date: "",
        tag: "",
        img: "",
      },
    ],
    related: [
      {
        title: "Sit quisque rutrum nisl sociis eleifend risus neque.",
        date: "June 5, 2024",
        tag: "Trends",
        img: "@img/blog/related-1.jpg",
      },
      {
        title: "Porta aliquam enim sed sed proin nibh proin sit turpis.",
        date: "June 3, 2024",
        tag: "Cloud Solutions",
        img: "@img/blog/related-2.jpg",
      },
      {
        title: "Leo aliquet dictum porttitor imperdiet placerat.",
        date: "Mei 28, 2024",
        tag: "Tech Innovations",
        img: "@img/blog/related-3.jpg",
      },
      {
        title: "Vitae bibendum a vulputate tortor in tortor lacus iaculis.",
        date: "Mei 24, 2024",
        tag: "Cyber Security",
        img: "@img/blog/related-4.jpg",
      },
      {
        title: "Lobortis dapibus neque egestas cursus maecenas sem vehicula.",
        date: "Mei 21, 2024",
        tag: "Technology",
        img: "@img/blog/related-5.jpg",
      },
    ],
  },
};

module.exports = data;
