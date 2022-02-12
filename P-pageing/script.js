const list_items = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
    "item11",
    "item12",
    "item13",
    "item14",
    "item15",
    "item16",
    "item17",
    "item18",
    "item19",
    "item21",
    "item22",
];

const list_element = document.getElementById('list');
const pagenation_element = document.getElementById('pagenation');

let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end =  start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    console.log(paginatedItems);
    for(let i = 0; i < paginatedItems.length; i++) {
        console.log(items[i]);
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        item_element.innerText = item;

        wrapper.appendChild(item_element);
    }
}

function SetupPagination (items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows_per_page)
    for(let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);

    }

}

function PaginationButton (page,items) {
    let button = document.createElement('button');
    button.innerText = page;

    if(current_page == page) {
        button.classList.add('active');
    }
    button.addEventListener('click', function () {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });
    return button;
};

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagenation_element, rows);