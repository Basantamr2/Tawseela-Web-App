const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const translations = {
    en: {
        ride: "Ride",
        drive: "Drive",
        about: "About",
        findUs: "Find us",
        login: "Log in",
        signup: "Sign up",
        heroTitle: "Fast & Reliable Delivery",
        heroDesc: "Get your packages delivered on time, every time.",
        bookBtn: "Book a Ride",
        sectionTitle: "Choose Your Ride",
        motoDesc: "Affordable, everyday rides",
        carDesc: "Newer cars with extra legroom",
        vanDesc: "Perfect for groups & luggage"
    },
    ar: {
        ride: "احجز رحلة",
        drive: "انضم كقائد",
        about: "عن الشركة",
        findUs: "موقعنا",
        login: "تسجيل الدخول",
        signup: "إنشاء حساب",
        heroTitle: "توصيل سريع وموثوق",
        heroDesc: "احصل على طرودك في الوقت المحدد، في كل مرة.",
        bookBtn: "احجز الآن",
        sectionTitle: "اختر وسيلة راحتك",
        motoDesc: "رحلات اقتصادية يومية",
        carDesc: "سيارات حديثة بمساحة إضافية",
        vanDesc: "مثالية للمجموعات والأمتعة"
    }
};

const langSwitcher = document.getElementById('langSwitcher');
let currentLang = 'en';

langSwitcher.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
});

function updateLanguage() {
    // تغيير نصوص العناصر التي تحمل data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLang][key];
    });

    // تغيير اتجاه الصفحة ولغة الـ HTML
    if (currentLang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        langSwitcher.textContent = 'English';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        langSwitcher.textContent = 'العربية';
    }
}