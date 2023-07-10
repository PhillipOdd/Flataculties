//initialize json database
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        const characters = data.characters;
        const items = document.querySelector('#characters');

        //creating a list for animal names
        for (let i = 0; i < characters.length; i++) {
            const animal = characters[i];
            const listItem = document.createElement('li');
            listItem.textContent = animal.name;
            items.appendChild(listItem);

            // This displays a animals details when clicked
            listItem.addEventListener('click', () => {
                animalDetails(animal);
            });
        }


        // first animal on the list
        animalDetails(characters[0]);
    })

    

// function to display the animal details
function animalDetails(animal) {



    const image = document.querySelector('#image');
    const name = document.querySelector('#name');

    // update the animal details 
    image.src = animal.image;
    name.textContent = animal.name;


    console.log(animal);
}