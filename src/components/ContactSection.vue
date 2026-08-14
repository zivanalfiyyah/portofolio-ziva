<script setup>
import { ref } from 'vue'

const emailInput = ref('')
const isSubmitted = ref(false)
const isLoading = ref(false)
const currentYear = new Date().getFullYear()

const handleSubscribe = () => {
  if (emailInput.value.trim()) {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
      isSubmitted.value = true
      setTimeout(() => {
        isSubmitted.value = false
        emailInput.value = ''
      }, 3000)
    }, 600)
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer id="contact" class="relative left-1/2 -translate-x-1/2 w-screen z-10 font-mono mt-20 -mb-20 overflow-hidden">
    
    <!-- 1. BANNER CTA INTERAKTIF -->
    <div class="relative w-full bg-purple-100/70 dark:bg-slate-900/90 backdrop-blur-md border-y border-purple-200/60 dark:border-white/10 py-10 md:py-14 pl-24 pr-8 md:pl-36 md:pr-16 lg:pl-40 lg:pr-24 overflow-hidden group">
      
      <!-- Subtle Background Ambient Glow Warna Soft Mint -->
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-[#CDF2CA]/40 dark:bg-[#CDF2CA]/15 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div class="absolute -bottom-20 right-10 w-80 h-80 bg-purple-300/30 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        
        <div class="space-y-1 max-w-2xl">
          <h2 class="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
            Get in touch to see how I can help.
          </h2>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Terbuka untuk diskusi proyek web, tawaran kerja, atau sekadar bertegur sapa.
          </p>
        </div>

        <!-- Tombol "Hubungi Sekarang" Soft Mint #CDF2CA -->
        <a 
          href="mailto:zivanalfiyyah@gmail.com" 
          class="group/btn relative inline-flex items-center gap-2 bg-[#CDF2CA] hover:bg-[#bce8ba] text-slate-800 font-bold text-xs md:text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-[#CDF2CA]/60 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 overflow-hidden shrink-0"
        >
          <!-- Shimmer Highlight Effect -->
          <div class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700"></div>

          <span>Hubungi Sekarang</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>

      </div>
    </div>

    <!-- 2. FOOTER MAIN CONTENT -->
    <div class="w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl pt-12 pb-16 pl-24 pr-8 md:pl-36 md:pr-16 lg:pl-40 lg:pr-24 border-t border-slate-200/80 dark:border-white/10">
      <div class="max-w-6xl mx-auto">
        
        <div class="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-200/80 dark:border-white/10">
          
          <div class="col-span-1 md:col-span-3 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#CDF2CA]"></span>
              Keahlian
            </h4>
            <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li class="hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 transition-all duration-200 cursor-default">Frontend Development</li>
              <li class="hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 transition-all duration-200 cursor-default">Vue.js & Tailwind CSS</li>
              <li class="hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 transition-all duration-200 cursor-default">Laravel Backend API</li>
              <li class="hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 transition-all duration-200 cursor-default">UI/UX Implementation</li>
            </ul>
          </div>

          <div class="col-span-1 md:col-span-2 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#CDF2CA]"></span>
              Navigasi
            </h4>
            <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#home" class="hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-200">Home</a></li>
              <li><a href="#about" class="hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-200">Tentang Saya</a></li>
              <li><a href="#skills" class="hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-200">Skillset</a></li>
              <li><a href="#projects" class="hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-200">Portofolio Proyek</a></li>
            </ul>
          </div>

          <div class="col-span-1 md:col-span-2 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#CDF2CA]"></span>
              Sosial
            </h4>
            <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="https://github.com/zivanalfiyyah" target="_blank" class="group/link hover:text-purple-600 dark:hover:text-purple-400 inline-flex items-center gap-1.5 transition-colors">
                  <span>GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-slate-400 group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="group/link hover:text-purple-600 dark:hover:text-purple-400 inline-flex items-center gap-1.5 transition-colors">
                  <span>LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-slate-400 group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="group/link hover:text-purple-600 dark:hover:text-purple-400 inline-flex items-center gap-1.5 transition-colors">
                  <span>Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-slate-400 group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 md:col-span-5 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#CDF2CA]"></span>
              Kirim Pesan Cepat
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tulis email kamu di bawah untuk memulai obrolan atau penawaran kerja sama.
            </p>
            
            <form @submit.prevent="handleSubscribe" class="relative mt-2">
              <div class="flex items-center rounded-xl bg-slate-100 dark:bg-slate-900 p-1.5 border border-slate-200 dark:border-white/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400 ml-3 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  v-model="emailInput" 
                  type="email" 
                  placeholder="Email kamu..." 
                  required
                  class="w-full bg-transparent text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none pr-2"
                />
                <button 
                  type="submit" 
                  :disabled="isLoading || isSubmitted"
                  class="bg-purple-600 hover:bg-purple-700 disabled:bg-[#CDF2CA] disabled:text-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer"
                >
                  <span v-if="isLoading" class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span v-else-if="isSubmitted">Tersimpan!</span>
                  <span v-else class="flex items-center gap-1">Kirim <span>→</span></span>
                </button>
              </div>
            </form>
          </div>

        </div>

        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© {{ currentYear }} ZIVA. All rights reserved.</p>
          
          <div class="flex items-center gap-6">
            <a href="#" class="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Terms of Service</a>
            
            <button 
              @click="scrollToTop" 
              class="group flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer font-bold"
            >
              <span>Kembali ke atas</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>

  </footer>
</template>