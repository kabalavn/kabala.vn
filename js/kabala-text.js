// add_text_kabala.js

var intro = `<div style="text-align:justify;">
<p><img style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://kabala.vn/logo.png" alt="Kabala" width="264"></p>
<p><strong>Kabala giúp bạn Thấu Hiểu Chính Mình, nhận ra Hạnh Phúc Chân Thật và sống một cuộc đời đầy ý nghĩa.</strong> Mọi công cụ đều miễn phí, và sự lựa chọn của bạn luôn mạnh hơn số phận.</p>
<p><a href="https://kabala.vn/gioi-thieu-ve-kabala">Giới thiệu</a> · <a href="https://kabala.vn">Trang chủ</a> · <a href="mailto:lienhe@kabala.vn">lienhe@kabala.vn</a></p>
<hr/>
<p><a href="https://kabala.vn/triet-ly-kabala.html">Triết Lý Kabala</a>, <a href="https://an.kabala.vn">Đạo An</a>, <a href="https://thien.dabala.vn">Thiền Định</a>, <a href="https://tuvi.kabala.vn">Tử Vi</a>, <a href="https://battu.kabala.vn">Bát Tự</a>, <a href="https://number.kabala.vn">Thần Số Học</a>, <a href="https://lich.kabala.vn">Lịch Vạn Niên</a>, <a href="https://matrix.kabala.vn/">Ma Trận Định Mệnh</a>, <a href="https://huyensu.kabala.vn">Huyền Sư Kabala</a>, <a href="https://kabala.vn/64-que-kinh-dich.html">64 Quẻ Kinh Dịch</a>, <a href="https://go.kabala.vn/bai">Bộ Bài Kinh Dịch</a>.</p>
</div>`;

// ✅ Thông báo bảo mật
var kabala_notice = '<div style="margin-top:15px; padding:12px; border-left:4px solid #4CAF50; background:#f6fff6;color: #000;font-size:13px; line-height:1.5;"><strong>🔒 Cam kết bảo mật:</strong> Thông tin bạn nhập vào form xem huyền học Kabala chỉ được sử dụng để tạo kết quả cho riêng bạn, không lưu trữ, không chuyển sang dịch vụ khác và không bán dữ liệu dưới bất kỳ hình thức nào.</div>';

var letter = '<p><img style="page-break-after: always; display: block; margin-left: auto; margin-right: auto;" src="https://kabala.vn/images/kabala-letter.png" width="100%"></p>';

var banner_ego = '<div class=\"text-center kala-print-ebook\" style=\"display:none;\"><img src=\"https://kabala.vn/images/Kabala_EGO_Banner_vuong-600.png\" alt=\"Banner Kabala EGO - Khám phá tiềm năng bản thân\"/> <fieldset><em>Kabala EGO là một bản báo cáo dành riêng cho bạn, giúp bạn thấu hiểu chính mình, và đi tìm câu trả lời cho câu hỏi: \"<strong>Hạnh Phúc là gì?</strong>\", \"<strong>Ý nghĩa cuộc sống là gì?</strong>\".</em> </fieldset> <p>www.kabala.vn</p></div> <div class=\"row box-kabala-ego\"> <div class=\"text-center\"> <a target=\"_blank\" class=\"show-for-large-up\" href=\"https://kabala.vn/ego?ref=kabala\" title=\"Kabala EGO - Khám phá tiềm năng bản thân\"><img width=\"100%\" src=\"https://kabala.vn/wp-content/uploads/2023/05/EGO_-Banner_ngang_to.png\" alt=\"Banner Kabala EGO - Khám phá tiềm năng bản thân\"/></a> <a target=\"_blank\" class=\"show-for-medium-down\" href=\"https://kabala.vn/ego?ref=kabala\" title=\"Kabala EGO - Khám phá tiềm năng bản thân\"><img width=\"100%\" src=\"https://kabala.vn/wp-content/uploads/2023/05/Kabala_EGO_Banner_vuong-600.png\" alt=\"Banner Kabala EGO - Khám phá tiềm năng bản thân\"/></a> </div> </div>';


// ❤️ Lời mời ủng hộ Kabala – hiển thị ngay bên dưới footer
var kabala_donate = `
<section id="kabala-donate" aria-label="Ủng hộ Kabala" style="
    box-sizing:border-box;
    width:100%;
    margin:28px auto 0;
    padding:28px 18px;
    background:linear-gradient(135deg,#f7faf7 0%,#eef6f0 100%);
    border-top:1px solid #dce9df;
    color:#26352a;
    text-align:center;
    font-family:inherit;
">
    <div style="max-width:760px;margin:0 auto;">
        <div style="font-size:25px;line-height:1;margin-bottom:12px;" aria-hidden="true">💚</div>
        <h3 style="margin:0 0 10px;font-size:21px;line-height:1.4;color:#245b38;">
            Cùng Kabala lan tỏa những giá trị tốt đẹp
        </h3>
        <p style="max-width:620px;margin:0 auto 18px;font-size:14px;line-height:1.75;color:#4d5c50;">
            Kabala mong muốn tiếp tục xây dựng những công cụ và chia sẻ tri thức hữu ích,
            để mỗi người có thêm cơ hội thấu hiểu bản thân và sống một cuộc đời ý nghĩa.
            Nếu Kabala đã mang lại cho bạn một giá trị nào đó, bạn có thể tiếp sức cho hành trình này
            bằng một khoản donate tùy tâm. Sự ủng hộ của bạn là nguồn động viên quý giá để Kabala tiếp tục phát triển.
        </p>
        <div style="
            display:inline-block;
            max-width:100%;
            box-sizing:border-box;
            padding:18px 22px;
            background:#fff;
            border:1px solid #dce8de;
            border-radius:12px;
            box-shadow:0 3px 14px rgba(31,76,45,.06);
        ">
            <div style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#718075;margin-bottom:6px;">
                Ủng hộ qua chuyển khoản
            </div>
            <div style="font-size:15px;font-weight:700;color:#263d2d;">MBBank</div>
            <div style="font-size:22px;font-weight:700;letter-spacing:.04em;color:#245b38;margin:5px 0 12px;">
                3636936933333
            </div>
            <a href="https://vietqr.app/img?acc=3636936933333&bank=MBBank&des=Donate&template=qronly&showinfo=false"
               target="_blank" rel="noopener noreferrer"
               style="display:inline-block;color:#28663d;font-size:13px;text-decoration:underline;">
                <img src="https://vietqr.app/img?acc=3636936933333&bank=MBBank&des=Donate&template=qronly&showinfo=false"
                     alt="Mã QR donate Kabala qua MBBank"
                     loading="lazy"
                     style="display:block;width:190px;max-width:100%;height:auto;margin:0 auto 8px;border-radius:6px;">
                Quét mã QR để ủng hộ
            </a>
        </div>
        <p style="margin:15px 0 0;font-size:12px;line-height:1.6;color:#78857b;">
            Tùy tâm, không bắt buộc. Cảm ơn bạn đã đồng hành cùng Kabala.
        </p>
    </div>
</section>`;

document.addEventListener("DOMContentLoaded", function() {
    var introElement = document.getElementById("kabala-intro");
    var letterElement = document.getElementById("kabala-letter");
    var bannerEgoElement = document.getElementById("banner-ego");

    // ✅ Gắn intro + thông báo bảo mật
    if (introElement) { 
        introElement.innerHTML = intro + kabala_notice; 
    }

    if (letterElement) { 
        letterElement.innerHTML = letter; 
    }

    if (bannerEgoElement) { 
        bannerEgoElement.innerHTML = banner_ego; 
    } 

    // Gắn lời mời donate ngay sau footer
    if (!document.getElementById("kabala-donate")) {
        var footerElement = document.querySelector("footer, #colophon, .site-footer, .footer");
        var donateContainer = document.createElement("div");
        donateContainer.innerHTML = kabala_donate.trim();
        var donateElement = donateContainer.firstElementChild;

        if (footerElement && footerElement.parentNode) {
            footerElement.insertAdjacentElement("afterend", donateElement);
        } else {
            // Dự phòng cho giao diện không có phần tử footer chuẩn
            document.body.appendChild(donateElement);
        }
    }

    // add code livechat
    function loadScript(url) {
        var script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }
    loadScript('https://kabala.vn/js/kabala-livechat.js');	
});
