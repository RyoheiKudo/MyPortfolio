{
  const references = document.getElementById("references");
  const progate = document.getElementById("progate");
  const dotinstall = document.getElementById("dotinstall");

  const referencesHidden = document.getElementById("referencesHidden");
  const progateHidden = document.getElementById("progateHidden");
  const dotinstallHidden = document.getElementById("dotinstallHidden");

  const navHiddenShow = function () {
    referencesHidden.classList.add("hidden_show");
    progateHidden.classList.add("hidden_show");
    dotinstallHidden.classList.add("hidden_show");
  };

  references.addEventListener("click", () => {
    navHiddenShow();
    referencesHidden.classList.remove("hidden_show");
  });

  progate.addEventListener("click", () => {
    navHiddenShow();
    progateHidden.classList.remove("hidden_show");
  });

  dotinstall.addEventListener("click", () => {
    navHiddenShow();
    dotinstallHidden.classList.remove("hidden_show");
  });
}
