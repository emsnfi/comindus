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
                fr.onloadend = (e)=> {
                        showimg.src = e.target.result;
                };
                fr.readAsDataURL(file);
                var upp = document.getElementById('inputFile');
                upp.style.opacity = 0;
                showimg.style.display = 'block';
        }

}

listenUploadFile();