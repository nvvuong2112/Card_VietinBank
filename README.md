# Ứng dụng đăng ký thẻ tín dụng VietinBank

Ứng dụng web đơn giản giúp người dùng điền thông tin đăng ký thẻ tín dụng VietinBank và xuất ra file hợp đồng PDF.

## Tính năng

- Form nhập liệu thông tin cá nhân, thông tin nghề nghiệp và các chi tiết khác
- Tự động tạo hợp đồng dựa trên thông tin nhập vào
- Xuất file PDF chuyên nghiệp
- Lưu thông tin tạm thời trong trình duyệt để không mất dữ liệu khi tải lại trang
- Validate dữ liệu nhập vào để đảm bảo chính xác

## Cách sử dụng

1. Truy cập trang web: [https://nvvuong2112.github.io/Card_VietinBank/](https://nvvuong2112.github.io/Card_VietinBank/)
2. Điền đầy đủ thông tin vào form
3. Nhấn nút "Tạo hợp đồng" để xem trước hợp đồng
4. Nhấn "Tải xuống hợp đồng" để tải file PDF
5. Nếu cần chỉnh sửa, nhấn "Quay lại chỉnh sửa"

## Cài đặt (Cho nhà phát triển)

### Yêu cầu
- Trình duyệt hiện đại (Chrome, Firefox, Edge, Safari)

### Cài đặt cục bộ
1. Clone repository: `git clone https://github.com/nvvuong2112/Card_VietinBank.git`
2. Mở file `index.html` trong trình duyệt

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript (Vanilla)
- jsPDF (tạo file PDF)
- html2canvas (chuyển đổi HTML sang hình ảnh để tạo PDF)

## Cấu trúc dự án

- `index.html`: File HTML chính chứa form và cấu trúc trang
- `styles.css`: File CSS chứa style cho trang
- `script.js`: File JavaScript xử lý logic

## Hướng dẫn phát triển

Nếu muốn chỉnh sửa hoặc mở rộng ứng dụng:

1. **Thêm trường dữ liệu**: Chỉnh sửa trong `index.html` và cập nhật xử lý trong `script.js`
2. **Thay đổi giao diện**: Chỉnh sửa file `styles.css`
3. **Thay đổi mẫu hợp đồng**: Cập nhật hàm `generateContractPreview` trong `script.js`

## Giấy phép

Dự án được phân phối theo giấy phép MIT.
