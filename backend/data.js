// backend/data.js

const educationHistory = [
    {
        id: 1,
        period: "2023 - Sekarang",
        institution: "Universitas Amikom Yogyakarta",
        major: "S1 - Informatika",
    },
    {
        id: 2,
        period: "2020 - 2023",
        institution: "SMK Negeri 1 Wadaslintang",
        major: "Jurusan Teknik",
    },
    {
        id: 3,
        period: "2017 - 2020",
        institution: "SMP Negeri 1 Wadaslintang",
        major: "",
    },
    {
        id: 4,
        period: "2011 - 2017",
        institution: "SD Negeri 2 Wadaslintang",
        major: "",
    },
];

const skills = [
    { name: "HTML5 & CSS3", level: "Mahir" },
    { name: "JavaScript", level: "Mahir" },
    { name: "Vue.js", level: "Mahir" },
    { name: "Tailwind CSS", level: "Menengah" },
    { name: "Node.js", level: "Menengah" },
    { name: "Git & GitHub", level: "Mahir" },
];

const projects = [
    {
        title: "Aplikasi E-Commerce Billiard",
        image: "",
        description:
            "Aplikasi berbasis web untuk mencatat dan memantau tugas harian.",
        tech: ["Dart", "Python", "JavaScript"],
        link: "#",
    },
    {
        title: "Website Pengaduan Masyarakat",
        image: "/image/web.png",
        description: "Website CV responsif dengan Vue.js dan backend Express.",
        tech: ["Vue.js", "Express.js", "PostgreSQL"],
        link: "",
    },
    {
        title: "Personal Portfolio",
        image: "/image/portfolio.png",
        description: "Interactive personal portfolio website showcasing projects and skills.",
        tech: ["Vue.js", "Tailwind CSS", "JavaScript"],
        link: "#"
    }
];

module.exports = { educationHistory, skills, projects };
