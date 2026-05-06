function openModal(project) {
    const modal = document.getElementById("modal");
    const body = document.getElementById("modal-body");

    if (project === "project_bimstarter") {
        body.innerHTML = `
      <h2>Аналог BIM-STARTER</h2>
      <p>Арм-ние стены, Арм-ние плиты, Вед-сть деталей, Выделить детали, Схлопнуть ВРС, Отметки отверстий,
      Сборка-группа, Стены в пилоны, Аналитика вкл-выкл, Арматура вкл-выкл, Лист с каркасом, Family manager</p>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/1SUx4PlcQ5w?si=DOzA0WrSLFvnTkI3"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/Mj7-1_cIZzI?si=V5NFdBzl8xNBatex"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/lbDVbEKQ7dY?si=vuVdeyB8J1PfJszF"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/DarV22jEuTA?si=GHrVR-mBlP9cv242"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/WtocQb6Z1A4?si=HrBcwgyiGbMJ_NqS"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/cVwsRUdUGrc?si=uO0iRM3S9pwbLyel"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/wnXmQID0X0Y?si=BDTz3F17QZN_4knH"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/G0I9TVfFbDs?si=HxpL2jYD6Z77qvx0"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/_7vBfWcDuDQ?si=WTz3cJm7S-O5cxbQ"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/OhxeALtVPak?si=h0utKnPKzBaPJ62Y"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/TIEoxjjbM28?si=jYYCPtziV3Wc2jcT"
        frameborder="0" allowfullscreen>
      </iframe>

      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/Dw5guKAkD6A?si=jhX7z31C86lENDq4"
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