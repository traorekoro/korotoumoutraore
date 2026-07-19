/**
 * i18n.js — Système de changement de langue FR / EN
 * ---------------------------------------------------
 * Fonctionnement :
 * 1. Chaque texte à traduire porte un attribut data-i18n="cle.unique" dans le HTML.
 * 2. Le dictionnaire ci-dessous contient la traduction pour chaque clé, en fr et en.
 * 3. Au chargement de la page (et à chaque clic sur le bouton FR/EN), le script
 *    parcourt tous les éléments [data-i18n] et remplace leur contenu par la
 *    traduction correspondant à la langue choisie.
 * 4. Le choix de langue est mémorisé dans localStorage, donc il est conservé
 *    quand on navigue entre les pages du site.
 *
 * Pour ajouter une nouvelle page au système :
 * - Ajoute data-i18n="ta.cle" sur chaque élément à traduire.
 * - Ajoute la clé + les 2 traductions dans l'objet TRANSLATIONS plus bas.
 * - Inclue <script src="js/i18n.js"></script> juste avant </body> (ou après jQuery).
 */

const TRANSLATIONS = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "Expériences",
    "nav.education": "Éducation",
    "nav.contact": "Contact",

    // Banner
    "banner.words.1": "applications Web.",
    "banner.words.2": "applications Mobiles.",
    "banner.words.3": "API performantes.",
    "banner.words.4": "solutions Full Stack.",
    "banner.title.prefix": "Je développe des",
    "banner.text": "Ingénieure Logiciel Full Stack avec plus de 5 ans d'expérience dans le développement d'applications web modernes.<br><br>Je conçois des interfaces performantes, développe des API sécurisées, automatise des processus, exploite les données et crée des solutions complètes répondant aux besoins des entreprises.",
    "banner.cta": "Mon parcours",

    // Services intro
    "services.tag": "EXPERTISES",
    "services.title": "Développement Web & Mobile Full Stack",
    "services.text": "Je développe des applications web et mobiles modernes, performantes et évolutives en utilisant des technologies robustes et les bonnes pratiques du développement logiciel.",

    // Service cards
    "service.web.title": "Développement Web",
    "service.web.text": "Création d'applications web modernes, responsives et performantes.",
    "service.backend.title": "Développement Backend",
    "service.backend.text": "Conception d'API REST sécurisées et d'applications métier.",
    "service.mobile.title": "Applications Mobiles",
    "service.mobile.text": "Développement d'applications mobiles intuitives et performantes.",
    "service.automation.title": "Automatisation",
    "service.automation.text": "Automatiser les processus métier répétitifs afin d'améliorer l'efficacité, de réduire les erreurs et de gagner un temps précieux.",
    "service.data.title": "Exploitation des Données",
    "service.data.text": "Collecter, analyser et visualiser des données afin de fournir des informations pertinentes et de faciliter la prise de décision fondée sur les données.",
    "service.database.title": "Bases de données",
    "service.database.text": "Conception, optimisation et administration de bases de données.",
    "service.devops.title": "DevOps & Collaboration",
    "service.devops.text": "Gestion de versions, intégration continue et travail en équipe.",
    "service.messaging.title": "Messaging & Monitoring",
    "service.messaging.text": "Mise en communication des services, surveillance des applications et amélioration de la fiabilité des systèmes distribués.",
    "service.problem.title": "Résolution de Problèmes",
    "service.problem.text": "Analyse des besoins, optimisation des performances et correction de bugs.",

    // Leadership section
    "leadership.tag": "LEADERSHIP & COMMUNICATION",
    "leadership.title": "Transformer des idées en solutions.",
    "leadership.text": "Je crois qu'un excellent développeur ne se limite pas à écrire du code. Il sait communiquer, collaborer avec les équipes, comprendre les besoins métiers et présenter des solutions de manière claire et efficace.",
    "leadership.li1": "Présentation de projets techniques",
    "leadership.li2": "Communication avec les clients et les équipes",
    "leadership.li3": "Collaboration Agile & amélioration continue",
    "leadership.li4": "Leadership, autonomie et résolution de problèmes",
    "leadership.pill1": "Communication",
    "leadership.pill2": "Leadership",
    "leadership.pill3": "Innovation",
    "leadership.pill4": "Collaboration",

    // Footer
    "footer.copyright.prefix": "Copyrights © 2026. Conçu et développé par",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Banner
    "banner.words.1": "Web applications.",
    "banner.words.2": "Mobile applications.",
    "banner.words.3": "High-performance APIs.",
    "banner.words.4": "Full Stack solutions.",
    "banner.title.prefix": "I build",
    "banner.text": "Full Stack Software Engineer with 5+ years of experience building modern web applications.<br><br>I design high-performance interfaces, build secure APIs, automate processes, work with data, and create end-to-end solutions that meet business needs.",
    "banner.cta": "My journey",

    // Services intro
    "services.tag": "EXPERTISE",
    "services.title": "Full Stack Web & Mobile Development",
    "services.text": "I build modern, high-performance, scalable web and mobile applications using robust technologies and software development best practices.",

    // Service cards
    "service.web.title": "Web Development",
    "service.web.text": "Building modern, responsive, high-performance web applications.",
    "service.backend.title": "Backend Development",
    "service.backend.text": "Designing secure REST APIs and business applications.",
    "service.mobile.title": "Mobile Applications",
    "service.mobile.text": "Building intuitive, high-performance mobile applications.",
    "service.automation.title": "Automation",
    "service.automation.text": "Automating repetitive business processes to improve efficiency, reduce errors, and save valuable time.",
    "service.data.title": "Data Insights",
    "service.data.text": "Collecting, analyzing, and visualizing data to deliver relevant insights and support data-driven decisions.",
    "service.database.title": "Databases",
    "service.database.text": "Designing, optimizing, and administering databases.",
    "service.devops.title": "DevOps & Collaboration",
    "service.devops.text": "Version control, continuous integration, and teamwork.",
    "service.messaging.title": "Messaging & Monitoring",
    "service.messaging.text": "Connecting services, monitoring applications, and improving the reliability of distributed systems.",
    "service.problem.title": "Problem Solving",
    "service.problem.text": "Requirements analysis, performance optimization, and bug fixing.",

    // Leadership section
    "leadership.tag": "LEADERSHIP & COMMUNICATION",
    "leadership.title": "Turning ideas into solutions.",
    "leadership.text": "I believe a great developer does more than write code. They know how to communicate, collaborate with teams, understand business needs, and present solutions clearly and effectively.",
    "leadership.li1": "Presenting technical projects",
    "leadership.li2": "Communicating with clients and teams",
    "leadership.li3": "Agile collaboration & continuous improvement",
    "leadership.li4": "Leadership, autonomy, and problem solving",
    "leadership.pill1": "Communication",
    "leadership.pill2": "Leadership",
    "leadership.pill3": "Innovation",
    "leadership.pill4": "Collaboration",

    // Footer
    "footer.copyright.prefix": "Copyright © 2026. Designed and built by",
  },
};

const DEFAULT_LANG = "fr";
const STORAGE_KEY = "site-lang";

function getCurrentLang() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] === undefined) return; // clé manquante : on laisse le texte existant

    // Si la traduction contient du HTML (ex: <br><br>), on l'injecte en innerHTML,
    // sinon on utilise textContent (plus sûr, évite tout souci d'échappement).
    if (/<[a-z][\s\S]*>/i.test(dict[key])) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  // Attribut lang sur <html> pour l'accessibilité / SEO
  document.documentElement.setAttribute("lang", lang);

  // Mise à jour visuelle du sélecteur de langue (bouton actif)
  document.querySelectorAll(".lang-switcher [data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  applyTranslations(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(getCurrentLang());

  document.querySelectorAll(".lang-switcher [data-lang]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
});
