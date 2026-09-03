/* =========================================================================
   Siel Eolie - single script
   - Bilingual IT/EN toggle with localStorage persistence
   - Mobile menu
   - Portfolio filter tabs
   - Year filler
   ========================================================================= */

(function () {
    'use strict';

    // ------------------------------------------------------------------
    // Translations (IT is the canonical default; EN mirrors the HTML)
    // ------------------------------------------------------------------
    const translations = {
        it: {
            "meta.title": "Siel Eolie | Impianti elettrici alle Isole Eolie",
            "meta.ogTitle": "Siel Eolie | Impianti elettrici alle Isole Eolie",
            "meta.ogDescription": "Impianti elettrici civili e industriali, quadri, sicurezza, antincendio e fotovoltaico. Lipari e tutto l'arcipelago eoliano, dal 1997.",

            "brand.name": "Siel Eolie",

            "nav.about": "Chi siamo",
            "nav.services": "Servizi",
            "nav.certifications": "Certificazioni",
            "nav.portfolio": "Portfolio",
            "nav.contact": "Contatti",

            "hero.eyebrow": "Lipari · Isole Eolie · dal 1997",
            "hero.title": "Impianti elettrici alle Isole Eolie",
            "hero.lead": "Progettiamo, installiamo e manteniamo impianti elettrici civili e industriali, quadri, sistemi di sicurezza e antincendio, fotovoltaico. Con sede a Lipari, raggiungiamo ogni angolo dell'arcipelago, da Vulcano a Stromboli, da Salina ad Alicudi.",
            "hero.icimBadge": "ICIM · unica azienda certificata a Lipari e isole minori · dal 2014",
            "hero.ctaServices": "Scopri i servizi",
            "hero.ctaContact": "Contattaci",

            "about.title": "Una storia eoliana, dal 1997",
            "about.companyTitle": "L'azienda",
            "about.companyBody": "Siel Eolie è un'impresa elettrica con sede a Lipari, attiva in tutto l'arcipelago. Realizziamo impianti civili e industriali, quadri elettrici su misura, automazioni e reti wireless, impianti fotovoltaici e sistemi antincendio. Lavoriamo per abitazioni private, alberghi e strutture ricettive, cantieri industriali, condomini ed enti pubblici: dal piccolo intervento al grande appalto, sempre con materiali di prima qualità e tempi di consegna rispettati. Il nostro team segue ogni lavoro dall'idea iniziale fino alla manutenzione programmata.",
            "about.historyTitle": "La storia",
            "about.historyBody": "Siel nasce a Lipari nel 2004, erede della S.I.EL snc avviata nel 1997 dal fondatore e attuale amministratore, Geometra Giuseppe Orto. In oltre vent'anni abbiamo visto cambiare le Eolie e siamo cresciuti insieme al territorio.",
            "about.certTitle": "Certificazioni",
            "about.certBody": "Dal 2014 siamo certificati ICIM per la manutenzione di impianti antincendio, reti idranti e porte tagliafuoco: l'unica azienda autorizzata a fornire questi servizi a Lipari e nelle isole minori dell'arcipelago. La certificazione ICIM garantisce il rispetto delle normative UNI e la tracciabilità di ogni intervento, requisito fondamentale per alberghi, strutture pubbliche, condomini e qualsiasi attività soggetta a controllo antincendio. Dal 2026 siamo inoltre abilitati dai Vigili del Fuoco per la manutenzione delle reti idranti antincendio (presidio P.2).",

            "story.marker": "Emergenza Stromboli",
            "story.title": "Corrente e videosorveglianza sul vulcano in attività",
            "story.body": "Durante l'Emergenza Stromboli del 2003 abbiamo lavorato a fianco della Protezione Civile per portare impianti elettrici, videosorveglianza e cablaggio della rete LAN fin sul vulcano in attività. Un intervento complesso, fatto di trasporti in elicottero, sentieri attrezzati e lavori in quota. Quello spirito, esserci dove serve quando serve, ci guida ancora oggi.",
            "services.title": "Cosa facciamo",
            "services.lead": "Dalla progettazione alla manutenzione: un'unica impresa che segue ogni fase del tuo impianto, con materiali di prima qualità e tempi di consegna rispettati.",
            "services.electric.title": "Impianti elettrici",
            "services.electric.body": "Impianti civili e industriali per abitazioni, alberghi, capannoni, uffici, scuole, condomini ed enti pubblici.",
            "services.panels.title": "Quadri elettrici",
            "services.panels.body": "Quadri elettrici su misura, progettati e cablati in officina. Tempi brevi, qualità alta, prezzi onesti.",
            "services.security.title": "Sistemi di sicurezza",
            "services.security.body": "Antifurto, videosorveglianza, videocitofoni e antintrusione: tecnologia di ultima generazione per proteggere casa e lavoro.",
            "services.fire.title": "Antincendio",
            "services.fire.body": "Manutenzione di estintori, reti idranti e porte tagliafuoco. Siamo l'unica azienda certificata ICIM a Lipari e nelle isole minori, dal 2014.",
            "services.fire.icimBadge": "ICIM · dal 2014",
            "services.solar.title": "Fotovoltaico",
            "services.solar.body": "Progettazione e installazione di impianti fotovoltaici chiavi in mano, per produrre energia pulita e ridurre la bolletta.",
            "services.automation.title": "Automazioni & reti",
            "services.automation.body": "Automazioni di cancelli e serrande, reti Wi-Fi e hyperlan, cablaggi strutturati e assistenza hardware.",

            "portfolio.title": "Alcune delle nostre realizzazioni",
            "portfolio.lead": "Dalle abitazioni private ai cantieri sul vulcano: ogni progetto racconta oltre vent'anni di esperienza sul campo.",
            "portfolio.tabs.all": "Tutti",
            "portfolio.tabs.civile": "Impianti civili",
            "portfolio.tabs.industriale": "Impianti industriali",
            "portfolio.tabs.quadro": "Quadri elettrici",

            "contact.title": "Parliamone",
            "contact.lead": "Contattaci per un preventivo, una consulenza o un intervento di manutenzione. Siamo a Lipari e raggiungiamo tutte le Isole Eolie.",
            "contact.addressLabel": "Indirizzo",
            "contact.phoneFixedLabel": "Telefono",
            "contact.phoneLabel": "Cellulare",
            "contact.hoursLabel": "Orari",
            "contact.adminTitle": "Dati amministrativi",
            "contact.hoursValue": "Lun–Ven 09:00–13:00 / 15:00–19:00",
            "contact.mapTitle": "Mappa: Siel Eolie a Lipari",
            "contact.mapConsentText": "Per visualizzare la mappa è necessario caricare Google Maps, che potrebbe impostare cookie di terze parti.",
            "contact.mapConsentBtn": "Carica mappa",
            "contact.mapOpenExternal": "Apri in Google Maps",

            "cta.eyebrow": "Lavoriamo insieme",
            "cta.title": "Hai un progetto in mente?",
            "cta.body": "Per qualsiasi informazione, sopralluogo o richiesta di preventivo, contattaci: ti risponderemo nel più breve tempo possibile.",
            "cta.phone": "Chiamaci",
            "cta.whatsapp": "WhatsApp",
            "cta.email": "Scrivici",

            "footer.tagline": "Impianti elettrici alle Isole Eolie",
            "footer.since": "Alle Isole Eolie dal 1997",
            "footer.rights": "Tutti i diritti riservati.",
            "footer.built": "Fatto con",
            "footer.builtBy": "da",
            "footer.legalTitle": "Dati societari",
            "footer.legalCompany": "Ragione Sociale: SIEL S.R.L. DI A. & G.",
            "footer.legalVat": "P.IVA: 02774390831",
            "footer.legalRea": "REA: ME - 191994",
            "footer.legalCapital": "Capitale Sociale: €10.000,00",

            "cookie.title": "Privacy",
            "cookie.text": "Utilizziamo Google Maps per mostrare la nostra sede. Il servizio può impostare cookie di terze parti.",
            "cookie.accept": "Accetta",
            "cookie.decline": "Rifiuta",
            "cookie.manage": "Gestisci cookie",

            "a11y.toTop": "Torna su",
            "a11y.themeToggle": "Cambia tema",
            "a11y.menuOpen": "Apri menu",
            "a11y.menuClose": "Chiudi menu",
            "a11y.skipToMain": "Vai al contenuto principale",
            "theme.toggleLabel": "Cambia tema",

            "nf.metaTitle": "Pagina non trovata | Siel Eolie",
            "nf.title": "Pagina non trovata",
            "nf.body": "La pagina che stai cercando non esiste o è stata spostata.",
            "nf.ctaHome": "Torna alla home",
            "nf.ctaContact": "Contattaci",

            "cert.metaTitle": "Certificazioni | Siel Eolie",
            "cert.eyebrow": "Certificazioni",
            "cert.title": "Certificazioni e abilitazioni",
            "cert.lead": "Le certificazioni garantiscono tracciabilità, conformità normativa e manutenzioni eseguite secondo standard verificabili. Questa sezione raccoglie i documenti disponibili e riflette il nostro percorso di miglioramento continuo.",
            "cert.activeSince": "Attiva dal",
            "cert.icim.title": "Certificazione ICIM",
            "cert.icim.body": "Dal 2014 siamo certificati per la manutenzione di impianti antincendio, reti idranti e porte tagliafuoco. A Lipari e nelle isole minori siamo l'unica azienda abilitata per questi servizi.",
            "cert.rina.title": "Certificazione RINA",
            "cert.rina.body": "Siamo abilitati alla fornitura dei seguenti servizi a navi e altre unità classificate RINA: ispezioni e manutenzione di apparecchi ed impianti antincendio, limitatamente ad impianti fissi a CO2, estintori portatili ed estintori di grande capacità.",
            "cert.vvf.title": "Abilitazione VV.F.",
            "cert.vvf.body": "Siamo abilitati alla manutenzione delle reti idranti antincendio (presidio P.2) ai sensi del D.M. 1 settembre 2021, con qualifica rilasciata dal Dipartimento dei Vigili del Fuoco e iscrizione all'albo nazionale dei manutentori.",
            "cert.more.title": "Percorso di crescita continua",
            "cert.more.body": "Continueremo a conseguire nuove certificazioni per migliorare come azienda e garantire standard sempre più alti.",
            "cert.ctaHome": "Torna alla home",
            "cert.ctaContact": "Contattaci",
            "cert.quickActionsTitle": "Vuoi continuare la navigazione?",
            "cert.quickActionsBody": "Torna alla home oppure contattaci direttamente per qualsiasi informazione.",
            "cert.homeTitle": "Le nostre certificazioni",
            "cert.homeBody": "Consulta tutte le certificazioni dell'azienda in un'unica pagina dedicata.",
            "cert.homeCta": "Apri pagina certificazioni",

            "form.heading": "Inviaci un messaggio",
            "form.name": "Nome",
            "form.namePlaceholder": "Giuseppe Rossi",
            "form.email": "Email",
            "form.emailPlaceholder": "nome@esempio.it",
            "form.phone": "Telefono",
            "form.phonePlaceholder": "+39 368 000 0000",
            "form.service": "Servizio",
            "form.serviceDefault": "Seleziona un servizio...",
            "form.message": "Messaggio",
            "form.messagePlaceholder": "Descrivi brevemente la tua richiesta...",
            "form.submit": "Invia messaggio",
            "form.sending": "Invio in corso...",
            "form.success": "Messaggio inviato. Ti risponderemo presto.",
            "form.error": "Errore durante l'invio. Riprova o scrivici a info@sieleolie.it.",
            "form.validation.nameRequired": "Il nome è obbligatorio.",
            "form.validation.emailRequired": "Inserisci un indirizzo email valido.",
            "form.validation.messageRequired": "Il messaggio è obbligatorio."
        },

        en: {
            "meta.title": "Siel Eolie | Electrical systems in the Aeolian Islands",
            "meta.ogTitle": "Siel Eolie | Electrical systems in the Aeolian Islands",
            "meta.ogDescription": "Civil and industrial electrical systems, switchboards, security, fire safety and photovoltaics. Lipari and the whole Aeolian archipelago, since 1997.",

            "brand.name": "Siel Eolie",

            "nav.about": "About",
            "nav.services": "Services",
            "nav.certifications": "Certifications",
            "nav.portfolio": "Portfolio",
            "nav.contact": "Contact",

            "hero.eyebrow": "Lipari · Aeolian Islands · since 1997",
            "hero.title": "Electrical systems for the Aeolian Islands",
            "hero.lead": "We design, install and maintain civil and industrial electrical systems, switchboards, security and fire-safety systems, and photovoltaics. Based in Lipari, we reach every corner of the archipelago, from Vulcano to Stromboli, from Salina to Alicudi.",
            "hero.icimBadge": "ICIM certified · the only provider in Lipari and the smaller islands · since 2014",
            "hero.ctaServices": "Our services",
            "hero.ctaContact": "Get in touch",

            "about.title": "An Aeolian story, since 1997",
            "about.companyTitle": "The company",
            "about.companyBody": "Siel Eolie is an electrical contractor based in Lipari, active across the whole archipelago. We build civil and industrial systems, custom electrical switchboards, automations and wireless networks, photovoltaic installations and fire-safety systems. We work for private homes, hotels and hospitality venues, industrial sites, condominiums and public bodies: from the smallest call-out to the largest contract, always with top-quality materials and deadlines we actually keep. Our team follows every job from first idea to scheduled maintenance.",
            "about.historyTitle": "Our story",
            "about.historyBody": "Siel was founded in Lipari in 2004 as the successor to S.I.EL snc, started in 1997 by our founder and current manager, Giuseppe Orto (Geometra). In more than twenty years we have watched the Aeolian Islands change, and we have grown with the territory.",
            "about.certTitle": "Certifications",
            "about.certBody": "Since 2014 we have been ICIM-certified for the maintenance of fire-safety systems, hydrant networks and fire doors: the only authorised provider of these services in Lipari and the smaller islands of the archipelago. ICIM certification guarantees compliance with current UNI standards and full traceability of every intervention, essential for hotels, public buildings, condominiums and any business subject to fire-safety inspection. Since 2026 we are also qualified by the Vigili del Fuoco to maintain fire hydrant networks (presidio P.2).",

            "story.marker": "Stromboli emergency",
            "story.title": "Power and surveillance on an active volcano",
            "story.body": "During the 2003 Stromboli emergency we worked alongside Italy's Civil Protection to bring electrical systems, video-surveillance and LAN cabling all the way up onto the active volcano. A demanding job of helicopter lifts, rope-access paths and high-altitude work. That spirit, being there where and when it matters, still guides us today.",
            "services.title": "What we do",
            "services.lead": "From design to maintenance: one contractor follows every stage of your system, with top-quality materials and deadlines we actually keep.",
            "services.electric.title": "Electrical systems",
            "services.electric.body": "Civil and industrial installations for homes, hotels, warehouses, offices, schools, condominiums and public bodies.",
            "services.panels.title": "Switchboards",
            "services.panels.body": "Custom electrical switchboards, designed and wired in our workshop. Short lead times, high quality, honest pricing.",
            "services.security.title": "Security systems",
            "services.security.body": "Burglar alarms, CCTV, video intercoms and intrusion detection: the latest technology to protect your home and your business.",
            "services.fire.title": "Fire safety",
            "services.fire.body": "Maintenance of fire extinguishers, hydrant networks and fire doors. We're the only ICIM-certified company in Lipari and the smaller islands, since 2014.",
            "services.fire.icimBadge": "ICIM · since 2014",
            "services.solar.title": "Photovoltaics",
            "services.solar.body": "Design and turnkey installation of photovoltaic systems, to produce clean energy and cut your bill.",
            "services.automation.title": "Automation & networks",
            "services.automation.body": "Automation of gates and shutters, Wi-Fi and hyperlan networks, structured cabling and hardware support.",

            "portfolio.title": "Selected work",
            "portfolio.lead": "From private homes to worksites on the volcano: every project carries more than twenty years of hands-on experience.",
            "portfolio.tabs.all": "All",
            "portfolio.tabs.civile": "Civil",
            "portfolio.tabs.industriale": "Industrial",
            "portfolio.tabs.quadro": "Switchboards",

            "contact.title": "Let's talk",
            "contact.lead": "Reach out for a quote, a consultation or a maintenance call. We're based in Lipari, and we cover every one of the Aeolian Islands.",
            "contact.addressLabel": "Address",
            "contact.phoneFixedLabel": "Phone",
            "contact.phoneLabel": "Mobile",
            "contact.hoursLabel": "Hours",
            "contact.adminTitle": "Administrative details",
            "contact.hoursValue": "Mon–Fri 09:00–13:00 / 15:00–19:00",
            "contact.mapTitle": "Map: Siel Eolie in Lipari",
            "contact.mapConsentText": "Showing the map requires loading Google Maps, which may set third-party cookies.",
            "contact.mapConsentBtn": "Load map",
            "contact.mapOpenExternal": "Open in Google Maps",

            "cta.eyebrow": "Let's work together",
            "cta.title": "Got a project in mind?",
            "cta.body": "For any question, site visit or quote: reach out and we'll reply as soon as we can.",
            "cta.phone": "Call us",
            "cta.whatsapp": "WhatsApp",
            "cta.email": "Email us",

            "footer.tagline": "Electrical systems in the Aeolian Islands",
            "footer.since": "In the Aeolian Islands since 1997",
            "footer.rights": "All rights reserved.",
            "footer.built": "Made with",
            "footer.builtBy": "by",
            "footer.legalTitle": "Company details",
            "footer.legalCompany": "Ragione Sociale (Company name): SIEL S.R.L. DI A. & G.",
            "footer.legalVat": "P.IVA (VAT No.): 02774390831",
            "footer.legalRea": "REA (Business registry): ME - 191994",
            "footer.legalCapital": "Share capital: €10,000.00",

            "cookie.title": "Privacy",
            "cookie.text": "We use Google Maps to show our location. The service may set third-party cookies.",
            "cookie.accept": "Accept",
            "cookie.decline": "Decline",
            "cookie.manage": "Manage cookies",

            "a11y.toTop": "Back to top",
            "a11y.themeToggle": "Switch theme",
            "a11y.menuOpen": "Open menu",
            "a11y.menuClose": "Close menu",
            "a11y.skipToMain": "Skip to main content",
            "theme.toggleLabel": "Switch theme",

            "nf.metaTitle": "Page not found | Siel Eolie",
            "nf.title": "Page not found",
            "nf.body": "The page you're looking for doesn't exist or has been moved.",
            "nf.ctaHome": "Back to home",
            "nf.ctaContact": "Contact us",

            "cert.metaTitle": "Certifications | Siel Eolie",
            "cert.eyebrow": "Certifications",
            "cert.title": "Certifications and qualifications",
            "cert.lead": "Our certifications ensure traceability, regulatory compliance, and maintenance performed against verifiable standards. This section gathers available documents and reflects our continuous improvement path.",
            "cert.activeSince": "Active since",
            "cert.icim.title": "ICIM Certification",
            "cert.icim.body": "Since 2014 we have been certified for the maintenance of fire-safety systems, hydrant networks, and fire doors. In Lipari and the smaller islands, we are the only authorised provider for these services.",
            "cert.rina.title": "RINA Certification",
            "cert.rina.body": "We are qualified to provide the following services to ships and other units classed by RINA: inspection and maintenance of fire-fighting appliances and systems, limited to fixed CO2 systems, portable extinguishers, and wheeled extinguishers (large capacity).",
            "cert.vvf.title": "VV.F. Qualification",
            "cert.vvf.body": "We are qualified to maintain fire hydrant networks (presidio P.2) under the Ministerial Decree of 1 September 2021, with the qualification issued by the Italian Fire and Rescue Service and entry in the national register of maintenance technicians.",
            "cert.more.title": "Continuous growth path",
            "cert.more.body": "We will continue pursuing new certifications to improve as a company and ensure ever higher standards.",
            "cert.ctaHome": "Back to home",
            "cert.ctaContact": "Contact us",
            "cert.quickActionsTitle": "Would you like to continue browsing?",
            "cert.quickActionsBody": "Return to the homepage or contact us directly for any information.",
            "cert.homeTitle": "Our certifications",
            "cert.homeBody": "See all company certifications on one dedicated page.",
            "cert.homeCta": "Open certifications page"
        }
    };

    // ------------------------------------------------------------------
    // i18n walker
    // ------------------------------------------------------------------
    function setLanguage(lang) {
        if (!translations[lang]) lang = 'it';
        const dict = translations[lang];

        document.documentElement.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const value = dict[key];
            if (value === undefined) return;

            const tag = el.tagName;

            if (tag === 'META') {
                el.setAttribute('content', value);
            } else if (tag === 'TITLE') {
                document.title = value;
            } else if (tag === 'INPUT' || tag === 'TEXTAREA') {
                if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', value);
                }
            } else if (tag === 'OPTION') {
                el.textContent = value;
            } else {
                el.textContent = value;
            }
        });

        // Elements translating an attribute rather than text content,
        // e.g. data-i18n-attr="aria-label:a11y.toTop"
        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            const spec = el.getAttribute('data-i18n-attr');
            if (!spec) return;
            const parts = spec.split(':');
            if (parts.length !== 2) return;
            const attr = parts[0].trim();
            const key = parts[1].trim();
            const value = dict[key];
            if (value === undefined) return;
            el.setAttribute(attr, value);
        });

        // Update lang toggle visual state
        document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (btn) {
            const active = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        document.querySelectorAll('.lang-toggle').forEach(function (toggle) {
            toggle.setAttribute('data-active-lang', lang === 'en' ? 'en' : 'it');
        });

        // Persist
        try {
            localStorage.setItem('lang', lang);
        } catch (e) { /* private mode / blocked */ }

        updateMenuToggleA11y(lang);
    }

    function initialLanguage() {
        try {
            const saved = localStorage.getItem('lang');
            if (saved && translations[saved]) return saved;
        } catch (e) { /* ignore */ }
        // Default: Italian (canonical)
        return 'it';
    }

    // ------------------------------------------------------------------
    // Theme preference (system default + persisted override)
    // ------------------------------------------------------------------
    const THEME_KEY = 'theme';
    let systemThemeMedia = null;

    function isValidTheme(theme) {
        return theme === 'light' || theme === 'dark';
    }

    function systemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function savedTheme() {
        try {
            const value = localStorage.getItem(THEME_KEY);
            return isValidTheme(value) ? value : null;
        } catch (e) {
            return null;
        }
    }

    function resolvedTheme() {
        return savedTheme() || systemTheme();
    }

    function updateThemeColorMeta(theme) {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) return;
        const color = theme === 'dark' ? '#0f172a' : '#ffffff';
        meta.setAttribute('content', color);
    }

    function applyTheme(theme) {
        const resolved = isValidTheme(theme) ? theme : 'light';
        document.documentElement.setAttribute('data-theme', resolved);
        updateThemeColorMeta(resolved);
        document.querySelectorAll('#themeToggle').forEach(function (btn) {
            const isDark = resolved === 'dark';
            btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        });
    }

    function currentLanguage() {
        const lang = document.documentElement.getAttribute('lang');
        return translations[lang] ? lang : 'it';
    }

    function updateMenuToggleA11y(lang) {
        const useLang = translations[lang] ? lang : currentLanguage();
        const dict = translations[useLang] || translations.it;
        document.querySelectorAll('.menu-toggle').forEach(function (btn) {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            const label = expanded ? dict["a11y.menuClose"] : dict["a11y.menuOpen"];
            btn.setAttribute('aria-label', label);
        });
    }

    function initThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        applyTheme(resolvedTheme());

        toggle.addEventListener('click', function () {
            const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            try {
                localStorage.setItem(THEME_KEY, next);
            } catch (e) { /* private mode / blocked */ }
        });

        systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = function () {
            if (!savedTheme()) {
                applyTheme(systemTheme());
            }
        };
        if (typeof systemThemeMedia.addEventListener === 'function') {
            systemThemeMedia.addEventListener('change', handleSystemThemeChange);
        } else if (typeof systemThemeMedia.addListener === 'function') {
            systemThemeMedia.addListener(handleSystemThemeChange);
        }
    }

    // ------------------------------------------------------------------
    // Mobile menu
    // ------------------------------------------------------------------
    function initMobileMenu() {
        const toggle = document.querySelector('.menu-toggle');
        const links = document.getElementById('navLinks');
        if (!toggle || !links) return;

        function openMenu() {
            links.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
            document.documentElement.classList.add('menu-open');
            document.body.classList.add('menu-open');
            updateMenuToggleA11y(currentLanguage());
        }
        function closeMenu() {
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.documentElement.classList.remove('menu-open');
            document.body.classList.remove('menu-open');
            updateMenuToggleA11y(currentLanguage());
        }
        function isOpen() {
            return links.classList.contains('open');
        }

        toggle.addEventListener('click', function () {
            if (isOpen()) closeMenu(); else openMenu();
        });

        // Close when a nav link is tapped
        links.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });

        // Close on Escape
        document.addEventListener('keydown', function (ev) {
            if (ev.key === 'Escape' && isOpen()) closeMenu();
        });

        // Close on resize past breakpoint
        let lastW = window.innerWidth;
        window.addEventListener('resize', function () {
            const w = window.innerWidth;
            if (w > 820 && lastW <= 820 && isOpen()) closeMenu();
            lastW = w;
        });

        // Swipe-down-to-close (mobile drawer)
        // Tracks finger, lets the drawer follow downward, and closes past threshold.
        const SWIPE_CLOSE_THRESHOLD = 80;   // px below which the drawer snaps back
        const RUBBER_LIMIT = 200;           // px after which extra travel is damped

        let touchStartY = null;
        let touchDeltaY = 0;
        let dragging = false;
        let rafId = 0;
        let pendingTranslateY = 0;

        function applyDrawerDragTransform() {
            rafId = 0;
            if (!dragging) return;
            links.style.transition = 'none';
            if (pendingTranslateY <= 0) {
                links.style.transform = '';
                return;
            }
            const damped = pendingTranslateY > RUBBER_LIMIT
                ? RUBBER_LIMIT + (pendingTranslateY - RUBBER_LIMIT) * 0.4
                : pendingTranslateY;
            links.style.transform = 'translateY(' + damped + 'px)';
        }

        function scheduleDrawerDragTransform(dy) {
            pendingTranslateY = dy;
            if (rafId) return;
            rafId = window.requestAnimationFrame(applyDrawerDragTransform);
        }

        function clearDrag() {
            if (rafId) {
                window.cancelAnimationFrame(rafId);
                rafId = 0;
            }
            dragging = false;
            touchStartY = null;
            touchDeltaY = 0;
            pendingTranslateY = 0;
            links.style.transition = '';
            links.style.transform = '';
        }

        links.addEventListener('touchstart', function (ev) {
            if (!isOpen()) return;
            if (ev.touches.length !== 1) return;
            // Don't hijack inner scroll: only start drag when drawer is at the top
            if (links.scrollTop > 0) return;
            touchStartY = ev.touches[0].clientY;
            touchDeltaY = 0;
            dragging = true;
        }, { passive: true });

        links.addEventListener('touchmove', function (ev) {
            if (!dragging || touchStartY === null) return;
            const dy = ev.touches[0].clientY - touchStartY;
            if (dy <= 0) {
                touchDeltaY = 0;
                scheduleDrawerDragTransform(0);
                return;
            }
            touchDeltaY = dy;
            scheduleDrawerDragTransform(dy);
        }, { passive: true });

        function endDrag() {
            if (!dragging) return;
            const passedThreshold = touchDeltaY > SWIPE_CLOSE_THRESHOLD;
            // Re-enable the CSS transition before changing classes
            links.style.transition = '';
            if (passedThreshold) {
                // Clear inline transform so the closed-state CSS rule animates in
                links.style.transform = '';
                closeMenu();
            } else {
                // Snap back to open position
                links.style.transform = '';
            }
            dragging = false;
            touchStartY = null;
            touchDeltaY = 0;
        }

        links.addEventListener('touchend', endDrag, { passive: true });
        links.addEventListener('touchcancel', clearDrag, { passive: true });
    }

    // ------------------------------------------------------------------
    // Back-to-top button
    // ------------------------------------------------------------------
    function initToTop() {
        const btn = document.getElementById('toTop');
        if (!btn) return;

        // Un-hide so CSS transitions can take over; still hidden via opacity.
        btn.hidden = false;

        const threshold = 400; // px scrolled before showing
        let ticking = false;

        function update() {
            const y = window.scrollY || document.documentElement.scrollTop;
            btn.classList.toggle('is-visible', y > threshold);
            ticking = false;
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        }, { passive: true });

        btn.addEventListener('click', function () {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        });

        update();
    }

    // ------------------------------------------------------------------
    // Portfolio filter
    // ------------------------------------------------------------------
    function initPortfolioFilter() {
        const filters = document.querySelectorAll('.portfolio-filters .filter');
        const items = document.querySelectorAll('.portfolio-item');
        if (!filters.length || !items.length) return;

        filters.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const f = btn.getAttribute('data-filter');

                filters.forEach(function (other) {
                    const active = other === btn;
                    other.classList.toggle('active', active);
                    other.setAttribute('aria-pressed', active ? 'true' : 'false');
                });

                items.forEach(function (item) {
                    const cat = item.getAttribute('data-cat');
                    const show = f === 'all' || cat === f;
                    if (show) {
                        item.removeAttribute('hidden');
                    } else {
                        item.setAttribute('hidden', '');
                    }
                });
            });
        });
    }

    // ------------------------------------------------------------------
    // Language toggle wiring
    // ------------------------------------------------------------------
    function initLangToggle() {
        document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    // ------------------------------------------------------------------
    // Year in footer
    // ------------------------------------------------------------------
    function initYear() {
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
    }

    // ------------------------------------------------------------------
    // Map loader - shared between consent gate and cookie banner
    // ------------------------------------------------------------------
    var mapLoaded = false;
    function loadMap() {
        if (mapLoaded) return;
        var wrapper = document.getElementById('mapWrapper');
        if (!wrapper) return;
        var src = wrapper.getAttribute('data-map-src');
        if (!src) return;
        var lang = currentLanguage();
        var dict = translations[lang] || translations.it;
        var title = dict['contact.mapTitle'] || 'Mappa Siel Eolie';
        var iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.title = title;
        iframe.setAttribute('width', '600');
        iframe.setAttribute('height', '450');
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.cssText = 'width:100%;height:100%;border:0;display:block';
        wrapper.innerHTML = '';
        wrapper.appendChild(iframe);
        mapLoaded = true;
        try { localStorage.setItem('mapConsent', '1'); } catch (e) {}
    }

    // ------------------------------------------------------------------
    // Cookie banner dismiss (animated)
    // ------------------------------------------------------------------
    function dismissBanner(banner) {
        banner.classList.add('cookie-banner--closing');
        banner.addEventListener('animationend', function () {
            banner.hidden = true;
            banner.classList.remove('cookie-banner--closing');
        }, { once: true });
    }

    // ------------------------------------------------------------------
    // Map consent gate
    // ------------------------------------------------------------------
    function initMapConsent() {
        var wrapper = document.getElementById('mapWrapper');
        if (!wrapper) return;

        try {
            if (localStorage.getItem('mapConsent') === '1' || localStorage.getItem('cookieConsent') === 'accepted') {
                loadMap();
                return;
            }
        } catch (e) {}

        var btn = document.getElementById('mapConsentBtn');
        if (btn) btn.addEventListener('click', function () {
            try { localStorage.setItem('cookieConsent', 'accepted'); } catch (e) {}
            var banner = document.getElementById('cookieBanner');
            if (banner) dismissBanner(banner);
            loadMap();
        });
    }

    // ------------------------------------------------------------------
    // Cookie consent banner
    // ------------------------------------------------------------------
    function initCookieBanner() {
        var banner = document.getElementById('cookieBanner');
        if (!banner) return;

        try {
            if (localStorage.getItem('cookieConsent') || localStorage.getItem('mapConsent') === '1') return;
        } catch (e) {}

        banner.hidden = false;

        var acceptBtn = document.getElementById('cookieAccept');
        var declineBtn = document.getElementById('cookieDecline');

        if (acceptBtn) acceptBtn.addEventListener('click', function () {
            try { localStorage.setItem('cookieConsent', 'accepted'); } catch (e) {}
            dismissBanner(banner);
            loadMap();
        });

        if (declineBtn) declineBtn.addEventListener('click', function () {
            try { localStorage.setItem('cookieConsent', 'declined'); } catch (e) {}
            dismissBanner(banner);
        });
    }

    // ------------------------------------------------------------------
    // Portfolio lightbox
    // ------------------------------------------------------------------
    function initLightbox() {
        var dialog = document.getElementById('lightbox');
        if (!dialog) return;

        // Each [data-lightbox] container is its own gallery, so paging with the
        // arrows stays inside the set the user actually clicked into.
        var groups = Array.prototype.map.call(
            document.querySelectorAll('[data-lightbox]'),
            function (container) {
                return Array.prototype.filter.call(container.children, function (el) {
                    return el.tagName === 'FIGURE' && el.querySelector('img');
                });
            }
        ).filter(function (group) { return group.length; });

        if (!groups.length) return;

        var lbImg = dialog.querySelector('.lightbox-img');
        var lbCaption = dialog.querySelector('.lightbox-caption');
        var closeBtn = dialog.querySelector('.lightbox-close');
        var prevBtn = dialog.querySelector('.lightbox-prev');
        var nextBtn = dialog.querySelector('.lightbox-next');
        var items = [];
        var currentIndex = -1;

        function openAt(index) {
            currentIndex = index;
            var item = items[index];
            var itemImg = item.querySelector('img');
            if (!itemImg) return;
            lbImg.src = itemImg.getAttribute('src');
            lbImg.alt = itemImg.alt;
            if (lbCaption) lbCaption.textContent = itemImg.alt;
            // Older engines throw if showModal() is called on an open dialog.
            if (!dialog.open) dialog.showModal();
        }

        function closeDialog() {
            dialog.close();
            if (currentIndex >= 0) items[currentIndex].focus();
        }

        function showPrev() {
            var idx = currentIndex;
            do { idx = (idx - 1 + items.length) % items.length; } while (items[idx].hasAttribute('hidden') && idx !== currentIndex);
            openAt(idx);
        }

        function showNext() {
            var idx = currentIndex;
            do { idx = (idx + 1) % items.length; } while (items[idx].hasAttribute('hidden') && idx !== currentIndex);
            openAt(idx);
        }

        groups.forEach(function (group) {
            group.forEach(function (item, index) {
                item.setAttribute('tabindex', '0');
                item.setAttribute('role', 'button');
                var itemImg = item.querySelector('img');
                if (itemImg) item.setAttribute('aria-label', itemImg.alt);

                function open() {
                    items = group;
                    openAt(index);
                }

                item.addEventListener('click', open);
                item.addEventListener('keydown', function (ev) {
                    if (ev.key === 'Enter' || ev.key === ' ') {
                        ev.preventDefault();
                        open();
                    }
                });
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeDialog);
        if (prevBtn) prevBtn.addEventListener('click', showPrev);
        if (nextBtn) nextBtn.addEventListener('click', showNext);

        dialog.addEventListener('click', function (ev) {
            if (ev.target === dialog) closeDialog();
        });

        dialog.addEventListener('keydown', function (ev) {
            if (ev.key === 'ArrowLeft') showPrev();
            else if (ev.key === 'ArrowRight') showNext();
        });
    }

    // ------------------------------------------------------------------
    // Section spy — marks the nav link for the section currently in view.
    // Sub-pages carry a static aria-current="page" instead, so this only
    // runs where in-page section anchors exist.
    // ------------------------------------------------------------------
    function initSectionSpy() {
        if (!('IntersectionObserver' in window)) return;

        var links = {};
        var targets = [];

        document.querySelectorAll('.nav-links a[href*="#"]').forEach(function (link) {
            var href = link.getAttribute('href') || '';
            var id = href.slice(href.indexOf('#') + 1);
            if (!id) return;
            var section = document.getElementById(id);
            if (!section) return;
            links[id] = link;
            targets.push(section);
        });

        if (!targets.length) return;

        var visible = Object.create(null);

        function render() {
            var top = null;
            targets.forEach(function (section) {
                if (!visible[section.id]) return;
                if (top === null || section.getBoundingClientRect().top < top.getBoundingClientRect().top) {
                    top = section;
                }
            });
            Object.keys(links).forEach(function (id) {
                if (top && id === top.id) {
                    links[id].setAttribute('aria-current', 'location');
                } else {
                    links[id].removeAttribute('aria-current');
                }
            });
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                visible[entry.target.id] = entry.isIntersecting;
            });
            render();
        }, {
            // Discount the sticky header, and only count a section once it
            // occupies a meaningful slice of the viewport.
            rootMargin: '-' + (document.querySelector('header') || { offsetHeight: 72 }).offsetHeight + 'px 0px -55% 0px'
        });

        targets.forEach(function (section) { observer.observe(section); });
    }

    // ------------------------------------------------------------------
    // Consent withdrawal — only offered once a choice has been stored.
    // ------------------------------------------------------------------
    function initConsentReset() {
        var btn = document.getElementById('cookieReset');
        if (!btn) return;

        var stored = false;
        try {
            stored = !!(localStorage.getItem('cookieConsent') || localStorage.getItem('mapConsent'));
        } catch (e) {}
        if (!stored) return;

        btn.hidden = false;
        btn.addEventListener('click', function () {
            try {
                localStorage.removeItem('cookieConsent');
                localStorage.removeItem('mapConsent');
            } catch (e) {}
            // Reload so an already-injected Maps iframe is genuinely torn down
            // rather than just hidden.
            window.location.reload();
        });
    }

    // ------------------------------------------------------------------
    // Boot
    // ------------------------------------------------------------------
    function boot() {
        applyTheme(resolvedTheme());
        initYear();
        initThemeToggle();
        initLangToggle();
        initMobileMenu();
        initPortfolioFilter();
        initToTop();
        initMapConsent();
        initCookieBanner();
        initConsentReset();
        initLightbox();
        initSectionSpy();
        updateMenuToggleA11y(initialLanguage());
        setLanguage(initialLanguage());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
