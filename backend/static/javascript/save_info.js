document.querySelector("form").addEventListener("submit", function (e) {
    // 阻止表單的默認提交行為
    e.preventDefault();

    // 獲取表單數據
    var discordUsername = document.getElementById("Discord使用者名稱").value;
    var minecraftName = document.getElementById("Minecraft名稱").value;
    var email = document.getElementById("email").value;
    var duration = document.querySelector('input[name="duration"]:checked').value;
    var position = document.querySelector('input[name="position"]:checked').value;

    // 將數據存儲到sessionStorage
    sessionStorage.setItem("DiscordUsername", discordUsername);
    sessionStorage.setItem("MinecraftName", minecraftName);
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("Duration", duration);
    sessionStorage.setItem("Position", position);
});
