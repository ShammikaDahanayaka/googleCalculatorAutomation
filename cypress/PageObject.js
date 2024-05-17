// This modal locator is used for Key Events (Key Codes)
const modalLocator = "[jsname='zLiRgc']"; //SLn8gc

const calculatorScreen = {
  calculatorComponent: {
    idLocator: "[jscontroller='GCPuBe']"
  },
  resultOutput: {
    idLocator: ".qv3Wpe"
  }
};
const keyCode = {
  enter: {
    idLocator: modalLocator,
    keyCode: "{enter}"
  },
  delete: {
    idLocator: modalLocator,
    keyCode: "{backspace}"
  }
};

const numbers = {
  zero: {
    value: 0,
    idLocator: "[jsname='bkEvMb']"
  },
  one: {
    value: 1,
    idLocator: "[jsname='N10B9']",
    keyCode: "{1}"
  },
  two: {
    value: 2,
    idLocator: "[jsname='lVjWed']"
  },
  three: {
    value: 3,
    idLocator: "[jsname='KN1kY']"
  },
  four: {
    value: 4,
    idLocator: "[jsname='xAP7E']"
  },
  five: {
    value: 5,
    idLocator: "[jsname='Ax5wH']"
  },
  six: {
    value: 6,
    idLocator: "[jsname='abcgof']"
  },
  seven: {
    value: 7,
    idLocator: "[jsname='rk7bOd']"
  },
  eight: {
    value: 8,
    idLocator: "[jsname='T7PMFe']"
  },
  nine: {
    value: 9,
    idLocator: "[jsname='XoxYJ']"
  },
  deleteCE: {
    idLocator: "[aria-label='clear entry']"
  },
  deleteAC: {
    idLocator: "[aria-label='all clear']"
  },
  divide: {
    value: "/",
    displayValue: "÷",
    idLocator: "[aria-label='divide']",
    xpath: "//div[@aria-label='divide']"
  },
  multiply: {
    value: "*",
    displayValue: "×",
    idLocator: "[aria-label='multiply']",
    xpath: "//div[@aria-label='multiply']"
  },
  subtract: {
    value: "-",
    displayValue: "-",
    idLocator: "[aria-label='minus']",
    xpath: "//div[@aria-label='minus']"
  },
  add: {
    value: "+",
    displayValue: "+",
    idLocator: "[aria-label='plus']",
    xpath: "//div[@aria-label='plus']"
  },
  result: {
    idLocator: "[aria-label='equals']",
    xpath: "//div[@jsname='Pt8tGc']"
  },
  point: {
    displayValue: ".",
    idLocator: "[aria-label='point']",
    xpath: "//div[@aria-label='point']"
  }
};

module.exports = {
  numbers,
  calculatorScreen,
  keyCode
};