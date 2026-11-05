// add_text_kabala.js

var intro = "<div style=\"text-align:justify;\"><p><img style=\"height: auto; display: block; margin-left: auto; margin-right: auto;\" src=\"https://tuvi.kabala.vn/images/logo.png\" alt=\"logo\" width=\"264\" height=\"85\"></p><p><strong>Kabala cung cấp c&aacute;c bản b&aacute;o c&aacute;o t&iacute;nh c&aacute;ch gi&uacute;p một người c&oacute; thể Thấu Hiểu Ch&iacute;nh M&igrave;nh, từ đ&oacute; nhận ra Hạnh Ph&uacute;c Ch&acirc;n Thật, v&agrave; c&oacute; một Cuộc Sống &Yacute; Nghĩa. H&atilde;y để Kabala đồng h&agrave;nh c&ugrave;ng bạn tr&ecirc;n H&agrave;nh Tr&igrave;nh T&acirc;m Linh.</strong></p> <p>Kabala kh&ocirc;ng chỉ l&agrave; một triết l&yacute;, m&agrave; c&ograve;n l&agrave; một người bạn đồng h&agrave;nh. Qua những bản b&aacute;o c&aacute;o t&iacute;nh c&aacute;ch chi tiết, Kabala gi&uacute;p bạn nh&igrave;n nhận bản th&acirc;n một c&aacute;ch to&agrave;n diện, từ đ&oacute; ph&aacute;t hiện ra những g&igrave; ch&uacute;ng ta thực sự cần v&agrave; muốn trong cuộc sống. Những ph&aacute;t hiện n&agrave;y kh&ocirc;ng chỉ gi&uacute;p ch&uacute;ng ta c&oacute; c&aacute;i nh&igrave;n r&otilde; r&agrave;ng hơn về con đường ph&iacute;a trước m&agrave; c&ograve;n gi&uacute;p ch&uacute;ng ta định h&igrave;nh lại gi&aacute; trị sống, hướng tới một cuộc sống &yacute; nghĩa v&agrave; đầy đủ hơn.</p> <p>H&atilde;y tưởng tượng một cuộc sống nơi mọi quyết định của bạn đều được h&igrave;nh th&agrave;nh từ sự hiểu biết s&acirc;u sắc về ch&iacute;nh m&igrave;nh, nơi mỗi h&agrave;nh động đều phản &aacute;nh gi&aacute; trị thật của bạn, kh&ocirc;ng bị lệch lạc bởi l&ograve;ng tham hay c&aacute;i t&ocirc;i. Đ&oacute; l&agrave; một cuộc sống nơi hạnh ph&uacute;c ch&acirc;n thật kh&ocirc;ng chỉ l&agrave; một mục ti&ecirc;u xa vời m&agrave; l&agrave; một phần kh&ocirc;ng thể t&aacute;ch rời từ mỗi khoảnh khắc sống động của hiện tại.</p> <ul> <li><strong><a href=\"https://kabala.vn/gioi-thieu-ve-kabala\">Giới thiệu về Kabala</a></strong></li> <li>Trang chủ: <strong><a href=\"https://kabala.vn\">https://kabala.vn</a></strong></li> <li>Liên hệ: <strong><a href=\"mailto:lienhe@kabala.vn\">lienhe@kabala.vn</a></strong></li></ul><hr/><p>Liên kết hữu ích: <strong><a href='https://an.kabala.vn/'>Triết Lý Kabala - Đạo An</a></strong>, <a href='https://kabala.vn/la-so-tu-vi'>Lá Số Tử Vi</a>, <a href='https://battu.kabala.vn/'>Lá Số Bát Tự</a>,  <a href='https://number.kabala.vn/'>Thần Số Học</a>,  <a href='https://tuvi.kabala.vn/dat-ten-con.html'>Đặt Tên Con</a>,  <a href='https://tuvi.kabala.vn/sodep.html'>Xem Số Đẹp</a>,  <a href='https://matrix.kabala.vn/'>Ma Trận Định Mệnh</a>,  <a href='https://hoso.kabala.vn'>Hồ Sơ Mệnh Lý</a>, <a href='https://hoc.kabala.vn/'>Huyền Học</a>, <a href='https://career.kabala.vn'>Hướng Nghiệp</a>, <a href='https://thuvien.kabala.vn'>Thư Viện Ebook</a>, <a href='https://dich.kabala.vn'>Học Kinh Dịch</a>, <a href='https://tools.kabala.vn/'>Công Cụ Huyền Học</a>, <strong><a href='https://ego.kabala.vn'>Lá Số Kabala EGO</a></strong>.</p></div>";

// ✅ Thông báo bảo mật
var kabala_notice = '<div style="margin-top:15px; padding:12px; border-left:4px solid #4CAF50; background:#f6fff6;color: #000;font-size:13px; line-height:1.5;"><strong>🔒 Cam kết bảo mật:</strong> Thông tin bạn nhập vào form xem huyền học Kabala chỉ được sử dụng để tạo kết quả cho riêng bạn, không lưu trữ, không chuyển sang dịch vụ khác và không bán dữ liệu dưới bất kỳ hình thức nào.</div>';

var letter = '<p><img style="page-break-after: always; display: block; margin-left: auto; margin-right: auto;" src="https://tuvi.kabala.vn/images/kabala-letter.png" width="100%"></p>';

var banner_ego = '<div class=\"text-center kala-print-ebook\" style=\"display:none;\"><img src=\"https://kabala.vn/wp-content/uploads/2023/05/Kabala_EGO_Banner_vuong-600.png\" alt=\"Banner Kabala EGO - Khám phá tiềm năng bản thân\"/> <fieldset><em>Kabala EGO là một bản báo cáo dành riêng cho bạn, giúp bạn thấu hiểu chính mình, và đi tìm câu trả lời cho câu hỏi: \"<strong>Hạnh Phúc là gì?</strong>\", \"<strong>Ý nghĩa cuộc sống là gì?</strong>\".</em> </fieldset> <p>www.kabala.vn</p></div> <div class=\"row box-kabala-ego\"> <div class=\"text-center\"> <a target=\"_blank\" class=\"show-for-large-up\" href=\"https://kabala.vn/ego?ref=kabala\" title=\"Kabala EGO - Khám phá tiềm năng bản thân\"><img width=\"100%\" src=\"https://kabala.vn/wp-content/uploads/2023/05/EGO_-Banner_ngang_to.png\" alt=\"Banner Kabala EGO - Khám phá tiềm năng bản thân\"/></a> <a target=\"_blank\" class=\"show-for-medium-down\" href=\"https://kabala.vn/ego?ref=kabala\" title=\"Kabala EGO - Khám phá tiềm năng bản thân\"><img width=\"100%\" src=\"https://kabala.vn/wp-content/uploads/2023/05/Kabala_EGO_Banner_vuong-600.png\" alt=\"Banner Kabala EGO - Khám phá tiềm năng bản thân\"/></a> </div> </div>';

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
    loadScript('https://tuvi.kabala.vn/js/kabala-livechat.js');	
});
