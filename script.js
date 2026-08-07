const btn = document.querySelector('#contactBtn');
const title = document.querySelector('h1');

btn.addEventListener('click', () => {
    title.textContent = '반갑습니다.';
});

// 연락처 보기 → 모달 열기, 닫기 → 모달 닫기
const modal = document.querySelector('#modal');
document.querySelector('#CloseBtn')
    .addEventListener('click', () => modal.classList.remove('is-open'));
document.querySelector('#contactBtn')
    .addEventListener('click', () => modal.classList.add('is-open'));

// 배경(어두운 영역) 클릭 시 모달 닫기
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('is-open');
});

// ESC 키를 누르면 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('is-open');
});

// 다크 모드 토글 + 선택 저장
const themeToggle = document.querySelector('#themeToggle');
const themeIcon = themeToggle.querySelector('i');

function updateThemeIcon(isDark) {
    themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

updateThemeIcon(document.documentElement.classList.contains('dark'));

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
});
