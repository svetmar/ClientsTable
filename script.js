(() => {
    let table = document.querySelector('table');
    let tableBody = document.querySelector('tbody');
    let fioDownSort = document.getElementById('fio-down');
    let fioUpSort = document.getElementById('fio-up');
    let idDownSort = document.getElementById('id-down');
    let idUpSort = document.getElementById('id-up');
    let createdUpSort = document.getElementById('created-up');
    let createdDownSort = document.getElementById('created-down');
    let updatedUpSort = document.getElementById('updated-up');
    let updatedDownSort = document.getElementById('updated-down');
    let mainInput = document.getElementById('main-input');
    let addButton = document.querySelector('.add-button');
    let addPopupWindow = document.querySelector('.popup_add');
    let closeAddPopupWindow = document.querySelector('.popup_add_close');
    let cancelAddPopupWindow = document.querySelector('.add-client-cancel');
    let formAddPopupWindow = document.querySelector('.popup__form');
    let addedClientsSurname = document.getElementById('input-add-surname');
    let addedClientsName = document.getElementById('input-add-name');
    let addedClientsLastname = document.getElementById('input-add-lastname');
    let contactAddPopupWindow = document.querySelector('.add-contact-button');
    let contactsFieldAddPopupWindow = document.querySelector('.contacts-wrapper');
    let deleteApprovalWindow = document.querySelector('.popup_delete-approval');
    let deleteApprovalWindowSubmitButton = document.querySelector('.delete-client-button');
    let cancelDeleteApprovalWindow = document.querySelector('.delete-client-cancel');
    let closeDeletePopupWindow = document.querySelector('.popup_deletion_close');
    let changePopupWindow =document.querySelector('.popup_change');
    let changedClientsSurname = document.getElementById('input-change-surname');
    let changedClientsName = document.getElementById('input-change-name');
    let changedClientsLastname = document.getElementById('input-change-lastname');
    let closeChangePopupWindow = document.querySelector('.popup_change_close');
    let clientDeletionChangePopup = document.querySelector('.change-client-deletion');
    let formChangePopupWindow = document.querySelector('.form_change');
    let idchangePopupWindow = document.getElementById('clientsID');
    let contactChangePopupWindow = document.querySelector('.add-contact-changeform');
    let contactsFieldChangePopupWindow = document.querySelector('.contacts-wrapper-changeform');
    let optAttributes = {
        'tel': 'Телефон',
        'additional-tel': 'Доп.телефон',
        'email': 'Email',
        'vk': 'Вконтакте',
        'facebook': 'Facebook',
        'other' : 'Другое',
    };
    
    let clientsArray = [
        {id: '1234567890',
        createdAt: '2022-08-28T13:07:29.554Z',
        updatedAt: '2023-07-17T14:01:29.554Z',
        name: 'Василий',
        surname: 'Ананасов',
        lastName: 'Васильевич',
        contacts: [
              {
                type: 'Телефон',
                value: '+71234567890'
              },
              {
                type: 'Email',
                value: 'abc@xyz.com'
              },
              {
                type: 'Вконтакте',
                value: 'https://vk.com/ananasov-thebest'
              },
              {
                type: 'Твиттер',
                value: '@sladkiy-ananas'
              },
              {
                type: 'Одноклассники',
                value: 'https://ok.ru/profile/12345678'
              },
              {
                type: 'Доп.телефон',
                value: '+79999999999'
              }
            ]
        },
        {id: '9999567111',
        createdAt: '2022-10-03T12:35:29.554Z',
        updatedAt: '2023-04-20T11:55:29.554Z',
        name: 'Гай Юлий',
        surname: 'Виноградов',
        lastName: 'Петрович',
        contacts: [
              {
                type: 'Телефон',
                value: '+71234567890'
              },
              {
                type: 'Email',
                value: 'gay@july.com'
              },
              {
                type: 'Facebook',
                value: 'https://facebook.com/cesare-the-grapes'
              }
            ]
        },
        {id: '5555678901',
        createdAt: '2021-11-04T10:12:29.554Z',
        updatedAt: '2023-02-03T09:15:29.554Z',
        name: 'Григорий',
        surname: 'Бананов',
        lastName: 'Геннадьевич',
        contacts: [
              {
                type: 'Телефон',
                value: '+79995554433'
              },
              {
                type: 'Email',
                value: 'bananoff@xyz.com'
              },
            ]
        },     
    ]

    function createClientRow(clientObj) {//создание объекта клиента = строка таблицы
        let clientTR = document.createElement('tr');

        //ячейка с ID:  
        let tdID = document.createElement('td');
        tdID.classList.add('grey-font');
        tdID.textContent = clientObj.id;
        clientTR.append(tdID);

        //ячейка с ФИО:
        let tdFIO = document.createElement('td');
        tdFIO.textContent = `${clientObj.surname} ${clientObj.name} ${clientObj.lastName}`;
        clientTR.append(tdFIO);

        //ячейка с датой и временем создания:
        let tdCreated = document.createElement('td');
        let dateCreated = document.createElement('div');
        let timeCreated = document.createElement('div');
        timeCreated.classList.add('grey-font');
        if ((new Date(clientObj.createdAt)).getDate() < 10) {
            if ((new Date(clientObj.createdAt)).getMonth()+1 < 10) {
                dateCreated.textContent = `0${(new Date(clientObj.createdAt)).getDate()}.0${(new Date(clientObj.createdAt)).getMonth()+1}.${(new Date(clientObj.createdAt)).getFullYear()}`
            } else {
                dateCreated.textContent = `0${(new Date(clientObj.createdAt)).getDate()}.${(new Date(clientObj.createdAt)).getMonth()+1}.${(new Date(clientObj.createdAt)).getFullYear()}`}
            } else if ((new Date(clientObj.createdAt)).getMonth()+1 < 10) {
                dateCreated.textContent = `${(new Date(clientObj.createdAt)).getDate()}.0${(new Date(clientObj.createdAt)).getMonth()+1}.${(new Date(clientObj.createdAt)).getFullYear()}`
            } else {
                dateCreated.textContent = `${(new Date(clientObj.createdAt)).getDate()}.${(new Date(clientObj.createdAt)).getMonth()+1}.${(new Date(clientObj.createdAt)).getFullYear()}`};
            if ((new Date(clientObj.createdAt)).getHours() < 10) {
                if ((new Date(clientObj.createdAt)).getMinutes() < 10) {
                timeCreated.textContent =`0${(new Date(clientObj.createdAt)).getHours()}:0${(new Date(clientObj.createdAt)).getMinutes()}`} else {
                    timeCreated.textContent =`0${(new Date(clientObj.createdAt)).getHours()}:${(new Date(clientObj.createdAt)).getMinutes()}`
                }
            } else if ((new Date(clientObj.createdAt)).getMinutes() < 10) {
                timeCreated.textContent =`${(new Date(clientObj.createdAt)).getHours()}:0${(new Date(clientObj.createdAt)).getMinutes()}`
            } else {
                timeCreated.textContent =`${(new Date(clientObj.createdAt)).getHours()}:${(new Date(clientObj.createdAt)).getMinutes()}`
            };
        tdCreated.append(dateCreated);
        tdCreated.append(timeCreated);
        clientTR.append(tdCreated);

        //ячейка с датой и временем изменения:
        let tdUpdated = document.createElement('td');
        let dateUpdated = document.createElement('div');
        let timeUpdated = document.createElement('div');
        timeUpdated.classList.add('grey-font');
        if ((new Date(clientObj.updatedAt)).getDate() < 10) {
            if ((new Date(clientObj.updatedAt)).getMonth()+1 < 10) {
                dateUpdated.textContent = `0${(new Date(clientObj.updatedAt)).getDate()}.0${(new Date(clientObj.updatedAt)).getMonth()+1}.${(new Date(clientObj.updatedAt)).getFullYear()}`
            } else {
                dateUpdated.textContent = `0${(new Date(clientObj.updatedAt)).getDate()}.${(new Date(clientObj.updatedAt)).getMonth()+1}.${(new Date(clientObj.updatedAt)).getFullYear()}`}
            } else if ((new Date(clientObj.updatedAt)).getMonth()+1 < 10) {
                dateUpdated.textContent = `${(new Date(clientObj.updatedAt)).getDate()}.0${(new Date(clientObj.updatedAt)).getMonth()+1}.${(new Date(clientObj.updatedAt)).getFullYear()}`
            } else {
                dateUpdated.textContent = `${(new Date(clientObj.updatedAt)).getDate()}.${(new Date(clientObj.updatedAt)).getMonth()+1}.${(new Date(clientObj.updatedAt)).getFullYear()}`};
        if ((new Date(clientObj.updatedAt)).getHours() < 10) {
            if ((new Date(clientObj.updatedAt)).getMinutes() < 10) {
                timeUpdated.textContent =`0${(new Date(clientObj.updatedAt)).getHours()}:0${(new Date(clientObj.updatedAt)).getMinutes()}`
            } else {
                    timeUpdated.textContent =`0${(new Date(clientObj.updatedAt)).getHours()}:${(new Date(clientObj.updatedAt)).getMinutes()}`
                }
            } else if ((new Date(clientObj.updatedAt)).getMinutes() < 10) {
                timeUpdated.textContent =`${(new Date(clientObj.updatedAt)).getHours()}:0${(new Date(clientObj.updatedAt)).getMinutes()}`
            } else {
                timeUpdated.textContent =`${(new Date(clientObj.updatedAt)).getHours()}:${(new Date(clientObj.updatedAt)).getMinutes()}`
            };
        tdUpdated.append(dateUpdated);
        tdUpdated.append(timeUpdated);
        clientTR.append(tdUpdated);

        //ячейка с контактами:
        let tdContacts = document.createElement('td');
        let hiddenContacts = document.createElement('div');
        hiddenContacts.classList.add('hidden-contacts');
        let hiddenContactsArray = [];

        for (let i = 0; i < (clientObj.contacts).length; i++) {
            let iconContactSourse;
            switch (clientObj.contacts[i].type) {
                case 'Телефон': iconContactSourse = "./pics/phone.png"; break;
                case 'Email': iconContactSourse = "./pics/mail.png"; break;
                case 'Facebook': iconContactSourse = "./pics/fb.png"; break;
                case 'Вконтакте': iconContactSourse = "./pics/vk.png"; break;
                default: iconContactSourse = "./pics/subtract.png";
            }
            let contactItem = document.createElement('span');
            contactItem.style.marginLeft = '1px';
            contactItem.style.position = 'relative';
            let contactPic = document.createElement('img');
            contactPic.setAttribute('src', iconContactSourse);
            let toolTip = document.createElement('span');
            toolTip.classList.add('tool-tip');
            toolTip.textContent = `${clientObj.contacts[i].type}: ${clientObj.contacts[i].value}`;
            toolTip.hidden = true;
            contactItem.append(toolTip);
            contactItem.append(contactPic);

            contactItem.addEventListener('mouseover', () => {
                toolTip.hidden = false;
            })
            contactItem.addEventListener('mouseout', () => {
                toolTip.hidden = true;
            })

            if (i < 4) {
                tdContacts.append(contactItem);
            }
                         
            if (i == 4) {
                hiddenContacts.textContent = `+${1}`; 
                tdContacts.append(hiddenContacts); 
                hiddenContactsArray.push(contactItem);
            } else if (i >= 4) {
                hiddenContacts.textContent = `+${i-3}`;
                hiddenContactsArray.push(contactItem);
                }
            }
        hiddenContacts.addEventListener('click', () => {
                for (let hiddenContact of hiddenContactsArray) {
                    hiddenContacts.remove();
                    tdContacts.append(hiddenContact)
                }
            })

        clientTR.append(tdContacts);

        //ячейка с действиями:
        let tdActions = document.createElement('td');
        let changeButton = document.createElement('button');
        changeButton.classList.add('changeButton');
        let changeButtonPic = document.createElement('img');
        changeButtonPic.setAttribute('src', "./pics/edit.png");
        let changeButtonText = document.createElement('span');
        changeButtonText.textContent = 'Изменить';
        changeButton.append(changeButtonPic);
        changeButton.append(changeButtonText);
        
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        let deleteButtonPic = document.createElement('img');
        deleteButtonPic.setAttribute('src', "./pics/cancel.png");
        let deleteButtonText = document.createElement('span');
        deleteButtonText.textContent = 'Удалить';

        deleteButton.append(deleteButtonPic);
        deleteButton.append(deleteButtonText);
        tdActions.append(changeButton);
        tdActions.append(deleteButton);
        clientTR.append(tdActions);

        changeButton.addEventListener('click', () => {//открытие окна "изменения клиента"
            changePopupWindow.classList.add('open');//открываем модальное окно
            idchangePopupWindow.textContent = clientObj.id;//заполняем форму из массива - id
            changedClientsSurname.value = clientObj.surname;//заполняем форму из массива - фамилия
            changedClientsName.value = clientObj.name;//заполняем форму из массива - имя
            changedClientsLastname.value = clientObj.lastName;//заполняем форму из массива - отчество

            if (clientObj.contacts.length > 0) {//загрузка имеющихся контактов
                for (let contact of clientObj.contacts) {
                    addContactField('change-contact-field', contactsFieldChangePopupWindow, contactChangePopupWindow, contact);
                }
            }

            closeChangePopupWindow.onclick = function() {//нажатие на крестик в форме - закрываем окно
                changePopupWindow.classList.remove('open');
                clearContactsWrapper(contactsFieldChangePopupWindow);//удаляем блоки с контактами
            };

            clientDeletionChangePopup.onclick = function() {//нажатие на "удалить клиента" в форме - удаляем клиента и закрываем окно
                changePopupWindow.classList.remove('open');
                clearContactsWrapper(contactsFieldChangePopupWindow);//удаляем блоки с контактами
                clientTR.remove();
            };
            
            formChangePopupWindow.addEventListener('submit', (e) => {//отправка формы "изменение клиента"
                e.preventDefault();
                let enteredContacts = addEnteredContacts('change-contact-field');
                for (let client of clientsArray) {
                    if (client.id == idchangePopupWindow.textContent) {
                        client.surname = changedClientsSurname.value;//записываем в массив инфо из инпута формы
                        client.name = changedClientsName.value;//записываем в массив инфо из инпута формы
                        client.lastName = changedClientsLastname.value;//записываем в массив инфо из инпута формы
                        client.updatedAt = new Date();
                        if (enteredContacts.length > 0) {client.contacts = [];
                            for (let newContact of enteredContacts) {
                                client.contacts.push(newContact)
                            }
                        };
                    }
                }
                
                changePopupWindow.classList.remove('open');//закрываем окно
                clearContactsWrapper(contactsFieldChangePopupWindow);//удаляем блоки с контактами
                createClientTable(clientsArray);//переписывываем таблицу с учётом нового массива
            })
        });

        deleteButton.addEventListener('click', () => {//окно удаления клиента
            deleteApprovalWindow.classList.add('open');

            deleteApprovalWindowSubmitButton.onclick = function() {
            deleteApprovalWindow.classList.remove('open'); clientTR.remove()};

            cancelDeleteApprovalWindow.onclick = function() {deleteApprovalWindow.classList.remove('open')};
            closeDeletePopupWindow.onclick = function() {deleteApprovalWindow.classList.remove('open')};
                 
        });

        return {clientTR, changeButton, deleteButton};
    }

    function createClientTable(arr) {//перерисовка тела таблицы с информацией о клиентах
        while (tableBody.firstChild) {
            tableBody.firstChild.remove()
        }

        for (let clientObj of arr) {
            let clientRow = createClientRow(clientObj);
            tableBody.append(clientRow.clientTR);
        }
    }

    function sortRenderAscend(array, property) {//сортировка по возрастанию А-Я:
        let sortedArr = array.sort(function(a, b) {
        if (a[property] < b[property]) {
                return -1
            } else if (a[property] == b[property]) {
                    return 0
                } else {return 1}
        });

        createClientTable(sortedArr);
    }
    
    function sortRenderDescend(array, property) {//сортировка по убыванию Я-А:
        let sortedArr = array.sort(function(a, b) {
        if (a[property] < b[property]) {
                return 1
            } else if (a[property] == b[property]) {
                    return 0
                } else {return -1}
        });

        createClientTable(sortedArr);
    }

    function sortRenderDescendDate(array, property) {//дата-сортировка в убывающем порядке
        let sortedArr = array.sort(function(a, b) {
            if ((new Date(a[property]).getFullYear()) > (new Date(b[property]).getFullYear())) {
                    return -1
                } else if ((new Date(a[property]).getFullYear()) == (new Date(b[property]).getFullYear())) {
                    if ((new Date(a[property]).getMonth()) > (new Date(b[property]).getMonth())) {
                        return -1
                    } else if ((new Date(a[property]).getMonth()) == (new Date(b[property]).getMonth())) {
                        if ((new Date(a[property]).getDate()) > (new Date(b[property]).getDate())) {
                            return -1
                        } else if ((new Date(a[property]).getDate()) == (new Date(b[property]).getDate())) {
                            return 0
                        } else {return 1}
                    } else {
                        return 1
                    }
                    } 
            }
            );
        
        createClientTable(sortedArr);
    }
    
    function sortRenderAscendDate(array, property) {//дата-сортировка в возрастающем порядке
        let sortedArr = array.sort(function(a, b) {
            if ((new Date(a[property]).getFullYear()) < (new Date(b[property]).getFullYear())) {
                    return -1
                } else if ((new Date(a[property]).getFullYear()) == (new Date(b[property]).getFullYear())) {
                    if ((new Date(a[property]).getMonth()) < (new Date(b[property]).getMonth())) {
                        return -1
                    } else if ((new Date(a[property]).getMonth()) == (new Date(b[property]).getMonth())) {
                        if ((new Date(a[property]).getDate()) < (new Date(b[property]).getDate())) {
                            return -1
                        } else if ((new Date(a[property]).getDate()) == (new Date(b[property]).getDate())) {
                            return 0
                        } else {return 1}
                    } else {
                        return 1
                    }
                    } 
            }
            );

        createClientTable(sortedArr);
    }

    function filterRenderByInput(array, value) {//сортировка и перерисовка таблицы
        let filteredrray = [];
        for (let item of array) {//если введённое значение совпадает с данными id или фио из таблицы - сортируем её
        if (((item['id']).includes(value))||((item['name']).includes(value))||((item['surname']).includes(value))||((item['lastName']).includes(value))||((item['name']).toLowerCase().includes(value))||((item['surname']).toLowerCase().includes(value))||((item['lastName']).toLowerCase().includes(value))) {
            filteredrray.push(item)
        }
        }
        
        createClientTable(filteredrray);
    }
    
    function addContactField(fieldClass, wrapper, addContactButton, contactValues = null) {//добавление поля для ввода контакта
        let contactField = document.createElement('div');//создание общего div
            contactField.classList.add(fieldClass);
            
            let selectorContactType = document.createElement('select');//создание select и options
            selectorContactType.classList.add('type-of-contact');
            let selectedOption = false; let defaultOption;
            for (let opt in optAttributes) {
                let option = document.createElement('option');
                option.setAttribute('value', opt);
                option.textContent = optAttributes[opt];
                selectorContactType.append(option);
                if (contactValues != null) {
                    if (optAttributes[opt] == contactValues.type) {option.setAttribute('selected', 'selected'); selectedOption = true};
                    if (optAttributes[opt] == 'Другое') {defaultOption = option}
                };
            }
            if (contactValues != null) {
                if (!selectedOption) {defaultOption.setAttribute('selected', 'selected')};
            };
            let input = document.createElement('input');//создание input
            input.classList.add('contact-input');
            input.setAttribute('placeholder', ' Введите данные контакта');
            let button = document.createElement('button');
            button.classList.add('contact-button');
            let buttonImg = document.createElement('img');
            buttonImg.setAttribute('src', "./pics/cancel-black.png");
            if (contactValues != null) {
                input.value = contactValues.value;
            };
            button.append(buttonImg);
            contactField.append(selectorContactType);
            contactField.append(input);
            contactField.append(button);
            wrapper.prepend(contactField);

            button.addEventListener('click', () => {
                contactField.remove();
            });
            
            if ((document.getElementsByClassName(fieldClass)).length == 10) {addContactButton.remove()};
    }

    function clearAddClientForm() {//очистка полей popup-формы
        addedClientsName.value = '';
        addedClientsSurname.value = '';
        addedClientsLastname.value = '';
        clearContactsWrapper(contactsFieldAddPopupWindow);
    }

    function clearContactsWrapper(wrapper) {//очистка блоков с контактами popup-формы
        while (wrapper.firstElementChild.nextElementSibling) {
            wrapper.firstElementChild.remove()
        }
    }

    function addEnteredContacts(fieldsClass) {//сбор контактов, которые введены в форму
        let contactsArray = [];
        let contactsFromForm = document.getElementsByClassName(fieldsClass);
        if (contactsFromForm.length > 0) {
            for (let i = 0; i < contactsFromForm.length; i++) {
                if (contactsFromForm[i].firstElementChild.nextElementSibling.value != '') {//отсеиваем контакты, значения которых не введены
                    let contactsObj = {
                        type: optAttributes[contactsFromForm[i].firstElementChild.value],
                        value: contactsFromForm[i].firstElementChild.nextElementSibling.value,
                        };
                        contactsArray.push(contactsObj);
                }
            };
            
        };
        return contactsArray;
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        createClientTable(clientsArray);
        
        fioDownSort.addEventListener('click', () => {//ФИО - сортировка по возрастанию А-Я:
            fioDownSort.classList.toggle('hidden');
            fioUpSort.classList.toggle('hidden');
            sortRenderAscend(clientsArray, 'surname');        
        });

        fioUpSort.addEventListener('click', () => {//ФИО - сортировка по убыванию Я-А:
            fioDownSort.classList.toggle('hidden');
            fioUpSort.classList.toggle('hidden');
            sortRenderDescend(clientsArray, 'surname');      
        });

        idDownSort.addEventListener('click', () => {//ID - сортировка по возрастанию 1-9:
            idDownSort.classList.toggle('hidden');
            idUpSort.classList.toggle('hidden');
            sortRenderAscend(clientsArray, 'id');        
        });

        idUpSort.addEventListener('click', () => {//ID - сортировка по возрастанию 9-1:
            idDownSort.classList.toggle('hidden');
            idUpSort.classList.toggle('hidden');
            sortRenderDescend(clientsArray, 'id');        
        });

        createdUpSort.addEventListener('click', () => {//создано - сортировка по возрастанию 1-9:
            createdDownSort.classList.toggle('hidden');
            createdUpSort.classList.toggle('hidden');
            sortRenderDescendDate(clientsArray, 'createdAt');        
        });

        createdDownSort.addEventListener('click', () => {//создано - сортировка по убыванию 9-1:
            createdDownSort.classList.toggle('hidden');
            createdUpSort.classList.toggle('hidden');
            sortRenderAscendDate(clientsArray, 'createdAt');        
        });

        updatedUpSort.addEventListener('click', () => {//изменено - сортировка по возрастанию 1-9:
            updatedDownSort.classList.toggle('hidden');
            updatedUpSort.classList.toggle('hidden');
            sortRenderDescendDate(clientsArray, 'updatedAt');        
        });

        updatedDownSort.addEventListener('click', () => {//изменено - сортировка по убыванию 9-1:
            updatedDownSort.classList.toggle('hidden');
            updatedUpSort.classList.toggle('hidden');
            sortRenderAscendDate(clientsArray, 'updatedAt');        
        });

        mainInput.addEventListener('input', () => {//поиск в таблице через строку поиска
            let waitingForInput = null;
            clearTimeout(waitingForInput);
            waitingForInput = setTimeout(() => {filterRenderByInput(clientsArray, mainInput.value)}, 1000);
        });
        
        addButton.addEventListener('click', () => {//нажатие на кнопку "добавить клиента"
            addPopupWindow.classList.add('open');
        });

        closeAddPopupWindow.addEventListener('click', () => {//нажатие на Х в форме добавления нового клиента
            clearAddClientForm();
            addPopupWindow.classList.remove('open');
        })

        cancelAddPopupWindow.addEventListener('click', () => {//нажатие "отмена" в форме добавления нового клиента
            clearAddClientForm();
            addPopupWindow.classList.remove('open');
        })

        formAddPopupWindow.addEventListener('submit', (e) => {//добавление нового клиента через модальное окно = отправка формы
            e.preventDefault();
            let enteredContacts = addEnteredContacts('add-contact-field');
            clearContactsWrapper(contactAddPopupWindow);
            
            let addedClientObj = {
                id: String(Math.round(Math.random()*10000000000)),
                createdAt: new Date(),
                updatedAt: new Date(),
                name: addedClientsName.value,
                surname: addedClientsSurname.value,
                lastName: addedClientsLastname.value,
                contacts: enteredContacts,
            };
            clientsArray.push(addedClientObj);
            createClientTable(clientsArray);
            clearAddClientForm();
            addPopupWindow.classList.remove('open');
        })

        contactAddPopupWindow.addEventListener('click', () => {//появление поля для добавления контакта(модальное окно "новый клиент")
            addContactField('add-contact-field', contactsFieldAddPopupWindow, contactAddPopupWindow);
        });

        contactChangePopupWindow.addEventListener('click', () => {//появление поля для добавления контакта(модальное окно "изменение данных")
            addContactField('change-contact-field', contactsFieldChangePopupWindow, contactChangePopupWindow);
        });
    });
  
}) ()