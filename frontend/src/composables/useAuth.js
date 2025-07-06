import { useRouter } from 'vue-router';

export function useAuth() {
    const router = useRouter();

    const logOut = () => {
        if (confirm("Xác nhận đăng xuất?")) {
            localStorage.clear();
            router.push('/');
        }
    };

    return { logOut };
}