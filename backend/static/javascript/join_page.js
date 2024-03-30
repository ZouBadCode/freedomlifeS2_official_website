document.getElementById('join_button').addEventListener('click', function () {
    var formProtocolScriptUrl = "/static/javascript/form_protocol.js";
    var targetDiv = document.getElementById('form_insert');
    targetDiv.innerHTML = `    
    <div class="form-container">
        <form>
            <div class="agreement">
                <h3>關於無拘生存......</h3>
                <ul>
                    <li><strong>Discord群組</strong>
                        <p>
                            一切行為請符合Discord規範內容 請各位多多聊天，尤其是我想聽見大家的聲音 ⁠文字聊天¹ / ⁠文字聊天²
                            此二頻道什麼都能聊。但請盡可能不要產生爭執、吵架，或是任何對你我造成傷害的行為，有任何疑慮請直接在任何文字頻道 @Discord管理員 身分組進行詢問
                        </p>
                    </li>
                    <li><strong>Minecraft伺服器內容</strong>
                        <p>
                            《Re:無拘生存㆓》沿用第一代的地圖重啟，並開啟白名單 請留意，重啟非重創，第一代的事物都將存在 請先安裝此資源包:
                            <a
                                href="https://download2280.mediafire.com/v36qeuuad6bg/ntcjyfz74fttqae/BACAP+Language+Pack+1.19.3.zip">點擊至下載網址</a>
                        <p>
                            在伺服器中，每個人都可以使用的指令內容如下：/tpa /tpaccept /tpdeny /tpahere /home /sethome /delhome /remhome /back
                            /afk /mail /msg /me /tell
                        </p>
                        <p>請勿隨意破壞他人區域、竊取物件等行為 若有使用者存有違反伺服器規則的疑慮，請直接私訊 @玉米罐頭ᶜᵒ®ᶮᶜᵃᶮ 處理
                            有任何伺服器系統的問題請 @Minecraft伺服器管理員 進行反映</p>
                        有任何洗白或重大變更內容將與全部成員進行討論《無拘生存》是一個以實況群體為主的多人生存，裝設簡易的插件，使參與者們可以更加方便地進行實況，此生存伺服器旨在促進創作者的視野及交流，創造合作或聯動的機會。
                        請各位居民們在這裡恣意的生存，望各位無拘無束的生存，壓力不大，隨意實況及互相聯動，展現最真實的自己，我也會在語音頻道跟各位聊天，祝生活愉快！
                        </p>
                </ul>
            </div>

            <div class="checkbox">
                <input type="checkbox" id="agree" name="agree" required>
                <label for="agree">我已閱讀並同意上述條款和條件</label>
            </div>

            <input type="submit" id="submit_button_protocol" value="下一步">
        </form>
    </div>`;
    setTimeout(loadScript, 1, formProtocolScriptUrl);




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