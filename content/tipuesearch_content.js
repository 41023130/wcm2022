var tipuesearch = {"pages": [{'title': 'First', 'text': '1', 'tags': '', 'url': 'First.html'}, {'title': '建立倉儲', 'text': '建立並登錄 GitHub 帳號 \n (Create a new repository from cp2021_hw) \n Repository name 填上cp2021_hw(任取) \n 點下Create repository from\xa0template\xa0 \n 跑出頁面後複製上方的網址 \n 打開可攜系統的cmd(黑色背景) \n 輸入cd tmp 按下enter 不用我講吧 \n 輸入git clone --recurse-submodules \xa0 https://github.com/不是用我的 ( 複製的網址 ).git( .git記得加 ) \n ( git clone - 克隆遠端數據庫 ) \n 拉東西到資料夾 \n 下載完後輸入cd cp2021_hw \n 並設定完 Personal access tokensg \n 輸入acp就完成了 \n \n 輸入pip install pyopenssl (To install pyOpenSSL) \n 輸入cms \n 複製上面出現的網址並貼在網頁上面(https://127.0.0.1:9448) \n 密碼為 admin \n 即可修改近端 \n 修改完畢後點選generate_pages,將頁面改成靜態 \n \n 開另一個cmd(黑色頁面) \n 輸入cd tmp\\cp2021 \n 輸入git config --global user.email "(Your gmail)" \n 輸入git config --global user.name "(Your Name)" \n 並設定完 Personal access tokensg \n 輸入acp "(任意)" \n 到github倉儲下的 Settings \n 並點選 Pages \n 將Source 改成 main並Save \n 即可將改版資料推上遠端 \n', 'tags': '', 'url': '建立倉儲.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'tetris', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'tetris.html'}, {'title': 'w14', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'final', 'text': '/downloads/Final.pdf \n \n', 'tags': '', 'url': 'final.html'}, {'title': 'w17', 'text': 'https://youtu.be/QBDDX7h5SV8 \xa0 \n \n \n', 'tags': '', 'url': 'w17.html'}, {'title': '期末任務1', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 製作心得 : 剛開始在製作時，完全不懂，所以我去參24號同學的程式，一行一行去比對， 發現多了ctx.translate(0,canvas.height)和ctx.scale(1,-1)，雖然剛開始不了解為什麼這兩行 可以讓整個程式倒轉，但後來上網google後，發現一個是改變程式的原點，另一個是顛倒Y軸 正負值，所以才可以導致整個程式倒轉。 \n 利用scale()，我們可以建立著名的笛卡兒座標系；執行translate(0,canvas.height)先移動畫布原點到左下角，再執行scale(1,-1)顛倒Y軸正負值，一個笛卡兒座標系便完成了。', 'tags': '', 'url': '期末任務1.html'}, {'title': '期末任務2', 'text': '', 'tags': '', 'url': '期末任務2.html'}]};