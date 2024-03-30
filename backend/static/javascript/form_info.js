function handleForm() {
    const form = document.querySelector('form'); // 獲取表單

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // 阻止表單的預設提交行為
        var StreamerScriptUrl = "/static/javascript/form_streamer.js";
        var RenewerScriptUrl = "/static/javascript/form_renewer.js";
        var WingmanScriptUrl = "/static/javascript/form_wingman.js";
        const selectedPosition = document.querySelector('input[name="position"]:checked').value; // 獲取選中的申請身分值
        console.log(selectedPosition)
        var formInsertDiv = document.getElementById('form_insert'); // 獲取要清空並注入內容的div

        formInsertDiv.innerHTML = ''; // 清空div內容

        // 根據選中的申請身分注入相應的HTML內容
        switch (selectedPosition) {
            case 'influencer':
                formInsertDiv.innerHTML = `
                <div class="form-container">
                    <form action="/submitForm" method="post">
                        <label for="你希望大家如何稱呼你">你希望大家如何稱呼你</label>
                        <input type="text" id="你希望大家如何稱呼你" name="你希望大家如何稱呼你" required><br>
            
                        <label for="你的頻道或品牌網址">你的頻道或品牌網址</label>
                        <input type="text" id="你的頻道或品牌網址" name="你的頻道或品牌網址" required><br>
            
                        <label for="你的作品 (審核用，影片或是直播之類的)">你的作品 (審核用，影片或是直播之類的)</label>
                        <input type="text" id="你的作品 (審核用，影片或是直播之類的)" name="你的作品 (審核用，影片或是直播之類的)"><br>
            
                        <label for="進入無拘生存的動機">進入無拘生存的動機</label>
                        <input type="text" id="進入無拘生存的動機" name="進入無拘生存的動機" required><br>
            
                        <label for="在無拘中最想聯動的成員？（沒有則填「無」）">在無拘中最想聯動的成員？（沒有則填「無」）</label>
                        <input type="text" id="在無拘中最想聯動的成員？（沒有則填「無」）" name="在無拘中最想聯動的成員？（沒有則填「無」）" required><br>
            
                        <label for="審核通過之後，你最想在無拘生存中做什麼">審核通過之後，你最想在無拘生存中做什麼</label>
                        <input type="text" id="審核通過之後，你最想在無拘生存中做什麼" name="審核通過之後，你最想在無拘生存中做什麼" required><br>
            
                        <label for="最後簡單的自我介紹一下吧">最後簡單的自我介紹一下吧</label>
                        <input type="text" id="最後簡單的自我介紹一下吧" name="最後簡單的自我介紹一下吧" required><br>
            
                        <input type="submit" value="提交">
                    </form>
                </div>`;
                loadScript(StreamerScriptUrl);
                break;
            case 'pass':
                formInsertDiv.innerHTML = `    
                <div class="form-container">
                    <form action="/submitForm" method="post">
                        <label for="你希望被稱呼為">你希望被稱呼為</label>
                        <input type="text" id="你希望被稱呼為" name="你希望被稱呼為" required><br>
        
                        <input type="submit" value="提交">
                    </form>
                </div>`;
                loadScript(RenewerScriptUrl);
                break;
            case 'wingman':
                formInsertDiv.innerHTML = `
                <div class="form-container">
                    <form action="/submitForm" method="post">
                        <label for="你希望大家如何稱呼你">你希望大家如何稱呼你</label>
                        <input type="text" id="你希望大家如何稱呼你" name="你希望大家如何稱呼你" required><br>
                
                        <label for="進入無拘生存的動機">進入無拘生存的動機</label>
                        <input type="text" id="進入無拘生存的動機" name="進入無拘生存的動機" required><br>
                
                        <label for="你和現今的哪位成員最為親近？">你和現今的哪位成員最為親近？</label>
                        <input type="text" id="你和現今的哪位成員最為親近？" name="你和現今的哪位成員最為親近？" required><br>
                
                        <label for="承上題，你和該成員認識多久？">承上題，你和該成員認識多久？</label>
                        <input type="text" id="承上題，你和該成員認識多久？" name="承上題，你和該成員認識多久？" required><br>
                
                        <label for="最後簡單的自我介紹一下吧">最後簡單的自我介紹一下吧</label>
                        <input type="text" id="最後簡單的自我介紹一下吧" name="最後簡單的自我介紹一下吧" required><br>
                
                        <input type="submit" value="提交">
                    </form>
                </div>`;
                loadScript(WingmanScriptUrl);
                break;
        }
    });
}

// 綁定按鈕的click事件到剛剛定義的函式
document.querySelector('#button_form').addEventListener('click', handleForm);