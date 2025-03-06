function showPaymentSection(image, name, price) {
    let product = { image: image, name: name, price: price };
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    document.querySelector('.product-container').style.display = "none";
    document.getElementById('loader').style.display = "block";
    setTimeout(function() {
      document.getElementById('loader').style.display = "none";
      document.getElementById('payment-section').style.display = "block";
    }, 2000);
  }

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
  }

  $(document).ready(function () {
    $('#payment-method').change(function () {
      if ($(this).val() === 'paypal') {
        $('#card-details').hide();
      } else {
        $('#card-details').show();
      }
    });

    document.getElementById('checkout-form').addEventListener('submit', function(event) {
      event.preventDefault();
      document.getElementById('alert-message').innerHTML = '';

      let firstName = document.getElementById('first-name').value.trim();
      let lastName = document.getElementById('last-name').value.trim();
      let address = document.getElementById('address').value.trim();
      let paymentMethod = document.getElementById('payment-method').value;
      let cardNumber = document.getElementById('card-number').value.trim();

      if (!firstName || !lastName || !address) {
        document.getElementById('alert-message').innerHTML = '<div class="alert alert-danger">Please fill in all delivery details.</div>';
        return;
      }

      if (paymentMethod === 'card' && !cardNumber) {
        document.getElementById('alert-message').innerHTML = '<div class="alert alert-danger">Please enter your card number.</div>';
        return;
      }

      document.getElementById('alert-message').innerHTML = '<div class="alert alert-success">Payment Successful!</div>';
    });
  });
