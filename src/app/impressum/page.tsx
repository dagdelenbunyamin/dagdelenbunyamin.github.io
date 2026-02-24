import Link from 'next/link';

export const metadata = {
  title: 'Impressum – Bünyamin Dagdelen',
};

export default function ImpressumPage() {
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

        <h1 className="text-4xl font-bold mb-2">Impressum</h1>
        <p className="text-white/40 text-sm mb-12">Angaben gemäß § 5 TMG</p>

        <div className="space-y-10 text-white/75 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Betreiber dieser Website</h2>
            <p>
              Bünyamin Dagdelen<br />
              Im Johdorf 1<br />
              53227 Bonn<br />
              Deutschland
            </p>
            <p className="mt-3">
              E-Mail:{' '}
              <a href="mailto:buenyamin.dagdelen@dagdelen.info" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                buenyamin.dagdelen@dagdelen.info
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Bünyamin Dagdelen<br />
              Anschrift wie oben
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen
              dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Hinweis zur Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors break-all"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-3">
              Ich bin nicht verpflichtet und auch nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex gap-6 text-sm text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
        </div>

      </div>
    </main>
  );
}
