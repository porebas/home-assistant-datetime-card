class DateTimeCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config) {
    if (!this.shadowRoot.hasChildNodes()) {
      const card = document.createElement('ha-card');
      const content = document.createElement('div');
      content.className = "card-content";
      card.appendChild(content);
      this.shadowRoot.appendChild(card);
      this.content = content;
      this.styleCard();
    }
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 60000); // Aktualizuj co minutę
  }

  updateDateTime() {
    const now = new Date();
    this.content.innerHTML = `
      <div>${now.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
      <div>${now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}</div>
    `;
  }

  styleCard() {
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
    this.shadowRoot.appendChild(style);
  }
}

customElements.define('datetime-card', DateTimeCard);
