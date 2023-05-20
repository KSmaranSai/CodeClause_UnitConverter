Array.from(document.getElementsByClassName("list-item")).forEach(function (element){
    element.addEventListener('click',function(key){
        let name = key.target.id;
        window.location.href = name+".html";
    })
})