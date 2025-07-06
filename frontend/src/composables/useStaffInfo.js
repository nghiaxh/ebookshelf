import { computed } from 'vue';

export function useStaffInfo() {
    const name = computed(() => localStorage.getItem('name') || '');
    const staff_id = computed(() => localStorage.getItem('staff_id') || '');
    const role = computed(() => localStorage.getItem('role') || '');
    const username = computed(() => localStorage.getItem('username') || '');
    const gender = computed(() => localStorage.getItem('gender') || '');
    const birthday = computed(() => localStorage.getItem('birthday') || '');
    const phone = computed(() => localStorage.getItem('phone') || '');
    const email = computed(() => localStorage.getItem('email') || '');
    const address = computed(() => localStorage.getItem('address') || '');

  return { staff_id, name, role, username, gender, birthday, phone, email, address };
}
