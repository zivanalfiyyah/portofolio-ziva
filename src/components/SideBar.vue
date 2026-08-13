<script setup>
import { ref } from 'vue'
import { useDarkMode } from '../composables/usedarkMode.js'

const { isDark, toggleMode } = useDarkMode();
const active = ref('about');

const items = [
  { id: 'about', label: 'about.js', color: 'mint' },
  { id: 'skills', label: 'skills.js', color: 'lavender' },
  { id: 'projects', label: 'projects.js', color: 'peach' },
  { id: 'contact', label: 'contact.js', color: 'yellow' },
];

const activeClasses = {
  mint: "bg-mint-light dark:bg-mint/15 text-mint-dark dark:text-mint-light",
  lavender: "bg-lavender-light/60 dark:bg-lavender/15 text-lavender dark:text-lavender-light",
  peach: "bg-peach-light/60 dark:bg-peach/15 text-peach dark:text-peach-light",
  yellow: "bg-yellow-light/60 dark:bg-yellow/15 text-yellow dark:text-yellow-light",
};
</script>

<template>
  <aside class="fixed left-0 top-0 h-screen w-56 border-r border-mint-light dark:border-mint/15 bg-[#fdfcf8] dark:bg-[#1c1a24] flex flex-col justify-between py-6 px-4">
    <div>
      <p class="font-mono text-xs text-slate-400 dark:text-slate-500 mb-6">ziva/</p>
      <nav class="flex flex-col gap-1">
        <a v-for="item in items" :key="item.id" :href="`#${item.id}`" @click="active = item.id" class="font-mono text-sm px-3 py-2 rounded-md transition-colors" :class="active === item.id ? activeClasses[item.color] : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'">
          <span class="text-slate-300 dark:text-slate-600 mr-1">▸</span>{{ item.label }}
        </a>
      </nav>
    </div>
    <button @click="toggleMode" class="font-mono text-xs text-slate-400 dark:text-slate-500 text-left px-3 hover:text-mint">
      {{ isDark ? '// light_mode()' : '// dark_mode()' }}
    </button>
  </aside>
</template>