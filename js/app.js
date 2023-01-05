const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function(arrOfTasks) {
//  Самовызывающая функция. Имена переменных скрыты от глобальной области видимости
//  Передаём массив задач и работаем с ним
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // Elements UI
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  // Выбираем точечно место, куда вставим таски

  const form = document.forms['addTask'];
  // Возвращает коллекцию из всех форм, которые есть на странице.
  // Вытягиваем значение по имени
  // <form name="addTask">. Параметр name
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];
  // По имени или по id можно получить доступ к элементу



  renderAllTasks(objOfTasks);

  function renderAllTasks(tasksList) {
  //  Функция, которая выводит таски на страницу
  //  Используем фрагмент, чтобы не нагружать код, добавляя таски по отдельности
    if (!tasksList) {
      console.error('Передайте список задач!');
      return;
    }

    const fragment = document.createDocumentFragment();
    // Object.values - Массив значений
    // Вариации forEach
    // forEach(function ())
    // forEach((task) => )
    // forEach(task => )

    Object.values(tasksList).forEach(task => {
      // В итоге на каждой итерации здесь будет элемент li с содержимым для каждой задачи
      const li = listItemTemplate(task);
      fragment.appendChild(li);
      listContainer.appendChild(fragment);
    });
  }

  function listItemTemplate({_id, title, body} = {}) {
    // Получаем {_id, title, body}, значение по умолчанию - пусто
    //  Функция для создания элемента в forEach
    const li = document.createElement('li');
    li.classList.add(
        'list-group-item',
        'd-flex',
        'align-items-center',
        'flex-wrap',
        'mt-2')

    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = 'bold';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Task';
    deleteBtn.classList.add(
        'btn',
        'btn-danger',
        'ml-auto',
        'delete-btn');
    const article = document.createElement('p');
    article.textContent = body;
    article.classList.add(
        'mt-2',
        'w-100'
    );

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    // Делаем возврат, чтобы воспользоваться из функции
    return li;
  }

  function onFormSubmitHandler(e) {
  //  Обработчик для создания таски
    e.preventDefault();
  //  Чтобы страница при нажатии не перезагружалась
  }
})(tasks);










