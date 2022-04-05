const draggables = document.querySelectorAll('.draggable')
const container = document.querySelector('.container')

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', (e)=> {
//         console.log('drag start is triggered');
//         e.target.className += ' trans'
//     })

//     draggable.addEventListener('dragend', (e)=> {
//         console.log('drag end is triggered');
//         e.target.className = 'container';   
//         // setTimeout(() => {
//         //     e.target.className = 'hide';
//         // }, 0);
//     })
// })


container.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

container.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'container';
});



draggables.forEach(draggable => {
    draggable.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('drag over has been triggered');
    });
    draggable.addEventListener('dragenter', () => {
        console.log('drag enter has been triggered');
    });
    draggable.addEventListener('dragleave', () => {
        console.log('drag leave has been triggered');
    });
    draggable.addEventListener('drop', (e) => {
        console.log('drop has been triggered');
        e.target.append(draggable);
});
})

