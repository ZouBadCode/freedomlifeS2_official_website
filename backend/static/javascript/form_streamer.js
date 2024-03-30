document.querySelector("form").addEventListener("submit", function (e) {
    // 阻止表單的默認提交行為
    e.preventDefault();

    // 獲取表單中的輸入值
    var nickname = document.getElementById("你希望大家如何稱呼你").value;
    var channelUrl = document.getElementById("你的頻道或品牌網址").value;
    var works = document.getElementById("你的作品 (審核用，影片或是直播之類的)").value;
    var motivation = document.getElementById("進入無拘生存的動機").value;
    var desiredMember = document.getElementById("在無拘中最想聯動的成員？（沒有則填「無」）").value;
    var postApprovalActivity = document.getElementById("審核通過之後，你最想在無拘生存中做什麼").value;
    var selfIntroduction = document.getElementById("最後簡單的自我介紹一下吧").value;

    // 將數據保存到sessionStorage
    sessionStorage.setItem("Nickname", nickname);
    sessionStorage.setItem("ChannelUrl", channelUrl);
    sessionStorage.setItem("Works", works);
    sessionStorage.setItem("Motivation", motivation);
    sessionStorage.setItem("DesiredMember", desiredMember);
    sessionStorage.setItem("PostApprovalActivity", postApprovalActivity);
    sessionStorage.setItem("SelfIntroduction", selfIntroduction);
    streamer_submitData();
    var div = document.getElementById('form_insert');
    div.innerHTML = ''; // 清除 div 內容

    // 填充新的 HTML 文本
    div.innerHTML = `        
    <div class="form-container">
        <p>您的表單已成功向無拘生存管理系統發送<br>請先加入以下Discord群組等待審核結果<br><a href="https://discord.gg/Wu9k38Gr">https://discord.gg/Wu9k38Gr</a><br>因無拘的網站工程師代碼能力極度垃圾<br>您的表單內容資訊若有誤，系統將無法為您自動處理<br>若有任何問題，請洽0800...，痾..請洽無拘管理人玉米罐頭@corn_can</p>  
    </div>`;
});





function streamer_submitData() {
    // 從sessionStorage獲取數據
    const data = {
        dataType: "streamer",
        DiscordUsername: sessionStorage.getItem("DiscordUsername"),
        MinecraftName: sessionStorage.getItem("MinecraftName"),
        Email: sessionStorage.getItem("Email"),
        Duration: sessionStorage.getItem("Duration"),
        Position: sessionStorage.getItem("Position"),
        Nickname: sessionStorage.getItem("Nickname"),
        ChannelUrl: sessionStorage.getItem("ChannelUrl"),
        Works: sessionStorage.getItem("Works"),
        Motivation: sessionStorage.getItem("Motivation"),
        DesiredMember: sessionStorage.getItem("DesiredMember"),
        PostApprovalActivity: sessionStorage.getItem("PostApprovalActivity",),
        SelfIntroduction: sessionStorage.getItem("SelfIntroduction"),
        SubmitTime: new Date().toISOString() // 將當前時間轉換為ISO格式的字符串
    };

    // 使用fetch API發送數據到後端
    fetch('/submitForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}