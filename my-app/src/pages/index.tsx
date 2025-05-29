import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-[var(--background)] relative overflow-hidden`}>
      {/* Background Blobs */}
      <div className="shape-blob shape-blob-1 animate-float"></div>
      <div className="shape-blob shape-blob-2 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="badge mb-6 animate-pulse">Yeni Özellik: Sesli Komutlar</div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="gradient-text">VoiceWatcher</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Güvenliğinizi <span className="text-[var(--primary)] font-bold">eğlenceli</span> ve <span className="text-[var(--secondary)] font-bold">kolay</span> hale getiriyoruz!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary group">
              <span className="relative z-10">Hemen Başla</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="btn-secondary">Nasıl Çalışır?</button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Özellikler</h2>
            <p className="text-xl text-gray-600">Güvenliğiniz için tasarlanmış akıllı özellikler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card group animate-fade-up">
              <div className="feature-icon">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sesli Asistan</h3>
              <p className="text-gray-600 mb-6">Doğal dil işleme ile akıllı sesli komut sistemi.</p>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="feature-card group animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">7/24 Güvenlik</h3>
              <p className="text-gray-600 mb-6">Kesintisiz izleme ve anlık bildirimler.</p>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="feature-card group animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Acil Durum</h3>
              <p className="text-gray-600 mb-6">Anında müdahale ve acil durum bildirimi.</p>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center animate-fade-up">
              <div className="text-5xl font-bold text-[var(--primary)] mb-4">24/7</div>
              <div className="text-xl text-gray-600">Kesintisiz Hizmet</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-[var(--secondary)] mb-4">10k+</div>
              <div className="text-xl text-gray-600">Mutlu Kullanıcı</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-bold text-[var(--accent)] mb-4">99%</div>
              <div className="text-xl text-gray-600">Başarı Oranı</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Hemen Başlayın</h2>
            <p className="text-xl text-gray-600 mb-12">
              Güvenliğiniz için en iyi çözüm. Ücretsiz deneyin!
            </p>
            <button className="btn-primary text-2xl px-12 py-6 animate-pulse">
              Ücretsiz Deneyin
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 VoiceWatcher. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
