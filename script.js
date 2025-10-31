        // Add interactivity to the dashboard
        document.addEventListener('DOMContentLoaded', function() {
            // Add active class to clicked nav items
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Add hover effect to stat cards
            const statCards = document.querySelectorAll('.stat-card');
            statCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // Add functionality to action buttons
            const actionButtons = document.querySelectorAll('.action-btn');
            actionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const icon = this.querySelector('i');
                    if (icon.classList.contains('fa-trash')) {
                        if (confirm('Are you sure you want to delete this product?')) {
                            this.closest('tr').style.opacity = '0.5';
                            setTimeout(() => {
                                this.closest('tr').remove();
                            }, 500);
                        }
                    } else if (icon.classList.contains('fa-edit')) {
                        alert('Edit product functionality would open here.');
                    } else if (icon.classList.contains('fa-eye')) {
                        alert('View product details would open here.');
                    }
                });
            });
        });
