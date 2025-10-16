// Default PIN and balance
const correctPIN = "1234";
let balance = 10000;

// Get elements
const loginScreen = document.getElementById("login-screen");
const atmScreen = document.getElementById("atm-screen");
const loginError = document.getElementById("login-error");
const balanceDisplay = document.getElementById("balance");

// Sections
const depositSection = document.getElementById("deposit-section");
const withdrawSection = document.getElementById("withdraw-section");
const checkSection = document.getElementById("check-section");

// Login function
function login() {
  const enteredPIN = document.getElementById("pin").value;
  if (enteredPIN === correctPIN) {
    loginScreen.classList.add("d-none");
    atmScreen.classList.remove("d-none");
  } else {
    loginError.textContent = "❌ Invalid PIN! Try again.";
  }
}

// Logout function
function logout() {
  atmScreen.classList.add("d-none");
  loginScreen.classList.remove("d-none");
  document.getElementById("pin").value = "";
  loginError.textContent = "";
  hideAllSections();
}

// Show specific section
function showSection(section) {
  hideAllSections();
  if (section === "deposit") depositSection.classList.remove("d-none");
  else if (section === "withdraw") withdrawSection.classList.remove("d-none");
  else if (section === "check") {
    checkSection.classList.remove("d-none");
    document.getElementById("check-balance").textContent = balance;
  }
}

// Hide all operation sections
function hideAllSections() {
  depositSection.classList.add("d-none");
  withdrawSection.classList.add("d-none");
  checkSection.classList.add("d-none");
  document.getElementById("deposit-msg").textContent = "";
  document.getElementById("withdraw-msg").textContent = "";
}

// Deposit
function deposit() {
  const amount = parseFloat(document.getElementById("deposit-amount").value);
  const msg = document.getElementById("deposit-msg");

  if (isNaN(amount) || amount <= 0) {
    msg.textContent = "⚠ Enter a valid amount!";
    msg.classList.remove("text-success");
    msg.classList.add("text-danger");
    return;
  }

  balance += amount;
  balanceDisplay.textContent = balance;
  msg.textContent = `✅ ₹${amount} deposited successfully!`;
  msg.classList.remove("text-danger");
  msg.classList.add("text-success");
  document.getElementById("deposit-amount").value = "";
}

// Withdraw
function withdraw() {
  const amount = parseFloat(document.getElementById("withdraw-amount").value);
  const msg = document.getElementById("withdraw-msg");

  if (isNaN(amount) || amount <= 0) {
    msg.textContent = "⚠ Enter a valid amount!";
    return;
  }

  if (amount > balance) {
    msg.textContent = "❌ Insufficient balance!";
    return;
  }

  balance -= amount;
  balanceDisplay.textContent = balance;
  msg.textContent = `✅ ₹${amount} withdrawn successfully!`;
  msg.classList.remove("text-danger");
  msg.classList.add("text-success");
  document.getElementById("withdraw-amount").value = "";
}