import { reactive } from 'vue';

export function useStaffInfo() {
  const staff = reactive({
    name: localStorage.getItem('name') || '',
    staff_id: localStorage.getItem('staff_id') || '',
    role: localStorage.getItem('role') || '',
    username: localStorage.getItem('username') || '',
    gender: localStorage.getItem('gender') || '',
    birthday: localStorage.getItem('birthday') || '',
    phone: localStorage.getItem('phone') || '',
    email: localStorage.getItem('email') || '',
    address: localStorage.getItem('address') || '',
  });

  return { staff };
}
