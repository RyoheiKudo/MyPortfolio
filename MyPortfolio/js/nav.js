{
  const hiddenShow0_1 = document.getElementById("hiddenShow0_1");
  const hiddenShow0_2 = document.getElementById("hiddenShow0_2");
  const hiddenShow0_3 = document.getElementById("hiddenShow0_3");

  const hidden_show0_1_1 = document.getElementById("hidden_show0_1_1");
  const hidden_show0_2_1 = document.getElementById("hidden_show0_2_1");
  const hidden_show0_3_1 = document.getElementById("hidden_show0_3_1");

  hiddenShow0_1.addEventListener("click", () => {
    hidden_show0_1_1.classList.remove("hidden_show");
    hidden_show0_2_1.classList.remove("visible_show");
    hidden_show0_3_1.classList.remove("visible_show");
    hidden_show0_1_1.classList.add("visible_show");
    hidden_show0_2_1.classList.add("hidden_show");
    hidden_show0_3_1.classList.add("hidden_show");
  });

  hiddenShow0_2.addEventListener("click", () => {
    hidden_show0_1_1.classList.remove("visible_show");
    hidden_show0_2_1.classList.remove("hidden_show");
    hidden_show0_3_1.classList.remove("visible_show");
    hidden_show0_1_1.classList.add("hidden_show");
    hidden_show0_2_1.classList.add("visible_show");
    hidden_show0_3_1.classList.add("hidden_show");
  });

  hiddenShow0_3.addEventListener("click", () => {
    hidden_show0_1_1.classList.remove("visible_show");
    hidden_show0_2_1.classList.remove("visible_show");
    hidden_show0_3_1.classList.remove("hidden_show");
    hidden_show0_1_1.classList.add("hidden_show");
    hidden_show0_2_1.classList.add("hidden_show");
    hidden_show0_3_1.classList.add("visible_show");
  });
}
