
    function handleFileSelect(event) {
      const file = event.target.files[0]; // 선택된 파일

      const reader = new FileReader();

      reader.onload = function(e) {
        const contents = e.target.result; // 파일의 내용

        // 파일 내용을 처리하고 표로 출력하는 함수 호출
        displayTable(contents);
      };

      reader.readAsText(file);
    }
    function displayTable(contents) {
      const lines = contents.split('\n'); // 각 줄을 배열로 분리

      const table = document.createElement('table'); // 테이블 요소 생성

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const cells = line.split(','); // 각 줄의 셀을 배열로 분리

        const row = document.createElement('tr'); // 행 요소 생성

        for (let j = 0; j < cells.length; j++) {
          const cell = document.createElement('td'); // 셀 요소 생성
          const cellText = document.createTextNode(cells[j]); // 셀 내용 추가
          cell.appendChild(cellText); // 셀에 내용 추가
          row.appendChild(cell); // 행에 셀 추가
        }

        table.appendChild(row); // 테이블에 행 추가
      }

      document.body.appendChild(table); // 테이블을 문서에 추가
    }
