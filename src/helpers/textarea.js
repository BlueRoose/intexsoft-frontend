export const resize = () => {
  const textarea = document.querySelector("textarea");

  textarea?.addEventListener("keyup", function () {
    if (this.scrollTop > 0) {
      this.style.height = this.scrollHeight + "px";
    }
  });
};
