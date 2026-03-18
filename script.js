function addComment() {
  let name = document.getElementById("name").value.trim();
  let comment = document.getElementById("comment").value.trim();
  if (!name || !comment) return alert("Please enter both name and comment");
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({name, comment});
  localStorage.setItem("comments", JSON.stringify(comments));

  document.getElementById("name").value = '';
  document.getElementById("comment").value = '';

displayComments();
  
}

function displayComments() {
  let list = document.getElementById("commentList");
  list.innerHTML = '';
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.forEach(c => {
    let div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `<b>${c.name}</b>: ${c.comment}`;
    list.appendChild(div);
  });
}

displayComments();
