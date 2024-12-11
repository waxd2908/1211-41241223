async function fetchStockData() {
    const stockId = document.getElementById('stockId').value;
    const url = `https://api.example.com/stocks/${stockId}/daily`; // 替換為實際 API URL
  
    try {
      const response = await fetch(url, {
        headers: { 'Authorization': 'Bearer YOUR_API_KEY' } // 若需要 API 金鑰
      });
      const data = await response.json();
  
      if (data && data.length > 0) {
        const tableBody = document.getElementById('stockTable');
        tableBody.innerHTML = ''; // 清空舊資料
        data.forEach((item) => {
          const row = `
            <tr>
              <td>${item.date}</td>
              <td>${item.volume}</td>
              <td>${item.open}</td>
              <td>${item.high}</td>
              <td>${item.low}</td>
              <td>${item.close}</td>
            </tr>`;
          tableBody.innerHTML += row;
        });
      } else {
        alert('查無資料，請確認股票代碼是否正確');
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      alert('無法取得資料，請稍後再試');
    }
  }
  