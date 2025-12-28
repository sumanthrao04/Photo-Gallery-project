// gallery backed by localStorage, no backend required
const STORE_KEY = 'photoGallery_v1';
const defaultPhotos = [
  {id: '1', src: 'https://via.placeholder.com/600x400?text=Photo+1', title:'', desc:''},
  {id: '2', src: 'https://via.placeholder.com/600x400?text=Photo+2', title:'', desc:''},
  {id: '3', src: 'https://via.placeholder.com/600x400?text=Photo+3', title:'', desc:''}
];

function ensureAuthed(){
  const s = sessionStorage.getItem('photoUser');
  if(!s) location.href = 'index.html';
}

function loadStore(){
  let raw = localStorage.getItem(STORE_KEY);
  if(!raw){
    localStorage.setItem(STORE_KEY, JSON.stringify(defaultPhotos));
    return defaultPhotos.slice();
  }
  try{ return JSON.parse(raw) }catch(e){ localStorage.setItem(STORE_KEY, JSON.stringify(defaultPhotos)); return defaultPhotos.slice() }
}

function saveStore(arr){ localStorage.setItem(STORE_KEY, JSON.stringify(arr)); }

function render(){
  const grid = document.getElementById('grid'); grid.innerHTML = '';
  const photos = loadStore();
  const tpl = document.getElementById('cardTpl');
  photos.forEach(p => {
    const el = tpl.content.firstElementChild.cloneNode(true);
    el.querySelector('.photo').src = p.src;
    el.querySelector('.photo').alt = p.title || 'photo';
    el.querySelector('.title-input').value = p.title || '';
    el.querySelector('.desc-input').value = p.desc || '';

    // clicking front flips by toggling class
    el.querySelector('.flip-front').addEventListener('click', ()=>{
      const inner = el.querySelector('.flip-inner');
      inner.style.transform = 'rotateY(180deg)';
    });
    // clicking save
    el.querySelector('.save-btn').addEventListener('click', ()=>{
      p.title = el.querySelector('.title-input').value;
      p.desc = el.querySelector('.desc-input').value;
      saveStore(photos);
      // flip back
      const inner = el.querySelector('.flip-inner');
      inner.style.transform = '';
    });
    el.querySelector('.delete-btn').addEventListener('click', ()=>{
      const idx = photos.findIndex(x=>x.id===p.id);
      if(idx>-1){ photos.splice(idx,1); saveStore(photos); render(); }
    });

    grid.appendChild(el);
  });
}

function addImagePrompt(){
  const url = prompt('Enter image URL (can be a Google Drive direct image link or an HTTP link)');
  if(!url) return;
  const photos = loadStore();
  const id = Date.now().toString();
  photos.unshift({id,src:url,title:'',desc:''});
  saveStore(photos); render();
}

// wire up
ensureAuthed();
render();

document.getElementById('addImage').addEventListener('click', addImagePrompt);
document.getElementById('backBirthday').addEventListener('click', ()=> location.href = 'birthday.html');
document.getElementById('next').addEventListener('click', () => {
  location.href = 'friends-gallery.html';
});
