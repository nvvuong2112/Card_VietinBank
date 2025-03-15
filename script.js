document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('creditCardForm');
    const contractPreview = document.getElementById('contractPreview');
    const contractContent = document.getElementById('contractContent');
    const downloadBtn = document.getElementById('downloadBtn');
    const backBtn = document.getElementById('backBtn');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Thu thập dữ liệu từ form
        const formData = new FormData(form);
        const formDataObj = {};
        
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        
        // Tạo nội dung hợp đồng
        generateContractPreview(formDataObj);
        
        // Hiển thị phần xem trước hợp đồng
        form.style.display = 'none';
        contractPreview.style.display = 'block';
    });
    
    downloadBtn.addEventListener('click', function() {
        generatePDF();
    });
    
    backBtn.addEventListener('click', function() {
        form.style.display = 'block';
        contractPreview.style.display = 'none';
    });
    
    function generateContractPreview(data) {
        // Tạo mẫu hợp đồng HTML
        const contract = `
            <div class="contract">
                <h2>GIẤY ĐỀ NGHỊ KIÊM HỢP ĐỒNG PHÁT HÀNH VÀ SỬ DỤNG THẺ TÍN DỤNG</h2>
                <p style="text-align: center;">(Dành cho khách hàng cá nhân)</p>
                
                <p><strong>Số HĐ:</strong> ........................... ngày ... tháng ... năm ..........</p>
                <p><strong>CIF No:</strong> ............................................................</p>
                
                <h3>A- PHẦN ĐỀ NGHỊ</h3>
                
                <p><strong>Đề nghị:</strong> Ngân hàng TMCP Công thương Việt Nam (VietinBank)<br>
                Chi nhánh/PGD: ................................................</p>
                
                <p><strong>Phát hành cho tôi/chúng tôi thẻ tín dụng:</strong></p>
                
                <h4>THÔNG TIN THẺ TÍN DỤNG ĐĂNG KÝ</h4>
                <p><strong>Loại thẻ:</strong> ${data.cardType || ''}</p>
                <p><strong>Hạn mức thẻ tín dụng đề nghị:</strong> ${formatCurrency(data.creditLimit) || ''} đồng</p>
                <p><strong>Hình thức bảo đảm:</strong> ${data.guaranteeType || ''}</p>
                <p><strong>Mục đích sử dụng thẻ/vay vốn:</strong> thanh toán các giao dịch thẻ hợp pháp để phục vụ nhu cầu đời sống</p>
                
                <h4>THÔNG TIN CÁ NHÂN CHỦ THẺ CHÍNH</h4>
                <p><strong>Họ tên:</strong> ${data.fullName || ''}</p>
                <p><strong>Giới tính:</strong> ${data.gender || ''}</p>
                <p><strong>Ngày sinh:</strong> ${formatDate(data.birthDate) || ''}</p>
                <p><strong>Số CCCD/CMND/HC:</strong> ${data.idNumber || ''}</p>
                <p><strong>Ngày cấp:</strong> ${formatDate(data.idIssueDate) || ''}</p>
                <p><strong>Nơi cấp:</strong> ${data.idIssuePlace || ''}</p>
                <p><strong>Địa chỉ thường trú:</strong> ${data.permanentAddress || ''}</p>
                <p><strong>Địa chỉ hiện tại:</strong> ${data.currentAddress || data.permanentAddress || ''}</p>
                <p><strong>Email:</strong> ${data.email || ''}</p>
                <p><strong>Điện thoại di động:</strong> ${data.phone || ''}</p>
                <p><strong>Học vấn:</strong> ${data.education || ''}</p>
                
                <h4>THÔNG TIN NGHỀ NGHIỆP CHỦ THẺ CHÍNH</h4>
                <p><strong>Nghề nghiệp:</strong> ${data.occupation || ''}</p>
                <p><strong>Tên đơn vị đang công tác:</strong> ${data.workplaceName || ''}</p>
                <p><strong>Chức vụ tại đơn vị:</strong> ${data.position || ''}</p>
                <p><strong>Thu nhập bình quân hàng tháng:</strong> ${formatCurrency(data.income) || ''} đồng/tháng</p>
                
                <h4>PHƯƠNG THỨC THANH TOÁN DƯ NỢ THẺ TÍN DỤNG</h4>
                <p><strong>Số tài khoản thanh toán đăng ký trích nợ tự động:</strong> ${data.accountNumber || ''}</p>
                <p><strong>Phương thức thanh toán:</strong> ${data.paymentMethod || ''}</p>
                
                <h4>NGƯỜI THÂN LIÊN HỆ</h4>
                <p><strong>Họ tên người thân:</strong> ${data.relativeName || ''}</p>
                <p><strong>Quan hệ với chủ thẻ chính:</strong> ${data.relationship || ''}</p>
                <p><strong>Số điện thoại:</strong> ${data.relativePhone || ''}</p>
                
                <h3>B- PHẦN HỢP ĐỒNG</h3>
                
                <h4>THÔNG TIN NGÂN HÀNG</h4>
                <p><strong>Bên cung cấp dịch vụ - Ngân hàng TMCP Công thương Việt Nam</strong><br>
                Chi nhánh/Phòng giao dịch: ...........................................................................<br>
                Người đại diện:<br>
                Chức vụ:</p>
                
                <p><strong>Bên sử dụng dịch vụ - Khách hàng</strong><br>
                Các thông tin liên quan của khách hàng được thể hiện cụ thể tại Phần A của văn bản này</p>
                
                <div style="margin-top: 30px; display: flex; justify-content: space-around;">
                    <div style="text-align: center;">
                        <p><strong>Đại diện Ngân hàng</strong></p>
                        <p style="margin-top: 70px;"><em>(Ký, họ tên, đóng dấu)</em></p>
                    </div>
                    <div style="text-align: center;">
                        <p><strong>Chủ thẻ chính</strong></p>
                        <p style="margin-top: 70px;"><em>(Ký và ghi rõ họ tên)</em></p>
                    </div>
                </div>
            </div>
        `;
        
        contractContent.innerHTML = contract;
    }
    
    function formatCurrency(value) {
        if (!value) return '';
        return new Intl.NumberFormat('vi-VN').format(value);
    }
    
    function formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN');
    }
    
    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        // Sử dụng html2canvas để chuyển đổi HTML thành canvas
        html2canvas(document.getElementById('contractContent')).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            // Thêm các trang tiếp theo nếu nội dung dài
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            // Tải xuống PDF
            doc.save('hop-dong-the-tin-dung.pdf');
        });
    }
});
