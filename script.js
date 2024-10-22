// Lấy các phần tử từ HTML
let countdownElement = document.getElementById('countdown');
let messageElement = document.getElementById('message');
let dateElement = document.getElementById('date')
let dateElement1 = document.getElementById('date1');
let birthdayImage = document.getElementById('birthdayImage');
let personImage = document.getElementById('personImage');
let readyMessage = document.getElementById('readyMessage');
let startButton = document.getElementById('startButton');

// Khởi tạo giá trị đếm ngược
let countdown = 3;

// Sự kiện khi nhấn vào nút "Bắt đầu"
startButton.addEventListener('click', () => {
    // Ẩn thông điệp "Bạn đã sẵn sàng chưa?" và nút bắt đầu
    readyMessage.classList.add('hidden');
    startButton.classList.add('hidden');

    // Hiển thị phần tử đếm ngược
    countdownElement.classList.remove('hidden');
    startCountdown();  // Gọi hàm bắt đầu đếm ngược
});

// Hàm thực hiện đếm ngược
function startCountdown() {
    let countdownInterval = setInterval(() => {
        if (countdown > 0) {
            // Cập nhật nội dung đếm ngược
            countdownElement.textContent = countdown;
            countdown--;
        } else {
            // Khi đếm ngược về 0, dừng lại và hiển thị thông điệp chúc mừng
            clearInterval(countdownInterval);
            countdownElement.classList.add('hidden'); // Ẩn đếm ngược

            // Hiển thị thông điệp "Chúc mẹ Nguyễn Thị Lụa Mừng Sinh Nhật!"
            messageElement.classList.remove('hidden');
            messageElement.classList.add('visible'); // Thêm hiệu ứng xuất hiện
            
            // Hiển thị ngày tháng
            dateElement.classList.remove('hidden');
            dateElement.classList.add('visible');
            dateElement1.classList.remove('hidden');
            dateElement1.classList.add('visible');

            // Hiển thị hình ảnh
            personImage.classList.remove('hidden');
            personImage.classList.add('visible');
            birthdayImage.classList.remove('hidden');
            birthdayImage.classList.add('visible');

            // Gọi hiệu ứng confetti
            addConfettiEffect();
        }
    }, 1000);  // Thực hiện mỗi giây
}

// Hàm tạo hiệu ứng confetti
function addConfettiEffect() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';  // Vị trí ngẫu nhiên
        confetti.style.animationDelay = Math.random() * 2 + 's';  // Thời gian bắt đầu ngẫu nhiên
        document.body.appendChild(confetti);  // Thêm confetti vào body
    }
}
