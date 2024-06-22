document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search').value.toLowerCase();
    const paragraphs = document.querySelectorAll('.medical_Info p');
    paragraphs.forEach(p => {
        const originalText = p.textContent;
        p.innerHTML = originalText;
    });

    if (query === '') return;
    paragraphs.forEach(p => {
        const originalText = p.textContent;
        const regex = new RegExp(`(${query})`, 'gi');
        const newText = originalText.replace(regex, '<span class="highlightSearch">$1</span>');
        p.innerHTML = newText;
    });
});