let footer = document.querySelector(".footer");

footer.addEventListener("click", e => { 

	const matchesSelector = e.target.matches(".card :is(button.share, button.share i)");
	if (!matchesSelector) return; 
  
	/* if (!e.target.matches(".card :is(button.share, button.share i)")) return; */
  
  const btn = e.target.tagName === "BUTTON" ? e.target : e.target.parentElement;
  
  btn.parentElement.classList.toggle("share");
}, {passive: true})


// const popupMessage = document.querySelector('.author-wrap')

// const btn = document.querySelector('.share')

// const displayPopup = () => {
//   popupMessage.classList.toggle('.share')
// }

// btn.addEventListener('click', displayPopup)