export const showOverlay = (element) => {
  const overlay = element.querySelector('.overlay'); // TODO: change to "> .overlay"
  overlay.classList.add('active');
  console.log('overlay: ', overlay);
};

export const hideOverlay = (element) => {
  element.querySelector('.overlay')?.classList.remove('active'); // TODO: change to "> .overlay"
};