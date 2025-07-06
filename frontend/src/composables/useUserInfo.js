import UserService from '../services/user.service';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const userService = new UserService();

export function useUserInfo() {
    const router = useRouter();
    
    const name = computed(() => localStorage.getItem('name') || '');
    const user_id = computed(() => localStorage.getItem('user_id') || '');
    const role = computed(() => localStorage.getItem('role') || '');
    const username = computed(() => localStorage.getItem('username') || '');
    const gender = computed(() => localStorage.getItem('gender') || '');
    const birthday = computed(() => localStorage.getItem('birthday') || '');
    const phone = computed(() => localStorage.getItem('phone') || '');
    const email = computed(() => localStorage.getItem('email') || '');
    const address = computed(() => localStorage.getItem('address') || '');

    // TODO fix this later
    const deleteAccount = async () => {
        if (confirm('Bạn có chắc chắn muốn xóa tài khoản này?')) {
            try {
                await userService.deleteUser(user.user_id);
                alert('Tài khoản đã được xóa thành công!');
                localStorage.clear();
                router.push('/');
            } catch (error) {
                alert('Đã xảy ra lỗi khi xóa tài khoản.');
                console.error(error);
            }
        }
    };

    return {
        name, user_id, role, username, gender, birthday, phone, email, address,
        deleteAccount
    };
};