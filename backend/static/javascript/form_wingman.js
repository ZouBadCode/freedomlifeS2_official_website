document.querySelector("form").addEventListener("submit", function (e) {
    // 阻止表單的默認提交行為
    e.preventDefault();

    // 獲取表單數據
    var nickname = document.getElementById("你希望大家如何稱呼你").value;
    var motivation = document.getElementById("進入無拘生存的動機").value;
    var closestMember = document.getElementById("你和現今的哪位成員最為親近？").value;
    var memberDuration = document.getElementById("承上題，你和該成員認識多久？").value;
    var selfIntroduction = document.getElementById("最後簡單的自我介紹一下吧").value;

    // 將數據存儲到sessionStorage
    sessionStorage.setItem("Nickname", nickname);
    sessionStorage.setItem("Motivation", motivation);
    sessionStorage.setItem("ClosestMember", closestMember);
    sessionStorage.setItem("MemberDuration", memberDuration);
    sessionStorage.setItem("SelfIntroduction", selfIntroduction);
    wingman_submitData();
    var div = document.getElementById('form_insert');
    div.innerHTML = ''; // 清除 div 內容

    // 填充新的 HTML 文本
    div.innerHTML = `        
    <div class="form-container">
        <p>您的表單已成功向無拘生存管理系統發送<br>請先加入以下Discord群組等待審核結果<br><a href="https://discord.gg/Wu9k38Gr">https://discord.gg/Wu9k38Gr</a><br>因無拘的網站工程師代碼能力極度垃圾<br>您的表單內容資訊若有誤，系統將無法為您自動處理<br>若有任何問題，請洽0800...，痾..請洽無拘管理人玉米罐頭@corn_can</p>  
    </div>`;
});


function wingman_submitData() {
    // 從sessionStorage獲取數據
    const data = {
        dataType: "wingman",
        DiscordUsername: sessionStorage.getItem("DiscordUsername"),
        MinecraftName: sessionStorage.getItem("MinecraftName"),
        Email: sessionStorage.getItem("Email"),
        Duration: sessionStorage.getItem("Duration"),
        Position: sessionStorage.getItem("Position"),
        Nickname: sessionStorage.getItem("Nickname"),
        Motivation: sessionStorage.getItem("Motivation"),
        ClosestMember: sessionStorage.getItem("ClosestMember"),
        MemberDuration: sessionStorage.getItem("MemberDuration"),
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