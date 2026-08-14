<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showIntro = ref(false);
const showCard = ref(false);
const showChips = ref(false);

// Fitur Interaktif JS: Parallax Mouse Movement
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e) => {
  const { innerWidth, innerHeight } = window;
  mouseX.value = (e.clientX / innerWidth - 0.5) * 20; // range -10px to 10px
  mouseY.value = (e.clientY / innerHeight - 0.5) * 20;
};

const skills = [
  { label: "Vue.js", color: "mint", rot: -6, top: "10%", left: "15%", speed: 1.2 },
  { label: "Laravel", color: "peach", rot: 6, top: "15%", left: "60%", speed: -0.8 },
  { label: "Tailwind", color: "yellow", rot: -4, top: "45%", left: "5%", speed: 1.5 },
  { label: "Pinia", color: "lavender", rot: 5, top: "45%", left: "65%", speed: -1.1 },
  { label: "MySQL", color: "lavender", rot: -5, top: "75%", left: "20%", speed: 0.9 },
  { label: "JavaScript", color: "mint", rot: 4, top: "75%", left: "55%", speed: -1.4 },
];

const colorHex = {
  mint: "#3fae72", peach: "#d99a5c", yellow: "#a8b545", lavender: "#9b6fd6",
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  setTimeout(() => showIntro.value = true, 60);
  setTimeout(() => showCard.value = true, 260);
  setTimeout(() => showChips.value = true, 420);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <section id="home" class="relative min-h-screen pt-40 md:pt-48 pb-28 px-8 md:px-20 overflow-hidden flex flex-col justify-center">
    
    <!-- Decorative Glows -->
    <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-white/50 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-mint/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">

      <!-- KOLOM KIRI -->
      <div class="flex flex-col justify-center">
        <Transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
        >
          <div v-if="showIntro" class="flex items-center gap-6 mb-8">
            <div class="w-20 h-20 rounded-full bg-mint flex items-center justify-center text-white font-bold text-4xl shadow-xl shadow-mint/30">Z</div>
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
            <div class="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/70 dark:border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none mb-8">
              
              <div class="flex items-center gap-2 mb-5 bg-mint/15 w-fit px-4 py-1.5 rounded-full border border-mint/30">
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

            <!-- Terminal & Social Icons -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div class="bg-[#1e1e2e]/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700/50 shadow-xl w-full sm:w-auto min-w-[250px]">
                <div class="flex gap-2 mb-2">
                  <div class="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
                </div>
                <div class="font-mono text-xs leading-5 text-slate-200">
                  <p><span class="text-[#cba6f7]">const</span> <span class="text-[#89b4fa]">skills</span> = [<span class="text-[#a6e3a1]">'Frontend'</span>, <span class="text-[#a6e3a1]">'Backend'</span>];</p>
                  <p><span class="text-[#89b4fa]">skills</span>.push(<span class="text-[#a6e3a1]">'Magic'</span>);</p>
                </div>
              </div>

              <div class="flex gap-4">
                <a href="https://github.com/zivanalfiyyah" target="_blank" class="w-12 h-12 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:text-mint hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="#" class="w-12 h-12 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:text-peach hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" class="w-12 h-12 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:text-lavender hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- KOLOM KANAN: Skill Orbit dengan Interactive Mouse Movement -->
      <div class="hidden md:block relative w-full h-[480px]">
        <div class="absolute inset-0 m-auto w-80 h-80 border-2 border-dashed border-white/60 dark:border-white/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
        
        <TransitionGroup
          enter-active-class="transition duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          enter-from-class="opacity-0 scale-0"
          enter-to-class="opacity-100 scale-100"
        >
          <div
            v-for="(chip, i) in (showChips ? skills : [])"
            :key="chip.label"
            class="absolute transition-transform duration-300 ease-out"
            :style="{ 
              top: chip.top, 
              left: chip.left, 
              transform: `translate(${mouseX * chip.speed}px, ${mouseY * chip.speed}px)`
            }"
          >
            <div
              :style="{ transform: `rotate(${chip.rot}deg)` }"
              class="group relative bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 rounded-3xl px-7 py-4 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:bg-white/80 hover:scale-110 transition-all duration-300 cursor-default"
            >
              <span class="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" :style="{ backgroundColor: colorHex[chip.color] }"></span>
              <span class="text-lg font-bold tracking-wide" :style="{ color: colorHex[chip.color] }">{{ chip.label }}</span>
            </div>
          </div>
        </TransitionGroup>
      </div>

    </div>
  </section>
</template>