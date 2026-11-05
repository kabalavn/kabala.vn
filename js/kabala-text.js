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

    // add code livechat
    function loadScript(url) {
        var script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }
    loadScript('https://kabala.vn/js/kabala-livechat.js');	
});
