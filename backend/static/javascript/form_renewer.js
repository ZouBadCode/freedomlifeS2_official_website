document.querySelector("form").addEventListener("submit", function (e) {
    // 阻止表單的默認提交行為
    e.preventDefault();

    // 獲取表單數據
    var renewer_nickname = document.getElementById("你希望被稱呼為").value;
    sessionStorage.setItem("renewer_nickname", renewer_nickname);
    renewer_submitData();
    var div = document.getElementById('form_insert');
    div.innerHTML = ''; // 清除 div 內容

    // 填充新的 HTML 文本
    div.innerHTML = `        
    <div class="form-container">
        <p>您的表單已成功向無拘生存管理系統發送<br>請先加入以下Discord群組等待審核結果<br><a href="https://discord.gg/Wu9k38Gr">https://discord.gg/Wu9k38Gr</a><br>因無拘的網站工程師代碼能力極度垃圾<br>您的表單內容資訊若有誤，系統將無法為您自動處理<br>若有任何問題，請洽0800...，痾..請洽無拘管理人玉米罐頭@corn_can</p>  
    </div>`;
});


function renewer_submitData() {
    // 從sessionStorage獲取數據
    const data = {
        dataType: "renewer",
        DiscordUsername: sessionStorage.getItem("DiscordUsername"),
        MinecraftName: sessionStorage.getItem("MinecraftName"),
        Email: sessionStorage.getItem("Email"),
        Duration: sessionStorage.getItem("Duration"),
        Position: sessionStorage.getItem("Position"),
        Renewer_nickname: sessionStorage.getItem("renewer_nickname"),
        SubmitTime: new Date().toISOString() //ISO格式
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


