const sidebar = document.getElementById("sidebar");

if (sidebar && window.innerWidth < 1024) {
  sidebar.remove();
}

const modifySidebarVcItem = (element) => {
  if (!element) return;
  element.innerHTML = `<a class="group mt-2 lg:mt-0 flex items-center pr-3 py-1.5 cursor-pointer focus:outline-primary dark:focus:outline-primary-light gap-x-3 rounded-xl hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300" style="padding-left:1rem"><div class="flex-1 flex items-center space-x-2.5"><div>VC Prospectus <span class="border-b">Download</span></div></div></a>`;

  const link = element.querySelector("a");
  if (link) {
    link.setAttribute(
      "href",
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    );
    link.setAttribute("download", "VC-Prospectus.pdf");
  }
};

const desktopVcItem = document.querySelector(
  "#sidebar [id='\\/vc-prospectus']"
);

if (desktopVcItem) {
  modifySidebarVcItem(desktopVcItem);
}

const menuBtn = document.querySelector(
  ".text-gray-500\\.hover\\:text-gray-600\\.dark\\:text-gray-400\\.dark\\:hover\\:text-gray-300"
);

const observer = new MutationObserver((mutations) => {
  const dialogElement = document.querySelector('[id^="headlessui-dialog"]');
  if (dialogElement) {
    const mobileVcItem = dialogElement.querySelector("[id='\\/vc-prospectus']");
    if (mobileVcItem) {
      // Temporarily disconnect observer while making changes
      observer.disconnect();
      observer.disconnect();
      modifySidebarVcItem(mobileVcItem);
      // Reconnect observer after changes are made
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
});
