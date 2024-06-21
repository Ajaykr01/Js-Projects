function CalculateAge() {
  const birthDateInput = document.querySelector("#birthDateInput");
  const birthDate = new Date(birthDateInput.value);

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  alert(`Your age is : ${age}`);
}
const CalculateButton = document.querySelector("button");
CalculateButton.addEventListener("click", CalculateAge);
