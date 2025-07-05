import { computed } from 'vue';

export function useUserInfo() {
    const name = computed(() => localStorage.getItem('name') || '');
    const role = computed(() => localStorage.getItem('role') || '');
    const username = computed(() => localStorage.getItem('username') || '');
    const birthday = computed(() => localStorage.getItem('birthday') || '');
    const phone = computed(() => localStorage.getItem('phone') || '');
    const address = computed(() => localStorage.getItem('address') || '');

    return { name, role, username, birthday, phone, address };
}
