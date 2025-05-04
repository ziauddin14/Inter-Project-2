import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";
import { db } from "./firebase.js";



const fullname = document.getElementById('fullname');
const fathername = document.getElementById('fathername');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const cnic = document.getElementById('cnic');
const fathercnic = document.getElementById('fathercnic');
const dob = document.getElementById('dob');
const country = document.getElementById('country');
const city = document.getElementById('city');
const course = document.getElementById('course');
const proficiency = document.getElementById('proficiency');
const gender = document.getElementById('gender');
const qualification = document.getElementById('qualification');
const laptop = document.getElementById('laptop');
const address = document.getElementById("address");
const btn = document.getElementById('btn');
const fileInput = document.getElementById('fileInput');




btn.addEventListener('click', (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
        alert("Please upload a picture.");
        return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);

    uploadBytes(storageRef, file)
        .then((snapshot) => getDownloadURL(snapshot.ref))
        .then((downloadURL) => {
            const data = {
                fullname: fullname.value,
                fathername: fathername.value,
                email: email.value,
                phone: phone.value,
                cnic: cnic.value,
                fathercnic: fathercnic.value,
                dob: dob.value,
                country: country.value,
                city: city.value,
                course: course.value,
                proficiency: proficiency.value,
                gender: gender.value,
                qualification: qualification.value,
                laptop: laptop.value,
                address: address.value,
                imageURL: downloadURL
            };

            return addDoc(collection(db, "todos"), data);
        })
        .then((docRef) => {
            alert("Form submitted successfully!");
            console.log("Document ID:", docRef.id);
        })
        .catch((err) => {
            console.error("Error submitting form:", err);
        });
});



country.addEventListener('change', updateCities);

function updateCities() {
    const country = document.getElementById('country').value;
    const citySelect = document.getElementById('city');
    let cities = [];
    if (country === 'Pakistan') {
        cities = ['Karachi', 'Lahore', 'Islamabad', 'Kashmir', 'Hyderabad', 'Multan', 'Quetta', 'Balochistan', 'Panjab'];
    } else if (country === 'India') {
        cities = ['Mumbai', 'Uttarkand', 'New Delhi', 'Bangalore', 'Pune', 'Chennai', 'Ahmedabad'];
    } else if (country === 'Bangladesh') {
        cities = ['Chittagong', 'Rajshahi', 'Bogra', 'Tangail', 'Jamalpur', 'Dhaka'];
    } else if (country === 'Afghanistan') {
        cities = ['Kabul', 'Herat', 'Jalalabad', 'Kandahar', 'Mazar-i-Sharif'];
    } else if (country === 'United States') {
        cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];
    } else if (country === 'Turkey') {
        cities = ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana', 'Gaziantep'];
    }
    citySelect.innerHTML = '<option value="">Select your city</option>';
    cities.forEach(function(city) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}
