const steps = document.querySelectorAll("li");
for (let i = 0; i < steps.length; i++) {
  steps[i].addEventListener("click", function(evt) {
    evt.target.style = "text-decoration: line-through";
    console.log(`Step ${i + 1} is complete`);
  });
}
