
const form = document.getElementById('eventForm');
const eventList = document.getElementById('eventListContainer');
const emptyMsg = document.getElementById('emptyMsg');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const desc = document.getElementById('description').value;

    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
    
    
    eventCard.innerHTML = `
        <h3>${title}</h3>
        <small>📅 ${date} | 🏷️ ${category}</small>
        <p>${desc}</p>
        <button class="delete-btn">Delete</button>
    `;

    
    eventList.appendChild(eventCard);

    
    emptyMsg.style.display = 'none';

    
    form.reset();
});


eventList.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('delete-btn')) {
        const cardToRemove = e.target.parentElement;
        eventList.removeChild(cardToRemove);

        
        if (eventList.children.length === 1) { 
            emptyMsg.style.display = 'block';
        }
    }
});
