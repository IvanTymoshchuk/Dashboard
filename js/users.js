const colection = [
  {
    name: "Jane Cooper",
    comp: "Microsoft",
    number: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "active",
  },
  {
    name: "Floyd Miles",
    comp: "Yahoo",
    number: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "inactive",
  },
  {
    name: "Ronald Richards",
    comp: "Adobe",
    number: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "inactive",
  },
  {
    name: "Marvin McKinney",
    comp: "Tesla",
    number: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "active",
  },
  {
    name: "Jerome Bell",
    comp: "Google",
    number: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "active",
  },
  {
    name: "Kathryn Murphy",
    comp: "Microsoft",
    number: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "active",
  },
  {
    name: "Jacob Jones",
    comp: "Yahoo",
    number: "jacob@yahoo.com",
    email: "jane@microsoft.com",
    country: "Brazil",
    status: "active",
  },
  {
    name: "Kristin Watson",
    comp: "Facebook",
    number: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "inactive",
  },
  {
    name: "Jane Cooper",
    comp: "Microsoft",
    number: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "active",
  },
  {
    name: "Floyd Miles",
    comp: "Yahoo",
    number: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "inactive",
  },
  {
    name: "Ronald Richards",
    comp: "Adobe",
    number: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "inactive",
  },
  {
    name: "Marvin McKinney",
    comp: "Tesla",
    number: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "active",
  },
  {
    name: "Jerome Bell",
    comp: "Google",
    number: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "active",
  },
  {
    name: "Kathryn Murphy",
    comp: "Microsoft",
    number: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "active",
  },
  {
    name: "Jacob Jones",
    comp: "Yahoo",
    number: "jacob@yahoo.com",
    email: "jane@microsoft.com",
    country: "Brazil",
    status: "active",
  },
  {
    name: "Kristin Watson",
    comp: "Facebook",
    number: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "inactive",
  },
  {
    name: "Jane Cooper",
    comp: "Microsoft",
    number: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "active",
  },
  {
    name: "Floyd Miles",
    comp: "Yahoo",
    number: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "inactive",
  },
  {
    name: "Ronald Richards",
    comp: "Adobe",
    number: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "inactive",
  },
  {
    name: "Marvin McKinney",
    comp: "Tesla",
    number: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "active",
  },
  {
    name: "Jerome Bell",
    comp: "Google",
    number: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "active",
  },
  {
    name: "Kathryn Murphy",
    comp: "Microsoft",
    number: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "active",
  },
  {
    name: "Jacob Jones",
    comp: "Yahoo",
    number: "jacob@yahoo.com",
    email: "jane@microsoft.com",
    country: "Brazil",
    status: "active",
  },
  {
    name: "Kristin Watson",
    comp: "Facebook",
    number: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "inactive",
  },
  {
    name: "Jane Cooper",
    comp: "Microsoft",
    number: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "active",
  },
  {
    name: "Floyd Miles",
    comp: "Yahoo",
    number: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "inactive",
  },
  {
    name: "Ronald Richards",
    comp: "Adobe",
    number: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "inactive",
  },
  {
    name: "Marvin McKinney",
    comp: "Tesla",
    number: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "active",
  },
  {
    name: "Jerome Bell",
    comp: "Google",
    number: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "active",
  },
  {
    name: "Kathryn Murphy",
    comp: "Microsoft",
    number: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "active",
  },
  {
    name: "Jacob Jones",
    comp: "Yahoo",
    number: "jacob@yahoo.com",
    email: "jane@microsoft.com",
    country: "Brazil",
    status: "active",
  },
  {
    name: "Kristin Watson",
    comp: "Facebook",
    number: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "inactive",
  },
];

const itemsPerPage = 8;
const currentPage = 1;
let pagination = new tui.Pagination("pagination", {
  totalItems: 50,
  itemsPerPage: 8,
  visiblePages: 5,
});

const colectionEl = document.querySelector(".tbody");
const paginationEl = document.querySelector(".pagination");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createColection(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentColection = colection.slice(startIndex, endIndex);

  colectionEl.innerHTML = currentColection
    .map(({ name, comp, number, email, country, status }) => {
      return `  
      <tr>
        <td>
          <p>${name}</p>
        </td>
        <td>${comp}</td>
        <td>${number}</td>
        <td>${email}</td>
        <td>${country}</td>
        <td><span class="status ${status}">${capitalizeFirstLetter(
        status
      )}</span></td>
      </tr>`;
    })
    .join("");
}

function createPagination() {
  pagination.on("beforeMove", (eventData) => {
    createColection(eventData.page);
  });
}

createColection(currentPage);
createPagination();
