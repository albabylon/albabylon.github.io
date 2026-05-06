function openModal(project) {
    const modal = document.getElementById("modal");
    const body = document.getElementById("modal-body");

    if (project === "project1") {
        body.innerHTML = `
      <h2>Task Manager</h2>
      <p>Полноценное приложение для управления задачами с drag & drop.</p>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/1SUx4PlcQ5w"
        frameborder="0" allowfullscreen>
      </iframe>
    `;
    }

    if (project === "project2") {
        body.innerHTML = `
      <h2>Chat App</h2>
      <p>Реалтайм чат с WebSocket.</p>

      <img src="img1.png" style="width:100%; margin-bottom:10px;">
      <img src="img2.png" style="width:100%;">
    `;
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}