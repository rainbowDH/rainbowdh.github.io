function list_maker(){
  const selectedFile = document.getElementById('myFile').files[0];
  console.log(selectedFile)
}

function handleFileUpload(event) {
  var fileInput = event.target;
  var uploadButton = document.getElementById("myFile");
  // 파일이 업로드된 후에 input 요소를 숨깁니다.
  fileInput.style.display = "none";
}

function MakeGraph(){
  const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
}
