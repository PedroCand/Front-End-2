const iphonesList = document.getElementById("iphones-list");
const wishlist = document.getElementById("wishlist");

function moveItem(item, fromList, toList) {
  fromList.removeChild(item);
  toList.appendChild(item);

  item.addEventListener("click", () => {
    moveItem(item, toList, fromList);
  }, { once: true });
}
document.querySelectorAll("#iphones-list li").forEach(item => {
  item.addEventListener("click", () => {
    moveItem(item, iphonesList, wishlist);
  }, { once: true });
});