window.addEventListener('load', function() {
    // Tạo và thêm CSS vào header
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.mess-1, .mess-2, .mess-3 {color:#000;display: none;position: absolute;right: 100%;margin-right: 10px;background: #fff;border-radius: 10px;bottom: 10px;width: max-content;font-size: 14px;padding: 5px 10px;box-shadow: 2px 2px 2px #ccc;border: 1px solid #ddd;}
    .block-btn-action {position: fixed;bottom: 1.5rem;right: 1rem;z-index: 99;}
    .block-btn-action a {text-decoration: none;}
    .icon-action-img {width: 40px;}
    .item-btn-action {display: flex;align-items: center;padding-top: 10px;}
    .item-btn-action span {background-color: #a6270a;border-radius: 10px;padding: 1px 5px;margin-left: 5px;color: #fff;font-size: 16px;font-weight: 400;opacity: 0.8;}
    .notification {display: none;position: absolute;top: 3px;right: 0;background-color: red;color: white;border-radius: 50%;padding: 0px 5px;font-size: 0.75em;line-height: 140%;}
    .item-btn-action img, .container-action > .item-btn img {-webkit-animation: pulsate-bck 1s ease-in-out infinite both;animation: pulsate-bck 1s ease-in-out infinite both;}
    @keyframes pulsate-bck {0% { transform: scale(1); }50% { transform: scale(0.9); }100% { transform: scale(1); }}
    @media only screen and (max-width: 600px) {.block-btn-action {bottom: 0.5rem !important;}}`;
    document.head.appendChild(style);

    // Tạo và thêm HTML vào body
    var blockAction = document.createElement('div');
    blockAction.className = 'block-btn-action print-none';

    blockAction.innerHTML = `
        <div class='c-zalo-mess d-none'>
            <div class='mess-1'>Bạn đang tìm hiểu thiền định?</div>
            <div class='mess-2'>Bạn cần luận giải <br/>lá số tử vi?</div>
            <div class='mess-3'>Nếu cần hỗ trợ bạn có thể<br/>nhắn tin cho Kabala nhé!</div>
        </div>

        <!-- Icon Gemini nằm phía trên -->
        <a href='https://gemini.google.com/gem/8e5ec57c7074' rel='nofollow' target='_blank' id='call-btn-gemini'>
            <div class='item-btn-action'>
                <img src='https://kabala.vn/images/google-gemini-icon.webp' alt='Google Gemini' class='icon-action-img'>
            </div>
        </a>

        <!-- Icon ChatGPT nằm phía dưới -->
        <a href='https://chatgpt.com/g/g-67e3fd3f62dc81919a1f2551472867a3-hoc-vien-kabala' rel='nofollow' target='_blank' id='call-btn-zalo'>
            <div class='item-btn-action'>
                <img src='https://kabala.vn/images/chatgptpng.png' alt='ChatGPT Kabala' class='icon-action-img'>
            </div>
        </a>
    `;
    document.body.appendChild(blockAction);

    // Logic để hiển thị thông báo
    var btnZalo = document.getElementById('call-btn-zalo');
    var messages = ['.mess-1', '.mess-2', '.mess-3'];
    var currentIndex = 0;

    function showMessage() {
        if (currentIndex < messages.length) {
            var messageElement = document.querySelector(messages[currentIndex]);
            messageElement.style.display = 'block';
            currentIndex++;
            setTimeout(function() {
                messageElement.style.display = 'none';
                showMessage();
            }, 4000);
        } else {
            var notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = '3';
            btnZalo.appendChild(notification);
            notification.style.display = 'block';
        }
    }
    setTimeout(showMessage, 5000);
});
