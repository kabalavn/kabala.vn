# Kabala – Trang chủ và trang 404

Mã nguồn trang chủ [kabala.vn](https://kabala.vn) và trang lỗi 404. Hai file HTML/CSS thuần, không cần build, không phụ thuộc framework.

Kabala là nơi tập hợp triết lý, thực hành và công cụ mệnh lý miễn phí. Thông điệp cốt lõi: *sự lựa chọn mạnh hơn số phận*.

## Cấu trúc

```
.
├── index.html   # Trang chủ
├── 404.html     # Trang lỗi 404 có ô tìm kiếm
└── README.md
```

## Trang chủ (`index.html`)

| Phần | Nội dung |
|---|---|
| Hero | Câu chốt "Sự lựa chọn mạnh hơn số phận" và vòng la bàn có biểu tượng âm dương xoay |
| Triết lý Kabala | Lòng Tham và Cái Tôi, công thức ~~Tôi~~ ~~Muốn~~ Hạnh Phúc, hành trình Thấu Hiểu Bản Thân |
| Tâm thư | Sáu điều về dự đoán và huyền học, cùng thông báo Kabala không còn dịch vụ có phí liên quan đến Huyền Học |
| Di sản | 19 liên kết chia ba nhóm: Hệ thống triết lý, Thực hành, Công cụ mệnh lý |
| Bộ bài Kinh Dịch | Giới thiệu và nút mua tại `go.kabala.vn/bai` |

## Trang 404 (`404.html`)

- Ô tìm kiếm mở Google với truy vấn `site:kabala.vn "từ khóa"` trong tab mới.
- Tự điền sẵn từ khóa lấy từ đường dẫn bị sai (ví dụ `/than-so-hoc` thành "than so hoc").
- Liệt kê toàn bộ công cụ và phần giới thiệu bộ bài Kinh Dịch.
- Dùng đường dẫn tuyệt đối (`/`, `/#tam-thu`) nên hiển thị đúng ở mọi thư mục. Có thẻ `noindex`.

## Giao diện

- Responsive, xem tốt trên mobile.
- Tự đổi sang chế độ tối theo thiết lập của thiết bị.
- Tôn trọng `prefers-reduced-motion`, có viền focus cho bàn phím.
- Phông chữ: Newsreader (tiêu đề, trích dẫn) và Be Vietnam Pro (nội dung), tải từ Google Fonts.
- Màu sắc khai báo ở khối `:root` đầu file CSS: `--paper`, `--ink`, `--gold`, `--seal`, `--night`.

## Triển khai

Upload `index.html` và `404.html` vào thư mục gốc của site.

**Server tĩnh (Apache/LiteSpeed):** thêm vào `.htaccess`:

```apache
ErrorDocument 404 /404.html
```

**WordPress:** chép nội dung `404.html` vào `404.php` của theme (hoặc dùng plugin cho phép đặt trang 404 tùy chỉnh) và `index.html` vào template trang chủ.

## Chỉnh sửa thường gặp

| Muốn đổi | Tìm trong file |
|---|---|
| Logo | `https://kabala.vn/logo.png` |
| Link công cụ, mô tả | các khối `<ul class="items">` trong `index.html`, `<div class="tgrid">` trong `404.html` |
| Link và ảnh bộ bài | `<section class="deck">` |
| Màu sắc | khối `:root` trong `<style>` |

## Ghi chú

- Link Thiền Định hiện là `thien.dabala.vn`. Hãy kiểm tra lại nếu đây là gõ nhầm của `thien.kabala.vn`.
- Logo và ảnh bộ bài tải từ `kabala.vn`; nếu logo có chữ tối, cần kiểm tra hiển thị ở chế độ tối.

## Bản quyền

© Kabala. Nội dung, logo và hình ảnh thuộc về Kabala.
