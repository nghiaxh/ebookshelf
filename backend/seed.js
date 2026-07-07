import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "./src/config/index.js";
import User from "./src/models/user.model.js";
import Staff from "./src/models/staff.model.js";
import Publisher from "./src/models/publisher.model.js";
import Book from "./src/models/book.model.js";
import Borrow from "./src/models/borrow.model.js";

const SALT_ROUNDS = 10;

async function seed() {
    try {
        await mongoose.connect(config.db.uri);
        console.log("Connected to MongoDB");

        const models = [User, Staff, Publisher, Book, Borrow];
        const counts = await Promise.all(models.map(m => m.countDocuments()));
        if (counts.some(c => c > 0)) {
            console.log("Data already exists, skipping seed.");
            return;
        }

        await Promise.all([
            Borrow.deleteMany({}),
            Book.deleteMany({}),
            Publisher.deleteMany({}),
            Staff.deleteMany({}),
            User.deleteMany({}),
        ]);
        console.log("Cleared existing data");

        const hashedPassword = await bcrypt.hash("123456", SALT_ROUNDS);

        const staffs = await Staff.insertMany([
            { name: "Nguyễn Văn An", username: "staff01", password: hashedPassword, address: "123 Lê Lợi, Quận 1, TP.HCM", phone: "0901234567", role: "staff" },
            { name: "Trần Thị Bích", username: "staff02", password: hashedPassword, address: "456 Nguyễn Huệ, Quận 1, TP.HCM", phone: "0902345678", role: "staff" },
            { name: "Lê Hoàng Minh", username: "staff05", password: hashedPassword, address: "789 Trần Hưng Đạo, Quận 5, TP.HCM", phone: "0903456789", role: "staff" },
            { name: "Phạm Thị Hoa", username: "staff03", password: hashedPassword, address: "12 Nguyễn Đình Chiểu, Quận 3, TP.HCM", phone: "0904567890", role: "staff" },
            { name: "Võ Văn Tuấn", username: "staff04", password: hashedPassword, address: "67 Lê Duẩn, Quận 1, TP.HCM", phone: "0905678901", role: "staff" },
            { name: "Đỗ Minh Nhật", username: "staff06", password: hashedPassword, address: "89 Phạm Văn Đồng, Thủ Đức, TP.HCM", phone: "0906789012", role: "staff" },
        ]);
        console.log(`Seeded ${staffs.length} staff`);

        const users = await User.insertMany([
            { first_name: "Phạm", last_name: "Văn Hùng", username: "user01", password: hashedPassword, birthday: new Date("1998-05-12"), gender: true, address: "12 Nguyễn Trãi, Thanh Xuân, Hà Nội", phone: "0912345678", role: "user" },
            { first_name: "Nguyễn", last_name: "Thị Lan", username: "user02", password: hashedPassword, birthday: new Date("2000-09-23"), gender: false, address: "34 Hai Bà Trưng, Quận 3, TP.HCM", phone: "0923456789", role: "user" },
            { first_name: "Trần", last_name: "Đức Bảo", username: "user03", password: hashedPassword, birthday: new Date("1995-12-01"), gender: true, address: "56 Lý Tự Trọng, Quận 1, TP.HCM", phone: "0934567890", role: "user" },
            { first_name: "Lê", last_name: "Thị Hồng", username: "user04", password: hashedPassword, birthday: new Date("2002-07-15"), gender: false, address: "78 Xô Viết Nghệ Tĩnh, Hải Châu, Đà Nẵng", phone: "0945678901", role: "user" },
            { first_name: "Hoàng", last_name: "Minh Quân", username: "user05", password: hashedPassword, birthday: new Date("1997-03-08"), gender: true, address: "90 Trần Phú, Ba Đình, Hà Nội", phone: "0956789012", role: "user" },
            { first_name: "Vũ", last_name: "Thị Mai", username: "user06", password: hashedPassword, birthday: new Date("2001-11-20"), gender: false, address: "22 Nguyễn Văn Linh, Sơn Trà, Đà Nẵng", phone: "0967890123", role: "user" },
            { first_name: "Đặng", last_name: "Gia Bảo", username: "user07", password: hashedPassword, birthday: new Date("1999-06-30"), gender: true, address: "44 Lê Văn Sỹ, Tân Bình, TP.HCM", phone: "0978901234", role: "user" },
            { first_name: "Bùi", last_name: "Thanh Thảo", username: "user08", password: hashedPassword, birthday: new Date("2003-02-14"), gender: false, address: "15 Hoàng Diệu, Liên Chiểu, Đà Nẵng", phone: "0989012345", role: "user" },
            { first_name: "Ngô", last_name: "Văn Khánh", username: "user09", password: hashedPassword, birthday: new Date("1996-08-19"), gender: true, address: "28 Bạch Đằng, Hải Châu, Đà Nẵng", phone: "0990123456", role: "user" },
            { first_name: "Dương", last_name: "Thị Ánh", username: "user10", password: hashedPassword, birthday: new Date("2004-04-05"), gender: false, address: "73 Nguyễn Văn Cừ, Long Biên, Hà Nội", phone: "0909876543", role: "user" },
            { first_name: "Lý", last_name: "Hoàng Nam", username: "user11", password: hashedPassword, birthday: new Date("1994-10-30"), gender: true, address: "51 Phan Đăng Lưu, Phú Nhuận, TP.HCM", phone: "0918765432", role: "user" },
            { first_name: "Hồ", last_name: "Thị Thu", username: "user12", password: hashedPassword, birthday: new Date("2005-07-22"), gender: false, address: "8 Lê Hồng Phong, Ba Đình, Hà Nội", phone: "0927654321", role: "user" },
            { first_name: "Mai", last_name: "Đức Trung", username: "user13", password: hashedPassword, birthday: new Date("1993-12-11"), gender: true, address: "36 Ngô Quyền, Sơn Trà, Đà Nẵng", phone: "0936543210", role: "user" },
            { first_name: "Tô", last_name: "Thị Huệ", username: "user14", password: hashedPassword, birthday: new Date("2006-01-08"), gender: false, address: "94 Lý Thường Kiệt, Tân Phú, TP.HCM", phone: "0945432109", role: "user" },
            { first_name: "Lâm", last_name: "Văn Phúc", username: "user15", password: hashedPassword, birthday: new Date("1992-05-27"), gender: true, address: "5 Trường Chinh, Đống Đa, Hà Nội", phone: "0954321098", role: "user" },
        ]);
        console.log(`Seeded ${users.length} users`);

        const publishers = await Publisher.insertMany([
            { name: "Nhà Xuất Bản Trẻ", address: "61 Lý Chính Thắng, Quận 1, TP.HCM" },
            { name: "Nhà Xuất Bản Kim Đồng", address: "55 Quang Trung, Hai Bà Trưng, Hà Nội" },
            { name: "Nhà Xuất Bản Giáo Dục", address: "81 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội" },
            { name: "Nhà Xuất Bản Văn Học", address: "18 Nguyễn Thị Minh Khai, Quận 1, TP.HCM" },
            { name: "Nhà Xuất Bản Thế Giới", address: "46 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội" },
            { name: "Nhà Xuất Bản Hội Nhà Văn", address: "65 Nguyễn Du, Hai Bà Trưng, Hà Nội" },
            { name: "Nhà Xuất Bản Phụ Nữ", address: "39 Hàng Chuối, Hai Bà Trưng, Hà Nội" },
            { name: "Nhà Xuất Bản Chính Trị Quốc Gia", address: "6/86 Duy Tân, Cầu Giấy, Hà Nội" },
            { name: "Nhà Xuất Bản Tổng Hợp TP.HCM", address: "62 Nguyễn Thị Minh Khai, Quận 1, TP.HCM" },
            { name: "Nhà Xuất Bản Thông Tấn", address: "5 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội" },
        ]);
        console.log(`Seeded ${publishers.length} publishers`);

        const books = await Book.insertMany([
            { title: "Cây Cam Ngọt Của Tôi", price: 85000, quantity: 10, published_year: 2019, publisher_id: publishers[0]._id, author: "José Mauro de Vasconcelos" },
            { title: "Nhà Giả Kim", price: 79000, quantity: 15, published_year: 1988, publisher_id: publishers[3]._id, author: "Paulo Coelho" },
            { title: "Hoàng Tử Bé", price: 45000, quantity: 20, published_year: 1943, publisher_id: publishers[1]._id, author: "Antoine de Saint-Exupéry" },
            { title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ", price: 65000, quantity: 12, published_year: 2008, publisher_id: publishers[0]._id, author: "Nguyễn Nhật Ánh" },
            { title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh", price: 75000, quantity: 8, published_year: 2010, publisher_id: publishers[0]._id, author: "Nguyễn Nhật Ánh" },
            { title: "Đắc Nhân Tâm", price: 89000, quantity: 18, published_year: 1936, publisher_id: publishers[4]._id, author: "Dale Carnegie" },
            { title: "Hành Trình Về Phương Đông", price: 95000, quantity: 7, published_year: 2000, publisher_id: publishers[3]._id, author: "Baird T. Spalding" },
            { title: "Sống", price: 55000, quantity: 14, published_year: 1992, publisher_id: publishers[3]._id, author: "Dư Hoa" },
            { title: "Trí Tuệ Do Thái", price: 82000, quantity: 9, published_year: 2015, publisher_id: publishers[4]._id, author: "Eran Katz" },
            { title: "Người Giàu Cũng Khóc", price: 72000, quantity: 11, published_year: 2017, publisher_id: publishers[2]._id, author: "Robert T. Kiyosaki" },
            { title: "Vừa Nhắm Mắt Vừa Mở Cửa Sổ", price: 68000, quantity: 6, published_year: 2006, publisher_id: publishers[0]._id, author: "Nguyễn Ngọc Thuần" },
            { title: "Cà Phê Cùng Tony", price: 79000, quantity: 13, published_year: 2014, publisher_id: publishers[5]._id, author: "Tony Buổi Sáng" },
            { title: "Tôi Tài Giỏi Bạn Cũng Thế", price: 99000, quantity: 10, published_year: 2013, publisher_id: publishers[0]._id, author: "Adam Khoo" },
            { title: "Bí Mật Của May Mắn", price: 56000, quantity: 16, published_year: 2005, publisher_id: publishers[6]._id, author: "David Schwartz" },
            { title: "Khéo Ăn Nói Sẽ Có Được Thiện Cảm", price: 81000, quantity: 12, published_year: 2016, publisher_id: publishers[4]._id, author: "Dale Carnegie" },
            { title: "Đời Ngắn Đừng Ngủ Dài", price: 62000, quantity: 9, published_year: 2015, publisher_id: publishers[5]._id, author: "Robin Sharma" },
            { title: "Tư Duy Nhanh Và Chậm", price: 120000, quantity: 5, published_year: 2011, publisher_id: publishers[7]._id, author: "Daniel Kahneman" },
            { title: "Hóa Ra Thế Giới Thời Xưa Thật Thú Vị", price: 110000, quantity: 7, published_year: 2020, publisher_id: publishers[1]._id, author: "Lý Mặc Hàn" },
            { title: "Mắt Biếc", price: 82000, quantity: 15, published_year: 1990, publisher_id: publishers[0]._id, author: "Nguyễn Nhật Ánh" },
            { title: "Ngồi", price: 48000, quantity: 20, published_year: 2013, publisher_id: publishers[0]._id, author: "Nguyễn Nhật Ánh" },
            { title: "Làm Chủ Tư Duy Thay Đổi Vận Mệnh", price: 105000, quantity: 8, published_year: 2018, publisher_id: publishers[8]._id, author: "Anthony Robbins" },
            { title: "Nghĩ Giàu Và Làm Giàu", price: 95000, quantity: 11, published_year: 1937, publisher_id: publishers[8]._id, author: "Napoleon Hill" },
            { title: "Bước Chậm Lại Giữa Thế Gian Vội Vã", price: 72000, quantity: 14, published_year: 2017, publisher_id: publishers[5]._id, author: "Đại Lãn" },
            { title: "Trên Đường Băng", price: 88000, quantity: 6, published_year: 2019, publisher_id: publishers[0]._id, author: "Tony Buổi Sáng" },
            { title: "Thế Giới Phẳng", price: 115000, quantity: 4, published_year: 2005, publisher_id: publishers[7]._id, author: "Thomas L. Friedman" },
            { title: "Rừng Na Uy", price: 98000, quantity: 8, published_year: 1987, publisher_id: publishers[5]._id, author: "Haruki Murakami" },
            { title: "Muôn Kiếp Nhân Sinh", price: 110000, quantity: 6, published_year: 2020, publisher_id: publishers[8]._id, author: "John Vũ (Nguyên Phong)" },
            { title: "Kiêu Hãnh Và Định Kiến", price: 69000, quantity: 10, published_year: 1813, publisher_id: publishers[3]._id, author: "Jane Austen" },
            { title: "Đồi Gió Hú", price: 85000, quantity: 7, published_year: 1847, publisher_id: publishers[3]._id, author: "Emily Brontë" },
            { title: "Bố Già", price: 120000, quantity: 12, published_year: 1969, publisher_id: publishers[4]._id, author: "Mario Puzo" },
            { title: "Chiến Tranh Và Hòa Bình", price: 180000, quantity: 3, published_year: 1869, publisher_id: publishers[3]._id, author: "Leo Tolstoy" },
            { title: "Kafka Bên Bờ Biển", price: 105000, quantity: 5, published_year: 2002, publisher_id: publishers[5]._id, author: "Haruki Murakami" },
            { title: "Số Đỏ", price: 58000, quantity: 15, published_year: 1936, publisher_id: publishers[3]._id, author: "Vũ Trọng Phụng" },
            { title: "Chí Phèo", price: 35000, quantity: 25, published_year: 1941, publisher_id: publishers[3]._id, author: "Nam Cao" },
            { title: "Tắt Đèn", price: 42000, quantity: 18, published_year: 1939, publisher_id: publishers[3]._id, author: "Ngô Tất Tố" },
            { title: "Sapiens: Lược Sử Loài Người", price: 135000, quantity: 9, published_year: 2011, publisher_id: publishers[7]._id, author: "Yuval Noah Harari" },
            { title: "Homo Deus: Lược Sử Tương Lai", price: 140000, quantity: 5, published_year: 2015, publisher_id: publishers[7]._id, author: "Yuval Noah Harari" },
            { title: "Triệu Phú Khu Ổ Chuột", price: 92000, quantity: 8, published_year: 2019, publisher_id: publishers[0]._id, author: "Di Li" },
            { title: "Ngày Xưa Có Một Chuyện Tình", price: 78000, quantity: 11, published_year: 2016, publisher_id: publishers[0]._id, author: "Nguyễn Nhật Ánh" },
            { title: "Dế Mèn Phiêu Lưu Ký", price: 65000, quantity: 50, published_year: 1941, publisher_id: publishers[1]._id, author: "Tô Hoài" },
            { title: "Kính Vạn Hoa (Tập 1)", price: 55000, quantity: 45, published_year: 1995, publisher_id: publishers[0]._id, author: "Nguyễn Nhật Ánh" },
            { title: "Hai Vạn Dặm Dưới Đáy Biển", price: 85000, quantity: 48, published_year: 1870, publisher_id: publishers[3]._id, author: "Jules Verne" },
            { title: "Nhiều Cách Sống", price: 72000, quantity: 60, published_year: 1998, publisher_id: publishers[0]._id, author: "Nguyễn Duy" },
            { title: "Chúa Tể Những Chiếc Nhẫn", price: 150000, quantity: 55, published_year: 1954, publisher_id: publishers[5]._id, author: "J.R.R. Tolkien" },
            { title: "Hạt Giống Tâm Hồn", price: 68000, quantity: 46, published_year: 2004, publisher_id: publishers[8]._id, author: "Nhiều tác giả" },
            { title: "Kho Tàng Truyện Cổ Tích Việt Nam", price: 95000, quantity: 35, published_year: 2000, publisher_id: publishers[2]._id, author: "Nguyễn Đổng Chi" },
            { title: "Cuốn Theo Chiều Gió", price: 110000, quantity: 38, published_year: 1936, publisher_id: publishers[3]._id, author: "Margaret Mitchell" },
            { title: "Don Quixote", price: 125000, quantity: 40, published_year: 1605, publisher_id: publishers[3]._id, author: "Miguel de Cervantes" },
            { title: "Thép Đã Tôi Thế Đấy", price: 78000, quantity: 32, published_year: 1932, publisher_id: publishers[3]._id, author: "Nikolai Ostrovsky" },
            { title: "100 Năm Cô Đơn", price: 105000, quantity: 30, published_year: 1967, publisher_id: publishers[3]._id, author: "Gabriel García Márquez" },
            { title: "Con Chim Xanh Biếc Bay Về", price: 82000, quantity: 33, published_year: 2012, publisher_id: publishers[0]._id, author: "Nguyễn Nhật Ánh" },
            { title: "Đồi Thỏ", price: 98000, quantity: 28, published_year: 1972, publisher_id: publishers[5]._id, author: "Richard Adams" },
            { title: "Ông Già Và Biển Cả", price: 62000, quantity: 22, published_year: 1952, publisher_id: publishers[3]._id, author: "Ernest Hemingway" },
            { title: "Cánh Đồng Bất Tận", price: 72000, quantity: 26, published_year: 2005, publisher_id: publishers[3]._id, author: "Nguyễn Ngọc Tư" },
            { title: "Tôi Là Bêtô", price: 59000, quantity: 27, published_year: 2009, publisher_id: publishers[0]._id, author: "Nguyễn Nhật Ánh" },
            { title: "Hai Số Phận", price: 115000, quantity: 0, published_year: 1982, publisher_id: publishers[3]._id, author: "Jeffrey Archer" },
            { title: "Lão Hạc", price: 35000, quantity: 0, published_year: 1943, publisher_id: publishers[3]._id, author: "Nam Cao" },
            { title: "Truyện Kiều", price: 45000, quantity: 0, published_year: 1820, publisher_id: publishers[3]._id, author: "Nguyễn Du" },
            { title: "Những Người Khốn Khổ", price: 135000, quantity: 0, published_year: 1862, publisher_id: publishers[3]._id, author: "Victor Hugo" },
        ]);
        console.log(`Seeded ${books.length} books`);

        const borrows = await Borrow.insertMany([
            { user_id: users[0]._id, staff_id: staffs[0]._id, book_id: books[0]._id, borrow_date: new Date("2026-06-01"), return_date: new Date("2026-06-15"), status: "borrowing" },
            { user_id: users[0]._id, staff_id: staffs[0]._id, book_id: books[3]._id, borrow_date: new Date("2026-06-01"), return_date: new Date("2026-06-15"), status: "borrowing" },
            { user_id: users[1]._id, staff_id: staffs[1]._id, book_id: books[1]._id, borrow_date: new Date("2026-05-20"), return_date: new Date("2026-06-03"), status: "returned" },
            { user_id: users[2]._id, staff_id: staffs[0]._id, book_id: books[5]._id, borrow_date: new Date("2026-06-10"), return_date: new Date("2026-06-24"), status: "pending" },
            { user_id: users[3]._id, staff_id: staffs[1]._id, book_id: books[2]._id, borrow_date: new Date("2026-05-15"), return_date: new Date("2026-05-29"), status: "returned" },
            { user_id: users[4]._id, staff_id: staffs[2]._id, book_id: books[7]._id, borrow_date: new Date("2026-06-05"), return_date: new Date("2026-06-19"), status: "borrowing" },
            { user_id: users[5]._id, staff_id: staffs[0]._id, book_id: books[4]._id, borrow_date: new Date("2026-06-12"), return_date: new Date("2026-06-26"), status: "return_pending" },
            { user_id: users[6]._id, staff_id: staffs[3]._id, book_id: books[10]._id, borrow_date: new Date("2026-06-08"), return_date: new Date("2026-06-22"), status: "borrowing" },
            { user_id: users[6]._id, staff_id: staffs[3]._id, book_id: books[14]._id, borrow_date: new Date("2026-06-08"), return_date: new Date("2026-06-22"), status: "borrowing" },
            { user_id: users[7]._id, staff_id: staffs[4]._id, book_id: books[18]._id, borrow_date: new Date("2026-05-25"), return_date: new Date("2026-06-08"), status: "returned" },
            { user_id: users[7]._id, staff_id: staffs[4]._id, book_id: books[19]._id, borrow_date: new Date("2026-05-25"), return_date: new Date("2026-06-08"), status: "returned" },
            { user_id: users[8]._id, staff_id: staffs[5]._id, book_id: books[6]._id, borrow_date: new Date("2026-06-14"), return_date: new Date("2026-06-28"), status: "pending" },
            { user_id: users[8]._id, staff_id: staffs[5]._id, book_id: books[12]._id, borrow_date: new Date("2026-06-14"), return_date: new Date("2026-06-28"), status: "pending" },
            { user_id: users[9]._id, staff_id: staffs[2]._id, book_id: books[11]._id, borrow_date: new Date("2026-06-03"), return_date: new Date("2026-06-17"), status: "return_pending" },
            { user_id: users[10]._id, staff_id: staffs[3]._id, book_id: books[16]._id, borrow_date: new Date("2026-05-10"), return_date: new Date("2026-05-24"), status: "overdue" },
            { user_id: users[10]._id, staff_id: staffs[3]._id, book_id: books[21]._id, borrow_date: new Date("2026-05-10"), return_date: new Date("2026-05-24"), status: "overdue" },
            { user_id: users[11]._id, staff_id: staffs[0]._id, book_id: books[22]._id, borrow_date: new Date("2026-06-15"), return_date: new Date("2026-06-29"), status: "pending" },
            { user_id: users[12]._id, staff_id: staffs[1]._id, book_id: books[13]._id, borrow_date: new Date("2026-06-07"), return_date: new Date("2026-06-21"), status: "borrowing" },
            { user_id: users[13]._id, staff_id: staffs[4]._id, book_id: books[15]._id, borrow_date: new Date("2026-06-02"), return_date: new Date("2026-06-16"), status: "rejected" },
            { user_id: users[14]._id, staff_id: staffs[5]._id, book_id: books[24]._id, borrow_date: new Date("2026-06-11"), return_date: new Date("2026-06-25"), status: "borrowing" },

            // New books borrows
            { user_id: users[1]._id, staff_id: staffs[2]._id, book_id: books[39]._id, borrow_date: new Date("2026-06-10"), return_date: new Date("2026-06-24"), status: "borrowing" },
            { user_id: users[2]._id, staff_id: staffs[2]._id, book_id: books[40]._id, borrow_date: new Date("2026-06-11"), return_date: new Date("2026-06-25"), status: "borrowing" },
            { user_id: users[3]._id, staff_id: staffs[3]._id, book_id: books[41]._id, borrow_date: new Date("2026-06-05"), return_date: new Date("2026-06-19"), status: "returned" },
            { user_id: users[4]._id, staff_id: staffs[4]._id, book_id: books[45]._id, borrow_date: new Date("2026-06-12"), return_date: new Date("2026-06-26"), status: "return_pending" },
            { user_id: users[5]._id, staff_id: staffs[5]._id, book_id: books[46]._id, borrow_date: new Date("2026-06-15"), return_date: new Date("2026-06-29"), status: "pending" },
            { user_id: users[6]._id, staff_id: staffs[0]._id, book_id: books[49]._id, borrow_date: new Date("2026-06-06"), return_date: new Date("2026-06-20"), status: "borrowing" },
            { user_id: users[7]._id, staff_id: staffs[1]._id, book_id: books[51]._id, borrow_date: new Date("2026-06-13"), return_date: new Date("2026-06-27"), status: "pending" },
            { user_id: users[8]._id, staff_id: staffs[3]._id, book_id: books[55]._id, borrow_date: new Date("2026-05-20"), return_date: new Date("2026-06-03"), status: "overdue" },
            { user_id: users[9]._id, staff_id: staffs[4]._id, book_id: books[56]._id, borrow_date: new Date("2026-06-01"), return_date: new Date("2026-06-15"), status: "returned" },
            { user_id: users[10]._id, staff_id: staffs[5]._id, book_id: books[57]._id, borrow_date: new Date("2026-06-17"), return_date: new Date("2026-07-01"), status: "borrowing" },
        ]);
        console.log(`Seeded ${borrows.length} borrows`);

        console.log("Seed completed successfully!");
    } catch (error) {
        console.error("Seed failed:", error);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
    }
}

seed();
