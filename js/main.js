document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('div');
        if (mobileMenu.classList.contains('hidden')) {
            icon.className = 'icon-menu text-2xl text-gray-700';
        } else {
            icon.className = 'icon-x text-2xl text-gray-700';
        }
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('div');
            icon.className = 'icon-menu text-2xl text-gray-700';
        });
    });

    const experiences = [
        {
            title: "Shielded Metal Arc Welding (SMAW)",
            description: "One Year Experience",
            subtitle: "Proficient in multiple welding positions:",
            details: ["1G (Flat Position)", "2G (Horizontal Position)", "3G (Vertical Position)", "4G (Overhead Position)"]
        },
        {
            title: "Joint Delivery Voucher Program (JDVP)",
            description: "40 Days Training",
            subtitle: "Completed intensive welding training with various welding rods:",
            details: [
                "E6013 - Easy-to-use, smooth arc, low penetration, good for thin metal and good bead appearance.",
                "E6016 - Easy-to-use, smooth arc, low penetration, good for thin metal and good bead appearance.",
                "E6018 - Good weld quality, higher deposition rate than E6016 due to iron powder in the flux.",
                "E7017 - Good weld quality, higher deposition rate than E6016 due to iron powder in the flux."
            ]
        },
        {
            title: "Work Immersion",
            description: "80 Hours in 10 Days",
            subtitle: "Work Immersion under the TVL strand of SMAW, gaining hands-on experience in professional welding environments and applying theoretical knowledge to practical scenarios."
        }
    ];

    const experienceContainer = document.getElementById('experience-container');
    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition';
        
        let detailsHTML = '';
        if (exp.details) {
            detailsHTML = '<ul class="space-y-2">';
            exp.details.forEach(detail => {
                detailsHTML += `<li class="text-sm text-gray-600 flex items-start"><span class="mr-2">•</span><span>${detail}</span></li>`;
            });
            detailsHTML += '</ul>';
        }
        
        card.innerHTML = `
            <div class="w-12 h-12 bg-[var(--secondary-color)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <div class="icon-briefcase text-xl text-[var(--secondary-color)]"></div>
            </div>
            <h3 class="text-xl font-bold mb-2">${exp.title}</h3>
            <p class="text-gray-600 mb-2">${exp.description}</p>
            ${exp.subtitle ? `<p class="text-sm text-gray-700 mb-3">${exp.subtitle}</p>` : ''}
            ${detailsHTML}
        `;
        
        experienceContainer.appendChild(card);
    });

    const certificates = [
        {
            title: "Technical Vocational and Livelihood Certificate (SMAW)",
            image: "https://app.trickle.so/storage/public/images/usr_172fe30f60000001/855bbf43-3952-43e6-a2fd-578153f92e2b.jpeg?w=4080&h=3072"
        },
        {
            title: "Work Immersion Certificate",
            image: "https://app.trickle.so/storage/public/images/usr_172fe30f60000001/8c09cd6b-b877-4c3d-9acd-7d2ac6932740.jpeg?w=4080&h=3072"
        },
        {
            title: "TESDA National Certificate NC I",
            image: "https://app.trickle.so/storage/public/images/usr_172fe30f60000001/abffa70b-7940-4edc-947e-af1bc8e45cc7.png?w=1600&h=720"
        }
    ];

    const certificationsContainer = document.getElementById('certifications-container');
    certificates.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition';
        
        card.innerHTML = `
            <div class="aspect-[4/3] bg-gray-100">
                <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
                <h3 class="font-bold mb-3">${cert.title}</h3>
                <button onclick="openModal('${cert.image}')" class="inline-flex items-center text-[var(--primary-color)] hover:text-[var(--accent-color)] transition">
                    <div class="icon-eye text-lg mr-2"></div>
                    View Certificate
                </button>
            </div>
        `;
        
        certificationsContainer.appendChild(card);
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill in all fields';
            formStatus.classList.remove('hidden');
            return;
        }
        
        const mailtoLink = `mailto:ryanmalatambantabigue@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = mailtoLink;
        
        formStatus.textContent = 'Opening email client...';
        formStatus.classList.remove('hidden');
        
        contactForm.reset();
    });

    modal.addEventListener('click', function(e) {
        if (e.target.id === 'modal') {
            closeModal();
        }
    });
});

function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}