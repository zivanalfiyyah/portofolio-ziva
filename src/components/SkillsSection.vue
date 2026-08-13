<script setup>
const versions = [
  { v: "v0.1", title: "JS Fundamentals", items: "Variabel, function, array, async/await", color: "mint" },
  { v: "v0.2", title: "Vue Core", items: "Reactivity, directive, lifecycle hooks", color: "lavender" },
  { v: "v0.3", title: "Single File Component", items: "Props, slot, provide/inject, transition", color: "peach" },
  { v: "v1.0", title: "Full-stack Integration", items: "Vue Router, Pinia, Laravel API, Passport auth", color: "yellow" },
];

const badgeClasses = {
  mint: "text-mint-dark dark:text-mint bg-mint-light dark:bg-mint/15",
  lavender: "text-lavender dark:text-lavender-light bg-lavender-light/60 dark:bg-lavender/15",
  peach: "text-peach dark:text-peach-light bg-peach-light/60 dark:bg-peach/15",
  yellow: "text-yellow dark:text-yellow-light bg-yellow-light/60 dark:bg-yellow/15",
};
</script>

<template>
  <section id="skills" class="px-12 py-24 max-w-2xl">
    <p class="font-mono text-sm text-slate-300 dark:text-slate-600 mb-6">// journal belajar</p>
    <div class="flex flex-col gap-5">
      <div v-for="item in versions" :key="item.v" class="flex gap-4">
        <span :class="`font-mono text-xs h-fit px-2 py-1 rounded ${badgeClasses[item.color]}`">
          {{ item.v }}
        </span>
        <div>
          <p class="text-slate-700 dark:text-slate-200 font-medium">{{ item.title }}</p>
          <p class="text-sm text-slate-400 dark:text-slate-500">{{ item.items }}</p>
        </div>
      </div>
    </div>
  </section>
</template>