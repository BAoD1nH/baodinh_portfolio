# 📑 Yêu Cầu Hệ Thống – Ứng dụng Dịch PDF Trực Tuyến

---

## 1. Giới thiệu dự án

Ứng dụng web cá nhân cho phép người dùng tải lên một tệp PDF, hệ thống sẽ thực hiện dịch nội dung của tệp này và hiển thị song song bản gốc và bản dịch để so sánh. Người dùng cũng có thể tải xuống hoặc in bản dịch.

---

## 2. Yêu cầu chức năng (Functional Requirements)

### 2.1 Tải lên tệp PDF
- Người dùng chọn một tệp `.pdf` từ thiết bị cá nhân.
- Tệp được gửi đến backend thông qua HTTP POST.
- Giao diện hiển thị tên và dung lượng của tệp sau khi chọn.

### 2.2 Dịch tệp PDF
- Backend nhận tệp PDF từ frontend.
- Hệ thống xử lý nội dung (ở giai đoạn đầu có thể sử dụng dữ liệu giả/lập).
- Trả về bản PDF đã được dịch sang ngôn ngữ đích (mặc định là tiếng Việt).

### 2.3 Hiển thị hai bản PDF song song
- Một khung hiển thị bản gốc.
- Một khung hiển thị bản dịch.
- Hai khung có khả năng cuộn đồng bộ theo chiều dọc.

### 2.4 Tải xuống và in bản dịch
- Nút cho phép tải xuống bản dịch dưới dạng PDF.
- Nút mở hộp thoại in của trình duyệt để in bản dịch.

---

## 3. Yêu cầu phi chức năng (Non-functional Requirements)

- Chỉ chấp nhận tệp PDF, dung lượng tối đa 10MB.
- Giao diện phản hồi nhanh, thời gian dịch lý tưởng < 2 giây.
- Hiển thị thông báo lỗi rõ ràng nếu tệp không hợp lệ hoặc quá lớn.
- Giao diện đẹp, trực quan, hoạt động tốt trên máy tính và di động.

---

## 4. Vai trò người dùng

| Vai trò      | Quyền hạn                                                 |
|--------------|------------------------------------------------------------|
| Người dùng   | Tải lên tệp PDF, xem bản dịch, tải xuống hoặc in bản dịch |
| (Tuỳ chọn) Quản trị viên | Quản lý cấu hình dịch thuật (để phát triển sau)     |

---

## 5. Công nghệ sử dụng

- **Frontend**: React + Bootstrap
- **Backend**: FastAPI (Python)
- **Xử lý hiển thị PDF**: PDF.js hoặc thẻ `<iframe>`
- **Lưu trữ tạm thời**: File system (local)
- **Triển khai**: Chạy thử trên môi trường local

---

## 6. Giả định

- Không có hệ thống đăng nhập.
- Chỉ xử lý một tệp tại một thời điểm.
- Giai đoạn đầu sử dụng bản dịch giả (mock), chưa tích hợp AI thật.
