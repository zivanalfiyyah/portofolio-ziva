<script setup>
import { ref } from 'vue'

const activeCategory = ref('All')
const categories = ['All', 'Frontend', 'Backend', 'Tools']

const skills = ref([
  { name: 'Vue.js 3', category: 'Frontend', level: 'Lanjutan', icon: '⚡' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Lanjutan', icon: '🎨' },
  { name: 'JavaScript ES6+', category: 'Frontend', level: 'Menengah', icon: '🚀' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Lanjutan', icon: '💻' },
  { name: 'Laravel API', category: 'Backend', level: 'Menengah', icon: '🔥' },
  { name: 'PHP', category: 'Backend', level: 'Menengah', icon: '🐘' },
  { name: 'Git & GitHub', category: 'Tools', level: 'Menengah', icon: '📦' },
  { name: 'Figma to Code', category: 'Tools', level: 'Lanjutan', icon: '✨' },
])

const filteredSkills = computed(() => {
  if (activeCategory.value === 'All') return skills.value
  return skills.value.filter(skill => skill.category === activeCategory.value)
})
</script>

<template>
  <section id="skills" class="py-16 font-mono relative">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto space-y-2 mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
          Skillset & Teknologi
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Tools dan stack yang biasa saya gunakan dalam membangun aplikasi web.
        </p>

        <!-- Interactive Category Filter Tabs -->
        <div class="flex justify-center flex-wrap gap-2 pt-4">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'text-xs px-4 py-1.5 rounded-full transition-all duration-300 font-bold border cursor-pointer',
              activeCategory === cat 
                ? 'bg-purple-600 text-white border-purple-600 shadow-md scale-105' 
                : 'bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-purple-300'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Animated Skill Cards Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div 
          v-for="skill in filteredSkills" 
          :key="skill.name"
          class="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-purple-400/60 dark:hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 cursor-default"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl group-hover:scale-125 transition-transform duration-300">{{ skill.icon }}</span>
            <div>
              <h3 class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {{ skill.name }}
              </h3>
              <span class="text-[10px] text-slate-400 font-medium">{{ skill.level }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>