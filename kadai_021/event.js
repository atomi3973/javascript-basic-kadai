const btn2 = document.getElementById('btn');

const textchange = () => {
    document.getElementById('text').textContent = 'ボタンをクリックしました';
}

btn2.addEventListener('click', setTimeout(textchange,2000));

