<script setup>
import { ref, onMounted } from 'vue'

const showIntro = ref(false);
const showCard = ref(false);
const showChips = ref(false);

// Pakai posisi top & left buat desain orbit
const skills = [
  { label: "Vue.js", color: "mint", rot: -6, top: "10%", left: "15%" },
  { label: "Laravel", color: "peach", rot: 6, top: "15%", left: "60%" },
  { label: "Tailwind", color: "yellow", rot: -4, top: "45%", left: "5%" },
  { label: "Pinia", color: "lavender", rot: 5, top: "45%", left: "65%" },
  { label: "MySQL", color: "lavender", rot: -5, top: "75%", left: "20%" },
  { label: "JavaScript", color: "mint", rot: 4, top: "75%", left: "55%" },
];

const colorHex = {
  mint: "#3fae72", peach: "#d99a5c", yellow: "#a8b545", lavender: "#9b6fd6",
};

onMounted(() => {
  setTimeout(() => showIntro.value = true, 60);
  setTimeout(() => showCard.value = true, 260);
  setTimeout(() => showChips.value = true, 420);
});
</script>

<template>
  <section id="home" class="relative min-h-screen bg-hero-gradient pt-32 px-8 md:px-20 pb-20 overflow-hidden flex flex-col justify-center">
    
    <!-- Dekorasi Blur Background -->
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-white/40 dark:bg-white/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
    <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-mint/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full" style="min-height: 560px">

      <!-- KOLOM KIRI: Profile, Deskripsi, Terminal & Socials -->
      <div class="flex flex-col justify-center">
        <Transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
        >
          <div v-if="showIntro" class="flex items-center gap-6 mb-8">
            <div class="w-20 h-20 rounded-full bg-mint flex items-center justify-center text-white font-bold text-4xl shadow-lg shadow-mint/30">Z</div>
            <div>
              <p class="text-4xl font-extrabold text-[#1a3d28] dark:text-white tracking-wide">ZIVA</p>
              <div class="w-16 h-[5px] bg-mint rounded-full mt-2"></div>
            </div>
          </div>
        </Transition>

        <Transition
          enter-active-class="transition duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
        >
          <div v-if="showCard">
            <!-- Glass Card Utama -->
            <div class="bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/60 dark:border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
              
              <div class="flex items-center gap-2 mb-5 bg-mint/10 w-fit px-4 py-1.5 rounded-full border border-mint/20">
                <span class="relative flex h-2.5 w-2.5">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-mint"></span>
                </span>
                <span class="text-xs font-semibold text-mint uppercase tracking-wider">Available for work</span>
              </div>

              <h1 class="text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 leading-tight">
                Junior Web Developer
              </h1>
              <p class="text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Membangun antarmuka web modern dengan 
                <span class="text-mint font-bold border-b-2 border-mint">Vue.js</span> serta merangkai sistem andal menggunakan 
                <span class="text-peach font-bold border-b-2 border-peach">Laravel</span>.
              </p>
            </div>

            <!-- Terminal & Social Icons (Sesuai Gambar gog.PNG) -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <!-- Mini Terminal -->
              <div class="bg-[#1e1e2e]/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700/50 shadow-xl w-full sm:w-auto min-w-[250px]">
                <div class="flex gap-2 mb-2">
                  <div class="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
                </div>
                <div class="font-mono text-xs leading-5">
                  <p><span class="text-[#cba6f7]">const</span> <span class="text-[#89b4fa]">skills</span> = [<span class="text-[#a6e3a1]">'Frontend'</span>, <span class="text-[#a6e3a1]">'Backend'</span>];</p>
                  <p><span class="text-[#89b4fa]">skills</span>.push(<span class="text-[#a6e3a1]">'Magic'</span>);</p>
                </div>
              </div>

              <!-- Ikon Sosial Media -->
              <div class="flex gap-4">
                <a href="https://github.com/zivanalfiyyah" class="w-12 h-12 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/60 flex items-center justify-center text-slate-700 hover:text-mint hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="#" class="w-12 h-12 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/60 flex items-center justify-center text-slate-700 hover:text-peach hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" class="w-12 h-12 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/60 flex items-center justify-center text-slate-700 hover:text-lavender hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- KOLOM KANAN: Skill Orbit System -->
      <div class="hidden md:block relative w-full h-[480px]">
        
        <!-- Ornamen Lingkaran Orbit -->
        <div class="absolute inset-0 m-auto w-80 h-80 border-2 border-dashed border-white/40 dark:border-white/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
        <div class="absolute inset-0 m-auto w-56 h-56 border border-white/30 dark:border-white/5 rounded-full pointer-events-none"></div>

        <!-- Skill Chips Melayang di Posisi Orbit -->
        <TransitionGroup
          enter-active-class="transition duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          enter-from-class="opacity-0 scale-0"
          enter-to-class="opacity-100 scale-100"
        >
          <div
            v-for="(chip, i) in (showChips ? skills : [])"
            :key="chip.label"
            class="absolute float-animation"
            :style="{ 
              top: chip.top, 
              left: chip.left, 
              animationDelay: `${i * 0.4}s` 
            }"
          >
            <!-- Chips dengan Efek Glassmorphism -->
            <div
              :style="{ transform: `rotate(${chip.rot}deg)` }"
              class="group relative bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/70 dark:border-white/10 rounded-3xl px-7 py-4 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:bg-white/60 hover:scale-110 hover:-translate-y-2 hover:z-30 transition-all duration-300 cursor-default"
            >
              <!-- Glowing Dot di Pojok Chip saat di-hover -->
              <span class="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" :style="{ backgroundColor: colorHex[chip.color] }"></span>
              
              <span class="text-lg font-bold tracking-wide drop-shadow-sm" :style="{ color: colorHex[chip.color] }">{{ chip.label }}</span>
            </div>
          </div>
        </TransitionGroup>

      </div>

    </div>

    <!-- Animasi Scroll Down -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Scroll</span>
      <div class="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
        <div class="w-1.5 h-2 bg-slate-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
  100% { transform: translateY(0px); }
}

.float-animation {
  animation: float 5.5s ease-in-out infinite;
}
</style>