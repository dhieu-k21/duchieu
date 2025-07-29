// Initialize Vanta.js background with GLOBE effect
let vantaEffect;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Vanta GLOBE effect
    vantaEffect = VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x36544a, // xanh cyan nhạt
        color2: 0x381414, // trắng
        size: 1.00,
        backgroundColor: 0x96e0db, // nền trắng sáng
        points: 15.00,
        maxDistance: 25.00,
        spacing: 20.00,
        showDots: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Initialize chatbot functionality
    initializeChatbot();
});

// Chatbot functionality
function initializeChatbot() {
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Send message functionality
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Quick reply buttons
    chatbotMessages.addEventListener('click', function(e) {
        if (e.target.classList.contains('quick-reply')) {
            chatbotInput.value = e.target.dataset.question;
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;

        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000);
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Trả lời đặc biệt khi nhắc đến "Híu" hoặc "Hiếu"
        if (message.includes('hiếu') || message.includes('híu')) {
            return 'Tôi là Thái Đức Hiếu, sinh ngày 13/08/2003, hiện tại đang là 1 sales BĐS và là 1 developer, đang sinh sống và làm việc tại TP.HCM.';
        }
        
        // Simple chatbot responses in Vietnamese
        if (message.includes('xin chào') || message.includes('hello') || message.includes('hi')) {
            return 'Xin chào! Tôi là trợ lý của Híu. Tôi có thể giúp bạn tìm hiểu thông tin về chủ nhân của website này.';
        }
        
        if (message.includes('tên') || message.includes('name')) {
            return 'Chủ nhân của website này là một Software Engineer với ít năm kinh nghiệm trong lĩnh vực phát triển phần mềm.';
        }
        
        if (message.includes('kinh nghiệm') || message.includes('experience')) {
            return 'Anh ấy có hơn 3 năm kinh nghiệm làm việc với các công nghệ như React, Node.js, Python và nhiều công nghệ khác.';
        }
        
        if (message.includes('kỹ năng') || message.includes('skill')) {
            return 'Các kỹ năng chính bao gồm: JavaScript , Spring Boot , Java , MySQL , và github, Docker .';
        }
        
        if (message.includes('liên hệ') || message.includes('contact')) {
            return 'Bạn có thể liên hệ qua email hoặc các mạng xã hội được liệt kê trong phần Liên Hệ của website.';
        }
        
        if (message.includes('dự án') || message.includes('project')) {
            return 'Anh ấy đã tham gia 1 số dự án nho nhỏ như website shop quần áo , trang nghe nhạc tương tự spotify , chuyên về phát triển ứng dụng web';
        }
        
        if (message.includes('học vấn') || message.includes('education')) {
            return 'Thông tin về học vấn và chứng chỉ sẽ được cập nhật sớm. Hiện tại anh ấy tập trung vào việc học hỏi các công nghệ mới.';
        }
        
        if (message.includes('cảm ơn') || message.includes('thank')) {
            return 'Không có gì! Tôi luôn sẵn sàng giúp đỡ. Bạn có câu hỏi nào khác không?';
        }
        
        if (message.includes('tạm biệt') || message.includes('bye')) {
            return 'Tạm biệt! Chúc bạn một ngày tốt lành. Hãy quay lại nếu bạn cần thêm thông tin nhé!';
        }
        
        // Sở thích, đam mê, thói quen
        if (
            message.includes('sở thích') ||
            message.includes('thích gì') ||
            message.includes('đam mê') ||
            message.includes('hobby') ||
            message.includes('interest') ||
            message.includes('giải trí') ||
            message.includes('làm gì lúc rảnh')
        ) {
            const hobbyResponses = [
                'Hiếu thích lập trình, nghe nhạc, chơi game và khám phá công nghệ mới.',
                
            ];
            return hobbyResponses[Math.floor(Math.random() * hobbyResponses.length)];
        }
        
        // Default responses
        const defaultResponses = [
            'Câu hỏi thú vị đấy! Tuy không phải chuyên môn của tôi, nhưng tôi sẽ cố gắng trả lời hoặc trò chuyện cùng bạn. 😊',
            'Tôi là trợ lý ảo của Hiếu, luôn sẵn sàng trò chuyện mọi chủ đề với bạn!',
            'Bạn hỏi gì cũng được nhé, tôi sẽ trả lời theo cách vui vẻ nhất có thể!',
            'Tôi không chắc mình biết hết mọi thứ, nhưng tôi rất thích học hỏi và chia sẻ!',
            'Chủ đề này nghe hấp dẫn đấy! Bạn muốn nói thêm gì không?',
            'Tôi luôn sẵn sàng lắng nghe và phản hồi, dù câu hỏi có ngoài lề đi nữa!'
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.timeline-item, .contact-item, .skill-tag');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 50);
});

// Resize handler for Vanta effect
window.addEventListener('resize', function() {
    if (vantaEffect) {
        vantaEffect.resize();
    }
});

// Clean up Vanta effect when page unloads
window.addEventListener('beforeunload', function() {
    if (vantaEffect) {
        vantaEffect.destroy();
    }
});
