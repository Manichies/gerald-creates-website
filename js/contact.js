/**
 * ============================================
 * Gerald Creates - Contact Form JavaScript
 * ============================================
 * Handles: Form validation, Formspree submission,
 * loading states, success/error messages,
 * and pre-filling service from URL params.
 * ============================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initContactForm);

  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    prefillService();
    populateServiceOptions();
    setupFormValidation(form);
  }

  /* ─── PREFILL SERVICE FROM URL PARAM ───────────────────── */
  function prefillService() {
    var params = new URLSearchParams(window.location.search);
    var service = params.get('service');
    if (service) {
      var select = document.getElementById('service');
      if (select) {
        // Wait a frame for options to be populated
        requestAnimationFrame(function () {
          for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].value === service) {
              select.selectedIndex = i;
              break;
            }
          }
        });
      }
    }
  }

  /* ─── POPULATE SERVICE OPTIONS FROM DATA ───────────────── */
  function populateServiceOptions() {
    if (typeof SERVICES_DATA === 'undefined') return;
    var select = document.getElementById('service');
    if (!select) return;

    // Keep the first placeholder option, clear the rest
    var placeholder = select.options[0];
    select.innerHTML = '';
    select.appendChild(placeholder);

    SERVICES_DATA.forEach(function (service) {
      var option = document.createElement('option');
      option.value = service.id;
      option.textContent = service.name + ' (' + service.subtitle + ')';
      select.appendChild(option);
    });

    // Add "Something Else" option
    var otherOption = document.createElement('option');
    otherOption.value = 'other';
    otherOption.textContent = 'Something Else';
    select.appendChild(otherOption);

    // Re-apply prefill after options are populated
    prefillService();
  }

  /* ─── FORM VALIDATION & SUBMISSION ─────────────────────── */
  function setupFormValidation(form) {
    var formStatus = document.getElementById('form-status');
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalBtnText = submitBtn.textContent;

    // Real-time validation on blur
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(function (field) {
      field.addEventListener('blur', function () {
        validateField(this);
      });

      field.addEventListener('input', function () {
        // Remove error state as user types
        if (this.classList.contains('error')) {
          this.classList.remove('error');
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate all required fields
      var isValid = true;
      var firstError = null;

      form.querySelectorAll('input[required], select[required], textarea[required]').forEach(function (field) {
        if (!validateField(field)) {
          isValid = false;
          if (!firstError) firstError = field;
        }
      });

      // Email format check
      var emailField = document.getElementById('email');
      if (emailField && emailField.value && !isValidEmail(emailField.value.trim())) {
        emailField.classList.add('error');
        isValid = false;
        if (!firstError) firstError = emailField;
      }

      if (!isValid) {
        showStatus(formStatus, 'Please fill in all required fields correctly.', 'error');
        if (firstError) firstError.focus();
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

      // Submit to Formspree
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        if (response.ok) {
          showStatus(formStatus, "Thanks for reaching out! I'll get back to you within 24 hours.", 'success');
          form.reset();
        } else {
          return response.json().then(function (data) {
            if (data.errors) {
              var errorMsg = data.errors.map(function (err) { return err.message; }).join(', ');
              showStatus(formStatus, errorMsg, 'error');
            } else {
              showStatus(formStatus, 'Something went wrong. Please try emailing me directly at createsgerald@gmail.com', 'error');
            }
          });
        }
      })
      .catch(function () {
        showStatus(formStatus, 'Something went wrong. Please try emailing me directly at createsgerald@gmail.com', 'error');
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      });
    });
  }

  /* ─── FIELD VALIDATION ─────────────────────────────────── */
  function validateField(field) {
    var value = field.value.trim();
    var isValid = true;

    if (field.hasAttribute('required') && !value) {
      isValid = false;
    }

    if (field.type === 'email' && value && !isValidEmail(value)) {
      isValid = false;
    }

    if (isValid) {
      field.classList.remove('error');
    } else {
      field.classList.add('error');
    }

    return isValid;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ─── STATUS MESSAGES ──────────────────────────────────── */
  function showStatus(el, message, type) {
    if (!el) return;
    el.textContent = message;
    el.className = type;
    el.style.display = 'block';

    // Auto-hide after 8 seconds
    setTimeout(function () {
      el.style.display = 'none';
    }, 8000);

    // Scroll status into view if not visible
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

})();
