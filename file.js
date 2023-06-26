window.addEventListener('DOMContentLoaded', (event) => {
  const fileInput = document.getElementById('file-input');
  const uploadBtn = document.getElementById('upload-btn');
  const resultMessage = document.getElementById('result-message');
  const downloadLink = document.getElementById('download-link');
  
  uploadBtn.addEventListener('click', () => {
    fileInput.click();
  });
  
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      convertToPdf(file);
    }
  });
  function convertToPdf(file) {
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const text = event.target.result;
      const rows = text.split('\n');
      const pdfContent = rows.map((row) => row.split('\t').join(',')).join('\n');
  
      resultMessage.innerText = 'Conversion completed.';
  
      downloadLink.href = URL.createObjectURL(new Blob([pdfContent], { type: 'text/pdf' }));
      downloadLink.style.display = 'block';
      downloadLink.setAttribute('download', `${file.name}.pdf`);
  
      document.getElementById('conversion-result').style.display = 'block';
    };
  
    reader.readAsText(file);
  }
});
  