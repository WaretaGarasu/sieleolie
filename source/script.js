/* =========================================================================
   Siel Eolie — single script
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
            "meta.title": "Siel Eolie — Impianti elettrici alle Isole Eolie",
            "meta.ogTitle": "Siel Eolie — Impianti elettrici alle Isole Eolie",
            "meta.ogDescription": "Impianti elettrici civili e industriali, quadri, sicurezza, antincendio e fotovoltaico. Lipari e tutto l'arcipelago eoliano, dal 1997.",

            "brand.name": "Siel Eolie",

            "nav.about": "Chi siamo",
            "nav.services": "Servizi",
            "nav.certifications": "Certificazioni",
            "nav.portfolio": "Portfolio",
            "nav.contact": "Contatti",

            "hero.eyebrow": "Lipari · Isole Eolie · dal 1997",
            "hero.title": "Impianti elettrici alle Isole Eolie",
            "hero.lead": "Progettiamo, installiamo e manteniamo impianti elettrici civili e industriali, quadri, sistemi di sicurezza e antincendio, fotovoltaico. Con sede a Lipari, raggiungiamo ogni angolo dell'arcipelago — da Vulcano a Stromboli, da Salina ad Alicudi.",
            "hero.icimBadge": "ICIM · unica azienda certificata a Lipari e isole minori · dal 2014",
            "hero.ctaServices": "Scopri i servizi",
            "hero.ctaContact": "Contattaci",

            "about.eyebrow": "Chi siamo",
            "about.title": "Una storia eoliana, dal 1997",
            "about.companyTitle": "L'azienda",
            "about.companyBody": "Siel Eolie è un'impresa elettrica con sede a Lipari, attiva in tutto l'arcipelago. Realizziamo impianti civili e industriali, quadri elettrici su misura, automazioni e reti wireless, impianti fotovoltaici e sistemi antincendio. Lavoriamo per abitazioni private, alberghi e strutture ricettive, cantieri industriali, condomini ed enti pubblici — dal piccolo intervento al grande appalto, sempre con materiali di prima qualità e tempi di consegna rispettati. Il nostro team segue ogni lavoro dall'idea iniziale fino alla manutenzione programmata.",
            "about.historyTitle": "La storia",
            "about.historyBody": "Siel nasce a Lipari nel 2004, erede della S.I.EL snc avviata nel 1997 dal fondatore e attuale amministratore, Geometra Giuseppe Orto. In oltre vent'anni abbiamo visto cambiare le Eolie e siamo cresciuti insieme al territorio. Durante l'Emergenza Stromboli del 2003 abbiamo lavorato a fianco della Protezione Civile per portare impianti elettrici, videosorveglianza e cablaggio della rete LAN fin sul vulcano in attività — un intervento complesso, fatto di trasporti in elicottero, sentieri attrezzati e lavori in quota. Quello spirito — esserci dove serve, quando serve — ci guida ancora oggi.",
            "about.certTitle": "Certificazioni",
            "about.certBody": "Dal 2014 siamo certificati ICIM per la manutenzione di impianti antincendio, reti idranti e porte tagliafuoco: l'unica azienda autorizzata a fornire questi servizi a Lipari e nelle isole minori dell'arcipelago. La certificazione ICIM garantisce il rispetto delle normative UNI e la tracciabilità di ogni intervento — requisito fondamentale per alberghi, strutture pubbliche, condomini e qualsiasi attività soggetta a controllo antincendio.",

            "services.eyebrow": "Servizi",
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
            "services.solar.title": "Fotovoltaico",
            "services.solar.body": "Progettazione e installazione di impianti fotovoltaici chiavi in mano, per produrre energia pulita e ridurre la bolletta.",
            "services.automation.title": "Automazioni & reti",
            "services.automation.body": "Automazioni di cancelli e serrande, reti Wi-Fi e hyperlan, cablaggi strutturati e assistenza hardware.",

            "portfolio.eyebrow": "Portfolio",
            "portfolio.title": "Alcune delle nostre realizzazioni",
            "portfolio.lead": "Dalle abitazioni private ai cantieri sul vulcano — ogni progetto racconta oltre vent'anni di esperienza sul campo.",
            "portfolio.tabs.all": "Tutti",
            "portfolio.tabs.civile": "Impianti civili",
            "portfolio.tabs.industriale": "Impianti industriali",
            "portfolio.tabs.quadro": "Quadri elettrici",

            "contact.eyebrow": "Contatti",
            "contact.title": "Parliamone",
            "contact.lead": "Contattaci per un preventivo, una consulenza o un intervento di manutenzione. Siamo a Lipari e raggiungiamo tutte le Isole Eolie.",
            "contact.addressLabel": "Indirizzo",
            "contact.phoneFixedLabel": "Telefono",
            "contact.phoneLabel": "Cellulare",
            "contact.hoursLabel": "Orari",
            "contact.hoursValue": "Lun–Ven 09:00–13:00 / 15:00–19:00",

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

            "a11y.toTop": "Torna su",
            "a11y.themeToggle": "Cambia tema",
            "theme.toggleShort": "Tema",
            "theme.toggleLabel": "Cambia tema",

            "nf.metaTitle": "Pagina non trovata — Siel Eolie",
            "nf.title": "Pagina non trovata",
            "nf.body": "La pagina che stai cercando non esiste o è stata spostata.",
            "nf.ctaHome": "Torna alla home",
            "nf.ctaContact": "Contattaci",

            "cert.metaTitle": "Certificazioni — Siel Eolie",
            "cert.eyebrow": "Certificazioni",
            "cert.title": "Certificazioni e abilitazioni",
            "cert.lead": "Le certificazioni garantiscono tracciabilita, conformita normativa e manutenzioni eseguite secondo standard verificabili. Questa sezione raccoglie i documenti disponibili e riflette il nostro percorso di miglioramento continuo.",
            "cert.icim.title": "Certificazione ICIM",
            "cert.icim.body": "Dal 2014 siamo certificati per la manutenzione di impianti antincendio, reti idranti e porte tagliafuoco. A Lipari e nelle isole minori siamo l'unica azienda abilitata per questi servizi.",
            "cert.icim.tag": "Attiva dal 2014",
            "cert.rina.title": "RINA Certification",
            "cert.rina.body": "Siamo abilitati alla fornitura dei seguenti servizi a navi e altre unita classificate RINA: ispezioni e manutenzione di apparecchi ed impianti antincendio, limitatamente ad impianti fissi a CO2, estintori portatili ed estintori di grande capacita.",
            "cert.rina.tag": "Attiva dal 2019",
            "cert.rina.menuA11y": "Apri opzioni certificazione precedenti",
            "cert.rina.downloadMenuA11y": "Apri opzioni di download precedenti",
            "cert.rina.prevView": "Visualizza certificazione 2019",
            "cert.rina.prevDownload": "Scarica certificazione 2019",
            "cert.more.title": "Percorso di crescita continua",
            "cert.more.body": "Continueremo a conseguire nuove certificazioni per migliorare come azienda e garantire standard sempre piu alti.",
            "cert.viewFile": "Visualizza certificazione",
            "cert.downloadFile": "Scarica",
            "cert.ctaHome": "Torna alla home",
            "cert.ctaContact": "Contattaci",
            "cert.quickActionsEyebrow": "Azioni rapide",
            "cert.quickActionsTitle": "Vuoi continuare la navigazione?",
            "cert.quickActionsBody": "Torna alla home oppure contattaci direttamente per qualsiasi informazione.",
            "cert.homeEyebrow": "Certificazioni",
            "cert.homeTitle": "Le nostre certificazioni",
            "cert.homeBody": "Consulta tutte le certificazioni dell'azienda in un'unica pagina dedicata.",
            "cert.homeCta": "Apri pagina certificazioni"
        },

        en: {
            "meta.title": "Siel Eolie — Electrical systems in the Aeolian Islands",
            "meta.ogTitle": "Siel Eolie — Electrical systems in the Aeolian Islands",
            "meta.ogDescription": "Siel Eolie — civil and industrial electrical systems, switchboards, security, fire safety and photovoltaics. Lipari and the whole Aeolian archipelago, since 1997.",

            "brand.name": "Siel Eolie",

            "nav.about": "About",
            "nav.services": "Services",
            "nav.certifications": "Certifications",
            "nav.portfolio": "Portfolio",
            "nav.contact": "Contact",

            "hero.eyebrow": "Lipari · Aeolian Islands · since 1997",
            "hero.title": "Electrical systems for the Aeolian Islands",
            "hero.lead": "We design, install and maintain civil and industrial electrical systems, switchboards, security and fire-safety systems, and photovoltaics. Based in Lipari, we reach every corner of the archipelago — from Vulcano to Stromboli, from Salina to Alicudi.",
            "hero.icimBadge": "ICIM certified · the only provider in Lipari and the smaller islands · since 2014",
            "hero.ctaServices": "Our services",
            "hero.ctaContact": "Get in touch",

            "about.eyebrow": "About us",
            "about.title": "An Aeolian story, since 1997",
            "about.companyTitle": "The company",
            "about.companyBody": "Siel Eolie is an electrical contractor based in Lipari, active across the whole archipelago. We build civil and industrial systems, custom electrical switchboards, automations and wireless networks, photovoltaic installations and fire-safety systems. We work for private homes, hotels and hospitality venues, industrial sites, condominiums and public bodies — from the smallest call-out to the largest contract, always with top-quality materials and deadlines we actually keep. Our team follows every job from first idea to scheduled maintenance.",
            "about.historyTitle": "Our story",
            "about.historyBody": "Siel was founded in Lipari in 2004 as the successor to S.I.EL snc, started in 1997 by our founder and current manager, Giuseppe Orto (Geometra). In more than twenty years we have watched the Aeolian Islands change, and we have grown with the territory. During the 2003 Stromboli emergency we worked alongside Italy's Civil Protection to bring electrical systems, video-surveillance and LAN cabling all the way up onto the active volcano — a demanding job that involved helicopter lifts, rope-access paths and high-altitude work. That spirit — being there where and when it matters — still guides us today.",
            "about.certTitle": "Certifications",
            "about.certBody": "Since 2014 we have been ICIM-certified for the maintenance of fire-safety systems, hydrant networks and fire doors: the only authorised provider of these services in Lipari and the smaller islands of the archipelago. ICIM certification guarantees compliance with current UNI standards and full traceability of every intervention — essential for hotels, public buildings, condominiums and any business subject to fire-safety inspection.",

            "services.eyebrow": "Services",
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
            "services.solar.title": "Photovoltaics",
            "services.solar.body": "Design and turnkey installation of photovoltaic systems, to produce clean energy and cut your bill.",
            "services.automation.title": "Automation & networks",
            "services.automation.body": "Automation of gates and shutters, Wi-Fi and hyperlan networks, structured cabling and hardware support.",

            "portfolio.eyebrow": "Portfolio",
            "portfolio.title": "Selected work",
            "portfolio.lead": "From private homes to worksites on the volcano — every project carries more than twenty years of hands-on experience.",
            "portfolio.tabs.all": "All",
            "portfolio.tabs.civile": "Civil",
            "portfolio.tabs.industriale": "Industrial",
            "portfolio.tabs.quadro": "Switchboards",

            "contact.eyebrow": "Contact",
            "contact.title": "Let's talk",
            "contact.lead": "Reach out for a quote, a consultation or a maintenance call. We're based in Lipari, and we cover every one of the Aeolian Islands.",
            "contact.addressLabel": "Address",
            "contact.phoneFixedLabel": "Phone",
            "contact.phoneLabel": "Mobile",
            "contact.hoursLabel": "Hours",
            "contact.hoursValue": "Mon–Fri 09:00–13:00 / 15:00–19:00",

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

            "a11y.toTop": "Back to top",
            "a11y.themeToggle": "Switch theme",
            "theme.toggleShort": "Theme",
            "theme.toggleLabel": "Switch theme",

            "nf.metaTitle": "Page not found — Siel Eolie",
            "nf.title": "Page not found",
            "nf.body": "The page you're looking for doesn't exist or has been moved.",
            "nf.ctaHome": "Back to home",
            "nf.ctaContact": "Contact us",

            "cert.metaTitle": "Certifications — Siel Eolie",
            "cert.eyebrow": "Certifications",
            "cert.title": "Certifications and qualifications",
            "cert.lead": "Our certifications ensure traceability, regulatory compliance, and maintenance performed against verifiable standards. This section gathers available documents and reflects our continuous improvement path.",
            "cert.icim.title": "ICIM Certification",
            "cert.icim.body": "Since 2014 we have been certified for the maintenance of fire-safety systems, hydrant networks, and fire doors. In Lipari and the smaller islands, we are the only authorised provider for these services.",
            "cert.icim.tag": "Active since 2014",
            "cert.rina.title": "RINA Certification",
            "cert.rina.body": "We are qualified to provide the following services to ships and other units classed by RINA: inspection and maintenance of fire-fighting appliances and systems, limited to fixed CO2 systems, portable extinguishers, and wheeled extinguishers (large capacity).",
            "cert.rina.tag": "Active since 2019",
            "cert.rina.menuA11y": "Open previous certification options",
            "cert.rina.downloadMenuA11y": "Open previous download options",
            "cert.rina.prevView": "View 2019 certificate",
            "cert.rina.prevDownload": "Download 2019 certificate",
            "cert.more.title": "Continuous growth path",
            "cert.more.body": "We will continue pursuing new certifications to improve as a company and ensure ever higher standards.",
            "cert.viewFile": "View certificate",
            "cert.downloadFile": "Download",
            "cert.ctaHome": "Back to home",
            "cert.ctaContact": "Contact us",
            "cert.quickActionsEyebrow": "Quick actions",
            "cert.quickActionsTitle": "Would you like to continue browsing?",
            "cert.quickActionsBody": "Return to the homepage or contact us directly for any information.",
            "cert.homeEyebrow": "Certifications",
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

    function applyTheme(theme) {
        const resolved = isValidTheme(theme) ? theme : 'light';
        document.documentElement.setAttribute('data-theme', resolved);
        document.querySelectorAll('#themeToggle').forEach(function (btn) {
            const isDark = resolved === 'dark';
            btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
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
        }
        function closeMenu() {
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.documentElement.classList.remove('menu-open');
            document.body.classList.remove('menu-open');
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
                    other.setAttribute('aria-selected', active ? 'true' : 'false');
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

    function initCertificationMenus() {
        const menus = document.querySelectorAll('[data-cert-menu]');
        if (!menus.length) return;

        let openMenu = null;
        let closeTimer = null;

        function close(menu) {
            const target = menu || openMenu;
            if (!target) return;
            const toggle = target.querySelector('[data-cert-menu-toggle]');
            const panel = target.querySelector('.cert-doc-popover');
            if (!toggle || !panel) return;

            target.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            if (closeTimer) window.clearTimeout(closeTimer);
            closeTimer = window.setTimeout(function () {
                panel.hidden = true;
            }, 180);
            if (openMenu === target) openMenu = null;
        }

        function open(menu) {
            if (openMenu && openMenu !== menu) close(openMenu);
            const toggle = menu.querySelector('[data-cert-menu-toggle]');
            const panel = menu.querySelector('.cert-doc-popover');
            if (!toggle || !panel) return;

            if (closeTimer) {
                window.clearTimeout(closeTimer);
                closeTimer = null;
            }
            panel.hidden = false;
            menu.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            openMenu = menu;
        }

        menus.forEach(function (menu) {
            const toggle = menu.querySelector('[data-cert-menu-toggle]');
            if (!toggle) return;
            toggle.addEventListener('click', function (ev) {
                ev.preventDefault();
                const isOpen = menu.classList.contains('is-open');
                if (isOpen) close(menu); else open(menu);
            });
        });

        document.addEventListener('click', function (ev) {
            if (!openMenu) return;
            if (openMenu.contains(ev.target)) return;
            close(openMenu);
        });

        document.addEventListener('keydown', function (ev) {
            if (ev.key !== 'Escape') return;
            close(openMenu);
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
        initCertificationMenus();
        initToTop();
        setLanguage(initialLanguage());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
