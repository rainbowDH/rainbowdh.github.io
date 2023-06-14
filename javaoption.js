
function handleFileSelect(event){
    const file = event.target.files[0]; // 선택된 파일

    const reader = new FileReader();

    reader.onload = function(e) {
        const contents = e.target.result; // 파일의 내용

        // 파일 내용을 처리하고 표로 출력하는 함수 호출
        displayMax-min(contents);
    };

    reader.readAsText(file);
} 
