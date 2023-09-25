function createAccount(pin, amount=0) {
    let pinInit = pin;
    let balance = amount;
  
    return {
        checkBalance(inputPin) {
            if (inputPin !== pinInit) {
              return "Invalid PIN.";
            }
            return `$${balance}`;
          },
          deposit(inputPin, _amount) {
            if (inputPin !== pin) {
              return "Invalid PIN.";
            }
            balance += _amount;
            return `Successfully deposited $${_amount}. Current balance: $${balance}.`;
          },
      
      withdraw: (inputPin, _amount) => {
        if (inputPin === pinInit) {
          if (_amount > balance) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          } else {
            balance -= _amount;
            return `Successfully withdrew $${_amount}. Current balance: $${balance}.`;
          }
        } else {
          return "Invalid PIN.";
        }
      },
      changePin: (oldPin, newPin) => {
        if (oldPin === pinInit) {
          pinInit = newPin;
          return "PIN successfully changed!";
        } else {
          return "Invalid PIN.";
        }
      },
    };
  }

  
module.exports = { createAccount };
