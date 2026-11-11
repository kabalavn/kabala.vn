
// add_text_kabala.js

var intro = `<div style="text-align:justify;">
<p><img style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://kabala.vn/logo.png" alt="Kabala" width="264"></p>
<p><strong>Kabala giúp bạn Thấu Hiểu Chính Mình, nhận ra Hạnh Phúc Chân Thật và sống một cuộc đời đầy ý nghĩa.</strong> Mọi công cụ đều miễn phí, và sự lựa chọn của bạn luôn mạnh hơn số phận.</p>
<hr/>
<p><a href="https://kabala.vn/triet-ly-kabala/">Triết Lý Kabala</a>, <a href="https://an.kabala.vn">Đạo An</a>, <a href="https://thien.dabala.vn">Thiền Định</a>, <a href="https://tuvi.kabala.vn">Tử Vi</a>, <a href="https://battu.kabala.vn">Bát Tự</a>, <a href="https://number.kabala.vn">Thần Số Học</a>, <a href="https://lich.kabala.vn">Lịch Vạn Niên</a>, <a href="https://matrix.kabala.vn/">Ma Trận Định Mệnh</a>, <a href="https://huyensu.kabala.vn">Huyền Sư Kabala</a>, <a href="https://kabala.vn/64-que-kinh-dich/">64 Quẻ Kinh Dịch</a>, <a href="https://go.kabala.vn/bai">Bộ Bài Kinh Dịch</a>.</p>
</div>`;

// Thông báo bảo mật
var kabala_notice = '<div style="margin-top:15px; padding:12px; border-left:4px solid #4CAF50; background:#f6fff6;color: #000;font-size:13px; line-height:1.5;"><strong>🔒 Cam kết bảo mật:</strong> Thông tin bạn nhập vào form xem huyền học Kabala chỉ được sử dụng để tạo kết quả cho riêng bạn, không lưu trữ, không chuyển sang dịch vụ khác và không bán dữ liệu dưới bất kỳ hình thức nào.</div>';

var letter = '<p><img style="page-break-after: always; display: block; margin-left: auto; margin-right: auto;" src="https://kabala.vn/images/kabala-letter.png" width="100%"></p>';

var banner_ego = '<div class="text-center kala-print-ebook" style="display:none;"><img src="https://kabala.vn/images/Kabala_EGO_Banner_vuong-600.png" alt="Banner Kabala EGO - Khám phá tiềm năng bản thân"/> <fieldset><em>Kabala EGO là một bản báo cáo dành riêng cho bạn, giúp bạn thấu hiểu chính mình, và đi tìm câu trả lời cho câu hỏi: "<strong>Hạnh Phúc là gì?</strong>", "<strong>Ý nghĩa cuộc sống là gì?</strong>".</em> </fieldset> <p>www.kabala.vn</p></div> <div class="row box-kabala-ego"> <div class="text-center"> <a target="_blank" class="show-for-large-up" href="https://kabala.vn/ego?ref=kabala" title="Kabala EGO - Khám phá tiềm năng bản thân"><img width="100%" src="https://kabala.vn/wp-content/uploads/2023/05/EGO_-Banner_ngang_to.png" alt="Banner Kabala EGO - Khám phá tiềm năng bản thân"/></a> <a target="_blank" class="show-for-medium-down" href="https://kabala.vn/ego?ref=kabala" title="Kabala EGO - Khám phá tiềm năng bản thân"><img width="100%" src="https://kabala.vn/wp-content/uploads/2023/05/Kabala_EGO_Banner_vuong-600.png" alt="Banner Kabala EGO - Khám phá tiềm năng bản thân"/></a> </div> </div>';

document.addEventListener("DOMContentLoaded", function() {

    var introElement = document.getElementById("kabala-intro");
    var letterElement = document.getElementById("kabala-letter");
    var bannerEgoElement = document.getElementById("banner-ego");

    // Gắn intro + thông báo bảo mật
    if (introElement) {
        introElement.innerHTML = intro + kabala_notice;
    }

    if (letterElement) {
        letterElement.innerHTML = letter;
    }

    if (bannerEgoElement) {
        bannerEgoElement.innerHTML = banner_ego;
    }

    // Load Livechat
    function loadScript(url) {
        var script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }

    loadScript('https://kabala.vn/js/kabala-livechat.js');

});

// ==========================================
// POPUP QUẢNG CÁO BỘ THẺ BÀI KINH DỊCH
// Mỗi ngày hiển thị 1 lần trên mỗi trình duyệt
// ==========================================

(function () {

    var STORAGE_KEY = "kabala_bai_kinh_dich_popup_last_shown";

    // Lấy ngày hiện tại theo máy người dùng
    function getLocalDateKey() {
        var now = new Date();
        var month = String(now.getMonth() + 1).padStart(2, "0");
        var day = String(now.getDate()).padStart(2, "0");

        return now.getFullYear() + "-" + month + "-" + day;
    }

    function showKabalaPopup() {

        // Kiểm tra hôm nay đã hiển thị chưa
        try {
            if (localStorage.getItem(STORAGE_KEY) === getLocalDateKey()) {
                return;
            }
        } catch (error) {}

        // Tránh tạo popup trùng lặp
        if (document.getElementById("kabala-bai-popup-overlay")) {
            return;
        }

        // CSS popup
        var style = document.createElement("style");

        style.textContent = `
            #kabala-bai-popup-overlay {
                position: fixed;
                inset: 0;
                z-index: 2147483647;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                box-sizing: border-box;
                background: rgba(0, 0, 0, 0.68);
            }

            #kabala-bai-popup-box {
                position: relative;
                width: min(480px, 95vw);
                max-width: 100%;
                text-align: center;
                animation: kabalaBaiPopupIn 0.22s ease-out;
            }

            #kabala-bai-popup-box a {
                display: block;
                line-height: 0;
            }

            #kabala-bai-popup-box img {
                display: block;
                width: 95%;
                height: auto;
                margin: 0 auto;
                border-radius: 5px;
            }

            #kabala-bai-popup-close {
                position: absolute;
                top: -42px;
                right: 0;
                width: 34px;
                height: 34px;
                padding: 0;
                border: 2px solid #fff;
                border-radius: 50%;
                background: #222;
                color: #fff;
                font: bold 25px/28px Arial, sans-serif;
                text-align: center;
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(0,0,0,.35);
            }

            #kabala-bai-popup-close:hover {
                background: #555;
            }

            @keyframes kabalaBaiPopupIn {
                from {
                    opacity: 0;
                    transform: translateY(10px) scale(.97);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            @media (max-width: 480px) {
                #kabala-bai-popup-overlay {
                    padding: 14px;
                }

                #kabala-bai-popup-close {
                    top: -40px;
                }
            }
        `;

        document.head.appendChild(style);

        // Tạo lớp nền
        var overlay = document.createElement("div");

        overlay.id = "kabala-bai-popup-overlay";
        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-label", "Bộ thẻ bài Kinh Dịch");

        // Khung popup
        var popup = document.createElement("div");
        popup.id = "kabala-bai-popup-box";

        // Nút đóng X
        var closeButton = document.createElement("button");

        closeButton.id = "kabala-bai-popup-close";
        closeButton.type = "button";
        closeButton.setAttribute("aria-label", "Đóng quảng cáo");
        closeButton.innerHTML = "&times;";

        // Banner và link
        var link = document.createElement("a");

        link.href = "https://go.kabala.vn/bai";
        link.target = "_blank";
        link.rel = "noreferrer";

        var banner = document.createElement("img");

        banner.src = "https://kabala.vn/images/bai-kinh-dich.png";
        banner.alt = "Bộ thẻ bài Kinh Dịch: Hỏa Thiên Đại Hữu";

        link.appendChild(banner);

        // Đóng popup
        function closePopup() {
            overlay.remove();
        }

        closeButton.addEventListener("click", closePopup);

        // Nhấn ra ngoài banner để đóng
        overlay.addEventListener("click", function(event) {
            if (event.target === overlay) {
                closePopup();
            }
        });

        // Ngăn click bên trong popup đóng banner
        popup.addEventListener("click", function(event) {
            event.stopPropagation();
        });

        popup.appendChild(closeButton);
        popup.appendChild(link);

        overlay.appendChild(popup);

        document.body.appendChild(overlay);

        // Ghi nhận đã hiển thị hôm nay
        try {
            localStorage.setItem(STORAGE_KEY, getLocalDateKey());
        } catch (error) {}

    }

    // Chờ DOM sẵn sàng
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", showKabalaPopup);
    } else {
        showKabalaPopup();
    }

})();
