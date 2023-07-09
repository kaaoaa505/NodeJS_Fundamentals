const setForgroundRedColor = `\x1b[91m`;

const setBackgroundGreenColor = `\x1b[102m`;

const setBackgroundGrayForeGroundRedColor = `\x1b[91;107m`;

const resetToDefaultColors = `\x1b[0m`;

console.log(`
---
${setForgroundRedColor} Hello     ${resetToDefaultColors}
${setBackgroundGreenColor} World!    ${resetToDefaultColors}
${setBackgroundGrayForeGroundRedColor} colors!    ${resetToDefaultColors}
${resetToDefaultColors}___
`);
