window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-inicio',{
    duration: 1000,
    distance: '90px' 
})

revelar.reveal('.efeito-profissionais', {
    duration: 2000,
    distance: '200px',
    origin: 'left'
})

revelar.reveal('.efeito-vitrine', {
    duration: 2000,
    distance: '100px',
    delay: 250
})

revelar.reveal('.efeito-img', {
    duration: 2000,
    distance: '100px',
    origin: 'right',
    delay: 1000
})