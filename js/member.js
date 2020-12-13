

function varify() {
        var userName = document.getElementById("userName");
        var notify = document.getElementById('nameCheck');/**/ 
        userName.addEventListener('change', () => {
                var name = userName.value;
                        if (name.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) != -1){
                                notify.textContent= "";
                                return true;
                        }
                        else
                                notify.textContent= "email應為xxxx@xxx的形式";
                               

                
              
        })
}

function checkPassword(){
        var password = document.getElementById("pwd"); /*第一次輸入密碼*/
        var passCheck = document.getElementById("pwdCheck"); /*第二次輸入密碼*/
        var passMessage = document.getElementById("passCheck"); /*不同時的警訊*/
        passCheck.addEventListener('change',()=>{
                
                var pwdval = password.value;
                var pwdCheckValue = passCheck.value;
                
                if(pwdval != pwdCheckValue){
                        passMessage.textContent = "密碼輸入不一樣";
                }
                else{
                        passMessage.textContent = "";
                }
        })
        
}

function listenUploadFile() {
        var uploadb = document.getElementById("uploadb");
        var inputfile = document.getElementById('inputFile');

        uploadb.addEventListener('click', () => {

                inputfile.click()

        })

        inputfile.addEventListener('change', handleFiles)

}

function handleFiles() {
        var fileList = this.files;

        /* now you can work with the file list */
        showImg(fileList);
}

function showImg(thisimg) {
        var file = thisimg[0];

        if (window.FileReader) {
                var fr = new FileReader();
                var showimg = document.getElementById('showimg');
                fr.onloadend = (e) => {
                        showimg.src = e.target.result;
                };
                fr.readAsDataURL(file);
                var upp = document.getElementById('inputFile');
                upp.style.opacity = 0;
                showimg.style.display = 'block';
        }

}

listenUploadFile();

varify();
checkPassword();