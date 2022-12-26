console.log("Renderer: active");

const coreCount = document.getElementById("cores");

// @ts-expect-error
coreCount?.innerText = api.threads;
// coreCount?.innerText = 'Core Count: ${api.threads}';