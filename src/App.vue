<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen text-slate-800 dark:text-slate-100 selection:bg-mint/30 overflow-x-hidden">
    <NavBar />
    
    <!-- Hero Section -->
    <HeroSection />

    <!-- Section Bawah: Adaptif Mode Terang & Gelap -->
    <div class="relative z-20 pt-6">
      <div class="bg-white/30 dark:bg-slate-900/60 backdrop-blur-3xl rounded-t-[3.5rem] border-t border-white/80 dark:border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.03)]">
        
        <!-- Banner Visual Pastel Soft -->
        <div class="max-w-6xl mx-auto px-6 pt-10">
          <div class="relative h-56 md:h-72 rounded-3xl overflow-hidden border border-white/80 dark:border-white/10 shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
              alt="Pastel Fluid Graphic" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 dark:opacity-70"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0f0e17] via-transparent to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 md:left-10 max-w-md">
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-mint bg-mint/15 border border-mint/30 px-3 py-1 rounded-full backdrop-blur-md">
                Creative Engineering
              </span>
              <h3 class="text-2xl md:text-3xl font-extrabold mt-3 text-slate-900 dark:text-white drop-shadow-sm">
                Designing logic with aesthetic precision.
              </h3>
            </div>
          </div>
        </div>

        <!-- Section Utama -->
        <main class="space-y-12 pb-24">
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </main>
      </div>
    </div>
  </div>
</template>