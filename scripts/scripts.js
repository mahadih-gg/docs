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
      "https://dl.dropboxusercontent.com/scl/fi/ckrpp13wqzmmpmt7j8eq2/DafriPremier-Investor-Prospectus-For-VCs.pdf?rlkey=62fngndx5bvy9dxbg6dx6digq&st=utuzpw10"
    );
    link.setAttribute(
      "download",
      "DafriPremier™ Investor Prospectus For VCs.pdf"
    );
  }
};

const modifySidebarGetStartedItem = (element) => {
  if (!element) return;
  element.innerHTML = `<a class="group mt-2 lg:mt-0 flex items-center pr-3 py-1.5 cursor-pointer focus:outline-primary dark:focus:outline-primary-light gap-x-3 rounded-xl hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300" style="padding-left:1rem">Get Started</a>`;

  const link = element.querySelector("a");
  if (link) {
    link.setAttribute("href", "https://www.dafripremier.com/register");
  }
};

const desktopVcItem = document.querySelector(
  "#sidebar [id='\\/vc-prospectus']"
);

const desktopGetStartedItem = document.querySelector(
  "#sidebar [id='\\/get-started']"
);

if (desktopVcItem) {
  modifySidebarVcItem(desktopVcItem);
}

if (desktopGetStartedItem) {
  modifySidebarGetStartedItem(desktopGetStartedItem);
}

const menuBtn = document.querySelector(
  ".text-gray-500\\.hover\\:text-gray-600\\.dark\\:text-gray-400\\.dark\\:hover\\:text-gray-300"
);

const observer = new MutationObserver((mutations) => {
  const dialogElement = document.querySelector('[id^="headlessui-dialog"]');
  if (dialogElement) {
    const mobileVcItem = dialogElement.querySelector("[id='\\/vc-prospectus']");
    const mobileVcItemGetItem = dialogElement.querySelector(
      "[id='\\/get-started']"
    );
    if (mobileVcItem) {
      // Temporarily disconnect observer while making changes
      observer.disconnect();
      observer.disconnect();
      modifySidebarVcItem(mobileVcItem);
      modifySidebarGetStartedItem(mobileVcItemGetItem);
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

// =============== Footer ================= //
const footerItems = [
  {
    label: "Personal Account",
    prevHref: "https://dafripremier.com/personal-account/",
    href: "/personal-account",
  },
  {
    label: "Business Account",
    prevHref: "https://dafripremier.com/business-account/",
    href: "/business-account",
  },
  {
    label: "DafriCheck Out™",
    prevHref: "https://dafripremier.com/dafricheck-out/",
    href: "/dafricheck-out",
  },
  {
    label: "Send Money",
    prevHref: "https://dafripremier.com/send-money/",
    href: "/send-money",
  },
  {
    label: "Invoicing",
    prevHref: "https://dafripremier.com/invoicing/",
    href: "/invoicing",
  },
  {
    label: "MobiCash",
    prevHref: "https://dafripremier.com/mobicash/",
    href: "/mobicash",
  },
  {
    label: "DafriFX Hub",
    prevHref: "https://dafripremier.com/dafrifx-hub/",
    href: "/dafrifx-hub",
  },
];

const footerLinks = document.querySelectorAll("footer a");

footerLinks.forEach((link) => {
  const href = link.getAttribute("href");

  console.log(href);
  const footerItem = footerItems.find((item) => item.prevHref === href);
  if (footerItem) {
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.setAttribute("href", footerItem.href);
  }
});
