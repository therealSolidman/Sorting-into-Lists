async function loadData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

let masterList = [];
window.addEventListener('load', () => {
    //load the data
    const dataFile = 'data.json';
    //let response = await fetch(dataFile);
    //if( response.ok ) {
    //    let data = await response.json();
    //    console.log( response );
    //}
    // second try
    // fetch( dataFile )
    // .then( (response) => {
    //     if( response.ok ) {
    //         let data = response.json();
    //         masterList = data;
    //         // display the data in the main list
    //         const masterDisplay = document.querySelector('#master');
    //         masterList. forEach( (item) => {
    //             let id = item.id;
    //             let name = item.name;
    //             let listItem = `<li data-id="${id}">${name}</li>`
    //             masterDisplay.insertAdjacentHTML('beforeend', listItem);
    //         })
    //     }
    // })
    //third try
    loadData( dataFile )
    .then( (data) => {
        const masterDisplay = document.querySelector('#master');
        data.forEach( (item) => {
            let id = item.id;
            let name = item.name;
            masterList.push( item );
            let listItem = `<li data-id="${id}">${name}</li>`;
            masterDisplay.insertAdjacentHTML('beforeend', listItem);
        }) 
        
    })
})
//asdasd