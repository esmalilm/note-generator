document.getElementById("generateBtn").addEventListener("click", () => {
  const form = document.getElementById("noteForm");
  const acc = form.elements["acc"].value;
  const caseId = form.elements["caseId"].value;
  const domain = form.elements["domain"].value;
  const issue = form.elements["issue"].value;
  const steps = form.elements["steps"].value;

  const note = `
Acc#: ${acc}
Case: ${caseId}
Affected Domain: ${domain}
Issue: ${issue}
Steps Taken:
${steps}
  `.trim();

  document.getElementById("output").textContent = note;
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("output").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
});
