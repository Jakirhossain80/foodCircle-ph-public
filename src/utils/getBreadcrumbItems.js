const getBreadcrumbItems = (pathname) => {
  if (pathname === "/") {
    return [{ label: "Home", href: "/", current: true }];
  }
  if (pathname.startsWith("/availablefoods")) {
    return [{ label: "Available Foods", href: "/availablefoods", current: true }];
  }
  if (pathname.startsWith("/addfood")) {
    return [
      { label: "Available Foods", href: "/availablefoods" },
      { label: "Add Food", href: "/addfood", current: true },
    ];
  }
  if (pathname.startsWith("/managemyfoods")) {
    return [{ label: "Manage My Foods", href: "/managemyfoods", current: true }];
  }
  if (pathname.startsWith("/myfoodrequest")) {
    return [{ label: "My Food Request", href: "/myfoodrequest", current: true }];
  }
  if (pathname.startsWith("/food/")) {
    return [
      { label: "Available Foods", href: "/availablefoods" },
      { label: "Food Details", href: pathname, current: true },
    ];
  }
  if (pathname.startsWith("/login")) {
    return [{ label: "Login", href: "/login", current: true }];
  }
  if (pathname.startsWith("/registration")) {
    return [{ label: "Registration", href: "/registration", current: true }];
  }
  return [{ label: "Not Found", href: "#", current: true }];
};

export default getBreadcrumbItems;
