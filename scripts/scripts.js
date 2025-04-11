const vcItem = document.getElementById("/vc-prospectus");

if (vcItem) {
  vcItem.innerHTML = `<a class="group mt-2 lg:mt-0 flex items-center pr-3 py-1.5 cursor-pointer focus:outline-primary dark:focus:outline-primary-light gap-x-3 rounded-xl hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300" style="padding-left:1rem"><div class="flex-1 flex items-center space-x-2.5"><div>VC Prospectus <span class="border-b">Download</span></div></div></a>`;

  const link = vcItem.querySelector("a");
  if (link) {
    link.setAttribute("href", "../files/vc-prospectus.pdf");
    link.setAttribute("download", "VC-Prospectus.pdf");
  }
}
