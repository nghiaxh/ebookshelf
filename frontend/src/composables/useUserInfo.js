import UserService from '../services/user.service';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const userService = new UserService();

export function useUserInfo() {
    const router = useRouter();
    
    const user = reactive({
        name: localStorage.getItem('name') || '',
        user_id: localStorage.getItem('user_id') || '',
        role: localStorage.getItem('role') || '',
        username: localStorage.getItem('username') || '',
        gender: localStorage.getItem('gender') || '',
        birthday: localStorage.getItem('birthday') || '',
        phone: localStorage.getItem('phone') || '',
        email: localStorage.getItem('email') || '',
        address: localStorage.getItem('address') || '',
    });

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
    
    return { user, deleteAccount };
};