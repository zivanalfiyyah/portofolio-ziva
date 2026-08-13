<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="bg-[#fffdf9] dark:bg-[#1a1826] min-h-screen">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectSection />
    <ContactSection />
  </div>
</template>