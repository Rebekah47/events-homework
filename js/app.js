document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded')

    const handleFormSubmit = function(event){
        event.preventDefault();
        const list = document.querySelector('#itemList');
        const newItem = document.createElement('ls');
        const item = document.createElement('h3');
        const price = document.createElement('h3');
        const room = document.createElement('h3')
        const catagory = document.createElement('h2');

        catagory.textContent = event.target.catagory.value
        item.textContent = `Item: ${event.target.item.value}`
        price.textContent = `Price: £${event.target.price.value}`
        room.textContent = `Room: ${event.target.room.value}`
        
        newItem.appendChild(catagory)
        newItem.appendChild(item);
        newItem.appendChild(price)
        newItem.appendChild(room)

        if(event.target.room.value === "Living Room"){
            newItem.classList.add('LIVINGROOM')
        } else if(event.target.room.value === "Kitchen"){
            newItem.classList.add('KITCHEN')
        } else if(event.target.room.value === 'Bathroom'){
            newItem.classList.add('BATHROOM')
        } else if(event.target.room.value === 'Bedrooms'){
            newItem.classList.add('BEDROOMS')
        } else if(event.target.room.value === 'Whole Flat'){
            newItem.classList.add('WHOLEFLAT')
        }

        if(event.target.catagory.value === 'Electronics'){
            newItem.classList.add('ELECTRONICS');
        } else if(event.target.catagory.value === 'Subscription'){
            newItem.classList.add('SUBSCRIPTION');
        } else if(event.target.catagory.value === 'Furniture'){
            newItem.classList.add('FURNITURE');
        } else if(event.target.catagory.value === 'Miscellaneous'){
            newItem.classList.add('MISC');
        }

        list.appendChild(newItem);
        submitForm.reset();

    };

    const submitForm = document.querySelector('#newItemEntry')
        submitForm.addEventListener('submit', handleFormSubmit);




















})