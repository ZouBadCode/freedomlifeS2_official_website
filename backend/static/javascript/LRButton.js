const words = ["玉米罐頭", "紅佑", "斕羽", "指南針CP", "伏特加", "探奇", "養羊", "雲岫", "羽落", "Y", "楓"]; // 這裡填入您想循環顯示的字詞
const textDisplay = document.getElementById("text-display");
const typingSpeed = 100; // 打字速度（毫秒）
var currentVideoId = 1;
var currentVideoIndex = 0;
var videoList = [];

document.addEventListener("DOMContentLoaded", function () {
    var colorBox = document.getElementById("display_column");
    var colors = ["#85BDE6", "#730303", "#BE95CC", "#86BF9F", "#8FDAED", "#367099"]; // 顏色序列
    var currentIndex = 0;
    var isAnimating = false;

    document.getElementById("leftButton").addEventListener("click", function () {
        if (isAnimating) return; // 如果正在動畫中，則不進行操作
        isAnimating = true;
        currentIndex = (currentIndex - 1 + colors.length) % colors.length;
        colorBox.style.backgroundColor = colors[currentIndex];
        updateText(words[currentIndex]);
        setTimeout(function () {
            isAnimating = false; // 0.5秒後啟用按鈕
        }, 700); // 設定的時長與 CSS 轉換時長相同
        changeVideo(+1);
    });

    document.getElementById("rightButton").addEventListener("click", function () {
        if (isAnimating) return; // 如果正在動畫中，則不進行操作
        isAnimating = true;
        currentIndex = (currentIndex + 1) % colors.length;
        colorBox.style.backgroundColor = colors[currentIndex];
        updateText(words[currentIndex]);

        setTimeout(function () {
            isAnimating = false; // 0.5秒後啟用按鈕
        }, 700); // 設定的時長與 CSS 轉換時長相同
        changeVideo(-1);
    });

    // 從伺服器加載影片列表
    function loadVideoList() {
        $.getJSON('/videos', function (videos) {
            videoList = videos;
            loadVideo(currentVideoIndex);
        });
    }

    function preloadVideo(index) {
        // 預加載給定索引的影片
        const videoSrc = videoList[index];
        const video = document.createElement('video');
        video.src = videoSrc;
        video.preload = 'auto';
    }

    function loadVideo(index) {
        // 加載當前影片並播放
        const videoSrc = videoList[index];
        const videoPlayer = $('#video_player')[0];
        $('#video_source').attr('src', videoSrc);
        videoPlayer.load();
        videoPlayer.muted = true; // 將影片靜音
        videoPlayer.play().catch(e => console.error("自動播放失敗: ", e));

        // 預加載前一個和後一個影片
        const prevIndex = (index - 1 + videoList.length) % videoList.length;
        preloadVideo(prevIndex);

        const nextIndex = (index + 1) % videoList.length;
        preloadVideo(nextIndex);
    }
    // 改變影片
    function changeVideo(direction) {
        currentVideoIndex = (currentVideoIndex + direction + videoList.length) % videoList.length;
        loadVideo(currentVideoIndex);
    }

    // 初始化
    $(document).ready(function () {
        loadVideoList();
        preloadVideo(videoList.length - 1); // 預加載最後一個影片
        preloadVideo(1); // 預加載第二個影片
    });


});


function updateText(newText) {
    let currentText = textDisplay.textContent;
    const removeChar = () => {
        if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            textDisplay.textContent = currentText;
            setTimeout(removeChar, typingSpeed);
        } else {
            addChar(newText);
        }
    };

    const addChar = (newText) => {
        if (currentText.length < newText.length) {
            currentText = newText.slice(0, currentText.length + 1);
            textDisplay.textContent = currentText;
            setTimeout(() => addChar(newText), typingSpeed);
        }
    };

    removeChar();
}



