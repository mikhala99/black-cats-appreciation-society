/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

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

    // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    //if (mainNav) {
    //    new bootstrap.ScrollSpy(document.body, {
    //        target: '#mainNav',
    //        rootMargin: '0px 0px -40%',
    //    });
    //};

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
            document.addEventListener("DOMContentLoaded", function () {
                  // Cat pattern logic
                    const catPatternSelect = document.getElementById("catpattern");
                    const catOtherDiv = document.getElementById("catOtherPatternDiv");

                    catPatternSelect.addEventListener("change", function () {
                      if (this.value === "other") {
                        catOtherDiv.style.display = "block";
                      } else {
                        catOtherDiv.style.display = "none";
                      }
                    });

                    // Contact reason logic
                      const patternSelect = document.getElementById("pattern");
                      const otherDiv = document.getElementById("otherPatternDiv");

                      patternSelect.addEventListener("change", function () {
                        if (this.value === "Other") {
                          otherDiv.style.display = "block";
                        } else {
                          otherDiv.style.display = "none";
                        }
                      });
            });

            // Radio Button Alert
                function getRadioValue() {
                    const radios = document.getElementsByName("contactReason");
                    for (let i = 0; i < radios.length; i++) {
                        if (radios[i].checked) {
                            setTimeout(() => {
                                alert("Thank you! You selected: " + radios[i].value);
                            }, 100);
                        }
                    }
                }
            // Checkbox Alert
                function getCheckboxClick(checkbox) {
                    setTimeout(() => {
                        alert("Got it! Your selection has been paw-sitively noted: " + checkbox.value);
                    }, 100);
                }
            // Dropdown Alert
                function getMenuSelection(select) {
                    setTimeout(() => {
                        alert("Added to your list, just like a cat choosing its favorite windowsill: " + select.value);
                    }, 100);
                }
            // Textbox Entry Alert
                let textboxTimeout;

                function getTextboxEntry(input) {
                    clearTimeout(textboxTimeout);

                    textboxTimeout = setTimeout(() => {
                        if (!input.dataset.alerted && input.value.trim().length > 0) {
                            input.dataset.alerted = "true";
                            alert("Message received, no hairballs involved: " + input.value);
                        }
                    }, 1000);
                }

            function validateForm() {
              let name = document.getElementById("name").value;
              let email = document.getElementById("email").value;
              let phone = document.getElementById("phone").value;
              let message = document.getElementById("message").value;

              // Basic name check
              if (name.trim() === "") {
                alert("Dresden says: You can't send a message without telling us who you are. Even cats leave paw prints.");
                return false;
              }

              // Basic email presence check
              if (email.trim() === "") {
                alert("Pandora insists: We need your email. Telepathy hasn't worked since the 90s.");
                return false;
              }

              // Rudimentary email format check
              const emailRegex = /\S+@\S+\.\S+/;
              if (!emailRegex.test(email)) {
                alert("BCAS Interrupts: We'd love to respond, but that email's not responding to *us*.");
                return false;
              }

              // Phone number required
              if (phone.trim() === "") {
                alert("Meow-senger Error: We cannot text your cat carrier without a phone number.");
                return false;
              }

              // Message field required
              if (message.trim() === "") {
                alert("Message required: Even the quietest kitten has something to say.");
                return false;
              }
              // All is well
              return true;
            }

            document.addEventListener("DOMContentLoaded", () => {
                const vid = document.querySelector("video");
                if (vid) {
                    vid.addEventListener("loadedmetadata", () => {
                        console.log("Video duration:", vid.duration);
                    });
                }
            });
// Custom Submit and Error Messages for Formspree
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("submitSuccessMessage");
    const errorMessage = document.getElementById("submitErrorMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            if (!validateForm()) {
                event.preventDefault(); // Don't submit if validation fails
                return;
            }

            event.preventDefault(); // We'll handle the submission manually
            const formData = new FormData(form);

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.ok) {
                        form.reset();
                        if (successMessage) {
                            successMessage.classList.remove("d-none");
                            errorMessage.classList.add("d-none");
                        }
                        alert("Dresden thanks you for your submission! We'll be in touch.");
                    } else {
                        return response.json().then(data => {
                            throw new Error(data.message || "Form submission error");
                        });
                    }
                })
                .catch(error => {
                    if (errorMessage) {
                        errorMessage.classList.remove("d-none");
                        successMessage.classList.add("d-none");
                    }
                    alert("Yowch! Something went wrong with the submission. Try again later.");
                });
        });
    }
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

document.getElementById("contactForm").addEventListener("keydown", function(event) {
  if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
    event.preventDefault();
  }
});

