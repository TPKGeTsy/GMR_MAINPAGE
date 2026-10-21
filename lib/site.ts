// Site content (demo). Text marked with { en, th } switches with the language toggle.
export const categories = [
  {
    slug: "robot",
    name: "Robot",
    subtitle: "Autonomous Mobile Robot / Automated Guided Vehicle / Industrial Robot",
    image: "/images/card-robot.webp",
  },
  { slug: "rfid", name: "RFID", subtitle: "Radio Frequency Identification", image: null },
  { slug: "smart-iot", name: "Smart IoT", subtitle: "Internet of Things", image: "/images/card-smart-iot.webp" },
  { slug: "structure-lighting", name: "Structure & Lighting", subtitle: "", image: null },
] as const;

export type Category = (typeof categories)[number];

export const heroSlides = [
  {
    title: "GMR\nANTBOT",
    text: "Robot for towing 1-4 ton pallets are used to help with industrial work.",
    image: "/images/hero-antbot.webp",
    href: "/robot",
  },
  {
    title: "GMR\nROBOTS",
    text: "AMR / AGV solutions for every factory floor.",
    image: "/images/card-robot.webp",
    href: "/robot",
  },
  {
    title: "SMART\nIoT",
    text: "Connect your machines and monitor everything in real time.",
    image: "/images/card-smart-iot.webp",
    href: "/smart-iot",
  },
  {
    title: "SERVICE\nROBOT",
    text: "Friendly service robots for reception and delivery.",
    image: "/images/video-cat-robot.webp",
    href: "/robot",
  },
];

// `url` = YouTube/mp4 link — fill in once the real videos are available.
export const highlightVideos = [
  { image: "/images/video-stereo-camera.webp", url: "" },
  { image: "/images/video-cat-robot.webp", url: "" },
  { image: "/images/video-warehouse.webp", url: "" },
];

export const projectVideos = [
  { image: "/images/project-1.webp", url: "" },
  { image: "/images/project-2.webp", url: "" },
  { image: "/images/project-3.webp", url: "" },
];

export const clients = [
  "sharp", "scg", "true", "toshiba", "mitsubishi-electric", "toyota-boshoku",
  "client-7", "mut", "fic", "denso", "sgct", "harley-davidson",
  "esso", "bangchak", "pt", "seagate", "ais-5g", "adient",
];

export const copy = {
  about: {
    en: "Group Maker, we are experts in AGV/AMR robotics, RFID systems, Smart IoT, and Structural design. You can be fully confident in every step—from system design and installation to close after sales support guided by our professional team who is always ready to advise you.",
    th: "Group Maker เราคือผู้เชี่ยวชาญด้านหุ่นยนต์ AGV/AMR, ระบบ RFID, Smart IoT และงานโครงสร้าง (Structure) คุณจึงมั่นใจได้ในทุกขั้นตอน ตั้งแต่การออกแบบ ติดตั้ง ไปจนถึงการดูแลหลังการขายอย่างใกล้ชิด โดยทีมงานมืออาชีพที่พร้อมให้คำปรึกษาเสมอ",
  },
  why: {
    en: "We deliver comprehensive solutions tailored to businesses worldwide. From start to finish, our expert engineering team provides professional consultation and designs the most suitable solutions for your needs. Furthermore as a leader in cost efficiency, we offer high-quality products at competitive prices, ensuring confident and reliable project delivery. Consult with us today to transform and elevate your business for Industry 4.0 with confidence.",
    th: "เราพร้อมมอบโซลูชันที่ครอบคลุมทุกความต้องการของธุรกิจทั่วโลก ด้วยบริการแบบครบวงจรตั้งแต่เริ่มต้นจนจบกระบวนการ โดยทีมวิศวกรผู้เชี่ยวชาญที่พร้อมให้คำปรึกษาและออกแบบโซลูชันที่เหมาะสมที่สุดสำหรับคุณ นอกจากนี้ เรายังเป็นผู้นำด้านราคา ด้วยผลิตภัณฑ์คุณภาพสูงในราคาที่คุ้มค่า ช่วยให้คุณมั่นใจได้ในทุกการส่งมอบงาน ปรึกษาเราได้แล้ววันนี้ เพื่อยกระดับและพลิกโฉมธุรกิจของคุณสู่ยุค Industry 4.0 อย่างมั่นคง",
  },
  provenTitle: { en: "OUR PROVEN PROJECTS", th: "ผลงานที่ผ่านการพิสูจน์แล้วของเรา" },
  provenSub: {
    en: "View case study videos across our product ranges",
    th: "ชมวิดีโอตัวอย่างการใช้งานจริงของผลิตภัณฑ์ทั้งหมดของเรา",
  },
};

export const contact = {
  company: "Group Maker co. ltd",
  address: ["9 Soi Romklao 17 Yaek 1", "Klongsampravet, Bangkok 10520"],
  phone: "+66 81 593 5599",
  email: "thanapat.c@groupmaker.co.th",
  facebook: "Group Maker Robotics",
};
