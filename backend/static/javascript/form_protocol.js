document.getElementById('submit_button_protocol').addEventListener('click', function () {
    // 檢查是否勾選了同意條款的 checkbox
    var formInfoScriptUrl = "/static/javascript/form_info.js";
    var SaveInfoScriptUrl = "/static/javascript/save_info.js";
    var agreeCheckbox = document.getElementById('agree');
    if (!agreeCheckbox.checked) {
        // 如果沒有勾選，顯示提示並中止操作
        return; // 中止後續代碼執行
    }

    // 如果已勾選，則繼續執行原有操作
    var div = document.getElementById('form_insert');
    div.innerHTML = ''; // 清除 div 內容

    // 填充新的 HTML 文本
    div.innerHTML = `        
    <div class="form-container">
        <form>
            <label for="Discord使用者名稱">Discord使用者名稱</label>
            <input type="text" id="Discord使用者名稱" name="Discord使用者名稱" required><br>

            <label for="Minecraft名稱">Minecraft名稱</label>
            <input type="text" id="Minecraft名稱" name="Minecraft名稱" required><br>

            <label for="email">電子郵件：</label>
            <input type="email" id="email" name="email" required><br>
            <fieldset>
                <legend>你認識「無拘生存」多久？</legend>
                <label><input type="radio" name="duration" value="no" required> 沒有聽過</label><br>
                <label><input type="radio" name="duration" value="one" required> 1個月</label><br>
                <label><input type="radio" name="duration" value="one_three" required> 1個月至3個月</label><br>
                <label><input type="radio" name="duration" value="three_six" required> 3個月至6個月</label><br>
                <label><input type="radio" name="duration" value="six_more" required> 6個月以上</label><br>
            </fieldset>
            <fieldset>
                <legend>你希望你的申請身分是？</legend>
                <label><input type="radio" name="position" value="wingman" required> 無拘的好友（無頻道但想在無拘中協助或籌備）</label><br>
                <label><input type="radio" name="position" value="influencer" required> 無拘實況主（有頻道且想要合作或在無拘中實況）</label><br>
                <label><input type="radio" name="position" value="pass" required> 無拘續約者（在通行證過期後期望續約者）</label><br>
            </fieldset>
            <input id="button_form" type="submit" value="下一步">
        </form>
    </div>`;
    setTimeout(loadScript, 1, formInfoScriptUrl);
    setTimeout(loadScript, 1, SaveInfoScriptUrl);
});

function loadScript(url) {
    // 檢查是否已經加載了該腳本
    var existingScripts = document.querySelectorAll('script[src="' + url + '"]');
    if (existingScripts.length > 0) {
        // 如果已經加載，則遍歷並刪除所有匹配的腳本
        existingScripts.forEach(function (script) {
            script.parentNode.removeChild(script);
        });
    }

    // 創建並加載新的腳本
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}