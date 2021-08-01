const refs = {
        openModalBtn: document.querySelector("[data-open-modal]"),
        closeModalBtn: document.querySelector("[data-close-modal]"),
        backdrop: document.querySelector("[data-backdrop]"),
      };

      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
        document.body.classList.toggle("modal-open")
        refs.backdrop.classList.toggle("is-hidden");
      }

(() => {
        document.querySelector(".form").addEventListener("submit", (e) => {
          e.preventDefault();

          new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));

          toggleModal();

          e.currentTarget.reset();
        });
      })();