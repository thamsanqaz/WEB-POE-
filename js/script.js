/* ===== FORM VALIDATION ===== */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enquiryForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const enquiryType = document.getElementById('enquiryType').value;
            const message = document.getElementById('message').value.trim();

            let errors = [];

            // Validate each field
            if (name === '') {
                errors.push('Please enter your full name');
            }

            if (email === '') {
                errors.push('Please enter your email address');
            } else if (!isValidEmail(email)) {
                errors.push('Please enter a valid email address');
            }

            if (enquiryType === '') {
                errors.push('Please select an enquiry type');
            }

            if (message === '') {
                errors.push('Please enter your message');
            }

            // Show feedback
            if (errors.length > 0) {
                feedback.style.display = 'block';
                feedback.style.backgroundColor = '#f8d7da';
                feedback.style.color = '#721c24';
                feedback.style.border = '1px solid #f5c6cb';
                feedback.innerHTML = '<strong>Please fix the following errors:</strong><ul>' +
                    errors.map(e => '<li>' + e + '</li>').join('') + '</ul>';
            } else {
                feedback.style.display = 'block';
                feedback.style.backgroundColor = '#d4edda';
                feedback.style.color = '#155724';
                feedback.style.border = '1px solid #c3e6cb';
                feedback.innerHTML = '<strong>✅ Enquiry sent successfully!</strong> We will contact you within 24 hours.';
                form.reset();
            }
        });
    }
});

/* ===== EMAIL VALIDATION HELPER ===== */
function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ===== ACTIVE NAV LINK ===== */
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});