//  API 
async function fetchRates(base) {
    try {
        const ratesResp = await fetch(`https://open.er-api.com/v6/latest/${base}`);
        return await ratesResp.json();
    } catch (err) {
        console.error("Error fetching rates:", err);
    }
}

//  DOM Helpers 
const DOM = {
    fromInput: document.getElementById("fromCurrency"),
    toInput: document.getElementById("toCurrency"),
    fromSelect: document.getElementById("fromCurrencySelect"),
    toSelect: document.getElementById("toCurrencySelect"),
    title: document.querySelector(".container h1"),
    result: document.querySelector(".result h3"),
    reverseBtn: document.getElementById("converter")
};

// Core Logic 
async function convertCurrency(from, to, amount = 1) {
    console.log("Base Currency ::::: "+from);
    const currencies = await fetchRates(from);
    if (!currencies) return;

    const rate = currencies.rates[to];
    const result = (amount * rate).toFixed(2);

    updateUI(from, to, amount, rate, result);
    populateDropdowns(currencies.rates, from, to);
}

//  UI Update 
function updateUI(from, to, amount, rate, result) {
    DOM.fromInput.value = amount;
    DOM.toInput.value = result; 
    DOM.title.textContent = `Convert ${from} to ${to}`;
    DOM.result.textContent = `1 ${from} = ${rate} ${to}`;
}

// Dropdown
function populateDropdowns(rates, from, to) {
    DOM.fromSelect.innerHTML = "";
    DOM.toSelect.innerHTML = "";

    Object.keys(rates).forEach(currency => {
        DOM.fromSelect.appendChild(createOption(currency, currency === from));
        DOM.toSelect.appendChild(createOption(currency, currency === to));
    });
}

function createOption(value, isSelected) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    if (isSelected) option.selected = true;
    return option;
}

// Event Handlers 
function handleInputChange() {
    const from = DOM.fromSelect.value;
    const to = DOM.toSelect.value;
    const amount = Number.parseFloat(DOM.fromInput.value) || 0;

    convertCurrency(from, to, amount);
}

function handleReverse(e) {
    e.preventDefault();
    convertCurrency(DOM.toSelect.value, DOM.fromSelect.value, DOM.fromInput.value);
}

//  Init 
function init() {
    convertCurrency("EUR", "DKK");

    DOM.fromInput.addEventListener("input", handleInputChange);
    DOM.fromSelect.addEventListener("change", handleInputChange);
    DOM.toSelect.addEventListener("change", handleInputChange);
    DOM.reverseBtn.addEventListener("click", handleReverse);
}

document.addEventListener("DOMContentLoaded", init);



