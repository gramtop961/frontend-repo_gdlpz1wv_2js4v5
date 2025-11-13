(function () {
  const texts = {
    en: {
      // Meta
      metaTitle: "WatchGPT – ChatGPT on your wrist",
      metaDescription: "Bring the power of ChatGPT to your Apple Watch. Join the beta waitlist for WatchGPT.",
      // Nav
      navLogo: "WatchGPT",
      navEN: "EN",
      navDE: "DE",
      // Hero
      beta: "Beta",
      heroHeadline: "WatchGPT – ChatGPT on your wrist",
      heroSubheadline: "Bring the power of ChatGPT to your Apple Watch. Join the beta waitlist now.",
      heroCTA: "Join the waitlist",
      // Features
      featuresTitle: "Features",
      feature1Title: "Fast replies on your wrist",
      feature1Desc: "Get instant answers without taking out your phone.",
      feature2Title: "Dictate instead of typing",
      feature2Desc: "Speak your prompt and get a response in seconds.",
      feature3Title: "Free basic version",
      feature3Desc: "Start for free. Optional upgrades coming later.",
      feature4Title: "Privacy-focused",
      feature4Desc: "We only send what’s needed. You stay in control.",
      // How it works
      howTitle: "How it works",
      step1Title: "Install the app",
      step1Desc: "Get WatchGPT on your Apple Watch.",
      step2Title: "Connect your OpenAI account",
      step2Desc: "Securely sign in to enable ChatGPT.",
      step3Title: "Chat from your wrist",
      step3Desc: "Speak or tap and get instant answers.",
      // Waitlist
      waitlistTitle: "Join the waitlist",
      waitlistDesc: "We’ll email you when invites roll out.",
      firstNameLabel: "First name",
      firstNamePlaceholder: "First name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      platformLabel: "Platform",
      platformOptionWatchOnly: "Apple Watch only",
      platformOptionWatchIPhone: "Apple Watch + iPhone",
      usageLabel: "How would you use WatchGPT?",
      usagePlaceholder: "Optional",
      submitButton: "Join the waitlist",
      waitlistSuccess: "Thanks, you’re on the list!",
      // Validation
      firstNameErrorRequired: "Please enter your first name.",
      emailErrorRequired: "Please enter your email.",
      emailErrorInvalid: "Please enter a valid email address.",
      // FAQ
      faqTitle: "FAQ",
      faqQ1: "Is it free?",
      faqA1: "WatchGPT has a free basic version. We plan optional paid features later.",
      faqQ2: "Who can join the beta?",
      faqA2: "The beta is invite-only. We’ll notify you by email when a spot opens.",
      faqQ3: "How do you handle data?",
      faqA3: "We send only necessary prompts to OpenAI. We don’t sell your data.",
      faqQ4: "Does it work without an iPhone?",
      faqA4: "An Apple Watch is required. Some features may benefit from pairing with an iPhone.",
      faqQ5: "When will it be available?",
      faqA5: "We’re working fast. Join the waitlist to get updates and early access.",
      // Footer
      footerPrivacy: "Privacy",
      footerTerms: "Terms",
      footerImprint: "Imprint",
      footerNote: "Unofficial client. Not affiliated with Apple or OpenAI."
    },
    de: {
      // Meta
      metaTitle: "WatchGPT – ChatGPT direkt an deinem Handgelenk",
      metaDescription: "Hol dir die Power von ChatGPT auf deine Apple Watch. Trag dich jetzt auf die WatchGPT-Warteliste ein.",
      // Nav
      navLogo: "WatchGPT",
      navEN: "EN",
      navDE: "DE",
      // Hero
      beta: "Beta",
      heroHeadline: "WatchGPT – ChatGPT direkt an deinem Handgelenk",
      heroSubheadline: "Hol dir die Power von ChatGPT auf deine Apple Watch. Trag dich jetzt auf die Warteliste ein.",
      heroCTA: "Zur Warteliste anmelden",
      // Features
      featuresTitle: "Funktionen",
      feature1Title: "Schnelle Antworten am Handgelenk",
      feature1Desc: "Erhalte sofort Antworten – ganz ohne dein iPhone.",
      feature2Title: "Diktieren statt tippen",
      feature2Desc: "Sprich deine Anfrage und erhalte in Sekunden eine Antwort.",
      feature3Title: "Kostenlose Basisversion",
      feature3Desc: "Starte kostenlos. Spätere Upgrades sind geplant.",
      feature4Title: "Datenschutz im Fokus",
      feature4Desc: "Wir senden nur das Nötigste. Du behältst die Kontrolle.",
      // How it works
      howTitle: "So funktioniert’s",
      step1Title: "App installieren",
      step1Desc: "Hol dir WatchGPT auf deine Apple Watch.",
      step2Title: "OpenAI-Konto verbinden",
      step2Desc: "Melde dich sicher an, um ChatGPT zu nutzen.",
      step3Title: "Chat direkt vom Handgelenk",
      step3Desc: "Sprich oder tippe und erhalte sofort Antworten.",
      // Waitlist
      waitlistTitle: "Warteliste",
      waitlistDesc: "Wir benachrichtigen dich per E‑Mail, wenn Einladungen versendet werden.",
      firstNameLabel: "Vorname",
      firstNamePlaceholder: "Vorname",
      emailLabel: "E-Mail",
      emailPlaceholder: "du@beispiel.de",
      platformLabel: "Plattform",
      platformOptionWatchOnly: "Nur Apple Watch",
      platformOptionWatchIPhone: "Apple Watch + iPhone",
      usageLabel: "Wie würdest du WatchGPT nutzen?",
      usagePlaceholder: "Optional",
      submitButton: "Zur Warteliste anmelden",
      waitlistSuccess: "Danke, du stehst auf der Liste!",
      // Validation
      firstNameErrorRequired: "Bitte gib deinen Vornamen ein.",
      emailErrorRequired: "Bitte gib deine E‑Mail ein.",
      emailErrorInvalid: "Bitte gib eine gültige E‑Mail-Adresse ein.",
      // FAQ
      faqTitle: "FAQ",
      faqQ1: "Ist es kostenlos?",
      faqA1: "WatchGPT bietet eine kostenlose Basisversion. Optionale, kostenpflichtige Funktionen sind geplant.",
      faqQ2: "Wer kann an der Beta teilnehmen?",
      faqA2: "Die Beta ist nur auf Einladung. Wir benachrichtigen dich per E‑Mail, sobald ein Platz frei ist.",
      faqQ3: "Wie geht ihr mit Daten um?",
      faqA3: "Wir senden nur notwendige Prompts an OpenAI. Wir verkaufen keine Daten.",
      faqQ4: "Funktioniert es ohne iPhone?",
      faqA4: "Eine Apple Watch ist erforderlich. Manche Funktionen profitieren von der Kopplung mit dem iPhone.",
      faqQ5: "Wann ist es verfügbar?",
      faqA5: "Wir arbeiten mit Hochdruck. Trag dich ein, um Updates und Early Access zu erhalten.",
      // Footer
      footerPrivacy: "Datenschutz",
      footerTerms: "Nutzungsbedingungen",
      footerImprint: "Impressum",
      footerNote: "Inoffizieller Client. Keine Verbindung zu Apple oder OpenAI."
    }
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function applyLanguage(lang) {
    const dict = texts[lang] || texts.en;

    // Update all data-key text nodes
    $$('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.tagName === 'OPTION') return;
        el.textContent = dict[key];
      }
    });

    // Update placeholders
    $$('[data-placeholder-key]').forEach(el => {
      const key = el.getAttribute('data-placeholder-key');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update option elements that use data-key
    $$('option[data-key]').forEach(opt => {
      const key = opt.getAttribute('data-key');
      if (dict[key] !== undefined) {
        opt.textContent = dict[key];
      }
    });

    // Update document language attribute
    document.documentElement.setAttribute('lang', lang === 'de' ? 'de' : 'en');

    // Update meta title/description and title
    document.title = dict.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.metaDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.metaTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict.metaDescription);

    // Toggle active button UI
    document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');
    document.getElementById('btn-de')?.classList.toggle('active', lang === 'de');
  }

  function getLang() {
    const saved = localStorage.getItem('lang');
    return saved === 'de' ? 'de' : 'en';
  }

  function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
  }

  function handleForm() {
    const form = document.getElementById('waitlist-form');
    const success = document.getElementById('form-success');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lang = getLang();
      const dict = texts[lang];

      const firstName = document.getElementById('firstName').value.trim();
      const email = document.getElementById('email').value.trim();

      const errFirst = document.getElementById('error-firstName');
      const errEmail = document.getElementById('error-email');

      errFirst.textContent = '';
      errEmail.textContent = '';

      let valid = true;

      if (!firstName) {
        errFirst.textContent = dict.firstNameErrorRequired;
        valid = false;
      }

      if (!email) {
        errEmail.textContent = dict.emailErrorRequired;
        valid = false;
      } else if (!validateEmail(email)) {
        errEmail.textContent = dict.emailErrorInvalid;
        valid = false;
      }

      if (!valid) return;

      form.classList.add('hidden');
      success.textContent = dict.waitlistSuccess;
      success.classList.remove('hidden');
      form.reset();
    });
  }

  function smoothScrollToWaitlist() {
    const btn = document.getElementById('cta-join');
    const target = document.getElementById('waitlist');
    if (!btn || !target) return;
    btn.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const initialLang = getLang();
    applyLanguage(initialLang);

    document.getElementById('btn-en')?.addEventListener('click', () => setLang('en'));
    document.getElementById('btn-de')?.addEventListener('click', () => setLang('de'));

    handleForm();
    smoothScrollToWaitlist();
  });
})();
