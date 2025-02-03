let colors = {};
fetch('../data/nameToHex.json')
  .then(response => response.json())
  .then(data => colors = data)
  .catch(err => console.error("Failed to load colors", err));

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const search = document.getElementById('search');
  const result = document.getElementById('result');
  const resultText = document.getElementById('result-text');
  const preview = document.getElementById('preview');
  const copy = document.getElementById('copy');
  const copyIcon = document.getElementById('copy-icon');

  search.addEventListener('click', getHex);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') getHex();
  });

  copy.addEventListener('click', (e) => {
    e.stopPropagation();
    copyToClipboard(result.textContent);
  });
  result.addEventListener('click', () => copyToClipboard(result.textContent));

  function getHex() {
    const color = input.value.trim();
    const hex = colors[color.toLowerCase()];

    if (hex) {
      resultText.textContent = hex;
      preview.textContent = '';
      preview.style.backgroundColor = hex;
    } else {
      resultText.textContent = '#';
      preview.textContent = 'Color not found';
      preview.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    }
  }

  function copyToClipboard(text) {
    const tmp = document.createElement('textarea');
    tmp.value = text.trim();
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);

    const prevColor = copyIcon.style.color;
    copyIcon.style.color = '#f5f5f4';
    setTimeout(() => {
      copyIcon.style.color = prevColor;
    }, 500);
  }
});
