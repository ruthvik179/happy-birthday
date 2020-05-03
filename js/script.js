window.onload = function() {
    document.getElementById('btn').onclick = function()
    {
        let nextPage;
        if(!document.getElementById("riddle")) {
            if(window.location.href.split("/").pop().includes("wrong")) {
                window.history.back();
            }
            return;
        }
        let answer = document.getElementById("riddle").value
        console.log(answer)
        if(window.location.href.split("/").pop().includes("amogh.html")) {
            if(answer.toLowerCase().includes("frost")) {
                nextPage = "anisha.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
            else {
                nextPage = "wrong-1.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
        }
        if(window.location.href.split("/").pop().includes("anisha.html")) {
            if(answer.toLowerCase().includes("chef") && answer.toLowerCase().includes("love")) {
                nextPage = "rima.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
            else {
                nextPage = "wrong-2.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
        }
        if(window.location.href.split("/").pop().includes("rima.html")) {
            if(answer.toLowerCase().includes("trivenians")) {
                nextPage = "sidhu.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
            else {
                nextPage = "wrong-5.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
        }
        
        if(window.location.href.split("/").pop().includes("sidhu.html")) {
            if(answer.toLowerCase().includes("clarity")) {
                nextPage = "aashish.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
            else {
                nextPage = "wrong-4.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
        }
        
        if(window.location.href.split("/").pop().includes("aashish.html")) {
            if(answer.toLowerCase().includes("pizza") && answer.toLowerCase().includes("xpress")) {
                nextPage = "narayana.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
            else {
                nextPage = "wrong-6.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
        }
        if(window.location.href.split("/").pop().includes("narayana.html")) {
            if(answer.toLowerCase().includes("merry")) {
                nextPage = "sushma.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
            else {
                nextPage = "wrong-3.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
        }
        if(window.location.href.split("/").pop().includes("sushma.html")) {
            if(answer.toLowerCase().includes("sandwich")) {
                nextPage = "final.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
            else {
                nextPage = "wrong-3.html"
                window.location.replace(window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + nextPage);
            }
        }
        
    };
  }