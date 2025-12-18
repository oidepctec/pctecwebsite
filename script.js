const menuButton = document.getElementById('menu_button');
const sideMenu = document.getElementById('side_menu');
// 拡大表示用
  const kakudai = document.getElementById("kakudai");
  const kakudaiImg = document.getElementById("kakudai-img");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll('.sakuhin').forEach(img => {
    img.addEventListener('click', function (e) {
      e.stopPropagation();
      kakudai.classList.add('open');
      kakudaiImg.src = this.src;
    });
  });

  document.querySelectorAll('.sologo').forEach(img => {
    img.addEventListener('click', function (e) {
      e.stopPropagation();
      kakudai.classList.add('open');
      kakudaiImg.src = this.src;
    });
  });


  closeBtn.addEventListener('click', function () {
    kakudai.classList.remove('open');
  });

  kakudai.addEventListener('click', function (e) {
    if (e.target === kakudai) {
      kakudai.classList.remove('open');
    }
  });
function toggleMenu() {
  sideMenu.classList.toggle('open');
}

function closeMenu(e) {
  // メニューとボタン以外がクリックされたら閉じる
  if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
    sideMenu.classList.remove('open');
  }
}

menuButton.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);
