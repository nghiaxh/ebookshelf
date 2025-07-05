import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserInfo } from './useUserInfo';

export function useAuth() {
    const router = useRouter();
    const { name, role } = useUserInfo();

    const checkAuthentication = () => {
        if (!name.value || !role.value) {
            localStorage.clear();
            router.push('/user/login');
        }
    };

    const logOut = () => {
        if (confirm("Xác nhận đăng xuất?")) {
            localStorage.clear();
            router.push('/');
        }
    };

    return { checkAuthentication, logOut };
}