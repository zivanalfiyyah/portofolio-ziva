<script setup>
const projects = [
  { name: "toko-online", desc: "CRUD produk dengan autentikasi Passport", stack: "Vue · Laravel · Pinia", color: "mint" },
  { name: "event-api", desc: "REST API manajemen event, role-based access", stack: "Laravel · Passport", color: "lavender" },
];

const cardClasses = {
  mint: "border-mint-light dark:border-mint/20 hover:border-mint",
  lavender: "border-lavender-light dark:border-lavender/20 hover:border-lavender",
};
const labelClasses = {
  mint: "text-mint-dark dark:text-mint",
  lavender: "text-lavender dark:text-lavender-light",
};
</script>

<template>
  <section id="projects" class="px-12 py-24 max-w-2xl">
    <p class="font-mono text-sm text-slate-300 dark:text-slate-600 mb-6">// projects</p>
    <div class="flex flex-col gap-4">
      <div
        v-for="p in projects"
        :key="p.name"
        :class="`border rounded-lg p-5 transition-colors ${cardClasses[p.color]}`"
      >
        <p :class="`font-mono text-sm mb-1 ${labelClasses[p.color]}`">{{ p.name }}/</p>
        <p class="text-slate-600 dark:text-slate-300 mb-2">{{ p.desc }}</p>
        <p class="font-mono text-xs text-slate-400 dark:text-slate-500">{{ p.stack }}</p>
      </div>
    </div>
  </section>
</template>