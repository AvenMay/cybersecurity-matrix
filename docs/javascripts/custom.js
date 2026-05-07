document.addEventListener("DOMContentLoaded", function() {
    // 找到 Material 主题中搜索框的那个放大镜图标按钮
    var searchLabel = document.querySelector('label[for="__search"]');
    
    if (searchLabel) {
        // 创建 CTF 链接元素
        var ctfLink = document.createElement('a');
        ctfLink.href = '/ctf/';  // 替换成你实际的 CTF 页面路径或外部 URL
        ctfLink.textContent = 'CTF';
        ctfLink.className = 'custom-header-link'; // 添加一个类名方便写样式
        
        // 将链接插入到搜索图标的前面
        searchLabel.parentNode.insertBefore(ctfLink, searchLabel);
    }
});