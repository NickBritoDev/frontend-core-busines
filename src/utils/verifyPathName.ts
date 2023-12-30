const verifyPathName = (): boolean => {
    const showNavigation = window.location.pathname.includes('/admin');
    return showNavigation;
};

export { verifyPathName };
