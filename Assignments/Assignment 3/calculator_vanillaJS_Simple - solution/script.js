document.querySelector("#AC").addEventListener("mousedown", () => {
  document.querySelector("#AC").classList.add("topRowKeysPressed");
});
document.querySelector("#AC").addEventListener("mouseup", () => {
  document.querySelector("#AC").classList.remove("topRowKeysPressed");
});

// define our own selector
const $$ = (selector) => {
  return document.querySelector(selector);
};

const getCurrentOutput = () => $$("#output").innerText;
const setCurrentOutput = (val) => ($$("#output").innerText = val);

// fitText($$(output), 0.02);
let inputKey = "";
let previousKey = "0";
const operators = ["/", "×", "-", "+", "**"];
const mainCalculatorBody = $$("#mainCalculatorBody");

mainCalculatorBody.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName) {
    inputKey = e.target.innerText == "xy" ? "**" : e.target.innerText;
    console.log(inputKey);
    // if the input key is numeric
    if (
      inputKey.length < 2 &&
      parseInt(inputKey) in [0, 1, 3, 4, 5, 6, 7, 8, 9, 10]
    ) {
      if (getCurrentOutput() === "0") {
        setCurrentOutput(inputKey);
        previousKey = inputKey;
      } else {
        setCurrentOutput(getCurrentOutput().toString() + inputKey.toString());
        previousKey = inputKey;
      }
    }
    // if the input key is an operation
    // in won't work here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

    if (operators.includes(inputKey)) {
      if (!operators.includes(previousKey)) {
        setCurrentOutput(getCurrentOutput().toString() + inputKey.toString());
        previousKey = inputKey;
      } else {
        setCurrentOutput(
          getCurrentOutput()
            .toString()
            .slice(0, previousKey == "**" ? -2 : -1) + inputKey.toString()
        );
        previousKey = inputKey;
      }
    }

    if (inputKey === "=") {
      try {
        let currOutput = getCurrentOutput();
        if (currOutput.includes("×")) {
          currOutput = currOutput.replaceAll("×", "*");
        }
        setCurrentOutput(eval(currOutput));
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    if (inputKey === "AC") {
      setCurrentOutput("0");
      // bug found in original code. Need to reset previousKey to 0 on AC.
      previousKey = "0";
    }
    if (inputKey === "+/-") {
      setCurrentOutput(-1 * eval(getCurrentOutput()));
    }
    if (inputKey === "%") {
      setCurrentOutput(eval(getCurrentOutput()) / 100);
    }
    if (inputKey === "x2") {
      setCurrentOutput(getCurrentOutput() ** 2);
    }
    if (inputKey === "x3") {
      setCurrentOutput(getCurrentOutput() ** 3);
    }
    if (inputKey === "10x") {
      setCurrentOutput(10 ** getCurrentOutput());
    }

    if (inputKey === "ex") {
      try {
        setCurrentOutput(Math.exp(eval(getCurrentOutput())));
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }
    if (inputKey === "log10") {
      try {
        var result = Math.LN10 * eval(getCurrentOutput());
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    if (inputKey === "ln") {
      try {
        var result = Math.LN2 * eval(getCurrentOutput());
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    if (inputKey === "1/x") {
      try {
        var result = 1 / eval(getCurrentOutput());
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    if (inputKey === "√x") {
      try {
        var result = Math.sqrt(eval(getCurrentOutput()));
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    if (inputKey === "∛x") {
      try {
        var result = Math.cbrt(eval(getCurrentOutput()));
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    // if (inputKey === "y√x") {
    //     try {
    //       var result = Math.cbrt(eval(getCurrentOutput()));
    //       setCurrentOutput(result);
    //     } catch (ex) {
    //       setCurrentOutput("Error!");
    //     }
    //   }

    if (inputKey === "sin") {
      try {
        var result = Math.sin(eval(getCurrentOutput()));
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    if (inputKey === "cos") {
      try {
        var result = Math.cos(eval(getCurrentOutput()));
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    if (inputKey === "tan") {
      try {
        var result = Math.tan(eval(getCurrentOutput()));
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }

    if (inputKey === "x!") {
      try {
        var result = factorialize(eval(getCurrentOutput()));
        setCurrentOutput(result);
      } catch (ex) {
        setCurrentOutput("Error!");
      }
    }
  }
});

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
