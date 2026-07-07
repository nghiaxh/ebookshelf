# Ứng dụng Mượn Sách Trực Tuyến

## Hướng dẫn

Yêu cầu: **Docker Desktop**

### Clone dự án về máy
```bash
git clone https://github.com/nghiaxh/ebookshelf.git
```

### Chạy dự án
```bash
docker compose up --build  # chạy lần đầu hoặc build lại images khi có update code
docker compose update      # lần sau khi chạy không thay đổi code
docker compose down -v     # xóa data, sau đó chạy lại để seed từ đầu
```

### Tài khoản mẫu

| Username | Password | Vai trò |
|----------|----------|---------|
| `staff01` | `123456` | Nhân viên |
| `staff05` | `123456` | Nhân viên |
| `user01` | `123456` | Độc giả |

## Mô tả dự án

Ứng dụng Mượn Sách Trực Tuyến là một nền tảng giúp người dùng dễ dàng tìm kiếm, mượn và quản lý sách trực tuyến một cách nhanh chóng và tiện lợi.

Ứng dụng hướng tới việc tạo ra một thư viện số giúp kết nối người đọc với nguồn sách phong phú mọi lúc mọi nơi, đồng thời hỗ trợ thủ tục mượn và trả sách hoàn toàn online.

## Tính năng chính

-   **Tìm kiếm sách:** Tìm kiếm sách theo tên, tác giả, năm xuất bản...

-   **Đăng ký và đăng nhập:** Người dùng có thể tạo tài khoản và đăng nhập để mượn sách.

-   **Mượn sách:** Tạo đơn mượn sách trực tuyến với thời gian mượn tùy chọn.

-   **Quản lý sách:** Xem danh mục sách, cập nhật, chỉnh sửa, xóa thông tin sách.

-   **Quản lý đơn mượn:** Theo dõi đơn mượn sách, cập nhật thông tin đơn mượn sách, xử lý yêu cầu đơn mượn của người dùng.

-   **Quản lý nhà xuất bản:** Xem danh sách nhà xuất bản, thực hiện thêm, sửa, xóa nhà xuất bản.

-   **Quản lý người dùng:** Xem danh sách người dùng, thực hiện thêm, sửa, xóa người dùng.

-   **Quản lý nhân viên:** Xem danh sách nhân viên, thực hiện thêm, sửa, xóa nhân viên.

## Công nghệ sử dụng

-   Frontend: VueJS, TailwindCSS, DaisyUI

-   Backend: Node.js với Express

-   Cơ sở dữ liệu: MongoDB

-   Xác thực: JSON Web Token (JWT)

## Cấu trúc thư mục

```
ebookshelf/
├── docker-compose.yml           # Docker Compose config
│
├── backend/                     # Mã nguồn server và API (Node.js + Express)
│   ├── Dockerfile
│   ├── server.js                # Entry point
│   ├── app.js                   # Cấu hình Express app
│   ├── seed.js                  # Tạo dữ liệu mẫu cho db
│   ├── wait-for-mongo.js        # Script chờ MongoDB sẵn sàng
│   ├── docker-entrypoint.sh
│   ├── package.json
│   └── src/
│       ├── config/
│       │   └── index.js         # Cấu hình kết nối DB, env
│       ├── models/              # Mongoose models (book, borrow, user, staff, publisher)
│       ├── routes/              # Định tuyến API endpoints
│       ├── controllers/         # Xử lý request/response
│       ├── services/            # Business logic layer
│       ├── middlewares/
│       │   └── auth.middleware.js # Xác thực JWT
│       └── api-error.js         # Error handling class
│
├── frontend/                    # Mã nguồn giao diện người dùng (Vue 3 + Vite)
│   ├── Dockerfile
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── public/
│   │   ├── icons/
│   │   └── images/              # Hình ảnh tĩnh
│   └── src/
│       ├── main.js              # Entry point Vue app
│       ├── App.vue              # Root component
│       ├── assets/
│       │   └── style.css        # Global styles (Tailwind + DaisyUI)
│       ├── router/
│       │   └── index.js         # Vue Router định tuyến
│       ├── components/          # Component dùng chung (Header, Footer, BookCard...)
│       ├── views/               # View components cho từng trang
│       ├── services/            # API client calls
│       ├── composables/
│       │   └── useAuth.js       # Auth state composable
│       └── validations/         # Form validation rules
│
└── README.md
```
