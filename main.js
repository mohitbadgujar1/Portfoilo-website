document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      alert(result.message || 'Message sent successfully!');
      this.reset();
    } catch (err) {
      alert('Failed to send message. Please try again.');
      console.error(err);
    }
    // Navbar toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('hidden');
  });
  
  // Dark mode toggle
  const toggleBtn = document.getElementById('darkToggle');
  toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
  
  });


  