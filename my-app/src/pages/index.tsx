import { Inter } from "next/font/google";
import Image from 'next/image';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50 text-gray-800`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center bg-white shadow-sm">
        <div className="flex items-center">
          <Image src="/splash.png" alt="VoiceWatcher Logo" width={70} height={70} className="mr-4" />
          <div className="text-2xl font-bold text-gray-800">VoiceWatcher</div>
        </div>
        <button className="px-8 py-1 bg-[var(--primary)] text-white rounded-2xl text-base font-bold transition-all 
         hover:bg-[var(--primary-dark)] hover:shadow-lg hover:scale-105 active:scale-95
         transform duration-200 ease-in-out">Şimdi indirin -&gt;</button>
      </header>

      {/* Hero Section (Updated Content) */}
      <section className="container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-800">
            <span className="text-[var(--primary)]">VoiceWatcher</span> ile <br />
            Güvenliğiniz Parmaklarınızın Ucunda
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            VoiceWatcher, akıllı ses tanıma teknolojisi ile evinizin veya iş yerinizin güvenliğini sağlamak için tasarlanmış yenilikçi bir güvenlik uygulamasıdır.
          </p>
        </div>
        <div className="w-full max-w-md lg:max-w-lg">
          {/* Illustration */}
          <img src="/4983482.jpg" alt="Illustration" className="w-full h-auto" />
        </div>
      </section>

      {/* Single System Section (Adaptation) */}
      <section className="container mx-auto px-4 py-10 bg-white rounded-lg shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Neden VoiceWatcher?</h2>
          <p className="text-lg text-gray-600 mb-10">VoiceWatcher, güvenlik ihtiyaçlarınıza modern ve etkili çözümler sunar.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="feature-icon-small mb-4 bg-[var(--primary-light)] text-[var(--primary)]">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Anında Bildirimler</h3>
              <p className="text-gray-600">Şüpheli durumlarda anında bildirim alın.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="feature-icon-small mb-4 bg-[var(--primary-light)] text-[var(--primary)]">
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l-11.5 6.82v10.36l11.5 6.82 11.5-6.82v-10.36l-11.5-6.82zm0 2.315l9.25 5.485-9.25 5.485-9.25-5.485 9.25-5.485zm-9.25 12.17l9.25 5.485 9.25-5.485v-5.89l-9.25 5.485-9.25-5.485v5.89z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Kolay Kurulum</h3>
              <p className="text-gray-600">Basit adımlarla hızlıca kullanmaya başlayın.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="feature-icon-small mb-4 bg-[var(--primary-light)] text-[var(--primary)]">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.822 18.718c.18-.151.298-.371.298-.603v-1.004c1.714-1.552 2.78-3.751 2.88-6.111l.001-.16c0-4.341-3.617-7.903-8.5-8.833v-1.007h-2v1.007c-4.882.93-8.5 4.492-8.5 8.833 0 2.359 1.066 4.56 2.78 6.111v1.004c0 .232.118.452.298.603 1.743 1.46 4.096 2.415 6.702 2.711.051.006.103.009.157.009.054 0 .106-.003.157-.009 2.606-.296 4.959-1.251 6.702-2.711zm-1.822-.57c-1.452 1.088-3.362 1.8-5 1.988v-2.437c1.601-.177 3.049-.744 4.238-1.681l.762 2.13z m-15.713-2.41c1.191.936 2.639 1.504 4.238 1.681v2.437c-1.638-.188-3.548-.9-5-1.988l.762-2.13z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Gelişmiş Ses Analizi</h3>
              <p className="text-gray-600">Akıllı algoritmalarlai sesleri analiz edin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nasıl Çalışır Section (Text Only) */}
      <section className="container mx-auto px-4 py-10 text-center">
         <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Nasıl Çalışır?</h2>
           <p className="text-lg text-gray-600 mb-8">
             VoiceWatcher'ın çalışma prensibi oldukça basittir. Uygulama, cihazlarınızın mikrofonlarını kullanarak ortamdaki sesleri sürekli analiz eder. Tanımlanmış güvenlik olaylarına (örneğin, cam kırılması, yüksek sesli patlama vb.) ait ses imzalarını tespit ettiğinde, anında size bildirim gönderir. This ensures you can quickly respond to potential threats. You can customize sensitivity and notification types in the application settings.
           </p>
         </div>
       </section>

      {/* Placeholder Section for Text/Content - Updated */}
       <section className="container mx-auto px-4 py-10 bg-gray-100 rounded-lg shadow-lg mt-8">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">VoiceWatcher ile Güvende Kalın</h2>
             <p className="text-lg text-gray-600 mb-10">
               VoiceWatcher, gelişmiş ses analizi ve anında bildirim özellikleri ile sevdiklerinizin ve varlıklarınızın güvende olmasına yardımcı olur. Kurulumu kolaydır ve kullanıcı dostu arayüzü sayesinde herkes tarafından rahatlıkla kullanılabilir.
             </p>
           </div>
        </section>


      {/* Footer */}
      <footer className="bg-gray-200 py-8 text-gray-600">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 VoiceWatcher. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
