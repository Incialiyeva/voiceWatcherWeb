import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur opacity-25"></div>
              <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                VoiceWatch
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Acil durumlar için sesli asistanınız. <br className="hidden md:block" />
              Güvenliğiniz bizim önceliğimiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold transition-all hover:bg-orange-600 hover:scale-105">
                <span className="relative z-10">Hemen İndir</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="group px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full text-lg font-semibold transition-all hover:bg-orange-50 hover:scale-105">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              Özellikler
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white hover:bg-orange-50 transition-all duration-300 hover:shadow-xl border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Hızlı Müdahale</h3>
              <p className="text-gray-600 leading-relaxed">Sesli komutlarla anında acil durum ekiplerini harekete geçirin. Saniyeler içinde yardım yolda.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white hover:bg-orange-50 transition-all duration-300 hover:shadow-xl border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">7/24 Güvenlik</h3>
              <p className="text-gray-600 leading-relaxed">Kesintisiz izleme ve anlık bildirimlerle güvenliğinizi sağlayın. Her an yanınızdayız.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white hover:bg-orange-50 transition-all duration-300 hover:shadow-xl border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sesli Asistan</h3>
              <p className="text-gray-600 leading-relaxed">Doğal dil işleme ile akıllı sesli komut sistemi. Sadece konuşun, gerisini biz halledelim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Güvenliğiniz İçin VoiceWatch
            </h2>
            <p className="text-xl text-orange-100 mb-12 leading-relaxed">
              Acil durumlar için en güvenilir çözüm. <br className="hidden md:block" />
              Hemen indirin ve güvenliğinizi VoiceWatch'a emanet edin.
            </p>
            <button className="group relative px-8 py-4 bg-white text-orange-500 rounded-full text-lg font-semibold transition-all hover:scale-105">
              <span className="relative z-10">Ücretsiz Deneyin</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text mb-6">VoiceWatch</h3>
              <p className="text-gray-600 leading-relaxed">Güvenliğiniz için en iyi çözüm. Her an yanınızdayız.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6 text-gray-800">Ürün</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Özellikler</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Fiyatlandırma</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Güvenlik</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6 text-gray-800">Şirket</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Hakkımızda</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">İletişim</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6 text-gray-800">Yasal</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Gizlilik Politikası</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Kullanım Şartları</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">KVKK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 VoiceWatch. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
