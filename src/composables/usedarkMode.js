import { ref, watch, onMounted } from 'vue'

const isDark = ref(false);

export function useDarkMode() {
    function toggleMode() {
        isDark.value = !isDark.value;
    }

    watch(isDark, (val) => {
        localStorage.setItem('darkMode', val);
        document.documentElement.classList.toggle('dark', val);
    });

    onMounted(() => {
        const saved = localStorage.getItem('darkMode');
        isDark.value = saved !== null ? saved == 'true' : false;
        document.documentElement.classList.toggle('dark', isDark.value);
    });

    return {isDark, toggleMode};
}