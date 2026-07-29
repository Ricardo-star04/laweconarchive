export type VisualArchiveItem = {
  title: string;
  caption: string;
  src: string;
  sourceHref: string;
  sourceLabel: string;
};

export const INSTITUTIONAL_VISUALS = {
  stanfordLawSchool: {
    title: "Stanford Law School",
    caption: "Stanford Law School in autumn sunlight",
    src: "/institutional/stanford-law-school-sunny-november-2012.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:Stanford_Law_School_November_2012.jpg",
    sourceLabel: "King of Hearts / Wikimedia Commons / CC BY-SA 3.0"
  },
  columbiaLawSchool: {
    title: "Columbia Law School",
    caption: "Academic setting",
    src: "/institutional/columbia-law-school-jerome-l-greene-hall.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:Columbia_Law_School_-_Jerome_L_Greene_Hall_(48170357816).jpg",
    sourceLabel: "Ajay Suresh / CC BY 2.0"
  },
  delawareChancery: {
    title: "Delaware Court of Chancery",
    caption: "Corporate law forum",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/DelCourtChancery2022.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:DelCourtChancery2022.jpg",
    sourceLabel: "Wikimedia Commons"
  },
  secHeadquarters: {
    title: "U.S. Securities and Exchange Commission",
    caption: "Securities regulation",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/U.S._Securities_and_Exchange_Commission_headquarters.JPG",
    sourceHref: "https://commons.wikimedia.org/wiki/File:U.S._Securities_and_Exchange_Commission_headquarters.JPG",
    sourceLabel: "Wikimedia Commons"
  },
  nyseFacade: {
    title: "New York Stock Exchange",
    caption: "Public capital markets",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/NYC_-_New_York_Stock_Exchange.JPG",
    sourceHref: "https://commons.wikimedia.org/wiki/File:NYC_-_New_York_Stock_Exchange.JPG",
    sourceLabel: "Jean-Christophe BENOIST / CC BY 3.0"
  },
  londonStockExchange: {
    title: "London Stock Exchange",
    caption: "Market infrastructure",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Paternoster_Square.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:Paternoster_Square.jpg",
    sourceLabel: "Grenavitar / public domain"
  },
  federalReserve: {
    title: "Marriner S. Eccles Federal Reserve Board Building",
    caption: "Financial regulation",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg",
    sourceLabel: "Wikimedia Commons"
  },
  federalReserveBankNewYork: {
    title: "Federal Reserve Bank of New York",
    caption: "Monetary and market operations",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Federal_Reserve_Bank_of_New_York%2C_Manhattan%2C_New_York_%287237032812%29.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:Federal_Reserve_Bank_of_New_York,_Manhattan,_New_York_(7237032812).jpg",
    sourceLabel: "Wikimedia Commons / CC BY-SA 3.0"
  },
  bankOfEngland: {
    title: "Bank of England",
    caption: "Central banking",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/London.bankofengland.arp.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:London.bankofengland.arp.jpg",
    sourceLabel: "Wikimedia Commons"
  },
  bisTower: {
    title: "Bank for International Settlements",
    caption: "Prudential coordination",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Basel_-_Bank_f%C3%BCr_Internationalen_Zahlungsausgleich-Tower_Building_%2827553555831%29.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:Basel_-_Bank_f%C3%BCr_Internationalen_Zahlungsausgleich-Tower_Building_(27553555831).jpg",
    sourceLabel: "Wikimedia Commons / CC BY 2.0"
  },
  langdellHall: {
    title: "Langdell Hall",
    caption: "Law library",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Harvard_Law_School_-_Langdell_Hall.jpg",
    sourceHref: "https://commons.wikimedia.org/wiki/File:Harvard_Law_School_-_Langdell_Hall.jpg",
    sourceLabel: "Wikimedia Commons"
  }
} satisfies Record<string, VisualArchiveItem>;
