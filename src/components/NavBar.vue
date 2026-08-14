<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '../composables/usedarkMode.js'

const { isDark, toggleMode } = useDarkMode();
const active = ref('home');
const isScrolled = ref(false);

const items = [
  { id: 'home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { id: 'skills', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { id: 'projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { id: 'contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

const handleScroll = () => {
  // Pindah posisi jika scroll melebihi 300px
  isScrolled.value = window.scrollY > 300;

  // Auto-active section detector
  const sections = items.map(item => document.getElementById(item.id)).filter(Boolean);
  const scrollPosition = window.scrollY + 250;

  for (const section of sections) {
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      active.value = section.id;
      break;
    }
  }
};

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <nav 
    class="fixed z-50 bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/80 dark:border-white/10 shadow-2xl p-1.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
    :class="[
      isScrolled 
        ? 'top-1/2 -translate-y-1/2 left-6 flex flex-col gap-2 rounded-3xl shadow-mint/10' 
        : 'top-6 left-1/2 -translate-x-1/2 flex flex-row gap-1 rounded-full'
    ]"
  >
    <a 
      v-for="item in items" 
      :key="item.id" 
      :href="`#${item.id}`" 
      @click="active = item.id" 
      class="group relative flex items-center justify-center p-2.5 transition-all duration-500 ease-out rounded-full"
      :class="[
        active === item.id 
          ? 'bg-mint text-white font-bold shadow-lg shadow-mint/30 scale-105' 
          : 'text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-white/10'
      ]"
    >
      <!-- Icon Navigation -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
      </svg>

      <!-- Label Text dengan Animasi Menyusut Mulus (No Snap) -->
      <span 
        class="text-xs font-mono whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out"
        :class="isScrolled ? 'max-w-0 opacity-0 ml-0' : 'max-w-28 opacity-100 ml-2'"
      >
        {{ item.label }}
      </span>

      <!-- Tooltip Cantik saat posisi di Left Sidebar -->
      <span 
        v-if="isScrolled"
        class="absolute left-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-mono font-bold px-3 py-1.5 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shadow-xl whitespace-nowrap"
      >
        {{ item.label }}
      </span>
    </a>

    <!-- Theme Switcher Button -->
    <button 
      @click="toggleMode" 
      class="flex items-center justify-center p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 text-slate-700 dark:text-slate-200"
    >
      {{ isDark ? '🌙' : '☀️' }}
    </button>
  </nav>
</template>