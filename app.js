const randomUsersURI =
  "https://random-data-api.com/api/users/random_user?size=30";

const divElement = document.getElementById("showUsers");

const getRandomUsers = async () => {
  const getUserData = await fetch(randomUsersURI);
  const usersDataJSON = await getUserData.json();

  usersDataJSON.forEach((user) => {
    console.log(user);
    divElement.innerHTML += `
    <div class="rounded overflow-hidden shadow-lg">
   
      <img class="w-full" src='${user.avatar}' alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-blue-500">${user.first_name} ${user.last_name}</div>

        <p class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-base"> <strong>First Name: </strong> ${user.first_name}</p>

        <p class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-base"> <strong>Last Name: </strong> ${user.last_name}</p>

        <p class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-base"> <strong>Email: </strong> ${user.email}</p>
    </div>`;
  });
};

getRandomUsers();
