const randomUsersURI =
  "https://random-data-api.com/api/users/random_user?size=30";

const divElement = document.getElementById("showUsers");
const loadingElement = document.getElementById("loading");

loadingElement.style.display = "none";

const getRandomUsers = async () => {
  const getUserData = await fetch(randomUsersURI);
  const usersDataJSON = await getUserData.json();
  loadingElement.style.display = "";
  usersDataJSON.forEach((user) => {
    console.log(user);
    divElement.innerHTML += `
    <div class="rounded overflow-hidden shadow-lg bg-gray-600">
      <img class="w-full" src='${user.avatar}' alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-blue-500">
          ${user.first_name} ${user.last_name}
        </div>

        <p class="
          bg-gray-300
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base">
            <i class="fas fa-signature"></i>
            <strong>First Name: </strong> 
            ${user.first_name}
        </p>

        <p class="
          bg-gray-300 
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base"> 
          <i class="fas fa-signature"></i>
          <strong>Last Name: </strong> 
          ${user.last_name}
        </p>

        <p class="
          bg-gray-300 
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base"> 
          <i class="fas fa-table"></i>
          <strong>DOB: </strong>
          ${user.date_of_birth}
        </p>

        <p class="
          bg-gray-300 
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base">
          <i class="fas fa-venus-mars"></i>
          <strong>Gender: </strong>
          ${user.gender}
          </p>

        <p class="
          bg-gray-300 
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base"> 
          <i class="fas fa-envelope-open-text"></i>
          <strong>Email: </strong> 
          ${user.email}
        </p>

        <p class="
          bg-gray-300
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base"> 
          <i class="fas fa-key"></i>
          <strong>Password: </strong> 
          ${user.pasword}
        </p>

        <p class="
          bg-gray-300 
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base">
          <i class="fas fa-id-card-alt"></i>
          <strong>social_insurance_number: </strong> 
          ${user.social_insurance_number}
        </p>

        <p class="
          bg-gray-300
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base">
          <i class="fas fa-phone"></i>
          <strong>phone_number: </strong> 
          ${user.phone_number}
        </p>

        <p class="
          
          bg-gray-300
          rounded-full 
          px-3 
          py-1 
          text-sm 
          font-semibold 
          text-white-500
          mr-2 
          mb-2 
          text-base">
          <i class="fas fa-credit-card"></i>
          <strong>Credit Card: </strong> 
          ${user.credit_card.cc_number}
        </p>
    </div>`;
  });
  loadingElement.style.display = "none";
};

getRandomUsers();
