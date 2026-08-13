<script setup>
import { ref } from 'vue'
import { useDarkMode } from '../composables/usedarkMode.js'

const { isDark, toggleMode } = useDarkMode();
const active = ref('home');

const items = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Proyek' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Kontak' },
];
</script>

<template>
  <nav class="fixed top-4 left-0 right-0 z-50 flex justify-center">
    <div class="bg-white/25 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/15 rounded-full p-1.5 flex gap-1 shadow-lg">
      <a v-for="item in items" :key="item.id" :href="`#${item.id}`" @click="active = item.id" class="text-xs px-3 py-1.5 rounded-full transition-colors" :class="active === item.id ? 'bg-white/60 dark:bg-white/70 text-[#1a3d28] font-medium' : 'text-slate-700/70 dark:text-slate-200/70 hover:text-slate-900 dark:hover:text-white'">{{ item.label }}</a>
      <button @click="toggleMode" class="text-xs px-3 py-1.5">
        {{ isDark ? '🌙' : '☀️' }}
      </button>
    </div>
  </nav>
</template>