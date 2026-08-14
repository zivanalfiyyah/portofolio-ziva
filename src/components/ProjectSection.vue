<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'Sistem Informasi Kasir / POS',
    description: 'Aplikasi kasir berbasis web responsif dengan fitur kelola stok, transaksi real-time, dan laporan penjualan.',
    tags: ['Vue.js', 'Tailwind CSS', 'Laravel API'],
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Personal Portfolio Web',
    description: 'Website portofolio interaktif yang bersih dengan tema warna pastel, mode gelap, dan tata letak modern.',
    tags: ['Vue 3', 'Tailwind', 'Vite'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#'
  }
])
</script>

<template>
  <section id="projects" class="py-16 font-mono relative">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      
      <!-- Section Title -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
            Portofolio Proyek
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Beberapa hasil karya yang pernah saya kembangkan.
          </p>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="group bg-white/80 dark:bg-slate-900/80 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-emerald-400/50 dark:hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
        >
          <!-- Project Image with Zoom Effect -->
          <div class="relative overflow-hidden h-48 sm:h-56 bg-slate-100 dark:bg-slate-800">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>

          <!-- Project Details -->
          <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div class="space-y-2">
              <h3 class="text-base sm:text-lg font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Tags & Links -->
            <div class="space-y-4 pt-2">
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="text-[10px] px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-bold"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Action Links -->
              <div class="flex items-center gap-4 pt-2 border-t border-slate-100 dark:border-white/5 text-xs font-bold">
                <a :href="project.demoUrl" target="_blank" class="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1 group/btn">
                  <span>Live Demo</span>
                  <svg class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
                <a :href="project.githubUrl" target="_blank" class="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 inline-flex items-center gap-1">
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>