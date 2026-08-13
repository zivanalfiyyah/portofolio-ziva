<script setup>
import { ref } from "vue";
import { projects } from "../data/projects.js";

const brokenImages = ref({});
function handleImgError(name) {
  brokenImages.value[name] = true;
}

const cardClasses = {
  mint: "border-mint-light dark:border-mint/20 hover:border-mint",
  lavender: "border-lavender-light dark:border-lavender/20 hover:border-lavender",
  peach: "border-peach-light dark:border-peach/20 hover:border-peach",
  yellow: "border-yellow-light dark:border-yellow/20 hover:border-yellow",
};
const labelClasses = {
  mint: "text-mint-dark dark:text-mint",
  lavender: "text-lavender dark:text-lavender-light",
  peach: "text-peach dark:text-peach-light",
  yellow: "text-yellow dark:text-yellow-light",
};
const tagClasses = {
  mint: "text-mint-dark dark:text-mint bg-mint-light dark:bg-mint/15",
  lavender: "text-lavender dark:text-lavender-light bg-lavender-light/60 dark:bg-lavender/15",
  peach: "text-peach dark:text-peach-light bg-peach-light/60 dark:bg-peach/15",
  yellow: "text-yellow dark:text-yellow-light bg-yellow-light/60 dark:bg-yellow/15",
};
</script>

<template>
  <section id="projects" class="px-12 py-24 max-w-2xl mx-auto">
    <p class="font-mono text-sm text-slate-300 dark:text-slate-600 mb-6">// projects</p>
    <div class="flex flex-col gap-5">
      <div
        v-for="p in projects"
        :key="p.name"
        :class="`border rounded-lg overflow-hidden transition-colors ${cardClasses[p.color]}`"
      >
        <img
          v-if="p.image && !brokenImages[p.name]"
          :src="p.image"
          :alt="p.title"
          class="w-full h-44 object-cover"
          @error="handleImgError(p.name)"
        />
        <div
          v-else-if="p.image"
          :class="`w-full h-44 flex items-center justify-center font-mono text-xs ${tagClasses[p.color]}`"
        >
          [ preview belum tersedia ]
        </div>

        <div class="p-5">
          <div class="flex items-center gap-2 mb-1">
            <p :class="`font-mono text-sm ${labelClasses[p.color]}`">{{ p.name }}/</p>
            <span
              v-if="p.status"
              class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
            >
              {{ p.status }}
            </span>
          </div>

          <p class="text-slate-700 dark:text-slate-200 font-medium mb-1">{{ p.title }}</p>
          <p class="text-slate-600 dark:text-slate-300 text-sm mb-3">{{ p.desc }}</p>

          <div v-if="p.tags" class="flex flex-wrap gap-1.5 mb-3">
            <span
              v-for="tag in p.tags"
              :key="tag"
              :class="`font-mono text-[11px] px-2 py-0.5 rounded ${tagClasses[p.color]}`"
            >
              {{ tag }}
            </span>
          </div>
          <p v-else class="font-mono text-xs text-slate-400 dark:text-slate-500 mb-1">
            {{ p.stack }}
          </p>

          <div v-if="p.demoLink || p.repoLink" class="flex gap-4 mt-2">
            <a
              v-if="p.demoLink"
              :href="p.demoLink"
              target="_blank"
              rel="noopener noreferrer"
              :class="`font-mono text-xs underline underline-offset-2 ${labelClasses[p.color]}`"
            >
              [ live demo ]
            </a>
            <a
              v-if="p.repoLink"
              :href="p.repoLink"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs underline underline-offset-2 text-slate-400 dark:text-slate-500"
            >
              [ repository ]
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>