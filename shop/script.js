// Sample product data
const products = [
    {
        id: 1,
        name: "ម៉ាស់អប់មុខកាហ្វេ",
        description: "-អត្ថប្រយោជន៍ម៉ាសអប់មុខកាហ្វេ: ឯកទេសព្យាបាលរាល់បញ្ហាមុខមុនតូច ធំ លាប skincare បានផលឿន ធ្វើអោយស្បែកមុនទន់ ម៉ត់ ជួយជម្រុះកោសិកាចាស់ៗបានល្អ",
        price: 45.99,
        image: "./coffe.jpg"
    },
    {
        id: 2,
        name: "ម៉ាស់អប់មុខកាហ្វេ",
        description: "-អត្ថប្រយោជន៍ម៉ាសអប់មុខកាហ្វេ: ឯកទេសព្យាបាលរាល់បញ្ហាមុខមុនតូច ធំ លាប skincare បានផលឿន ធ្វើអោយស្បែកមុនទន់ ម៉ត់ ជួយជម្រុះកោសិកាចាស់ៗបានល្អ",
        price: 32.50,
        image: "./coffe.jpg"
    },
    {
        id: 3,
        name: "ម៉ាស់អប់មុខកាហ្វេ",
        description: "-អត្ថប្រយោជន៍ម៉ាសអប់មុខកាហ្វេ: ឯកទេសព្យាបាលរាល់បញ្ហាមុខមុនតូច ធំ លាប skincare បានផលឿន ធ្វើអោយស្បែកមុនទន់ ម៉ត់ ជួយជម្រុះកោសិកាចាស់ៗបានល្អ",
        price: 28.75,
        image: "./coffe.jpg"
    },
    {
        id: 4,
        name: "ម៉ាស់អប់មុខរមៀត",
        description: "Oil-based cleanser that removes makeup without stripping skin",
        price: 26.99,
        image: "./រមៀត.jpg"
    },
    {
        id: 5,
        name: "ម៉ាស់អប់មុខរមៀត",
        description: "Caffeine-infused gel to reduce puffiness and dark circles",
        price: 38.00,
        image: "./រមៀត.jpg"
    },
    {
        id: 6,
        name: "ម៉ាស់អប់មុខរមៀត",
        description: "Restorative blend of botanical oils for overnight renewal",
        price: 52.99,
        image: "./រមៀត.jpg"
    }
];

// Sample testimonial data
const testimonials = [
    {
        text: "The Radiant Glow Serum has transformed my skin! I've never received so many compliments.",
        author: "Sarah J."
    },
    {
        text: "After just two weeks of using the Hydrating Face Cream, my dry patches are completely gone.",
        author: "Michael T."
    },
    {
        text: "The Detox Clay Mask is my weekly self-care ritual. My skin feels so clean and refreshed after each use.",
        author: "Priya K."
    }
];

// Shopping cart
let cart = [];

// DOM elements
const productGrid = document.querySelector('.product-grid');
const testimonialSlider = document.querySelector('.testimonial-slider');
const cartCount = document.querySelector('.cart-count');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

// Display products
function displayProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Display testimonials
function displayTestimonials() {
    testimonialSlider.innerHTML = '';
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.author}</p>
        `;
        testimonialSlider.appendChild(testimonialCard);
    });
}

// Add to cart function
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    showAddedToCartMessage(product.name);
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show "Added to cart" message
function showAddedToCartMessage(productName) {
    const message = document.createElement('div');
    message.className = 'cart-message';
    message.textContent = `${productName} added to cart!`;
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.right = '20px';
    message.style.backgroundColor = '#ff85a2';
    message.style.color = 'white';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '5px';
    message.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
    message.style.zIndex = '1000';
    message.style.animation = 'fadeIn 0.3s';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.3s';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 2000);
}

// Contact form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Newsletter form submission
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our skincare tips soon.`);
    newsletterForm.reset();
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    displayTestimonials();
    
    // Add some simple animation for the hero section
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        if (anchor.getAttribute('href').startsWith('#')) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});

// Add some simple animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(10px); }
    }
    
    .hero-content {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s, transform 0.8s;
    }
    
    .product-card {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeIn 0.5s forwards;
    }
    
    .product-card:nth-child(1) { animation-delay: 0.1s; }
    .product-card:nth-child(2) { animation-delay: 0.2s; }
    .product-card:nth-child(3) { animation-delay: 0.3s; }
    .product-card:nth-child(4) { animation-delay: 0.4s; }
    .product-card:nth-child(5) { animation-delay: 0.5s; }
    .product-card:nth-child(6) { animation-delay: 0.6s; }
`;
document.head.appendChild(style);

// Shopping cart and checkout functionality
function openCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'block';
    updateOrderSummary();
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateOrderSummary() {
    const orderSummary = document.querySelector('.order-summary');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    orderSummary.innerHTML = '';
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="order-item-info">
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity}</p>
            </div>
            <div class="order-item-price">$${itemTotal.toFixed(2)}</div>
        `;
        orderSummary.appendChild(orderItem);
    });
    
    const shipping = 5.00; // Fixed shipping cost
    const total = subtotal + shipping;
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Checkout steps navigation
function setupCheckoutSteps() {
    // Next step buttons
    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.checkout-step');
            const nextStepId = this.getAttribute('data-next');
            
            currentStep.style.display = 'none';
            document.getElementById(`step-${nextStepId}`).style.display = 'block';
            
            // Update step indicators
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
                if (parseInt(step.getAttribute('data-step')) <= parseInt(nextStepId)) {
                    step.classList.add('active');
                }
            });
            
            // If proceeding to payment, show selected payment method
            if (nextStepId === '3') {
                const selectedMethod = document.querySelector('.payment-method.active').getAttribute('data-method');
                if (selectedMethod === 'aba') {
                    document.getElementById('aba-confirmation').style.display = 'block';
                    document.getElementById('cash-confirmation').style.display = 'none';
                    
                    // Generate order ID
                    const orderId = 'ORD-' + Date.now().toString().slice(-8);
                    document.getElementById('aba-order-id').textContent = orderId;
                    
                    // Setup ABA payment redirection
                    document.getElementById('proceed-to-aba').addEventListener('click', processABAPayment);
                } else {
                    document.getElementById('aba-confirmation').style.display = 'none';
                    document.getElementById('cash-confirmation').style.display = 'block';
                    
                    // Generate order ID
                    const orderId = 'ORD-' + Date.now().toString().slice(-8);
                    document.getElementById('cash-order-id').textContent = orderId;
                }
            }
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.checkout-step');
            const prevStepId = this.getAttribute('data-back');
            
            currentStep.style.display = 'none';
            document.getElementById(`step-${prevStepId}`).style.display = 'block';
            
            // Update step indicators
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
                if (parseInt(step.getAttribute('data-step')) <= parseInt(prevStepId)) {
                    step.classList.add('active');
                }
            });
        });
    });
    
    // Payment method selection
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding payment form
            const methodType = this.getAttribute('data-method');
            document.querySelectorAll('.payment-form').forEach(form => form.style.display = 'none');
            document.getElementById(`${methodType}-form`).style.display = 'block';
        });
    });
    
    // Close modal buttons
    document.querySelector('.close-modal').addEventListener('click', closeCheckoutModal);
    document.querySelector('.close-checkout')?.addEventListener('click', closeCheckoutModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('checkout-modal');
        if (event.target === modal) {
            closeCheckoutModal();
        }
    });
}

// Process ABA Payment
function processABAPayment() {
    // Get form values
    const phone = document.getElementById('aba-phone').value;
    const email = document.getElementById('aba-email').value;
    const name = document.getElementById('aba-name').value;
    
    // Validate inputs
    if (!phone || !email || !name) {
        alert('Please fill in all required fields');
        return;
    }
    
    // In a real implementation, you would:
    // 1. Send order details to your server
    // 2. Get a transaction token from ABA PayWay
    // 3. Redirect to ABA PayWay payment page
    
    // For demo purposes, we'll simulate this process
    alert('Redirecting to ABA PayWay for payment processing...');
    
    // In a real implementation, you would redirect to ABA PayWay like this:
    // window.location.href = `https://payway.ababank.com/?token=YOUR_TRANSACTION_TOKEN`;
    
    // For demo, we'll just close the modal after a delay
    setTimeout(() => {
        closeCheckoutModal();
        alert('Payment successful! Thank you for your purchase.');
        cart = [];
        updateCartCount();
    }, 2000);
}

// Initialize checkout functionality
function initCheckout() {
    // Add event listener to cart button
    document.querySelector('.cart-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Your cart is empty. Please add some products first.');
            return;
        }
        openCheckoutModal();
    });
    
    setupCheckoutSteps();
}

// Update your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    displayTestimonials();
    initCheckout();
    
    // ... rest of your existing initialization code ...
});

const axios = require('axios');

async function createABAPayment(orderDetails) {
    try {
        const response = await axios.post('https://payway.ababank.com/api/v2/purchase', {
            merchant_id: 'YOUR_MERCHANT_ID',
            order_id: orderDetails.orderId,
            amount: orderDetails.totalAmount,
            currency: 'USD',
            description: 'Skincare Products Purchase',
            return_url: 'https://yourwebsite.com/payment/success',
            cancel_url: 'https://yourwebsite.com/payment/cancel',
            customer_name: orderDetails.customerName,
            customer_email: orderDetails.customerEmail,
            customer_phone: orderDetails.customerPhone,
            // Other required fields
        }, {
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY',
                'Content-Type': 'application/json'
            }
        });
        
        return response.data.payment_url;
    } catch (error) {
        console.error('ABA PayWay error:', error);
        throw error;
    }
}