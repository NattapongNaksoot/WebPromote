/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  // const mainNav = document.body.querySelector('#mainNav');
  // if (mainNav) {
  //     new bootstrap.ScrollSpy(document.body, {
  //         target: '#mainNav',
  //         offset: 74,
  //     });
  // };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});


window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  // const mainNav = document.body.querySelector('#mainNav');
  // if (mainNav) {
  //     new bootstrap.ScrollSpy(document.body, {
  //         target: '#mainNav',
  //         rootMargin: '0px 0px -40%',
  //     });
  // };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    indicators[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// แสดง Popup อัตโนมัติเมื่อเปิดหน้าเว็บ
window.onload = function () {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
};

// ปิด Popup เมื่อคลิกปุ่มปิด
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// ปิด Popup เมื่อคลิกที่พื้นที่นอก Popup Content
document.addEventListener("click", function (event) {
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");

  // ตรวจสอบว่าคลิกที่พื้นที่นอก popup-content
  if (popup.style.display === "flex" && !popupContent.contains(event.target)) {
    popup.style.display = "none";
  }
});


const translations = {
  "en": {
    "CompanyName": "Business competitive Intelligence Co.,Ltd.",
    "Course": "Course",
    "ChatBot": "ChatBot",
    "AboutUs": "About Us",
    "ConTract": "Contact",
    "Home": "Home",
    "ContactUs": "Contact Us",
    "OurCourses": "Our Courses",
    "Elevate": "Elevate your service with",
    "ContactInformation": "Contact Information",
    "AiChatbot": "AI Chatbot",

    "q1": "🔍 Find answers quickly",
    "q2": "🛒 Increase sales opportunities in every conversation",
    "q3": "🎯 Customize to fit your business needsy",

    "Inquiry1": "Inquiry Assistance",
    "Inquiry2": "Answering basic inquiries from potential customers about products and services.",

    "CustomerSupport1": "Customer Support & Service",
    "CustomerSupport2": "Support and Customer Inquiry Service",

    "ExpertKnowledge1": "Expert Knowledge Support",
    "ExpertKnowledge2": "Respond with specialized knowledge specific to the organization",

    "HR1": "HR Assistance & Support",
    "HR2": "Assist the HR department in answering basic inquiries about the company.",

    "Cost1": "Cost Reduction",
    "Cost2":"Save on staffing costs with a chatbot that instantly answers customer inquiries 24/7!",

    "EasyUse1":"Easy to use",
    "EasyUse2":"Designed for simple use, easy installation, and ready for you to get started right away!  ",

    "MainTain1":"Easy to maintain",
    "MainTain2":"Easily update and customize without requiring technical expertise, with a support team ready to assist you!",
    
    "PlatForm1":"Works on all platforms",
    "PlatForm2":"Supports all channels, including websites, applications, and social media—meeting all your business communication needs!",

    "AboutUs1":"About Us",
    "AboutUs2":" \"From system implementers and solution developers, we are committed to leveraging digital technology to help businesses grow with our deep expertise and experience in digital technology. Currently, we offer a wide range of AI applications to meet the needs of customers in the digital era.\"",
   
    "qoute":"Stop waiting. <br> Start your digital transformation. <br> Become a sustainable organization.",

    "CallUsSele":"Call Us : Sale",
    "CallUsSupport":"Call Us : Customer Support",

    "WorkHours":"Working Hours",
    "WorkHours2":"Monday - Saturday: 08:30 AM - 05:30 PM",
    "WorkHours3":"Sunday: Closed",

    "Email":"Email",

    "Location":"Location",
    "Location2":"59/69 Moo 1, Soi Tiwanon - Pak Kret 56, Ban Mai Subdistrict, Pak Kret District, Nonthaburi 11120, Thailand",

    "TIN":"Taxpayer Identification Number (TIN)",

    "SeeMore":"See more",

    "Language":"🌍 English"
  },  
  "th": {
    "CompanyName": "บริษัทจำกัด บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์",
    "Course": "คอร์สเรียน",
    "ChatBot": "แชทบอท",
    "AboutUs": "เกี่ยวกับเรา",
    "ConTract": "ติดต่อ",
    "Home": "หน้าหลัก",
    "ContactUs": "ติดต่อเรา",
    "OurCourses": "คอร์สเรียนของเรา",
    "Elevate": "ยกระดับบริการของคุณด้วย",
    "ContactInformation": "ช่องทางการติดต่อ",
    "AiChatbot": "เอไอ แชทบอท",

    "q1": "🔍 ค้นหาคำตอบได้รวดเร็ว ",
    "q2": "🛒 เพิ่มโอกาสในการขายในทุกการสนทนา",
    "q3": "🎯 ปรับแต่งให้เหมาะกับความต้องการทางธุรกิจของคุณ",

    "Inquiry1": "ให้ความช่วยเหลือด้านการสอบถาม",
    "Inquiry2": "ตอบคำถามเบื้องต้นจากลูกค้าที่สนใจเกี่ยวกับสินค้าและบริการ",

    "CustomerSupport1": "สนับสนุนและบริการลูกค้า",
    "CustomerSupport2": "สนับสนุน Support และให้บริการตอบคำถามสำหรับลูกค้า",

    "ExpertKnowledge1": "สนับสนุนด้านความรู้เฉพาะทาง",
    "ExpertKnowledge2": "ช่วยตอบปัญญาเฉพาะทาง ที่ต้องใช้ความรู้เฉพาะทางขององค์กร",

    "HR1": "สนับสนุนฝ่ายทรัพยากรบุคคล",
    "HR2": "ช่วยงานฝ่าย HR ในการตอบคำถามเบื้องต้นเกี่ยวกับบริษัท",

    "Cost1": "ลดต้นทุน",
    "Cost2":"ประหยัดค่าใช้จ่ายในการจ้างพนักงานด้วย <br> แชทบอทที่ช่วยตอบคำถามลูกค้าได้ทันที <br> ตลอด 24 ชั่วโมง!",

    "EasyUse1":"ใช้งานง่าย",
    "EasyUse2":"ออกแบบมาเพื่อการใช้งานที่ไม่ซับซ้อน <br> ติดตั้งง่ายพร้อมให้คุณเริ่มต้นใช้งานได้ทันที!",

    "MainTain1":"ง่ายต่อการบำรุงรักษา",
    "MainTain2":"อัปเดตและปรับแต่งได้สะดวก <br> โดยไม่ต้องใช้ความรู้เชิงเทคนิคสูง <br> พร้อมทีมสนับสนุนดูแลคุณ!",

    "PlatForm1":"ใช้ได้ทุกแพลตฟอร์ม",
    "PlatForm2":"รองรับทุกช่องทาง ทั้งเว็บไซต์ แอปพลิเคชันและโซเชียลมีเดีย ตอบโจทย์ทุกการสื่อสารของธุรกิจ!",

    "AboutUs1":"เกี่ยวกับเรา",
    "AboutUs2":" \"จากผู้วางระบบและพัฒนาโซลูชัน ERP\" <br> เรามุ่งมั่นนำเทคโนโลยีดิจิทัล เพื่อช่วยให้ธุรกิจเติบโตด้วยประสบการณ์และความเชี่ยวชาญด้านเทคโนโลยีดิจิทัลที่ลึกซึ้ง ปัจจุบันเราให้บริการการประยุกต์ใช้ปัญญาประดิษฐ์มากมายเพื่อตอบสนองความต้องการของลูกค้าในยุคดิจิทัล",
   
    "qoute":"เลิกเสียเวลา <br> ก้าวสู่โลกดิจิทัล <br> และเติบโตอย่างมั่นคง",

    "CallUsSele":"ติดต่อ : ฝ่ายขาย",
    "CallUsSupport":"ติดต่อ : ฝ่ายสนับสนุน",

    "WorkHours":"เวลาทำการ",
    "WorkHours2":"วันจันทร์ - วันเสาร์ เวลา 08:30 น. - 17:30 น.",
    "WorkHours3":"วันอาทิตย์ : งดทำการ",

    "Email":"อีเมล",

    "Location":"ที่อยู่",
    "Location2":"59/69 หมู่ 1 ซ.ติวานนท์ - ปากเกร็ด 56 ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี 11120",

    "TIN":"หมายเลขประจำตัว <br> ของผู้เสียภาษี",

    "SeeMore":"สนใจดูเพิ่มเติม",

    "Language":"🌍 ภาษาไทย"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      element.innerHTML = translations[lang][key]; // ใช้ innerHTML เพื่อรองรับ <br>
  });

  // อัปเดตรูปธงชาติใน Dropdown
  let langIcon = document.querySelector("#languageDropdown img"); 
  let langText = document.querySelector("#languageDropdown span");

  if (lang === "en") {
      langIcon.src = "assets/img/united-kingdom.png"; // เปลี่ยนเป็นธงอังกฤษ
      langText.textContent = "English"; // เปลี่ยนข้อความเป็น English
  } else if (lang === "th") {
      langIcon.src = "assets/img/thailand.png"; // เปลี่ยนเป็นธงไทย
      langText.textContent = "ภาษาไทย"; // เปลี่ยนข้อความเป็น ภาษาไทย
  }

  // บันทึกภาษาที่เลือกไว้ใน LocalStorage
  localStorage.setItem("selectedLanguage", lang);
}

// โหลดภาษาที่เคยเลือกไว้ (เมื่อรีเฟรชหน้าเว็บ)
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  changeLanguage(savedLang);
});






