class DateTimeCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      this.innerHTML = `
        <ha-card>
          <div class="card-content" id="datetime"></div>
        </ha-card>
      `;
      this.content = this.querySelector('#datetime');
      this.style();
      this.updateDateTime();
      setInterval(() => this.updateDateTime(), 60000); // Aktualizuj co minutę
    }
  }

  updateDateTime() {
    const now = new Date();
    this.content.innerHTML = `
      <div>${now.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
      <div>${now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}</div>
    `;
  }

  style() {
    const style = document.createElement('style');
    style.textContent = `
      .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f0f0f0;
        padding: 16px;
        border-radius: 4px;
      }
    `;
    this.appendChild(style);
  }
}

customElements.define('datetime-card', DateTimeCard);
