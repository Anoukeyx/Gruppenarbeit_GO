 import { supa } from "./supabase.js";
 
const btn = document.querySelector('#registrieren');
btn.addEventListener('click', insertPerson);

async function insertPerson() {
    const first_name = document.querySelector('#first_name');
    const { data, error } = await supa.from("Person").insert([
      {
        first_name: first_name.value, 
        last_name: last_name.value, 
        birth_date: birth_date.value, 
        telefon:telefon.value,
        email_adress: email_adress.value,
        profile_picture: profile_picture.value,

      }
    ]);
    // In reality, all fields (first_name, last_name, birth_date and nationality) would be inserted via input field.
    if (data) {
      console.log('Entry was created successfully', data);
    } else {
      console.log('Error occured')
    }
  }


  document.addEventListener('DOMContentLoaded', (event) => {
    const uploadButton = document.getElementById('uploadButton');
    uploadButton.addEventListener('click', uploadPhoto);
});

async function uploadPhoto() {
    const fileInput = document.getElementById('photoInput');
    const captionInput = document.getElementById('captionInput');
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const filePath = `uploads/${file.name}`;
        const { error: uploadError } = await supa.storage.from('photos').upload(filePath, file);
        
        if (uploadError) {
            console.error('Error uploading file:', uploadError);
            return;
        }
        
        const { data, error } = await supa.from('Photos').insert([
            {
                url: filePath,
                caption: captionInput.value
            }
        ]);
        
        if (error) {
            console.error('Error saving to Photos table:', error);
        } else {
            console.log('Uploaded and saved successfully:', data);
            alert('Photo uploaded successfully!');
        }

    } else {
        console.log('No file selected.');
    }
}