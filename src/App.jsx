import React, { useState } from 'react'
import { 
  ShieldCheck, 
  Scan, 
  FileSpreadsheet, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Menu,
  X,
  Smartphone,
  Tablet,
  ScanBarcode,
  Monitor,
} from 'lucide-react'

const devices = [
  { icon: Smartphone, label: 'Smartphone' },
  { icon: Tablet, label: 'Tablette' },
  { icon: ScanBarcode, label: 'Scan Zebra' },
  { icon: Monitor, label: 'PC' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      {/* 1. HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center" aria-label="Expiry — Accueil">
            <img
              src="/EXPIRY%20LOGO%20final.png"
              alt="Expiry"
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#fonctionnalites" className="text-sm font-medium text-slate-600 hover:text-teal-700">
              Fonctionnalités
            </a>
            <a href="#avantages" className="text-sm font-medium text-slate-600 hover:text-teal-700">
              Pourquoi Expiry ?
            </a>
            <a href="#tarifs" className="text-sm font-medium text-slate-600 hover:text-teal-700">
              Tarifs
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://app.expiry.fr/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Connexion
            </a>
            <a
              href="https://app.expiry.fr/register"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Essai gratuit 7 jours
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pb-6 pt-2 md:hidden">
            <div className="flex flex-col gap-4">
              <a 
                href="#fonctionnalites" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                Fonctionnalités
              </a>
              <a 
                href="#avantages" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                Pourquoi Expiry ?
              </a>
              <a 
                href="#tarifs" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                Tarifs
              </a>
              <hr className="border-slate-200" />
              <a
                href="https://app.expiry.fr/login"
                className="text-center font-semibold text-slate-700"
              >
                Connexion
              </a>
              <a
                href="https://app.expiry.fr/register"
                className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 py-2.5 text-center font-semibold text-white shadow-sm"
              >
                Essai gratuit 7 jours
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/70 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-teal-800">
              <span className="flex size-2 rounded-full bg-teal-600"></span>
              Solution dédiée aux pharmacies d'officine
            </div>
            
            <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Zéro péremption oubliée. <br />
              <span className="text-teal-600">Un contrôle de stock fluide et rapide.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Fini les listings papier interminables et les pertes financières. Expiry automatise le suivi des péremptions en pharmacie grâce au scan intelligent et au tri prioritaire des rayonnages.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://app.expiry.fr/register"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/25 hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 transition"
              >
                Démarrer l'essai gratuit de 7 jours
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#fonctionnalites"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Découvrir le fonctionnement
              </a>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-500">
              ✓ Sans carte bancaire • Configuration en 2 minutes • Annulation en 1 clic
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION FONCTIONNALITÉS CLÉS */}
      <section id="fonctionnalites" className="py-16 sm:py-24 bg-slate-100/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Pensé pour le quotidien de l'équipe officinale
            </h2>
            <p className="mt-4 text-slate-600">
              Une prise en main immédiate pour les titulaires, adjoints et préparateurs.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <p className="w-full text-center text-sm font-medium text-slate-500 sm:w-auto sm:mr-2">
              Compatible
            </p>
            {devices.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                <Icon className="size-4 text-teal-600" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Carte 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex size-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                <Scan className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Scan ultrarapide & Undo</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Scannez vos boîtes à la chaîne. Une erreur de saisie ? Annulez immédiatement le dernier scan d'une simple touche.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex size-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Clock className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Priorisation visuelle par urgence</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Repérez d'un coup d'œil les zones critiques grâce au code couleur (🔴 M, 🟠 M+1, 🔵 M+2) dans la vue de contrôle.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <FileSpreadsheet className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Import CSV des rayonnages</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Importez la structure géologique de votre pharmacie (comptoirs, réserves, frigos) en 1 clic grâce au fichier CSV.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION TARIF */}
      <section id="tarifs" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Un tarif simple, transparent et sans engagement
            </h2>
            <p className="mt-4 text-slate-600">
              Un abonnement unique qui couvre l'ensemble de votre équipe et de votre stock.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-lg rounded-3xl border-2 border-teal-600 bg-white p-8 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Offre Unique Officine
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900">Pack Pharmacie Complète</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                  9<span className="text-2xl sm:text-3xl">,90</span>€
                </span>
                <span className="text-slate-500 font-medium">HT / mois</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">7 jours d'essai offerts • Sans engagement</p>
            </div>

            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-teal-600 shrink-0" />
                <span>Accès illimité pour toute l'équipe (Titulaire, Adjoints, Préparateurs)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-teal-600 shrink-0" />
                <span>Gestion illimitée des zones de stockage</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-teal-600 shrink-0" />
                <span>Import/Export des zones par fichier CSV</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-teal-600 shrink-0" />
                <span>Nettoyage automatique du stock obsolète (M+3)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-teal-600 shrink-0" />
                <span>Support réactif par email</span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="https://app.expiry.fr/register"
                className="block w-full rounded-xl bg-teal-600 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-teal-700 transition"
              >
                Tester gratuitement pendant 7 jours
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-teal-600 text-white">
              <ShieldCheck className="size-4" />
            </div>
            <span className="text-lg font-bold text-white">Expiry.fr</span>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Expiry. Solution de gestion des péremptions en pharmacie. Tous droits réservés.
          </p>

          <div className="flex gap-6 text-xs">
            <a href="https://app.expiry.fr/login" className="hover:text-white">Accès Espace Pharmacie</a>
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  )
}