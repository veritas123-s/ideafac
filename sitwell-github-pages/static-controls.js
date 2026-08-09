(() => {
  const planData = {
    trial: { name: "First Sit", price: 0 },
    standard: { name: "Standard Waiting", price: 12.99 },
    comfort: { name: "Peak Comfort", price: 19.99 },
  };
  const postureData = {
    upright: { name: "Civic Upright", symbol: "90°", price: 0 },
    supported: { name: "Backrest Access", symbol: "105°", price: 3.5 },
    recline: { name: "Executive Lean", symbol: "120°", price: 7 },
  };
  const extraData = {
    grace: { name: "60-second grace period", price: 2 },
    quiet: { name: "Reduced warning volume", price: 0.8 },
    weather: { name: "Weather-facing seat preference", price: 1.2 },
  };

  const money = (value) => `£${value.toFixed(2)}`;
  const form = document.querySelector(".checkout-form");
  const summaryButton = document.querySelector(".summary-card > button");
  const cardPanel = document.querySelector(".card-panel");
  let alternatePanel = null;

  function selected(name) {
    return document.querySelector(`input[name="${name}"]:checked`)?.value;
  }

  function setSelectedClasses(name, cardSelector) {
    document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
      input.closest(cardSelector)?.classList.toggle("selected", input.checked);
      input.closest("label")?.classList.toggle("active", input.checked);
    });
  }

  function setActiveLabels(name) {
    document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
      input.closest("label")?.classList.toggle("active", input.checked);
    });
  }

  function updatePaymentPanel() {
    const payment = selected("payment");
    document.querySelectorAll('input[name="payment"]').forEach((input) => {
      input.closest("label")?.classList.toggle("active", input.checked);
    });
    if (payment === "card") {
      if (alternatePanel) alternatePanel.remove();
      alternatePanel = null;
      if (cardPanel) cardPanel.hidden = false;
      return;
    }
    if (cardPanel) cardPanel.hidden = true;
    if (alternatePanel) alternatePanel.remove();
    alternatePanel = document.createElement("div");
    alternatePanel.className = "alternate-payment";
    const title =
      payment === "wallet" ? "SitWell Pay is ready" : "Employer comfort credit";
    const copy =
      payment === "wallet"
        ? "Your preferred sitting wallet will be selected on submit."
        : "Your organisation will receive a posture-level invoice.";
    alternatePanel.innerHTML = `<span aria-hidden="true">SW</span><div><strong>${title}</strong><p>${copy}</p></div>`;
    document.querySelector(".payment-tabs")?.after(alternatePanel);
  }

  function updateSummary() {
    const plan = planData[selected("plan")] || planData.standard;
    const posture = postureData[selected("posture")] || postureData.supported;
    const extras = [...document.querySelectorAll(".extras-list > label")]
      .filter((label) => label.querySelector("input")?.checked)
      .map((label) => {
        const input = label.querySelector("input");
        const order = [...document.querySelectorAll(".extras-list > label")].indexOf(label);
        return Object.values(extraData)[order] || extraData[input?.value];
      })
      .filter(Boolean);

    setSelectedClasses("plan", ".option-card");
    setSelectedClasses("posture", ".posture-card");
    setActiveLabels("rider");

    document.querySelector(".summary-title h2").textContent = plan.name;
    document.querySelector(".seat-preview > span").textContent = posture.symbol;

    const lines = document.querySelector(".summary-lines");
    lines.innerHTML = "";
    [
      [plan.name, plan.price],
      [posture.name, posture.price],
      ...extras.map((item) => [item.name, item.price]),
    ].forEach(([name, price]) => {
      const row = document.createElement("div");
      row.innerHTML = `<span>${name}</span><strong>${money(price)}</strong>`;
      lines.append(row);
    });

    const total = plan.price + posture.price + extras.reduce((sum, item) => sum + item.price, 0);
    document.querySelector(".total-row > strong").textContent = money(total);
    const mobileButton = document.querySelector(".mobile-submit");
    if (mobileButton) mobileButton.textContent = `Submit · ${money(total)}`;
  }

  function showSuccess(event) {
    event?.preventDefault();
    if (document.querySelector(".modal-backdrop")) return;
    const modal = document.createElement("div");
    modal.className = "modal-backdrop";
    modal.setAttribute("role", "presentation");
    modal.innerHTML = `
      <section class="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-title">
        <button class="modal-close" type="button" aria-label="Close success message">×</button>
        <span class="success-mark" aria-hidden="true">✓</span>
        <p>Payment simulation complete</p>
        <h2 id="success-title">Success</h2>
        <p class="success-copy">Your sitting preferences have been admired and immediately forgotten. No payment or reservation was made.</p>
        <button type="button">Return to checkout</button>
      </section>`;
    const close = () => modal.remove();
    modal.querySelector(".modal-close").addEventListener("click", close);
    modal.querySelector(".success-modal > button:last-child").addEventListener("click", close);
    document.body.append(modal);
    modal.querySelector(".modal-close").focus();
  }

  document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", () => {
      updateSummary();
      if (input.name === "payment") updatePaymentPanel();
    });
  });

  const cardNumber = document.querySelector('input[aria-label="Card number"]');
  cardNumber?.addEventListener("input", (event) => {
    event.target.value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  });

  const expiry = document.querySelector('input[placeholder="MM / YY"]');
  expiry?.addEventListener("input", (event) => {
    const digits = event.target.value.replace(/\D/g, "").slice(0, 4);
    event.target.value = digits.length > 2 ? `${digits.slice(0, 2)} / ${digits.slice(2)}` : digits;
  });

  const cvc = document.querySelector('input[placeholder="123"]');
  cvc?.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D/g, "").slice(0, 4);
  });

  form?.addEventListener("submit", showSuccess);
  summaryButton?.addEventListener("click", showSuccess);
  updateSummary();
})();
