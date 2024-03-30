from flask import render_template, Flask, jsonify, send_from_directory, request
import json
import os
import requests

app = Flask(__name__)
VIDEO_JSON_PATH = 'videos.json'
VIEW_PATH = 'C:/Users/User/Desktop/NOG/backend/json/view.json'

@app.route('/')
def main():
    return render_template('home.html')

def load_view_files():
    with open(VIEW_PATH, 'r') as file:
        data = json.load(file)
    return data['images']


@app.route('/image/<filename>')
def get_image(filename):
    image_directory = 'C:/Users/User/Desktop/NOG/backend/static/image'
    return send_from_directory(image_directory, filename)

@app.route('/video/<filename>')
def get_video(filename):
    image_directory = 'C:/Users/quiche/Desktop/NOG/backend/video'
    return send_from_directory(image_directory, filename)

@app.route('/videos')
def videos():
    return jsonify(load_videos())

# 讀取影片資訊
def load_videos():
    with open(VIDEO_JSON_PATH, 'r') as file:
        return json.load(file)

@app.route('/submitForm', methods=['POST'])
def submit_data():
    # 檢查請求是否有JSON數據
    if not request.json:
        return jsonify({"error": "Empty request"}), 400
    
    new_data = request.json
    datatype = new_data.get('dataType')
    
    # 確認datatype和數據存在
    if not datatype:
        return jsonify({"error": "Missing datatype"}), 400
    
    # 創建文件名和路徑
    filename = f"{datatype}.json"
    filepath = os.path.join("data", filename)
    
    # 確保目錄存在
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    
    # 如果文件已經存在，讀取原有數據並追加新數據；否則創建新列表
    if os.path.exists(filepath):
        with open(filepath, 'r') as json_file:
            try:
                data = json.load(json_file)
                if not isinstance(data, list):  # 確保原有數據是列表格式
                    data = []
            except json.JSONDecodeError:  # 處理空文件或格式錯誤
                data = []
    else:
        data = []
    
    data.append(new_data)  # 追加新數據到列表中
    
    # 將更新後的數據寫回JSON檔案
    with open(filepath, 'w') as json_file:
        json.dump(data, json_file, indent=4)

    response = requests.post('http://localhost:25566/store', json=new_data)
    
    return jsonify({"message": "Data appended successfully"}), 200




@app.route('/get-view')
def get_view_sequence():
    with open('C:/Users/User/Desktop/NOG/backend/json/view.json', encoding='utf-8') as f:
        images = json.load(f)
    return jsonify(images)

@app.route('/view/<filename>')
def get_view(filename):
    image_directory = 'C:/Users/User/Desktop/NOG/backend/static/image'
    return send_from_directory(image_directory, filename)



if __name__ == '__main__':
    app.run(host='localhost', port=25565, debug=True)
