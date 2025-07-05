# 🗓️ Kế Hoạch Thực Hiện Dự Án – Ứng dụng Dịch PDF Trực Tuyến

Tài liệu này mô tả các giai đoạn phát triển dự án cùng với mốc thời gian và công việc tương ứng. Dự án nhằm xây dựng một ứng dụng web cá nhân giúp tải lên và dịch các tệp PDF, hiển thị song song bản gốc và bản dịch, hỗ trợ tải xuống và in.

---

## 📌 Giai đoạn 1: Lập kế hoạch & Xác định yêu cầu (05–07/07)

- [x] Tạo kho lưu trữ GitHub và project board kiểu Kanban
- [x] Tạo cấu trúc thư mục dự án (docs/, src/, tests/, .github/)
- [x] Viết file `requirements.md` bằng tiếng Việt
- [ ] Xác định công nghệ sử dụng (React, FastAPI)

---

## 📌 Giai đoạn 2: Thiết kế giao diện và kiến trúc (08–10/07)

- [ ] Phác thảo giao diện trang chính: LandingPage, UploadPage, Viewer
- [ ] Tạo giao diện khung cơ bản bằng React
- [ ] Khởi tạo project FastAPI ở backend
- [ ] Xác định các API chính: `/upload`, `/translate`, `/download`

---

## 📌 Giai đoạn 3: Lập trình chức năng chính (11–20/07)

- [ ] Hiện thực tính năng tải lên tệp PDF ở frontend
- [ ] Xây dựng endpoint `/upload` nhận và lưu tệp PDF
- [ ] Xử lý bản dịch giả lập (mock) và trả lại file
- [ ] Tạo viewer hiển thị song song hai tệp PDF
- [ ] Đồng bộ cuộn dọc giữa hai khung hiển thị

---

## 📌 Giai đoạn 4: Hoàn thiện giao diện và kiểm thử (21–24/07)

- [ ] Thêm nút tải xuống và in bản dịch
- [ ] Cải thiện xử lý lỗi (file không hợp lệ, vượt dung lượng, lỗi máy chủ)
- [ ] Thêm hiệu ứng loading trong lúc xử lý
- [ ] Kiểm thử thủ công trên Chrome, Firefox và Safari

---

## 📌 Giai đoạn 5: Trình diễn và hoàn tất (25–26/07)

- [ ] Chuẩn bị bản demo chạy trên máy local hoặc hosting đơn giản
- [ ] Rà soát lại mã nguồn, xoá các file/thư mục không cần thiết
- [ ] Hoàn chỉnh `README.md` và hướng dẫn sử dụng
- [ ] Cập nhật project board và đánh dấu hoàn thành các đầu việc

