function addComment() {
  
  let name = document.getElementById("name").value.trim() || "Anonymous";
  let comment = document.getElementById("comment").value.trim();
  
  if (!comment) {
    alert("Please enter a comment.");
    return;
  }

  const formData = new URLSearchParams();
  formData.append("entry.682198612", name);
  formData.append("entry.2081790477", comment);

  fetch("https://docs.google.com/forms/d/e/1FAIpQLSfzV8UNpupzcSIw1I_CFNrk2pL3lFDK61ec1hIDXxTY2m03RA/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: formData
  });
  
  document.getElementById("feedbackModal").style.display= "flex";

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";

}
