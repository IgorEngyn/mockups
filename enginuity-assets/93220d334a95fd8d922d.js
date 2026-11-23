const menuButton=document.querySelector('.mobile-toggle');
menuButton.addEventListener('click',()=>{const menu=document.querySelector('.nav-links');const open=menu.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));});
const contactDialog=document.getElementById('contact-dialog');
document.querySelectorAll('[data-contact]').forEach(button=>button.addEventListener('click',()=>contactDialog.showModal()));
document.querySelector('.dialog-close').addEventListener('click',()=>contactDialog.close());
contactDialog.addEventListener('click',event=>{if(event.target===contactDialog)contactDialog.close();});
document.querySelector('[data-go-form]').addEventListener('click',()=>{contactDialog.close();document.querySelector('#project-form').scrollIntoView({behavior:'smooth',block:'center'});document.querySelector('#first-name').focus({preventScroll:true});});
document.querySelector('#project-form').addEventListener('submit',event=>{event.preventDefault();const note=document.querySelector('.form-note');note.textContent='This is a design preview. Your information has not been sent. To discuss a project, use the contact links below.';note.classList.add('visible');});
