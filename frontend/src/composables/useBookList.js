import { ref, computed, onMounted, defineModel } from 'vue';
import BookService from '../services/book.service';

const bookService = new BookService();

export function useBookList() {
    const books = ref([]);
    const searchText = ref("");

    const fetchBooks = async () => {
        try {
            const response = await bookService.getAllBooks();
            // debug code later
            // console.log(response);
            books.value = response;
        } catch (error) {
            console.error(error);
        }
    };

    const searchFilteredBooks = computed(() => {
        if (!searchText.value) return books.value;

        const keyword = searchText.value.toLowerCase();

        return books.value.filter(book => {
            const searchableText = [book.title, book.book_id, book.author, book.published_year, book.price, book.genre]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();

            return searchableText.includes(keyword);
        });
    });

    const deleteBook = async (id) => {
        if (confirm('Bạn có chắc muốn xóa cuốn sách này không?')) {
            try {
                await bookService.delete(id);
                books.value = books.value.filter(book => book._id !== id);
                alert('Đã xóa sách thành công.');
            } catch (error) {
                console.error(error);
                alert('Đã xảy ra lỗi khi xóa sách.');
            }
        }
    };

    onMounted(fetchBooks);

    return {
        searchText,
        searchFilteredBooks,
        fetchBooks,
        deleteBook,
    };
}