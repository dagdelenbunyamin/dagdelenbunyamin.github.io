import Link from 'next/link';

export const metadata = {
  title: 'Datenschutz – Bünyamin Dagdelen',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <div className="container max-w-3xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold mb-2">Datenschutzerklärung</h1>
        <p className="text-white/40 text-sm mb-12">Stand: Februar 2026 · dagdelen.me</p>

        <div className="space-y-10 text-white/75 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Einleitung und allgemeine Angaben</h2>
            <p>
              Vielen Dank für Ihr Interesse an meiner Website. Der Schutz Ihrer personenbezogenen Daten
              ist mir ein sehr wichtiges Anliegen. Im Folgenden finden Sie Informationen zum Umgang mit
              Ihren Daten, die durch Ihre Nutzung meiner Website erfasst werden. Die Verarbeitung Ihrer
              Daten erfolgt entsprechend den gesetzlichen Regelungen der Datenschutz-Grundverordnung
              (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Verantwortlicher im Sinne der DSGVO</h2>
            <p>
              Bünyamin Dagdelen<br />
              Im Johdorf 1<br />
              53227 Bonn<br />
              E-Mail:{' '}
              <a href="mailto:buenyamin.dagdelen@dagdelen.info" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                buenyamin.dagdelen@dagdelen.info
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Erhebung und Speicherung personenbezogener Daten</h2>
            <h3 className="font-medium text-white/90 mb-2">Server-Logfiles</h3>
            <p>
              Beim Aufrufen dieser Website werden durch den Hosting-Anbieter automatisch Informationen
              an den Server gesendet. Diese Informationen werden temporär in einem Logfile gespeichert.
              Folgende Informationen werden ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
              gespeichert:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-white/60">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p className="mt-3">
              Die genannten Daten werden zu folgenden Zwecken verarbeitet:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>Gewährleistung eines reibungslosen Verbindungsaufbaus</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
            </ul>
            <p className="mt-3 text-white/50 text-sm">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Webhosting</h2>
            <p>
              Diese Website wird über <strong className="text-white/90">GitHub Pages</strong> (GitHub, Inc., 88 Colin P Kelly Jr St,
              San Francisco, CA 94107, USA) gehostet. Die Domain <strong className="text-white/90">dagdelen.me</strong> ist
              über <strong className="text-white/90">Namecheap, Inc.</strong> (4600 East Washington Street, Suite 305,
              Phoenix, AZ 85034, USA) registriert.
            </p>
            <p className="mt-3">
              Wenn Sie meine Website besuchen, werden personenbezogene Daten auf den Servern von
              GitHub Pages verarbeitet. Hierbei handelt es sich insbesondere um:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>IP-Adressen der Besucher</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Übertragene Datenmenge</li>
              <li>Referrer-URL</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="mt-3">
              Die Datenschutzerklärung von GitHub finden Sie unter:{' '}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors break-all"
              >
                docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
              </a>
            </p>
            <p className="mt-3 text-white/50 text-sm">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Kontaktaufnahme</h2>
            <p>
              Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für mögliche
              Anschlussfragen gespeichert. Eine Weitergabe dieser Daten erfolgt nicht ohne Ihre
              Einwilligung.
            </p>
            <p className="mt-3 text-white/50 text-sm">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Externe Links</h2>
            <p>
              Diese Website enthält ggf. Verlinkungen zu externen Websites (z. B. GitHub, LinkedIn).
              Nach dem Anklicken dieser Links werden Nutzerinformationen an den jeweiligen Anbieter
              übertragen. Für die Verarbeitung Ihrer personenbezogenen Daten durch diese Anbieter ist
              ausschließlich deren jeweilige Datenschutzerklärung maßgeblich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Datensicherheit</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL-/TLS-Verschlüsselung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Ihre Rechte</h2>
            <p>Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-white/60">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an:{' '}
              <a href="mailto:buenyamin.dagdelen@dagdelen.info" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                buenyamin.dagdelen@dagdelen.info
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Automatisierte Entscheidungsfindung</h2>
            <p>
              Eine automatisierte Entscheidungsfindung oder ein Profiling gemäß Art. 22 DSGVO findet
              nicht statt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Änderungsvorbehalt</h2>
            <p>
              Ich behalte mir vor, diese Datenschutzerklärung erforderlichenfalls unter Beachtung der
              geltenden Datenschutzvorschriften anzupassen bzw. zu aktualisieren.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex gap-6 text-sm text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
          <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
        </div>

      </div>
    </main>
  );
}
