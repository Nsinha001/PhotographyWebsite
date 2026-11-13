const imageSets = {
  denver: [
    ['Match day 01', 'https://cdn.myportfolio.com/1a9b2169-0d60-4be3-82a3-a3f8a62ba08b/bacc2a27-563f-436a-8b5e-0ea56887bece_rwc_725x0x1023x1363x640.jpg?h=f8818a221fcc4305b8729bf90da8f0e3'],
    ['Match day 02', 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=85'],
    ['Match day 03', 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85']
  ],
  dt: [
    ['DT Sports TV 01', 'https://cdn.myportfolio.com/1a9b2169-0d60-4be3-82a3-a3f8a62ba08b/7270a829-0712-4d70-bab0-755ea039fdff_carw_3x4x640.jpg?h=68280078723f715713ad6e73cf38545b'],
    ['DT Sports TV 02', 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85'],
    ['DT Sports TV 03', 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=85']
  ],
  albion: [
    ['Albion SC 01', 'https://cdn.myportfolio.com/1a9b2169-0d60-4be3-82a3-a3f8a62ba08b/013b9f61-a740-428a-b955-810c6c0325f5_rwc_58x0x1595x2125x640.jpg?h=18d60e9aeca4d09e2e037d912a405013'],
    ['Albion SC 02', 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85'],
    ['Albion SC 03', 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=900&q=85']
  ],
  peak: [
    ['Peak to Peak 01', 'https://cdn.myportfolio.com/1a9b2169-0d60-4be3-82a3-a3f8a62ba08b/d69a6911-cc6c-47b3-9b8d-64a884833669_carw_3x4x640.jpg?h=fe88a38a18458e95f2ce9cf6116ea263'],
    ['Peak to Peak 02', 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85'],
    ['Peak to Peak 03', 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=85']
  ],
  sports: [
    ['Denver Summit FC','https://cdn.myportfolio.com/1a9b2169-0d60-4be3-82a3-a3f8a62ba08b/bacc2a27-563f-436a-8b5e-0ea56887bece_rwc_725x0x1023x1363x640.jpg?h=f8818a221fcc4305b8729bf90da8f0e3'],
    ['DT Sports TV','https://cdn.myportfolio.com/1a9b2169-0d60-4be3-82a3-a3f8a62ba08b/7270a829-0712-4d70-bab0-755ea039fdff_carw_3x4x640.jpg?h=68280078723f715713ad6e73cf38545b'],
    ['Albion SC Boulder County / Colorado','https://cdn.myportfolio.com/1a9b2169-0d60-4be3-82a3-a3f8a62ba08b/013b9f61-a740-428a-b955-810c6c0325f5_rwc_58x0x1595x2125x640.jpg?h=18d60e9aeca4d09e2e037d912a405013'],
    ['Peak to Peak Boys Soccer','https://cdn.myportfolio.com/1a9b2169-0d60-4be3-82a3-a3f8a62ba08b/d69a6911-cc6c-47b3-9b8d-64a884833669_carw_3x4x640.jpg?h=fe88a38a18458e95f2ce9cf6116ea263']
  ],
  street: [
    ['Street 01','https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=85'],['Street 02','https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85'],['Street 03','https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=85'],['Street 04','https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=85']
  ],
  aviation: [
    ['Aviation 01','https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85'],['Aviation 02','https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=900&q=85'],['Aviation 03','https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=900&q=85'],['Aviation 04','https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=900&q=85']
  ],
  theater: [
    ['Theater 01','https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85'],['Theater 02','https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85'],['Theater 03','https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=900&q=85'],['Theater 04','https://images.unsplash.com/photo-1485095329183-d0797cdc5676?auto=format&fit=crop&w=900&q=85']
  ]
};
const page = document.body.dataset.page;
let photos = (imageSets[page] || []).map(([title, src], id) => ({ id: String(id), title, src }));
const gallery = document.querySelector('#gallery');
function renderGallery() {
  if (!gallery) return;
  gallery.innerHTML = photos.map(photo => `<figure class="photo-card"><img src="${photo.src}" alt="${photo.title}" loading="lazy"><figcaption>${photo.title}</figcaption></figure>`).join('');
}
function renderOrganizer() {
  const list = document.querySelector('#organizeList');
  list.innerHTML = photos.map((photo, index) => `<div class="organize-item" draggable="true" data-id="${photo.id}"><span>⠿</span><img src="${photo.src}" alt=""><span class="name">${index + 1}. ${photo.title}</span><button class="remove-photo" data-id="${photo.id}">×</button></div>`).join('');
  list.querySelectorAll('.remove-photo').forEach(button => button.addEventListener('click', () => { photos = photos.filter(photo => photo.id !== button.dataset.id); renderGallery(); renderOrganizer(); }));
  list.querySelectorAll('.organize-item').forEach(item => {
    item.addEventListener('dragstart', () => item.classList.add('dragging'));
    item.addEventListener('dragend', () => { item.classList.remove('dragging'); photos = [...list.querySelectorAll('.organize-item')].map(row => photos.find(photo => photo.id === row.dataset.id)); renderGallery(); });
    item.addEventListener('dragover', event => { event.preventDefault(); const dragging = list.querySelector('.dragging'); if (dragging && dragging !== item) list.insertBefore(dragging, event.clientY < item.getBoundingClientRect().top + item.offsetHeight / 2 ? item : item.nextSibling); });
  });
}
if (gallery) renderGallery();
const panel = document.querySelector('#organizePanel');
if (panel) {
  const toggle = open => { panel.classList.toggle('open', open); document.querySelector('#panelBackdrop').classList.toggle('open', open); panel.setAttribute('aria-hidden', String(!open)); if (open) renderOrganizer(); };
  document.querySelector('#organizeButton').onclick = () => toggle(true); document.querySelector('#closePanel').onclick = () => toggle(false); document.querySelector('#doneButton').onclick = () => toggle(false); document.querySelector('#panelBackdrop').onclick = () => toggle(false);
  document.querySelector('#fileInput').onchange = event => [...event.target.files].forEach(file => { if (!file.type.startsWith('image/')) return; const reader = new FileReader(); reader.onload = () => { photos.push({ id: `local-${Date.now()}-${Math.random()}`, title: file.name.replace(/\.[^/.]+$/, ''), src: reader.result }); renderGallery(); renderOrganizer(); }; reader.readAsDataURL(file); });
}
