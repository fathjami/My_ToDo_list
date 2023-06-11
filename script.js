const input = document.querySelector('input');
const container = document.querySelector('.container');
const list = document.querySelector('.tasks');

function creatTask(){
    let task = document.createElement('li');
    task.classList.add('task');
    let taskText = document.createElement('div');
    taskText.classList.add('task-text');
    let taskCtrl = document.createElement('div');
    taskCtrl.classList.add('task-controls');
    let checkBtn = document.createElement('button');
    let delBtn = document.createElement('button');
    checkBtn.classList.add('done');
    delBtn.classList.add('delete');
    let checkIcon = document.createElement('i');
    checkIcon.classList.add('fa-solid');
    checkIcon.classList.add('fa-check');
    let delIcon = document.createElement('i');
    delIcon = document.createElement('i');
    delIcon.classList.add('fa-solid');
    delIcon.classList.add('fa-trash');
    taskText.textContent = input.value;
    checkBtn.appendChild(checkIcon);
    delBtn.appendChild(delIcon);
    taskCtrl.appendChild(checkBtn);
    taskCtrl.appendChild(delBtn);
    task.appendChild(taskText);
    task.appendChild(taskCtrl);
    list.appendChild(task);
}

container.addEventListener('click', function (ev){

    if(ev.target.classList.contains('add')){
        if(input.value === ''){
            alert('Please enter a task');
        } else {
            creatTask();
            input.value = '';
        }
    } else if( ev.target.classList.contains('fa-check')){
        let text = ev.target.parentElement.parentElement.parentElement.firstElementChild; //targeting the task-text element
        text.classList.toggle('crossed');
    } else if (ev.target.classList.contains('fa-trash')){
        console.log(ev.target);
        ev.target.parentElement.parentElement.parentElement.remove(ev.target);
        input.value = '';
    }

});
