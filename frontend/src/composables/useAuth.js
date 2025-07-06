import { useRouter } from 'vue-router';
import { useUserInfo } from './useUserInfo';

export function useAuth() {
    const router = useRouter();
    const user = useUserInfo();

    const checkAuthentication = () => {
        if (!user.name || !user.role) {
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