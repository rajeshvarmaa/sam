// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Set default date in modal to today
const dateInput = document.getElementById('booking-date');
if (dateInput) {
    dateInput.valueAsDate = new Date();
}

// Filter Doctors by Specialty Category
function filterDoctors(category) {
    const cards = document.querySelectorAll('.doctor-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('bg-[#0066CC]', 'text-white');
        btn.classList.add('bg-white', 'text-[#0066CC]', 'border', 'border-blue-200');
    });

    if (event && event.target) {
        event.target.classList.remove('bg-white', 'text-[#0066CC]', 'border', 'border-blue-200');
        event.target.classList.add('bg-[#0066CC]', 'text-white');
    }

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Hero Search Handler
function handleHeroSearch() {
    const query = document.getElementById('hero-search').value.toLowerCase();
    if (query.includes('dental') || query.includes('tooth') || query.includes('root')) {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('test') || query.includes('blood') || query.includes('package') || query.includes('checkup')) {
        document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
    } else {
        document.getElementById('specialists').scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal Controls
function openBookingModal(serviceName) {
    const modal = document.getElementById('booking-modal');
    document.getElementById('modal-service-label').textContent = serviceName;
    document.getElementById('booking-form-container').classList.remove('hidden');
    document.getElementById('booking-success').classList.add('hidden');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function submitBooking(e) {
    e.preventDefault();
    document.getElementById('booking-form-container').classList.add('hidden');
    document.getElementById('booking-success').classList.remove('hidden');
}

// Close modal on outside click
const bookingModal = document.getElementById('booking-modal');
if (bookingModal) {
    bookingModal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeBookingModal();
        }
    });
}
